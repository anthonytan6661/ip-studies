export const mathSyllabusZh = {
  title: "中三综合数学 (Integrated Math)",
  subtitle: "立化中学 (River Valley High School) IP 考试核心考点指南",
  bigPicture: {
    headline: "中三的数学究竟发生了什么变化？",
    points: [
      "在小学和中一中二，数学主要是算术和计算步骤（算出一个具体数字、求一个角度、解方程求 x）。",
      "但在中三立化 IP（集成课程）中，数学变成了结构性与条件性证明：不再仅是求出 x = 5，而是证明为什么一条曲线永远不会与直线相交、寻找取值范围、以及将现实中的非线性曲线拉成直线分析。",
      "好消息是：全部13个专题没有任何一道题需要天才般的直觉。它们全部是【模式识别套路】。只要敏锐抓住题目中的“触发关键词”，接下来的解题步骤几乎千篇一律。"
    ]
  },
  zones: [
    {
      id: "zone-1",
      name: "第1考区：高阶代数与函数 (Advanced Algebra & Functions)",
      examWeight: "约占全卷 45% 分值",
      summary: "考试基石。只要彻底吃透第1考区，及格线就已经牢牢锁定。",
      topics: [
        {
          id: "m-1",
          number: 1,
          title: "指数与二次根式 (Indices & Surds)",
          plainEnglish: "根式 (Surds) 就是开方开不尽的无限不循环小数（如 √2、√7）。因为小数无穷无尽，数学家要求必须用精确的根号符号保留。黄金死律：最终答案的分母底下绝对不允许留下任何根号！",
          routines: [
            {
              name: "分母有理化 (Rationalising Denominators)",
              desc: "分子分母同乘“共轭伴侣 (conjugate partner)”。如果分母是 (3 + √5)，上下同乘 (3 - √5)。利用平方差公式 (a+b)(a-b) = a² - b²，分母的根号瞬间化为纯整数 3² - 5 = 4。"
            },
            {
              name: "幂次中的隐藏二次方程 (Hidden Quadratics in Powers)",
              desc: "遇到形如 2^(2x) - 5(2^x) + 4 = 0 的方程。必须设换元 u = 2^x，化为 u² - 5u + 4 = 0。解得 u = 1 或 4，再转回求 x：2^x = 1 ⇒ x = 0；2^x = 4 ⇒ x = 2。"
            }
          ],
          traps: [
            "最终答案分母遗留根号未化简（直接扣除准确分 accuracy mark）。",
            "误把 √(a + b) 当成 √a + √b 拆开计算（这是严重的代数低级错误！）。"
          ],
          spotCheckQuestion: "拿你的最终答案给我看：分数的最底下（分母）还有没有开方符号 √？如果有，说明你根本没有做完这道题！"
        },
        {
          id: "m-2",
          number: 2,
          title: "对数与指数函数 (Logarithmic & Exponential Functions)",
          plainEnglish: "对数其实就是在问一句话：“底数要升到几次方，才能等于这个数字？” 例如 log₁₀(1000) = 3，因为 10³ = 1000。",
          routines: [
            {
              name: "换底公式 (Change of Base Formula)",
              desc: "普通计算器通常只有常用对数 Base 10 (lg) 和自然对数 Base e (ln)。如果考题出现 log₂ 7，必须立刻写成 (lg 7) / (lg 2) 来计算。"
            },
            {
              name: "降幂法则 (Power Drop Rule)",
              desc: "log(x^k) = k · log(x)。能把高高在上的未知数指数拉到地面上，变成普通的线性代数进行求解。"
            }
          ],
          traps: [
            "致命高频陷阱：对数的真数部分绝对不能为零或负数！当你解二次方程算出 x = 3 和 x = -5 时，必须把使括号内 ≤ 0 的解划掉，并在旁边明确写上“reject (舍去)”。如果忘记写，每次丢1至2分！"
          ],
          spotCheckQuestion: "你算出两个 x 的答案吗？有没有代回原题检验，看看会不会让 log 里面的任何括号变成负数或者零？"
        },
        {
          id: "m-3",
          number: 3,
          title: "二次函数与方程 (Quadratic Functions & Equations)",
          plainEnglish: "二次函数就是 U形或倒U形抛物线：y = ax² + bx + c。全卷永远只考两个核心点：顶点转向点 (turning points) 和与直线的交点个数 (intersections)。",
          routines: [
            {
              name: "配方法 (Completing the Square)",
              desc: "将 ax² + bx + c 转化为 a(x - h)² + k。因为平方项 (x - h)² 最小为0，抛物线的最高点或最低点坐标 (h, k) 瞬间一目了然。"
            },
            {
              name: "判别式分析 (The Discriminant: b² - 4ac)",
              desc: "b² - 4ac > 0 ⇒ 与直线有两个不同交点（2个实数根）；\nb² - 4ac = 0 ⇒ 刚好相切相碰（1个实数根，切线 tangent）；\nb² - 4ac < 0 ⇒ 永远不相交（0个实数根）。"
            }
          ],
          traps: [
            "立化王牌陷阱题：题目说“曲线完全在 x 轴的上方 (lies entirely above x-axis)”。\n正确翻译：开口向上微笑 (a > 0) 并且 永远不碰到 x 轴 (b² - 4ac < 0！)。绝大多数学生因直觉思维，错误地把判别式也写成了 > 0！"
          ],
          spotCheckQuestion: "当题目提到‘相切 (tangent)’或者‘只碰到一个点 (touches at one point)’时，你第一反应写出的第一个公式是什么？（正确答案：b² - 4ac = 0）"
        },
        {
          id: "m-4",
          number: 4,
          title: "二次及非线性不等式 (Quadratic & Non-Linear Inequalities)",
          plainEnglish: "不是求曲线在哪里等于零，而是找曲线在什么时候高于海平面 (> 0) 或低于海平面 (< 0)。",
          routines: [
            {
              name: "5步抛物线草图法则",
              desc: "1. 移项将所有项移到左侧，右侧留零：x² - 5x + 6 < 0；\n2. 因式分解：(x - 2)(x - 3) < 0；\n3. 随手画一个U形抛物线草图，穿过x轴交点 2 和 3；\n4. 若求 < 0（轴下方），答案为两根中间的“夹心层”：2 < x < 3；\n5. 若求 > 0（轴上方），答案为两边向外展开的“双翼”：x < 2 或 x > 3。"
            }
          ],
          traps: [
            "像解普通线性方程那样直接拆开写 x - 2 < 0 ⇒ x < 2（这是完全错误的！）。解不等式必须画抛物线草图或列表！"
          ],
          spotCheckQuestion: "拿草稿纸给我看：你有没有画出那个小的 U 形抛物线草图来挑选不等式的区间？"
        },
        {
          id: "m-5",
          number: 5,
          title: "多项式、余数定理与因式定理 (Polynomials, Remainder & Factor Theorems)",
          plainEnglish: "包含 x³、x⁴ 的高次代数式。就像小学做长除法一样，只是把数字换成了带有字母的代数表达式。",
          routines: [
            {
              name: "余数定理 (Remainder Theorem)",
              desc: "将 f(x) 除以 (x - c)？完全不需要耗费5分钟做长除法。直接把 x = c 代入原式，计算出的值就是精确的余数：Remainder R = f(c)。"
            },
            {
              name: "因式定理与完全分解 (Factor Theorem)",
              desc: "如果 f(c) = 0，说明余数为零，(x - c) 就是一个完美因式！利用多项式长除法除出剩下的二次商式，再把该二次式彻底因式分解成两个括号。"
            }
          ],
          traps: [
            "因式分解不彻底：最后把三次式写成 (x - 1)(x² - 4) 就交卷。后面的 (x² - 4) 必须进一步拆解为 (x - 1)(x - 2)(x + 2)！"
          ],
          spotCheckQuestion: "你的三次因式分解答案是不是还留着 (x² - 4) 这样的一半？再检查一遍后面的括号还能不能继续拆开！"
        },
        {
          id: "m-6",
          number: 6,
          title: "部分分式与二项式定理 (Partial Fractions & Binomial Theorem)",
          plainEnglish: "部分分式就是小学分数加法的反向工程（把一个复杂的大分式拆回几个简单的小分式相加减）。二项式定理则是快速展开如 (2 + 3x)⁸ 的捷径公式。",
          routines: [
            {
              name: "部分分式分母拆分模板",
              desc: "单线性因式：A/(x + 1)；\n重复线性因式：B/(x + 1)²；\n不可分解二次因式：(Cx + D)/(x² + 4)。"
            },
            {
              name: "二项式通项公式 (General Term)",
              desc: "T_(r+1) = ⁿCᵣ · a^(n - r) · b^r。考试常考“求常数项 (constant term) 或求 x³ 的系数”，直接令指数等于目标即可，无须展开整道题。"
            }
          ],
          traps: [
            "假分式陷阱！如果分子最高次数 ≥ 分母最高次数（如 (x² + 1)/(x² - 3)），绝对不能直接设 ABC 拆分！必须先做多项式长除法提取出整数部分！"
          ],
          spotCheckQuestion: "分子的最高次方是不是大于或等于分母的最高次方？如果是，你第一步做多项式长除法了吗？"
        }
      ]
    },
    {
      id: "zone-2",
      name: "第2考区：三角学与弧度制 (Trigonometry & Circular Measure)",
      examWeight: "约占全卷 30% 分值",
      summary: "得分效率最高；套路极强，属于按部就班拿满步骤分的考区。",
      topics: [
        {
          id: "m-7",
          number: 7,
          title: "弧度制与圆测量 (Circular Measure - Radian System)",
          plainEnglish: "角度制（360°）是人类为了方便人为规定的。弧度 (Radians) 才是圆的自然语言（圆弧长度与半径的比值）。π 弧度 = 180°。",
          routines: [
            {
              name: "3大秒杀公式（试卷附录有，但必须肌肉记忆）",
              desc: "1. 弧长：s = rθ（θ 必须为弧度 rad）；\n2. 扇形面积（披萨块）：A = ½ r² θ；\n3. 弓形面积（披萨边角 crust）：扇形面积减三角形面积 = ½ r² (θ - sin θ)。"
            }
          ],
          traps: [
            "立化失分第一元凶：科学计算器屏幕顶部显示着 ‘D’（角度 DEG 模式），而不是 ‘R’（弧度 RAD 模式）！一旦按错模式，后面连环计算全军覆没，单题直接蒸发 4 至 6 分！"
          ],
          spotCheckQuestion: "现在立刻看你的科学计算器屏幕正上方：显示的是小字母 ‘R’，还是 ‘D’？"
        },
        {
          id: "m-8",
          number: 8,
          title: "三角函数与图像 (Trigonometric Functions & Graphs)",
          plainEnglish: "声波、潮汐与心跳都呈现周期性波浪规律。本考点专门考察快速识别与草绘 y = a·sin(bx) + c 或 y = a·cos(bx) + c 图像。",
          routines: [
            {
              name: "秒读图像3大关键数字",
              desc: "a（振幅 Amplitude）：波峰波谷距离中心线的高度（|a|）；\nb（频率 / 周期 Period）：360° 或 2π 内包含的完整循环个数，周期 = 360°/b 或 2π/b；\nc（中心线位移）：把整条波浪向上或向下整体平移 c 格。"
            }
          ],
          traps: [
            "混淆频率与周期：b 代表循环次数而不是波长，必须牢记 Period = 2π / b。"
          ],
          spotCheckQuestion: "如果题目给出 y = 4 cos(2x) - 1，这个函数图像能达到的最高点是多少？（正确答案：+4 - 1 = 3）"
        },
        {
          id: "m-9",
          number: 9,
          title: "三角方程求解 (Trigonometric Equations)",
          plainEnglish: "寻找波浪在指定区间内（例如 0° 到 360° 或 0 到 2π）何时达到某个特定数值。",
          routines: [
            {
              name: "3步 ASTC 象限黄金法则",
              desc: "第1步：计算锐角基准角 α = sin⁻¹(|数值|)。注意：按计算器时坚决忽略负号！\n第2步：判定象限（All 全正, Sin 正, Tan 正, Cos 正）；\n第3步：提取角度：第1象限 α；第2象限 180° - α；第3象限 180° + α；第4象限 360° - α。"
            }
          ],
          traps: [
            "致命错误：千万不要在方程两边同时除以 sin(x) 或 cos(x)（例如 2 sin x cos x = sin x）！一除就会把 sin x = 0 的一整套解全部杀死！必须移项到左边提取公因式进行因式分解！"
          ],
          spotCheckQuestion: "你在计算器上按出锐角基准角 α 的时候，是不是把负号忽略掉了？"
        },
        {
          id: "m-10",
          number: 10,
          title: "三角恒等式与证明 (Trigonometric Identities & Proofs)",
          plainEnglish: "代数解密游戏：证明看似完全不同的两个三角式子在数学上本质完全相等。",
          routines: [
            {
              name: "单边变形黄金策略",
              desc: "绝不要两边同时移项！挑选看起来更复杂丑陋的一边（通常是左边 LHS），一步一步化简推导，直到完全等于右边 RHS。"
            },
            {
              name: "万能保命底牌",
              desc: "如果完全卡住没有思路，把所有的 tan, cot, sec, csc 全部换成最基础的 sin θ 和 cos θ，然后通过通分化为一个大分数，利用 sin² θ + cos² θ = 1 消除。"
            }
          ],
          traps: [
            "将证明题当方程解题！在恒等式证明中把项跨过等号 ‘=’ 移来移去，在立化评分标准中会被直接扣光所有步骤分 (method marks)！必须只在一边做推导！"
          ],
          spotCheckQuestion: "你在做证明题时是只在左边/右边单边推导，还是不小心跨过 ‘=’ 等号移项了？"
        }
      ]
    },
    {
      id: "zone-3",
      name: "第3考区：解析几何与线性化规律 (Geometry & Linear Transformations)",
      examWeight: "约占全卷 25% 分值",
      summary: "套路最清晰、结构最严密；是最容易拿到 100% 满分的考区。",
      topics: [
        {
          id: "m-11",
          number: 11,
          title: "直线坐标几何 (Coordinate Geometry of Straight Lines)",
          plainEnglish: "在 (x, y) 直角坐标系中用代数方程解析平面几何关系。",
          routines: [
            {
              name: "平行与垂直斜率规律",
              desc: "平行直线：斜率完全相同 (m₁ = m₂)；\n垂直直线：斜率互为负倒数 (m₁ · m₂ = -1 ⇒ m₂ = -1/m₁)。例如一条直线斜率是 2/3，垂直线斜率必须是 -3/2。"
            },
            {
              name: "垂直平分线 (Perpendicular Bisector) 3步套路",
              desc: "第1步：求线段 AB 的中点 M；\n第2步：算出直线 AB 的斜率 m_AB，然后颠倒取负得到垂直斜率 m_perp = -1/m_AB；\n第3步：用点斜式方程 y - y₁ = m_perp(x - x₁)，把中点代入写出最终方程。"
            }
          ],
          traps: [
            "计算垂直斜率时只取倒数而忘了加负号，或者只加负号忘了颠倒分子分母。"
          ],
          spotCheckQuestion: "与斜率为 m = -1/4 互相垂直的直线斜率是多少？（正确答案：+4）"
        },
        {
          id: "m-12",
          number: 12,
          title: "圆的坐标几何 (Coordinate Geometry of Circles)",
          plainEnglish: "描述到圆心 (a, b) 距离处处相等的全部点的代数集合。",
          routines: [
            {
              name: "标准圆方程 (Standard Form)",
              desc: "(x - a)² + (y - b)² = r²。牢记括号内符号颠倒：(x - 3)² + (y + 4)² = 49 的圆心坐标是 (3, -4)，半径 r = √49 = 7（而不是 49！）。"
            },
            {
              name: "圆的切线套路 (Tangent Line)",
              desc: "切线与切点处的圆半径永远呈 90° 垂直！先求出半径的斜率，倒置加负号获得切线斜率，再用切点坐标写出直线方程。"
            }
          ],
          traps: [
            "把方程右侧的 r² 直接当成半径（如把 49 当半径，忘了开平方根变成 7）。",
            "读取圆心坐标时把正负号搞反。"
          ],
          spotCheckQuestion: "方程为 (x - 3)² + (y + 4)² = 49 的圆，圆心坐标和半径分别是多少？（圆心：(3, -4)，半径：7，不是49！）"
        },
        {
          id: "m-13",
          number: 13,
          title: "线性化规律 (Linear Law: Y = mX + c)",
          plainEnglish: "在工程和科学实验中，现实数据通常是弯曲的曲线（如人口指数爆炸 y = ab^x）。弯曲的线难以读数，Linear Law 就是用对数把曲线“强行拉成一条笔直的直线”方便读取斜率与截距。",
          routines: [
            {
              name: "幂函数转化 (y = ax^b)",
              desc: "两边同时取常用对数 lg：lg y = b(lg x) + lg a。\n对应大 Y = lg y，大 X = lg x，斜率 m = b，纵截距 c = lg a ⇒ 常数 a = 10^c。"
            },
            {
              name: "指数函数转化 (y = ab^x)",
              desc: "两边同时取常用对数 lg：lg y = (lg b)x + lg a。\n对应大 Y = lg y，大 X = x，斜率 m = lg b ⇒ b = 10^m，纵截距 c = lg a ⇒ a = 10^c。"
            }
          ],
          traps: [
            "还原常数时功亏一篑：求出纵轴截距 c 之后，直接以为 a = c。必须用 10 的幂次方还原：a = 10^c！"
          ],
          spotCheckQuestion: "当你从直线上读出纵截距 c 之后，你还记得 c 只是 lg a 吗？你有没有做 10^c 还原真正的常数 a？"
        }
      ]
    }
  ],
  auditProtocol: {
    title: "每日10分钟数学高效抽查流程（给家长与考生的对话指引）",
    steps: [
      { step: 1, text: "“从13个专题中任选2个。”（严格遵循地图：先查第1考区，再查第2考区，最后第3考区）" },
      { step: 2, text: "“拿出你第1至第3学期考卷或作业中做错的2道题。”" },
      { step: 3, text: "“大声向我解释：为什么这道题的第一步要这么做？”\n• 如果孩子回答：“我不知道，我就是照搬公式”，那么考试遇到变式必定翻车。\n• 如果孩子清晰解释：“因为题目写了垂直平分线，所以我必须第一步先找中点”，这个考点就已经彻底刻入脑海！" }
    ]
  }
};
