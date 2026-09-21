# A Parent's Fast-Track Master Guide to Sec 3 Integrated Mathematics
### Demystifying the 13 River Valley High School IP Exam Topics for Parents
*Goal: Understand the core mechanics, why kids get stuck, and how to spot-check homework in under 5 minutes.*

---

## The Big Picture: What Happened to Math in Sec 3?
In Primary School and lower secondary, math was mostly **arithmetic and steps** (calculate a number, find an angle, solve for $x$). 

In Sec 3 IP (River Valley), math becomes **structural and conditional**:
- It is no longer about finding a number like $x = 5$; it is about proving *why* a curve never touches a line, finding *ranges* of possibilities, and translating non-linear real-world behavior into straight lines.
- **The Good News:** Out of the 13 topics, none require genius-level intuition. They are **pattern-recognition protocols**. If Yun Zhe spots the "trigger keyword," the subsequent 4 steps are almost always identical.

Here is your executive summary of all 13 topics, divided into the 3 exam zones.

---

# Zone 1: Advanced Algebra & Functions (Topics 1 – 6)
*Total Exam Weight: ~45%. If he masters this zone, he is already on the doorstep of passing.*

---

### Topic 1: Indices & Surds
* **In Plain English:** 
  - **Surds** are simply square roots that don't compute to whole numbers (like $\sqrt{2}$ or $\sqrt{7}$). Because they have infinite decimals, mathematicians demand they stay as exact symbols.
  - **The Golden Rule:** You are never allowed to leave a square root sitting in the bottom (denominator) of a fraction. 
* **The Routine He Must Do:**
  - **Rationalising:** Multiply top and bottom by the "conjugate partner". If the bottom is $(3 + \sqrt{5})$, multiply top and bottom by $(3 - \sqrt{5})$. Because of the identity $(a+b)(a-b) = a^2 - b^2$, the square root vanishes into a clean integer ($3^2 - 5 = 4$).
  - **Hidden Quadratics in Powers:** Equations like $2^{2x} - 5(2^x) + 4 = 0$. He must let $u = 2^x$, turn it into $u^2 - 5u + 4 = 0$, solve for $u = 1$ or $4$, then translate back to $x = 0$ or $2$.
* **Parent Spot-Check Question:**
  > *"Show me your final answer. Is there any $\sqrt{\phantom{x}}$ symbol left in the bottom of your fraction? If there is, you haven't finished the question."*

---

### Topic 2: Logarithmic & Exponential Functions
* **In Plain English:** 
  - A logarithm is simply asking: *"What power do I need to raise this base to in order to get that number?"* 
  - Example: $\log_{10}(1000) = 3$ because $10^3 = 1000$.
* **The Routine He Must Do:**
  - **Change of Base:** Most calculators only have Base 10 ($\lg$) and Base $e$ ($\ln$). If an exam asks for $\log_2 7$, he must immediately write $\frac{\lg 7}{\lg 2}$.
  - **The "Power Drop" Rule:** $\log(x^k) = k \log x$. This allows him to pull exponents down to ground level so they can be solved like normal numbers.
* **The Pitfall That Fails Students:**
  - **Negative arguments are illegal.** You cannot take the log of $0$ or a negative number. When he solves a quadratic with logs and gets $x = 3$ and $x = -5$, he **must** cross out $x = -5$ and write *"reject"*. If he forgets, he loses 1 to 2 accuracy marks every time.
* **Parent Spot-Check Question:**
  > *"Did you get two answers for $x$? Did you check if either one makes any bracket inside the $\log(\dots)$ negative or zero?"*

---

### Topic 3: Quadratic Functions & Equations
* **In Plain English:** 
  - A quadratic is a U-shaped or hill-shaped curve ($y = ax^2 + bx + c$).
  - Two things are always tested: **turning points** (the peak or trough) and **intersections** (how many times a line cuts the curve).
