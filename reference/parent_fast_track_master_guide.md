# Parent Fast-Track Master Guide: Sec 3 Integrated Math & Chemistry
### RVHS / IP Syllabus Revision & Home Coaching Manual
*Designed for quick evening reference: understand the concepts in plain English, spot common exam traps, and review homework in under five minutes.*

---

### Part 1: Integrated Mathematics (13 Confirmed Topics across 3 Exam Zones)

The exam concentrates on **Algebra, Trigonometry, and Coordinate Geometry**. Vectors and Calculus (Differentiation) are excluded.

---

### Zone 1: Core Algebra & Functions (Topics 1 – 5)
*Exam Weight: ~40%. The foundational algebraic engine; mastering Zone 1 secures passing marks and eliminates costly mechanical slips.*

---

#### Topic 1: Quadratic Equations, Graphs & Completing the Square
* **Plain-English Concept:** A quadratic equation sketches a symmetrical parabola (a U-shaped valley or an inverted U-shaped hill). The primary skills are identifying the exact turning point (vertex), the axis of symmetry, and where the curve cuts the axes without guessing.
* **The Standard Method (Completing the Square):**
  * Transform $y = ax^2 + bx + c$ into vertex form: $y = a(x - h)^2 + k$.
  * Since $(x - h)^2 \ge 0$ for all real numbers:
    * If $a > 0$, the curve has a **minimum value** $k$ at $x = h$. Vertex is at $(h, k)$.
    * If $a < 0$, the curve has a **maximum value** $k$ at $x = h$. Vertex is at $(h, k)$.
  * The vertical axis of symmetry is always $x = h$.
* **Common Trap:** Failing to flip the sign inside the bracket. For $y = 3(x - 4)^2 + 7$, the turning point is at $x = +4$, not $-4$. For $y = -(x + 2)^2 - 5$, the turning point is at $(-2, -5)$.
* **Quick Check Question:** *"When you completed the square, what are the coordinates of the turning point, and did you reverse the sign inside the bracket?"*

---

#### Topic 2: Linear & Quadratic Inequalities and Simultaneous Equations
* **Plain-English Concept:**
  * **Inequalities:** Determining over what range of $x$ a curve sits strictly above the horizontal axis ($> 0$) or below it ($< 0$).
  * **Simultaneous Equations:** Finding the exact $(x, y)$ coordinate points where a straight line and a curved quadratic intersect.
* **The Standard Methods:**
  * **Quadratic Inequalities (Parabola Protocol):**
    1. Rearrange all terms to the left side so zero is on the right: $(x - \alpha)(x - \beta) < 0$ or $> 0$ (ensure the coefficient of $x^2$ is positive).
    2. Sketch a quick U-shaped parabola with roots $\alpha$ and $\beta$ ($\alpha < \beta$) on the horizontal axis.
    3. If $< 0$, select the bounded "sandwich" interval between the roots: $\alpha < x < \beta$.
    4. If $> 0$, select the two separate outer "wings": $x < \alpha \text{ or } x > \beta$.
  * **Simultaneous Equations (Substitution Protocol):**
    1. Express one variable from the linear equation (e.g., $y = mx + c$).
    2. Substitute this expression into the quadratic equation to eliminate $y$, yielding $Ax^2 + Bx + C = 0$.
    3. Solve for two values of $x$ (via factorisation or the quadratic formula).
    4. Substitute each $x$ back into the linear equation to obtain both corresponding $y$ coordinates.
* **Common Traps:**
  * **Inequality Trap:** Splitting $(x - 2)(x - 5) < 0$ into $x < 2$ and $x < 5$ without sketching a parabola or sign chart. That approach is mathematically invalid and loses all method marks.
  * **Simultaneous Trap:** Stopping after finding the two $x$ values and forgetting to calculate the matching $y$ coordinates.
* **Quick Check Question:** *"Did you sketch the parabola to see whether the solution sits between the two roots or outside them, and did you calculate both pairs of $(x, y)$?"*

---

