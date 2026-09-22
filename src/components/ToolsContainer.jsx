import React, { useState } from 'react';
import { Beaker, Compass, Scale, Activity, Flame } from 'lucide-react';
import SaltPrepTree from './tools/SaltPrepTree';
import ASTCSolver from './tools/ASTCSolver';
import MoleCalculator from './tools/MoleCalculator';
import DiscriminantViz from './tools/DiscriminantViz';
import ReactivityLadder from './tools/ReactivityLadder';

export default function ToolsContainer({ lang = 'zh', theme = 'paper' }) {
  const [activeTool, setActiveTool] = useState('salt');
  const isZh = lang === 'zh';

  const tools = [
    {
      id: 'salt',
      title: isZh ? '盐的制备决策树' : 'Salt Prep Flowchart',
      subtitle: isZh ? '滴定法 vs 不溶物法 vs 沉淀法' : 'Titration vs Excess Base vs Precipitation',
      icon: Beaker,
      component: SaltPrepTree
    },
    {
      id: 'astc',
      title: isZh ? '3步 ASTC 三角方程' : 'ASTC Trig Solver',
      subtitle: isZh ? '象限选择与锐角基准角 α' : 'Quadrant selection & acute angle α',
      icon: Compass,
      component: ASTCSolver
    },
    {
      id: 'mole',
      title: isZh ? '摩尔3步计算装配线' : 'Mole 3-Step Engine',
      subtitle: isZh ? '质量/气体/溶液 & 限量物' : 'Mass, Gas (cm³/dm³), Sol & Limiting',
      icon: Scale,
      component: MoleCalculator
    },
    {
      id: 'quad',
      title: isZh ? '二次判别式与抛物线' : 'Quadratic Discriminant',
      subtitle: isZh ? 'b² - 4ac 与坐标轴条件' : 'b² - 4ac & axis condition visualizer',
      icon: Activity,
      component: DiscriminantViz
    },
    {
      id: 'reactivity',
      title: isZh ? '金属活动性天梯' : 'Reactivity Ladder',
      subtitle: isZh ? '单置换反应判定 & 铁生锈' : 'Metal displacement & rusting checklist',
      icon: Flame,
      component: ReactivityLadder
    },
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
              className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all ${
                isCurrent
                  ? theme === 'dark'
                    ? 'bg-slate-800 border-sky-500 shadow-md text-slate-100'
                    : 'bg-amber-600 border-amber-700 shadow-md text-white'
                  : theme === 'dark'
                    ? 'bg-[#111a2e] border-slate-800 hover:border-slate-700 text-slate-300'
                    : 'bg-white border-slate-300 hover:border-slate-400 text-slate-800 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Icon className={`w-4 h-4 ${isCurrent ? (theme === 'dark' ? 'text-amber-400' : 'text-white') : 'opacity-60'}`} />
                <span className="text-xs sm:text-sm font-bold font-mono">
                  {tool.title}
                </span>
              </div>
              <p className={`text-[11px] sm:text-xs font-mono line-clamp-1 ${isCurrent && theme !== 'dark' ? 'text-amber-100' : 'opacity-70'}`}>
                {tool.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Render Current Tool */}
      <CurrentToolComponent lang={lang} theme={theme} />
    </div>
  );
}