* **The Routine He Must Do:**
  - **Completing the Square:** Turning $ax^2 + bx + c$ into $a(x - h)^2 + k$. Why? Because $(x - h)^2$ is at minimum zero, meaning the curve's peak or trough is instantly revealed at coordinates $(h, k)$.
  - **The Discriminant ($b^2 - 4ac$):**
    - $> 0 \implies$ Cuts line twice (2 real solutions).
    - $= 0 \implies$ Touches line gently (1 solution, tangent).
    - $< 0 \implies$ Never touches (0 real solutions).
* **The Secret Trap:**
  - Question says: *"The curve lies entirely above the $x$-axis."*
  - Translates to: It smiles ($a > 0$) AND it never touches the axis ($b^2 - 4ac < 0$). Students often write $> 0$ for both by mistake.
* **Parent Spot-Check Question:**
  > *"When the question says 'tangent' or 'touches at one point', what formula do you write first?"* (Correct answer: $b^2 - 4ac = 0$).

---

### Topic 4: Quadratic & Non-Linear Inequalities
* **In Plain English:** 
  - Instead of solving where a curve equals zero, we want to know when it is *above* ($> 0$) or *below* ($< 0$) sea level.
* **The Routine He Must Do:**
  1. Move everything to one side so zero is on the right: $x^2 - 5x + 6 < 0$.
  2. Factorise: $(x - 2)(x - 3) < 0$.
  3. Draw a tiny quick sketch of a smiling parabola cutting the axis at 2 and 3.
  4. If it asks for $< 0$ (below axis), the answer is the sandwich in between: $2 < x < 3$.
  5. If it asks for $> 0$ (above axis), the answer is the two wings outside: $x < 2$ or $x > 3$.
* **The Secret Trap:**
  - Students try to treat inequalities like equations and write $x - 2 < 0 \implies x < 2$. That is completely invalid. He **must** draw the parabola or sign table.
* **Parent Spot-Check Question:**
  > *"Show me your working. Did you draw the little U-curve sketch to pick your inequality range?"*

---

### Topic 5: Polynomials, Remainder & Factor Theorems
* **In Plain English:** 
  - A polynomial is an algebraic expression with powers of $x^3, x^4$, etc.
  - Think of it like long division from primary school, but with algebraic letters instead of numbers.
* **The Routine He Must Do:**
  - **Remainder Theorem:** If you divide $f(x)$ by $(x - 2)$, you don't need to do 5 minutes of long division. Just plug in $x = 2$. Whatever number comes out is the exact remainder: $R = f(2)$.
  - **Factor Theorem:** If $f(2) = 0$, that means there is zero remainder, so $(x - 2)$ is a perfect factor!
  - **Full Factorisation:** Use the factor theorem to find the first factor $(x - c)$, do long division to get the remaining quadratic, then factorise that quadratic completely.
* **Parent Spot-Check Question:**
  > *"Did you leave your cubic answer as $(x - 1)(x^2 - 4)$? Check if that second bracket can still be broken down further!"* (It can: $(x-1)(x-2)(x+2)$).

---

### Topic 6: Partial Fractions & Binomial Theorem
* **In Plain English:** 
  - **Partial Fractions:** In primary school, you took $\frac{1}{2} + \frac{1}{3}$ and combined them into $\frac{5}{6}$. Partial fractions is the exact reverse: taking a big complicated fraction and splitting it back into baby fractions.
  - **Binomial Theorem:** A systematic shortcut to expand things like $(2 + 3x)^8$ without multiplying 8 brackets by hand.
* **The Routine He Must Do:**
  - For Partial Fractions: Check the bottom factors:
    - Linear: $\frac{A}{x+1}$
    - Repeated: $\frac{B}{(x+1)^2}$
    - Quadratic: $\frac{Cx+D}{x^2+4}$
  - For Binomial: Use the formula for the General Term: $T_{r+1} = \binom{n}{r} a^{n-r} b^r$.
* **The Secret Trap:**
  - If the top power is equal to or bigger than the bottom power (e.g., $\frac{x^2+1}{x^2-3}$), he **cannot** split it directly. He must do polynomial long division first to pull out the whole number.
* **Parent Spot-Check Question:**
  > *"Is the power on top greater than or equal to the power on the bottom? If yes, did you do long division first?"*

---