#### Topic 3: Nature of Roots of a Quadratic Equation (The Discriminant)
* **Plain-English Concept:** Determining whether a line and a curve touch (tangent), cross twice, or never meet at all—purely using algebra without graphing.
* **The Standard Method:**
  * For $ax^2 + bx + c = 0$, compute the Discriminant $D = b^2 - 4ac$:
    * **$b^2 - 4ac > 0$:** Two real and distinct roots (line intersects curve at 2 distinct points).
    * **$b^2 - 4ac = 0$:** Two real and equal roots (line is tangent to the curve; touches at exactly 1 point).
    * **$b^2 - 4ac < 0$:** No real roots (line and curve never intersect).
    * **$b^2 - 4ac \ge 0$:** Real roots exist (distinct or coincident).
* **Common Trap (The #1 RVHS Quadratic Trap):** When a problem states *"the curve lies entirely above the horizontal axis"* (or *"is always positive"*), students reflexively write $b^2 - 4ac > 0$. The correct condition is **$b^2 - 4ac < 0$** (because it never touches or cuts the axis) combined with **$a > 0$** (a smiling parabola).
* **Quick Check Question:** *"If the problem states the line is a tangent to the curve, what should your discriminant equal? And if a curve lies entirely above the axis, why is $b^2 - 4ac < 0$?"* (Answers: $b^2 - 4ac = 0$; because it never intersects the horizontal axis).

---

#### Topic 4: Exponential & Logarithmic Functions
* **Plain-English Concept:** A logarithm answers the question: *"To what power must base $b$ be raised to produce this number?"* ($\log_{10} 100 = 2$ because $10^2 = 100$).
* **The Standard Methods:**
  * **Change of Base Formula:** $\log_b a = \frac{\lg a}{\lg b} = \frac{\ln a}{\ln b}$ (enables evaluation on a standard scientific calculator).
  * **Power Drop Law:** $\log_a (x^k) = k \log_a x$ (pulls exponents down to ground level so they can be solved linearly).
  * **Product & Quotient Laws:** $\log_a (xy) = \log_a x + \log_a y$; $\log_a \left(\frac{x}{y}\right) = \log_a x - \log_a y$.
* **Common Trap (The Illegal Argument Trap):** Taking the logarithm of zero or a negative value is strictly undefined. When solving quadratic equations involving logarithms, any solution that produces a non-positive argument ($\le 0$) inside any $\log(\dots)$ bracket **must be rejected** with explicit notation (*"reject $x = \dots$"*). Forgetting to reject costs 1–2 marks every time.
* **Quick Check Question:** *"Did you check your final answers back in the original logarithmic terms to discard and write 'reject' for any non-positive arguments?"*

---

#### Topic 5: Functions, Graphs & Modulus Functions
* **Plain-English Concept:** Functions are mathematical mapping machines where each valid input ($x$, domain) produces a unique output ($y$, range). The modulus function $|f(x)|$ measures absolute distance from zero, reflecting all negative outputs into positive values.
* **The Standard Methods:**
  * **Modulus Graph Sketching ($y = |f(x)|$):**
    1. Sketch the underlying function $y = f(x)$ lightly.
    2. Leave all portions on or above the horizontal axis ($y \ge 0$) untouched.
    3. Reflect all portions below the horizontal axis ($y < 0$) vertically upward across the $x$-axis.
    4. Clearly label the vertex, $x$-intercepts, and $y$-intercept.
  * **Modulus Equations ($|f(x)| = g(x)$):** Solve $f(x) = g(x)$ or $f(x) = -g(x)$, then test each solution against $g(x) \ge 0$ to eliminate extraneous roots.
* **Common Trap:** Leaving portions of a modulus curve below the horizontal axis. A modulus output can never be negative ($|f(x)| \ge 0$).
* **Quick Check Question:** *"Are any parts of your modulus curve below the horizontal axis? If so, they must be reflected upward."*

---

### Zone 2: Trigonometry, Circular Measure & 3D Bearings (Topics 6 – 10)
*Exam Weight: ~35%. Method-heavy and procedural; easy full marks with correct protocols.*

---

#### Topic 6: Trigonometric Ratios, Triangle Rules & 3D Bearings
* **Plain-English Concept:** Solving side lengths, angles, compass directions, and 3D structural frameworks in general triangles that do not contain a right angle.
* **The Core Formulas & Rules:**
  1. **Area of a Triangle:** $\text{Area} = \frac{1}{2}ab\sin C$ (angle $C$ must be the included angle directly sandwiched between sides $a$ and $b$).
  2. **Sine Rule:** $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$ (used when given opposing pairs of sides and angles).
  3. **Cosine Rule:** $c^2 = a^2 + b^2 - 2ab\cos C \iff \cos C = \frac{a^2 + b^2 - c^2}{2ab}$ (used when given three sides, or two sides and the included angle).
  4. **Obtuse Angles:** $\sin(180^\circ - \theta) = \sin\theta$; $\cos(180^\circ - \theta) = -\cos\theta$.
  5. **Bearings:** Always measured clockwise from North ($000^\circ$) using three digits (e.g., $065^\circ, 240^\circ$).
  6. **Angles of Elevation and Depression:** Always measured relative to the horizontal sightline, never relative to a vertical wall or pole.
* **Common Traps:**
  * **Ambiguous Case of the Sine Rule:** When solving for an angle opposite a given side, an obtuse angle ($180^\circ - \theta$) may also be a valid solution if the sum of angles does not exceed $180^\circ$.
  * **3D Framework Extraction:** Extracting 2D triangles from a 3D diagram with incorrect shared side lengths or projecting angles onto the wrong plane.
* **Quick Check Question:** *"Is the angle used in your $\frac{1}{2}ab\sin C$ calculation directly between the two chosen sides, and did you record your bearing clockwise from North in three digits?"*

---

#### Topic 7: Arc Length, Sector Area & Radian Measure (Circular Measure)
* **Plain-English Concept:** Measuring angles using radians rather than arbitrary degrees ($\pi \text{ rad} = 180^\circ$). Radians define angle as arc length divided by radius, simplifying circular geometric formulas.
* **The 3 Core Formulas:**
  1. **Arc Length:** $s = r\theta$ ($\theta$ in radians).
  2. **Sector Area:** $A = \frac{1}{2}r^2\theta$ ($\theta$ in radians).
  3. **Segment Area:** $\text{Sector Area} - \text{Triangle Area} = \frac{1}{2}r^2(\theta - \sin\theta)$.
* **Common Trap (The #1 Source of Lost Marks in RVHS):** Leaving the scientific calculator in **Degree (DEG)** mode instead of **Radian (RAD)** mode. Every circular trig calculation ($\sin\theta, \cos\theta$) becomes mathematically invalid, costing 4–6 marks instantly.
* **Quick Check Question:** *"Look at your calculator screen right now. Does it show a tiny 'R' for Radian mode, or a 'D' for Degree mode?"*

---

#### Topic 8: Trigonometric Functions & Periodic Graphs
* **Plain-English Concept:** Plotting repeating periodic wave equations: $y = a\sin(bx) + c$, $y = a\cos(bx) + c$, or $y = a\tan(bx)$.
* **The 3 Wave Parameters:**
  * **Amplitude ($|a|$):** Height from the central midline to the crest (half the total peak-to-trough distance). Note: $\tan x$ has no amplitude.
  * **Period ($\frac{360^\circ}{b}$ or $\frac{2\pi}{b}$):** Horizontal distance required to complete one full cycle. (For $\tan(bx)$, the period is $\frac{180^\circ}{b}$ or $\frac{\pi}{b}$).
  * **Midline ($c$):** The vertical translation of the central baseline. Maximum value $= c + |a|$; Minimum value $= c - |a|$.
* **Common Trap:** Confusing amplitude with total peak-to-trough distance (amplitude is half that total). Confusing frequency $b$ (number of cycles in $360^\circ$) with the period itself.
* **Quick Check Question:** *"What is the midline of this wave, and how far above and below it do the crests and troughs reach?"*

---

#### Topic 9: Trigonometric Equations & Simple Identities
* **Plain-English Concept:** Finding every angle over a given range ($0^\circ \le x \le 360^\circ$ or $0 \le x \le 2\pi$) that produces a specific trigonometric value (e.g., $\sin x = -0.5$).
* **The Standard Method (ASTC Rule):**
  1. Determine the basic acute reference angle: $\alpha = \sin^{-1}(|k|)$ (always use the positive value; omit any negative signs).
  2. Identify the correct quadrants using ASTC (All positive in Q1, Sine in Q2, Tangent in Q3, Cosine in Q4).
  3. Compute quadrant angles accordingly:
     * Quadrant 1: $\theta = \alpha$
     * Quadrant 2: $\theta = 180^\circ - \alpha$ (or $\pi - \alpha$)
     * Quadrant 3: $\theta = 180^\circ + \alpha$ (or $\pi + \alpha$)
     * Quadrant 4: $\theta = 360^\circ - \alpha$ (or $2\pi - \alpha$)
  4. Expand domain if angle is compound (e.g., if $0^\circ \le x \le 360^\circ$, then $0^\circ \le 2x \le 720^\circ$).
* **Common Trap:** Dividing both sides of an equation by a trigonometric term like $\sin x$ or $\cos x$ (e.g., in $2\sin x\cos x = \sin x$). Dividing eliminates the valid roots where $\sin x = 0$! Move all terms to the left and factorise: $\sin x(2\cos x - 1) = 0$.
* **Quick Check Question:** *"Did you calculate the acute reference angle first using a positive value, and did you factorise rather than dividing by $\sin x$?"*

---

#### Topic 10: Further Trigonometric Identities, Double Angles & $R$-Formula
* **Plain-English Concept:** Advanced algebraic tools used to simplify complex wave expressions, solve compound equations, and execute formal proofs.
* **Core Identities & Formulas:**
  * **Addition Formulas:**
    * $\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$
    * $\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$
    * $\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}$
  * **Double-Angle Formulas:**
    * $\sin 2A = 2\sin A\cos A$
    * $\cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A$
    * $\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$
  * **The $R$-Formula:** Express $a\sin\theta \pm b\cos\theta$ as $R\sin(\theta \pm \alpha)$ or $a\cos\theta \pm b\sin\theta$ as $R\cos(\theta \mp \alpha)$, where $R = \sqrt{a^2 + b^2}$ and $\tan\alpha = \frac{b}{a}$. Used to find exact maximum/minimum values ($R$ and $-R$) and solve equations.
* **Common Trap (Proof Treatment Trap):** In proof problems ("Prove that LHS = RHS"), moving terms across the equals sign. Working across the equals sign is treated as assuming what you are trying to prove, losing all method marks in RVHS/Cambridge schemes. Work on one side independently (usually the more complicated LHS) until it matches the RHS.
* **Quick Check Question:** *"Did you work down one side of the identity independently without cross-multiplying across the equals sign?"*

---

### Zone 3: Polynomials, Partial Fractions & Coordinate Geometry (Topics 11 – 13)
*Exam Weight: ~25%. Highly structured and algebraic; the most reliable section to achieve 100%.*

---

#### Topic 11: Polynomials, Remainder & Factor Theorems
* **Plain-English Concept:** Managing cubic and higher-order algebraic expressions ($x^3, x^4$) without having to perform tedious polynomial long division repeatedly.
* **The Standard Methods:**
  * **Remainder Theorem:** Dividing polynomial $f(x)$ by $(ax - b)$ leaves remainder $R = f(b/a)$.
  * **Factor Theorem:** If $f(b/a) = 0$, then $(ax - b)$ is an exact linear factor with zero remainder.
  * **Full Factorisation Protocol:**
    1. Use Factor Theorem by trial ($x = \pm 1, \pm 2, \dots$) to find a first factor $(x - c)$ such that $f(c) = 0$.
    2. Divide $f(x)$ by $(x - c)$ using polynomial long division to obtain the quotient quadratic $Q(x)$.
    3. Fully factorise the quadratic quotient $Q(x)$ into linear factors if possible.
* **Common Trap:** Incomplete factorisation. After identifying one linear factor and dividing to obtain a quadratic quotient, stopping at $(x - 1)(x^2 - 4)$ instead of factorising fully to $(x - 1)(x - 2)(x + 2)$.
* **Quick Check Question:** *"Did you verify whether the remaining quadratic quotient can be factored down further into two linear brackets?"*

---

#### Topic 12: Partial Fractions
* **Plain-English Concept:** Reversing fraction addition: breaking a complicated rational fraction into a sum of simpler component "baby" fractions.
* **The 3 Denominator Rules:**
  1. **Distinct Linear Factors:** $\frac{px+q}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}$
  2. **Repeated Linear Factors:** $\frac{px+q}{(x-a)^2(x-b)} = \frac{A}{x-a} + \frac{B}{(x-a)^2} + \frac{C}{x-b}$
  3. **Irreducible Quadratic Factor:** $\frac{px+q}{(x-a)(x^2+c)} = \frac{A}{x-a} + \frac{Bx+C}{x^2+c}$
