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
      name: "Zone 1: Core Algebra & Functions",
      examWeight: "~40% of Total Exam",
      summary: "The foundational algebraic engine. Mastering Zone 1 secures passing marks and eliminates costly mechanical slips.",
      topics: [
        {
          id: "m-1",
          number: 1,
          title: "Quadratic Equations, Graphs & Completing the Square",
          plainEnglish: "A quadratic equation sketches a symmetrical parabola (a U-shaped valley or hill). The primary skills are identifying the exact turning point (vertex), line of symmetry, and axis intercepts without guessing.",
          routines: [
            {
              name: "Completing the Square",
              desc: "Transform y = ax² + bx + c into vertex form y = a(x - h)² + k. Because (x - h)² ≥ 0 for all real numbers, the extreme value is k, occurring precisely at x = h with vertex (h, k) and axis of symmetry x = h."
            },
            {
              name: "Sketching Parabolas",
              desc: "Identify orientation (a > 0 smiles, a < 0 frowns), plot vertex (h, k), find y-intercept (set x = 0 ⇒ (0, c)), and find x-intercepts (solve ax² + bx + c = 0)."
            }
          ],
          traps: [
            "Failing to flip the sign inside the bracket: for y = 3(x - 4)² + 7, turning point is (+4, 7), NOT -4!"
          ],
          spotCheckQuestion: "When you completed the square, what are the coordinates of the turning point, and did you reverse the sign inside the bracket?"
        },
        {
          id: "m-2",
          number: 2,
          title: "Linear & Quadratic Inequalities and Simultaneous Equations",
          plainEnglish: "Inequalities determine over what range of x a curve sits strictly above (> 0) or below (< 0) the axis. Simultaneous equations calculate the exact coordinate points where a straight line and a curved quadratic intersect.",
          routines: [
            {
              name: "Parabola Inequality Protocol",
              desc: "Move all terms to the left side: (x - α)(x - β) < 0 or > 0. Sketch a smiling parabola with roots α and β. If < 0, pick the sandwich in between: α < x < β. If > 0, pick the two outer wings: x < α or x > β."
            },
            {
              name: "Simultaneous Substitution Protocol",
              desc: "1. Express y in terms of x from the linear equation (y = mx + c). 2. Substitute into quadratic equation to eliminate y, yielding Ax² + Bx + C = 0. 3. Solve for two values of x. 4. Substitute each x back into the linear equation to get both matching y coordinates."
            }
          ],
          traps: [
            "Inequality trap: Splitting (x - 2)(x - 5) < 0 into x < 2 and x < 5 without a parabola sketch or sign chart. That is mathematically invalid!",
            "Simultaneous trap: Stopping after finding the two x values and forgetting to calculate the matching y coordinates."
          ],
          spotCheckQuestion: "Did you sketch the parabola to see whether your inequality is between the roots or outside them, and did you calculate both pairs of (x, y)?"
        },
        {
          id: "m-3",
          number: 3,
          title: "Nature of Roots of a Quadratic Equation (The Discriminant)",
          plainEnglish: "Determining whether a line and a curve touch (tangent), cross twice, or never meet at all—purely using algebra without graphing.",
          routines: [
            {
              name: "Discriminant Formula (b² - 4ac)",
              desc: "b² - 4ac > 0 ⇒ 2 real, distinct roots (cuts twice). b² - 4ac = 0 ⇒ 2 real, equal roots (line is tangent; touches once). b² - 4ac < 0 ⇒ no real roots (never intersects)."
            },
            {
              name: "Line-Curve Intersection Protocol",
              desc: "Equate line and curve: mx + c = ax² + bx + d. Rearrange to standard form Ax² + Bx + C = 0. Compute B² - 4AC to determine intersection nature."
            }
          ],
          traps: [
            "SECRET TRAP: When question says 'The curve lies entirely above the x-axis', it means: it smiles (a > 0) AND it never touches the axis (b² - 4ac < 0!). Students mistakenly write b² - 4ac > 0."
          ],
          spotCheckQuestion: "If the question states the line is tangent to the curve, what formula do you write first? (Answer: b² - 4ac = 0)"
        },
        {
          id: "m-4",
          number: 4,
          title: "Exponential & Logarithmic Functions",
          plainEnglish: "A logarithm asks: 'What power must base b be raised to in order to get number x?' (log₁₀ 1000 = 3 because 10³ = 1000).",
          routines: [
            {
              name: "Change of Base Formula",
              desc: "Calculators only have base 10 (lg) and base e (ln). For log_b a, convert immediately to (lg a) / (lg b) or (ln a) / (ln b)."
            },
            {
              name: "Power Drop & Log Laws",
              desc: "log(x^k) = k · log(x). Product law: log(xy) = log x + log y. Quotient law: log(x/y) = log x - log y."
            }
          ],
          traps: [
            "CRITICAL PITFALL: Negative or zero arguments are ILLEGAL! You cannot take log(0) or log(-n). If solving gives x = 3 and x = -5, you MUST write 'reject x = -5'. Forgetting costs 1-2 marks every single time."
          ],
          spotCheckQuestion: "Did you get two answers for x? Did you check if either one makes any bracket inside log(...) negative or zero?"
        },
        {
          id: "m-5",
          number: 5,
          title: "Functions, Graphs & Modulus Functions",
          plainEnglish: "Functions map inputs (domain) to unique outputs (range). The modulus function |f(x)| measures absolute distance from zero, reflecting all negative outputs into positive values.",
          routines: [
            {
              name: "Modulus Graph Reflection Protocol",
              desc: "To sketch y = |f(x)|: 1. Lightly sketch y = f(x). 2. Leave portions on or above the x-axis untouched. 3. Reflect portions below the x-axis vertically upward across the x-axis. 4. Label vertices and all intercepts."
            },
            {
              name: "Modulus Equations Protocol",
              desc: "To solve |f(x)| = g(x), split into f(x) = g(x) or f(x) = -g(x). Then substitute solutions back to confirm g(x) ≥ 0, discarding extraneous roots."
            }
          ],
          traps: [
            "Leaving portions of a modulus graph below the horizontal axis. A modulus output can never be negative!"
          ],
          spotCheckQuestion: "Are any parts of your modulus curve below the horizontal axis? If so, they must be reflected upward."
        }
      ]
    },
    {
      id: "zone-2",
      name: "Zone 2: Trigonometry, Circular Measure & 3D Bearings",
      examWeight: "~35% of Total Exam",
      summary: "High method-mark yield; very mechanical once protocols and calculator modes are mastered.",
      topics: [
        {
          id: "m-6",
          number: 6,
          title: "Trigonometric Ratios, Triangle Rules & 3D Bearings",
          plainEnglish: "Solving side lengths, angles, compass bearings, and 3D structural frameworks in general triangles without right angles.",
          routines: [
            {
              name: "The 3 Non-Right Triangle Rules",
              desc: "1. Area = ½ ab sin C (angle C must be sandwiched between sides a and b). 2. Sine Rule: a / sin A = b / sin B = c / sin C. 3. Cosine Rule: c² = a² + b² - 2ab cos C."
            },
            {
              name: "Bearings & 3D Spatial Protocol",
              desc: "Bearings: 3 digits measured clockwise from North (e.g. 065°, 240°). Angles of elevation/depression: always measured relative to the horizontal sightline. In 3D problems, extract right-angled triangles onto 2D paper step-by-step."
            }
          ],
          traps: [
            "Forgetting the ambiguous case of the Sine Rule, where an obtuse angle (180° - θ) may also be a valid solution.",
            "Measuring bearings counter-clockwise or from an axis other than North."
          ],
          spotCheckQuestion: "Is the angle used in ½ ab sin C directly between the two chosen sides, and did you measure your bearing clockwise from North in 3 digits?"
        },
        {
          id: "m-7",
          number: 7,
          title: "Circular Measure (Arc Length & Radian System)",
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
          title: "Trigonometric Functions & Periodic Graphs",
          plainEnglish: "Waves (sound, tides, AC currents) follow y = a·sin(bx) + c, y = a·cos(bx) + c, or y = a·tan(bx). Reading and sketching their characteristics is a guaranteed exam component.",
          routines: [
            {
              name: "Reading Wave Parameters Instantly",
              desc: "a (Amplitude): Distance from centerline to crest (|a|). b (Frequency / Period): Period = 360°/b or 2π/b (for tan, Period = 180°/b or π/b). c (Centerline Shift): Shifts the whole wave up or down. Max = c + |a|, Min = c - |a|."
            }
          ],
          traps: [
            "Confusing period with frequency: b is the number of cycles, not the wavelength. Remember Period = 2π / b.",
            "Confusing amplitude with peak-to-trough distance (amplitude is half that total)."
          ],
          spotCheckQuestion: "If y = 4 cos(2x) - 1, what is the highest point the graph can ever reach? (Answer: +4 - 1 = 3)"
        },
        {
          id: "m-9",
          number: 9,
          title: "Trigonometric Equations & Simple Identities",
          plainEnglish: "Finding all angles where a wave hits a specific value within a given domain (e.g. 0° ≤ x ≤ 360° or 0 ≤ x ≤ 2π).",
          routines: [
            {
              name: "The 3-Step ASTC Protocol",
              desc: "Step 1: Calculate basic acute reference angle α = sin⁻¹(|value|). IGNORE negative signs here! Step 2: Determine quadrants using ASTC (All, Sin, Tan, Cos). Step 3: Extract angles: Q1: α; Q2: 180° - α; Q3: 180° + α; Q4: 360° - α."
            },
            {
              name: "Fundamental Identities",
              desc: "tan θ = sin θ / cos θ; sin² θ + cos² θ = 1; sec² θ = 1 + tan² θ; csc² θ = 1 + cot² θ."
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
          title: "Further Trigonometric Identities, Double Angles & R-Formula",
          plainEnglish: "Advanced algebraic identities used to simplify complex wave expressions, solve compound equations, and execute formal proofs.",
          routines: [
            {
              name: "Addition & Double-Angle Formulas",
              desc: "Addition: sin(A ± B) = sin A cos B ± cos A sin B; cos(A ± B) = cos A cos B ∓ sin A sin B. Double angle: sin 2A = 2 sin A cos A; cos 2A = cos² A - sin² A = 2 cos² A - 1 = 1 - 2 sin² A; tan 2A = (2 tan A)/(1 - tan² A)."
            },
            {
              name: "The R-Formula & Proof Strategy",
              desc: "a sin θ ± b cos θ = R sin(θ ± α) or a cos θ ± b sin θ = R cos(θ ∓ α), where R = √(a² + b²), tan α = b/a. For proofs: manipulate single side (usually LHS) step-by-step to match RHS. Never move terms across '='."
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
      name: "Zone 3: Polynomials, Partial Fractions & Coordinate Geometry",
      examWeight: "~25% of Total Exam",
      summary: "Highly structured and formulaic; the easiest marks to secure 100%.",
      topics: [
        {
          id: "m-11",
          number: 11,
          title: "Polynomials, Remainder & Factor Theorems",
          plainEnglish: "Algebraic expressions with powers like x³, x⁴. Dividing polynomials without doing tedious long division every time.",
          routines: [
            {
              name: "Remainder Theorem",
              desc: "Dividing f(x) by (ax - b)? Plug in x = b/a: Remainder R = f(b/a)."
            },
            {
              name: "Factor Theorem & Full Factorisation",
              desc: "If f(b/a) = 0, (ax - b) is an exact factor! Use long division to find the quotient quadratic, then factorise that quadratic completely into linear factors."
            }
          ],
          traps: [
            "Incomplete factorisation: Leaving cubic answers as (x - 1)(x² - 4) instead of breaking (x² - 4) down further to (x - 1)(x - 2)(x + 2)."
          ],
          spotCheckQuestion: "Did you leave your cubic answer as (x - 1)(x² - 4)? Check if that second bracket can still be broken down further!"
        },
        {
          id: "m-12",
          number: 12,
          title: "Partial Fractions",
          plainEnglish: "Reverse fraction addition: splitting one complicated rational algebraic fraction into simpler component fractions.",
          routines: [
            {
              name: "Denominator Setup Rules",
              desc: "1. Distinct Linear: A/(x - a) + B/(x - b). 2. Repeated Linear: A/(x - a) + B/(x - a)². 3. Irreducible Quadratic: A/(x - a) + (Bx + C)/(x² + c)."
            }
          ],
          traps: [
            "SECRET TRAP: Improper fractions! If the degree of the numerator ≥ degree of the denominator (e.g. (x² + 1)/(x² - 3)), you CANNOT split directly. You must do polynomial long division first to extract the whole polynomial!"
          ],
          spotCheckQuestion: "Is the power on top greater than or equal to the power on the bottom? If yes, did you do long division first?"
        },
        {
          id: "m-13",
          number: 13,
          title: "Coordinate Geometry of Straight Lines",
          plainEnglish: "Analytic geometry on an (x, y) Cartesian plane using algebraic slopes and equations of lines.",
          routines: [
            {
              name: "Parallel & Perpendicular Gradients",
              desc: "Parallel: m₁ = m₂. Perpendicular: m₁ · m₂ = -1 ⇒ m₂ = -1/m₁ (flip and negate! e.g. if m₁ = 2/3, m₂ = -3/2)."
            },
            {
              name: "Perpendicular Bisector (3-Step Routine)",
              desc: "1. Find midpoint M = ((x₁+x₂)/2, (y₁+y₂)/2). 2. Find gradient m_AB and perpendicular gradient m_perp = -1/m_AB. 3. Apply point-slope equation y - y₁ = m_perp(x - x₁) using midpoint M."
            }
          ],
          traps: [
            "Arithmetic sign errors when computing slopes with negative coordinates: (y₂ - y₁) / (x₂ - x₁).",
            "Forgetting to both flip AND negate when computing perpendicular gradients."
          ],
          spotCheckQuestion: "What is the gradient of a line perpendicular to m = -1/4? (Answer: +4)"
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