# Zone 2: Trigonometry & Circular Measure (Topics 7 – 10)
*Total Exam Weight: ~30%. High method-mark yield; very mechanical.*

---

### Topic 7: Circular Measure (Radian System)
* **In Plain English:** 
  - Degrees ($360^\circ$) are an arbitrary human invention (based on days in a year). **Radians** are the natural language of circles, where an angle is measured by the ratio of the arc length to the radius. $\pi \text{ radians} = 180^\circ$.
* **The 3 Formulas (Printed on formula sheet, but must be instant):**
  1. Arc Length: $s = r\theta$
  2. Sector Area (pizza slice): $A = \frac{1}{2}r^2\theta$
  3. Segment Area (crust piece): Area of sector minus area of triangle $= \frac{1}{2}r^2(\theta - \sin\theta)$
* **The Number 1 Source of Lost Marks in RVHS:**
  - His scientific calculator was left in **DEG** (Degree) mode from physics/lower-sec math instead of **RAD** mode. Every subsequent calculation becomes mathematically meaningless.
* **Parent Spot-Check Question:**
  > *"Look at your calculator screen right now. Does it show a tiny 'R' at the top, or a 'D'?"*

---

### Topic 8: Trigonometric Functions & Graphs
* **In Plain English:** 
  - Sound waves, heartbeats, and tides move in repeating sinusoidal waves. This topic tests reading and sketching those waves: $y = a\sin(bx) + c$.
* **The 3 Numbers He Reads Off Instantly:**
  - **$a$ (Amplitude):** How tall the wave is from the center line. (e.g., $3\sin x \implies$ peaks at $+3$, troughs at $-3$).
  - **$b$ (Frequency / Period):** How many full cycles fit into $360^\circ$ or $2\pi$. Period $= \frac{360^\circ}{b}$ or $\frac{2\pi}{b}$.
  - **$c$ (Centerline shift):** Shifts the whole wave up or down.
* **Parent Spot-Check Question:**
  > *"If the question gives $y = 4\cos(2x) - 1$, what is the highest point the graph can ever reach?"* (Answer: $+4 - 1 = 3$).

---

### Topic 9: Trigonometric Equations
* **In Plain English:** 
  - Finding the angles where a trig wave hits a specific value, e.g., $\sin(2x) = -0.5$.
  - Because circles repeat infinitely, there are usually multiple valid answers in a range (like $0^\circ$ to $360^\circ$).
* **The 3-Step ASTC Protocol:**
  1. **Basic Reference Angle ($\alpha$):** Ignore the negative sign! Press $\sin^{-1}(+0.5) = 30^\circ$.
  2. **Quadrant Check (ASTC):** Where is sine negative? In Quadrants 3 and 4 (T and C).
  3. **Angle Extraction:**
     - Quad 3: $180^\circ + 30^\circ = 210^\circ$
     - Quad 4: $360^\circ - 30^\circ = 330^\circ$
* **The Secret Trap:**
  - Never divide both sides by $\sin x$ or $\cos x$ if an equation has them on both sides (e.g., $2\sin x \cos x = \sin x$). Dividing kills the $x = 0$ solutions. He must move everything to the left and **factorise**.
* **Parent Spot-Check Question:**
  > *"Did you ignore the minus sign when calculating the acute reference angle on your calculator?"*

---

### Topic 10: Trigonometric Identities & Proofs
* **In Plain English:** 
  - Algebraic puzzles showing that two seemingly different trig expressions are identical. 
  - Example: Prove that $\tan\theta + \cot\theta = \sec\theta \csc\theta$.
* **The Strategy:**
  - Never move terms across the equals sign. Pick the messier side (usually Left-Hand Side, LHS) and manipulate it step-by-step until it matches the Right-Hand Side (RHS).
  - **Default Rescue Move:** If completely stuck, convert everything into $\sin\theta$ and $\cos\theta$ (since $\tan\theta = \frac{\sin\theta}{\cos\theta}$, $\sec\theta = \frac{1}{\cos\theta}$, etc.) and combine the fractions using a common denominator.
