export const flashcardsData = [
  // MATH FLASHCARDS (13 Topics)
  {
    id: "fc-m1",
    subject: "math",
    topic: "Topic 1: Quadratics & Completing the Square",
    question: "When completing the square for y = 3(x - 4)² + 7, what is the vertex, and what is the common sign error?",
    answer: "Vertex is at (+4, +7). Since (x - 4)² ≥ 0, the minimum value is 7 when x = 4.\nCommon Error: Writing the turning point at x = -4 instead of reversing the sign to +4.",
    tip: "Remember to reverse the sign inside the bracket: (x - h) means x = +h!"
  },
  {
    id: "fc-m2",
    subject: "math",
    topic: "Topic 2: Inequalities & Simultaneous Equations",
    question: "How do you express solutions for (x - 2)(x - 5) < 0 vs > 0, and what must you never forget in simultaneous equations?",
    answer: "< 0: Bounded sandwich between roots: 2 < x < 5.\n> 0: Two outer wings: x < 2 or x > 5.\nSimultaneous equations: After finding both x values, you MUST substitute back to find both matching y values.",
    tip: "Never split inequalities into linear parts without sketching the parabola sketch or sign chart!"
  },
  {
    id: "fc-m3",
    subject: "math",
    topic: "Topic 3: Nature of Roots & Discriminant",
    question: "What two conditions must be satisfied if 'a quadratic curve lies entirely above the x-axis'?",
    answer: "1. a > 0 (it smiles / opens upwards)\n2. b² - 4ac < 0 (it NEVER touches or intersects the x-axis, meaning zero real roots).",
    tip: "Common trap: students mistakenly write b² - 4ac > 0 because of the word 'above'!"
  },
  {
    id: "fc-m4",
    subject: "math",
    topic: "Topic 4: Logarithmic & Exponential Functions",
    question: "What is the critical check when solving logarithmic equations?",
    answer: "Check for illegal arguments! The inside of any log(u) must be strictly positive (u > 0). Any solution producing an argument ≤ 0 must be crossed out with 'reject'.",
    tip: "Failing to write 'reject' costs 1-2 marks every time."
  },
  {
    id: "fc-m5",
    subject: "math",
    topic: "Topic 5: Functions & Modulus Graphs",
    question: "How do you sketch y = |f(x)| from y = f(x), and what is the golden rule of modulus graphs?",
    answer: "1. Sketch y = f(x) lightly.\n2. Keep all parts on or above the x-axis.\n3. Reflect all parts below the x-axis vertically upward across the x-axis.\nGolden Rule: A modulus curve can NEVER have any parts below the x-axis!",
    tip: "Always label vertex coordinates and all axis intercepts clearly."
  },
  {
    id: "fc-m6",
    subject: "math",
    topic: "Topic 6: Trig Ratios, Triangle Rules & Bearings",
    question: "State the Sine Rule, Cosine Rule, Area formula, and the rule for recording 3-figure bearings.",
    answer: "Area = ½ ab sin C (C is included angle).\nSine Rule: a/sin A = b/sin B (watch for ambiguous obtuse angle 180° - θ!).\nCosine Rule: c² = a² + b² - 2ab cos C.\nBearings: Always measured clockwise from North using 3 digits (e.g., 065°).",
    tip: "Angles of elevation/depression are always measured from the horizontal sightline."
  },
  {
    id: "fc-m7",
    subject: "math",
    topic: "Topic 7: Circular Measure (Radian System)",
    question: "What are the formulas for arc length and sector area, and what calculator setting is mandatory?",
    answer: "Arc length: s = rθ (θ in radians).\nSector area: A = ½ r² θ (θ in radians).\nSegment area: ½ r² (θ - sin θ).\nCalculator MUST be set in RAD (radian) mode, NOT DEG mode!",
    tip: "#1 lost marks source in RVHS: calculator left in DEG mode."
  },
  {
    id: "fc-m8",
    subject: "math",
    topic: "Topic 8: Trig Functions & Periodic Graphs",
    question: "For y = a sin(bx) + c or y = a cos(bx) + c, how do you find amplitude, period, and maximum/minimum values?",
    answer: "Amplitude = |a| (distance from midline to peak).\nPeriod = 360°/b or 2π/b (for tan, Period = 180°/b or π/b).\nMax = c + |a|, Min = c - |a|.",
    tip: "Remember: b is the frequency (cycles per 360° or 2π), NOT the period itself."
  },
  {
    id: "fc-m9",
    subject: "math",
    topic: "Topic 9: Trig Equations & ASTC",
    question: "What is the ASTC rule for solving trig equations like sin(x) = -0.5, and what must you never do?",
    answer: "1. Find acute basic angle α = sin⁻¹(+0.5) = 30° (ignore minus sign!).\n2. Locate quadrants where sine is negative: Q3 and Q4.\n3. Extract angles: Q3: 180° + 30° = 210°; Q4: 360° - 30° = 330°.\nNever divide both sides by sin(x) or cos(x) — factorise instead!",
    tip: "Dividing by sin(x) eliminates the sin(x) = 0 solutions."
  },
  {
    id: "fc-m10",
    subject: "math",
    topic: "Topic 10: Further Trig Identities & Proofs",
    question: "What is the strict marking scheme rule when proving 'LHS = RHS' for trig identities?",
    answer: "You must manipulate ONE side independently (usually the more complicated LHS) until it identically matches the other side. You are STRICTLY FORBIDDEN from moving terms across the '=' sign!",
    tip: "Cross-multiplying across '=' loses all method marks in Cambridge & RVHS marking schemes."
  },
  {
    id: "fc-m11",
    subject: "math",
    topic: "Topic 11: Polynomials, Remainder & Factor Theorems",
    question: "State the Remainder Theorem and Factor Theorem for f(x) divided by (ax - b).",
    answer: "Remainder Theorem: Remainder R = f(b/a).\nFactor Theorem: If f(b/a) = 0, then (ax - b) is an exact factor with zero remainder.\nAfter finding one factor, use long division and fully factorise the quadratic quotient.",
    tip: "Do not leave answers as (x - 1)(x² - 4); break it down completely to (x - 1)(x - 2)(x + 2)!"
  },
  {
    id: "fc-m12",
    subject: "math",
    topic: "Topic 12: Partial Fractions",
    question: "What MUST you check before splitting an algebraic fraction into partial fractions?",
    answer: "Check if the fraction is improper! If degree of numerator ≥ degree of denominator, perform polynomial long division first to extract whole polynomial terms before decomposing.",
    tip: "e.g., (x² + 1)/(x² - 3) must be divided first before setting up partial fractions!"
  },
  {
    id: "fc-m13",
    subject: "math",
    topic: "Topic 13: Coordinate Geometry of Straight Lines",
    question: "How are the gradients of two perpendicular lines related, and what are the 3 steps for a perpendicular bisector?",
    answer: "m₁ · m₂ = -1 (so m₂ = -1/m₁, flip and negate!).\nPerpendicular bisector steps:\n1. Find midpoint M = ((x₁+x₂)/2, (y₁+y₂)/2).\n2. Find gradient m_AB, then perpendicular gradient m_perp = -1/m_AB.\n3. Use point-slope form y - y_M = m_perp(x - x_M).",
    tip: "Watch out for arithmetic sign errors with negative coordinates: (y₂ - y₁)/(x₂ - x₁)."
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
