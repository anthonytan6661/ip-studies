export const quizQuestions = [
  // TOPIC 1: Quadratic Equations & Completing the Square
  {
    id: "q-m1",
    subject: "math",
    topic: "Topic 1: Quadratics & Completing Square",
    question: "Completing the square on y = -2x² + 12x - 11 yields y = -2(x - 3)² + 7. What are the coordinates and nature of the turning point?",
    options: [
      "Maximum turning point at (3, 7)",
      "Minimum turning point at (3, 7)",
      "Maximum turning point at (-3, 7)",
      "Minimum turning point at (-3, -11)"
    ],
    correctAnswer: 0,
    explanation: "Since the coefficient of (x - 3)² is negative (-2), the parabola opens downward (inverted U), so the curve attains a MAXIMUM value of 7 when (x - 3) = 0 (i.e. x = +3). The turning point is (3, 7). Watch out for the sign flip: (x - 3) means x = +3!"
  },

  // TOPIC 2: Quadratic Inequalities
  {
    id: "q-m2",
    subject: "math",
    topic: "Topic 2: Quadratic Inequalities",
    question: "A student solves (3 - x)(x + 2) > 0. They multiply out to get -x² + x + 6 > 0, divide both sides by -1 to get x² - x - 6 > 0, and write x < -2 or x > 3. What is their fatal mistake?",
    options: [
      "Dividing an inequality by -1 must reverse the inequality sign from > to <, giving (x - 3)(x + 2) < 0 and solution -2 < x < 3.",
      "They should have factorised as (x + 3)(x - 2) instead.",
      "A quadratic inequality cannot be divided by any number.",
      "The solution has no real values."
    ],
    correctAnswer: 0,
    explanation: "Golden Rule of Inequalities: When dividing or multiplying both sides by a negative number, the inequality sign MUST FLIP! -x² + x + 6 > 0 becomes x² - x - 6 < 0, so (x - 3)(x + 2) < 0. Sketching a smiling parabola cutting at -2 and 3 shows the solution is the sandwich interval -2 < x < 3."
  },

  // TOPIC 2: Simultaneous Equations
  {
    id: "q-m3",
    subject: "math",
    topic: "Topic 2: Simultaneous Equations",
    question: "Solving the simultaneous equations y = 2x - 1 and x² + y² = 5 gives x = 2 and x = -0.4. What must the student write to receive full marks?",
    options: [
      "Stop at x = 2 and x = -0.4 because x is the primary independent variable.",
      "Substitute both x values back into y = 2x - 1 to find the matching y coordinates: (2, 3) and (-0.4, -1.8).",
      "Add the two x values together to calculate the midpoint.",
      "Reject x = -0.4 because coordinates cannot be negative."
    ],
    correctAnswer: 1,
    explanation: "Exam slip! A simultaneous system in two variables requires solving for BOTH x and y pairs. You must substitute each x back into the linear equation: for x = 2, y = 2(2) - 1 = 3; for x = -0.4, y = 2(-0.4) - 1 = -1.8. The solutions are the coordinate pairs (2, 3) and (-0.4, -1.8)."
  },

  // TOPIC 3: Nature of Roots (Curve above axis)
  {
    id: "q-m4",
    subject: "math",
    topic: "Topic 3: Nature of Roots (Discriminant)",
    question: "The question states: 'The quadratic curve y = ax² + bx + c lies entirely above the x-axis.' What are the required mathematical conditions?",
    options: [
      "a > 0 and b² - 4ac > 0",
      "a > 0 and b² - 4ac < 0",
      "a < 0 and b² - 4ac = 0",
      "a > 0 and b² - 4ac = 0"
    ],
    correctAnswer: 1,
    explanation: "Because the curve smiles (opens upwards), a > 0. Because it lies ENTIRELY above the axis, it NEVER touches or intersects the axis, meaning ZERO real roots: b² - 4ac < 0! Students frequently fall into the trap of writing b² - 4ac > 0 because of the word 'above'."
  },

  // TOPIC 3: Tangent to Curve
  {
    id: "q-m5",
    subject: "math",
    topic: "Topic 3: Tangent & Line-Curve Intersections",
    question: "The straight line y = 2x + k is tangent to the curve y = x² - 4x + 7. What equation determines the value of k?",
    options: [
      "Equate 2x + k = x² - 4x + 7, simplify to x² - 6x + (7 - k) = 0, and set discriminant (-6)² - 4(1)(7 - k) = 0.",
      "Set x² - 4x + 7 = 0 and solve using the quadratic formula.",
      "Set 2x + k = 0 and substitute x = 0.",
      "Set the discriminant of x² - 4x + 7 to be greater than 0."
    ],
    correctAnswer: 0,
    explanation: "To find when a line is tangent to a curve, equate them to form Ax² + Bx + C = 0: x² - 6x + (7 - k) = 0. A tangent line touches at exactly 1 point (two equal real roots), so set the discriminant D = b² - 4ac = 0: 36 - 4(7 - k) = 0 ⇒ 36 - 28 + 4k = 0 ⇒ 4k = -8 ⇒ k = -2."
  },

  // TOPIC 4: Logarithms (Illegal Arguments)
  {
    id: "q-m6",
    subject: "math",
    topic: "Topic 4: Logarithmic Functions",
    question: "When solving a logarithmic equation, the quadratic step gives solutions x = 5 and x = -3. What must the student do before finalizing their answer?",
    options: [
      "Keep both x = 5 and x = -3 as valid solutions.",
      "Change x = -3 to +3 because math handles absolute values.",
      "Check if x = -3 causes any logarithm argument to be ≤ 0; if so, write 'reject x = -3'.",
      "Divide both solutions by 10 to normalize them."
    ],
    correctAnswer: 2,
    explanation: "Negative and zero arguments are strictly illegal in logarithmic functions! Any candidate value that produces log(≤0) must be rejected explicitly, or 1 to 2 accuracy marks will be deducted."
  },

  // TOPIC 4: Logarithms (Change of Base)
  {
    id: "q-m7",
    subject: "math",
    topic: "Topic 4: Change of Base Formula",
    question: "To solve log₃(x) + log₉(x) = 3 without a calculator, what is the correct change-of-base transformation?",
    options: [
      "Convert log₉(x) into log₃(x) / log₃(9) = ½ log₃(x).",
      "Multiply both terms to get log₂₇(x²) = 3.",
      "Change log₃(x) into 3 · log₉(x).",
      "Add the bases: log₁₂(2x) = 3."
    ],
    correctAnswer: 0,
    explanation: "Change of base formula: log_b(a) = log_c(a) / log_c(b). Here, log₉(x) = log₃(x) / log₃(9) = log₃(x) / 2 = ½ log₃(x). The equation becomes log₃(x) + ½ log₃(x) = 1.5 log₃(x) = 3 ⇒ log₃(x) = 2 ⇒ x = 3² = 9."
  },

  // TOPIC 5: Modulus Functions (Graph Reflection)
  {
    id: "q-m8",
    subject: "math",
    topic: "Topic 5: Modulus Functions & Graphs",
    question: "When sketching y = |2x - 6|, what does the graph look like, and what is the coordinate of the sharp bounce vertex on the x-axis?",
    options: [
      "A straight line continuing below the x-axis with y-intercept at (0, -6).",
      "A sharp V-shaped bounce with vertex at (3, 0), and all parts strictly on or above the x-axis.",
      "A smooth U-shaped curve with vertex at (0, 6).",
      "An inverted V-shape peaking at (3, 6)."
    ],
    correctAnswer: 1,
    explanation: "Modulus functions convert all negative outputs into positive distances from zero. Any portion of y = 2x - 6 below the x-axis is reflected vertically upward, forming a sharp V-shaped bounce at x = 3 (where 2x - 6 = 0) with vertex (3, 0) and y-intercept (0, 6)."
  },

  // TOPIC 5: Modulus Equations (Extraneous Roots)
  {
    id: "q-m9",
    subject: "math",
    topic: "Topic 5: Modulus Equations",
    question: "When solving the modulus equation |2x - 5| = x + 1, you find x = 6 and x = 4/3. What verification step is mandatory?",
    options: [
      "Check that the RHS (x + 1) ≥ 0 for each solution; since both 6 + 1 > 0 and 4/3 + 1 > 0, both are valid solutions.",
      "Reject x = 4/3 because solutions must always be integers.",
      "Reject x = 6 because it is larger than 5.",
      "Square both solutions to ensure they equal zero."
    ],
    correctAnswer: 0,
    explanation: "Because |2x - 5| ≥ 0 for all real numbers, the RHS must be non-negative (x + 1 ≥ 0 ⇒ x ≥ -1). Testing x = 6: |12 - 5| = 7 and 6 + 1 = 7 (valid). Testing x = 4/3: |8/3 - 5| = |-7/3| = 7/3 and 4/3 + 1 = 7/3 (valid). Always verify to eliminate extraneous roots!"
  },

  // TOPIC 6: Triangle Rules (Ambiguous Sine Rule)
  {
    id: "q-m10",
    subject: "math",
    topic: "Topic 6: Triangle Rules & Sine Rule",
    question: "In triangle ABC, side a = 7 cm, side b = 10 cm, and angle A = 35°. When using the Sine Rule to calculate angle B, what trap must be checked?",
    options: [
      "Angle B can have two valid solutions: an acute angle B ≈ 55.0° and an obtuse angle B' = 180° - 55.0° = 125.0°, because 35° + 125.0° < 180°.",
      "The Sine Rule can only be used on triangles with a 90° right angle.",
      "The obtuse angle solution must always be discarded immediately without checking.",
      "Sine Rule cannot be used when two sides and one angle are given."
    ],
    correctAnswer: 0,
    explanation: "Ambiguous Case of the Sine Rule! When given two sides and a non-included angle opposite the shorter side, an obtuse angle (180° - θ) may also be valid if the sum of angles does not exceed 180°."
  },

  // TOPIC 6: Bearings (Back-Bearing)
  {
    id: "q-m11",
    subject: "math",
    topic: "Topic 6: 3-Figure Bearings",
    question: "Ship B is at a bearing of 070° from lighthouse A. What is the bearing of lighthouse A from ship B (the back-bearing)?",
    options: [
      "070°",
      "180° - 070° = 110°",
      "070° + 180° = 250°",
      "360° - 070° = 290°"
    ],
    correctAnswer: 2,
    explanation: "Back-bearing rule! Because the two North lines are parallel, the co-interior angles between them sum to 180°. For any bearing θ between 000° and 180°, the reverse bearing from B to A is θ + 180° = 070° + 180° = 250°."
  },

  // TOPIC 7: Circular Measure (Calculator Trap)
  {
    id: "q-m12",
    subject: "math",
    topic: "Topic 7: Circular Measure (Radian System)",
    question: "A student calculates the area of a sector with r = 5 cm and θ = 1.2 radians using A = ½ r² θ. In the next part, they calculate segment area: ½ r²(θ - sin θ). What is the #1 reason RVHS students lose all method marks here?",
    options: [
      "Their calculator was left in DEG mode, so it calculated sin(1.2°) instead of sin(1.2 rad).",
      "They should have multiplied the radius by π.",
      "The sector area formula requires diameter instead of radius.",
      "Radians must always be converted to degrees before calculating."
    ],
    correctAnswer: 0,
    explanation: "#1 Source of Lost Marks in RVHS: Leaving the calculator in DEG mode! sin(1.2 rad) ≈ 0.9320, but sin(1.2°) ≈ 0.0209. This creates an enormous numerical error that invalidates all subsequent steps."
  },

  // TOPIC 8: Periodic Graphs (Amplitude & Period)
  {
    id: "q-m13",
    subject: "math",
    topic: "Topic 8: Trig Functions & Periodic Graphs",
    question: "For the trigonometric curve y = -3 cos(4x) + 2 for 0 ≤ x ≤ 2π, what are its amplitude, period, and maximum value?",
    options: [
      "Amplitude = 3, Period = π/2 (90°), Maximum = 5",
      "Amplitude = -3, Period = 4, Maximum = 2",
      "Amplitude = 6, Period = 2π, Maximum = 3",
      "Amplitude = 3, Period = π/4, Maximum = 1"
    ],
    correctAnswer: 0,
    explanation: "Amplitude is strictly positive: |a| = |-3| = 3. Period = 2π / b = 2π / 4 = π/2 (or 90°). Midline is at y = 2, so maximum value is 2 + 3 = 5 (and minimum value is 2 - 3 = -1)."
  },

  // TOPIC 9: Trig Equations (Never Divide by sin x)
  {
    id: "q-m14",
    subject: "math",
    topic: "Topic 9: Trig Equations & ASTC",
    question: "A student is solving: 2 sin(x) cos(x) = sin(x). They divide both sides by sin(x) to obtain 2 cos(x) = 1, so cos(x) = 0.5. What is the critical error?",
    options: [
      "Dividing by sin(x) eliminates the solutions where sin(x) = 0, losing half the valid roots.",
      "They should have divided by cos(x) instead of sin(x).",
      "cos(x) cannot equal 0.5 in trigonometry.",
      "The equation has no solutions in the real domain."
    ],
    correctAnswer: 0,
    explanation: "Trap Alert! Never divide both sides by a variable trig function. You must move all terms to one side: sin(x)(2 cos(x) - 1) = 0, yielding both sin(x) = 0 and cos(x) = 0.5!"
  },

  // TOPIC 9: Trig Equations (Domain Adjustment)
  {
    id: "q-m15",
    subject: "math",
    topic: "Topic 9: Compound Angle Domain",
    question: "When solving cos(2x - 30°) = 0.5 for the domain 0° ≤ x ≤ 180°, what is the correct modified domain for angle θ = (2x - 30°)?",
    options: [
      "0° ≤ θ ≤ 180°",
      "-30° ≤ θ ≤ 330°",
      "0° ≤ θ ≤ 360°",
      "-30° ≤ θ ≤ 150°"
    ],
    correctAnswer: 1,
    explanation: "Domain adjustment protocol: Start with 0° ≤ x ≤ 180°. Multiply by 2: 0° ≤ 2x ≤ 360°. Subtract 30°: -30° ≤ 2x - 30° ≤ 330°. Failing to modify the domain causes students to miss valid roots in negative quadrants or beyond 180°!"
  },

  // TOPIC 10: Trig Proofs (LHS to RHS)
  {
    id: "q-m16",
    subject: "math",
    topic: "Topic 10: Trig Identities & Proofs",
    question: "In an exam question asking to 'Prove that (1 - cos 2θ) / sin 2θ = tan θ', a student writes: (1 - cos 2θ) / sin 2θ = tan θ ⇒ 1 - cos 2θ = tan θ · sin 2θ. Why does this receive 0 method marks?",
    options: [
      "Cross-multiplying assumes what is to be proved, which is mathematically invalid in identity proofs. You must manipulate LHS independently until it equals RHS.",
      "tan θ cannot be multiplied by sin 2θ.",
      "cos 2θ cannot be converted into sin θ.",
      "The identity is false."
    ],
    correctAnswer: 0,
    explanation: "TREATMENT OF EQUATION TRAP: In 'Prove LHS = RHS' problems, moving terms across the '=' sign loses ALL method marks. You must work strictly on LHS: LHS = (1 - (1 - 2 sin²θ)) / (2 sin θ cos θ) = (2 sin²θ) / (2 sin θ cos θ) = sin θ / cos θ = tan θ = RHS."
  },

  // TOPIC 10: R-Formula (Extreme Values)
  {
    id: "q-m17",
    subject: "math",
    topic: "Topic 10: R-Formula & Max Values",
    question: "Given 3 sin θ - 4 cos θ = R sin(θ - α), what is the maximum value of the expression, and what is the value of R?",
    options: [
      "R = 5, Maximum value = +5",
      "R = 7, Maximum value = +7",
      "R = 1, Maximum value = +1",
      "R = 25, Maximum value = +25"
    ],
    correctAnswer: 0,
    explanation: "R = √(a² + b²) = √(3² + (-4)²) = √(9 + 16) = √25 = 5. The expression becomes 5 sin(θ - α). Since the maximum value of any sine wave is +1, the maximum value of the expression is 5 × 1 = +5."
  },

  // TOPIC 11: Polynomials (Complete Factorisation)
  {
    id: "q-m18",
    subject: "math",
    topic: "Topic 11: Polynomials & Factor Theorem",
    question: "When factorising P(x) = 2x³ - 3x² - 11x + 6, polynomial division by (x - 3) yields the quotient 2x² + 3x - 2. A student leaves the final answer as (x - 3)(2x² + 3x - 2). Why is this marked down?",
    options: [
      "Incomplete factorisation! The quadratic quotient can still be factorised into (2x - 1)(x + 2), so the full answer is (x - 3)(2x - 1)(x + 2).",
      "(x - 3) is not an exact factor of P(x).",
      "Cubic polynomials can never be factorised into three brackets.",
      "The coefficient 2 must be divided out to leave monic factors."
    ],
    correctAnswer: 0,
    explanation: "Incomplete factorisation trap! In factor theorem questions, leaving a quadratic quotient that is further factorisable costs the final A-mark. Always check if the quadratic factorises: 2x² + 3x - 2 = (2x - 1)(x + 2)."
  },

  // TOPIC 12: Partial Fractions (Improper Long Division)
  {
    id: "q-m19",
    subject: "math",
    topic: "Topic 12: Partial Fractions",
    question: "A student is asked to express (2x³ + 5x² - 4) / (x² + 2x) in partial fractions. What MUST they do before setting up partial fraction brackets?",
    options: [
      "Perform polynomial long division first because the degree of the numerator (3) is greater than or equal to the degree of the denominator (2).",
      "Immediately set up A / x + B / (x + 2).",
      "Cross-multiply by (x² + 2x).",
      "Differentiate both numerator and denominator."
    ],
    correctAnswer: 0,
    explanation: "IMPROPER FRACTION MINEFIELD! If degree of numerator ≥ degree of denominator, the fraction is improper. You CANNOT decompose directly! You must perform long division first to extract the polynomial quotient (2x + 1) before splitting the remainder."
  },

  // TOPIC 13: Coordinate Geometry (Perpendicular Bisector)
  {
    id: "q-m20",
    subject: "math",
    topic: "Topic 13: Coordinate Geometry",
    question: "Segment AB connects A(-2, 5) and B(4, -3). What is the gradient of the perpendicular bisector of AB?",
    options: [
      "Gradient of AB is -4/3, so perpendicular gradient is +3/4 (flip and negate).",
      "Gradient of AB is -4/3, so perpendicular gradient is -3/4.",
      "Gradient is -4/3, identical to line AB.",
      "Gradient is +4/3."
    ],
    correctAnswer: 0,
    explanation: "Gradient m_AB = (-3 - 5) / (4 - (-2)) = -8 / 6 = -4/3. For perpendicular lines, m₁ · m₂ = -1, so m_perp = -1 / (-4/3) = +3/4. Both invert AND change sign! Don't forget: two minuses make a plus."
  },

  // CHEMISTRY QUESTIONS (5 CORE QUESTIONS)
  {
    id: "q-c1",
    subject: "chemistry",
    topic: "Bonding & Structure",
    question: "Which of the following explanation statements receives FULL MARKS in River Valley High School marking schemes for why water has a low boiling point?",
    options: [
      "Little energy is needed to break the strong covalent bonds between hydrogen and oxygen atoms.",
      "Little energy is required to overcome the weak intermolecular forces of attraction between water molecules.",
      "Water molecules have delocalised electrons that easily escape into the gas phase.",
      "The electrostatic forces of attraction between H⁺ and O²⁻ ions are weak."
    ],
    correctAnswer: 1,
    explanation: "FATAL TRAP! Boiling water does NOT break covalent bonds; it only overcomes weak intermolecular forces between molecules. Writing 'covalent bonds break' receives zero marks instantly."
  },
  {
    id: "q-c2",
    subject: "chemistry",
    topic: "Acids & Metals",
    question: "A test paper asks: 'Dilute hydrochloric acid is added to copper turnings in a beaker. State the observation.' What is the correct answer?",
    options: [
      "Effervescence of colourless hydrogen gas that pops with a lighted splint.",
      "The beaker becomes warm and a blue solution of copper(II) chloride forms.",
      "No reaction / no bubbles observed.",
      "A reddish-brown solid precipitates out of solution."
    ],
    correctAnswer: 2,
    explanation: "Unreactive metal trap! Copper (Cu) and silver (Ag) are below hydrogen in the reactivity series and do NOT react with dilute acids. Any answer claiming bubbles or reactions gets 0 marks."
  },
  {
    id: "q-c3",
    subject: "chemistry",
    topic: "Salt Preparation",
    question: "A student is asked to prepare a pure, dry sample of Barium Sulfate (BaSO₄). Which method must they choose according to the decision tree?",
    options: [
      "Titration using burette and pipette with indicator.",
      "Excess insoluble base added to sulfuric acid, followed by crystallisation.",
      "Precipitation: Mix two soluble solutions (e.g. aqueous Ba(NO₃)₂ and Na₂SO₄), filter the precipitate, wash with distilled water, and dry between filter paper.",
      "Direct synthesis by burning barium metal in sulfur gas."
    ],
    correctAnswer: 2,
    explanation: "BaSO₄ is an insoluble sulfate. Insoluble salts are ALWAYS prepared via PRECIPITATION by mixing two soluble aqueous salts, filtering the precipitate, washing with distilled water, and drying between filter papers."
  },
  {
    id: "q-c4",
    subject: "chemistry",
    topic: "The Mole Concept",
    question: "What is the number of moles of gas in 480 cm³ of carbon dioxide at room temperature and pressure (r.t.p.)?",
    options: [
      "480 / 24 = 20 moles",
      "(480 / 1000) / 24 = 0.48 / 24 = 0.02 moles",
      "480 × 24 = 11,520 moles",
      "480 × 6 × 10²³ moles"
    ],
    correctAnswer: 1,
    explanation: "Gas volume formula requires dm³! 1 dm³ = 1000 cm³. 480 cm³ = 0.48 dm³. Moles = 0.48 / 24 = 0.02 mol. Forgetting to divide by 1000 is a classic exam slip!"
  },
  {
    id: "q-c5",
    subject: "chemistry",
    topic: "Redox Reagents",
    question: "When acidified potassium manganate(VII) (KMnO₄) acts as an oxidising agent on an unknown solution, what colour change confirms the redox reaction?",
    options: [
      "Colourless to Brown",
      "Orange to Green",
      "Purple to Colourless",
      "Blue to Red"
    ],
    correctAnswer: 2,
    explanation: "Acidified KMnO₄ is a powerful oxidising agent that is itself reduced. Its characteristic color change is PURPLE to COLOURLESS (decolourisation). Colourless to brown is for KI (reducing agent)."
  }
];
