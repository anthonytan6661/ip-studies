import React, { useState } from 'react';
import { BookOpen, FlaskConical, Wrench, Layers, Target, Clock, Search, ShieldCheck, X } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, searchQuery, setSearchQuery, masteredCount, totalTopics }) {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/90 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Logo & School Branding */}
          <div 
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none" 
            onClick={() => setActiveTab('math')}
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-rv-navy-700 via-sky-600 to-rv-gold-500 p-0.5 shadow-lg shadow-sky-500/10 shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[10px] sm:rounded-[14px] flex items-center justify-center font-serif font-black text-rv-gold-400 text-sm sm:text-lg tracking-tight">
                RV
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-serif font-bold text-sm sm:text-lg tracking-wide text-slate-100">
                  RVHS IP COMMAND
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-mono uppercase font-extrabold bg-rv-gold-500/20 text-rv-gold-300 border border-rv-gold-500/30">
                  Sec 3
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono hidden sm:block">
                Math & Chemistry Personal Study Suite
              </p>
            </div>
          </div>

          {/* Desktop Search bar */}
          <div className="flex-1 max-w-xs relative hidden md:block">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics, formulas, traps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors font-mono"
            />
          </div>

          {/* Right Mobile Actions & Mastery Counter */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              title="Toggle Search"
            >
              {showMobileSearch ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
            </button>

            {/* Mastery Counter */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-[11px] sm:text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              <span className="text-slate-400 hidden xs:inline">Mastered:</span>
              <span className="text-emerald-400 font-bold">{masteredCount}/{totalTopics}</span>
            </div>
          </div>
        </div>

        {/* Mobile Search Input Bar */}
        {showMobileSearch && (
          <div className="md:hidden pb-3 pt-1">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                placeholder="Search topics, formulas, traps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 font-mono"
              />
            </div>
          </div>
        )}

        {/* Navigation Tabs (Horizontal Scrollable for Mobile & Desktop) */}
        <div className="flex items-center gap-1 overflow-x-auto py-2 border-t border-slate-900/80 scrollbar-none text-xs font-mono -mx-3 px-3 sm:mx-0 sm:px-0">
          {[
            { id: 'math', label: 'Math (13 Topics)', icon: BookOpen },
            { id: 'chemistry', label: 'Chemistry (4 Pillars)', icon: FlaskConical },
            { id: 'tools', label: 'Lab Tools', icon: Wrench },
            { id: 'flashcards', label: 'Recall Cards', icon: Layers },
            { id: 'quiz', label: 'Trap Quiz', icon: Target },
            { id: 'audit', label: 'Nightly Audit', icon: Clock },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl whitespace-nowrap font-semibold transition-all shrink-0 ${
                  isActive
                    ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-rv-gold-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
