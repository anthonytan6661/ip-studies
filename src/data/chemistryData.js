export const chemistrySyllabus = {
  title: "Sec 3 Pure Chemistry",
  subtitle: "River Valley High School (RVHS) IP Chemistry Syllabus",
  bigPicture: {
    headline: "Why Did Chemistry Get So Hard in Sec 3?",
    points: [
      "In lower secondary, science was observational and descriptive ('acids taste sour', 'metals are shiny').",
      "In Sec 3 IP, Chemistry becomes microscopic, linguistic, and quantitative.",
      "The Keyword Penalty: Marked like a legal document. Missing one Cambridge buzzword (e.g. writing 'covalent bonds break' instead of 'weak intermolecular forces are overcome') awards ZERO marks for the entire 3-mark question.",
      "The Math Barrier: The Mole Concept demands algebraic ratios, gas volumes, and solution concentrations.",
      "The Good News: The same 6 structural explanations appear on every single RVHS test paper. Memorising exact templates vaults grades from 50% to distinction."
    ]
  },
  pillars: [
    {
      id: "pillar-1",
      name: "Pillar 1: Bonding & Structure (Terms 1 & 2)",
      examWeight: "~30% of Total Exam",
      summary: "The single biggest source of lost explanation marks. Strict keyword precision required.",
      topics: [
        {
          id: "c-1",
          number: 1,
          title: "Atomic Structure & The Happy Octet Rule",
          plainEnglish: "Atoms want stable electronic configurations like Noble Gases (full outer valence shell of 8 electrons). They achieve this by losing, gaining, or sharing electrons.",
          routines: [
            {
              name: "Ion Formation",
              desc: "Metals (1-3 valence electrons) lose electrons to become positive cations (Na⁺, Mg²⁺, Al³⁺). Non-metals (5-7 valence electrons) gain electrons to become negative anions (Cl⁻, O²⁻, N³⁻)."
            }
          ],
          traps: [
            "Losing negative electrons makes the particle POSITIVE, not negative. Double check ion charges!"
          ],
          spotCheckQuestion: "When an atom loses electrons, does it become positive or negative? (Answer: Positive! Electrons are negative, so losing negative baggage leaves a positive charge)."
        },
        {
          id: "c-2",
          number: 2,
          title: "The 4 Great Structures (The Keyword Minefield)",
          plainEnglish: "Every single test features 3-mark questions: 'Explain, in terms of structure and bonding, why substance X has a high/low melting point or conducts electricity.'",
          structuresTable: [
            {
              structure: "1. Giant Ionic Lattice",
              example: "NaCl, MgO",
              composition: "Metal + Non-metal. 3D grid of oppositely charged ions.",
              meltingPointExplanation: "HIGH: 'Large amount of thermal energy required to overcome strong electrostatic forces of attraction between oppositely charged ions.'",
              conductivity: "Only when Molten or Aqueous: In solid state, ions are locked in fixed positions. When molten/aqueous, ions are mobile to carry charge."
            },
            {
              structure: "2. Simple Covalent Molecule",
              example: "H₂O, CO₂, O₂",
              composition: "Non-metal + Non-metal. Small, isolated family molecules.",
              meltingPointExplanation: "LOW: 'Little energy needed to overcome weak intermolecular forces of attraction between molecules.'",
              conductivity: "No: No free-moving ions or electrons (all neutral molecules)."
            },
            {
              structure: "3. Giant Covalent Network",
              example: "Diamond, Graphite, Sand (SiO₂)",
              composition: "Endless 3D web of non-metal atoms bonded like scaffolding.",
              meltingPointExplanation: "EXTREMELY HIGH: 'Huge amount of energy needed to break extensive network of numerous, strong covalent bonds.'",
              conductivity: "Diamond: No. Graphite: Yes ('has delocalised electrons free to move along layers')."
            },
            {
              structure: "4. Giant Metallic Lattice",
              example: "Copper wire, Iron nail, Aluminium foil",
              composition: "Metal only. Positive metal ions in a sea of delocalised electrons.",
              meltingPointExplanation: "HIGH: 'Strong electrostatic attraction between positive metal ions and sea of delocalised electrons.'",
              conductivity: "Yes, always (solid and liquid): Delocalised electrons move freely throughout structure."
            }
          ],
          traps: [
            "FATAL TRAP FAILING 80% OF STUDENTS: When boiling water, you are NOT breaking covalent bonds! You are only overcoming weak intermolecular forces between molecules. Writing 'covalent bonds break' gives 0 marks immediately."
          ],
          spotCheckQuestion: "Show me your answer explaining why CO₂ has a low boiling point. Did you use the words 'weak intermolecular forces'? If you wrote 'covalent bonds break', erase it immediately!"
        }
      ]
    },
    {
      id: "pillar-2",
      name: "Pillar 2: The Calculation Engine — The Mole Concept (Terms 2 & 3)",
      examWeight: "~35% of Total Exam",
      summary: "Quantitative stoichiometry. Master the 3-step assembly line to unlock calculation marks.",
      topics: [
        {
          id: "c-3",
          number: 3,
          title: "What on Earth is a 'Mole' & The 3-Step Assembly Line",
          plainEnglish: "Just as bakers use 'a dozen' for 12, chemists use 'a mole' for 6 × 10²³ particles. 1 mole of carbon-12 weighs exactly 12 grams (the mass number on the Periodic Table!).",
          routines: [
            {
              name: "The Universal 3-Step Assembly Line",
              desc: "Step 1: Convert Given Information into Moles. Step 2: Use the Balanced Chemical Equation to Bridge the Stoichiometric Ratio. Step 3: Convert Moles into Required Units (grams, dm³, or mol/dm³)."
            },
            {
              name: "The 3 Golden Formulas",
              desc: "1. Mass: Moles = Mass (g) / Molar Mass (Mr). 2. Gas Volume: Moles = Volume (dm³) / 24 dm³ at r.t.p. (Divide cm³ by 1000 first!). 3. Solution: Moles = Concentration (mol/dm³) × Volume (dm³)."
            }
          ],
          traps: [
            "cm³ vs dm³ GAS TRAP: Volume must be in dm³! 1 dm³ = 1000 cm³. If given 500 cm³, must divide by 1000 = 0.5 dm³ before dividing by 24.",
            "Missing units in final answers: RVHS deducts 1 mark per question for missing units (g, mol, dm³, mol/dm³)."
          ],
          spotCheckQuestion: "Did the question give you gas volume in cm³ or dm³? Did you remember to divide cm³ by 1000 before using the 24 dm³ rule?"
        },
        {
          id: "c-4",
          number: 4,
          title: "Limiting Reactants & Percentage Yield",
          plainEnglish: "Cheese toastie analogy: 10 bread slices + 2 cheese slices = only 2 sandwiches. The cheese runs out first, stopping the whole reaction. Cheese is the limiting reactant; bread is in excess.",
          routines: [
            {
              name: "Limiting Reactant Protocol",
              desc: "1. Calculate moles of both reactants. 2. Compare against stoichiometric ratio in balanced equation. 3. Identify limiting reactant. 4. BASE ALL PRODUCT CALCULATIONS ON THE LIMITING REACTANT ONLY!"
            }
          ],
          traps: [
            "Calculating product using the reactant that is in excess rather than the limiting reactant."
          ],
          spotCheckQuestion: "Did you calculate which chemical runs out first, or did you just pick the first number in the question?"
        }
      ]
    },
    {
      id: "pillar-3",
      name: "Pillar 3: Chemical Reactions — Acids, Bases & Salts (Term 3)",
      examWeight: "~25% of Total Exam",
      summary: "Procedural lab techniques and solubility rules. 100% memorisable marks.",
      topics: [
        {
          id: "c-5",
          number: 5,
          title: "The 3 Core Reactions of Acids",
          plainEnglish: "Acids are chemical scissors (H⁺ ions) with 3 standard reaction pathways.",
          routines: [
            {
              name: "Reaction 1: Acid + Reactive Metal",
              desc: "Acid + Metal → Salt + Hydrogen Gas (H₂). Gas test: Lighted splint extinguishes with a 'pop' sound."
            },
            {
              name: "Reaction 2: Acid + Carbonate",
              desc: "Acid + Carbonate → Salt + Water + Carbon Dioxide (CO₂). Gas test: Bubble through limewater → forms white precipitate (turns cloudy)."
            },
            {
              name: "Reaction 3: Acid + Base / Alkali",
              desc: "Acid + Base → Salt + Water only (Neutralisation: H⁺ + OH⁻ → H₂O)."
            }
          ],
          traps: [
            "UNREACTIVE METAL TRAP: Copper (Cu) and Silver (Ag) do NOT react with dilute acids! Answering with a reaction loses 2 marks. Correct answer: 'No reaction / no bubbles observed'."
          ],
          spotCheckQuestion: "What is the test for Hydrogen gas vs Carbon Dioxide gas? (Answer: H₂ = popping lighted splint; CO₂ = white precipitate in limewater)."
        },
        {
          id: "c-6",
          number: 6,
          title: "The Salt Preparation Decision Tree",
          plainEnglish: "Every RVHS paper features a 4-to-5 mark question: 'Describe how you would prepare a pure, dry sample of Salt X.'",
          decisionTreeSteps: [
            {
              question: "Is target salt SOLUBLE in water?",
              branchNo: "Use PRECIPITATION METHOD: Mix two soluble aqueous solutions together. Filter off insoluble solid precipitate, wash with distilled water, dry between filter papers.",
              branchYes: "Check if target salt contains SPA ions (Sodium, Potassium, Ammonium)."
            },
            {
              question: "Does the soluble salt have SPA ions?",
              branchYes: "Use TITRATION: Burette + Pipette with indicator to determine exact neutralisation volume. Repeat without indicator, then crystallise.",
              branchNo: "Use EXCESS INSOLUBLE BASE / CARBONATE / METAL: Add excess metal oxide/carbonate to warm acid until excess solid remains. Filter away excess, then crystallise filtrate."
            }
          ],
          solubilityRules: {
            alwaysSoluble: "All SPA salts (Sodium, Potassium, Ammonium) and ALL Nitrates (NO₃⁻).",
            insolubleChlorides: "Silver Chloride (AgCl), Lead(II) Chloride (PbCl₂).",
            insolubleSulfates: "Barium Sulfate (BaSO₄), Lead(II) Sulfate (PbSO₄), Calcium Sulfate (CaSO₄)."
          },
          spotCheckQuestion: "To make this salt, did you choose Titration, Precipitation, or Excess Insoluble Base? Which branch of the rule told you so?"
        }
      ]
    },
    {
      id: "pillar-4",
      name: "Pillar 4: Metals, Reactivity & Redox (Term 4)",
      examWeight: "~15% of Total Exam",
      summary: "Reactivity series hierarchy, displacement laws, and electron transfer.",
      topics: [
        {
          id: "c-7",
          number: 7,
          title: "The Reactivity Series of Metals",
          plainEnglish: "Metals ranked by ease of losing electrons: Potassium > Sodium > Calcium > Magnesium > Aluminium > Zinc > Iron > Lead > Copper > Silver. (Please Send Cats Monkeys And Zebras In Lead Cages Safely).",
          routines: [
            {
              name: "Displacement Reactions",
              desc: "A more reactive metal displaces a less reactive metal from its salt solution. E.g. Zn (s) + CuSO₄ (aq) → ZnSO₄ (aq) + Cu (s). Blue solution fades to colourless; reddish-brown copper deposits."
            },
            {
              name: "Rusting of Iron",
              desc: "Requires BOTH Oxygen AND Water. Eliminating either (e.g. boiled water with oil seal, or dry desiccant) completely prevents rusting."
            }
          ],
          traps: [
            "Assuming copper can displace iron. Copper is LOWER and weaker than iron in the series, so NO reaction occurs!"
          ],
          spotCheckQuestion: "Can copper displace iron from iron sulfate? (Answer: No! Copper is lower and less reactive than iron)."
        },
        {
          id: "c-8",
          number: 8,
          title: "Redox Chemistry (Oxidation & Reduction)",
          plainEnglish: "Electron transfer and oxidation state changes. Memorise OIL RIG: Oxidation Is Loss of electrons; Reduction Is Gain of electrons.",
          routines: [
            {
              name: "Universal Indicator Reagents in RVHS",
              desc: "1. Acidified Potassium Manganate(VII) (KMnO₄): Powerful Oxidising Agent. Colour changes from PURPLE to COLOURLESS when reduced. 2. Potassium Iodide (KI): Powerful Reducing Agent. Colour changes from COLOURLESS to BROWN when oxidised."
            }
          ],
          traps: [
            "Confusing oxidising agent with what is being oxidised: An oxidising agent oxidises something else while itself undergoing REDUCTION (hence Purple to Colourless for KMnO₄)."
          ],
          spotCheckQuestion: "When Potassium Manganate acts as an oxidising agent, what colour does it turn? (Answer: Purple to colourless)."
        }
      ]
    }
  ],
  auditProtocol: {
    title: "5-Minute Nightly Chemistry Audit",
    steps: [
      { step: 1, text: "Pick 1 calculation question: Check if units (g, mol, dm³, mol/dm³) are explicitly written (RVHS deducts 1 mark per question for missing units)." },
      { step: 2, text: "Check 1 explanation question on MP or conductivity: Verify exact structural keywords appear: 'electrostatic forces', 'weak intermolecular forces', 'mobile ions', or 'delocalised electrons'." },
      { step: 3, text: "Check 1 salt preparation question: Ask 'Is that salt soluble or insoluble? How do you know?' Verify correct branch: Titration vs Insoluble Base vs Precipitation." }
    ]
  }
};
