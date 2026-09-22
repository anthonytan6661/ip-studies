import React, { useState } from 'react';
import { 
  Target, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  RotateCcw, 
  Award,
  BookOpen,
  ChevronDown,
  ChevronUp,
  AlertOctagon
} from 'lucide-react';
import { FormattedMathText } from './MathKaTeX';
import { quizQuestions } from '../data/quizData';
import { quizQuestionsZh } from '../data/quizDataZh';

export default function QuizMode({ lang = 'zh', theme = 'paper' }) {
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const isZh = lang === 'zh';

  const dataset = isZh ? quizQuestionsZh : quizQuestions;

  const questions = dataset.filter(q => {
    if (subjectFilter === 'all') return true;
    return q.subject === subjectFilter;
  });

  const q = questions[currentIdx];

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === q.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowSolution(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowSolution(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <Target className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            {isZh ? '考场雷区精准排查 · 模拟闯关' : 'Spot the Trap: Interactive Exam Simulator'}
          </h3>
          <p className="text-xs sm:text-sm opacity-75 font-mono">
            {isZh ? '针对历届考卷常见扣分点与剑桥踩分关键词的专项测试' : 'RVHS Past Paper Traps & Cambridge Keyword Penalty Drills'}
          </p>
        </div>

        {/* Subject Filter Tabs */}
        {!isFinished && (
          <div className={`flex items-center gap-1.5 p-1 rounded-xl border ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300 shadow-xs'
          }`}>
            {[
              { id: 'all', label: isZh ? '全部雷区' : 'All Traps' },
              { id: 'math', label: isZh ? '数学题' : 'Math Only' },
              { id: 'chemistry', label: isZh ? '化学题' : 'Chem Only' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setSubjectFilter(tab.id);
                  handleRestart();
                }}
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
        )}
      </div>

      {isFinished ? (
        /* Results Card */
        <div className={`rounded-3xl border p-8 text-center space-y-6 shadow-xl ${
          theme === 'dark' ? 'bg-[#111a2e] border-slate-800 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
        }`}>
          <div className="w-20 h-20 rounded-full bg-rose-100 dark:bg-rose-950/40 text-rose-600 border border-rose-300 dark:border-rose-500/40 flex items-center justify-center mx-auto">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h4 className="text-2xl sm:text-3xl font-bold">{isZh ? '测验完成！' : 'Quiz Completed!'}</h4>
            <p className="text-sm sm:text-base font-mono opacity-80">
              {isZh ? '总得分：' : 'Your score: '}
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xl sm:text-2xl">{score}</span> / <span className="font-bold">{questions.length}</span>
            </p>
          </div>

          <div className={`p-4 rounded-2xl border text-sm font-mono max-w-md mx-auto ${
            theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-[#faf8f4] border-slate-300'
          }`}>
            {score === questions.length ? (
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                🏆 {isZh ? '完美通关！全卷雷区100%被你识破，稳进 Distinction 优秀战区！' : 'Outstanding! You spotted 100% of exam traps!'}
              </span>
            ) : score >= questions.length * 0.7 ? (
              <span className="text-amber-700 dark:text-amber-400 font-bold">
                👍 {isZh ? '表现非常优秀！仅差1-2个细节陷阱，复习错题即可稳拿满分！' : 'Great job! Review the few traps you missed to lock in full marks.'}
              </span>
            ) : (
              <span className="text-rose-700 dark:text-rose-400 font-bold">
                ⚠️ {isZh ? '查漏补缺好机会！建议到考纲页面重新过一遍红色高亮雷区。' : 'Review the Spot the Trap warnings in the syllabus tab.'}
              </span>
            )}
          </div>

          <button
            onClick={handleRestart}
            className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base font-bold inline-flex items-center gap-2 transition-colors shadow-md"
          >
            <RotateCcw className="w-4 h-4" /> {isZh ? '重新再测一次' : 'Retake Quiz'}
          </button>
        </div>
      ) : (
        /* Active Question Card */
        <div className={`rounded-3xl border p-6 sm:p-8 space-y-6 shadow-xl ${
          theme === 'dark' ? 'bg-[#111a2e] border-slate-800 text-slate-100' : 'bg-white border-[#ded5c3] text-[#111827]'
        }`}>
          {/* Progress header */}
          <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3 text-xs sm:text-sm font-mono">
            <span className="opacity-70 font-bold">
              {isZh ? `第 ${currentIdx + 1} 题 / 共 ${questions.length} 题` : `Question ${currentIdx + 1} of ${questions.length}`}
            </span>
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                q.subject === 'math'
                  ? 'bg-blue-600 text-white'
                  : 'bg-amber-600 text-white'
              }`}>
                {q.subject === 'math' ? (isZh ? '数学' : 'MATH') : (isZh ? '化学' : 'CHEM')} • {q.topic}
              </span>
              <span className="opacity-70 font-bold">{isZh ? '得分' : 'Score'}: {score}</span>
            </div>
          </div>

          {/* Question text with KaTeX support */}
          <div className="space-y-2">
            <h4 className="text-lg sm:text-xl font-bold leading-relaxed">
              <FormattedMathText text={q.question} />
            </h4>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {q.options.map((option, idx) => {
              let optionClass = theme === 'dark' 
                ? "bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-100"
                : "bg-[#fbf9f4] border-[#ded5c3] hover:border-[#b8a992] text-slate-900";

              if (isAnswered) {
                if (idx === q.correctAnswer) {
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
                  {isAnswered && idx === q.correctAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== q.correctAnswer && (
                    <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Collapsible "Show Worked Solution" Section */}
          {q.solution && (
            <div className="pt-2 border-t border-black/10 dark:border-white/10">
              <button
                type="button"
                onClick={() => setShowSolution(prev => !prev)}
                className={`w-full py-3 px-4 rounded-2xl border font-mono font-bold text-xs sm:text-sm flex items-center justify-between transition-all duration-200 ${
                  showSolution
                    ? 'bg-blue-600 text-white border-blue-700 shadow-md'
                    : theme === 'dark'
                      ? 'bg-slate-900/90 border-slate-700 text-slate-200 hover:bg-slate-800'
                      : 'bg-blue-50/80 border-blue-200 text-blue-900 hover:bg-blue-100 shadow-xs'
                }`}
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  {showSolution 
                    ? (isZh ? '收起完整解题步骤与推导' : 'Hide Worked Solution')
                    : (isZh ? '📝 查看完整解题步骤与推导 (Show Worked Solution)' : '📝 Show Worked Solution')}
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
                <div className={`mt-3 p-5 sm:p-6 rounded-2xl border space-y-4 animate-fadeIn shadow-sm ${
                  theme === 'dark' ? 'bg-slate-950/90 border-blue-500/30' : 'bg-[#faf8f4] border-blue-200'
                }`}>
                  {/* Step 1: Opening algebraic setup / formula */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                      <span className="w-5 h-5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-xs">1</span>
                      {isZh ? '第一步：核心公式与初始代数设定' : 'Step 1: Opening Algebraic Setup & Formula'}
                    </div>
                    <div className="pl-7 text-sm sm:text-base leading-relaxed opacity-95 font-medium">
                      <FormattedMathText text={q.solution.step1} />
                    </div>
                  </div>

                  {/* Step 2: Line-by-line working with full KaTeX formatting */}
                  <div className="space-y-2 border-t border-black/5 dark:border-white/5 pt-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                      <span className="w-5 h-5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-xs">2</span>
                      {isZh ? '第二步：考卷逐行推导与标准过程' : 'Step 2: Line-by-Line Working with Full KaTeX'}
                    </div>
                    <div className="pl-7 space-y-2">
                      {q.solution.step2.map((line, idx) => (
                        <div key={idx} className="text-sm sm:text-base leading-relaxed font-mono">
                          <FormattedMathText text={line} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Final Answer Boxed */}
                  <div className="border-t border-black/5 dark:border-white/5 pt-3">
                    <div className="p-4 rounded-xl border-2 border-emerald-500/60 bg-emerald-50/80 dark:bg-emerald-950/40 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                        <span className="w-5 h-5 rounded-md bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 flex items-center justify-center font-bold text-xs">3</span>
                        {isZh ? '第三步：规范最终答案与增根判定' : 'Step 3: Final Answer (Boxed & Validated)'}
                      </div>
                      <div className="pl-7 text-sm sm:text-base font-bold text-emerald-900 dark:text-emerald-200">
                        <FormattedMathText text={`$$${q.solution.step3}$$`} />
                      </div>
                    </div>
                  </div>

                  {/* Warning Box: Common Trap */}
                  <div className="p-4 rounded-xl border border-rose-400 dark:border-rose-900/60 bg-rose-50/90 dark:bg-rose-950/40 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
                      <AlertOctagon className="w-4 h-4 text-rose-600 shrink-0" />
                      {isZh ? '考场扣分雷区警示 (Common Trap)' : 'Common Trap: Where Method Marks Are Lost'}
                    </div>
                    <p className="pl-6 text-xs sm:text-sm leading-relaxed text-rose-900 dark:text-rose-200 font-medium">
                      <FormattedMathText text={q.solution.trap} />
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Answer Explanation & Next Button */}
          {isAnswered && (
            <div className={`p-4 sm:p-5 rounded-2xl border space-y-3 animate-fadeIn ${
              theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-[#fffaf0] border-[#ecd8b0]'
            }`}>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-400">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                {isZh ? '考官深度解析与破局策略' : "Examiner's Strategy & Feedback"}
              </div>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                <FormattedMathText text={q.explanation} />
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-mono font-bold transition-colors shadow-sm"
                >
                  {currentIdx + 1 < questions.length 
                    ? (isZh ? '进入下一道雷区 →' : 'Next Question →') 
                    : (isZh ? '查看测验结果 →' : 'View Results →')}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
