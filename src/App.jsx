import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import ZoneTopicCard from './components/ZoneTopicCard';
import ToolsContainer from './components/ToolsContainer';
import FlashcardViewer from './components/FlashcardViewer';
import QuizMode from './components/QuizMode';
import AuditChecklist from './components/AuditChecklist';

import { mathSyllabus } from './data/mathData';
import { chemistrySyllabus } from './data/chemistryData';
import { mathSyllabusZh } from './data/mathDataZh';
import { chemistrySyllabusZh } from './data/chemistryDataZh';

import { BookOpen, FlaskConical, Sparkles, Compass, Target, Flame } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('math');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState('all');

  // Language state (default to Chinese as requested)
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('rvhs_lang');
      return saved ? saved : 'zh';
    } catch {
      return 'zh';
    }
  });

  // Font size for Presbyopia: 'normal', 'large', 'xlarge' (default to 'large' for comfortable viewing)
  const [fontSize, setFontSize] = useState(() => {
    try {
      const saved = localStorage.getItem('rvhs_fontsize');
      return saved ? saved : 'large';
    } catch {
      return 'large';
    }
  });

  // Reading Theme: 'paper' (warm parchment), 'dark' (navy), 'green' (soft mint)
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('rvhs_theme');
      return saved ? saved : 'paper';
    } catch {
      return 'paper';
    }
  });

  // Mastered topics tracked in localStorage
  const [masteredTopics, setMasteredTopics] = useState(() => {
    try {
      const saved = localStorage.getItem('rvhs_mastered_topics');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('rvhs_lang', lang);
    } catch (e) {
      console.error(e);
    }
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem('rvhs_fontsize', fontSize);
      document.documentElement.className = `font-${fontSize}`;
    } catch (e) {
      console.error(e);
    }
  }, [fontSize]);

  useEffect(() => {
    try {
      localStorage.setItem('rvhs_theme', theme);
      document.body.className = `theme-${theme}`;
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem('rvhs_mastered_topics', JSON.stringify(masteredTopics));
    } catch (e) {
      console.error(e);
    }
  }, [masteredTopics]);

  const toggleMastered = (topicId) => {
    setMasteredTopics(prev => 
      prev.includes(topicId) ? prev.filter(id => id !== topicId) : [...prev, topicId]
    );
  };

  const isZh = lang === 'zh';
  const currentMath = isZh ? mathSyllabusZh : mathSyllabus;
  const currentChem = isZh ? chemistrySyllabusZh : chemistrySyllabus;

  // Compute all topics
  const allMathTopics = useMemo(() => {
    return currentMath.zones.flatMap(zone => zone.topics);
  }, [currentMath]);

  const allChemTopics = useMemo(() => {
    return currentChem.pillars.flatMap(pillar => pillar.topics);
  }, [currentChem]);

  const totalTopicsCount = allMathTopics.length + allChemTopics.length; // 13 + 8 = 21

  // Filter Math topics
  const filteredMathZones = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return currentMath.zones.map(zone => {
      if (selectedZone !== 'all' && zone.id !== selectedZone) {
        return { ...zone, topics: [] };
      }
      const filteredTopics = zone.topics.filter(topic => {
        if (!q) return true;
        const text = `${topic.title} ${topic.plainEnglish} ${topic.spotCheckQuestion} ${topic.traps?.join(' ')} ${topic.routines?.map(r => r.name + ' ' + r.desc).join(' ')}`.toLowerCase();
        return text.includes(q);
      });
      return { ...zone, topics: filteredTopics };
    }).filter(zone => zone.topics.length > 0);
  }, [searchQuery, selectedZone, currentMath]);

  // Filter Chem pillars
  const filteredChemPillars = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return currentChem.pillars.map(pillar => {
      if (selectedZone !== 'all' && pillar.id !== selectedZone) {
        return { ...pillar, topics: [] };
      }
      const filteredTopics = pillar.topics.filter(topic => {
        if (!q) return true;
        const text = `${topic.title} ${topic.plainEnglish} ${topic.spotCheckQuestion} ${topic.traps?.join(' ')} ${topic.routines?.map(r => r.name + ' ' + r.desc).join(' ')}`.toLowerCase();
        return text.includes(q);
      });
      return { ...pillar, topics: filteredTopics };
    }).filter(pillar => pillar.topics.length > 0);
  }, [searchQuery, selectedZone, currentChem]);

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      theme === 'dark' ? 'bg-[#0a0f1d] text-slate-100' : theme === 'green' ? 'bg-[#edf5ed] text-[#0f2419]' : 'bg-[#f7f4ec] text-[#111827]'
    }`}>
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSelectedZone('all');
        }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        masteredCount={masteredTopics.length}
        totalTopics={totalTopicsCount}
        lang={lang}
        setLang={setLang}
        fontSize={fontSize}
        setFontSize={setFontSize}
        theme={theme}
        setTheme={setTheme}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* HERO BANNER */}
        <section className={`mb-8 sm:mb-10 rounded-3xl border p-6 sm:p-8 relative overflow-hidden shadow-lg transition-all ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-slate-900 via-slate-900/90 to-[#0b162c] border-slate-800'
            : theme === 'green'
              ? 'bg-gradient-to-br from-[#ffffff] via-[#eef6ee] to-[#d8ebd8] border-[#bedcbe]'
              : 'bg-gradient-to-br from-[#ffffff] via-[#fcfbf9] to-[#f4ede1] border-[#ded5c3]'
        }`}>
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-600/15 text-amber-800 dark:text-amber-300 border border-amber-600/30">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              {isZh ? '立化中学 (RVHS) 中三 IP 直通车定制学习备考指南' : 'River Valley High School Sec 3 IP Syllabus Guide'}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-serif tracking-tight leading-snug">
              {isZh ? '家长速成与考生冲刺 · 专属备考中心' : 'Personal Study & Fast-Track Master Hub'}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed font-sans opacity-90 font-medium">
              {isZh 
                ? '精准吃透【综合数学 13个专题】解题模式与【纯化学 4大考评支柱】剑桥核心采分词。专为长辈优化大字高对比排版，5分钟内轻松抽查考点！'
                : 'Master the exact pattern-recognition routines, decode strict Cambridge keyword penalties, and eliminate RVHS exam traps across 13 Integrated Math topics and 4 Pure Chemistry pillars.'}
            </p>

            {/* Quick Action Pills */}
            <div className="pt-2 flex flex-wrap gap-2.5 text-xs sm:text-sm font-mono font-bold">
              <button
                onClick={() => setActiveTab('math')}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-xs ${
                  activeTab === 'math'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:opacity-80'
                }`}
              >
                <BookOpen className="w-4 h-4" /> {isZh ? '数学 (13专题)' : 'Math (13 Topics)'}
              </button>

              <button
                onClick={() => setActiveTab('chemistry')}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-xs ${
                  activeTab === 'chemistry'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:opacity-80'
                }`}
              >
                <FlaskConical className="w-4 h-4" /> {isZh ? '化学 (4大支柱)' : 'Chemistry (4 Pillars)'}
              </button>

              <button
                onClick={() => setActiveTab('tools')}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-xs ${
                  activeTab === 'tools'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:opacity-80'
                }`}
              >
                <Compass className="w-4 h-4" /> {isZh ? '实验模拟器' : 'Lab Tools'}
              </button>

              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-xs ${
                  activeTab === 'quiz'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:opacity-80'
                }`}
              >
                <Target className="w-4 h-4" /> {isZh ? '排坑测验' : 'Trap Quiz'}
              </button>

              <button
                onClick={() => setActiveTab('audit')}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-xs ${
                  activeTab === 'audit'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:opacity-80'
                }`}
              >
                <Flame className="w-4 h-4" /> {isZh ? '每日抽查' : 'Nightly Audit'}
              </button>
            </div>
          </div>
        </section>

        {/* TAB 1: INTEGRATED MATHEMATICS */}
        {activeTab === 'math' && (
          <div className="space-y-8">
            {/* Big Picture Note */}
            <div className={`p-5 rounded-2xl border space-y-2.5 ${
              theme === 'dark' ? 'bg-sky-950/30 border-sky-500/30' : 'bg-blue-50/70 border-blue-200 text-blue-950'
            }`}>
              <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider font-mono text-blue-700 dark:text-sky-400 flex items-center gap-2">
                <BookOpen className="w-5 h-5 shrink-0" />
                {currentMath.bigPicture.headline}
              </h2>
              <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base leading-relaxed font-medium">
                {currentMath.bigPicture.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>

            {/* Zone Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 pb-2">
              <span className="text-xs sm:text-sm font-mono opacity-75 mr-2 font-bold">
                {isZh ? '考区分流：' : 'Filter Zones:'}
              </span>
              <button
                onClick={() => setSelectedZone('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
                  selectedZone === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 opacity-75 hover:opacity-100'
                }`}
              >
                {isZh ? '全考区 (13个专题)' : 'All 3 Zones (13 Topics)'}
              </button>
              {currentMath.zones.map(z => (
                <button
                  key={z.id}
                  onClick={() => setSelectedZone(z.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
                    selectedZone === z.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 opacity-75 hover:opacity-100'
                  }`}
                >
                  {z.name.split('：')[0].split(':')[0]} ({z.examWeight})
                </button>
              ))}
            </div>

            {/* Topics grouped by zones */}
            {filteredMathZones.map(zone => (
              <div key={zone.id} className="space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-black/10 dark:border-white/10 pb-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif">
                    {zone.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-900 dark:text-sky-300 text-xs sm:text-sm font-mono font-bold border border-blue-300 dark:border-blue-500/30">
                      {zone.examWeight}
                    </span>
                    <span className="text-xs sm:text-sm opacity-75 font-mono hidden sm:inline font-medium">
                      {zone.summary}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {zone.topics.map(topic => (
                    <ZoneTopicCard
                      key={topic.id}
                      topic={topic}
                      subject="math"
                      isMastered={masteredTopics.includes(topic.id)}
                      onToggleMastered={toggleMastered}
                      lang={lang}
                      theme={theme}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: PURE CHEMISTRY */}
        {activeTab === 'chemistry' && (
          <div className="space-y-8">
            {/* Big Picture Note */}
            <div className={`p-5 rounded-2xl border space-y-2.5 ${
              theme === 'dark' ? 'bg-amber-950/30 border-amber-500/30' : 'bg-amber-50/70 border-amber-200 text-amber-950'
            }`}>
              <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider font-mono text-amber-700 dark:text-amber-400 flex items-center gap-2">
                <FlaskConical className="w-5 h-5 shrink-0" />
                {currentChem.bigPicture.headline}
              </h2>
              <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base leading-relaxed font-medium">
                {currentChem.bigPicture.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>

            {/* Pillar Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 pb-2">
              <span className="text-xs sm:text-sm font-mono opacity-75 mr-2 font-bold">
                {isZh ? '支柱分流：' : 'Filter Pillars:'}
              </span>
              <button
                onClick={() => setSelectedZone('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
                  selectedZone === 'all'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 opacity-75 hover:opacity-100'
                }`}
              >
                {isZh ? '全支柱 (8个专题)' : 'All 4 Pillars (8 Topics)'}
              </button>
              {currentChem.pillars.map(p => (
                <button
                  key={p.id}
                  onClick={() => setSelectedZone(p.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
                    selectedZone === p.id
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 opacity-75 hover:opacity-100'
                  }`}
                >
                  {p.name.split('：')[0].split(':')[0]} ({p.examWeight})
                </button>
              ))}
            </div>

            {/* Topics grouped by pillars */}
            {filteredChemPillars.map(pillar => (
              <div key={pillar.id} className="space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-black/10 dark:border-white/10 pb-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif">
                    {pillar.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 text-xs sm:text-sm font-mono font-bold border border-amber-300 dark:border-amber-500/30">
                      {pillar.examWeight}
                    </span>
                    <span className="text-xs sm:text-sm opacity-75 font-mono hidden sm:inline font-medium">
                      {pillar.summary}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {pillar.topics.map(topic => (
                    <ZoneTopicCard
                      key={topic.id}
                      topic={topic}
                      subject="chemistry"
                      isMastered={masteredTopics.includes(topic.id)}
                      onToggleMastered={toggleMastered}
                      lang={lang}
                      theme={theme}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: INTERACTIVE LAB TOOLS */}
        {activeTab === 'tools' && (
          <ToolsContainer lang={lang} theme={theme} />
        )}

        {/* TAB 4: ACTIVE RECALL FLASHCARDS */}
        {activeTab === 'flashcards' && (
          <FlashcardViewer lang={lang} theme={theme} />
        )}

        {/* TAB 5: SPOT THE TRAP QUIZ */}
        {activeTab === 'quiz' && (
          <QuizMode lang={lang} theme={theme} />
        )}

        {/* TAB 6: NIGHTLY AUDIT */}
        {activeTab === 'audit' && (
          <AuditChecklist lang={lang} theme={theme} />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-black/10 dark:border-white/10 py-8 text-center text-xs sm:text-sm font-mono opacity-70">
        <div className="max-w-7xl mx-auto px-4 space-y-1.5">
          <p className="font-bold">
            {isZh ? '立化中学 (RVHS) 中三直通车 IP 学习备战全案' : 'River Valley High School Sec 3 Integrated Programme (IP) Suite'}
          </p>
          <p>
            {isZh ? '专为长辈护眼定制 · 综合数学与纯化学提分速查' : 'Synthesized from RVHS Master Guides for Integrated Math & Pure Chemistry'}
          </p>
        </div>
      </footer>
    </div>
  );
}
