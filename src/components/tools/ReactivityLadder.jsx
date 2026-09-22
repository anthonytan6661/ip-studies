import React, { useState } from 'react';
import { Flame, CheckCircle2, XCircle } from 'lucide-react';

const METALS_ORDER = [
  { symbol: "K", name: "钾 Potassium", mnemonic: "Please", note: "与冷水剧烈爆炸反应" },
  { symbol: "Na", name: "钠 Sodium", mnemonic: "Send", note: "在水面熔成银白小球飞速游动" },
  { symbol: "Ca", name: "钙 Calcium", mnemonic: "Cats", note: "与冷水平稳反应冒泡" },
  { symbol: "Mg", name: "镁 Magnesium", mnemonic: "Monkeys", note: "与冷水极慢，但在水蒸气中耀眼白光燃烧" },
  { symbol: "Al", name: "铝 Aluminium", mnemonic: "And", note: "表面有致密 Al₂O₃ 氧化保护膜" },
  { symbol: "Zn", name: "锌 Zinc", mnemonic: "Zebras", note: "与高温水蒸气和稀酸平稳反应" },
  { symbol: "Fe", name: "铁 Iron", mnemonic: "In", note: "需水和氧气共同存在才会生锈" },
  { symbol: "Pb", name: "铅 Lead", mnemonic: "Lead", note: "与硫酸盐酸生成难溶物阻碍进一步反应" },
  { symbol: "Cu", name: "铜 Copper", mnemonic: "Cages", note: "【排在氢后】绝不与稀盐酸/稀硫酸反应！" },
  { symbol: "Ag", name: "银 Silver", mnemonic: "Safely", note: "【排在氢后】绝不与稀酸反应" }
];

