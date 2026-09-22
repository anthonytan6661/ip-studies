export const quizQuestionsZh = [
  {
    id: "q-m1",
    subject: "math",
    topic: "三角方程 (Trig Equations)",
    question: "学生在解方程：2 sin(x) cos(x) = sin(x)。他两边直接同时除以 sin(x)，得到 2 cos(x) = 1，算出 cos(x) = 0.5。这个解法犯了什么致命错误？",
    options: [
      "两边同除以 sin(x) 直接杀死了 sin(x) = 0 的一整套有效解，丢失了一半答案！",
      "应该除以 cos(x)，而不是除以 sin(x)。",
      "cos(x) 在三角学中根本不能等于 0.5。",
      "该方程在实数范围内完全没有解。"
    ],
    correctAnswer: 0,
    explanation: "考场致命陷阱！千万不要两边同时除以变量三角函数。必须将所有项移到左边提取公因式因式分解：sin(x)(2 cos(x) - 1) = 0，从而完整得到 sin(x) = 0 和 cos(x) = 0.5 两组解！"
  },
  {
    id: "q-m2",
    subject: "math",
    topic: "二次函数 (Quadratics)",
    question: "题目写道：“二次曲线 y = ax² + bx + c 完全位于 x 轴的上方 (lies entirely above x-axis)。” 对应的严格数学条件是什么？",
    options: [
      "a > 0 且 b² - 4ac > 0",
      "a > 0 且 b² - 4ac < 0",
      "a < 0 且 b² - 4ac = 0",
      "a > 0 且 b² - 4ac = 0"
    ],
    correctAnswer: 1,
    explanation: "因为曲线开口向上微笑，所以 a > 0。因为曲线完全在 x 轴上方，说明它与 x 轴【完全没有交点】，即零个实根，所以判别式严格小于零：b² - 4ac < 0！大量考生因为看到‘上方’就想当然写成 > 0，直接掉入陷阱。"
  },
  {
    id: "q-m3",
    subject: "math",
    topic: "对数函数 (Logarithms)",
    question: "在解对数方程时，通过二次方程步骤解得候选项 x = 5 和 x = -3。在写最终答案前，学生必须做什么？",
    options: [
      "保留 x = 5 和 x = -3 两个都是最终解。",
      "把 x = -3 直接改成 +3，因为数学可以取绝对值。",
      "检查 x = -3 是否会导致题目中任何对数内部括号 ≤ 0；若会，必须划掉并明确写上 'reject x = -3' (舍去)。",
      "将两个答案都除以 10 进行归一化。"
    ],
    correctAnswer: 2,
    explanation: "对数函数的真数部分严格禁止为非正数（≤ 0）！任何代入后使得 log 内部非正的解，必须手动写明 'reject' 舍去，否则立化评分标准会直接扣除 1 至 2 分准确分！"
  },
  {
    id: "q-m4",
    subject: "math",
    topic: "绝对值模函数 (Modulus Functions)",
    question: "绘制 y = |2x - 6| 的函数图像时，图像呈现什么形状，在 x 轴上的尖峰拐点坐标是多少？",
    options: [
      "一条穿过 x 轴向下的直线，y 轴截距为 (0, -6)。",
      "呈锐利的 V 形折线，在 (3, 0) 处反弹，所有曲线均严格位于 x 轴上方或轴上。",
      "一条平滑的 U 形抛物线，顶点在 (0, 6)。",
      "一条倒 V 形折线，最高顶点在 (3, 6)。"
    ],
    correctAnswer: 1,
    explanation: "绝对值函数将所有负数输出转换为正的距离值。y = 2x - 6 在 x 轴下方的部分会垂直向上翻折，在根 x = 3 处（此时 2x - 6 = 0）形成尖锐的 V 形反弹拐点 (3, 0)，y 轴截距为 (0, 6)。"
  },
  {
    id: "q-m5",
    subject: "math",
    topic: "三角形法则与方位角 (Triangle Rules)",
    question: "在三角形 ABC 中，已知 a = 7 cm，b = 10 cm，角 A = 35°。在用正弦定理求角 B 时，必须核查什么考点陷阱？",
    options: [
      "可能存在两组有效解：锐角 B ≈ 55.0° 与钝角 B' = 180° - 55.0° = 125.0°，因为 35° + 125.0° < 180°。",
      "正弦定理只能在含 90° 的直角三角形中使用。",
      "钝角解必须未经检查就直接舍去。",
      "已知两边及一对角时不能使用正弦定理。"
    ],
    correctAnswer: 0,
    explanation: "正弦定理的钝角模糊情况 (Ambiguous Case)！当已知两边及较短边所对的锐角时，通过计算得出的钝角 (180° - θ) 与已知角之和若小于 180°，同样是一组完全成立的有效几何解！"
  },
  {
    id: "q-c1",
    subject: "chemistry",
    topic: "化学键与结构 (Bonding & Structure)",
    question: "在立化中学化学评分标准中，解释水为什么沸点很低，下列哪句表述能拿满全卷采分？",
    options: [
      "只需很少的能量即可破坏氢原子和氧原子之间的强共价键。",
      "只需很少的热能去克服水分子之间的弱分子间引力 (weak intermolecular forces of attraction)。",
      "水分子内部有容易逃逸到气相中的自由离域电子。",
      "H⁺ 与 O²⁻ 离子之间的静电引力很弱。"
    ],
    correctAnswer: 1,
    explanation: "考场致命地雷！水的沸腾绝对没有破坏共价键！沸腾只是分开了分子间距离，克服了微弱的分子间引力。写“共价键断裂”直接判零分。"
  },
  {
    id: "q-c2",
    subject: "chemistry",
    topic: "酸与金属反应 (Acids & Metals)",
    question: "试卷提问：“将稀盐酸加入盛有铜屑 (Copper turnings) 的烧杯中，写出观察到的现象。” 正确答案是？",
    options: [
      "剧烈产生无色气泡，该气体能使带火星的木条复燃。",
      "烧杯变热，溶液变成氯化铜特有的蓝色溶液。",
      "无明显反应 / 看不到任何气泡生成 (No reaction / no bubbles)。",
      "烧杯底部有红棕色固体析出沉淀。"
    ],
    correctAnswer: 2,
    explanation: "不活泼金属陷阱！铜 (Cu) 和银 (Ag) 在金属活动性顺序中排在氢 (H) 的后面，完全不会与稀盐酸反应。凡是写产生气泡的答案一律得 0 分。"
  },
  {
    id: "q-c3",
    subject: "chemistry",
    topic: "盐的制备 (Salt Preparation)",
    question: "要求制备纯净干燥的硫酸钡 (BaSO₄) 固体。根据决策树，必须选用哪种实验方法？",
    options: [
      "使用酸式滴定管、移液管和指示剂的滴定法 (Titration)。",
      "向稀硫酸中加入过量难溶碱后加热过滤结晶法。",
      "沉淀法 (Precipitation)：混合两种可溶溶液（如硝酸钡与硫酸钠溶液），过滤沉淀物，蒸馏水洗涤，滤纸吸干。",
      "直接燃烧金属钡与硫气体化合生成。"
    ],
    correctAnswer: 2,
    explanation: "BaSO₄ 是难溶性硫酸盐。难溶盐在剑桥大纲中必须且只能使用【沉淀法 (Precipitation)】，通过混合两种可溶盐水溶液产生沉淀，随后进行标准四步法：过滤、洗涤、滤纸压干。"
  },
  {
    id: "q-c4",
    subject: "chemistry",
    topic: "摩尔计算 (The Mole Concept)",
    question: "在室温常压 (r.t.p.) 下，480 cm³ 的二氧化碳气体的摩尔数是多少？",
    options: [
      "480 / 24 = 20 mol",
      "(480 / 1000) / 24 = 0.48 / 24 = 0.02 mol",
      "480 × 24 = 11,520 mol",
      "480 × 6 × 10²³ mol"
    ],
    correctAnswer: 1,
    explanation: "气体体积公式必须用 dm³！1 dm³ = 1000 cm³。480 cm³ = 0.48 dm³。摩尔数 = 0.48 / 24 = 0.02 mol。忘记先除以 1000 换算单位是极其高频的失误！"
  },
  {
    id: "q-c5",
    subject: "chemistry",
    topic: "氧化还原试剂 (Redox Reagents)",
    question: "酸化高锰酸钾 (KMnO₄) 溶液作为强氧化剂与未知物发生反应时，什么特征颜色变化能证明氧化还原反应已发生？",
    options: [
      "由无色变成棕色",
      "由橙色变成绿色",
      "由紫色褪色为无色 (Purple to Colourless)",
      "由蓝色变成红色"
    ],
    correctAnswer: 2,
    explanation: "酸化 KMnO₄ 本身作为强氧化剂被还原，最标志性的现象是由【紫色】褪变为【无色】。无色变棕色是碘化钾 (KI) 作为还原剂被氧化生成单质碘的特征。"
  }
];
