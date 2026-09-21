import React, { useState } from 'react';
import { Beaker, Compass, Scale, Activity, Flame } from 'lucide-react';
import SaltPrepTree from './tools/SaltPrepTree';
import ASTCSolver from './tools/ASTCSolver';
import MoleCalculator from './tools/MoleCalculator';
import DiscriminantViz from './tools/DiscriminantViz';
import ReactivityLadder from './tools/ReactivityLadder';

export default function ToolsContainer() {
  const [activeTool, setActiveTool] = useState('salt');

  const tools = [
    { id: 'salt', title: 'Salt Prep Flowchart', subtitle: 'Titration vs Excess Base vs Precipitation', icon: Beaker, component: SaltPrepTree },
    { id: 'astc', title: 'ASTC Trig Solver', subtitle: 'Quadrant selection & acute angle α', icon: Compass, component: ASTCSolver },
    { id: 'mole', title: 'Mole 3-Step Engine', subtitle: 'Mass, Gas (cm³/dm³), Solutions & Limiting', icon: Scale, component: MoleCalculator },
    { id: 'quad', title: 'Quadratic Discriminant', subtitle: 'b² - 4ac visualizer & axis conditions', icon: Activity, component: DiscriminantViz },
    { id: 'reactivity', title: 'Reactivity Ladder', subtitle: 'Metal displacement & rusting checklist', icon: Flame, component: ReactivityLadder },
  ];

  const CurrentToolComponent = tools.find(t => t.id === activeTool)?.component || SaltPrepTree;

  return (
    <div className="space-y-6">
      {/* Tool Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {tools.map(tool => {
          const Icon = tool.icon;
          const isCurrent = activeTool === tool.id;
          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all ${
                isCurrent
                  ? 'bg-slate-800 border-sky-500/60 shadow-lg shadow-sky-500/10'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Icon className={`w-4 h-4 ${isCurrent ? 'text-rv-gold-400' : 'text-slate-400'}`} />
                <span className={`text-xs font-bold font-mono ${isCurrent ? 'text-slate-100' : 'text-slate-300'}`}>
                  {tool.title}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-mono line-clamp-1">
                {tool.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Render Current Tool */}
      <CurrentToolComponent />
    </div>
  );
}