* **Common Trap (The Improper Fraction Trap):** Attempting to split an improper fraction (where numerator degree $\ge$ denominator degree) without performing polynomial long division first. You **must** divide first to extract the polynomial quotient before decomposing the remainder.
* **Quick Check Question:** *"Is the highest power on top smaller than the bottom? If not, did you perform polynomial long division first?"*

---

#### Topic 13: Coordinate Geometry of Straight Lines
* **Plain-English Concept:** Applying algebra to calculate geometric properties, slopes, intersections, and perpendicularity of lines and polygons on a coordinate plane.
* **Core Rules & Routines:**
  * **Parallel Lines:** $m_1 = m_2$.
  * **Perpendicular Lines:** $m_1 \cdot m_2 = -1 \implies m_\perp = -\frac{1}{m_1}$ (both flip and negate!).
  * **Perpendicular Bisector (3-Step Protocol):**
    1. Find the midpoint $M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$ of segment $AB$.
    2. Compute the gradient of $AB$: $m_{AB} = \frac{y_2 - y_1}{x_2 - x_1}$, then determine $m_\perp = -\frac{1}{m_{AB}}$.
    3. Use the point-slope form: $y - y_M = m_\perp(x - x_M)$.
* **Common Trap:** Arithmetic sign errors when computing slopes with negative coordinates: $\frac{y_2 - y_1}{x_2 - x_1}$. Forgetting to both negate AND invert for perpendicular gradients (e.g., writing $-\frac{2}{3}$ instead of $-\frac{3}{2}$).
* **Quick Check Question:** *"If a line has a gradient of $-\frac{3}{4}$, what is the gradient of a line perpendicular to it?"* (Answer: $+\frac{4}{3}$).

