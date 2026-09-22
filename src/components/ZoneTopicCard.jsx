import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, CheckCircle2, HelpCircle, ShieldCheck, Zap } from 'lucide-react';

export default function ZoneTopicCard({ topic, subject = 'math', isMastered, onToggleMastered, lang = 'zh', theme = 'paper' }) {
  const [isOpen, setIsOpen] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const isZh = lang === 'zh';

  return (
    <div className={`rounded-2xl border transition-all duration-300 shadow-md overflow-hidden mb-6 ${
      theme === 'dark'
        ? isMastered
          ? 'bg-slate-900/90 border-emerald-500/50 shadow-emerald-950/20'
          : 'bg-[#111a2e] border-slate-800 hover:border-slate-700 text-slate-100'
        : theme === 'green'
          ? isMastered
            ? 'bg-[#e4efe4] border-emerald-600/50'
            : 'bg-[#ffffff] border-[#c0d8c0] text-[#0f2419]'
          : isMastered
            ? 'bg-[#f4f7f2] border-emerald-600/50'
            : 'bg-[#ffffff] border-[#ded5c3] text-[#111827]'
    }`}>
      {/* Header */}
      <div className={`p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-b ${
        theme === 'dark'
          ? 'border-slate-800 bg-slate-900/80'
          : theme === 'green'
            ? 'border-[#c8ddc8] bg-[#eef6ee]'
            : 'border-[#dfd6c5] bg-[#f8f5ee]'
      }`}>
        <div className="flex items-center gap-3">
          <span className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-bold font-mono text-base shrink-0 ${
            subject === 'math'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-amber-600 text-white shadow-sm'
          }`}>
            #{topic.number}
          </span>
          <div>
            <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
              {topic.title}
              {isMastered && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-600 text-white shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {isZh ? '已掌握' : 'Mastered'}
                </span>
              )}
            </h3>
            <p className="text-xs opacity-75 font-mono">
              {subject === 'math' 
                ? (isZh ? '中三综合数学 · 立化 IP 考点' : 'Integrated Math • RVHS IP Exam')
                : (isZh ? '中三纯化学 · 立化 IP 考点' : 'Pure Chemistry • RVHS IP Exam')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onToggleMastered(topic.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              isMastered
                ? 'bg-emerald-600 text-white shadow-xs hover:bg-emerald-700'
                : theme === 'dark'
                  ? 'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700'
                  : 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 shadow-xs'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            {isMastered ? (isZh ? '已掌握' : 'Mastered') : (isZh ? '标记掌握' : 'Mark Mastered')}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-xl border transition-colors ${
              theme === 'dark'
                ? 'bg-slate-800 border-slate-700 text-slate-300'
                : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
            title={isOpen ? (isZh ? '折叠' : 'Collapse') : (isZh ? '展开' : 'Expand')}
          >
            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Body Content */}
      {isOpen && (
        <div className="p-4 sm:p-6 space-y-6">
          {/* Plain English / 通俗大白话 */}
          <div className={`rounded-xl p-4 border ${
            theme === 'dark'
              ? 'bg-slate-950/80 border-slate-800 text-slate-200'
              : theme === 'green'
                ? 'bg-[#f4f9f4] border-[#c0d8c0] text-[#142e1f]'
                : 'bg-[#faf8f4] border-[#e2d8c7] text-[#1f2937]'
          }`}>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-mono mb-2 text-amber-600 dark:text-amber-400">
              <Zap className="w-4 h-4" />
              {isZh ? '💡 通俗白话大白话（机制秒懂）' : 'In Plain English'}
            </div>
            <p className="leading-relaxed text-sm sm:text-base font-medium">
              {topic.plainEnglish}
            </p>
          </div>

          {/* Chemistry Structures Table if present */}
          {topic.structuresTable && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider font-mono flex items-center gap-2 text-amber-700 dark:text-amber-400">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                {isZh ? '四大经典微观结构 —— 剑桥关键词采分标准对照矩阵' : 'The 4 Great Structures — Cambridge Keyword Matrix'}
              </h4>
              <div className="overflow-x-auto rounded-xl border border-slate-300 dark:border-slate-800">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className={`text-xs uppercase font-bold font-mono ${
                    theme === 'dark' ? 'bg-slate-800 text-slate-200' : 'bg-[#ece5d5] text-[#2c3437]'
                  }`}>
                    <tr>
                      <th className="p-3 whitespace-nowrap">{isZh ? '结构类型' : 'Structure Type'}</th>
                      <th className="p-3">{isZh ? '常见实例' : 'Examples'}</th>
                      <th className="p-3">{isZh ? '微观构成' : "How It's Built"}</th>
                      <th className="p-3 text-amber-700 dark:text-amber-300">{isZh ? '为什么熔点高/低？(官方采分原句)' : 'Why High/Low MP? (Exact Words)'}</th>
                      <th className="p-3">{isZh ? '导电性与状态' : 'Electrical Conductivity'}</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${
                    theme === 'dark' ? 'divide-slate-800 bg-slate-900/50 text-slate-200' : 'divide-slate-200 bg-white text-slate-800'
                  }`}>
                    {topic.structuresTable.map((item, idx) => (
                      <tr key={idx} className="hover:bg-amber-50/20 transition-colors">
                        <td className="p-3 font-bold whitespace-nowrap">{item.structure}</td>
                        <td className="p-3 font-mono text-xs font-semibold text-blue-700 dark:text-sky-300">{item.example}</td>
                        <td className="p-3 text-xs leading-relaxed">{item.composition}</td>
                        <td className="p-3 text-xs leading-relaxed font-medium bg-amber-50/50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200">{item.meltingPointExplanation}</td>
                        <td className="p-3 text-xs leading-relaxed">{item.conductivity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Salt Preparation Decision Tree Steps if present */}
          {topic.decisionTreeSteps && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider font-mono flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                {isZh ? '盐的制备决策流程逻辑' : 'Decision Tree Logic'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topic.decisionTreeSteps.map((step, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border space-y-2 ${
                    theme === 'dark' ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-300 shadow-xs'
                  }`}>
                    <p className="text-sm font-bold">🔍 {step.question}</p>
                    {step.branchYes && (
                      <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">
                        <strong className="font-bold">{isZh ? '是 (YES)：' : 'YES: '}</strong>{step.branchYes}
                      </p>
                    )}
                    {step.branchNo && (
                      <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">
                        <strong className="font-bold">{isZh ? '否 (NO)：' : 'NO: '}</strong>{step.branchNo}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              {topic.solubilityRules && (
                <div className={`p-4 rounded-xl border text-xs sm:text-sm space-y-1.5 font-mono ${
                  theme === 'dark' ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-[#fbf9f4] border-slate-300 text-slate-800'
                }`}>
                  <p className="font-bold text-amber-700 dark:text-amber-400">{isZh ? 'SPA 盐类溶解性黄金法则（非协商考点）：' : 'SPA Solubility Rules (Non-Negotiable):'}</p>
                  <p>• <strong className="text-emerald-600 dark:text-emerald-400">{isZh ? '永远可溶：' : 'Always Soluble: '}</strong>{topic.solubilityRules.alwaysSoluble}</p>
                  <p>• <strong className="text-rose-600 dark:text-rose-400">{isZh ? '不溶性氯化物沉淀：' : 'Insoluble Chlorides: '}</strong>{topic.solubilityRules.insolubleChlorides}</p>
                  <p>• <strong className="text-rose-600 dark:text-rose-400">{isZh ? '不溶性硫酸盐沉淀：' : 'Insoluble Sulfates: '}</strong>{topic.solubilityRules.insolubleSulfates}</p>
                </div>
              )}
            </div>
          )}

          {/* The Routine He Must Do / 解题标配套路 */}
          {topic.routines && topic.routines.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider font-mono flex items-center gap-2 text-blue-700 dark:text-sky-400">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                {isZh ? '考生必须掌握的标配套路与流水线' : 'The Standard Routine & Protocol'}
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {topic.routines.map((routine, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border transition-colors ${
                    theme === 'dark' ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-300 shadow-xs'
                  }`}>
                    <div className="text-sm sm:text-base font-bold text-blue-700 dark:text-sky-300 mb-1">
                      {routine.name}
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line opacity-90">
                      {routine.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Secret Traps & Pitfalls / 考场踩分陷阱 */}
          {topic.traps && topic.traps.length > 0 && (
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-500/40 text-rose-900 dark:text-rose-200">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider font-mono mb-2 text-rose-700 dark:text-rose-400">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 animate-pulse" />
                {isZh ? '⚠️ 考场雷区 / 剑桥改卷零分陷阱提醒' : 'Exam Trap / Cambridge Penalty Warning'}
              </div>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm leading-relaxed font-medium">
                {topic.traps.map((trap, idx) => (
                  <li key={idx} className="leading-snug">{trap}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Spot-Check Question / 5分钟家长/自我抽查 */}
          {topic.spotCheckQuestion && (
            <div className={`p-4 sm:p-5 rounded-xl border space-y-2.5 ${
              theme === 'dark'
                ? 'bg-amber-950/20 border-amber-500/30 text-slate-200'
                : 'bg-[#fffaf0] border-[#ecd8b0] text-[#422006]'
            }`}>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider font-mono text-amber-700 dark:text-amber-400">
                  <HelpCircle className="w-4 h-4 shrink-0" />
                  {isZh ? '🔍 5分钟极速抽查提问（问孩子这道题）' : '5-Minute Parent / Self Spot-Check'}
                </div>
                <button
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="text-xs px-3 py-1 rounded-lg bg-amber-600 text-white font-bold hover:bg-amber-700 transition-colors shrink-0"
                >
                  {showAnswer ? (isZh ? '收起答案' : 'Hide Answer') : (isZh ? '看踩分答案' : 'Reveal Answer')}
                </button>
              </div>
              <p className="text-sm sm:text-base font-bold italic leading-relaxed">
                "{topic.spotCheckQuestion}"
              </p>
              {showAnswer && (
                <div className={`mt-3 pt-3 border-t text-xs sm:text-sm rounded-lg p-3 font-mono leading-relaxed ${
                  theme === 'dark'
                    ? 'border-amber-500/30 text-amber-200 bg-amber-950/40'
                    : 'border-amber-200 text-amber-950 bg-amber-100/60'
                }`}>
                  💡 <strong>{isZh ? '【判分标准】：' : 'Scoring Criteria: '}</strong>
                  {isZh 
                    ? '孩子必须能够脱口而出准确的关键词或公式法则，不带犹豫猜测。若支支吾吾说“我就是蒙的”，说明概念未真正吸收，需立刻重温上方标配套路！'
                    : 'Student must immediately state the formula/keyword or explain the underlying rule without guessing. If they say "I just guessed", revisit the routine!'}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
