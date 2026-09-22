import React, { useState } from 'react';
import { Scale, AlertTriangle, ArrowRight } from 'lucide-react';

export default function MoleCalculator({ lang = 'zh', theme = 'paper' }) {
  const [calcMode, setCalcMode] = useState('mass'); // mass, gas, solution, limiting
  const isZh = lang === 'zh';

  // Mode 1: Mass
  const [massGrams, setMassGrams] = useState('12');
  const [molarMass, setMolarMass] = useState('24'); // e.g. Mg

  // Mode 2: Gas
  const [gasVolume, setGasVolume] = useState('480');
  const [gasUnit, setGasUnit] = useState('cm3'); // cm3 or dm3

  // Mode 3: Solution
  const [concentration, setConcentration] = useState('0.5');
  const [solVolume, setSolVolume] = useState('250');
  const [solUnit, setSolUnit] = useState('cm3');

  // Mode 4: Limiting Reactant
  const [molA, setMolA] = useState('0.4');
  const [coeffA, setCoeffA] = useState('1');
  const [molB, setMolB] = useState('0.6');
  const [coeffB, setCoeffB] = useState('2');

  // Calculations
  const massMoles = (parseFloat(massGrams) || 0) / (parseFloat(molarMass) || 1);
  const gasVolDm3 = gasUnit === 'cm3' ? (parseFloat(gasVolume) || 0) / 1000 : (parseFloat(gasVolume) || 0);
  const gasMoles = gasVolDm3 / 24;
  const solVolDm3 = solUnit === 'cm3' ? (parseFloat(solVolume) || 0) / 1000 : (parseFloat(solVolume) || 0);
  const solMoles = (parseFloat(concentration) || 0) * solVolDm3;

  // Limiting Reactant calculation
  const ratioA = (parseFloat(molA) || 0) / (parseFloat(coeffA) || 1);
  const ratioB = (parseFloat(molB) || 0) / (parseFloat(coeffB) || 1);
  const limiting = ratioA < ratioB ? 'A' : 'B';

  return (
    <div className={`rounded-2xl border p-4 sm:p-6 shadow-xl space-y-6 ${
      theme === 'dark' ? 'bg-[#111a2e] border-slate-800 text-slate-100' : 'bg-white border-[#ded5c3] text-[#111827]'
    }`}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <Scale className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            {isZh ? '摩尔概念 3步流水线装配计算器' : 'Mole Concept 3-Step Assembly Line Tool'}
          </h3>
          <p className="text-xs sm:text-sm opacity-75 font-mono">
            {isZh ? '立化纯化学 · 气体单位陷阱自动侦测与限量反应物判断' : 'RVHS Pure Chemistry • Unit Trap Detector & Stoichiometry Engine'}
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'mass', label: isZh ? '1. 质量求摩尔' : '1. Mass (g)' },
            { id: 'gas', label: isZh ? '2. 气体求摩尔' : '2. Gas (24 dm³)' },
            { id: 'solution', label: isZh ? '3. 溶液求摩尔' : '3. Solution (M·V)' },
            { id: 'limiting', label: isZh ? '4. 限量反应物判定' : 'Limiting Reactant' },
          ].map(m => (
            <button
              key={m.id}
              onClick={() => setCalcMode(m.id)}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
                calcMode === m.id
                  ? 'bg-amber-600 text-white shadow-xs'
                  : theme === 'dark' ? 'bg-slate-900 text-slate-300 border border-slate-800' : 'bg-slate-100 border border-slate-300 text-slate-800'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Assembly Line Banner */}
      <div className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono font-bold ${
        theme === 'dark' ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-[#faf8f4] border-slate-300 text-slate-800'
      }`}>
        <span className="text-blue-700 dark:text-sky-400">{isZh ? '第1步：统统换成摩尔' : 'Step 1: Convert to Moles'}</span>
        <ArrowRight className="w-4 h-4 opacity-40 hidden sm:inline" />
        <span className="text-amber-700 dark:text-amber-400">{isZh ? '第2步：方程式比例桥梁' : 'Step 2: Mole Ratio Bridge'}</span>
        <ArrowRight className="w-4 h-4 opacity-40 hidden sm:inline" />
        <span className="text-emerald-700 dark:text-emerald-400">{isZh ? '第3步：化为题目所需单位' : 'Step 3: Convert to Desired Units'}</span>
      </div>

      {/* Mode 1: Mass to Moles */}
      {calcMode === 'mass' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase font-bold opacity-75 mb-1">
                {isZh ? '物质质量 (克 g)：' : 'Mass in Grams (g):'}
              </label>
              <input
                type="number"
                value={massGrams}
                onChange={(e) => setMassGrams(e.target.value)}
                className={`w-full px-4 py-2 border rounded-xl font-mono font-bold text-sm sm:text-base ${
                  theme === 'dark' ? 'bg-slate-950 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                }`}
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase font-bold opacity-75 mb-1">
                {isZh ? '元素周期表摩尔质量 (Mr / Ar)：' : 'Molar Mass (Mr) from Periodic Table:'}
              </label>
              <input
                type="number"
                value={molarMass}
                onChange={(e) => setMolarMass(e.target.value)}
                className={`w-full px-4 py-2 border rounded-xl font-mono font-bold text-sm sm:text-base ${
                  theme === 'dark' ? 'bg-slate-950 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                }`}
              />
              <span className="text-xs opacity-60 font-mono mt-1 block">
                {isZh ? '如：C = 12, Mg = 24, CaCO₃ = 100, H₂O = 18' : 'e.g. C = 12, Mg = 24, CaCO₃ = 100, H₂O = 18'}
              </span>
            </div>
          </div>

          <div className={`p-5 rounded-2xl border space-y-3 ${
            theme === 'dark' ? 'bg-slate-950 border-amber-500/30' : 'bg-amber-50/50 border-amber-300'
          }`}>
            <span className="text-xs font-mono uppercase font-bold text-amber-700 dark:text-amber-400">
              {isZh ? '核心公式：摩尔数 = 质量 / 摩尔质量' : 'Formula: Moles = Mass / Mr'}
            </span>
            <div className="text-3xl font-mono font-bold text-amber-700 dark:text-amber-300">
              {massMoles.toFixed(4)} <span className="text-sm font-normal opacity-70">mol</span>
            </div>
            <p className="text-xs font-mono opacity-75">
              {isZh ? '演算过程：' : 'Working: '}{massGrams} g ÷ {molarMass} g/mol = {massMoles.toFixed(4)} mol
            </p>
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-500/30 text-xs text-rose-900 dark:text-rose-200 font-mono">
              ⚠️ {isZh ? '立化评分死律：最终答案务必写上单位 "mol"，漏写直接扣1分！' : 'Always write "mol" unit! 1 mark deducted if missing.'}
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Gas Volume */}
      {calcMode === 'gas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase font-bold opacity-75 mb-1">
                {isZh ? '气体体积：' : 'Gas Volume:'}
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={gasVolume}
                  onChange={(e) => setGasVolume(e.target.value)}
                  className={`flex-1 px-4 py-2 border rounded-xl font-mono font-bold text-sm sm:text-base ${
                    theme === 'dark' ? 'bg-slate-950 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
                <button
                  onClick={() => setGasUnit(gasUnit === 'cm3' ? 'dm3' : 'cm3')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                    gasUnit === 'cm3' ? 'bg-rose-100 dark:bg-rose-950/50 border-rose-300 text-rose-800 dark:text-rose-300' : 'bg-emerald-100 dark:bg-emerald-950/50 border-emerald-300 text-emerald-800 dark:text-emerald-300'
                  }`}
                >
                  {isZh ? '当前单位：' : 'Unit: '}<strong>{gasUnit}</strong> ({isZh ? '点此切换' : 'Click to toggle'})
                </button>
              </div>
            </div>

            {gasUnit === 'cm3' && (
              <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-500/30 rounded-xl text-xs text-rose-900 dark:text-rose-200 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                  {isZh ? '🚨 侦测到立化常客失分陷阱！' : 'CRITICAL RVHS TRAP DETECTED:'}
                </div>
                <p>
                  {isZh 
                    ? `题目给出的是 cm³。但常温常压摩尔气体体积公式严格基于 dm³！必须先除以 1000：${gasVolume} cm³ ÷ 1000 = ${gasVolDm3} dm³，再除以 24！`
                    : `Volume is in cm³. Formula strictly requires dm³! Divide by 1000 first: ${gasVolume} cm³ ÷ 1000 = ${gasVolDm3} dm³.`}
                </p>
              </div>
            )}
          </div>

          <div className={`p-5 rounded-2xl border space-y-3 ${
            theme === 'dark' ? 'bg-slate-950 border-sky-500/30' : 'bg-blue-50/50 border-blue-300'
          }`}>
            <span className="text-xs font-mono uppercase font-bold text-blue-700 dark:text-sky-400">
              {isZh ? '公式：摩尔数 = 气体体积 (dm³) / 24' : 'Formula: Moles = Volume (dm³) / 24'}
            </span>
            <div className="text-3xl font-mono font-bold text-blue-700 dark:text-sky-300">
              {gasMoles.toFixed(4)} <span className="text-sm font-normal opacity-70">mol</span>
            </div>
            <p className="text-xs font-mono opacity-75">
              {isZh ? '演算过程：' : 'Working: '}{gasVolDm3} dm³ ÷ 24 dm³/mol = {gasMoles.toFixed(4)} mol
            </p>
          </div>
        </div>
      )}

      {/* Mode 3: Solution Concentration */}
      {calcMode === 'solution' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase font-bold opacity-75 mb-1">
                {isZh ? '溶液摩尔浓度 (mol/dm³ 或 M)：' : 'Concentration (mol/dm³ or M):'}
              </label>
              <input
                type="number"
                step="0.1"
                value={concentration}
                onChange={(e) => setConcentration(e.target.value)}
                className={`w-full px-4 py-2 border rounded-xl font-mono font-bold text-sm sm:text-base ${
                  theme === 'dark' ? 'bg-slate-950 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                }`}
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase font-bold opacity-75 mb-1">
                {isZh ? '溶液体积：' : 'Solution Volume:'}
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={solVolume}
                  onChange={(e) => setSolVolume(e.target.value)}
                  className={`flex-1 px-4 py-2 border rounded-xl font-mono font-bold text-sm sm:text-base ${
                    theme === 'dark' ? 'bg-slate-950 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
                <button
                  onClick={() => setSolUnit(solUnit === 'cm3' ? 'dm3' : 'cm3')}
                  className="px-4 py-2 rounded-xl text-xs font-mono font-bold border bg-slate-100 dark:bg-slate-800"
                >
                  {isZh ? '单位：' : 'Unit: '}<strong>{solUnit}</strong>
                </button>
              </div>
              {solUnit === 'cm3' && (
                <span className="text-xs text-amber-700 dark:text-amber-400 font-mono mt-1 block font-bold">
                  {isZh ? `自动除以 1000 换算：${solVolume} cm³ = ${solVolDm3} dm³` : `Converted: ${solVolume} cm³ = ${solVolDm3} dm³`}
                </span>
              )}
            </div>
          </div>

          <div className={`p-5 rounded-2xl border space-y-3 ${
            theme === 'dark' ? 'bg-slate-950 border-emerald-500/30' : 'bg-emerald-50/50 border-emerald-300'
          }`}>
            <span className="text-xs font-mono uppercase font-bold text-emerald-700 dark:text-emerald-400">
              {isZh ? '公式：摩尔数 = 浓度 × 体积 (dm³)' : 'Formula: Moles = Concentration × Vol (dm³)'}
            </span>
            <div className="text-3xl font-mono font-bold text-emerald-700 dark:text-emerald-300">
              {solMoles.toFixed(4)} <span className="text-sm font-normal opacity-70">mol</span>
            </div>
            <p className="text-xs font-mono opacity-75">
              {isZh ? '演算过程：' : 'Working: '}{concentration} mol/dm³ × {solVolDm3} dm³ = {solMoles.toFixed(4)} mol
            </p>
          </div>
        </div>
      )}

      {/* Mode 4: Limiting Reactant */}
      {calcMode === 'limiting' && (
        <div className="space-y-4">
          <div className={`p-4 rounded-xl border text-xs sm:text-sm font-mono leading-relaxed ${
            theme === 'dark' ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-[#faf8f4] border-slate-300 text-slate-900'
          }`}>
            🥪 <strong>{isZh ? '奶酪吐司原理 (The Cheese Toastie Principle)：' : 'The Cheese Toastie Principle: '}</strong>
            {isZh 
              ? '你有10片吐司和2片奶酪。你最多能做几个三明治？只能做2个！奶酪用光后迫使反应全面停止。奶酪是【限量物】，吐司是【过量物】。所有生成物的最大产率必须 100% 严格根据限量物计算！'
              : '10 slices of bread + 2 slices of cheese = only 2 sandwiches. The cheese runs out first, stopping the reaction. The limiting reactant dictates maximum product yield.'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-xl border space-y-2 ${
              theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-300'
            }`}>
              <span className="text-xs font-mono font-bold text-blue-700 dark:text-sky-400 uppercase">
                {isZh ? '反应物 A (Reactant A)' : 'Reactant A'}
              </span>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-xs opacity-75 block">{isZh ? '提供摩尔数：' : 'Moles:'}</label>
                  <input
                    type="number"
                    value={molA}
                    onChange={(e) => setMolA(e.target.value)}
                    className={`w-full px-3 py-1.5 border rounded-lg font-mono font-bold text-sm ${
                      theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
                <div className="w-24">
                  <label className="text-xs opacity-75 block">{isZh ? '方程系数：' : 'Coeff:'}</label>
                  <input
                    type="number"
                    value={coeffA}
                    onChange={(e) => setCoeffA(e.target.value)}
                    className={`w-full px-3 py-1.5 border rounded-lg font-mono font-bold text-sm ${
                      theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>
              <p className="text-xs font-mono opacity-75">{isZh ? '归一化比例：' : 'Ratio: '}{ratioA.toFixed(3)}</p>
            </div>

            <div className={`p-4 rounded-xl border space-y-2 ${
              theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-300'
            }`}>
              <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 uppercase">
                {isZh ? '反应物 B (Reactant B)' : 'Reactant B'}
              </span>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-xs opacity-75 block">{isZh ? '提供摩尔数：' : 'Moles:'}</label>
                  <input
                    type="number"
                    value={molB}
                    onChange={(e) => setMolB(e.target.value)}
                    className={`w-full px-3 py-1.5 border rounded-lg font-mono font-bold text-sm ${
                      theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
                <div className="w-24">
                  <label className="text-xs opacity-75 block">{isZh ? '方程系数：' : 'Coeff:'}</label>
                  <input
                    type="number"
                    value={coeffB}
                    onChange={(e) => setCoeffB(e.target.value)}
                    className={`w-full px-3 py-1.5 border rounded-lg font-mono font-bold text-sm ${
                      theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>
              <p className="text-xs font-mono opacity-75">{isZh ? '归一化比例：' : 'Ratio: '}{ratioB.toFixed(3)}</p>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border flex items-center justify-between shadow-sm ${
            theme === 'dark' ? 'bg-slate-950 border-emerald-500/40' : 'bg-emerald-50 border-emerald-300'
          }`}>
            <div>
              <span className="text-xs font-mono opacity-75 uppercase block">{isZh ? '计算判定结果：' : 'Calculated Conclusion:'}</span>
              <span className="text-base sm:text-lg font-bold text-emerald-800 dark:text-emerald-300 font-mono">
                {isZh ? `反应物 ${limiting} 是【限量反应物 (Limiting Reactant)】！` : `Reactant ${limiting} is the LIMITING REACTANT!`}
              </span>
              <p className="text-xs opacity-75 mt-1">
                {isZh 
                  ? `反应物 ${limiting === 'A' ? 'B' : 'A'} 是过量反应物。计算产物产量时，必须完全忽略过量反应物！`
                  : `Reactant ${limiting === 'A' ? 'B' : 'A'} is in excess. All theoretical calculations must be based on Reactant ${limiting}.`}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold font-mono text-xl shadow-xs">
              {limiting}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
