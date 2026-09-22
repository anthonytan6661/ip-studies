import React, { useState } from 'react';
import { Activity } from 'lucide-react';

export default function DiscriminantViz({ lang = 'zh', theme = 'paper' }) {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-4);
  const [c, setC] = useState(5);
  const isZh = lang === 'zh';

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
    <div className={`rounded-2xl border p-4 sm:p-6 shadow-xl space-y-6 ${
      theme === 'dark' ? 'bg-[#111a2e] border-slate-800 text-slate-100' : 'bg-white border-[#ded5c3] text-[#111827]'
    }`}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 dark:border-white/10 pb-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <Activity className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            {isZh ? '二次判别式与抛物线几何动态画板' : 'Quadratic Discriminant & Curve Visualizer'}
          </h3>
          <p className="text-xs sm:text-sm opacity-75 font-mono">
            {isZh ? '立化中三综合数学专题3 · b² - 4ac 与坐标轴几何条件联动' : 'RVHS Integrated Math Topic 3 • b² - 4ac & Axis Condition Explorer'}
          </p>
        </div>

        {/* Secret Trap Badge */}
        {isAboveAxis && (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40 animate-pulse">
            ★ {isZh ? '曲线完全在 X 轴上方 (a > 0 且 b²-4ac < 0)' : 'LIES ENTIRELY ABOVE X-AXIS (a > 0, b²-4ac < 0)'}
          </span>
        )}
        {isBelowAxis && (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-100 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-500/40">
            ★ {isZh ? '曲线完全在 X 轴下方 (a < 0 且 b²-4ac < 0)' : 'LIES ENTIRELY BELOW X-AXIS (a < 0, b²-4ac < 0)'}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Sliders */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs sm:text-sm font-mono opacity-80 mb-1 font-bold">
              <span>{isZh ? '二次项系数 a (开口方向)：' : 'Coefficient a (Orientation):'}</span>
              <span className="font-bold text-indigo-600 dark:text-indigo-400 text-base">{a}</span>
            </div>
            <input
              type="range"
              min="-4"
              max="4"
              step="1"
              value={a}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setA(val === 0 ? 1 : val);
              }}
              className="w-full accent-indigo-600 h-2 rounded-lg cursor-pointer"
            />
            <span className="text-xs opacity-60 font-mono">
              {a > 0 
                ? (isZh ? '开口向上微笑 (U形, 有最低点 Minimum)' : 'Smiling curve (Minimum point)') 
                : (isZh ? '开口向下倒扣 (倒U形, 有最高点 Maximum)' : 'Frowning curve (Maximum point)')}
            </span>
          </div>

          <div>
            <div className="flex justify-between text-xs sm:text-sm font-mono opacity-80 mb-1 font-bold">
              <span>{isZh ? '一次项系数 b：' : 'Coefficient b:'}</span>
              <span className="font-bold text-blue-600 dark:text-sky-400 text-base">{b}</span>
            </div>
            <input
              type="range"
              min="-8"
              max="8"
              step="1"
              value={b}
              onChange={(e) => setB(parseInt(e.target.value))}
              className="w-full accent-blue-600 h-2 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs sm:text-sm font-mono opacity-80 mb-1 font-bold">
              <span>{isZh ? '常数项 c (Y轴截距)：' : 'Coefficient c (Y-intercept):'}</span>
              <span className="font-bold text-amber-600 dark:text-amber-400 text-base">{c}</span>
            </div>
            <input
              type="range"
              min="-10"
              max="10"
              step="1"
              value={c}
              onChange={(e) => setC(parseInt(e.target.value))}
              className="w-full accent-amber-600 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Quick Presets */}
          <div className="pt-2">
            <span className="text-xs font-mono opacity-75 uppercase font-bold block mb-1.5">
              {isZh ? '立化经典考场题型快捷切换：' : 'Classic Exam Scenarios:'}
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setA(1); setB(-4); setC(5); }}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg border transition-colors ${
                  theme === 'dark' ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {isZh ? '完全在上方 (b²-4ac < 0)' : 'Entirely Above (b²-4ac < 0)'}
              </button>
              <button
                onClick={() => { setA(1); setB(-4); setC(4); }}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg border transition-colors ${
                  theme === 'dark' ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {isZh ? '相切刚好碰1点 (b²-4ac = 0)' : 'Tangent (b²-4ac = 0)'}
              </button>
              <button
                onClick={() => { setA(1); setB(-4); setC(3); }}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg border transition-colors ${
                  theme === 'dark' ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {isZh ? '相交切2个交点 (b²-4ac > 0)' : '2 Cuts (b²-4ac > 0)'}
              </button>
            </div>
          </div>
        </div>

        {/* Live Responsive SVG Graph & Computed Metrics */}
        <div className="space-y-4">
          <div className={`p-4 rounded-xl border flex justify-center items-center overflow-hidden ${
            theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-[#faf8f4] border-slate-300'
          }`}>
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-[320px] h-auto overflow-hidden">
              {/* Axes */}
              <line x1="0" y1={originY} x2={width} y2={originY} stroke={theme === 'dark' ? "#334155" : "#94a3b8"} strokeWidth="1.5" />
              <line x1={originX} y1="0" x2={originX} y2={height} stroke={theme === 'dark' ? "#334155" : "#94a3b8"} strokeWidth="1.5" />
              <text x={width - 15} y={originY - 5} fill={theme === 'dark' ? "#94a3b8" : "#475569"} fontSize="12" fontFamily="monospace" fontWeight="bold">x</text>
              <text x={originX + 5} y={15} fill={theme === 'dark' ? "#94a3b8" : "#475569"} fontSize="12" fontFamily="monospace" fontWeight="bold">y</text>

              {/* Parabola Curve */}
              <path d={pathData} fill="none" stroke={theme === 'dark' ? "#818cf8" : "#4f46e5"} strokeWidth="3" />

              {/* Vertex Point */}
              <circle
                cx={originX + vertexX * scale}
                cy={originY - vertexY * scale}
                r="5"
                fill="#d97706"
              />
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-mono">
            <div className={`p-3.5 rounded-xl border ${
              theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-[#faf8f4] border-slate-300'
            }`}>
              <span className="opacity-70 block mb-1 font-bold">{isZh ? '判别式 (b² - 4ac)：' : 'Discriminant (b²-4ac):'}</span>
              <span className={`text-xl font-bold ${
                discriminant > 0 ? 'text-emerald-600 dark:text-emerald-400' : discriminant === 0 ? 'text-amber-600 dark:text-amber-400' : 'text-rose-600 dark:text-rose-400'
              }`}>
                {discriminant}
              </span>
              <span className="block text-xs opacity-75 mt-0.5">
                {discriminant > 0 
                  ? (isZh ? '2个不同实数根 (相交2次)' : '2 Real Roots') 
                  : discriminant === 0 
                    ? (isZh ? '1个实根 (切线相碰)' : '1 Root (Tangent)') 
                    : (isZh ? '0个实数根 (永不相碰)' : '0 Real Roots')}
              </span>
            </div>

            <div className={`p-3.5 rounded-xl border ${
              theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-[#faf8f4] border-slate-300'
            }`}>
              <span className="opacity-70 block mb-1 font-bold">{isZh ? '顶点极值点坐标：' : 'Vertex (h, k):'}</span>
              <span className="text-lg font-bold">
                ({vertexX.toFixed(1)}, {vertexY.toFixed(1)})
              </span>
              <span className="block text-xs opacity-75 mt-0.5">
                {a > 0 ? (isZh ? '最低点 (Minimum)' : 'Global Minimum') : (isZh ? '最高点 (Maximum)' : 'Global Maximum')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
