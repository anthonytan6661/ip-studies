import React, { useState, useEffect, useMemo } from 'react';
import { 
  Target, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  RotateCcw, 
  Award,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  AlertOctagon,
  Zap,
  BookOpen,
  ArrowLeft,
  Search,
  Flame,
  Check,
  Sparkles,
  Layers
} from 'lucide-react';
import { FormattedMathText } from './MathKaTeX';
import { allQuizzes, getQuizByTopicId } from '../data/quizzes';

export default function QuizMode({ lang = 'zh', theme = 'paper' }) {
  const isZh = lang === 'zh';

  // Navigation & Selection States
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [practiceMode, setPracticeMode] = useState('mastery'); // 'mastery' (20 Qs) | 'sprint' (5 Qs)
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Dashboard Filter & Search States
  const [subjectFilter, setSubjectFilter] = useState('all'); // 'all' | 'math' | 'chem'
  const [searchQuery, setSearchQuery] = useState('');

  // Persistent Topic Mastery Stats from localStorage
  const [stats, setStats] = useState(() => {
    try {
      const saved = localStorage.getItem('ip_quiz_mastery_stats');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const saveTopicResult = (topicId, scoreAchieved, total) => {
    setStats(prev => {
      const existing = prev[topicId] || { attempts: 0, bestScore: 0, total: total };
      const updated = {
        ...prev,
        [topicId]: {
          attempts: existing.attempts + 1,
          bestScore: Math.max(existing.bestScore, scoreAchieved),
          total: total,
          lastScore: scoreAchieved,
          lastDate: new Date().toLocaleDateString()
        }
      };
      try {
        localStorage.setItem('ip_quiz_mastery_stats', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save quiz stats:', err);
      }
      return updated;
    });
  };

  // Filtered topics for dashboard
  const filteredTopics = useMemo(() => {
    return allQuizzes.filter(q => {
      const matchesSubject = subjectFilter === 'all' || q.subject === subjectFilter;
      const qLower = searchQuery.toLowerCase().trim();
      const matchesSearch = !qLower || 
        q.title.toLowerCase().includes(qLower) || 
        q.topicId.toLowerCase().includes(qLower) ||
        (q.chapterRef && q.chapterRef.toLowerCase().includes(qLower));
      return matchesSubject && matchesSearch;
    });
  }, [subjectFilter, searchQuery]);

  // Start Quiz Handler
  const handleStartQuiz = (topicId, mode = 'mastery') => {
    const topicQuiz = getQuizByTopicId(topicId);
    if (!topicQuiz || !topicQuiz.questions || topicQuiz.questions.length === 0) return;

    let questionsList = [...topicQuiz.questions];
    if (mode === 'sprint') {
      // Pick 5 random questions
      questionsList = questionsList.sort(() => 0.5 - Math.random()).slice(0, 5);
    }

    setSelectedTopicId(topicId);
    setPracticeMode(mode);
    setActiveQuestions(questionsList);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowSolution(false);
    setScore(0);
    setIsFinished(false);
  };

  // Answer checking logic supporting index, letter, or direct text
  const checkIsCorrect = (idx, q) => {
    if (!q) return false;
    if (typeof q.correctAnswer === 'number') return idx === q.correctAnswer;
    const letter = String.fromCharCode(65 + idx);
    if (q.correctAnswer === letter) return true;
    if (q.options[idx] === q.correctAnswer) return true;
    if (q.options[idx]?.trim() === q.correctAnswer?.trim()) return true;
    return false;
  };

  const currentQ = activeQuestions[currentIdx];

  const handleSelectOption = (idx) => {
    if (isAnswered || !currentQ) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = checkIsCorrect(idx, currentQ);
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    // Auto-reveal worked solution immediately after submitting (especially crucial on mistakes)
    setShowSolution(true);
  };

  const handleNext = () => {
    if (currentIdx + 1 < activeQuestions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowSolution(false);
    } else {
      setIsFinished(true);
      if (selectedTopicId) {
        saveTopicResult(selectedTopicId, score + (checkIsCorrect(selectedOption, currentQ) ? 0 : 0), activeQuestions.length);
      }
    }
  };

  const handleExitToDashboard = () => {
    setSelectedTopicId(null);
    setActiveQuestions([]);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowSolution(false);
    setScore(0);
    setIsFinished(false);
  };

  const handleRestartCurrent = () => {
    if (selectedTopicId) {
      handleStartQuiz(selectedTopicId, practiceMode);
    }
  };

  // Helper to render Tier badge
  const renderTierBadge = (tier) => {
    if (tier === 1) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/50 flex items-center gap-1">
          🌱 {isZh ? 'Tier 1: 机械基础夯实' : 'Tier 1: Foundational Drill'}
        </span>
      );
    } else if (tier === 2) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-700/50 flex items-center gap-1">
          ⚖️ {isZh ? 'Tier 2: RVHS IP 校考真题' : 'Tier 2: Exam Grade'}
        </span>
      );
    } else {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-700/50 flex items-center gap-1">
          🔥 {isZh ? 'Tier 3: 压轴多步综合证明' : 'Tier 3: Advanced Synthesis'}
        </span>
      );
    }
  };

  // Helper for final answer display
  const formatFinalAnswer = (ans) => {
    if (!ans) return '';
    const trimmed = ans.trim();
    if (trimmed.startsWith('$') || trimmed.includes('$$')) return trimmed;
    return `$$${trimmed}$$`;
  };

  // Current active topic metadata
  const currentTopicQuiz = selectedTopicId ? getQuizByTopicId(selectedTopicId) : null;

  // ==========================================
  // RENDER 1: TOPIC SELECTION DASHBOARD
  // ==========================================
  if (!selectedTopicId) {
    return (
      <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
        {/* Header Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-6">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-3">
              <Target className="w-8 h-8 text-rose-600 dark:text-rose-400 shrink-0" />
              {isZh ? '分专题真题题库 · 逐题精解题库' : 'Topic-by-Topic Exam Mastery Bank'}
            </h3>
            <p className="text-sm sm:text-base opacity-75 font-mono">
              {isZh 
                ? '全17个核心专题（13大数学专题 + 4大化学支柱），共340道梯度真题与逐行代数/踩分推导' 
                : 'All 17 core topics (13 Math + 4 Pure Chem), 340 tiered questions with step-by-step KaTeX solutions'}
            </p>
          </div>

          {/* Overall Stats Pill */}
          <div className={`px-4 py-2.5 rounded-2xl border flex items-center gap-4 text-xs sm:text-sm font-mono ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-300 text-slate-800 shadow-xs'
          }`}>
            <div>
              <span className="opacity-60 block text-[10px] uppercase font-bold">{isZh ? '已收录题量' : 'Questions'}</span>
              <span className="font-extrabold text-rose-600 dark:text-rose-400 text-base sm:text-lg">340 题</span>
            </div>
            <div className="w-px h-8 bg-black/10 dark:bg-white/10" />
            <div>
              <span className="opacity-60 block text-[10px] uppercase font-bold">{isZh ? '专题总数' : 'Topics'}</span>
              <span className="font-extrabold text-blue-600 dark:text-blue-400 text-base sm:text-lg">17 个</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Subject Tabs */}
          <div className={`flex items-center gap-1 p-1 rounded-xl border self-start ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300 shadow-xs'
          }`}>
            {[
              { id: 'all', label: isZh ? '全部专题 (17)' : 'All (17)' },
              { id: 'math', label: isZh ? '数学 (13)' : 'Math (13)' },
              { id: 'chem', label: isZh ? '化学 (4)' : 'Pure Chem (4)' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSubjectFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-bold transition-all ${
                  subjectFilter === tab.id
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isZh ? '搜索专题名称、考点或章节...' : 'Search topic, keyword or chapter...'}
              className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm font-mono border focus:outline-hidden transition-all ${
                theme === 'dark' 
                  ? 'bg-slate-900 border-slate-800 focus:border-rose-500 text-slate-100' 
                  : 'bg-white border-slate-300 focus:border-rose-500 text-slate-900 shadow-xs'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono opacity-50 hover:opacity-100"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredTopics.map((topic) => {
            const topicStat = stats[topic.topicId];
            const isMath = topic.subject === 'math';
            const hasMastered = topicStat && topicStat.bestScore >= 16;
            const hasAttempted = topicStat && topicStat.attempts > 0;

            return (
              <div
                key={topic.topicId}
                className={`rounded-2xl border p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between space-y-4 hover:shadow-lg ${
                  theme === 'dark'
                    ? 'bg-[#111a2e] border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="space-y-2.5">
                  {/* Topic Tag & Ref */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                        isMath 
                          ? 'bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50' 
                          : 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50'
                      }`}>
                        {isMath ? (isZh ? '数学' : 'MATH') : (isZh ? '化学' : 'CHEM')}
                      </span>
                      <span className="text-xs font-mono opacity-60 font-semibold">
                        {topic.chapterRef}
                      </span>
                    </div>

                    {/* Status Badge */}
                    {hasMastered ? (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1 border border-emerald-300 dark:border-emerald-800">
                        <Check className="w-3 h-3" /> {isZh ? '已精通' : 'Mastered'} ({topicStat.bestScore}/{topicStat.total})
                      </span>
                    ) : hasAttempted ? (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center gap-1 border border-amber-300 dark:border-amber-800">
                        🟡 {isZh ? '已练习' : 'Attempted'} ({topicStat.bestScore}/{topicStat.total})
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        {isZh ? '未开始' : 'Not Started'}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="text-base sm:text-lg font-bold leading-snug">
                    {topic.title}
                  </h4>

                  {/* Difficulty Tier Indicator */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono opacity-75">
                    <span>🌱 T1: 6题</span>
                    <span>•</span>
                    <span>⚖️ T2: 8题</span>
                    <span>•</span>
                    <span>🔥 T3: 6题</span>
                  </div>
                </div>

                {/* Practice Mode Action Buttons */}
                <div className="pt-2 border-t border-black/5 dark:border-white/5 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleStartQuiz(topic.topicId, 'sprint')}
                    className={`py-2 px-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    {isZh ? '⚡ 5题速练 (Sprint)' : '⚡ Sprint (5 Qs)'}
                  </button>

                  <button
                    onClick={() => handleStartQuiz(topic.topicId, 'mastery')}
                    className="py-2 px-3 rounded-xl text-xs font-mono font-bold bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center gap-1.5 shadow-xs transition-all"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    {isZh ? '🎯 20题通关 (Mastery)' : '🎯 Mastery (20 Qs)'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER 2: QUIZ COMPLETION SUMMARY SCREEN
  // ==========================================
  if (isFinished) {
    const totalQ = activeQuestions.length;
    const percentage = Math.round((score / totalQ) * 100);

    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-fadeIn">
        <button
          onClick={handleExitToDashboard}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold opacity-75 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" /> {isZh ? '返回专题题库总览' : 'Back to Topic Selector'}
        </button>

        <div className={`rounded-3xl border p-8 text-center space-y-6 shadow-xl ${
          theme === 'dark' ? 'bg-[#111a2e] border-slate-800 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
        }`}>
          <div className="w-20 h-20 rounded-full bg-rose-100 dark:bg-rose-950/40 text-rose-600 border border-rose-300 dark:border-rose-500/40 flex items-center justify-center mx-auto shadow-inner">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider opacity-60">
              {currentTopicQuiz ? currentTopicQuiz.title : ''}
            </span>
            <h4 className="text-2xl sm:text-3xl font-extrabold">{isZh ? '本专题测试完成！' : 'Topic Session Completed!'}</h4>
            <p className="text-sm sm:text-base font-mono opacity-80">
              {isZh ? '总得分：' : 'Your score: '}
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-2xl sm:text-3xl mx-1">{score}</span> / <span className="font-bold text-xl">{totalQ}</span>
              <span className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-bold bg-black/5 dark:bg-white/10">
                {percentage}%
              </span>
            </p>
          </div>

          {/* Feedback Card */}
          <div className={`p-4 rounded-2xl border text-sm font-mono max-w-md mx-auto leading-relaxed ${
            theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-[#faf8f4] border-slate-300'
          }`}>
            {percentage === 100 ? (
              <span className="text-emerald-700 dark:text-emerald-400 font-bold block">
                🏆 {isZh ? '绝对精通！100%零失误突破所有考场雷区，稳居 Distinction 梯队！' : 'Flawless Mastery! 100% correct, exceptional performance!'}
              </span>
            ) : percentage >= 80 ? (
              <span className="text-blue-700 dark:text-blue-400 font-bold block">
                🌟 {isZh ? '极其出色！对核心定理与推导步骤掌握扎实，仔细复盘步骤警示即可满分！' : 'Outstanding! Strong grasp of theorems and derivations.'}
              </span>
            ) : percentage >= 60 ? (
              <span className="text-amber-700 dark:text-amber-400 font-bold block">
                ⚠️ {isZh ? '基础稳健，但在 Tier 2 与 Tier 3 的复合陷阱上有轻微扣分，建议重新挑战！' : 'Solid foundation, but watch out for Tier 2 and 3 common traps.'}
              </span>
            ) : (
              <span className="text-rose-700 dark:text-rose-400 font-bold block">
                💡 {isZh ? '重点排查专题！务必展开每题的【完整推导与常见雷区】反复推演。' : 'Review needed! Expand the worked solutions to inspect the common pitfalls.'}
              </span>
            )}
          </div>

          {/* Navigation Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleRestartCurrent}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-mono font-bold inline-flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <RotateCcw className="w-4 h-4" /> {isZh ? '重新测练此专题' : 'Retake This Topic'}
            </button>
            <button
              onClick={handleExitToDashboard}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-mono font-bold inline-flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <Layers className="w-4 h-4" /> {isZh ? '返回专题题库' : 'Choose Another Topic'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER 3: ACTIVE QUESTION CARD
  // ==========================================
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
      {/* Top Breadcrumb & Exit Button */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handleExitToDashboard}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold opacity-75 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" /> {isZh ? '专题列表' : 'Topics'}
        </button>

        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
            practiceMode === 'sprint'
              ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-300'
              : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-300'
          }`}>
            {practiceMode === 'sprint' ? (isZh ? '⚡ 5题速练' : '⚡ Sprint') : (isZh ? '🎯 20题全通关' : '🎯 20Q Mastery')}
          </span>
          <span className="text-xs font-mono opacity-60">
            {currentTopicQuiz ? currentTopicQuiz.chapterRef : ''}
          </span>
        </div>
      </div>

      {/* Main Question Container */}
      <div className={`rounded-3xl border p-6 sm:p-8 space-y-6 shadow-xl ${
        theme === 'dark' ? 'bg-[#111a2e] border-slate-800 text-slate-100' : 'bg-white border-[#ded5c3] text-[#111827]'
      }`}>
        {/* Progress header */}
        <div className="flex flex-wrap items-center justify-between border-b border-black/10 dark:border-white/10 pb-3 gap-2 text-xs sm:text-sm font-mono">
          <div className="flex items-center gap-2">
            <span className="opacity-70 font-bold">
              {isZh ? `第 ${currentIdx + 1} 题 / 共 ${activeQuestions.length} 题` : `Question ${currentIdx + 1} of ${activeQuestions.length}`}
            </span>
            {currentQ && renderTierBadge(currentQ.tier)}
          </div>
          <div className="flex items-center gap-3">
            <span className="opacity-70 font-bold">{isZh ? '得分' : 'Score'}: {score}</span>
          </div>
        </div>

        {/* Question text with KaTeX support */}
        <div className="space-y-2">
          <h4 className="text-lg sm:text-xl font-bold leading-relaxed">
            <FormattedMathText text={currentQ.questionText} />
          </h4>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((option, idx) => {
            const isThisOptionCorrect = checkIsCorrect(idx, currentQ);
            let optionClass = theme === 'dark' 
              ? "bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-100"
              : "bg-[#fbf9f4] border-[#ded5c3] hover:border-[#b8a992] text-slate-900";

            if (isAnswered) {
              if (isThisOptionCorrect) {
                optionClass = "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-600 text-emerald-900 dark:text-emerald-200 font-bold";
              } else if (idx === selectedOption) {
                optionClass = "bg-rose-50 dark:bg-rose-950/40 border-rose-600 text-rose-900 dark:text-rose-200";
              } else {
                optionClass = "opacity-40 border-transparent";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered}
                className={`w-full p-4 rounded-xl border text-left text-sm sm:text-base transition-all duration-200 flex items-start gap-3 ${optionClass}`}
              >
                <span className="w-6 h-6 rounded-lg bg-black/10 dark:bg-white/10 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1 leading-relaxed">
                  <FormattedMathText text={option} />
                </span>
                {isAnswered && isThisOptionCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                )}
                {isAnswered && idx === selectedOption && !isThisOptionCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Toggle: "💡 View Full Worked Solution" */}
        {currentQ.solution && (
          <div className="pt-2 border-t border-black/10 dark:border-white/10">
            <button
              type="button"
              onClick={() => setShowSolution(prev => !prev)}
              className={`w-full py-3 px-4 rounded-2xl border font-mono font-bold text-xs sm:text-sm flex items-center justify-between transition-all duration-200 ${
                showSolution
                  ? 'bg-amber-600 text-white border-amber-700 shadow-md'
                  : theme === 'dark'
                    ? 'bg-slate-900/90 border-slate-700 text-slate-200 hover:bg-slate-800'
                    : 'bg-amber-50/80 border-amber-200 text-amber-900 hover:bg-amber-100 shadow-xs'
              }`}
            >
              <span className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                {showSolution 
                  ? (isZh ? '💡 收起解题推导与步骤 (Hide Worked Solution)' : '💡 Hide Full Worked Solution')
                  : (isZh ? '💡 查看完整解题推导与步骤 (View Full Worked Solution)' : '💡 View Full Worked Solution')}
              </span>
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-black/10 dark:bg-white/10 font-mono">
                {showSolution ? (
                  <><ChevronUp className="w-3.5 h-3.5" /> {isZh ? '收起' : 'Hide'}</>
                ) : (
                  <><ChevronDown className="w-3.5 h-3.5" /> {isZh ? '展开' : 'Reveal'}</>
                )}
              </span>
            </button>

            {/* Collapsible Worked Solution Block */}
            {showSolution && (
              <div className={`mt-3 p-5 sm:p-6 rounded-2xl border-2 space-y-4 animate-fadeIn shadow-sm ${
                theme === 'dark' 
                  ? 'bg-slate-950/90 border-blue-500/30 text-slate-100' 
                  : 'bg-[#faf8f4] border-blue-200/90 text-slate-900'
              }`}>
                {/* Step 1: Starting Setup & Applicable Rule */}
                {currentQ.solution.formulaSetup && (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                      <span className="w-5 h-5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-xs">1</span>
                      {isZh ? '第一步：起始代数设定与适用定理 (Starting Setup & Formula)' : 'Step 1: Starting Setup & Formula'}
                    </div>
                    <div className="pl-7 text-sm sm:text-base leading-relaxed opacity-95 font-medium">
                      <FormattedMathText text={currentQ.solution.formulaSetup} />
                    </div>
                  </div>
                )}

                {/* Step 2: Full Line-by-Line Algebraic Working */}
                {currentQ.solution.steps && currentQ.solution.steps.length > 0 && (
                  <div className="space-y-2 border-t border-black/10 dark:border-white/10 pt-3">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                      <span className="w-5 h-5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-xs">2</span>
                      {isZh ? '第二步：考卷逐行代数推导与严密运算 (Line-by-Line Working)' : 'Step 2: Full Line-by-Line Algebraic Working'}
                    </div>
                    <div className="pl-7 space-y-2.5">
                      {currentQ.solution.steps.map((stepLine, sIdx) => (
                        <div key={sIdx} className="text-sm sm:text-base leading-relaxed font-mono">
                          <FormattedMathText text={stepLine} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Boxed Final Answer */}
                {currentQ.solution.finalAnswer && (
                  <div className="border-t border-black/10 dark:border-white/10 pt-3">
                    <div className="p-4 rounded-xl border-2 border-emerald-500/60 bg-emerald-50/80 dark:bg-emerald-950/40 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                        <span className="w-5 h-5 rounded-md bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 flex items-center justify-center font-bold text-xs">3</span>
                        {isZh ? '第三步：规范最终答案与增根判定 (Boxed Final Answer)' : 'Step 3: Boxed Final Answer'}
                      </div>
                      <div className="pl-7 text-sm sm:text-base font-bold text-emerald-900 dark:text-emerald-200">
                        <FormattedMathText text={formatFinalAnswer(currentQ.solution.finalAnswer)} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Callout Box: ⚠️ "Common Trap to Avoid" */}
                {currentQ.solution.commonTrap && (
                  <div className="p-4 rounded-xl border-2 border-rose-400/80 dark:border-rose-900/70 bg-rose-50/90 dark:bg-rose-950/40 space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
                      <AlertOctagon className="w-4 h-4 text-rose-600 shrink-0" />
                      {isZh ? '⚠️ 考场扣分雷区警示 (Common Trap to Avoid)' : '⚠️ Common Trap to Avoid (Where Method Marks Are Lost)'}
                    </div>
                    <p className="pl-6 text-xs sm:text-sm leading-relaxed text-rose-950 dark:text-rose-200 font-medium">
                      <FormattedMathText text={currentQ.solution.commonTrap} />
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Bottom Next Button when answered */}
        {isAnswered && (
          <div className="pt-2 flex justify-end animate-fadeIn">
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-mono font-bold transition-all shadow-md flex items-center gap-2"
            >
              {currentIdx + 1 < activeQuestions.length 
                ? (isZh ? '进入下一题 →' : 'Next Question →') 
                : (isZh ? '查看本专题成绩 →' : 'View Results →')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
