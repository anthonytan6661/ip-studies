import React, { useState } from 'react';
import { Compass, AlertCircle } from 'lucide-react';

export default function ASTCSolver({ lang = 'zh', theme = 'paper' }) {
  const [trigFunc, setTrigFunc] = useState('sin');
  const [valStr, setValStr] = useState('-0.5');
  const [isRad, setIsRad] = useState(false);
  const isZh = lang === 'zh';

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
    <div className={`rounded-2xl border p-4 sm:p-6 shadow-xl space-y-6 ${
      theme === 'dark' ? 'bg-[#111a2e] border-slate-800 text-slate-100' : 'bg-white border-[#ded5c3] text-[#111827]'
    }`}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <Compass className="w-6 h-6 text-blue-600 dark:text-sky-400" />
            {isZh ? '3步 ASTC 三角方程求解计算器' : '3-Step ASTC Trig Equation Solver'}
          </h3>
          <p className="text-xs sm:text-sm opacity-75 font-mono">
            {isZh ? '立化中三综合数学专题9 · 象限判定与锐角提取神器' : 'RVHS Integrated Math Topic 9 • ASTC Quadrant Visualizer'}
          </p>
        </div>

        {/* DEG vs RAD mode toggle */}
        <div className={`flex items-center gap-1.5 p-1 rounded-xl border ${
          theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-300'
        }`}>
          <span className="text-xs font-mono px-2 font-bold opacity-70">
            {isZh ? '模式：' : 'Mode:'}
          </span>
          <button
            onClick={() => setIsRad(false)}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              !isRad ? 'bg-blue-600 text-white shadow-xs' : 'opacity-60 hover:opacity-100'
            }`}
          >
            DEG (角度°)
          </button>
          <button
            onClick={() => setIsRad(true)}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              isRad ? 'bg-amber-600 text-white shadow-xs' : 'opacity-60 hover:opacity-100'
            }`}
          >
            RAD (弧度rad)
          </button>
        </div>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase font-bold opacity-70 mb-1">
            {isZh ? '选择三角函数：' : 'Function:'}
          </label>
          <div className="flex gap-2">
            {['sin', 'cos', 'tan'].map(fn => (
              <button
                key={fn}
                onClick={() => setTrigFunc(fn)}
                className={`flex-1 py-2 rounded-xl font-mono text-sm sm:text-base font-bold uppercase transition-all ${
                  trigFunc === fn
                    ? 'bg-blue-600 text-white shadow-xs'
                    : theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 border border-slate-300 text-slate-800'
                }`}
              >
                {fn}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase font-bold opacity-70 mb-1">
            {isZh ? '输入等于的数值 (如 -0.5)：' : 'Value (e.g. -0.5):'}
          </label>
          <input
            type="number"
            step="0.01"
            value={valStr}
            onChange={(e) => setValStr(e.target.value)}
            className={`w-full px-4 py-2 border rounded-xl font-mono font-bold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              theme === 'dark' ? 'bg-slate-950 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
            }`}
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase font-bold opacity-70 mb-1">
            {isZh ? '立化高频预设值：' : 'RVHS Presets:'}
          </label>
          <div className="flex flex-wrap gap-1.5">
            {[
              { label: '-0.5', v: '-0.5' },
              { label: '0.5', v: '0.5' },
              { label: '-0.866 (√3/2)', v: '-0.866' },
              { label: '0.707 (√2/2)', v: '0.707' },
              { label: '-1.0', v: '-1.0' },
            ].map(p => (
              <button
                key={p.v}
                onClick={() => setValStr(p.v)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border transition-colors ${
                  theme === 'dark' ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700' : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {!isValid && (
        <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-500/40 text-rose-800 dark:text-rose-300 text-xs sm:text-sm rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          {isZh ? '对于 sin 和 cos，取值范围必须介于 -1 和 +1 之间！' : 'For sin and cos, ratio must be between -1 and +1.'}
        </div>
      )}

      {isValid && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* ASTC 4-Quadrant Visual Grid */}
          <div className={`p-5 rounded-2xl border flex flex-col items-center ${
            theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-[#faf8f4] border-slate-300'
          }`}>
            <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider mb-4 font-bold opacity-75">
              {isZh ? 'ASTC 四象限图示 (All - Sin - Tan - Cos)' : 'ASTC Quadrant Grid'}
            </h4>
            <div className="grid grid-cols-2 gap-3 w-64 h-64">
              {/* Q2: Sine */}
              <div className={`rounded-xl p-3 flex flex-col justify-between border transition-all ${
                activeQuadrants.includes(2)
                  ? 'bg-blue-600 text-white shadow-md font-bold'
                  : 'bg-black/5 dark:bg-white/5 opacity-50 border-transparent'
              }`}>
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span>Q2</span>
                  <span className="text-sm font-bold">S (正弦正)</span>
                </div>
                <div className="text-xs font-mono">{isRad ? 'π - α' : '180° - α'}</div>
              </div>

              {/* Q1: All */}
              <div className={`rounded-xl p-3 flex flex-col justify-between border transition-all ${
                activeQuadrants.includes(1)
                  ? 'bg-blue-600 text-white shadow-md font-bold'
                  : 'bg-black/5 dark:bg-white/5 opacity-50 border-transparent'
              }`}>
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span>Q1</span>
                  <span className="text-sm font-bold">A (全部为正)</span>
                </div>
                <div className="text-xs font-mono">{isRad ? 'α' : 'α'}</div>
              </div>

              {/* Q3: Tan */}
              <div className={`rounded-xl p-3 flex flex-col justify-between border transition-all ${
                activeQuadrants.includes(3)
                  ? 'bg-blue-600 text-white shadow-md font-bold'
                  : 'bg-black/5 dark:bg-white/5 opacity-50 border-transparent'
              }`}>
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span>Q3</span>
                  <span className="text-sm font-bold">T (正切正)</span>
                </div>
                <div className="text-xs font-mono">{isRad ? 'π + α' : '180° + α'}</div>
              </div>

              {/* Q4: Cos */}
              <div className={`rounded-xl p-3 flex flex-col justify-between border transition-all ${
                activeQuadrants.includes(4)
                  ? 'bg-blue-600 text-white shadow-md font-bold'
                  : 'bg-black/5 dark:bg-white/5 opacity-50 border-transparent'
              }`}>
                <div className="flex justify-between items-center text-xs font-mono font-bold">
                  <span>Q4</span>
                  <span className="text-sm font-bold">C (余弦正)</span>
                </div>
                <div className="text-xs font-mono">{isRad ? '2π - α' : '360° - α'}</div>
              </div>
            </div>
            <p className="text-xs opacity-75 font-mono mt-3">
              {isZh ? '深色高亮象限代表当前方程存在解的象限' : 'Highlighted quadrants contain valid solutions.'}
            </p>
          </div>

          {/* Step by Step Breakdown */}
          <div className="space-y-3.5">
            <div className={`p-4 rounded-xl border space-y-1 ${
              theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-[#faf8f4] border-slate-300'
            }`}>
              <span className="text-xs font-mono font-bold uppercase text-blue-700 dark:text-sky-400">
                {isZh ? '第1步：锐角基准角 (Acute Reference Angle α)' : 'Step 1: Acute Reference Angle (α)'}
              </span>
              <p className="text-xs sm:text-sm opacity-80">
                {isZh ? '按计算器求基准角时坚决忽略负号！' : 'Ignore negative signs on your calculator!'}
              </p>
              <p className="text-base font-mono font-bold text-blue-700 dark:text-sky-300">
                α = {trigFunc}⁻¹(|{numVal}|) = {isRad ? `${alphaRad} rad` : `${alphaDeg}°`}
              </p>
            </div>

            <div className={`p-4 rounded-xl border space-y-1 ${
              theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-[#faf8f4] border-slate-300'
            }`}>
              <span className="text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-400">
                {isZh ? '第2步：象限判定 (Quadrant Check)' : 'Step 2: Quadrant Check'}
              </span>
              <p className="text-xs sm:text-sm opacity-80">
                {isZh ? `因为 ${trigFunc}(x) 值为` : `Since ${trigFunc}(x) is `}
                <strong className={isPositive ? "text-emerald-600 font-bold" : "text-rose-600 font-bold"}>
                  {isPositive ? (isZh ? '【正数】' : 'Positive') : (isZh ? '【负数】' : 'Negative')}
                </strong>
                {isZh ? '，解位于：' : ', solutions lie in:'}
              </p>
              <div className="flex gap-2 font-mono text-xs font-bold mt-1">
                {activeQuadrants.map(q => (
                  <span key={q} className="px-3 py-1 bg-amber-100 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 rounded-lg border border-amber-300 dark:border-amber-500/30">
                    {isZh ? `第 ${q} 象限` : `Quadrant ${q}`}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-4 rounded-xl border space-y-2 ${
              theme === 'dark' ? 'bg-emerald-950/30 border-emerald-500/30' : 'bg-emerald-50 border-emerald-300'
            }`}>
              <span className="text-xs font-mono font-bold uppercase text-emerald-700 dark:text-emerald-400">
                {isZh ? '第3步：最终提取解 (Extracted Solutions)' : 'Step 3: Extracted Solutions'}
              </span>
              <div className="space-y-1 font-mono text-sm sm:text-base">
                {(isRad ? solutionsRad : solutionsDeg).map(sol => (
                  <div key={sol.quadrant} className="flex justify-between items-center font-bold">
                    <span className="text-xs opacity-70">{isZh ? `象限 ${sol.quadrant}` : `Quad ${sol.quadrant}`}:</span>
                    <span className="text-emerald-700 dark:text-emerald-300">
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