export default function ReactivityLadder({ lang = 'zh', theme = 'paper' }) {
  const [metalA, setMetalA] = useState("Zn");
  const [metalB, setMetalB] = useState("Cu");
  const isZh = lang === 'zh';

  const rankA = METALS_ORDER.findIndex(m => m.symbol === metalA);
  const rankB = METALS_ORDER.findIndex(m => m.symbol === metalB);

  // rank 0 is most reactive, rank 9 is least reactive
  const canDisplace = rankA < rankB;

  return (
    <div className={`rounded-2xl border p-4 sm:p-6 shadow-xl space-y-6 ${
      theme === 'dark' ? 'bg-[#111a2e] border-slate-800 text-slate-100' : 'bg-white border-[#ded5c3] text-[#111827]'
    }`}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <Flame className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            {isZh ? '金属活动性天梯与单置换反应模拟器' : 'Reactivity Series Ladder & Displacement Tester'}
          </h3>
          <p className="text-xs sm:text-sm opacity-75 font-mono">
            {isZh ? '立化纯化学专题7 · 金属单置换反应判定与铁生锈必背机制' : 'RVHS Pure Chemistry Topic 7 • Single Displacement & Rusting Logic'}
          </p>
        </div>

        <div className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border ${
          theme === 'dark' ? 'bg-amber-950/40 border-amber-500/30 text-amber-300' : 'bg-amber-100 border-amber-300 text-amber-900'
        }`}>
          {isZh ? '英文口诀：' : 'Mnemonic: '}Please Send Cats Monkeys And Zebras In Lead Cages Safely
        </div>
      </div>

      {/* Interactive Displacement Experiment */}
      <div className={`p-5 rounded-2xl border space-y-4 ${
        theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-[#faf8f4] border-slate-300'
      }`}>
        <h4 className="text-xs sm:text-sm font-mono uppercase font-bold opacity-75">
          {isZh ? '单置换反应动态实验测试器' : 'Single Displacement Simulator'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs sm:text-sm font-mono opacity-80 mb-1 font-bold">
              {isZh ? '选择投入的固体金属单质 (Metal A)：' : 'Solid Metal Added (Metal A):'}
            </label>
            <select
              value={metalA}
              onChange={(e) => setMetalA(e.target.value)}
              className={`w-full px-3 py-2 border rounded-xl text-sm sm:text-base font-mono font-bold ${
                theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
              }`}
            >
              {METALS_ORDER.map(m => (
                <option key={m.symbol} value={m.symbol}>
                  {m.name} ({m.symbol})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-mono opacity-80 mb-1 font-bold">
              {isZh ? '选择烧杯中的金属盐水溶液 (Metal B Salt)：' : 'Metal in Solution (Metal B Salt):'}
            </label>
            <select
              value={metalB}
              onChange={(e) => setMetalB(e.target.value)}
              className={`w-full px-3 py-2 border rounded-xl text-sm sm:text-base font-mono font-bold ${
                theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
              }`}
            >
              {METALS_ORDER.map(m => (
                <option key={m.symbol} value={m.symbol}>
                  {m.name} ({m.symbol}²⁺ / {m.symbol}⁺ 溶液)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Displacement Outcome */}
        <div className={`p-4 rounded-xl border flex items-start gap-3 transition-all ${
          metalA === metalB
            ? 'opacity-60 border-slate-300 dark:border-slate-800'
            : canDisplace
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200'
              : 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200'
        }`}>
          {metalA === metalB ? (
            <span className="text-xs sm:text-sm font-mono font-bold">
              {isZh ? '两种金属完全相同，无置换反应。' : 'Both metals are identical. No net reaction.'}
            </span>
          ) : canDisplace ? (
            <>
              <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1.5 text-xs sm:text-sm font-mono leading-relaxed">
                <div className="text-base font-bold text-emerald-800 dark:text-emerald-300">
                  {isZh ? `✅ 置换反应成功发生！${metalA} 成功置换出 ${metalB}。` : `REACTION OCCURS! ${metalA} displaces ${metalB}.`}
                </div>
                <p>
                  {isZh 
                    ? `因为金属 ${metalA} 排位在前、还原性更强，能轻易交出外层电子被氧化成离子，迫使水溶液中的 ${metalB} 离子接收电子沉淀还原为固态金属单质！`
                    : `Because ${metalA} is higher and more reactive than ${metalB}, ${metalA} readily loses electrons to reduce ${metalB} ions.`}
                </p>
                {metalA === 'Zn' && metalB === 'Cu' && (
                  <p className="text-amber-800 dark:text-amber-300 font-bold">
                    {isZh 
                      ? '实验现象必记：蓝色硫酸铜溶液逐渐褪为无色硫酸锌溶液，试管底部析出红褐色铜粉。'
                      : 'Observation: Blue CuSO₄ decolourises; reddish-brown copper plates out.'}
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              <XCircle className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
              <div className="space-y-1.5 text-xs sm:text-sm font-mono leading-relaxed">
                <div className="text-base font-bold text-rose-800 dark:text-rose-300">
                  {isZh ? `❌ 无任何反应！${metalA} 无法置换出 ${metalB}。` : `NO REACTION! ${metalA} cannot displace ${metalB}.`}
                </div>
                <p>
                  {isZh 
                    ? `金属 ${metalA} 的反应活性比 ${metalB} 弱（排位靠后），它没有足够的力量逼迫 ${metalB} 离子还原。溶液颜色保持不变，无沉淀析出。`
                    : `${metalA} is less reactive than ${metalB}. It cannot displace ${metalB} from its salt solution.`}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* The Visual Reactivity Ladder */}
      <div className="space-y-3">
        <h4 className="text-xs sm:text-sm font-mono uppercase font-bold opacity-75">
          {isZh ? '十大金属活动性天梯排位（最活泼 → 最不活泼）' : 'The 10-Metal Reactivity Hierarchy'}
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {METALS_ORDER.map((m, idx) => (
            <div
              key={m.symbol}
              className={`p-3 rounded-xl border text-center font-mono text-xs sm:text-sm transition-all ${
                idx < 3
                  ? 'bg-rose-50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-500/30'
                  : idx < 6
                    ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-500/30'
                    : 'bg-black/5 dark:bg-white/5 border-slate-300 dark:border-slate-800'
              }`}
            >
              <div className="font-bold text-base sm:text-lg">{m.symbol}</div>
              <div className="opacity-80 text-xs font-bold">{m.name.split(' ')[0]}</div>
              <div className="text-xs text-amber-700 dark:text-amber-400 font-serif italic mt-1">"{m.mnemonic}"</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
