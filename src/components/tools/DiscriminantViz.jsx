import React, { useState } from 'react';
import { Activity, AlertTriangle, CheckCircle2, TrendingUp } from 'lucide-react';

export default function DiscriminantViz() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-4);
  const [c, setC] = useState(5);

  const discriminant = b * b - 4 * a * c;
  const isAboveAxis = a > 0 && discriminant < 0;
  const isBelowAxis = a < 0 && discriminant < 0;

  // Vertex
  const vertexX = -b / (2 * a);
  const vertexY = a * vertexX * vertexX + b * vertexX + c;

  // Parabola points for SVG
  const width = 320;
  const height = 220;
  const originX = width / 2;
  const originY = height / 2;
  const scale = 16; // 16px per unit

  const pathPoints = [];
  for (let px = -10; px <= 10; px += 0.25) {
    const py = a * px * px + b * px + c;
    const svgX = originX + px * scale;
    const svgY = originY - py * scale;
    pathPoints.push(`${svgX},${svgY}`);
  }
  const pathData = `M ${pathPoints.join(' L ')}`;

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-400" />
            Quadratic Discriminant & Curve Visualizer
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            RVHS Integrated Math Topic 3 • b² - 4ac & Axis Condition Explorer
          </p>
        </div>

        {/* Secret Trap Badge */}
        {isAboveAxis && (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse">
            ★ LIES ENTIRELY ABOVE X-AXIS (a &gt; 0, b²-4ac &lt; 0)
          </span>
        )}
        {isBelowAxis && (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
            ★ LIES ENTIRELY BELOW X-AXIS (a &lt; 0, b²-4ac &lt; 0)
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Sliders */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
              <span>Coefficient a (Orientation):</span>
              <span className="font-bold text-indigo-400">{a}</span>
            </div>
            <input
              type="range"
              min="-4"
              max="4"
              step="1"
              value={a}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setA(val === 0 ? 1 : val); // prevent a = 0
              }}
              className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
            <span className="text-[11px] text-slate-500 font-mono">
              {a > 0 ? "Smiling curve (U-shaped, Minimum point)" : "Frowning curve (Inverted, Maximum point)"}
            </span>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
              <span>Coefficient b:</span>
              <span className="font-bold text-sky-400">{b}</span>
            </div>
            <input
              type="range"
              min="-8"
              max="8"
              step="1"
              value={b}
              onChange={(e) => setB(parseInt(e.target.value))}
              className="w-full accent-sky-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
              <span>Coefficient c (Y-intercept):</span>
              <span className="font-bold text-amber-400">{c}</span>
            </div>
            <input
              type="range"
              min="-10"
              max="10"
              step="1"
              value={c}
              onChange={(e) => setC(parseInt(e.target.value))}
              className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Quick Presets */}
          <div className="pt-2">
            <span className="text-xs font-mono text-slate-400 uppercase block mb-1.5">Classic Exam Scenarios:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setA(1); setB(-4); setC(5); }}
                className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                Entirely Above (b²-4ac &lt; 0)
              </button>
              <button
                onClick={() => { setA(1); setB(-4); setC(4); }}
                className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                Tangent (b²-4ac = 0)
              </button>
              <button
                onClick={() => { setA(1); setB(-4); setC(3); }}
                className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                2 Cuts (b²-4ac &gt; 0)
              </button>
            </div>
          </div>
        </div>

        {/* Live Responsive SVG Graph & Computed Metrics */}
        <div className="space-y-4">
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-center items-center overflow-hidden">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-[320px] h-auto overflow-hidden">
              {/* Axes */}
              <line x1="0" y1={originY} x2={width} y2={originY} stroke="#334155" strokeWidth="1.5" />
              <line x1={originX} y1="0" x2={originX} y2={height} stroke="#334155" strokeWidth="1.5" />
              <text x={width - 15} y={originY - 5} fill="#64748b" fontSize="10" fontFamily="monospace">x</text>
              <text x={originX + 5} y={15} fill="#64748b" fontSize="10" fontFamily="monospace">y</text>

              {/* Parabola Curve */}
              <path d={pathData} fill="none" stroke="#6366f1" strokeWidth="2.5" />

              {/* Vertex Point */}
              <circle
                cx={originX + vertexX * scale}
                cy={originY - vertexY * scale}
                r="4"
                fill="#f59e0b"
              />
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-400 block mb-1">Discriminant (b² - 4ac):</span>
              <span className={`text-base font-bold ${
                discriminant > 0 ? 'text-emerald-400' : discriminant === 0 ? 'text-amber-400' : 'text-rose-400'
              }`}>
                {discriminant}
              </span>
              <span className="block text-[11px] text-slate-400 mt-0.5">
                {discriminant > 0 ? "2 Distinct Real Roots" : discriminant === 0 ? "1 Real Root (Tangent)" : "0 Real Roots"}
              </span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-slate-400 block mb-1">Turning Point (Vertex):</span>
              <span className="text-base font-bold text-slate-200">
                ({vertexX.toFixed(1)}, {vertexY.toFixed(1)})
              </span>
              <span className="block text-[11px] text-slate-400 mt-0.5">
                {a > 0 ? "Global Minimum" : "Global Maximum"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
