export const quizQuestions = [
  {
    id: "q-m1",
    subject: "math",
    topic: "Trig Equations",
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
  {
    id: "q-m2",
    subject: "math",
    topic: "Quadratics",
    question: "The question states: 'The quadratic curve y = ax² + bx + c lies entirely above the x-axis.' What are the required mathematical conditions?",
    options: [
      "a > 0 and b² - 4ac > 0",
      "a > 0 and b² - 4ac < 0",
      "a < 0 and b² - 4ac = 0",
      "a > 0 and b² - 4ac = 0"
    ],
    correctAnswer: 1,
    explanation: "Because the curve smiles (opens upwards), a > 0. Because it lies ENTIRELY above the axis, it NEVER touches or intersects the axis, meaning ZERO real roots: b² - 4ac < 0! Students frequently fall into the trap of writing b² - 4ac > 0."
  },
  {
    id: "q-m3",
    subject: "math",
    topic: "Logarithms",
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
  {
    id: "q-m4",
    subject: "math",
    topic: "Linear Law",
    question: "In a Linear Law problem transforming y = a x^b, lg(y) is plotted against lg(x). The vertical intercept c is calculated to be 3. What is the true value of constant a?",
    options: [
      "a = 3",
      "a = 30",
      "a = 10³ = 1000",
      "a = e³ ≈ 20.08"
    ],
    correctAnswer: 2,
    explanation: "Since lg(y) = b·lg(x) + lg(a), the vertical intercept c equals lg(a). Therefore, a = 10^c = 10³ = 1000. Forgetting to do 10^c is one of the most common exam traps!"
  },
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
