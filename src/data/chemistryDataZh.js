export const chemistrySyllabusZh = {
  title: "中三纯化学 (Pure Chemistry)",
  subtitle: "立化中学 (River Valley High School) IP 化学教学大纲核心指南",
  bigPicture: {
    headline: "为什么化学一到中三突然变得这么难？",
    points: [
      "在中一中二，科学主要是观察性和描述性的（如“酸尝起来酸酸的”、“金属表面有光泽”、“水在100℃沸腾”）。",
      "但在中三立化 IP 中，化学变成了微观机制、法律文书般的语言规范与定量计算：",
      "1. 剑桥关键词极刑 (The Keyword Penalty)：化学改卷严格得如同法律文件。哪怕概念完全理解，如果漏掉了一个特定的剑桥采分词（例如写成“共价键断裂”，而没写“克服微弱的分子间相互作用力 weak intermolecular forces”），整道3分的大题直接判定零分！",
      "2. 数学屏障（摩尔概念）：化学不再只是背背理论，而是综合了比例、气体体积与摩尔浓度的代数方程。",
      "3. 好消息是：化学考题重复率极高。全岛所有试卷翻来覆去只考相同的6大解释模板。只要背熟这几句模板句型，成绩就能从 50% 压线及格直接跃升到 70%+ 的 Distinction 优秀！"
    ]
  },
  pillars: [
    {
      id: "pillar-1",
      name: "第1支柱：看不见的微观世界——键结与结构 (Bonding & Structure)",
      examWeight: "约占全卷 30% 分值",
      summary: "考试中解释题丢分的第一重灾区。必须保证踩分关键词字字精准。",
      topics: [
        {
          id: "c-1",
          number: 1,
          title: "原子结构与“快乐八隅体”法则 (Atomic Structure & Happy Octet)",
          plainEnglish: "所有的原子都是极度渴望安定的攀附者。它们都迫切想要变得像最右侧的稀有气体（第8/0族）一样，最外层拥有8个电子的满壳层（八隅体稳定结构）。为了达成这个目的，原子会不惜一切：扔掉多余电子、抢夺电子、或与邻居共享电子。",
          routines: [
            {
              name: "离子形成的本质",
              desc: "金属元素最外层有多余的1到3个电子 ⇒ 索性丢弃 ⇒ 带正电荷形成阳离子（Na⁺, Mg²⁺, Al³⁺）。\n非金属元素最外层缺少1到3个电子 ⇒ 强行吸入电子 ⇒ 带负电荷形成阴离子（Cl⁻, O²⁻, N³⁻）。"
            }
          ],
          traps: [
            "电子本身带有负电荷，所以失去负电荷的包袱，整体变成带【正电】！检查离子电荷时切勿弄反。"
          ],
          spotCheckQuestion: "当一个原子失去电子时，它会变成带正电还是带负电？（正确答案：带正电！因为电子是负的，甩掉负包袱自己就变正了）。"
        },
        {
          id: "c-2",
          number: 2,
          title: "四大经典微观结构（剑桥关键词采分雷区）",
          plainEnglish: "每一份考卷都至少有两道3分必考题：“请根据结构与键结 (structure and bonding)，解释为什么物质X具有高/低熔点，或者是否导电。”",
          structuresTable: [
            {
              structure: "1. 巨型离子晶格 (Giant Ionic Lattice)",
              example: "食盐 (NaCl), 氧化镁 (MgO)",
              composition: "金属 + 非金属。正负离子在三维空间紧密交错堆叠。",
              meltingPointExplanation: "熔点极高：'Large amount of thermal energy required to overcome strong electrostatic forces of attraction between oppositely charged ions.'（需要巨大热能克服带相反电荷离子之间的强静电引力）",
              conductivity: "仅在熔融状态 (Molten) 或水溶液 (Aqueous) 中导电。在固体状态下，离子被死死锁在固定晶格中无法移动；变成液体/水溶液后，离子才能自由移动来传导电荷 (mobile ions to carry charge)。"
            },
            {
              structure: "2. 简单共价分子 (Simple Covalent Molecule)",
              example: "水 (H₂O), 二氧化碳 (CO₂), 氧气 (O₂)",
              composition: "非金属 + 非金属。以微小、孤立的分子独立存在。",
              meltingPointExplanation: "熔点极低：'Little energy needed to overcome weak intermolecular forces of attraction between molecules.'（仅需微少热能克服分子之间微弱的分子间相互作用力）",
              conductivity: "完全不导电。不存在任何自由移动的离子或离域电子（全是中性分子）。"
            },
            {
              structure: "3. 巨型共价网状 (Giant Covalent Network)",
              example: "金刚石/钻石 (Diamond), 石墨 (Graphite), 石英/二氧化硅 (SiO₂)",
              composition: "纯非金属原子构成的无休无止三维脚手架网络。",
              meltingPointExplanation: "熔点极度极高：'Huge amount of energy needed to break extensive network of numerous, strong covalent bonds.'（需要极其庞大的能量去切断由无数强共价键构成的致密网络）",
              conductivity: "金刚石：不导电（电子全部被锁死）；\n石墨：导电！每一个碳只连3个碳，具有'delocalised electrons free to move along layers'（可在层间自由移动的离域自由电子）。"
            },
            {
              structure: "4. 巨型金属晶格 (Giant Metallic Lattice)",
              example: "铜导线 (Cu), 铁钉 (Fe), 铝箔 (Al)",
              composition: "纯金属。浸泡在自由电子海洋中的正金属阳离子阵列。",
              meltingPointExplanation: "熔点高：'Strong electrostatic attraction between positive metal ions and sea of delocalised electrons.'（正金属离子与自由离域电子海之间具有强大的静电引力）",
              conductivity: "无论是固体还是液体，永远导电！离域电子可以在整个金属结构中自由穿梭穿行。"
            }
          ],
          traps: [
            "让80%考生当场零分的致命陷阱：烧开水沸腾时，绝对没有切断氢原子和氧原子之间的共价键！你只是将一个个水分子彼此拉开（克服了弱分子间引力 weak intermolecular forces）。如果写成‘covalent bonds break’，立化老师会当场把3分全部扣光划零！"
          ],
          spotCheckQuestion: "拿你解释二氧化碳 (CO₂) 沸点低的答案给我看：里面有没有‘weak intermolecular forces’（微弱分子间作用力）这个词？如果你写了‘共价键断开’，现在立刻拿橡皮擦掉！"
        }
      ]
    },
    {
      id: "pillar-2",
      name: "第2支柱：计算引擎——摩尔概念 (The Mole Concept)",
      examWeight: "约占全卷 35% 分值",
      summary: "纯理科数学引擎。如果这个环节算不通，考卷后半部分的大题全被锁死。",
      topics: [
        {
          id: "c-3",
          number: 3,
          title: "究竟什么是“摩尔”与通用3步计算流水线",
          plainEnglish: "原子小得超乎想象，根本没法放在厨房称上称单颗碳原子。正如烘焙师用“一打 (dozen)”代表12个鸡蛋，化学家用“一摩尔 (mole)”代表一个超级巨大的原子篮子（6 × 10²³ 个微粒）。如果装满整整一摩尔的碳原子，它在秤上刚好称出 12克（就是元素周期表上的相对原子质量！）。",
          routines: [
            {
              name: "所有化学计算题通用的3步装配流水线",
              desc: "第1步：把题目给的所有初始数据（克数、升数、浓度）统统换算成【摩尔数 (Moles)】；\n第2步：利用配平好的化学方程式系数，建立摩尔比例桥梁 (Mole Ratio)；\n第3步：把算出来的摩尔数换算成考官要求的最终单位（克数、立方分米、或摩尔浓度）。"
            },
            {
              name: "必须刻进肌肉记忆的3大公式",
              desc: "1. 从固体质量求摩尔：Moles = 质量 (g) / 摩尔质量 (Mr)；\n2. 从室温常压气体体积求摩尔：Moles = 体积 (dm³) / 24 dm³（注意：若题目给出 cm³，必须先除以1000！）；\n3. 从溶液求摩尔：Moles = 浓度 (mol/dm³) × 溶液体积 (dm³)。"
            }
          ],
          traps: [
            "cm³ 与 dm³ 气体体积巨坑：常温常压摩尔体积公式基于 dm³！1 dm³ = 1000 cm³。题目给 480 cm³ 时，必须先除以 1000 变成 0.48 dm³，再除以 24！",
            "遗漏最终物理单位：立化评分非常严格，任何计算题最终数值不带单位（g, mol, dm³, mol/dm³）直接扣 1 分！"
          ],
          spotCheckQuestion: "题目给你的气体体积单位是 cm³ 还是 dm³？你在除以 24 之前，有没有先除以 1000？"
        },
        {
          id: "c-4",
          number: 4,
          title: "限量反应物与百分比产率 (Limiting Reactants)",
          plainEnglish: "奶酪吐司原理：你有10片吐司面包和2片奶酪。你最多能做出几个奶酪三明治？只能做2个！因为奶酪先用光了，逼停了整个厨房。奶酪就是【限量反应物 (limiting reactant)】，吐司则是【过量反应物 (in excess)】。在化学中，谁先消耗完毕，谁就死死决定了产物的最大上限！",
          routines: [
            {
              name: "限量反应物标准判断流程",
              desc: "1. 分别算出两种反应物的真实摩尔数；\n2. 除以方程式系数比较谁的摩尔份额最小（谁最小谁就是限量物）；\n3. 极为关键：后续所有生成物计算，必须 100% 严格基于限量物展开，彻底无视过量的那种原料！"
            }
          ],
          traps: [
            "用过量反应物的数据去算产物（导致算出不存在的假产量）。"
          ],
          spotCheckQuestion: "你在算产物之前，有没有先计算哪种原料会先用光？还是直接闭着眼睛选了题目给的第一个数字？"
        }
      ]
    },
    {
      id: "pillar-3",
      name: "第3支柱：化学反应——酸、碱与盐 (Acids, Bases & Salts)",
      examWeight: "约占全卷 25% 分值",
      summary: "实验步骤与逻辑流程性极强；属于 100% 可以通过记忆背诵拿满分的知识点。",
      topics: [
        {
          id: "c-5",
          number: 5,
          title: "酸的3大核心反应与气体检验",
          plainEnglish: "酸就是一柄化学剪刀（释放 H⁺ 氢离子），它们针对3类固定目标进行攻击：",
          routines: [
            {
              name: "反应1：酸 + 活泼金属 → 盐 + 氢气 (H₂)",
              desc: "气体检验法：将一根燃烧着的小木条 (lighted splint) 伸入试管口，木条熄灭并伴有清脆的【爆鸣声】('pop' sound)。"
            },
            {
              name: "反应2：酸 + 碳酸盐 → 盐 + 水 + 二氧化碳 (CO₂)",
              desc: "气体检验法：将气体通入澄清石灰水 (limewater)，立即产生白色浑浊沉淀 (white precipitate)。"
            },
            {
              name: "反应3：酸 + 碱/碱液 → 盐 + 水（中和反应 Neutralisation）",
              desc: "离子方程式：H⁺ (aq) + OH⁻ (aq) → H₂O (l)。不产生任何气体，仅释放中和反应热。"
            }
          ],
          traps: [
            "不活泼金属大坑：金属活动性排在氢后面的【铜 (Cu)】和【银 (Ag)】根本不与稀酸反应！如果考卷问：“将铜片放入稀盐酸中会观察到什么现象？” 正确答案必须写：【无明显反应 / 无气泡产生 (No reaction / no bubbles observed)】！胡乱编造有气泡直接扣2分。"
          ],
          spotCheckQuestion: "氢气 (H₂) 和二氧化碳 (CO₂) 的实验检验方法分别是什么？（氢气：带火星燃烧小木条发出爆鸣 pop 声；二氧化碳：澄清石灰水变浑浊）。"
        },
        {
          id: "c-6",
          number: 6,
          title: "盐的制备决策树流程 (Salt Preparation Flowchart)",
          plainEnglish: "每张立化考卷必有一道 4至5分 的实验描述大题：“请详细写出你如何制备一份纯净、干燥的某某盐样品。”",
          decisionTreeSteps: [
            {
              question: "目标盐在水中到底是否可溶 (Soluble)？",
              branchNo: "采用【沉淀法 (Precipitation)】：混合两种均可溶的盐溶液，立即生成固体沉淀；过滤滤渣，用蒸馏水清洗，最后在滤纸间按压晾干。",
              branchYes: "进一步检查：该可溶盐是否包含 SPA 离子（钠 Sodium、钾 Potassium、铵 Ammonium）？"
            },
            {
              question: "该可溶盐含有 SPA 离子吗？",
              branchYes: "采用【滴定法 (Titration)】：使用滴定管与移液管，加入指示剂找准完全中和点；不加指示剂重复一遍取得纯溶液，随后加热浓缩结晶。",
              branchNo: "采用【过量不溶性固体法 (Excess Insoluble Base/Metal)】：向温热的酸中加入过量的金属氧化物/碳酸盐，直至底部有未反应固体残留；滤去多余残渣，将滤液加热饱和后结晶晾干。"
            }
          ],
          solubilityRules: {
            alwaysSoluble: "所有 SPA 盐（钠、钾、铵）和所有硝酸盐 (NO₃⁻) 永远 100% 可溶！",
            insolubleChlorides: "氯化银 (AgCl)、氯化铅 (PbCl₂) 是不溶性沉淀。",
            insolubleSulfates: "硫酸钡 (BaSO₄)、硫酸铅 (PbSO₄)、硫酸钙 (CaSO₄) 是不溶性沉淀。"
          },
          spotCheckQuestion: "要制备这种盐，你到底应该选滴定法、沉淀法还是过量不溶物法？你依据的是哪一条溶解性判定分支？"
        }
      ]
    },
    {
      id: "pillar-4",
      name: "第4支柱：金属、反应性与氧化还原 (Metals & Redox)",
      examWeight: "约占全卷 15% 分值",
      summary: "规律与模式识别考题。记清顺序与颜色变化即可拿分。",
      topics: [
        {
          id: "c-7",
          number: 7,
          title: "金属活动性顺序表与生锈机制",
          plainEnglish: "金属根据自身脱掉外层电子变成离子的强烈欲望进行排位：\n钾 > 钠 > 钙 > 镁 > 铝 > 锌 > 铁 > 铅 > (氢) > 铜 > 银\n口诀：Please Send Cats Monkeys And Zebras In Lead Cages Safely。",
          routines: [
            {
              name: "单置换反应规律 (Single Displacement)",
              desc: "排在前面的更强金属会把后面较弱的金属从它的盐溶液中生生抢过来置换出来。例如：锌粉放入硫酸铜溶液中，活泼的锌把铜挤出，原本蓝色的溶液褪为无色硫酸锌，红褐色的金属铜沉淀析出。"
            },
            {
              name: "铁生锈的死律 (Rusting of Iron)",
              desc: "铁生锈必须【同时存在氧气 (O₂) 和水 (H₂O)】！只要破坏任何一个条件（如用煮沸去氧的水加上油层封口，或放入干燥剂吸干水分），铁永远不会生锈。"
            }
          ],
          traps: [
            "以为铜能置换铁：铜排在铁的后面，活性比铁弱得多，铜放入硫酸亚铁溶液中没有任何反应！"
          ],
          spotCheckQuestion: "铜能把铁从硫酸亚铁溶液中置换出来吗？（正确答案：不能！铜比铁弱得多）。"
        },
        {
          id: "c-8",
          number: 8,
          title: "氧化还原化学 (Redox Chemistry: OIL RIG)",
          plainEnglish: "氧化还原本质就是电子的转移传递接力棒。只要背熟经典口诀 OIL RIG：\n• Oxidation Is Loss（氧化就是失去电子，化合价升高）；\n• Reduction Is Gain（还原就是得到电子，化合价降低）。",
          routines: [
            {
              name: "立化考卷必考的两大万能指示剂颜色变化",
              desc: "1. 酸化高锰酸钾(VII) (Acidified KMnO₄)：强氧化剂 (Oxidising Agent)。当它成功氧化对手时，自身被还原，颜色由【深紫色变为完全无色】(Purple to Colourless)；\n2. 碘化钾 (KI)：强还原剂 (Reducing Agent)。当它成功还原对手时，自身被氧化生成碘单质，颜色由【无色变为棕色】(Colourless to Brown)。"
            }
          ],
          traps: [
            "把氧化剂和被氧化的物质搞混：氧化剂 (Oxidising Agent) 是去氧化别人的，它自己在这个过程中必须经历【还原 (Reduction)】，因此高锰酸钾才会从紫色褪为无色！"
          ],
          spotCheckQuestion: "当高锰酸钾充当氧化剂发生反应时，它原本的紫色会变成什么颜色？（正确答案：紫色褪为完全无色）。"
        }
      ]
    }
  ],
  auditProtocol: {
    title: "每日5分钟化学极速审题抽查（给家长与考生的3问法）",
    steps: [
      { step: 1, text: "“挑一道试卷中的计算题。”\n• 检查最终答案有没有写物理单位（g, mol, dm³, mol/dm³）？立化每漏写一个单位直接扣 1 分。" },
      { step: 2, text: "“挑一道关于熔点或导电性的微观结构解释大题。”\n• 快速扫视他的答案里有没有出现这4个黄金采分词之一：'electrostatic forces'（静电引力）、'weak intermolecular forces'（弱分子间引力）、'mobile ions'（可移动离子）、或 'delocalised electrons'（离域自由电子）。如果全都没有，这道题大概率是零分。" },
      { step: 3, text: "“挑一道盐的制备大题。”\n• 问他：“你要做的这个盐到底溶不溶于水？你是怎么判断出来的？” 进而核实他是用了滴定法、过量不溶物法、还是沉淀法。" }
    ]
  }
};