* **Parent Spot-Check Question:**
  > *"Did you work on only ONE side of the identity, or did you accidentally move terms across the '=' sign?"* (Moving terms across the equals sign loses all method marks in RV marking schemes).

---

# Zone 3: Geometry & Linear Transformations (Topics 11 – 13)
*Total Exam Weight: ~25%. Highly structured; easiest marks to secure.*

---

### Topic 11: Coordinate Geometry of Straight Lines
* **In Plain English:** 
  - Graphing geometry on an $(x, y)$ grid.
* **The 3 Classic Question Types:**
  1. **Parallel Lines:** Gradients are identical ($m_1 = m_2$).
  2. **Perpendicular Lines:** Gradients are negative reciprocals ($m_1 \cdot m_2 = -1$). E.g., if one line has gradient $\frac{2}{3}$, the perpendicular line has gradient $-\frac{3}{2}$.
  3. **Perpendicular Bisector (3-Step Routine):**
     - Step 1: Find the midpoint of $A$ and $B$.
     - Step 2: Find the gradient of line $AB$, then flip it to get $m_{\perp} = -1/m$.
     - Step 3: Use the point-slope formula $y - y_1 = m(x - x_1)$ using the midpoint.
* **Parent Spot-Check Question:**
  > *"What is the gradient of a line perpendicular to $m = -\frac{1}{4}$?"* (Answer: $+4$).

---

### Topic 12: Coordinate Geometry of Circles
* **In Plain English:** 
  - Writing an algebraic equation whose solution points form a perfect circle.
* **The Core Equation:**
  $$(x - a)^2 + (y - b)^2 = r^2$$
  - The center is at $(a, b)$ — notice the signs flip!
  - The radius is $r$ — notice the right side is $r^2$, so take the square root!
* **The Tangent to a Circle Question:**
  - A tangent line touches the circle at one point. The radius connecting to that point is always at a **$90^\circ$ right angle** to the tangent. 
  - So: Find the gradient of the radius $\to$ flip it for the tangent gradient ($m_{\text{tangent}} = -1/m_{\text{radius}}$) $\to$ write the line equation.
* **Parent Spot-Check Question:**
  > *"If the equation says $(x - 3)^2 + (y + 4)^2 = 49$, what is the center and radius?"* (Center: $(3, -4)$; Radius: $\sqrt{49} = 7$, not 49).

---

### Topic 13: Linear Law ($Y = mX + c$)
* **In Plain English:** 
  - In science and engineering, real-world data curves (like population growth $y = ab^x$). Curves are hard to read and analyze on paper.
  - **Linear Law** is an algebraic trick where you take logarithms or divide variables to force a curved graph into a dead-straight line ($Y = mX + c$). Once straight, you can read the gradient and intercept easily.
* **The Two Universal Conversions:**
  1. **Power Equation ($y = ax^b$):** Take $\lg$ of both sides $\implies \lg y = b(\lg x) + \lg a$.
     - Big $Y = \lg y$
     - Big $X = \lg x$
     - Gradient $m = b$
     - Vertical Intercept $c = \lg a \implies a = 10^c$.
  2. **Exponential Equation ($y = ab^x$):** Take $\lg$ of both sides $\implies \lg y = (\lg b)x + \lg a$.
     - Big $Y = \lg y$
     - Big $X = x$
     - Gradient $m = \lg b$
     - Vertical Intercept $c = \lg a$.
* **Parent Spot-Check Question:**
  > *"When you found the vertical intercept $c$, did you remember that $c = \lg a$, meaning you have to do $10^c$ to get the real constant $a$?"*

---

## The 3-Step Daily Audit You Can Run With Yun Zhe
You do not need to sit and do algebra with him. Dedicate **10 minutes each evening** to this conversation:

1. **"Pick 2 topics from the 13."** (Follow the map: do Zone 1 first, then Zone 2, then Zone 3).
2. **"Show me 2 questions you got wrong on this in your Term 1–3 papers."**
3. **"Explain to me out loud why your first step works."**
   - If he says *"I don't know, I just copied the formula,"* he will fail that variation in the exam.
   - If he explains *"Because it said perpendicular bisector, so I had to find the midpoint first,"* the concept is locked into his brain.