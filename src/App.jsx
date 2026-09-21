import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import ZoneTopicCard from './components/ZoneTopicCard';
import ToolsContainer from './components/ToolsContainer';
import FlashcardViewer from './components/FlashcardViewer';
import QuizMode from './components/QuizMode';
import AuditChecklist from './components/AuditChecklist';

import { mathSyllabus } from './data/mathData';
import { chemistrySyllabus } from './data/chemistryData';
import { BookOpen, FlaskConical, Sparkles, Layers, Target, ShieldCheck, Flame, Compass, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('math');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState('all');

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

  // Compute all topics
  const allMathTopics = useMemo(() => {
    return mathSyllabus.zones.flatMap(zone => zone.topics);
  }, []);

  const allChemTopics = useMemo(() => {
    return chemistrySyllabus.pillars.flatMap(pillar => pillar.topics);
  }, []);

  const totalTopicsCount = allMathTopics.length + allChemTopics.length; // 13 + 8 = 21

  // Filter Math topics
  const filteredMathZones = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return mathSyllabus.zones.map(zone => {
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
  }, [searchQuery, selectedZone]);

  // Filter Chem pillars
  const filteredChemPillars = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return chemistrySyllabus.pillars.map(pillar => {
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
  }, [searchQuery, selectedZone]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans">
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
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* HERO BANNER */}
        <section className="mb-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-rv-navy-950 border border-slate-800/90 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-500/10 via-rv-gold-500/5 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rv-gold-500/10 border border-rv-gold-500/25 text-rv-gold-300 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              River Valley High School (RVHS) Sec 3 IP Syllabus Guide
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-serif tracking-tight text-white leading-tight">
              Personal Study & Fast-Track Master Hub
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Master the exact pattern-recognition routines, decode strict Cambridge keyword penalties, and eliminate RVHS exam traps across <strong>13 Integrated Math topics</strong> and <strong>4 Pure Chemistry pillars</strong>.
            </p>

            {/* Quick Action Pills */}
            <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-mono">
              <button
                onClick={() => setActiveTab('math')}
                className={`px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                  activeTab === 'math'
                    ? 'bg-sky-500 text-slate-950 shadow-md'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <BookOpen className="w-4 h-4" /> Math (13 Topics)
              </button>

              <button
                onClick={() => setActiveTab('chemistry')}
                className={`px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                  activeTab === 'chemistry'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <FlaskConical className="w-4 h-4" /> Chemistry (4 Pillars)
              </button>

              <button
                onClick={() => setActiveTab('tools')}
                className={`px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                  activeTab === 'tools'
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <Compass className="w-4 h-4" /> Lab Tools
              </button>

              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                  activeTab === 'quiz'
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <Target className="w-4 h-4" /> Spot the Trap Quiz
              </button>

              <button
                onClick={() => setActiveTab('audit')}
                className={`px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                  activeTab === 'audit'
                    ? 'bg-indigo-500 text-white shadow-md'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <Flame className="w-4 h-4" /> Nightly Audit
              </button>
            </div>
          </div>
        </section>

        {/* TAB 1: INTEGRATED MATHEMATICS */}
        {activeTab === 'math' && (
          <div className="space-y-8">
            {/* Big Picture Note */}
            <div className="p-5 rounded-2xl bg-sky-950/20 border border-sky-500/30 text-slate-200 space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider font-mono text-sky-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {mathSyllabus.bigPicture.headline}
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-slate-300">
                {mathSyllabus.bigPicture.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>

            {/* Zone Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 pb-2">
              <span className="text-xs font-mono text-slate-400 mr-2">Filter Zones:</span>
              <button
                onClick={() => setSelectedZone('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  selectedZone === 'all'
                    ? 'bg-slate-700 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                All 3 Zones (13 Topics)
              </button>
              {mathSyllabus.zones.map(z => (
                <button
                  key={z.id}
                  onClick={() => setSelectedZone(z.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    selectedZone === z.id
                      ? 'bg-sky-500 text-slate-950 shadow-md'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {z.name.split(':')[0]} ({z.examWeight})
                </button>
              ))}
            </div>

            {/* Topics grouped by zones */}
            {filteredMathZones.map(zone => (
              <div key={zone.id} className="space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-800 pb-2">
                  <h3 className="text-xl font-bold font-serif text-slate-100">
                    {zone.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono font-bold">
                      {zone.examWeight}
                    </span>
                    <span className="text-xs text-slate-400 font-mono hidden sm:inline">
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
            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-slate-200 space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider font-mono text-amber-400 flex items-center gap-2">
                <FlaskConical className="w-4 h-4" />
                {chemistrySyllabus.bigPicture.headline}
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-slate-300">
                {chemistrySyllabus.bigPicture.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>

            {/* Pillar Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 pb-2">
              <span className="text-xs font-mono text-slate-400 mr-2">Filter Pillars:</span>
              <button
                onClick={() => setSelectedZone('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  selectedZone === 'all'
                    ? 'bg-slate-700 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                All 4 Pillars (8 Topics)
              </button>
              {chemistrySyllabus.pillars.map(p => (
                <button
                  key={p.id}
                  onClick={() => setSelectedZone(p.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    selectedZone === p.id
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {p.name.split(':')[0]} ({p.examWeight})
                </button>
              ))}
            </div>

            {/* Topics grouped by pillars */}
            {filteredChemPillars.map(pillar => (
              <div key={pillar.id} className="space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-800 pb-2">
                  <h3 className="text-xl font-bold font-serif text-slate-100">
                    {pillar.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                      {pillar.examWeight}
                    </span>
                    <span className="text-xs text-slate-400 font-mono hidden sm:inline">
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
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: INTERACTIVE LAB TOOLS */}
        {activeTab === 'tools' && (
          <ToolsContainer />
        )}

        {/* TAB 4: ACTIVE RECALL FLASHCARDS */}
        {activeTab === 'flashcards' && (
          <FlashcardViewer />
        )}

        {/* TAB 5: SPOT THE TRAP QUIZ */}
        {activeTab === 'quiz' && (
          <QuizMode />
        )}

        {/* TAB 6: NIGHTLY AUDIT */}
        {activeTab === 'audit' && (
          <AuditChecklist />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-800/80 bg-slate-950 py-8 text-center text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="text-slate-400">
            River Valley High School Sec 3 Integrated Programme (IP) Study Command Suite
          </p>
          <p>
            Synthesized from RVHS Master Guides for Integrated Mathematics & Pure Chemistry
          </p>
        </div>
      </footer>
    </div>
  );
}
