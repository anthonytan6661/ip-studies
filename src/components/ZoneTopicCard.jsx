import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, CheckCircle2, Search, HelpCircle, ShieldCheck, Zap } from 'lucide-react';
import MathKaTeX from './MathKaTeX';

export default function ZoneTopicCard({ topic, subject = 'math', isMastered, onToggleMastered }) {
  const [isOpen, setIsOpen] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className={`rounded-2xl border transition-all duration-300 shadow-lg ${
      isMastered 
        ? 'bg-slate-900/80 border-emerald-500/40 shadow-emerald-950/20' 
        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 shadow-black/40'
    } backdrop-blur-md overflow-hidden mb-6`}>
      {/* Header */}
      <div className="p-5 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 bg-gradient-to-r from-slate-900/90 to-slate-900/40">
        <div className="flex items-center gap-3">
          <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold font-mono text-base ${
            subject === 'math' 
              ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' 
              : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
          }`}>
            #{topic.number}
          </span>
          <div>
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              {topic.title}
              {isMastered && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Mastered
                </span>
              )}
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              {subject === 'math' ? 'Integrated Mathematics' : 'Pure Chemistry'} • RVHS IP Exam Syllabus
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onToggleMastered(topic.id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isMastered
                ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50 hover:bg-emerald-600/40'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
            }`}
          >
            <ShieldCheck className={`w-4 h-4 ${isMastered ? 'text-emerald-400' : 'text-slate-400'}`} />
            {isMastered ? 'Mastered' : 'Mark as Mastered'}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-750 text-slate-400 hover:text-slate-200 transition-colors"
            title={isOpen ? "Collapse" : "Expand"}
          >
            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Body Content */}
      {isOpen && (
        <div className="p-6 space-y-6">
          {/* Plain English */}
          <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
              <Zap className="w-4 h-4 text-rv-gold-400" />
              In Plain English
            </div>
            <p className="text-slate-200 leading-relaxed text-sm md:text-base">
              {topic.plainEnglish}
            </p>
          </div>

          {/* Chemistry Structures Table if present */}
          {topic.structuresTable && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                The 4 Great Structures — Cambridge Keyword Matrix
              </h4>
              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-slate-800/80 text-xs uppercase font-semibold text-slate-300 font-mono">
                    <tr>
                      <th className="p-3">Structure Type</th>
                      <th className="p-3">Examples</th>
                      <th className="p-3">How It's Built</th>
                      <th className="p-3 text-amber-300">Why High/Low Melting Point? (Exact Words)</th>
                      <th className="p-3">Electrical Conductivity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                    {topic.structuresTable.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                        <td className="p-3 font-semibold text-slate-100 whitespace-nowrap">{item.structure}</td>
                        <td className="p-3 text-sky-300 font-mono text-xs">{item.example}</td>
                        <td className="p-3 text-slate-300 text-xs">{item.composition}</td>
                        <td className="p-3 text-amber-200 text-xs font-medium bg-amber-500/5">{item.meltingPointExplanation}</td>
                        <td className="p-3 text-slate-300 text-xs">{item.conductivity}</td>
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
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Decision Tree Logic
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topic.decisionTreeSteps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <p className="text-sm font-bold text-slate-200">🔍 {step.question}</p>
                    {step.branchYes && (
                      <p className="text-xs text-emerald-400">
                        <strong className="text-slate-300">YES:</strong> {step.branchYes}
                      </p>
                    )}
                    {step.branchNo && (
                      <p className="text-xs text-amber-400">
                        <strong className="text-slate-300">NO:</strong> {step.branchNo}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              {topic.solubilityRules && (
                <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-xs space-y-1.5 font-mono">
                  <p className="text-rv-gold-400 font-bold">SPA Solubility Rules (Non-Negotiable):</p>
                  <p className="text-slate-300">• <strong className="text-emerald-400">Always Soluble:</strong> {topic.solubilityRules.alwaysSoluble}</p>
                  <p className="text-slate-300">• <strong className="text-rose-400">Insoluble Chlorides:</strong> {topic.solubilityRules.insolubleChlorides}</p>
                  <p className="text-slate-300">• <strong className="text-rose-400">Insoluble Sulfates:</strong> {topic.solubilityRules.insolubleSulfates}</p>
                </div>
              )}
            </div>
          )}

          {/* The Routine He Must Do */}
          {topic.routines && topic.routines.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                The Standard Routine & Protocol
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {topic.routines.map((routine, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-slate-750 transition-colors">
                    <div className="text-sm font-semibold text-sky-300 mb-1">
                      {routine.name}
                    </div>
                    <div className="text-slate-300 text-xs md:text-sm leading-relaxed whitespace-pre-line">
                      {routine.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Secret Traps & Pitfalls */}
          {topic.traps && topic.traps.length > 0 && (
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/40 text-rose-200">
              <div className="flex items-center gap-2 font-bold text-rose-400 text-xs uppercase tracking-wider font-mono mb-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 animate-pulse" />
                Exam Trap / Cambridge Penalty Warning
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-rose-200/90 leading-relaxed">
                {topic.traps.map((trap, idx) => (
                  <li key={idx} className="leading-snug">{trap}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Spot-Check Question */}
          {topic.spotCheckQuestion && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-amber-400 text-xs uppercase tracking-wider font-mono">
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                  5-Minute Parent / Self Spot-Check
                </div>
                <button
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="text-xs px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-semibold transition-colors"
                >
                  {showAnswer ? "Hide Answer" : "Reveal Answer & Rule"}
                </button>
              </div>
              <p className="text-sm font-medium text-amber-100 italic">
                "{topic.spotCheckQuestion}"
              </p>
              {showAnswer && (
                <div className="mt-3 pt-3 border-t border-amber-500/20 text-xs text-amber-200/90 bg-amber-950/30 p-3 rounded-lg font-mono">
                  💡 <strong>Scoring Criteria:</strong> Student must immediately state the formula/keyword or explain the underlying rule without guessing. If they say "I just guessed", revisit the routine!
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
