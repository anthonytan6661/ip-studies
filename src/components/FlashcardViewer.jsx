import React, { useState, useEffect } from 'react';
import { Layers, ArrowLeft, ArrowRight, RotateCw, CheckCircle2, Bookmark, Shuffle, HelpCircle } from 'lucide-react';
import { flashcardsData } from '../data/flashcardsData';

export default function FlashcardViewer() {
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState(() => {
    try {
      const saved = localStorage.getItem('rvhs_mastered_flashcards');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const filteredCards = flashcardsData.filter(card => {
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
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-rv-gold-400" />
            Active Recall Flashcard Deck
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            {filteredCards.length} High-Yield Flashcards • Card {currentIndex + 1} of {filteredCards.length}
          </p>
        </div>

        {/* Subject Filter Tabs */}
        <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
          {[
            { id: 'all', label: 'All Subjects' },
            { id: 'math', label: 'Integrated Math' },
            { id: 'chemistry', label: 'Pure Chemistry' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setSubjectFilter(tab.id);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                subjectFilter === tab.id
                  ? 'bg-rv-gold-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
        <div
          className="bg-gradient-to-r from-sky-500 via-rv-gold-400 to-emerald-400 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / filteredCards.length) * 100}%` }}
        />
      </div>

      {/* The Flashcard */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="min-h-[320px] rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-slate-700 shadow-2xl p-8 cursor-pointer flex flex-col justify-between relative group transition-all duration-300 select-none"
      >
        {/* Card Top Metadata */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
              card.subject === 'math'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
            }`}>
              {card.subject === 'math' ? 'MATH' : 'CHEM'}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Topic: {card.topic}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleToggleMastered();
              }}
              className={`p-1.5 rounded-lg transition-colors ${
                isMastered ? 'text-emerald-400 bg-emerald-500/20' : 'text-slate-500 hover:text-slate-300'
              }`}
              title={isMastered ? "Mastered" : "Mark as Mastered"}
            >
              <CheckCircle2 className="w-5 h-5" />
            </button>
            <span className="text-xs text-slate-500 font-mono">
              Click to {isFlipped ? 'hide answer' : 'reveal answer'}
            </span>
          </div>
        </div>

        {/* Main Card Content */}
        <div className="my-auto py-6 text-center">
          {!isFlipped ? (
            <div className="space-y-4">
              <span className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold block">
                Question
              </span>
              <p className="text-lg md:text-xl font-bold text-slate-100 max-w-xl mx-auto leading-relaxed">
                {card.question}
              </p>
            </div>
          ) : (
            <div className="space-y-4 animate-fadeIn">
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold block">
                Answer & Key Formula
              </span>
              <div className="text-base md:text-lg font-medium text-slate-200 max-w-xl mx-auto leading-relaxed whitespace-pre-line">
                {card.answer}
              </div>
              {card.tip && (
                <div className="inline-block mt-3 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono text-left max-w-md">
                  💡 <strong>RVHS Strategy Tip:</strong> {card.tip}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Card Bottom Hint */}
        <div className="flex items-center justify-between border-t border-slate-800/80 pt-3 text-xs text-slate-500 font-mono">
          <span>Card ID: {card.id}</span>
          <div className="flex items-center gap-1 text-slate-400">
            <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
            <span>Tap spacebar or card to flip</span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Previous
        </button>

        <button
          onClick={handleShuffle}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs font-mono transition-colors"
          title="Shuffle Cards"
        >
          <Shuffle className="w-3.5 h-3.5" /> Shuffle Deck
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rv-gold-500 hover:bg-rv-gold-400 text-slate-950 text-sm font-bold shadow-lg shadow-rv-gold-500/20 transition-all"
        >
          Next Card <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
