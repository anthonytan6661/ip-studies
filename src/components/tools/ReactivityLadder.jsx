import React, { useState } from 'react';
import { Flame, ShieldAlert, ArrowDown, CheckCircle2, XCircle } from 'lucide-react';

const METALS_ORDER = [
  { symbol: "K", name: "Potassium", mnemonic: "Please", note: "Violent reaction with cold water" },
  { symbol: "Na", name: "Sodium", mnemonic: "Send", note: "Violent reaction with cold water" },
  { symbol: "Ca", name: "Calcium", mnemonic: "Cats", note: "Steady reaction with cold water" },
  { symbol: "Mg", name: "Magnesium", mnemonic: "Monkeys", note: "Slow with water, burns bright in steam" },
  { symbol: "Al", name: "Aluminium", mnemonic: "And", note: "Unreactive initially due to Al₂O₃ oxide layer" },
  { symbol: "Zn", name: "Zinc", mnemonic: "Zebras", note: "Reacts with steam and dilute acid" },
  { symbol: "Fe", name: "Iron", mnemonic: "In", note: "Rusts with O₂ + H₂O; reacts slowly with acid" },
  { symbol: "Pb", name: "Lead", mnemonic: "Lead", note: "Forms insoluble PbCl₂/PbSO₄ coating with acids" },
  { symbol: "Cu", name: "Copper", mnemonic: "Cages", note: "DOES NOT REACT with dilute acid! Below H." },
  { symbol: "Ag", name: "Silver", mnemonic: "Safely", note: "DOES NOT REACT with dilute acid! Below H." }
];

export default function ReactivityLadder() {
  const [metalA, setMetalA] = useState("Zn");
  const [metalB, setMetalB] = useState("Cu");

  const rankA = METALS_ORDER.findIndex(m => m.symbol === metalA);
  const rankB = METALS_ORDER.findIndex(m => m.symbol === metalB);

  // rank 0 is most reactive, rank 9 is least reactive
  const canDisplace = rankA < rankB;

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-500" />
            Reactivity Series Ladder & Displacement Tester
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            RVHS Pure Chemistry Topic 7 • Single Displacement & Rusting Logic
          </p>
        </div>

        <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs font-mono text-amber-300">
          Mnemonic: Please Send Cats Monkeys And Zebras In Lead Cages Safely
        </div>
      </div>

      {/* Interactive Displacement Experiment */}
      <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-4">
        <h4 className="text-xs font-mono uppercase text-slate-400 font-bold">
          Single Displacement Simulator
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">
              Select Solid Metal Added (Metal A):
            </label>
            <select
              value={metalA}
              onChange={(e) => setMetalA(e.target.value)}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm font-mono text-slate-100 focus:outline-none focus:border-amber-500"
            >
              {METALS_ORDER.map(m => (
                <option key={m.symbol} value={m.symbol}>
                  {m.name} ({m.symbol})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">
              Select Metal in Aqueous Solution (Metal B Salt):
            </label>
            <select
              value={metalB}
              onChange={(e) => setMetalB(e.target.value)}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm font-mono text-slate-100 focus:outline-none focus:border-amber-500"
            >
              {METALS_ORDER.map(m => (
                <option key={m.symbol} value={m.symbol}>
                  {m.name} ({m.symbol}²⁺ / {m.symbol}⁺ solution)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Displacement Outcome */}
        <div className={`p-4 rounded-xl border flex items-start gap-3 transition-all ${
          metalA === metalB
            ? 'bg-slate-900 border-slate-700 text-slate-300'
            : canDisplace
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
              : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
        }`}>
          {metalA === metalB ? (
            <span className="text-xs font-mono">Both metals are identical. No net reaction.</span>
          ) : canDisplace ? (
            <>
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs font-mono">
                <div className="text-sm font-bold text-emerald-300">
                  REACTION OCCURS! {metalA} DISPLACES {metalB}.
                </div>
                <p className="text-slate-300">
                  Because {metalA} is higher and more reactive than {metalB}, {metalA} readily loses electrons to form {metalA} ions, forcing {metalB} ions to gain electrons and deposit as solid metal.
                </p>
                {metalA === 'Zn' && metalB === 'Cu' && (
                  <p className="text-amber-300">
                    Observation: Blue CuSO₄ solution decolourises to colourless ZnSO₄; reddish-brown copper solid precipitates.
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs font-mono">
                <div className="text-sm font-bold text-rose-300">
                  NO REACTION! {metalA} CANNOT DISPLACE {metalB}.
                </div>
                <p className="text-slate-300">
                  {metalA} is less reactive (lower down the series) than {metalB}. {metalA} is not strong enough to reduce {metalB} ions. No colour change, no precipitate.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* The Visual Reactivity Ladder */}
      <div className="space-y-3">
        <h4 className="text-xs font-mono uppercase text-slate-400 font-bold">
          The 10-Metal Reactivity Hierarchy (Most Reactive → Least Reactive)
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {METALS_ORDER.map((m, idx) => (
            <div
              key={m.symbol}
              className={`p-2.5 rounded-xl border text-center font-mono text-xs transition-all ${
                idx < 3
                  ? 'bg-rose-950/20 border-rose-500/30 text-rose-200'
                  : idx < 6
                    ? 'bg-amber-950/20 border-amber-500/30 text-amber-200'
                    : 'bg-slate-950/50 border-slate-800 text-slate-300'
              }`}
            >
              <div className="font-bold text-sm text-slate-100">{m.symbol}</div>
              <div className="text-[11px] text-slate-400">{m.name}</div>
              <div className="text-[10px] text-rv-gold-400 font-serif italic mt-1">"{m.mnemonic}"</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
