import React, { useState } from 'react';
import { Beaker, RotateCcw, Sparkles } from 'lucide-react';

const COMMON_SALTS = [
  { formula: "NaCl", name: "食盐 / 氯化钠 (Sodium Chloride)", soluble: true, isSPA: true, method: "滴定法 (Titration)", acid: "稀盐酸 Hydrochloric Acid (HCl)", otherReagent: "氢氧化钠溶液 Sodium Hydroxide (NaOH)" },
  { formula: "KNO3", name: "硝酸钾 (Potassium Nitrate)", soluble: true, isSPA: true, method: "滴定法 (Titration)", acid: "稀硝酸 Nitric Acid (HNO3)", otherReagent: "氢氧化钾溶液 Potassium Hydroxide (KOH)" },
  { formula: "(NH4)2SO4", name: "硫酸铵 (Ammonium Sulfate)", soluble: true, isSPA: true, method: "滴定法 (Titration)", acid: "稀硫酸 Sulfuric Acid (H2SO4)", otherReagent: "氨水 Aqueous Ammonia (NH3)" },
  { formula: "CuSO4", name: "硫酸铜 (Copper(II) Sulfate)", soluble: true, isSPA: false, method: "过量不溶物法 (Excess Insoluble Base/Carbonate)", acid: "温热稀硫酸 Sulfuric Acid (H2SO4)", otherReagent: "过量氧化铜 (CuO) 或 碳酸铜 (CuCO3)" },
  { formula: "MgSO4", name: "硫酸镁 (Magnesium Sulfate)", soluble: true, isSPA: false, method: "过量不溶物法 (Excess Insoluble Metal/Base)", acid: "温热稀硫酸 Sulfuric Acid (H2SO4)", otherReagent: "过量镁条 (Mg), 氧化镁 (MgO) 或 碳酸镁 (MgCO3)" },
  { formula: "Zn(NO3)2", name: "硝酸锌 (Zinc Nitrate)", soluble: true, isSPA: false, method: "过量不溶物法 (Excess Insoluble Metal/Base)", acid: "稀硝酸 Nitric Acid (HNO3)", otherReagent: "过量锌粒 (Zn), 氧化锌 (ZnO) 或 碳酸锌 (ZnCO3)" },
  { formula: "BaSO4", name: "硫酸钡 (Barium Sulfate)", soluble: false, isSPA: false, method: "沉淀法 (Precipitation)", acid: "可溶钡盐溶液: 硝酸钡 Ba(NO3)2 (aq)", otherReagent: "可溶硫酸盐溶液: 硫酸钠 Na2SO4 (aq) 或稀硫酸" },
  { formula: "AgCl", name: "氯化银 (Silver Chloride)", soluble: false, isSPA: false, method: "沉淀法 (Precipitation)", acid: "可溶银盐: 硝酸银 AgNO3 (aq)", otherReagent: "可溶氯化物: 氯化钠 NaCl (aq) 或稀盐酸" },
  { formula: "PbSO4", name: "硫酸铅 (Lead(II) Sulfate)", soluble: false, isSPA: false, method: "沉淀法 (Precipitation)", acid: "可溶铅盐: 硝酸铅 Pb(NO3)2 (aq)", otherReagent: "可溶硫酸盐: 硫酸钠 Na2SO4 (aq)" },
  { formula: "CaCO3", name: "碳酸钙 (Calcium Carbonate)", soluble: false, isSPA: false, method: "沉淀法 (Precipitation)", acid: "可溶钙盐: 氯化钙 CaCl2 (aq)", otherReagent: "可溶碳酸盐: 碳酸钠 Na2CO3 (aq)" },
];

