import React, { useState } from 'react';
import { BookOpen, FlaskConical, Wrench, Layers, Target, Clock, Search, ShieldCheck, X, Eye, Type, Globe } from 'lucide-react';

export default function Navbar({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  masteredCount,
  totalTopics,
  lang,
  setLang,
  fontSize,
  setFontSize,
  theme,
  setTheme
}) {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const isZh = lang === 'zh';

  const navItems = [
    { id: 'math', label: isZh ? '数学 (13专题)' : 'Math (13 Topics)', icon: BookOpen },
    { id: 'chemistry', label: isZh ? '化学 (4大支柱)' : 'Chem (4 Pillars)', icon: FlaskConical },
    { id: 'tools', label: isZh ? '实验模拟工具' : 'Lab Tools', icon: Wrench },
    { id: 'flashcards', label: isZh ? '主动记忆卡' : 'Recall Cards', icon: Layers },
    { id: 'quiz', label: isZh ? '排坑测验' : 'Trap Quiz', icon: Target },
    { id: 'audit', label: isZh ? '每日抽查' : 'Nightly Audit', icon: Clock },
  ];

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors ${
      theme === 'dark' 
        ? 'bg-slate-950/95 border-slate-800/90 text-slate-100' 
        : theme === 'green'
          ? 'bg-[#e4efe4]/95 border-[#c4dbc4] text-[#0f2419]'
          : 'bg-[#f5f1e8]/95 border-[#dfd6c5] text-[#111827]'
    }`}>
      {/* Top Accessibility & Comfort Bar for Presbyopia (46岁长辈护眼工具条) */}
      <div className={`px-3 sm:px-6 py-2 border-b flex flex-wrap items-center justify-between gap-2 text-xs font-mono ${
        theme === 'dark'
          ? 'bg-slate-900/90 border-slate-800/70 text-slate-300'
          : theme === 'green'
            ? 'bg-[#dbeadc]/80 border-[#bcd4bd] text-[#163625]'
            : 'bg-[#ede7da]/80 border-[#ded5c3] text-[#2c3437]'
      }`}>
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span className="font-bold text-xs">
            {isZh ? '老花长辈护眼模式' : 'Presbyopia Eye-Care'}:
          </span>

          {/* Theme choices */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setTheme('paper')}
              className={`px-2.5 py-0.5 rounded-lg font-bold transition-all ${
                theme === 'paper'
                  ? 'bg-amber-700 text-white shadow-sm'
                  : 'hover:bg-black/10'
              }`}
              title="护眼羊皮纸 (Warm Paper)"
            >
              📜 {isZh ? '暖纸' : 'Paper'}
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`px-2.5 py-0.5 rounded-lg font-bold transition-all ${
                theme === 'dark'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'hover:bg-black/10'
              }`}
              title="舒适深蓝 (Comfort Navy)"
            >
              🌙 {isZh ? '深蓝' : 'Navy'}
            </button>
            <button
              onClick={() => setTheme('green')}
              className={`px-2.5 py-0.5 rounded-lg font-bold transition-all ${
                theme === 'green'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'hover:bg-black/10'
              }`}
              title="清新豆沙绿 (Soft Green)"
            >
              🍵 {isZh ? '豆沙绿' : 'Green'}
            </button>
          </div>
        </div>

        {/* Font Size & Language selector */}
        <div className="flex items-center gap-3">
          {/* Font Size */}
          <div className="flex items-center gap-1">
            <Type className="w-3.5 h-3.5 text-slate-500" />
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-0.5 rounded-md font-bold text-xs ${
                fontSize === 'normal' ? 'bg-amber-600 text-white' : 'hover:bg-black/10'
              }`}
            >
              {isZh ? '标准' : 'A'}
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-0.5 rounded-md font-bold text-xs ${
                fontSize === 'large' ? 'bg-amber-600 text-white' : 'hover:bg-black/10'
              }`}
            >
              {isZh ? '大号 A+' : 'A+'}
            </button>
            <button
              onClick={() => setFontSize('xlarge')}
              className={`px-2 py-0.5 rounded-md font-bold text-xs ${
                fontSize === 'xlarge' ? 'bg-amber-600 text-white' : 'hover:bg-black/10'
              }`}
            >
              {isZh ? '特大 A++' : 'A++'}
            </button>
          </div>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(isZh ? 'en' : 'zh')}
            className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-600/15 border border-amber-600/30 text-amber-900 dark:text-amber-300 font-bold hover:bg-amber-600/25 transition-all"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{isZh ? 'English' : '中文版'}</span>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Logo & School Branding */}
          <div
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none"
            onClick={() => setActiveTab('math')}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-900 via-sky-700 to-amber-600 p-0.5 shadow-md shrink-0">
              <div className="w-full h-full bg-[#0a1426] rounded-[10px] sm:rounded-[14px] flex items-center justify-center font-serif font-black text-amber-300 text-base sm:text-xl tracking-tight">
                立化
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-serif font-bold text-base sm:text-xl tracking-wide">
                  {isZh ? '立化中学 IP 备考助航' : 'RVHS IP COMMAND'}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] sm:text-xs font-mono uppercase font-extrabold bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                  {isZh ? '中三' : 'Sec 3'}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs opacity-75 font-mono hidden sm:block">
                {isZh ? '综合数学 & 纯化学 · 个人学习指南' : 'Integrated Math & Pure Chemistry Personal Suite'}
              </p>
            </div>
          </div>

          {/* Desktop Search bar */}
          <div className="flex-1 max-w-xs relative hidden md:block">
            <Search className="w-4 h-4 opacity-50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={isZh ? '搜索考点、公式、踩分陷阱...' : 'Search topics, formulas, traps...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                theme === 'dark'
                  ? 'bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500'
                  : 'bg-white/80 border border-slate-300 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>

          {/* Right Mobile Actions & Mastery Counter */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className={`md:hidden p-2 rounded-xl border ${
                theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
              }`}
              title="Toggle Search"
            >
              {showMobileSearch ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
            </button>

            {/* Mastery Counter */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold border ${
              theme === 'dark'
                ? 'bg-slate-900 border-slate-800 text-slate-300'
                : 'bg-white/90 border-slate-300 text-slate-800 shadow-sm'
            }`}>
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden xs:inline">{isZh ? '已掌握' : 'Mastered'}:</span>
              <span className="text-emerald-600 dark:text-emerald-400">{masteredCount}/{totalTopics}</span>
            </div>
          </div>
        </div>

        {/* Mobile Search Input Bar */}
        {showMobileSearch && (
          <div className="md:hidden pb-3 pt-1">
            <div className="relative">
              <Search className="w-4 h-4 opacity-50 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                placeholder={isZh ? '搜索考点、公式、踩分陷阱...' : 'Search topics, formulas, traps...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-9 pr-4 py-2.5 rounded-xl text-xs font-mono ${
                  theme === 'dark'
                    ? 'bg-slate-900 border border-slate-800 text-slate-100'
                    : 'bg-white border border-slate-300 text-slate-900'
                }`}
              />
            </div>
          </div>
        )}

        {/* Navigation Tabs (Horizontal Scrollable) */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 border-t border-black/10 dark:border-white/10 scrollbar-none text-xs font-mono -mx-3 px-3 sm:mx-0 sm:px-0">
          {navItems.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl whitespace-nowrap font-bold transition-all shrink-0 ${
                  isActive
                    ? theme === 'dark'
                      ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                      : 'bg-amber-600 text-white shadow-md'
                    : 'opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
