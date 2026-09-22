import React, { useState, useEffect } from 'react';
import { Layers, ArrowLeft, ArrowRight, RotateCw, CheckCircle2, Shuffle } from 'lucide-react';
import { flashcardsData } from '../data/flashcardsData';
import { flashcardsDataZh } from '../data/flashcardsDataZh';

export default function FlashcardViewer({ lang = 'zh', theme = 'paper' }) {
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const isZh = lang === 'zh';

  const dataset = isZh ? flashcardsDataZh : flashcardsData;

  const [masteredCards, setMasteredCards] = useState(() => {
    try {
      const saved = localStorage.getItem('rvhs_mastered_flashcards');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const filteredCards = dataset.filter(card => {
    if (subjectFilter === 'all') return true;
    return card.subject === subjectFilter;
  });

  const card = filteredCards[currentIndex] || filteredCards[0];
  const isMastered = card ? masteredCards.includes(card.id) : false;

  useEffect(() => {
    try {
      localStorage.setItem('rvhs_mastered_flashcards', JSON.stringify(masteredCards));
    } catch (e) {
      console.error(e);
    }
  }, [masteredCards]);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleToggleMastered = () => {
    if (!card) return;
    if (isMastered) {
      setMasteredCards(masteredCards.filter(id => id !== card.id));
    } else {
      setMasteredCards([...masteredCards, card.id]);
    }
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setCurrentIndex(randomIndex);
  };

  if (!card) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <Layers className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            {isZh ? '高频踩分点 · 主动回忆记忆卡' : 'Active Recall Flashcard Deck'}
          </h3>
          <p className="text-xs sm:text-sm opacity-75 font-mono">
            {isZh 
              ? `全套 ${filteredCards.length} 张核心考点卡片 • 当前第 ${currentIndex + 1} / ${filteredCards.length} 张`
              : `${filteredCards.length} High-Yield Flashcards • Card ${currentIndex + 1} of ${filteredCards.length}`}
          </p>
        </div>

        {/* Subject Filter Tabs */}
        <div className={`flex items-center gap-1.5 p-1 rounded-xl border ${
          theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300 shadow-xs'
        }`}>
          {[
            { id: 'all', label: isZh ? '全部科目' : 'All' },
            { id: 'math', label: isZh ? '数学' : 'Math' },
            { id: 'chemistry', label: isZh ? '化学' : 'Chemistry' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setSubjectFilter(tab.id);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-bold transition-all ${
                subjectFilter === tab.id
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className={`w-full rounded-full h-2.5 overflow-hidden border ${
        theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-slate-200 border-slate-300'
      }`}>
        <div
          className="bg-amber-600 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / filteredCards.length) * 100}%` }}
        />
      </div>

      {/* The Flashcard */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={`min-h-[340px] rounded-3xl border shadow-xl p-6 sm:p-8 cursor-pointer flex flex-col justify-between relative group transition-all duration-300 select-none ${
          theme === 'dark'
            ? 'bg-[#111a2e] border-slate-800 hover:border-slate-700 text-slate-100'
            : theme === 'green'
              ? 'bg-white border-[#b8d4b8] hover:border-[#8cb88c] text-[#0f2419]'
              : 'bg-white border-[#d8cfbe] hover:border-[#b8a992] text-[#111827]'
        }`}
      >
        {/* Card Top Metadata */}
        <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
              card.subject === 'math'
                ? 'bg-blue-600 text-white'
                : 'bg-amber-600 text-white'
            }`}>
              {card.subject === 'math' ? (isZh ? '数学' : 'MATH') : (isZh ? '化学' : 'CHEM')}
            </span>
            <span className="text-xs sm:text-sm font-bold font-mono opacity-80">
              {isZh ? `专题：${card.topic}` : `Topic: ${card.topic}`}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleToggleMastered();
              }}
              className={`p-1.5 rounded-lg transition-colors ${
                isMastered ? 'text-emerald-600 bg-emerald-100 dark:bg-emerald-950/40' : 'opacity-40 hover:opacity-100'
              }`}
              title={isMastered ? (isZh ? '已掌握' : 'Mastered') : (isZh ? '标为掌握' : 'Mark Mastered')}
            >
              <CheckCircle2 className="w-5 h-5" />
            </button>
            <span className="text-xs opacity-60 font-mono hidden sm:inline">
              {isFlipped ? (isZh ? '点击翻回正面' : 'Click to hide') : (isZh ? '点击翻看答案' : 'Click to flip')}
            </span>
          </div>
        </div>

        {/* Main Card Content */}
        <div className="my-auto py-6 text-center">
          {!isFlipped ? (
            <div className="space-y-4">
              <span className="text-xs uppercase font-mono tracking-widest font-bold opacity-60 block">
                {isZh ? '提问 (QUESTION)' : 'QUESTION'}
              </span>
              <p className="text-xl sm:text-2xl font-bold max-w-xl mx-auto leading-relaxed">
                {card.question}
              </p>
            </div>
          ) : (
            <div className="space-y-4 animate-fadeIn">
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-700 dark:text-emerald-400 font-bold block">
                {isZh ? '采分答案与公式法则 (ANSWER)' : 'ANSWER & FORMULA'}
              </span>
              <div className="text-base sm:text-lg font-medium max-w-xl mx-auto leading-relaxed whitespace-pre-line">
                {card.answer}
              </div>
              {card.tip && (
                <div className="inline-block mt-3 px-4 py-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs sm:text-sm font-mono text-left max-w-md">
                  💡 <strong>{isZh ? '立化提分秘诀：' : 'RVHS Tip: '}</strong>{card.tip}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Card Bottom Hint */}
        <div className="flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-3 text-xs opacity-60 font-mono">
          <span>ID: {card.id}</span>
          <div className="flex items-center gap-1">
            <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
            <span>{isZh ? '轻触卡片或按空格键翻转' : 'Tap card or spacebar to flip'}</span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={handlePrev}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-sm sm:text-base font-bold transition-colors ${
            theme === 'dark' ? 'bg-slate-800 border-slate-700 text-slate-100 hover:bg-slate-700' : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-100 shadow-xs'
          }`}
        >
          <ArrowLeft className="w-4 h-4" /> {isZh ? '上一张' : 'Previous'}
        </button>

        <button
          onClick={handleShuffle}
          className={`flex items-center gap-1.5 px-4 py-3 rounded-xl border text-xs sm:text-sm font-mono font-bold transition-colors ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 shadow-xs'
          }`}
          title="随机打乱"
        >
          <Shuffle className="w-4 h-4" /> {isZh ? '随机翻牌' : 'Shuffle'}
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base font-bold shadow-md transition-all"
        >
          {isZh ? '下一张' : 'Next'} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