export default function SaltPrepTree({ lang = 'zh', theme = 'paper' }) {
  const [selectedSalt, setSelectedSalt] = useState(COMMON_SALTS[3]); // default CuSO4
  const [userSolubleChoice, setUserSolubleChoice] = useState(null);
  const [userSpaChoice, setUserSpaChoice] = useState(null);
  const isZh = lang === 'zh';

  const resetInteractive = () => {
    setUserSolubleChoice(null);
    setUserSpaChoice(null);
  };

  const handleSelectSalt = (salt) => {
    setSelectedSalt(salt);
    resetInteractive();
  };

  return (
    <div className={`rounded-2xl border p-4 sm:p-6 shadow-xl space-y-6 ${
      theme === 'dark' ? 'bg-[#111a2e] border-slate-800 text-slate-100' : 'bg-white border-[#ded5c3] text-[#111827]'
    }`}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <Beaker className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            {isZh ? '盐的制备实验决策树 · 互动模拟器' : 'Salt Preparation Decision Tree Simulator'}
          </h3>
          <p className="text-xs sm:text-sm opacity-75 font-mono">
            {isZh ? '立化纯化学必考 4~5分 实验设计大题破解利器' : 'RVHS Pure Chemistry • 4–5 Mark Exam Protocol Solver'}
          </p>
        </div>
        <button
          onClick={resetInteractive}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl border transition-colors ${
            theme === 'dark' ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
          }`}
        >
          <RotateCcw className="w-3.5 h-3.5" /> {isZh ? '重置流程' : 'Reset Flow'}
        </button>
      </div>

      {/* Preset salt selector */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider font-mono mb-2 opacity-75">
          {isZh ? '点击选择需要制备的目标盐：' : 'Select Target Salt to Prepare:'}
        </label>
        <div className="flex flex-wrap gap-2">
          {COMMON_SALTS.map((salt) => (
            <button
              key={salt.formula}
              onClick={() => handleSelectSalt(salt)}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
                selectedSalt.formula === salt.formula
                  ? 'bg-emerald-600 text-white shadow-md'
                  : theme === 'dark'
                    ? 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                    : 'bg-[#f8f6f0] text-slate-800 border border-slate-300 hover:bg-slate-200'
              }`}
            >
              {salt.formula} ({salt.name.split(' ')[0]})
            </button>
          ))}
        </div>
      </div>

      {/* Flowchart Walkthrough */}
      <div className={`rounded-xl p-5 border space-y-5 ${
        theme === 'dark' ? 'bg-slate-950/80 border-slate-800' : 'bg-[#faf8f4] border-slate-300'
      }`}>
        <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-2">
          <span className="text-sm sm:text-base font-bold">
            {isZh ? '当前目标盐：' : 'Current Target: '}
            <span className="text-emerald-700 dark:text-emerald-400 font-mono">{selectedSalt.name} ({selectedSalt.formula})</span>
          </span>
          <span className="text-xs font-mono opacity-60">
            {isZh ? '2步判定' : '2-Step Logic'}
          </span>
        </div>

        {/* Step 1 */}
        <div className="space-y-3">
          <p className="text-sm sm:text-base font-bold">
            {isZh ? `第1步：${selectedSalt.formula} 在水中到底是否可溶？` : `Step 1: Is ${selectedSalt.formula} soluble in water?`}
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setUserSolubleChoice(true)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                userSolubleChoice === true
                  ? 'bg-blue-600 text-white shadow-xs'
                  : theme === 'dark' ? 'bg-slate-800 text-slate-200' : 'bg-white border border-slate-300 text-slate-800'
              }`}
            >
              {isZh ? '✅ 是，它完全可溶 (Soluble)' : 'YES, it is Soluble'}
            </button>
            <button
              onClick={() => setUserSolubleChoice(false)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                userSolubleChoice === false
                  ? 'bg-rose-600 text-white shadow-xs'
                  : theme === 'dark' ? 'bg-slate-800 text-slate-200' : 'bg-white border border-slate-300 text-slate-800'
              }`}
            >
              {isZh ? '❌ 否，它是不溶性沉淀 (Insoluble)' : 'NO, it is Insoluble'}
            </button>
          </div>

          {userSolubleChoice !== null && (
            <div className={`p-3 rounded-lg text-xs sm:text-sm font-mono ${
              userSolubleChoice === selectedSalt.soluble
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 font-bold'
                : 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-500/30 font-bold'
            }`}>
              {userSolubleChoice === selectedSalt.soluble
                ? (isZh ? `✓ 回答正确！根据溶解性表，${selectedSalt.formula} 确实是【${selectedSalt.soluble ? '可溶' : '不溶'}】的。` : `✓ Correct! ${selectedSalt.formula} is indeed ${selectedSalt.soluble ? 'soluble' : 'insoluble'}.`)
                : (isZh ? `✗ 留心陷阱！根据 SPA 溶解性法则，${selectedSalt.formula} 实际上是【${selectedSalt.soluble ? '可溶' : '不溶'}】的！` : `✗ Watch out! ${selectedSalt.formula} is actually ${selectedSalt.soluble ? 'soluble' : 'insoluble'}.`)}
            </div>
          )}
        </div>

        {/* Step 2 (if soluble) */}
        {userSolubleChoice === true && (
          <div className="space-y-3 pt-3 border-t border-black/10 dark:border-white/10">
            <p className="text-sm sm:text-base font-bold">
              {isZh ? `第2步：该可溶盐是否包含 SPA 离子（钠 Na⁺、钾 K⁺、或铵 NH₄⁺）？` : `Step 2: Does it contain SPA ions (Sodium, Potassium, or Ammonium)?`}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setUserSpaChoice(true)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  userSpaChoice === true
                    ? 'bg-amber-600 text-white shadow-xs'
                    : theme === 'dark' ? 'bg-slate-800 text-slate-200' : 'bg-white border border-slate-300 text-slate-800'
                }`}
              >
                {isZh ? '含 SPA 离子 (是 Na / K / NH₄ 盐)' : 'YES (Has Na⁺, K⁺, or NH₄⁺)'}
              </button>
              <button
                onClick={() => setUserSpaChoice(false)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  userSpaChoice === false
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : theme === 'dark' ? 'bg-slate-800 text-slate-200' : 'bg-white border border-slate-300 text-slate-800'
                }`}
              >
                {isZh ? '不含 SPA 离子 (普通可溶盐)' : 'NO (Non-SPA Soluble Salt)'}
              </button>
            </div>
          </div>
        )}

        {/* Result Lab Protocol Card */}
        <div className={`mt-5 p-5 rounded-2xl border space-y-4 shadow-sm ${
          theme === 'dark' ? 'bg-slate-900 border-emerald-500/40' : 'bg-white border-emerald-500/60'
        }`}>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h4 className="text-base sm:text-lg font-bold">
              {isZh ? '官方唯一指定实验方案：' : 'Official Lab Method: '}
              <span className="text-emerald-700 dark:text-emerald-400 font-mono">{selectedSalt.method}</span>
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className={`p-3 rounded-xl border ${
              theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-[#faf8f4] border-slate-300'
            }`}>
              <span className="opacity-70 font-mono block mb-1">{isZh ? '起始反应试剂 1：' : 'Starting Reagent 1:'}</span>
              <span className="font-bold text-blue-700 dark:text-sky-300 font-mono">{selectedSalt.acid}</span>
            </div>
            <div className={`p-3 rounded-xl border ${
              theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-[#faf8f4] border-slate-300'
            }`}>
              <span className="opacity-70 font-mono block mb-1">{isZh ? '起始反应试剂 2：' : 'Starting Reagent 2:'}</span>
              <span className="font-bold text-blue-700 dark:text-sky-300 font-mono">{selectedSalt.otherReagent}</span>
            </div>
          </div>

          <div className={`p-4 rounded-xl text-xs sm:text-sm space-y-2 leading-relaxed ${
            theme === 'dark' ? 'bg-slate-950 text-slate-200' : 'bg-[#faf8f4] text-slate-900'
          }`}>
            <strong className="text-amber-700 dark:text-amber-400 font-mono block text-sm">
              {isZh ? '立化中学与剑桥考官采分标准实验步骤：' : 'Exact Cambridge / RVHS Marking Steps:'}
            </strong>
            {selectedSalt.method.includes("Titration") || selectedSalt.method.includes("滴定") ? (
              <ol className="list-decimal list-inside space-y-1.5 font-medium">
                <li>{isZh ? '用移液管准确量取 25.0 cm³ 的碱液放入锥形瓶，滴加 2-3 滴酸碱指示剂。' : 'Pipette 25.0 cm³ of alkali into conical flask with indicator.'}</li>
                <li>{isZh ? '用滴定管逐滴滴入稀酸，直至指示剂刚变色，记录准确消耗体积。' : 'Titrate with acid from burette until indicator just changes colour; record exact titre.'}</li>
                <li>{isZh ? '【极关键】：不加指示剂，使用完全相同的体积比例重复上述实验，避免有机指示剂污染盐样品！' : 'Repeat experiment using exact volumes WITHOUT indicator to avoid contamination.'}</li>
                <li>{isZh ? '将溶液加热浓缩至饱和，冷却析出晶体，用过滤分离晶体，滤纸按压吸干。' : 'Heat to saturation, cool to crystallise, filter crystals and dry between filter paper.'}</li>
              </ol>
            ) : null}
            {selectedSalt.method.includes("Excess") || selectedSalt.method.includes("过量") ? (
              <ol className="list-decimal list-inside space-y-1.5 font-medium">
                <li>{isZh ? '向温热的稀酸中不断添加过量的金属氧化物/碳酸盐，直至烧杯底部有未溶解的固体残渣。' : 'Add excess insoluble base/metal/carbonate to warm acid until excess solid remains.'}</li>
                <li>{isZh ? '进行过滤，滤去多余未反应的不溶物固体残渣，收集纯净的滤液。' : 'Filter the mixture to remove unreacted excess solid. The filtrate is pure salt solution.'}</li>
                <li>{isZh ? '加热滤液至饱和点，冷却结晶，过滤出晶体并在滤纸间压干。' : 'Heat filtrate to saturation, allow to cool and crystallise. Filter and dry between filter papers.'}</li>
              </ol>
            ) : null}
            {selectedSalt.method.includes("Precipitation") || selectedSalt.method.includes("沉淀") ? (
              <ol className="list-decimal list-inside space-y-1.5 font-medium">
                <li>{isZh ? '将分别含有目标阳离子和阴离子的两种可溶性溶液在烧杯中混合，立即生成不溶沉淀。' : 'Mix two soluble solutions together in a beaker to precipitate solid immediately.'}</li>
                <li>{isZh ? '使用漏斗和滤纸过滤该混合液，收集滤纸上的固体沉淀（滤渣）。' : 'Filter the mixture using filter paper and funnel to collect the residue.'}</li>
                <li>{isZh ? '【必写采分点】：用蒸馏水彻底清洗滤渣，冲走残留的可溶性杂质。' : 'Wash the residue with distilled water to remove soluble impurities.'}</li>
                <li>{isZh ? '将洗净的沉淀放在两张滤纸之间按压吸干。' : 'Dry the purified precipitate between sheets of filter paper.'}</li>
              </ol>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
