export const flashcardsDataZh = [
  // 数学闪卡 (Math)
  {
    id: "fc-m1",
    subject: "math",
    topic: "指数与根式 (Surds)",
    question: "如何对形如 1 / (3 + √5) 的代数分式进行分母有理化？",
    answer: "分子分母同乘共轭伴侣 (3 - √5)。\n利用平方差公式 (a+b)(a-b) = a² - b²，分母变为 3² - (√5)² = 9 - 5 = 4。\n最终结果：(3 - √5) / 4。",
    tip: "绝不能在最终答案的分母留下任何开方根号 √！"
  },
  {
    id: "fc-m2",
    subject: "math",
    topic: "对数函数 (Logarithms)",
    question: "在解完对数方程得到 x 的数值后，必须执行的生死检查是什么？",
    answer: "必须检验非法真数！\n对数内部的任何括号 log(u) 必须严格大于零 (u > 0)。\n任何导致真数 ≤ 0 的解，必须用笔划掉并明确写上 'reject' (舍去)。",
    tip: "漏写 'reject' 会直接被扣除 1-2 分准确分。"
  },
  {
    id: "fc-m3",
    subject: "math",
    topic: "二次函数 (Quadratics)",
    question: "如果题目注明“二次曲线完全在 x 轴的上方”，需要满足哪两个数学条件？",
    answer: "1. a > 0（抛物线开口向上微笑）\n2. b² - 4ac < 0（判别式严格小于0，因为曲线与 x 轴没有交点，零实根）。",
    tip: "最常见的考场失误就是直觉误写成 b² - 4ac > 0！"
  },
  {
    id: "fc-m4",
    subject: "math",
    topic: "二次不等式 (Inequalities)",
    question: "如何快速写出 (x - 2)(x - 5) < 0 与 (x - 2)(x - 5) > 0 的解集范围？",
    answer: "< 0（轴下方）：取两根中间的夹心区间 2 < x < 5\n> 0（轴上方）：取向外展开的两翼区间 x < 2 或 x > 5",
    tip: "永远随手画一个简易的 U 形抛物线草图来核实！"
  },
  {
    id: "fc-m5",
    subject: "math",
    topic: "多项式 (Polynomials)",
    question: "说明将 f(x) 除以 (x - c) 时的余数定理与因式定理。",
    answer: "余数定理 (Remainder Theorem)：余数 R = f(c)。\n因式定理 (Factor Theorem)：如果代入 f(c) = 0，说明余数为零，(x - c) 就是 f(x) 的一个因式！",
    tip: "找到一个因式后，用多项式长除法除出剩下的二次多项式。"
  },
  {
    id: "fc-m6",
    subject: "math",
    topic: "部分分式 (Partial Fractions)",
    question: "在把一个大分式拆分为部分分式之前，必须先检查什么？",
    answer: "检查是否属于假分式！\n若分子的最高次方 ≥ 分母的最高次方（如 (x² + 1)/(x² - 3)），绝对不能直接拆分！必须先做多项式长除法提取出整项。",
    tip: "先长除提取整数，再对剩余的真分式进行 ABC 拆分。"
  },
  {
    id: "fc-m7",
    subject: "math",
    topic: "圆测量与弧度制 (Circular Measure)",
    question: "写出弧长与扇形面积公式，并指出科学计算器最致命的设置问题。",
    answer: "弧长公式：s = rθ\n扇形面积：A = ½ r² θ\n计算器必须设定在【RAD（弧度模式）】，严禁停留在 DEG（角度模式）！",
    tip: "立化失分第一元凶就是忘记把计算器切换成 RAD 模式。"
  },
  {
    id: "fc-m8",
    subject: "math",
    topic: "三角方程 (Trig Equations)",
    question: "求解形如 sin(x) = -0.5 的三角方程时，3步 ASTC 协议是什么？",
    answer: "第1步：求锐角基准角 α = sin⁻¹(+0.5) = 30°（忽略负号！）；\n第2步：找出正弦为负数的象限：第3象限与第4象限；\n第3步：提取角度：Q3 = 180° + 30° = 210°；Q4 = 360° - 30° = 330°。",
    tip: "严禁两边同除以 sin(x) 或 cos(x)——必须移项因式分解！"
  },
  {
    id: "fc-m9",
    subject: "math",
    topic: "解析几何 (Coordinate Geometry)",
    question: "两垂直直线的斜率有什么数学关系？求垂直平分线方程的3个步骤是什么？",
    answer: "斜率关系：m₁ · m₂ = -1（即 m₂ = -1/m₁ 互为负倒数）。\n垂直平分线3步：\n1. 求线段 AB 的中点坐标；\n2. 算出 AB 斜率并颠倒取负求出垂直斜率；\n3. 代入点斜式方程 y - y₁ = m_perp(x - x₁)。",
    tip: "切记：斜率既要颠倒分子分母，又要加上负号！"
  },
  {
    id: "fc-m10",
    subject: "math",
    topic: "线性化规律 (Linear Law)",
    question: "如何将 y = ax^b 转化为直线方程 Y = mX + c？如何还原出常数 a？",
    answer: "两边取常用对数：lg(y) = b·lg(x) + lg(a)。\n大 Y = lg(y)，大 X = lg(x)，斜率 m = b，纵截距 c = lg(a)。\n还原常数 a：a = 10^c。",
    tip: "千万别忘了：常数 a 是 10^c，而不是直接等于 c！"
  },

  // 化学闪卡 (Chemistry)
  {
    id: "fc-c1",
    subject: "chemistry",
    topic: "微观结构与键结 (Bonding & Structure)",
    question: "解释为什么巨型离子晶格（如食盐 NaCl）具有很高熔点的剑桥满分采分句是什么？",
    answer: "'A large amount of thermal energy is required to overcome the strong electrostatic forces of attraction between oppositely charged ions.'\n（需要巨大热能克服带相反电荷离子之间的强静电引力）",
    tip: "三大关键词缺一不可：large energy、strong electrostatic forces、oppositely charged ions。"
  },
  {
    id: "fc-c2",
    subject: "chemistry",
    topic: "微观结构与键结 (Bonding & Structure)",
    question: "为什么烧开水沸腾或冰融化时，绝对没有切断共价键？",
    answer: "水是简单共价分子。在沸腾过程中，仅仅克服了水分子之间的微弱分子间引力 (weak intermolecular forces of attraction)。分子内部强烈的共价键始终保持完好无损！",
    tip: "写成 'covalent bonds break' 无论写得多长一律零分！"
  },
  {
    id: "fc-c3",
    subject: "chemistry",
    topic: "微观结构与键结 (Bonding & Structure)",
    question: "为什么石墨 (Graphite) 能够导电，而金刚石/钻石 (Diamond) 却不导电？",
    answer: "石墨呈层状结构，每个碳只与另外3个碳成键，留有可在层间自由移动的【离域自由电子】(delocalised electrons free to move along layers)。\n金刚石中每个碳均与4个碳形成致密强共价键，无任何自由移动的电子或离子。",
    tip: "核心采分词：'delocalised electrons free to move along layers'。"
  },
  {
    id: "fc-c4",
    subject: "chemistry",
    topic: "摩尔概念 (The Mole Concept)",
    question: "化学计算必须掌握的3大黄金摩尔换算公式是什么？",
    answer: "1. 质量求摩尔：Moles = 质量 (g) / 摩尔质量 (Mr)\n2. 气体求摩尔：Moles = 气体体积 (dm³) / 24 dm³（注意：若给 cm³ 必须先除以 1000！）\n3. 溶液求摩尔：Moles = 浓度 (mol/dm³) × 体积 (dm³)",
    tip: "1 dm³ = 1000 cm³。务必注意体积单位！"
  },
  {
    id: "fc-c5",
    subject: "chemistry",
    topic: "摩尔概念 (The Mole Concept)",
    question: "如何快速判断化学反应中的限量反应物 (Limiting Reactant)？",
    answer: "分别算出各反应物的真实摩尔数，并除以配平化学方程式中的对应系数。所得比例最小的反应物就是【限量反应物】。后续所有的产物质量与产率计算，必须 100% 严格基于限量物！",
    tip: "奶酪吐司原理：吐司过量，奶酪决定最多能做几个三明治。"
  },
  {
    id: "fc-c6",
    subject: "chemistry",
    topic: "酸与金属 (Acids & Metals)",
    question: "把金属铜 (Cu) 放入稀盐酸 (dilute HCl) 中，会发生什么实验现象？",
    answer: "【无任何反应 / 无任何气泡产生 (No reaction / no bubbles observed)】！\n因为金属铜在金属活动性顺序表中排在氢的后面，属于极不活泼金属，无法与稀酸发生反应。",
    tip: "经典考场陷阱！千万不要编造有气体冒出。"
  },
  {
    id: "fc-c7",
    subject: "chemistry",
    topic: "盐的制备 (Salt Preparation)",
    question: "制备以下三种盐各采用什么实验方法？1. NaCl, 2. CuSO₄, 3. BaSO₄",
    answer: "1. NaCl：滴定法 Titration（含有钠离子 Na⁺ 的可溶性 SPA 盐）；\n2. CuSO₄：过量不溶性碱/碳酸盐法 Excess Insoluble Base（不含 SPA 的可溶盐）；\n3. BaSO₄：沉淀法 Precipitation（不溶性盐，混合两可溶溶液过滤）。",
    tip: "决策链：是否可溶？可溶是否含 SPA？⇒ 滴定 / 过量碱 / 沉淀。"
  },
  {
    id: "fc-c8",
    subject: "chemistry",
    topic: "金属活动性 (Reactivity Series)",
    question: "铁生锈的必要条件是什么？如何彻底防止铁生锈？",
    answer: "铁生锈必须同时存在【氧气 (O₂) 和水 (H₂O)】两个条件！\n防锈方法：涂油漆、涂油脂、镀锌保护（牺牲阳极保护法），或使用除氧密封环境。",
    tip: "煮沸并加有油层密封的水中没有溶解氧，铁钉永远不会生锈。"
  },
  {
    id: "fc-c9",
    subject: "chemistry",
    topic: "氧化还原 (Redox Chemistry)",
    question: "酸化高锰酸钾 (KMnO₄) 与碘化钾 (KI) 分别充当什么角色？反应颜色如何变化？",
    answer: "酸化高锰酸钾 (KMnO₄)：强氧化剂 (Oxidising Agent)，颜色由【紫色褪为无色】(Purple to Colourless)；\n碘化钾 (KI)：强还原剂 (Reducing Agent)，颜色由【无色变为棕色】(Colourless to Brown)。",
    tip: "谨记口诀 OIL RIG：氧化是失去电子，还原是得到电子。"
  }
];
