import React, { useState, useEffect } from 'react';
import { Clock, CheckSquare, Square, Play, Pause, RotateCcw, Sparkles, Flame } from 'lucide-react';
import { mathSyllabus } from '../data/mathData';
import { chemistrySyllabus } from '../data/chemistryData';
import { mathSyllabusZh } from '../data/mathDataZh';
import { chemistrySyllabusZh } from '../data/chemistryDataZh';

export default function AuditChecklist({ lang = 'zh', theme = 'paper' }) {
  const [activeTab, setActiveTab] = useState('math'); // 'math' or 'chemistry'
  const isZh = lang === 'zh';

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

  const mathAudit = isZh ? mathSyllabusZh.auditProtocol : mathSyllabus.auditProtocol;
  const chemAudit = isZh ? chemistrySyllabusZh.auditProtocol : chemistrySyllabus.auditProtocol;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-600 dark:text-sky-400" />
            {isZh ? '每晚极速口头抽查指引' : 'Nightly Spot-Check Audit Command'}
          </h3>
          <p className="text-xs sm:text-sm opacity-75 font-mono">
            {isZh ? '家长与考生专用的5至10分钟口头对练机制（不用做繁琐代数计算）' : 'Fast 5-to-10 minute verbal audit protocol for parents & students'}
          </p>
        </div>

        {/* Streak counter badge */}
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold border ${
          theme === 'dark' ? 'bg-slate-900 border-slate-800 text-amber-300' : 'bg-amber-100 border-amber-300 text-amber-900'
        }`}>
          <Flame className="w-4 h-4 text-amber-600" />
          <span>{isZh ? '连续抽查打卡：' : 'Daily Streak: '}<strong>{streak} {isZh ? '天' : 'Days'}</strong></span>
        </div>
      </div>

      {/* Tabs for Math / Chem */}
      <div className={`flex gap-2 p-1 border rounded-2xl ${
        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300 shadow-xs'
      }`}>
        <button
          onClick={() => setActiveTab('math')}
          className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
            activeTab === 'math'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'opacity-70 hover:opacity-100'
          }`}
        >
          {isZh ? '10分钟数学高效抽查' : '10-Minute Math Audit'}
        </button>
        <button
          onClick={() => setActiveTab('chemistry')}
          className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
            activeTab === 'chemistry'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'opacity-70 hover:opacity-100'
          }`}
        >
          {isZh ? '5分钟化学审题抽查' : '5-Minute Chemistry Audit'}
        </button>
      </div>

      {/* Interactive Timer Widget */}
      <div className={`p-6 rounded-3xl border shadow-xl flex flex-wrap items-center justify-between gap-4 ${
        theme === 'dark' ? 'bg-[#111a2e] border-slate-800 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
      }`}>
        <div>
          <span className="text-xs font-mono uppercase font-bold block mb-1 opacity-70">
            {isZh ? '专注倒计时秒表' : 'Focus Countdown Timer'}
          </span>
          <div className="text-4xl sm:text-5xl font-mono font-bold tracking-wider">
            {formatTime(timeLeft)}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold flex items-center gap-2 transition-all shadow-sm ${
              isRunning
                ? 'bg-amber-600 text-white hover:bg-amber-700'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isRunning ? (isZh ? '暂停计时' : 'Pause') : (isZh ? '开始抽查' : 'Start Audit')}
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setTimeLeft(activeTab === 'math' ? 600 : 300);
            }}
            className={`p-2.5 rounded-xl border transition-colors ${
              theme === 'dark' ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
            }`}
            title="重置倒计时"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Audit Checklist Items */}
      <div className={`border rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl ${
        theme === 'dark' ? 'bg-[#111a2e] border-slate-800 text-slate-100' : 'bg-white border-[#ded5c3] text-[#111827]'
      }`}>
        <h4 className="text-base sm:text-lg font-bold flex items-center gap-2 text-amber-700 dark:text-amber-400">
          <Sparkles className="w-5 h-5" />
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
                className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all flex items-start gap-4 ${
                  isChecked
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold'
                    : theme === 'dark'
                      ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-200'
                      : 'bg-[#fcfaf6] border-slate-300 hover:border-slate-400 text-slate-900'
                }`}
              >
                <div className="shrink-0 mt-1">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Square className="w-5 h-5 opacity-40" />
                  )}
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="text-xs font-mono font-bold uppercase opacity-60">
                    {isZh ? `步骤 ${step.step}` : `Step ${step.step}`}
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why this verbal method works */}
        <div className={`mt-6 p-4 rounded-2xl border text-xs sm:text-sm font-mono space-y-1.5 leading-relaxed ${
          theme === 'dark' ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-amber-50/60 border-amber-200 text-amber-950'
        }`}>
          <p className="font-bold text-amber-700 dark:text-amber-400">
            🧠 {isZh ? '为什么这个口头抽查法极度高效？' : 'The Cognitive Principle Behind Verbal Audits:'}
          </p>
          <p>
            {isZh 
              ? '您不需要亲自坐下来和孩子一步一步做复杂的代数演算。只要让孩子亲口说出【为什么第一步要这么做】（例如：“因为题目写了垂直平分线，所以我第一步必须找中点”），考点就真正刻进了大脑。如果他说“我不知道，我就是抄公式”，考试遇到稍有变化的题目必定丢分。'
              : 'You do not need to solve the full algebra or chemistry calculations with the student. If they can explain WHY step 1 works, the structural pattern is encoded into memory. If they say "I just copied the formula", they will stumble when exam questions alter variables.'}
          </p>
        </div>
      </div>
    </div>
  );
}
