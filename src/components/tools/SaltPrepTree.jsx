import React, { useState } from 'react';
import { Beaker, CheckCircle2, ArrowRight, RotateCcw, AlertCircle, Sparkles } from 'lucide-react';

const COMMON_SALTS = [
  { formula: "NaCl", name: "Sodium Chloride", soluble: true, isSPA: true, method: "Titration", acid: "Hydrochloric Acid (HCl)", otherReagent: "Sodium Hydroxide (NaOH) solution" },
  { formula: "KNO3", name: "Potassium Nitrate", soluble: true, isSPA: true, method: "Titration", acid: "Nitric Acid (HNO3)", otherReagent: "Potassium Hydroxide (KOH) solution" },
  { formula: "(NH4)2SO4", name: "Ammonium Sulfate", soluble: true, isSPA: true, method: "Titration", acid: "Sulfuric Acid (H2SO4)", otherReagent: "Aqueous Ammonia (NH3) / Ammonium Hydroxide" },
  { formula: "CuSO4", name: "Copper(II) Sulfate", soluble: true, isSPA: false, method: "Excess Insoluble Base/Carbonate", acid: "Sulfuric Acid (H2SO4)", otherReagent: "Excess Copper(II) Oxide (CuO) or Copper(II) Carbonate (CuCO3)" },
  { formula: "MgSO4", name: "Magnesium Sulfate", soluble: true, isSPA: false, method: "Excess Insoluble Base/Carbonate/Metal", acid: "Sulfuric Acid (H2SO4)", otherReagent: "Excess Magnesium metal (Mg), Magnesium Oxide (MgO), or Magnesium Carbonate (MgCO3)" },
  { formula: "Zn(NO3)2", name: "Zinc Nitrate", soluble: true, isSPA: false, method: "Excess Insoluble Base/Carbonate/Metal", acid: "Nitric Acid (HNO3)", otherReagent: "Excess Zinc metal (Zn), Zinc Oxide (ZnO), or Zinc Carbonate (ZnCO3)" },
  { formula: "BaSO4", name: "Barium Sulfate", soluble: false, isSPA: false, method: "Precipitation", acid: "Soluble Barium Salt: e.g. Ba(NO3)2 (aq)", otherReagent: "Soluble Sulfate Salt: e.g. Na2SO4 (aq) or H2SO4 (aq)" },
  { formula: "AgCl", name: "Silver Chloride", soluble: false, isSPA: false, method: "Precipitation", acid: "Soluble Silver Salt: e.g. AgNO3 (aq)", otherReagent: "Soluble Chloride: e.g. NaCl (aq) or dilute HCl (aq)" },
  { formula: "PbSO4", name: "Lead(II) Sulfate", soluble: false, isSPA: false, method: "Precipitation", acid: "Soluble Lead Salt: Pb(NO3)2 (aq)", otherReagent: "Soluble Sulfate: Na2SO4 (aq)" },
  { formula: "CaCO3", name: "Calcium Carbonate", soluble: false, isSPA: false, method: "Precipitation", acid: "Soluble Calcium Salt: CaCl2 (aq) or Ca(NO3)2 (aq)", otherReagent: "Soluble Carbonate: Na2CO3 (aq)" },
];