---

## Part 2: Pure Chemistry (4 Essential Pillars)

Chemistry marks depend on two things: **mathematical stoichiometry** and **exact Cambridge/IP marking keywords**.

---

### Pillar 1: Bonding, Structure & Properties
*Exam Weight: ~30%. High keyword sensitivity.*

Questions routinely ask: *"Explain, in terms of structure and bonding, why substance X has a high/low melting point or conducts electricity."*

| Structure Type | Real Examples | Key Explanatory Phrasing (Required for Marks) | Electrical Conductivity |
|---|---|---|---|
| **Giant Ionic Lattice** | Table salt ($\text{NaCl}$), $\text{MgO}$ | *"A large amount of thermal energy is required to overcome strong electrostatic forces of attraction between oppositely charged ions."* | Only when **molten or aqueous** (*"ions are mobile to carry charge"*). In solid state, ions are fixed in lattice positions. |
| **Simple Covalent Molecule** | $\text{H}_2\text{O}$, $\text{CO}_2$, $\text{CH}_4$ | *"Little thermal energy is needed to overcome weak intermolecular forces of attraction between molecules."* | **Non-conductor** in all states (*"exists as neutral molecules; no mobile ions or delocalised electrons"*). |
| **Giant Covalent Network** | Diamond, Graphite, $\text{SiO}_2$ | *"A huge amount of thermal energy is needed to break an extensive network of numerous, strong covalent bonds."* | **Diamond:** Non-conductor.<br>**Graphite:** Conducts (*"has delocalised electrons free to move along layers"*). |
| **Giant Metallic Lattice** | Copper wire, Iron | *"Strong electrostatic forces of attraction between positive metal ions and a sea of delocalised electrons."* | **Good conductor** in both solid and liquid states (*"delocalised electrons are mobile to carry electrical charge"*). |

