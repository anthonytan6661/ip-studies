import React, { useState } from 'react';
import { Compass, AlertCircle, CheckCircle2, RotateCcw } from 'lucide-react';

export default function ASTCSolver() {
  const [trigFunc, setTrigFunc] = useState('sin');
  const [valStr, setValStr] = useState('-0.5');
  const [isRad, setIsRad] = useState(false);

  const numVal = parseFloat(valStr);
  const isValid = !isNaN(numVal) && (trigFunc === 'tan' || (numVal >= -1 && numVal <= 1));

  // Acute reference angle alpha calculation
  let alphaDeg = 0;
  if (isValid) {
    const absVal = Math.abs(numVal);
    if (trigFunc === 'sin') alphaDeg = (Math.asin(absVal) * 180) / Math.PI;
    else if (trigFunc === 'cos') alphaDeg = (Math.acos(absVal) * 180) / Math.PI;
    else if (trigFunc === 'tan') alphaDeg = (Math.atan(absVal) * 180) / Math.PI;
  }
  alphaDeg = Math.round(alphaDeg * 100) / 100;
  const alphaRad = Math.round(((alphaDeg * Math.PI) / 180) * 1000) / 1000;

  // Determine active quadrants based on sign
  const isPositive = numVal >= 0;
  const activeQuadrants = [];
  if (trigFunc === 'sin') {
    if (isPositive) activeQuadrants.push(1, 2);
    else activeQuadrants.push(3, 4);
  } else if (trigFunc === 'cos') {
    if (isPositive) activeQuadrants.push(1, 4);
    else activeQuadrants.push(2, 3);
  } else if (trigFunc === 'tan') {
    if (isPositive) activeQuadrants.push(1, 3);
    else activeQuadrants.push(2, 4);
  }

  // Calculate extracted angles
  const solutionsDeg = [];
  const solutionsRad = [];
  activeQuadrants.forEach(q => {
    let d = 0;
    if (q === 1) d = alphaDeg;
    else if (q === 2) d = 180 - alphaDeg;
    else if (q === 3) d = 180 + alphaDeg;
    else if (q === 4) d = 360 - alphaDeg;
    solutionsDeg.push({ quadrant: q, deg: Math.round(d * 10) / 10 });
    solutionsRad.push({ quadrant: q, rad: Math.round(((d * Math.PI) / 180) * 1000) / 1000 });
  });

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Compass className="w-5 h-5 text-sky-400" />
            3-Step ASTC Trig Equation Solver
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            RVHS Integrated Math Topic 9 • ASTC Quadrant Visualizer
          </p>
        </div>

        {/* DEG vs RAD mode toggle */}
        <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <span className="text-xs font-mono px-2 text-slate-400">Angle Mode:</span>
          <button
            onClick={() => setIsRad(false)}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              !isRad ? 'bg-sky-500 text-slate-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            DEG (°)
          </button>
          <button
            onClick={() => setIsRad(true)}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              isRad ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            RAD (rad)
          </button>
        </div>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Function:</label>
          <div className="flex gap-2">
            {['sin', 'cos', 'tan'].map(fn => (
              <button
                key={fn}
                onClick={() => setTrigFunc(fn)}
                className={`flex-1 py-2 rounded-xl font-mono text-sm font-bold uppercase transition-all ${
                  trigFunc === fn
                    ? 'bg-sky-500 text-slate-950 shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                }`}
              >
                {fn}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Value (e.g. -0.5, 0.707):</label>
          <input
            type="number"
            step="0.01"
            value={valStr}
            onChange={(e) => setValStr(e.target.value)}
            className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-xl font-mono text-slate-100 focus:outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Quick RVHS Presets:</label>
          <div className="flex flex-wrap gap-1.5">
            {[
              { label: '-0.5', v: '-0.5' },
              { label: '0.5', v: '0.5' },
              { label: '-0.866', v: '-0.866' },
              { label: '0.707', v: '0.707' },
              { label: '-1.0', v: '-1.0' },
            ].map(p => (
              <button
                key={p.v}
                onClick={() => setValStr(p.v)}
                className="px-2 py-1 rounded bg-slate-800 text-xs font-mono text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {!isValid && (
        <div className="p-3 bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-400" />
          For sin and cos, the ratio must lie between -1 and +1.
        </div>
      )}

      {isValid && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* ASTC 4-Quadrant Visual Grid */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col items-center">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
              ASTC Quadrant Grid (All - Sin - Tan - Cos)
            </h4>
            <div className="grid grid-cols-2 gap-3 w-64 h-64">
              {/* Q2: Sine */}
              <div className={`rounded-xl p-3 flex flex-col justify-between border transition-all ${
                activeQuadrants.includes(2)
                  ? 'bg-sky-500/20 border-sky-400 shadow-lg shadow-sky-500/20 text-sky-200'
                  : 'bg-slate-900/50 border-slate-800 text-slate-500'
              }`}>
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span>Q2</span>
                  <span className="text-sm font-bold text-sky-400">S (Sin +)</span>
                </div>
                <div className="text-[11px] font-mono">{isRad ? 'π - α' : '180° - α'}</div>
              </div>

              {/* Q1: All */}
              <div className={`rounded-xl p-3 flex flex-col justify-between border transition-all ${
                activeQuadrants.includes(1)
                  ? 'bg-sky-500/20 border-sky-400 shadow-lg shadow-sky-500/20 text-sky-200'
                  : 'bg-slate-900/50 border-slate-800 text-slate-500'
              }`}>
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span>Q1</span>
                  <span className="text-sm font-bold text-emerald-400">A (All +)</span>
                </div>
                <div className="text-[11px] font-mono">{isRad ? 'α' : 'α'}</div>
              </div>

              {/* Q3: Tan */}
              <div className={`rounded-xl p-3 flex flex-col justify-between border transition-all ${
                activeQuadrants.includes(3)
                  ? 'bg-sky-500/20 border-sky-400 shadow-lg shadow-sky-500/20 text-sky-200'
                  : 'bg-slate-900/50 border-slate-800 text-slate-500'
              }`}>
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span>Q3</span>
                  <span className="text-sm font-bold text-amber-400">T (Tan +)</span>
                </div>
                <div className="text-[11px] font-mono">{isRad ? 'π + α' : '180° + α'}</div>
              </div>

              {/* Q4: Cos */}
              <div className={`rounded-xl p-3 flex flex-col justify-between border transition-all ${
                activeQuadrants.includes(4)
                  ? 'bg-sky-500/20 border-sky-400 shadow-lg shadow-sky-500/20 text-sky-200'
                  : 'bg-slate-900/50 border-slate-800 text-slate-500'
              }`}>
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span>Q4</span>
                  <span className="text-sm font-bold text-indigo-400">C (Cos +)</span>
                </div>
                <div className="text-[11px] font-mono">{isRad ? '2π - α' : '360° - α'}</div>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 font-mono mt-3">
              Highlighted quadrants contain valid solutions for <span className="text-sky-300 font-bold">{trigFunc}(x) = {numVal}</span>
            </p>
          </div>

          {/* Step by Step Breakdown */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <span className="text-xs font-mono text-sky-400 uppercase font-bold">Step 1: Acute Reference Angle (α)</span>
              <p className="text-xs text-slate-300">
                Ignore the negative sign on your calculator!
              </p>
              <p className="text-sm font-mono text-slate-100 font-bold">
                α = {trigFunc}⁻¹(|{numVal}|) = {isRad ? `${alphaRad} rad` : `${alphaDeg}°`}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <span className="text-xs font-mono text-amber-400 uppercase font-bold">Step 2: Quadrant Check</span>
              <p className="text-xs text-slate-300">
                Since {trigFunc}(x) is <strong className={isPositive ? "text-emerald-400" : "text-rose-400"}>{isPositive ? "positive" : "negative"}</strong>, solutions lie in:
              </p>
              <div className="flex gap-2 font-mono text-xs font-bold text-slate-100">
                {activeQuadrants.map(q => (
                  <span key={q} className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg">
                    Quadrant {q}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-2">
              <span className="text-xs font-mono text-emerald-400 uppercase font-bold">Step 3: Solution Extraction</span>
              <div className="space-y-1 font-mono text-sm">
                {(isRad ? solutionsRad : solutionsDeg).map(sol => (
                  <div key={sol.quadrant} className="flex justify-between items-center text-slate-200">
                    <span className="text-xs text-slate-400">Quad {sol.quadrant}:</span>
                    <span className="font-bold text-emerald-300">
                      x = {isRad ? `${sol.rad} rad` : `${sol.deg}°`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