export default function SaltPrepTree() {
  const [selectedSalt, setSelectedSalt] = useState(COMMON_SALTS[3]); // default CuSO4
  const [userStep, setUserStep] = useState(1);
  const [userSolubleChoice, setUserSolubleChoice] = useState(null);
  const [userSpaChoice, setUserSpaChoice] = useState(null);

  const resetInteractive = () => {
    setUserStep(1);
    setUserSolubleChoice(null);
    setUserSpaChoice(null);
  };

  const handleSelectSalt = (salt) => {
    setSelectedSalt(salt);
    resetInteractive();
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Beaker className="w-5 h-5 text-emerald-400" />
            Salt Preparation Decision Tree Simulator
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            RVHS Pure Chemistry • 4–5 Mark Exam Protocol Solver
          </p>
        </div>
        <button
          onClick={resetInteractive}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset Flow
        </button>
      </div>

      {/* Preset salt selector */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
          Select Target Salt to Prepare:
        </label>
        <div className="flex flex-wrap gap-2">
          {COMMON_SALTS.map((salt) => (
            <button
              key={salt.formula}
              onClick={() => handleSelectSalt(salt)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedSalt.formula === salt.formula
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
              }`}
            >
              {salt.formula} ({salt.name})
            </button>
          ))}
        </div>
      </div>

      {/* Flowchart Walkthrough */}
      <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="text-sm font-bold text-slate-200">
            Current Target: <span className="text-emerald-400 font-mono">{selectedSalt.name} ({selectedSalt.formula})</span>
          </span>
          <span className="text-xs font-mono text-slate-400">Step {userStep} of 2</span>
        </div>

        {/* Step 1 */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-300">
            Step 1: Is <span className="text-emerald-400 font-mono">{selectedSalt.formula}</span> soluble in water?
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setUserSolubleChoice(true);
                setUserStep(2);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                userSolubleChoice === true
                  ? 'bg-sky-500 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              YES, it is Soluble
            </button>
            <button
              onClick={() => {
                setUserSolubleChoice(false);
                setUserStep(2);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                userSolubleChoice === false
                  ? 'bg-rose-500 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              NO, it is Insoluble
            </button>
          </div>

          {userSolubleChoice !== null && (
            <div className={`p-3 rounded-lg text-xs font-mono ${
              userSolubleChoice === selectedSalt.soluble
                ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-300'
                : 'bg-rose-950/40 border border-rose-500/30 text-rose-300'
            }`}>
              {userSolubleChoice === selectedSalt.soluble
                ? `✓ Correct! ${selectedSalt.formula} is indeed ${selectedSalt.soluble ? 'soluble' : 'insoluble'} in water.`
                : `✗ Watch out! ${selectedSalt.formula} is actually ${selectedSalt.soluble ? 'soluble' : 'insoluble'} in water according to solubility rules.`}
            </div>
          )}
        </div>

        {/* Step 2 (if soluble) */}
        {userSolubleChoice === true && (
          <div className="space-y-3 pt-3 border-t border-slate-800/80">
            <p className="text-sm font-semibold text-slate-300">
              Step 2: Does it contain <span className="text-amber-400">SPA</span> ions (Sodium, Potassium, or Ammonium)?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setUserSpaChoice(true)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  userSpaChoice === true
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                YES (Has Na⁺, K⁺, or NH₄⁺)
              </button>
              <button
                onClick={() => setUserSpaChoice(false)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  userSpaChoice === false
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                NO (Non-SPA Soluble Salt)
              </button>
            </div>
          </div>
        )}

        {/* Result Lab Protocol Card */}
        <div className="mt-5 p-4 rounded-xl bg-slate-900 border border-emerald-500/40 space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <h4 className="text-base font-bold text-slate-100">
              Official Method: <span className="text-emerald-400 font-mono">{selectedSalt.method}</span>
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800">
              <span className="text-slate-400 font-mono block mb-1">Starting Reagent 1:</span>
              <span className="font-semibold text-sky-300 font-mono">{selectedSalt.acid}</span>
            </div>
            <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800">
              <span className="text-slate-400 font-mono block mb-1">Starting Reagent 2:</span>
              <span className="font-semibold text-sky-300 font-mono">{selectedSalt.otherReagent}</span>
            </div>
          </div>

          <div className="p-3 bg-slate-950/50 rounded-lg text-xs space-y-1.5 text-slate-300">
            <strong className="text-rv-gold-400 font-mono block">Exact Cambridge / RV Marking Steps:</strong>
            {selectedSalt.method === "Titration" && (
              <ol className="list-decimal list-inside space-y-1">
                <li>Pipette 25.0 cm³ of alkali into conical flask with indicator (methyl orange/phenolphthalein).</li>
                <li>Titrate with acid from burette until indicator just changes colour; record exact titre.</li>
                <li>Repeat experiment using the exact volumes WITHOUT indicator to avoid contamination.</li>
                <li>Heat solution to saturation point, allow to cool and crystallise. Filter crystals and dry between filter paper.</li>
              </ol>
            )}
            {selectedSalt.method.includes("Excess Insoluble") && (
              <ol className="list-decimal list-inside space-y-1">
                <li>Add excess insoluble base/metal/carbonate to warm acid until unreacted solid remains at the bottom.</li>
                <li>Filter the mixture to remove unreacted excess solid. The filtrate is pure salt solution.</li>
                <li>Heat filtrate to saturation, allow to cool and crystallise. Filter and dry crystals between filter papers.</li>
              </ol>
            )}
            {selectedSalt.method === "Precipitation" && (
              <ol className="list-decimal list-inside space-y-1">
                <li>Mix two soluble solutions containing the required cation and anion together in a beaker.</li>
                <li>A precipitate forms immediately. Filter the mixture using filter paper and funnel.</li>
                <li>Wash the residue with distilled water to remove soluble impurities.</li>
                <li>Dry the purified precipitate between sheets of filter paper.</li>
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