* **Critical Distinction:** When boiling water or simple molecules, **covalent bonds do not break**. Only weak intermolecular forces are overcome. Citing "covalent bonds breaking" for simple molecules results in zero marks.

---

### Pillar 2: The Mole Concept & Calculations
*Exam Weight: ~35%. Quantitative foundation.*

Every quantitative calculation follows this three-step workflow:
$$\text{Step 1: Convert Given Quantity to Moles} \to \text{Step 2: Apply Mole Ratio from Equation} \to \text{Step 3: Convert Moles to Required Unit}$$

* **3 Essential Formulas:**
  1. $\text{Moles} = \frac{\text{Mass in grams}}{\text{Molar Mass from Periodic Table}}$
  2. $\text{Moles (Gas at r.t.p.)} = \frac{\text{Volume in }\text{dm}^3}{24\text{ dm}^3}$ *(Note: Divide $\text{cm}^3$ by $1000$ to get $\text{dm}^3$)*
  3. $\text{Moles (Solution)} = \text{Concentration } (\text{mol/dm}^3) \times \text{Volume } (\text{dm}^3)$
* **Limiting Reactants:** The reactant that yields the smallest theoretical amount of product limits the reaction. All subsequent yield calculations must be derived from this limiting reagent.

---

### Pillar 3: Acids, Bases & Salt Preparation
*Exam Weight: ~25%. High procedural consistency.*

