import React, { useState, useEffect } from 'react';
import { Clock, CheckSquare, Square, Play, Pause, RotateCcw, Sparkles, Flame, CheckCircle } from 'lucide-react';
import { mathSyllabus } from '../data/mathData';
import { chemistrySyllabus } from '../data/chemistryData';

export default function AuditChecklist() {
  const [activeTab, setActiveTab] = useState('math'); // 'math' or 'chemistry'

  // Timer states
  const initialSeconds = activeTab === 'math' ? 600 : 300; // 10 min vs 5 min
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  // Checks saved in localStorage
  const [completedItems, setCompletedItems] = useState(() => {
    try {
      const saved = localStorage.getItem('rvhs_audit_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Streak counter
  const [streak, setStreak] = useState(() => {
    try {
      const saved = localStorage.getItem('rvhs_audit_streak');
      return saved ? parseInt(saved, 10) : 3;
    } catch {
      return 3;
    }
  });

  useEffect(() => {
    setTimeLeft(activeTab === 'math' ? 600 : 300);
    setIsRunning(false);
  }, [activeTab]);

  useEffect(() => {
    let timer = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    try {
      localStorage.setItem('rvhs_audit_checklist', JSON.stringify(completedItems));
    } catch (e) {
      console.error(e);
    }
  }, [completedItems]);

  const toggleCheck = (id) => {
    setCompletedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  const mathAudit = mathSyllabus.auditProtocol;
  const chemAudit = chemistrySyllabus.auditProtocol;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Clock className="w-5 h-5 text-sky-400" />
            Nightly Spot-Check Audit Command
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            Fast 5-to-10 minute verbal audit protocol for parents & students
          </p>
        </div>

        {/* Streak counter badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs font-mono text-amber-300">
          <Flame className="w-4 h-4 text-amber-400" />
          <span>Daily Audit Streak: <strong>{streak} Days</strong></span>
        </div>
      </div>

      {/* Tabs for Math / Chem */}
      <div className="flex gap-2 p-1 bg-slate-900 border border-slate-800 rounded-2xl">
        <button
          onClick={() => setActiveTab('math')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
            activeTab === 'math'
              ? 'bg-sky-500 text-slate-950 shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          10-Minute Math Audit
        </button>
        <button
          onClick={() => setActiveTab('chemistry')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
            activeTab === 'chemistry'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          5-Minute Chemistry Audit
        </button>
      </div>

      {/* Interactive Timer Widget */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-1">
            Focus Countdown Timer
          </span>
          <div className="text-4xl font-mono font-bold text-slate-100 tracking-wider">
            {formatTime(timeLeft)}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all ${
              isRunning
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                : 'bg-emerald-500 text-slate-950 shadow-md hover:bg-emerald-400'
            }`}
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isRunning ? 'Pause' : 'Start Audit'}
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setTimeLeft(activeTab === 'math' ? 600 : 300);
            }}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            title="Reset Timer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Audit Checklist Items */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-5 shadow-2xl">
        <h4 className="text-base font-bold text-slate-200 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-rv-gold-400" />
          {activeTab === 'math' ? mathAudit.title : chemAudit.title}
        </h4>

        <div className="space-y-4">
          {(activeTab === 'math' ? mathAudit.steps : chemAudit.steps).map((step, idx) => {
            const itemId = `${activeTab}-step-${idx}`;
            const isChecked = !!completedItems[itemId];

            return (
              <div
                key={idx}
                onClick={() => toggleCheck(itemId)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-4 ${
                  isChecked
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-500" />
                  )}
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold uppercase text-slate-400">
                    Step {step.step}
                  </div>
                  <p className="text-sm md:text-base leading-relaxed font-medium">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why this verbal method works */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400 font-mono space-y-1.5">
          <p className="text-rv-gold-400 font-bold">🧠 The Cognitive Principle Behind the Verbal Audit:</p>
          <p>
            You do not need to solve the full algebra or chemistry calculations with the student. If they can explain <strong>WHY</strong> step 1 works (e.g., <em>"Because it said perpendicular bisector, so I need the midpoint first"</em>), the structural pattern is encoded into memory. If they say <em>"I just copied the formula"</em>, they will stumble when exam questions alter variables.
          </p>
        </div>
      </div>
    </div>
  );
}
