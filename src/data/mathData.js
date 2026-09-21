export const mathSyllabus = {
  title: "Sec 3 Integrated Mathematics",
  subtitle: "River Valley High School (RVHS) IP Exam Topics",
  bigPicture: {
    headline: "What Happened to Math in Sec 3?",
    points: [
      "In Lower Sec and Primary school, math was arithmetic and linear steps (calculate a number, find an angle, solve for x).",
      "In Sec 3 IP, math becomes structural and conditional: proving why curves never touch lines, finding ranges of possibilities, and linearizing non-linear behavior.",
      "Pattern-Recognition Protocols: Out of the 13 topics, none require genius-level intuition. Spot the trigger keyword, and the subsequent 4 steps are almost always identical."
    ]
  },
  zones: [
    {
      id: "zone-1",
      name: "Zone 1: Advanced Algebra & Functions",
      examWeight: "~45% of Total Exam",
      summary: "The foundational math engine. Mastering Zone 1 secures passing marks.",
      topics: [
        {
          id: "m-1",
          number: 1,
          title: "Indices & Surds",
          plainEnglish: "Surds are square roots that do not compute to whole numbers (like √2 or √7). Because of infinite decimals, mathematicians demand exact symbolic forms. The Golden Rule: never leave a square root in the denominator.",
          routines: [
            {
              name: "Rationalising Denominators",
              desc: "Multiply top and bottom by the conjugate partner. For (3 + √5), multiply by (3 - √5). Using identity (a+b)(a-b) = a² - b², the surd vanishes into integer 3² - 5 = 4."
            },
            {
              name: "Hidden Quadratics in Powers",
              desc: "For equations like 2^(2x) - 5(2^x) + 4 = 0, substitute u = 2^x to get u² - 5u + 4 = 0. Solve for u = 1 or 4, then convert back: 2^x = 1 ⇒ x = 0; 2^x = 4 ⇒ x = 2."
            }
          ],
          traps: [
            "Leaving surds in denominators in final answers (costs accuracy mark).",
            "Confusing √(a + b) with √a + √b (it is mathematically invalid to split sums under roots!)."
          ],
          spotCheckQuestion: "Show me your final answer. Is there any √ symbol left in the bottom of your fraction? If there is, you haven't finished the question."
        },
        {
          id: "m-2",
          number: 2,
          title: "Logarithmic & Exponential Functions",
          plainEnglish: "A logarithm asks: 'What power must I raise this base to in order to get that number?' e.g., log₁₀(1000) = 3 because 10³ = 1000.",
          routines: [
            {
              name: "Change of Base Formula",
              desc: "Calculators only have base 10 (lg) and base e (ln). For log₂ 7, convert immediately to (lg 7) / (lg 2)."
            },
            {
              name: "Power Drop Rule",
              desc: "log(x^k) = k · log(x). Pulls exponents down to ground level so they can be solved linearly."
            }
          ],
          traps: [
            "CRITICAL PITFALL: Negative or zero arguments are ILLEGAL! You cannot take log(0) or log(-n). If solving gives x = 3 and x = -5, you MUST write 'reject x = -5'. Forgetting costs 1-2 marks every single time."
          ],
          spotCheckQuestion: "Did you get two answers for x? Did you check if either one makes any bracket inside log(...) negative or zero?"
        },
        {
          id: "m-3",
          number: 3,
          title: "Quadratic Functions & Equations",
          plainEnglish: "A quadratic is a U-shaped or inverted U curve: y = ax² + bx + c. Tested on two core mechanics: turning points (peak/trough) and intersections (how many times a line cuts the curve).",
          routines: [
            {
              name: "Completing the Square",
              desc: "Transform ax² + bx + c into a(x - h)² + k. Because (x - h)² ≥ 0, vertex coordinates (h, k) and maximum/minimum values are instantly revealed."
            },
            {
              name: "The Discriminant (b² - 4ac)",
              desc: "b² - 4ac > 0 ⇒ 2 distinct real roots (cuts twice). b² - 4ac = 0 ⇒ 1 real root / tangent (touches once). b² - 4ac < 0 ⇒ no real roots (never touches)."
            }
          ],
          traps: [
            "SECRET TRAP: When question says 'The curve lies entirely above the x-axis', it means: it smiles (a > 0) AND it never touches the axis (b² - 4ac < 0!). Students mistakenly write b² - 4ac > 0."
          ],
          spotCheckQuestion: "When the question says 'tangent' or 'touches at one point', what formula do you write first? (Answer: b² - 4ac = 0)"
        },
        {
          id: "m-4",
          number: 4,
          title: "Quadratic & Non-Linear Inequalities",
          plainEnglish: "Instead of finding where a curve equals zero, we determine when it lies strictly above (> 0) or below (< 0) sea level.",
          routines: [
            {
              name: "The 5-Step Parabola Protocol",
              desc: "1. Move everything to one side so zero is on right: x² - 5x + 6 < 0. 2. Factorise: (x - 2)(x - 3) < 0. 3. Sketch a smiling parabola cutting x-axis at 2 and 3. 4. If < 0, pick the sandwich in between: 2 < x < 3. 5. If > 0, pick the two wings outside: x < 2 or x > 3."
            }
          ],
          traps: [
            "Treating inequalities like linear equations (e.g. Writing x - 2 < 0 ⇒ x < 2). You MUST draw the parabola or sign chart!"
          ],
          spotCheckQuestion: "Show me your working. Did you draw the little U-curve sketch to pick your inequality range?"
        },
        {
          id: "m-5",
          number: 5,
          title: "Polynomials, Remainder & Factor Theorems",
          plainEnglish: "Algebraic expressions with powers like x³, x⁴. Exactly like long division from primary school, but replacing numbers with polynomials.",
          routines: [
            {
              name: "Remainder Theorem",
              desc: "Dividing f(x) by (x - c)? No need for 5 minutes of long division. Plug in x = c: Remainder R = f(c)."
            },
            {
              name: "Factor Theorem & Full Factorisation",
              desc: "If f(c) = 0, (x - c) is an exact factor! Use long division to find the quotient quadratic, then factorise that quadratic completely into linear factors."
            }
          ],
          traps: [
            "Incomplete factorisation: Leaving cubic answers as (x - 1)(x² - 4) instead of breaking (x² - 4) down further to (x - 1)(x - 2)(x + 2)."
          ],
          spotCheckQuestion: "Did you leave your cubic answer as (x - 1)(x² - 4)? Check if that second bracket can still be broken down further!"
        },
        {
          id: "m-6",
          number: 6,
          title: "Partial Fractions & Binomial Theorem",
          plainEnglish: "Partial fractions is reverse fraction addition (splitting one big algebraic fraction into simple baby fractions). Binomial Theorem is a shortcut for expanding (a + b)^n without manual expansion.",
          routines: [
            {
              name: "Partial Fraction Denominator Setup",
              desc: "Linear factor: A/(x + 1). Repeated linear factor: B/(x + 1)². Non-factorisable quadratic: (Cx + D)/(x² + 4)."
            },
            {
              name: "Binomial General Term",
              desc: "T_(r+1) = (n choose r) · a^(n - r) · b^r. Use this to find specific coefficients (e.g. constant term x^0) without expanding the entire polynomial."
            }
          ],
          traps: [
            "SECRET TRAP: Improper fractions! If the degree of the numerator ≥ degree of the denominator (e.g. (x² + 1)/(x² - 3)), you CANNOT split directly. You must do polynomial long division first to extract the whole polynomial!"
          ],
          spotCheckQuestion: "Is the power on top greater than or equal to the power on the bottom? If yes, did you do long division first?"
        }
      ]
    },
    {
      id: "zone-2",
      name: "Zone 2: Trigonometry & Circular Measure",
      examWeight: "~30% of Total Exam",
      summary: "High method-mark yield; very mechanical once protocols are memorised.",
      topics: [
        {
          id: "m-7",
          number: 7,
          title: "Circular Measure (Radian System)",
          plainEnglish: "Degrees (360°) are arbitrary human constructs. Radians are the natural language of circles (angle = arc length / radius). π radians = 180°.",
          routines: [
            {
              name: "The 3 Instant Formulas",
              desc: "1. Arc Length: s = rθ (θ in radians). 2. Sector Area (pizza slice): A = ½ r² θ. 3. Segment Area (crust piece): Area of sector - triangle = ½ r² (θ - sin θ)."
            }
          ],
          traps: [
            "NUMBER 1 SOURCE OF LOST MARKS IN RVHS: Leaving scientific calculator in DEG mode instead of RAD mode. Every calculation becomes completely meaningless, losing 4-6 marks instantly."
          ],
          spotCheckQuestion: "Look at your calculator screen right now. Does it show a tiny 'R' at the top, or a 'D'?"
        },
        {
          id: "m-8",
          number: 8,
          title: "Trigonometric Functions & Graphs",
          plainEnglish: "Waves (sound, tides, electrical AC) follow y = a·sin(bx) + c or y = a·cos(bx) + c. Reading and sketching their characteristics is a guaranteed exam component.",
          routines: [
            {
              name: "Reading Wave Parameters Instantly",
              desc: "a (Amplitude): Distance from centerline to crest (|a|). b (Frequency / Period): Period = 360°/b or 2π/b (full cycles per standard interval). c (Centerline Shift): Shifts the whole wave up or down."
            }
          ],
          traps: [
            "Confusing period with frequency: b is the number of cycles, not the wavelength. Remember Period = 2π / b."
          ],
          spotCheckQuestion: "If y = 4 cos(2x) - 1, what is the highest point the graph can ever reach? (Answer: +4 - 1 = 3)"
        },
        {
          id: "m-9",
          number: 9,
          title: "Trigonometric Equations",
          plainEnglish: "Finding all angles where a wave hits a specific value within a given domain (e.g. 0° ≤ x ≤ 360° or 0 ≤ x ≤ 2π).",
          routines: [
            {
              name: "The 3-Step ASTC Protocol",
              desc: "Step 1: Calculate basic acute reference angle α = sin⁻¹(|value|). IGNORE negative signs here! Step 2: Determine quadrants using ASTC (All, Sin, Tan, Cos). Step 3: Extract angles: Q1: α; Q2: 180° - α; Q3: 180° + α; Q4: 360° - α."
            }
          ],
          traps: [
            "SECRET TRAP: Never divide both sides by sin(x) or cos(x) (e.g. in 2 sin x cos x = sin x). Dividing eliminates the sin x = 0 roots! Move everything to the left side and factorise: sin x (2 cos x - 1) = 0."
          ],
          spotCheckQuestion: "Did you ignore the minus sign when calculating the acute reference angle on your calculator?"
        },
        {
          id: "m-10",
          number: 10,
          title: "Trigonometric Identities & Proofs",
          plainEnglish: "Algebraic puzzles demonstrating that two expressions are mathematically identical for all angles (e.g. tan θ + cot θ = sec θ · csc θ).",
          routines: [
            {
              name: "Single-Sided Transformation Strategy",
              desc: "Pick the more complicated side (usually LHS). Manipulate step-by-step to arrive at RHS. Never move terms across '='."
            },
            {
              name: "Default Rescue Move",
              desc: "If stuck, convert all sec, csc, tan, cot into sin θ and cos θ. Combine fractions with a common denominator and apply sin² θ + cos² θ = 1."
            }
          ],
          traps: [
            "TREATMENT OF EQUATION TRAP: Moving terms across the '=' sign during an identity proof loses ALL method marks in RV marking schemes. You must work strictly on LHS or RHS alone."
          ],
          spotCheckQuestion: "Did you work on only ONE side of the identity, or did you accidentally move terms across the '=' sign?"
        }
      ]
    },
    {
      id: "zone-3",
      name: "Zone 3: Geometry & Linear Transformations",
      examWeight: "~25% of Total Exam",
      summary: "Highly structured and formulaic; the easiest marks to secure 100%.",
      topics: [
        {
          id: "m-11",
          number: 11,
          title: "Coordinate Geometry of Straight Lines",
          plainEnglish: "Analytic geometry on an (x, y) Cartesian plane using algebraic equations.",
          routines: [
            {
              name: "Parallel & Perpendicular Gradients",
              desc: "Parallel: m₁ = m₂. Perpendicular: m₁ · m₂ = -1 ⇒ m₂ = -1/m₁. (e.g. if m₁ = 2/3, m₂ = -3/2)."
            },
            {
              name: "Perpendicular Bisector (3-Step Routine)",
              desc: "1. Find midpoint M = ((x₁+x₂)/2, (y₁+y₂)/2). 2. Find gradient m_AB and perpendicular gradient m_perp = -1/m_AB. 3. Apply point-slope equation y - y₁ = m_perp(x - x₁) using midpoint M."
            }
          ],
          traps: [
            "Forgetting to flip AND negate when computing perpendicular gradients (e.g. writing -2/3 instead of -3/2)."
          ],
          spotCheckQuestion: "What is the gradient of a line perpendicular to m = -1/4? (Answer: +4)"
        },
        {
          id: "m-12",
          number: 12,
          title: "Coordinate Geometry of Circles",
          plainEnglish: "Algebraic representation of all points equidistant from a fixed center (a, b).",
          routines: [
            {
              name: "Standard Circle Equation",
              desc: "(x - a)² + (y - b)² = r². Notice signs flip inside brackets: (x - 3)² + (y + 4)² = 49 has center (3, -4) and radius r = √49 = 7."
            },
            {
              name: "Tangent to Circle Routine",
              desc: "The tangent line touches the circle at point P. The radius OP is perpendicular to the tangent at P. Find gradient of OP, flip and negate for m_tangent = -1/m_OP, then use line equation."
            }
          ],
          traps: [
            "Writing r = 49 instead of √49 = 7.",
            "Sign flip confusion for circle centers."
          ],
          spotCheckQuestion: "If the equation says (x - 3)² + (y + 4)² = 49, what is the center and radius? (Answer: Center (3, -4), Radius 7, not 49)"
        },
        {
          id: "m-13",
          number: 13,
          title: "Linear Law (Y = mX + c)",
          plainEnglish: "Real-world curves (e.g. population y = ab^x) are hard to read and analyse. Linear Law transforms curved graphs into straight lines Y = mX + c via logarithms or variable substitution.",
          routines: [
            {
              name: "Power Equation (y = ax^b)",
              desc: "Take lg of both sides: lg y = b(lg x) + lg a. Big Y = lg y, Big X = lg x, Gradient m = b, Y-intercept c = lg a ⇒ a = 10^c."
            },
            {
              name: "Exponential Equation (y = ab^x)",
              desc: "Take lg of both sides: lg y = (lg b)x + lg a. Big Y = lg y, Big X = x, Gradient m = lg b ⇒ b = 10^m, Y-intercept c = lg a ⇒ a = 10^c."
            }
          ],
          traps: [
            "Forgetting to back-convert: Finding vertical intercept c and thinking a = c. You must calculate a = 10^c!"
          ],
          spotCheckQuestion: "When you found the vertical intercept c, did you remember that c = lg a, meaning you have to do 10^c to get constant a?"
        }
      ]
    }
  ],
  auditProtocol: {
    title: "10-Minute Daily Math Audit Protocol",
    steps: [
      { step: 1, text: "Pick 2 topics from the 13 (Prioritise Zone 1, then Zone 2, then Zone 3)." },
      { step: 2, text: "Pull out 2 questions got wrong in Term 1–3 papers or worksheets." },
      { step: 3, text: "Explain out loud WHY the first step works (If 'I just copied formula' ⇒ will fail variations; If 'Because it said perpendicular bisector so I found midpoint first' ⇒ concept is mastered!)." }
    ]
  }
};