* **The 3 Acid Reactions:**
  1. $\text{Acid} + \text{Metal} \to \text{Salt} + \text{Hydrogen Gas } (H_2)$ *(Test: Lighted splint extinguishes with a 'pop')*
  2. $\text{Acid} + \text{Carbonate} \to \text{Salt} + \text{Water} + \text{Carbon Dioxide } (CO_2)$ *(Test: White precipitate formed in limewater)*
  3. $\text{Acid} + \text{Base} \to \text{Salt} + \text{Water}$
* **Salt Preparation Method Selection:**
  * **Soluble SPA Salt** (Sodium, Potassium, Ammonium): Use **Titration** (Burette + Pipette + Indicator).
  * **Soluble Non-SPA Salt:** Use **Excess Insoluble Base/Carbonate added to Acid**, followed by filtration and crystallisation.
  * **Insoluble Salt** (e.g., $\text{BaSO}_4, \text{AgCl}, \text{PbSO}_4$): Use **Precipitation** (mix two soluble solutions, filter residue, wash with distilled water, dry).

---

### Pillar 4: Metals & Redox
*Exam Weight: ~15%. Pattern-based questions.*

* **Reactivity Series (Descending):**
  $$\text{K} > \text{Na} > \text{Ca} > \text{Mg} > \text{Al} > \text{Zn} > \text{Fe} > \text{Pb} > \text{Cu} > \text{Ag}$$
  * A more reactive metal displaces a less reactive metal from its aqueous salt solution.
* **Redox Indicators to Know:**
  * **Acidified Potassium Manganate(VII) ($\text{KMnO}_4$):** Powerful oxidising agent. Color change: **Purple to Colourless**.
  * **Aqueous Potassium Iodide ($\text{KI}$):** Powerful reducing agent. Color change: **Colourless to Brown**.

---

## 5-Minute Evening Review Protocol

1. **Math:** Select one question from today's work. Ask: *"What is the opening algebraic step for this problem, and where is the trap?"*
2. **Chemistry:** Review one explanation answer. Check for these four mandatory phrases:
   - *"Electrostatic forces between ions"*
   - *"Weak intermolecular forces between molecules"*
   - *"Mobile ions"*
   - *"Delocalised electrons"*