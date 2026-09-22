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
    topic: "线性化规律 (Linear Law)",
    question: "在将曲线方程 y = a x^b 转化为直线 Y = mX + c 时，绘制 lg(y) 对 lg(x) 的图像。算出纵轴截距 c = 3。那么常数 a 的真正数值是多少？",
    options: [
      "a = 3",
      "a = 30",
      "a = 10³ = 1000",
      "a = e³ ≈ 20.08"
    ],
    correctAnswer: 2,
    explanation: "因为 lg(y) = b·lg(x) + lg(a)，所以纵截距 c = lg(a)。因此还原时必须取指数：a = 10^c = 10³ = 1000。很多考生算了半天，最后直接写 a = 3，功亏一篑！"
  },
  {
    id: "q-c1",
    subject: "chemistry",
    topic: "微观键结结构 (Bonding & Structure)",
    question: "解释水为什么具有较低的沸点时，在立化中学的官方评分标准中，下列哪句话能拿到【满分】？",
    options: [
      "仅需要很少能量即可切断氢原子与氧原子之间的强共价键。",
      "仅需要很少热能即可克服水分子之间微弱的分子间相互作用力 (weak intermolecular forces of attraction)。",
      "水分子中具有可在气相中轻松溢出的离域自由电子。",
      "H⁺ 与 O²⁻ 离子之间的静电引力很微弱。"
    ],
    correctAnswer: 1,
    explanation: "致命陷阱！水沸腾只是将分子彼此拉开，克服的是微弱的分子间引力 (weak intermolecular forces)！水分子内部的共价键根本没有断裂！写‘共价键断裂’整题直接得 0 分。"
  },
  {
    id: "q-c2",
    subject: "chemistry",
    topic: "酸与金属 (Acids & Metals)",
    question: "试卷提问：“向盛有金属铜屑的烧杯中加入稀盐酸，请记录实验观察现象。” 正确的答案是什么？",
    options: [
      "剧烈冒出无色氢气泡，伸入燃烧木条有爆鸣声。",
      "烧杯发热，溶液变为蓝色氯化铜溶液。",
      "无明显反应 / 无气泡产生 (No reaction / no bubbles observed)。",
      "烧杯底部析出红褐色固体沉淀。"
    ],
    correctAnswer: 2,
    explanation: "不活泼金属大坑！金属铜 (Cu) 和银 (Ag) 在金属活动性顺序表中排在氢的后面，根本不与稀酸发生反应！任何胡乱编造有气泡冒出的答案都会被判零分。"
  },
  {
    id: "q-c3",
    subject: "chemistry",
    topic: "盐的制备 (Salt Preparation)",
    question: "根据决策树，要制备一份纯净、干燥的硫酸钡 (BaSO₄) 固体样品，必须选用哪种实验方案？",
    options: [
      "滴定法 (Titration)：用酸式滴定管与移液管加入指示剂进行中和。",
      "过量不溶物法 (Excess Insoluble Base)：将氧化钡加入硫酸中加热并过滤结晶。",
      "沉淀法 (Precipitation)：将两种可溶性溶液（如硝酸钡溶液与硫酸钠溶液）混合，过滤沉淀滤渣，用蒸馏水清洗，最后在滤纸间压干。",
      "直接燃烧金属钡与硫气体化合。"
    ],
    correctAnswer: 2,
    explanation: "硫酸钡 (BaSO₄) 是典型的不溶性硫酸盐沉淀。所有不溶性盐的制备唯一正解永远是【沉淀法 (Precipitation)】：混合两可溶溶液，过滤滤渣，蒸馏水洗涤，滤纸压干！"
  },
  {
    id: "q-c4",
    subject: "chemistry",
    topic: "摩尔计算 (The Mole Concept)",
    question: "在室温常压 (r.t.p.) 条件下，480 cm³ 的二氧化碳气体所含的摩尔数是多少？",
    options: [
      "480 / 24 = 20 mol",
      "(480 / 1000) / 24 = 0.48 / 24 = 0.02 mol",
      "480 × 24 = 11,520 mol",
      "480 × 6 × 10²³ mol"
    ],
    correctAnswer: 1,
    explanation: "常温常压摩尔气体体积公式 Moles = V / 24 dm³ 必须基于 dm³！1 dm³ = 1000 cm³。480 cm³ 必须先除以 1000 变成 0.48 dm³，再除以 24 得到 0.02 mol。忘记先除以 1000 是考场最惨痛的扣分点！"
  },
  {
    id: "q-c5",
    subject: "chemistry",
    topic: "氧化还原指示剂 (Redox Reagents)",
    question: "当酸化高锰酸钾(VII) (KMnO₄) 对未知溶液充当氧化剂时，什么颜色变化能确证氧化还原反应成功发生？",
    options: [
      "无色变为棕色",
      "橙色变为绿色",
      "紫色褪为完全无色 (Purple to Colourless)",
      "蓝色变为红色"
    ],
    correctAnswer: 2,
    explanation: "酸化高锰酸钾是强氧化剂，它在氧化对手的同时自身被还原，标志性的颜色改变就是从原本浓烈的【深紫色褪为完全无色】！而‘无色变为棕色’是还原剂碘化钾 (KI) 的特征。"
  }
];
