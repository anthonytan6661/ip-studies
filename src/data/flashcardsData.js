export const flashcardsData = [
  // MATH FLASHCARDS
  {
    id: "fc-m1",
    subject: "math",
    topic: "Indices & Surds",
    question: "How do you rationalise the denominator of a fraction like 1 / (3 + √5)?",
    answer: "Multiply numerator and denominator by its conjugate partner (3 - √5). Using (a+b)(a-b) = a² - b², the denominator becomes 3² - (√5)² = 9 - 5 = 4.",
    tip: "Never leave any surd √ in the denominator of a final answer!"
  },
  {
    id: "fc-m2",
    subject: "math",
    topic: "Logarithms",
    question: "What is the critical check when solving logarithmic equations?",
    answer: "Check for illegal arguments! The inside of any log(u) must be strictly positive (u > 0). Any negative or zero solution must be crossed out with 'reject'.",
    tip: "Failing to write 'reject' costs 1-2 marks every time."
  },
  {
    id: "fc-m3",
    subject: "math",
    topic: "Quadratics",
    question: "What two conditions must be satisfied if 'a curve lies entirely above the x-axis'?",
    answer: "1. a > 0 (it smiles/opens upwards)\n2. b² - 4ac < 0 (it NEVER touches or cuts the x-axis, so zero real roots).",
    tip: "Common trap: students mistakenly write b² - 4ac > 0."
  },
  {
    id: "fc-m4",
    subject: "math",
    topic: "Inequalities",
    question: "How do you express solutions for (x - 2)(x - 5) < 0 versus (x - 2)(x - 5) > 0?",
    answer: "< 0: Sandwich range between roots: 2 < x < 5.\n> 0: Two outside wings: x < 2 or x > 5.",
    tip: "Always sketch a quick parabola to visually verify!"
  },
  {
    id: "fc-m5",
    subject: "math",
    topic: "Polynomials",
    question: "State the Remainder Theorem and Factor Theorem for f(x) divided by (x - c).",
    answer: "Remainder Theorem: Remainder R = f(c).\nFactor Theorem: If f(c) = 0, then (x - c) is an exact factor with zero remainder.",
    tip: "Once you find a factor, use polynomial long division to get the quotient."
  },
  {
    id: "fc-m6",
    subject: "math",
    topic: "Partial Fractions",
    question: "What MUST you check before splitting an algebraic fraction into partial fractions?",
    answer: "Check if the fraction is improper! If degree of numerator ≥ degree of denominator, perform polynomial long division first to extract whole terms before splitting.",
    tip: "e.g., (x² + 1)/(x² - 3) must be divided first!"
  },
  {
    id: "fc-m7",
    subject: "math",
    topic: "Circular Measure",
    question: "What are the formulas for arc length and sector area, and what calculator setting is mandatory?",
    answer: "Arc length s = rθ\nSector area A = ½ r² θ\nCalculator MUST be set in RAD (radian) mode, NOT DEG mode!",
    tip: "#1 lost marks source in RVHS: calculator left in DEG mode."
  },
  {
    id: "fc-m8",
    subject: "math",
    topic: "Trig Equations",
    question: "What is the ASTC rule for solving trig equations like sin(x) = -0.5?",
    answer: "1. Find acute basic angle α = sin⁻¹(+0.5) = 30° (ignore minus sign!).\n2. Locate quadrants where sine is negative: Q3 and Q4.\n3. Solutions: Q3: 180° + 30° = 210°; Q4: 360° - 30° = 330°.",
    tip: "Never divide both sides by sin(x) or cos(x) — factorise instead."
  },
  {
    id: "fc-m9",
    subject: "math",
    topic: "Coordinate Geometry",
    question: "How are the gradients of two perpendicular lines related, and what are the 3 steps for a perpendicular bisector?",
    answer: "m₁ · m₂ = -1 (so m₂ = -1/m₁).\nPerpendicular bisector steps:\n1. Find midpoint of AB.\n2. Find gradient m_AB, then perpendicular gradient -1/m_AB.\n3. Use y - y₁ = m_perp(x - x₁) with the midpoint.",
    tip: "Remember to both FLIP and NEGATE the gradient."
  },
  {
    id: "fc-m10",
    subject: "math",
    topic: "Linear Law",
    question: "How do you convert y = ax^b into linear form Y = mX + c, and how do you recover constant 'a'?",
    answer: "Take lg: lg(y) = b·lg(x) + lg(a).\nY = lg(y), X = lg(x), m = b, and vertical intercept c = lg(a).\nTo recover a: a = 10^c.",
    tip: "Don't forget: a = 10^c, NOT just c!"
  },

  // CHEMISTRY FLASHCARDS
  {
    id: "fc-c1",
    subject: "chemistry",
    topic: "Bonding & Structure",
    question: "What is the EXACT Cambridge marking sentence for why giant ionic lattices (like NaCl) have high melting points?",
    answer: "'A large amount of thermal energy is required to overcome the strong electrostatic forces of attraction between oppositely charged ions.'",
    tip: "Must mention: large energy, strong electrostatic forces, oppositely charged ions."
  },
  {
    id: "fc-c2",
    subject: "chemistry",
    topic: "Bonding & Structure",
    question: "Why does boiling water or melting ice NOT break covalent bonds?",
    answer: "Water is a simple covalent molecule. During boiling, only weak intermolecular forces of attraction between molecules are overcome. The strong covalent bonds inside the molecules remain intact!",
    tip: "Writing 'covalent bonds break' awards 0 marks immediately."
  },
  {
    id: "fc-c3",
    subject: "chemistry",
    topic: "Bonding & Structure",
    question: "Why does graphite conduct electricity whereas diamond does not?",
    answer: "Graphite has layers where each carbon is bonded to 3 other carbons, leaving one delocalised electron per atom free to move along layers.\nDiamond has each carbon bonded to 4 others, with no delocalised electrons or mobile ions.",
    tip: "Keyword: 'delocalised electrons free to move along layers'."
  },
  {
    id: "fc-c4",
    subject: "chemistry",
    topic: "The Mole Concept",
    question: "What are the 3 golden formulas for calculating moles?",
    answer: "1. Mass: Moles = Mass (g) / Molar Mass (Mr)\n2. Gas Volume: Moles = Volume (dm³) / 24 dm³ (divide cm³ by 1000!)\n3. Solution: Moles = Concentration (mol/dm³) × Volume (dm³)",
    tip: "1 dm³ = 1000 cm³. Always check volume units!"
  },
  {
    id: "fc-c5",
    subject: "chemistry",
    topic: "The Mole Concept",
    question: "How do you identify the Limiting Reactant in a chemical reaction?",
    answer: "Calculate the moles of both reactants and divide by their stoichiometric coefficients from the balanced equation. The reactant with the smallest ratio is limiting. Base ALL product yields strictly on this reactant.",
    tip: "Cheese toastie analogy: bread in excess, cheese limits sandwiches."
  },
  {
    id: "fc-c6",
    subject: "chemistry",
    topic: "Acids & Bases",
    question: "What happens when dilute hydrochloric acid is added to Copper (Cu) metal?",
    answer: "NO REACTION / NO BUBBLES! Copper is unreactive and positioned below Hydrogen in the reactivity series.",
    tip: "Trap question! Do NOT write Cu + 2HCl → CuCl₂ + H₂."
  },
  {
    id: "fc-c7",
    subject: "chemistry",
    topic: "Salt Preparation",
    question: "Which method is used to prepare: 1. NaCl, 2. CuSO₄, 3. BaSO₄?",
    answer: "1. NaCl: Titration (Soluble salt with SPA sodium ion).\n2. CuSO₄: Excess Insoluble Base/Carbonate with acid (Soluble salt, non-SPA).\n3. BaSO₄: Precipitation (Insoluble salt; mix two soluble solutions).",
    tip: "Decision: Soluble? SPA? -> Titration / Excess Insoluble Base / Precipitation."
  },
  {
    id: "fc-c8",
    subject: "chemistry",
    topic: "Reactivity Series",
    question: "What conditions are required for iron to rust, and how can rusting be prevented?",
    answer: "Rusting strictly requires BOTH Oxygen AND Water. Prevent by coating (paint, grease, galvanising with Zn) or sacrificial protection.",
    tip: "Boiled water with an oil layer has no dissolved O₂, so iron will never rust."
  },
  {
    id: "fc-c9",
    subject: "chemistry",
    topic: "Redox Chemistry",
    question: "What is the colour change for acidified KMnO₄ and KI, and what do they act as?",
    answer: "Acidified KMnO₄: Oxidising agent. Turns from PURPLE to COLOURLESS.\nPotassium Iodide (KI): Reducing agent. Turns from COLOURLESS to BROWN.",
    tip: "Remember OIL RIG: Oxidation Is Loss, Reduction Is Gain of electrons."
  }
];
