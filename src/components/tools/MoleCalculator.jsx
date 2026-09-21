import React, { useState } from 'react';
import { Scale, Calculator, AlertTriangle, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';

export default function MoleCalculator() {
  const [calcMode, setCalcMode] = useState('mass'); // mass, gas, solution, limiting

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
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-400" />
            Mole Concept 3-Step Assembly Line & Limiting Tool
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            RVHS Pure Chemistry • Unit Trap Detector & Stoichiometry Engine
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'mass', label: '1. Mass (g)' },
            { id: 'gas', label: '2. Gas Vol (24 dm³)' },
            { id: 'solution', label: '3. Solution (M·V)' },
            { id: 'limiting', label: 'Limiting Reactant' },
          ].map(m => (
            <button
              key={m.id}
              onClick={() => setCalcMode(m.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                calcMode === m.id
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Assembly Line Banner */}
      <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-300">
        <span className="text-sky-400 font-bold">Step 1: Convert to Moles</span>
        <ArrowRight className="w-4 h-4 text-slate-600 hidden sm:inline" />
        <span className="text-amber-400 font-bold">Step 2: Mole Ratio Bridge</span>
        <ArrowRight className="w-4 h-4 text-slate-600 hidden sm:inline" />
        <span className="text-emerald-400 font-bold">Step 3: Convert to Desired Units</span>
      </div>

      {/* Mode 1: Mass to Moles */}
      {calcMode === 'mass' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Mass in Grams (g):</label>
              <input
                type="number"
                value={massGrams}
                onChange={(e) => setMassGrams(e.target.value)}
                className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-xl font-mono text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Molar Mass (Mr) from Periodic Table:</label>
              <input
                type="number"
                value={molarMass}
                onChange={(e) => setMolarMass(e.target.value)}
                className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-xl font-mono text-slate-100"
              />
              <span className="text-[11px] text-slate-500 font-mono mt-1 block">e.g. C = 12, Mg = 24, CaCO₃ = 100, H₂O = 18</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-950 border border-amber-500/30 space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase font-bold">Formula: Moles = Mass / Mr</span>
            <div className="text-2xl font-mono font-bold text-amber-300">
              {massMoles.toFixed(4)} <span className="text-sm font-normal text-slate-400">mol</span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Working: {massGrams} g ÷ {molarMass} g/mol = {massMoles.toFixed(4)} mol
            </p>
            <div className="p-2.5 rounded bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200/90 font-mono">
              ⚠️ Remember: Always write the unit <strong className="text-white">"mol"</strong>. RVHS penalises 1 mark per missing unit!
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Gas Volume */}
      {calcMode === 'gas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Gas Volume:</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={gasVolume}
                  onChange={(e) => setGasVolume(e.target.value)}
                  className="flex-1 px-4 py-2 bg-slate-950 border border-slate-700 rounded-xl font-mono text-slate-100"
                />
                <button
                  onClick={() => setGasUnit(gasUnit === 'cm3' ? 'dm3' : 'cm3')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    gasUnit === 'cm3' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}
                >
                  Unit: {gasUnit} (Click to switch)
                </button>
              </div>
            </div>

            {gasUnit === 'cm3' && (
              <div className="p-3 bg-rose-950/40 border border-rose-500/30 rounded-xl text-xs text-rose-300 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  CRITICAL RVHS TRAP DETECTED:
                </div>
                <p>
                  You are using <strong>cm³</strong>. The molar gas volume rule strictly applies to <strong>dm³</strong>!
                  We must divide by 1000 first: {gasVolume} cm³ ÷ 1000 = {gasVolDm3} dm³.
                </p>
              </div>
            )}
          </div>

          <div className="p-5 rounded-xl bg-slate-950 border border-sky-500/30 space-y-3">
            <span className="text-xs font-mono text-sky-400 uppercase font-bold">Formula: Moles = Volume (dm³) / 24</span>
            <div className="text-2xl font-mono font-bold text-sky-300">
              {gasMoles.toFixed(4)} <span className="text-sm font-normal text-slate-400">mol</span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Working: {gasVolDm3} dm³ ÷ 24 dm³/mol = {gasMoles.toFixed(4)} mol
            </p>
          </div>
        </div>
      )}

      {/* Mode 3: Solution Concentration */}
      {calcMode === 'solution' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Concentration (mol/dm³ or M):</label>
              <input
                type="number"
                step="0.1"
                value={concentration}
                onChange={(e) => setConcentration(e.target.value)}
                className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-xl font-mono text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Solution Volume:</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={solVolume}
                  onChange={(e) => setSolVolume(e.target.value)}
                  className="flex-1 px-4 py-2 bg-slate-950 border border-slate-700 rounded-xl font-mono text-slate-100"
                />
                <button
                  onClick={() => setSolUnit(solUnit === 'cm3' ? 'dm3' : 'cm3')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    solUnit === 'cm3' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}
                >
                  Unit: {solUnit}
                </button>
              </div>
              {solUnit === 'cm3' && (
                <span className="text-[11px] text-amber-400 font-mono mt-1 block">
                  Dividing by 1000: {solVolume} cm³ = {solVolDm3} dm³
                </span>
              )}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-3">
            <span className="text-xs font-mono text-emerald-400 uppercase font-bold">Formula: Moles = Concentration × Vol (dm³)</span>
            <div className="text-2xl font-mono font-bold text-emerald-300">
              {solMoles.toFixed(4)} <span className="text-sm font-normal text-slate-400">mol</span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Working: {concentration} mol/dm³ × {solVolDm3} dm³ = {solMoles.toFixed(4)} mol
            </p>
          </div>
        </div>
      )}

      {/* Mode 4: Limiting Reactant */}
      {calcMode === 'limiting' && (
        <div className="space-y-4">
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 font-mono">
            🥪 <strong>The Cheese Toastie Principle:</strong> 10 slices of bread + 2 slices of cheese = only 2 sandwiches. Cheese is the limiting reactant; bread is in excess. The limiting reactant dictates maximum product yield.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase">Reactant A</span>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-[11px] text-slate-400 block">Moles available:</label>
                  <input
                    type="number"
                    value={molA}
                    onChange={(e) => setMolA(e.target.value)}
                    className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg font-mono text-slate-100 text-sm"
                  />
                </div>
                <div className="w-24">
                  <label className="text-[11px] text-slate-400 block">Equation Coeff:</label>
                  <input
                    type="number"
                    value={coeffA}
                    onChange={(e) => setCoeffA(e.target.value)}
                    className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg font-mono text-slate-100 text-sm"
                  />
                </div>
              </div>
              <p className="text-xs font-mono text-slate-400">Normalized Ratio: {ratioA.toFixed(3)}</p>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">Reactant B</span>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-[11px] text-slate-400 block">Moles available:</label>
                  <input
                    type="number"
                    value={molB}
                    onChange={(e) => setMolB(e.target.value)}
                    className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg font-mono text-slate-100 text-sm"
                  />
                </div>
                <div className="w-24">
                  <label className="text-[11px] text-slate-400 block">Equation Coeff:</label>
                  <input
                    type="number"
                    value={coeffB}
                    onChange={(e) => setCoeffB(e.target.value)}
                    className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg font-mono text-slate-100 text-sm"
                  />
                </div>
              </div>
              <p className="text-xs font-mono text-slate-400">Normalized Ratio: {ratioB.toFixed(3)}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/40 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase block">Calculated Conclusion:</span>
              <span className="text-base font-bold text-emerald-300 font-mono">
                Reactant {limiting} is the LIMITING REACTANT!
              </span>
              <p className="text-xs text-slate-400 mt-1">
                Reactant {limiting === 'A' ? 'B' : 'A'} is in excess. All theoretical product calculations MUST be based strictly on Reactant {limiting}.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono text-lg">
              {limiting}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
