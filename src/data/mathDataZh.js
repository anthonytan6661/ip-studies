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
      name: "第1考区：核心代数与函数 (Core Algebra & Functions)",
      examWeight: "约占全卷 40% 分值",
      summary: "考试基石。只要彻底吃透第1考区，及格线就已经牢牢锁定，杜绝低级计算失误。",
      topics: [
        {
          id: "m-1",
          number: 1,
          title: "二次方程、图像与配方法 (Quadratic Equations, Graphs & Completing the Square)",
          plainEnglish: "二次方程就是一条对称的抛物线（U形山谷或倒U形山丘）。核心技能是不靠盲猜，瞬间求出准确的顶点转向点 (turning point/vertex)、对称轴和与坐标轴的交点。",
          routines: [
            {
              name: "配方法求顶点与对称轴",
              desc: "将 y = ax² + bx + c 配方为顶点式 y = a(x - h)² + k。因为平方项 (x - h)² ≥ 0，极值必为 k，当且仅当 x = h 时取得，顶点坐标为 (h, k)，对称轴恒为垂直线 x = h。"
            },
            {
              name: "手绘抛物线4步法",
              desc: "判别开口方向（a > 0 微笑，a < 0 倒挂），标出顶点 (h, k)，求 y 轴截距 (令 x = 0 ⇒ (0, c))，以及解方程 ax² + bx + c = 0 求 x 轴截距。"
            }
          ],
          traps: [
            "括号内符号未反转：遇到 y = 3(x - 4)² + 7，顶点是 (+4, 7)，绝不是 -4！"
          ],
          spotCheckQuestion: "当你配方完成后，顶点的坐标是多少？括号里面的符号反转了吗？"
        },
        {
          id: "m-2",
          number: 2,
          title: "线性与二次不等式及联立方程 (Linear & Quadratic Inequalities and Simultaneous Equations)",
          plainEnglish: "不等式是求曲线什么时候严格高于 (> 0) 或低于 (< 0) 水平坐标轴。联立方程则是计算一条直线与一条二次曲线精确相交的 (x, y) 坐标点。",
          routines: [
            {
              name: "抛物线不等式法则",
              desc: "所有项移到左侧：(x - α)(x - β) < 0 或 > 0。画微笑抛物线草图标出两根 α 与 β。若求 < 0，选两根中间的夹心层：α < x < β；若求 > 0，选两边外展的双翼：x < α 或 x > β。"
            },
            {
              name: "联立消元代入法",
              desc: "1. 从线性方程解出单变量（如 y = mx + c）。2. 代入二次方程消去 y，整理为 Ax² + Bx + C = 0。3. 解出两个 x 值。4. 将每个 x 代回线性方程算回对应的 y 坐标。"
            }
          ],
          traps: [
            "不等式陷阱：将 (x - 2)(x - 5) < 0 随手拆成 x < 2 和 x < 5，不画抛物线或符号表（这在数学上完全错误，直接扣光步骤分！）。",
            "联立方程陷阱：算出两个 x 值后立刻停笔，遗漏计算对应的 y 坐标配对！"
          ],
          spotCheckQuestion: "你有画抛物线草图来判断不等式是在两根之间还是两根之外吗？联立方程的两组 (x, y) 坐标都算齐了吗？"
        },
        {
          id: "m-3",
          number: 3,
          title: "二次方程根的性质与判别式 (Nature of Roots & The Discriminant)",
          plainEnglish: "完全不用画图，仅凭纯代数判别式计算一条直线和一条二次曲线是相碰相切、穿过相交两次、还是永远碰不到。",
          routines: [
            {
              name: "判别式分析 (b² - 4ac)",
              desc: "b² - 4ac > 0 ⇒ 2个不同实根（相交两点）；b² - 4ac = 0 ⇒ 2个相等实根（切线 tangent，只碰触一点）；b² - 4ac < 0 ⇒ 无实根（永不相交）。"
            },
            {
              name: "直线与曲线联立判别",
              desc: "联立直线与曲线 mx + c = ax² + bx + d，整理成标准二次式 Ax² + Bx + C = 0，计算判别式 B² - 4AC 判定交点个数。"
            }
          ],
          traps: [
            "立化王牌陷阱：题目说‘曲线完全在 x 轴的上方 (lies entirely above x-axis)’。正确翻译：开口向上微笑 (a > 0) 并且 永远不碰 x 轴 (b² - 4ac < 0！)。绝大多数学生因直觉思维，错误地把判别式也写成了 > 0！"
          ],
          spotCheckQuestion: "如果题目说直线是曲线的切线 (tangent)，判别式应该等于多少？若曲线完全在 x 轴上方，b² - 4ac 是大于零还是小于零？（答：等于0；严格小于0）"
        },
        {
          id: "m-4",
          number: 4,
          title: "指数与对数函数 (Exponential & Logarithmic Functions)",
          plainEnglish: "对数其实就是在问一句话：“底数 b 要升到几次方，才能等于数字 x？” 例如 log₁₀(1000) = 3，因为 10³ = 1000。",
          routines: [
            {
              name: "换底公式 (Change of Base Formula)",
              desc: "计算器只有常用对数 Base 10 (lg) 和自然对数 Base e (ln)。遇到 log_b a，立刻换底为 (lg a) / (lg b) 或 (ln a) / (ln b)。"
            },
            {
              name: "降幂与对数运算法则",
              desc: "降幂法则：log(x^k) = k · log(x)。乘积拆加法：log(xy) = log x + log y。商式拆减法：log(x/y) = log x - log y。"
            }
          ],
          traps: [
            "致命高频陷阱：对数的真数部分绝对不能为零或负数！当你解出 x = 3 和 x = -5 时，必须把使括号内 ≤ 0 的解划掉，并在旁边明确写上“reject (舍去)”。如果忘记写，直接丢1至2分！"
          ],
          spotCheckQuestion: "你算出两个 x 的答案吗？有没有代回原题检验，看看会不会让 log 里面的任何括号变成负数或者零？"
        },
        {
          id: "m-5",
          number: 5,
          title: "函数、图像与绝对值模函数 (Functions, Graphs & Modulus Functions)",
          plainEnglish: "函数是将输入值（定义域 domain）映射到唯一输出值（值域 range）的加工机。绝对值模函数 |f(x)| 测量到零点的距离，将所有负数输出垂直翻折成正值。",
          routines: [
            {
              name: "绝对值图像对称翻折法",
              desc: "画 y = |f(x)| 的图像：1. 轻轻铅笔画出底图 y = f(x)；2. 保留 x 轴上方及轴上的部分；3. 将 x 轴下方的部分以 x 轴为镜面垂直向上对称翻折；4. 标明顶点和所有轴交点。"
            },
            {
              name: "绝对值方程分类讨论",
              desc: "解 |f(x)| = g(x)：拆成两路求解 f(x) = g(x) 或 f(x) = -g(x)。解出后代入检验确保 g(x) ≥ 0，剔除增根 (extraneous roots)。"
            }
          ],
          traps: [
            "绝对值图像下方遗留线条：绝对值函数的输出永远不可能为负数，x 轴下方绝对不能留有任何曲线！"
          ],
          spotCheckQuestion: "你的绝对值图像在 x 轴下方还有遗留曲线吗？如果有，有没有全部向上翻折过去？"
        }
      ]
    },
    {
      id: "zone-2",
      name: "第2考区：三角学、弧度制与三维方位角 (Trigonometry, Circular Measure & 3D Bearings)",
      examWeight: "约占全卷 35% 分值",
      summary: "解题步骤高度公式化与机械化；牢记运算协议与计算器模式即可稳拿高分。",
      topics: [
        {
          id: "m-6",
          number: 6,
          title: "三角比、任意三角形法则与3D方位角 (Trigonometric Ratios, Triangle Rules & 3D Bearings)",
          plainEnglish: "在没有直角的一般三角形中求解边长、角度、罗盘方位角以及三维空间建筑高程结构。",
          routines: [
            {
              name: "一般三角形三大黄金公式",
              desc: "1. 面积公式：Area = ½ ab sin C（夹角 C 必须是 a 与 b 的夹角）。2. 正弦定理：a / sin A = b / sin B = c / sin C。3. 余弦定理：c² = a² + b² - 2ab cos C。"
            },
            {
              name: "方位角与三维空间图分析",
              desc: "方位角：从正北方向顺时针旋转，记录3位数字（如 065°、240°）。仰角/俯角：永远以水平视线为基准测量。三维立体题：逐一抽取平面直角三角形于草稿纸计算。"
            }
          ],
          traps: [
            "遗忘正弦定理的钝角模糊情况 (ambiguous case)：当求解角时，钝角 (180° - θ) 可能同样满足题意！",
            "方位角从非正北方向或者逆时针测量，或者忘记写前导零（写成 65° 而非 065°）。"
          ],
          spotCheckQuestion: "你算三角形面积 ½ ab sin C 时用的角是两边中间的夹角吗？你的方位角是用三位数字从正北顺时针量出的吗？"
        },
        {
          id: "m-7",
          number: 7,
          title: "弧长、扇形面积与弧度制 (Circular Measure: Arc Length & Radian System)",
          plainEnglish: "用天然的弧度制取代人类定义的三百六十度（π 弧度 = 180°）。弧度以弧长与半径之比定义，让圆周几何公式极其优美简洁。",
          routines: [
            {
              name: "圆周弧度三大秒杀公式",
              desc: "1. 弧长：s = rθ（θ 必须为弧度）。2. 扇形面积（披萨块）：A = ½ r² θ。3. 弓形面积（披萨边）：扇形面积 - 三角形面积 = ½ r² (θ - sin θ)。"
            }
          ],
          traps: [
            "立化中学失分第一元凶：计算器遗留在角度 DEG 模式，未切换至弧度 RAD 模式！后续所有 sin、cos 计算全盘皆输，瞬间白丢 4 至 6 分！"
          ],
          spotCheckQuestion: "立刻低头看你的科学计算器屏幕正上方：显示的是小微标‘R’还是‘D’？"
        },
        {
          id: "m-8",
          number: 8,
          title: "三角函数与周期图像 (Trigonometric Functions & Periodic Graphs)",
          plainEnglish: "声波、潮汐和交流电等周期性波动现象：y = a·sin(bx) + c、y = a·cos(bx) + c 或 y = a·tan(bx)。快速识读并手绘波形特征是必考题。",
          routines: [
            {
              name: "秒读波形3大参数",
              desc: "a (振幅 Amplitude)：中线到波峰的高度 (|a|)。b (频率/周期)：周期 Period = 360°/b 或 2π/b（tan 周期为 180°/b 或 π/b）。c (中心平衡线平移)：将整条波上下平移，最高点 = c + |a|，最低点 = c - |a|。"
            }
          ],
          traps: [
            "混淆周期与频率：b 是 360° 内周期的循环次数，不是波长本身。千万记住 Period = 2π/b。振幅是半高，不是峰顶到谷底的总高！"
          ],
          spotCheckQuestion: "如果 y = 4 cos(2x) - 1，图像能达到的最高点是多少？周期是多长？（答：最高点 +3，周期 180° 或 π）"
        },
        {
          id: "m-9",
          number: 9,
          title: "三角方程与基本恒等式 (Trigonometric Equations & Simple Identities)",
          plainEnglish: "在指定区间内（0° ≤ x ≤ 360° 或 0 ≤ x ≤ 2π），寻找波动曲线命中特定数值的所有有效角度。",
          routines: [
            {
              name: "3步 ASTC 象限定位法则",
              desc: "第1步：算基准锐角 α = sin⁻¹(|值|)（绝对忽略负号！）；第2步：用 ASTC（All, Sin, Tan, Cos）确认象限；第3步：提取角度：Q1: α；Q2: 180° - α；Q3: 180° + α；Q4: 360° - α。"
            },
            {
              name: "基本勾股三角恒等式",
              desc: "tan θ = sin θ / cos θ；sin² θ + cos² θ = 1；sec² θ = 1 + tan² θ；csc² θ = 1 + cot² θ。"
            }
          ],
          traps: [
            "致命操作陷阱：千万不要两边同除以 sin(x) 或 cos(x)（例如在 2 sin x cos x = sin x 中）。同除直接消灭了 sin x = 0 的一整套有效解！必须移项提取公因式因式分解：sin x (2 cos x - 1) = 0。"
          ],
          spotCheckQuestion: "算基准锐角时你忽略负号了吗？解方程时有没有提取公因式而不是盲目同除消掉三角函数？"
        },
        {
          id: "m-10",
          number: 10,
          title: "高阶三角恒等式、倍角公式与 R式法则 (Further Trigonometric Identities, Double Angles & R-Formula)",
          plainEnglish: "高级代数工具，用于化简复合波形表达式、求波形最大最小值、以及进行严格的数学等式证明。",
          routines: [
            {
              name: "加法与倍角展开公式",
              desc: "加法公式：sin(A ± B) = sin A cos B ± cos A sin B；cos(A ± B) = cos A cos B ∓ sin A sin B。倍角公式：sin 2A = 2 sin A cos A；cos 2A = 2 cos² A - 1 = 1 - 2 sin² A；tan 2A = (2 tan A)/(1 - tan² A)。"
            },
            {
              name: "R式法则与单侧推导策略",
              desc: "R式：a sin θ ± b cos θ = R sin(θ ± α)，其中 R = √(a² + b²)，tan α = b/a。恒等式证明：挑复杂的一侧（通常是左侧 LHS），单侧推导变换至 RHS，绝对禁止跨等号两边移项！"
            }
          ],
          traps: [
            "恒等式证明当成方程移项：在‘证明 LHS = RHS’题中，跨过等号两边移项会被视为预设结论成立，立化与剑桥评分标准直接扣光所有方法分！"
          ],
          spotCheckQuestion: "你的恒等式证明是不是只在单独一侧进行推导？有没有跨过等号两边移项运算？"
        }
      ]
    },
    {
      id: "zone-3",
      name: "第3考区：多项式、部分分式与解析几何 (Polynomials, Partial Fractions & Coordinate Geometry)",
      examWeight: "约占全卷 25% 分值",
      summary: "高度结构化与代数规范化；是全卷中最稳拿 100% 满分的考区。",
      topics: [
        {
          id: "m-11",
          number: 11,
          title: "多项式、余数定理与因式定理 (Polynomials, Remainder & Factor Theorems)",
          plainEnglish: "处理含有 x³、x⁴ 的高次代数式，免去冗长繁琐的多项式长除法。",
          routines: [
            {
              name: "余数定理",
              desc: "多项式 f(x) 除以 (ax - b)？不用做除法，直接代入 x = b/a：余数 R = f(b/a)。"
            },
            {
              name: "因式定理与完全因式分解",
              desc: "若 f(b/a) = 0，则 (ax - b) 是整除的线性因式！用长除法求出二次商式，再将二次式彻底因式分解成两个一次因式。"
            }
          ],
          traps: [
            "因式分解不彻底：将三次因式分解答案停留在 (x - 1)(x² - 4) 就草草收场，未进一步拆分为 (x - 1)(x - 2)(x + 2)！"
          ],
          spotCheckQuestion: "你的最终答案是不是停留在 (x - 1)(x² - 4)？检查一下后面的括号还能不能继续往下分解！"
        },
        {
          id: "m-12",
          number: 12,
          title: "部分分式 (Partial Fractions)",
          plainEnglish: "分式加法的逆运算：将一个复杂庞大的代数有理分式，拆解为几个简单的基础分式之和。",
          routines: [
            {
              name: "分母结构拆分三法则",
              desc: "1. 互异一次因式：A/(x - a) + B/(x - b)。2. 重复一次因式：A/(x - a) + B/(x - a)²。3. 不可约二次因式：A/(x - a) + (Bx + C)/(x² + c)。"
            }
          ],
          traps: [
            "致命隐形陷阱：假分式 (Improper Fractions)！若分子最高次数 ≥ 分母最高次数（如 (x² + 1)/(x² - 3)），绝对不可直接拆分！必须先做多项式长除法提取整式，再拆分余式！"
          ],
          spotCheckQuestion: "分子最高幂次是否大于或等于分母最高幂次？如果是，你在拆分前做长除法提取了吗？"
        },
        {
          id: "m-13",
          number: 13,
          title: "直线解析几何 (Coordinate Geometry of Straight Lines)",
          plainEnglish: "在 (x, y) 笛卡尔坐标平面上，运用代数斜率与直线方程求解几何特性与垂直相交关系。",
          routines: [
            {
              name: "平行与垂直斜率判定",
              desc: "平行：m₁ = m₂。垂直：m₁ · m₂ = -1 ⇒ m₂ = -1/m₁（倒数并取相反数！如 m₁ = 2/3 ⇒ m₂ = -3/2）。"
            },
            {
              name: "垂直平分线3步套路",
              desc: "1. 求中点 M = ((x₁+x₂)/2, (y₁+y₂)/2)；2. 求斜率 m_AB 并反转取反得 m_perp = -1/m_AB；3. 用点斜式 y - y_M = m_perp(x - x_M) 写出方程。"
            }
          ],
          traps: [
            "带负号坐标算斜率时符号算错：(y₂ - y₁) / (x₂ - x₁)。",
            "算垂直斜率时只取相反数忘记取倒数（写成 -2/3 而不是 -3/2）。"
          ],
          spotCheckQuestion: "若一条直线的斜率是 -1/4，与它垂直的直线斜率是多少？（正确答案：+4，反转并变正）"
        }
      ]
    }
  ],
  auditProtocol: {
    title: "每日 10 分钟数学口头抽查审计流程",
    steps: [
      { step: 1, text: "从 13 个专题中随机挑选 2 个（按考区重要性排序：先复习第1考区，再第2考区，最后第3考区）。" },
      { step: 2, text: "拿出前几个学期错题本或测验试卷中，曾做错的 2 道对应经典题。" },
      { step: 3, text: "让他大声口述为什么解题第一步要这么做（如果回答“我也不知道，照抄公式而已” ⇒ 考试稍加变形必错；若能解释“因为题目说了垂直平分线，所以我必须先找中点和负倒数斜率” ⇒ 说明考点已真正融会贯通！）。" }
    ]
  }
};
