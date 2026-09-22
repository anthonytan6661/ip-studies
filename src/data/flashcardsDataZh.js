export const flashcardsDataZh = [
  // 数学闪卡 (Math 13专题)
  {
    id: "fc-m1",
    subject: "math",
    topic: "专题 1: 二次方程与配方法",
    question: "对 y = 3(x - 4)² + 7 进行顶点分析时，顶点坐标是多少？最容易犯的符号错误是什么？",
    answer: "顶点坐标为 (+4, +7)。因为平方项 (x - 4)² ≥ 0，当 x = 4 时取得最小值 7。\n常见错误：把顶点 x 坐标误写成 -4，忘记将括号内的符号由负变正！",
    tip: "记住反转括号内的符号：(x - h) 对应的顶点是 x = +h！"
  },
  {
    id: "fc-m2",
    subject: "math",
    topic: "专题 2: 不等式与联立方程",
    question: "如何快速写出 (x - 2)(x - 5) < 0 与 > 0 的解集？解联立方程时绝不能忘记什么？",
    answer: "< 0：取两根中间的夹心区间 2 < x < 5。\n> 0：取向外展开的两翼区间 x < 2 或 x > 5。\n联立方程：求出两个 x 的值后，必须代回线性方程算出对应的两组 y 坐标！",
    tip: "解二次不等式绝不可直接拆成两个一次不等式，必须画抛物线草图！"
  },
  {
    id: "fc-m3",
    subject: "math",
    topic: "专题 3: 根的性质与判别式",
    question: "如果题目注明“二次曲线完全在 x 轴的上方”，需要满足哪两个严格数学条件？",
    answer: "1. a > 0（抛物线开口向上微笑）\n2. b² - 4ac < 0（判别式严格小于0，因为曲线与 x 轴没有交点，零实根）。",
    tip: "最常见的考场失误就是直觉误写成 b² - 4ac > 0！"
  },
  {
    id: "fc-m4",
    subject: "math",
    topic: "专题 4: 指数与对数函数",
    question: "在解完对数方程得到 x 的数值后，必须执行的生死检查是什么？",
    answer: "必须检验非法真数！\n对数内部的任何括号 log(u) 必须严格大于零 (u > 0)。\n任何导致真数 ≤ 0 的解，必须用笔划掉并明确写上 'reject' (舍去)。",
    tip: "漏写 'reject' 会直接被扣除 1-2 分准确分。"
  },
  {
    id: "fc-m5",
    subject: "math",
    topic: "专题 5: 函数与绝对值图像",
    question: "如何从 y = f(x) 绘制 y = |f(x)| 的图像？绝对值图像的黄金铁律是什么？",
    answer: "1. 轻轻画出 y = f(x) 的底图；\n2. 保留 x 轴上方及轴上的部分；\n3. 将 x 轴下方的曲线以 x 轴为镜面垂直向上对称翻折；\n黄金铁律：绝对值图像在 x 轴下方绝对不能留有任何线条！",
    tip: "务必清楚标出顶点坐标以及与坐标轴的所有交点。"
  },
  {
    id: "fc-m6",
    subject: "math",
    topic: "专题 6: 三角比、任意三角形法则与3D方位角",
    question: "写出任意三角形的面积公式、正弦定理、余弦定理以及3位罗盘方位角的测量规则。",
    answer: "面积 = ½ ab sin C（C 必须为夹角）。\n正弦定理：a/sin A = b/sin B（注意可能存在钝角 180° - θ 的模糊解！）。\n余弦定理：c² = a² + b² - 2ab cos C。\n方位角：必须以正北为基准顺时针旋转，记录3位数字（如 065°）。",
    tip: "仰角与俯角永远以水平视线为基准测量，绝不能从垂直墙面测量！"
  },
  {
    id: "fc-m7",
    subject: "math",
    topic: "专题 7: 弧长、扇形面积与弧度制",
    question: "写出弧长与扇形面积公式，并指出科学计算器最致命的设置问题。",
    answer: "弧长公式：s = rθ（θ 必须为弧度）。\n扇形面积：A = ½ r² θ。\n弓形面积：½ r² (θ - sin θ)。\n计算器必须设定在【RAD（弧度模式）】，严禁停留在 DEG（角度模式）！",
    tip: "立化失分第一元凶就是忘记把计算器切换成 RAD 模式。"
  },
  {
    id: "fc-m8",
    subject: "math",
    topic: "专题 8: 三角函数与周期图像",
    question: "对于波形方程 y = a sin(bx) + c 或 y = a cos(bx) + c，如何求振幅、周期和极值？",
    answer: "振幅 = |a|（中心平衡线到波峰的高度）。\n周期 Period = 360°/b 或 2π/b（tan 周期为 180°/b 或 π/b）。\n最高点 Max = c + |a|，最低点 Min = c - |a|。",
    tip: "切记：b 是 360° 内波形的循环周数（频率），不是波长周期本身。"
  },
  {
    id: "fc-m9",
    subject: "math",
    topic: "专题 9: 三角方程与 ASTC",
    question: "求解形如 sin(x) = -0.5 的三角方程时，3步 ASTC 协议是什么？绝不可做什么？",
    answer: "第1步：求锐角基准角 α = sin⁻¹(+0.5) = 30°（忽略负号！）；\n第2步：找出正弦为负数的象限：第3象限与第4象限；\n第3步：提取角度：Q3 = 180° + 30° = 210°；Q4 = 360° - 30° = 330°。\n绝不可两边同除以 sin(x) 或 cos(x)——必须移项因式分解！",
    tip: "同除以 sin(x) 会直接抹杀 sin(x) = 0 的一整套有效根！"
  },
  {
    id: "fc-m10",
    subject: "math",
    topic: "专题 10: 高阶三角恒等式与证明",
    question: "在证明‘LHS = RHS’的三角恒等式证明题中，立化与剑桥评分标准最严格的禁忌是什么？",
    answer: "严禁跨过等号两边移项或交叉相乘！必须单侧（通常挑选更复杂的 LHS）逐步推导代数变形，直到完全吻合 RHS 为止。",
    tip: "跨等号移项会被视为预设所求命题成立，直接失去全部步骤方法分。"
  },
  {
    id: "fc-m11",
    subject: "math",
    topic: "专题 11: 多项式、余数定理与因式定理",
    question: "说明多项式 f(x) 除以 (ax - b) 时的余数定理与因式定理，以及分解的最终防线。",
    answer: "余数定理：余数 R = f(b/a)。\n因式定理：若 f(b/a) = 0，则 (ax - b) 是整除的线性因式！\n最终防线：除出二次商式后必须彻底分解，不可停留在 (x - 1)(x² - 4)，必须写成 (x - 1)(x - 2)(x + 2)！",
    tip: "三次因式分解必须检查剩下的二次括号能否进一步拆开。"
  },
  {
    id: "fc-m12",
    subject: "math",
    topic: "专题 12: 部分分式",
    question: "在把一个大分式拆分为部分分式之前，必须先检查什么？",
    answer: "检查是否属于假分式！\n若分子的最高次方 ≥ 分母的最高次方（如 (x² + 1)/(x² - 3)），绝对不能直接拆分！必须先做多项式长除法提取出整项多项式。",
    tip: "先长除提取整数，再对剩余的真分式进行分母拆分。"
  },
  {
    id: "fc-m13",
    subject: "math",
    topic: "专题 13: 直线解析几何",
    question: "两垂直直线的斜率有什么数学关系？求垂直平分线方程的3个步骤是什么？",
    answer: "斜率关系：m₁ · m₂ = -1（即 m₂ = -1/m₁ 互为负倒数，既颠倒又变号）。\n垂直平分线3步：\n1. 求线段 AB 的中点坐标；\n2. 算出 AB 斜率并颠倒取负求出垂直斜率 m_perp；\n3. 代入点斜式方程 y - y_M = m_perp(x - x_M)。",
    tip: "负数坐标计算斜率 (y₂ - y₁)/(x₂ - x₁) 最容易粗心算错符号！"
  },

  // 化学闪卡 (Chemistry)
  {
    id: "fc-c1",
    subject: "chemistry",
    topic: "化学键与结构 (Structure & Bonding)",
    question: "解释为什么巨型离子晶格（如 NaCl）具有高熔点的剑桥采分满分句式是什么？",
    answer: "“需要消耗大量热能 (A large amount of thermal energy is required)，去克服带相反电荷离子之间的强静电吸引力 (to overcome the strong electrostatic forces of attraction between oppositely charged ions)。”",
    tip: "必须包含三大采分词：大量热能、强静电吸引力、带相反电荷离子。"
  },
  {
    id: "fc-c2",
    subject: "chemistry",
    topic: "化学键与结构 (Structure & Bonding)",
    question: "为什么煮沸水或融化冰并没有破坏共价键？",
    answer: "水是简单共价分子。在沸腾过程中，只需克服水分子之间极其微弱的分子间引力 (weak intermolecular forces of attraction)。分子内部坚固的共价键完好无损！",
    tip: "在简单分子熔沸题中写“破坏共价键”直接得零分。"
  },
  {
    id: "fc-c3",
    subject: "chemistry",
    topic: "化学键与结构 (Structure & Bonding)",
    question: "为什么石墨能导电，而金刚石完全不导电？",
    answer: "石墨呈层状结构，每个碳原子仅与3个碳原子成键，每原子留有1个自由移动的离域电子 (delocalised electron) 可以在层间穿梭导电。\n金刚石中每个碳原子均与4个碳原子形成致密的四面体网络，没有自由移动的离域电子或游离离子。",
    tip: "必背采分词：“有可在层间自由移动的离域电子”。"
  },
  {
    id: "fc-c4",
    subject: "chemistry",
    topic: "摩尔计算 (The Mole Concept)",
    question: "计算摩尔数 (Moles) 的三大黄金公式是什么？",
    answer: "1. 质量算摩尔：摩尔 = 质量(g) / 摩尔质量(Mr)\n2. 气体体积算摩尔：摩尔 = 气体体积(dm³) / 24 dm³（若题目给 cm³ 必须除以 1000 转成 dm³！）\n3. 溶液溶质算摩尔：摩尔 = 浓度(mol/dm³) × 溶液体积(dm³)",
    tip: "1 dm³ = 1000 cm³。审题第一件事先圈体积单位！"
  },
  {
    id: "fc-c5",
    subject: "chemistry",
    topic: "摩尔计算 (The Mole Concept)",
    question: "在化学反应中如何精准判定谁是“限量反应物 (Limiting Reactant)”？",
    answer: "先分别算出各反应物的摩尔数，再分别除以化学方程式中各自的配平化学计量系数。计算结果比值最小的那个反应物，就是限量反应物。\n注意：所有后续产物的理论产量，必须严格以限量反应物的摩尔数为基准换算！",
    tip: "芝士吐司原理：面包再多，芝士片数决定最终能做几份吐司。"
  },
  {
    id: "fc-c6",
    subject: "chemistry",
    topic: "酸、碱与盐 (Acids & Bases)",
    question: "当往铜金属 (Cu) 中倒入稀盐酸时，会观察到什么现象？",
    answer: "无明显反应，看不到任何气泡！铜在金属活动性顺序表中排在氢 (H) 的后面，属于不活泼金属，无法置换酸中的氢气。",
    tip: "经典诱骗题！千万别顺手写出 Cu + 2HCl → CuCl₂ + H₂！"
  },
  {
    id: "fc-c7",
    subject: "chemistry",
    topic: "盐的制备 (Salt Preparation)",
    question: "制备下列三种盐，分别必须选用哪种实验方法？1. NaCl, 2. CuSO₄, 3. BaSO₄",
    answer: "1. NaCl：滴定法 (Titration)——可溶性 SPA 盐（含钠离子）；\n2. CuSO₄：过量难溶碱/碳酸盐与酸反应法 (Excess Insoluble Base)——可溶性非 SPA 盐；\n3. BaSO₄：沉淀法 (Precipitation)——难溶性盐（两可溶溶液混合过滤）。",
    tip: "定法3步选法：可溶吗？SPA吗？⇒ 滴定 / 过量不溶物 / 沉淀。"
  },
  {
    id: "fc-c8",
    subject: "chemistry",
    topic: "金属与活动性 (Reactivity Series)",
    question: "铁生锈 (Rusting) 严格必须同时具备什么条件？如何有效防锈？",
    answer: "铁生锈必须同时具备【氧气 (Oxygen)】与【水 (Water)】。二者缺一不可。\n防锈方法：表面覆盖层（刷漆、涂油、Zn电镀）或牺牲阳极保护法。",
    tip: "煮沸冷却并滴有油层的水中无溶解氧气，铁钉永远不会生锈。"
  },
  {
    id: "fc-c9",
    subject: "chemistry",
    topic: "氧化还原反应 (Redox Chemistry)",
    question: "酸化高锰酸钾 (KMnO₄) 与碘化钾 (KI) 分别作什么剂？其颜色如何变化？",
    answer: "酸化 KMnO₄：强氧化剂。颜色由【紫色】褪为【无色】。\n碘化钾 (KI)：还原剂。颜色由【无色】变为【棕色】（生成了单质碘 I₂）。",
    tip: "牢记 OIL RIG 口诀：Oxidation Is Loss（氧化失电子），Reduction Is Gain（还原得电子）。"
  }
];
