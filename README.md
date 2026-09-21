# RVHS Sec 3 IP Study Command Center 🎓
### Integrated Mathematics & Pure Chemistry Fast-Track Personal Study Suite

Designed specifically for River Valley High School (RVHS) Integrated Programme (IP) students, synthesizing the master guides for **Sec 3 Integrated Mathematics** (13 Topics across 3 Zones) and **Pure Chemistry** (8 Topics across 4 Pillars).

---

## 📱 Mobile-Friendly Study Anywhere
This application is designed with mobile-first responsiveness:
- **Responsive Touch Navigation**: Horizontal swipeable tab bar for instant switching between Math, Chemistry, Lab Tools, Active Recall, Quizzes, and Daily Audits.
- **Collapsible Topics & Tap-to-Reveal**: Tap on any topic card to view Plain English breakdowns, standard routines, and 5-minute spot-check questions with tap-to-reveal marking criteria.
- **Interactive Lab Simulators on Mobile**: All interactive tools (Salt Decision Tree, ASTC Trig Solver, Mole Concept Assembly Line, Quadratic Discriminant Visualizer, and Reactivity Ladder) automatically scale to fit phone viewports.
- **Offline & Local Storage**: Mastery checkmarks and streak trackers persist directly on your device via `localStorage`.

---

## 🚀 Key Features

### 1. Integrated Mathematics (13 Topics in 3 Zones)
- **Zone 1: Advanced Algebra & Functions (~45% exam weight)**
  - *Topic 1*: Indices & Surds (Conjugate rationalisation, hidden quadratics $u = 2^x$)
  - *Topic 2*: Logarithmic & Exponential Functions (Change of base, power drop, illegal argument rejection)
  - *Topic 3*: Quadratic Functions & Equations (Completing the square, discriminant $b^2 - 4ac$, "lies entirely above x-axis" condition)
  - *Topic 4*: Quadratic & Non-Linear Inequalities (5-step parabola sketch, sandwich vs wings)
  - *Topic 5*: Polynomials, Remainder & Factor Theorems ($R = f(c)$, factor testing, full cubic factorisation)
  - *Topic 6*: Partial Fractions & Binomial Theorem (Linear, repeated, quadratic denominators; improper fraction division check, $T_{r+1} = \binom{n}{r} a^{n-r} b^r$)
- **Zone 2: Trigonometry & Circular Measure (~30% exam weight)**
  - *Topic 7*: Circular Measure ($s = r\theta, A = \frac{1}{2}r^2\theta$, segment area, **RAD vs DEG calculator alert**)
  - *Topic 8*: Trigonometric Functions & Graphs ($y = a\sin(bx)+c$: amplitude, period $2\pi/b$, midline shift)
  - *Topic 9*: Trigonometric Equations (3-step ASTC protocol, acute reference angle $\alpha$, never divide by $\sin x$)
  - *Topic 10*: Trigonometric Identities & Proofs (LHS to RHS single-sided proofs, $\sin/\cos$ fallback)
- **Zone 3: Geometry & Linear Transformations (~25% exam weight)**
  - *Topic 11*: Coordinate Geometry of Straight Lines (Parallel $m_1=m_2$, perpendicular $m_1 \cdot m_2 = -1$, perpendicular bisector routine)
  - *Topic 12*: Coordinate Geometry of Circles ($(x-a)^2 + (y-b)^2 = r^2$, center $(a,b)$, radius $r = \sqrt{r^2}$, tangent perpendicular to radius)
  - *Topic 13*: Linear Law ($Y = mX + c$, Power $y = ax^b \to \lg y = b\lg x + \lg a$, Exponential $y = ab^x \to \lg y = (\lg b)x + \lg a$)

### 2. Pure Chemistry (8 Topics in 4 Pillars)
- **Pillar 1: Bonding & Structure (~30% weight)**
  - *Atomic Structure & Happy Octet*: Metal cations (+) vs non-metal anions (-)
  - *The 4 Great Structures*: Cambridge exact keyword matrix for Giant Ionic, Simple Covalent, Giant Covalent, and Giant Metallic. Eliminates the fatal trap of writing *"covalent bonds break"* when boiling water!
- **Pillar 2: The Calculation Engine — The Mole Concept (~35% weight)**
  - *The Mole Concept*: Universal 3-Step Assembly Line (Given $\to$ Moles $\to$ Stoichiometric Ratio $\to$ Target Unit). Molar gas volume with $cm^3 \to dm^3$ trap detector.
  - *Limiting Reactants & Yield*: The Cheese Toastie Principle.
- **Pillar 3: Chemical Reactions — Acids, Bases & Salts (~25% weight)**
  - *3 Core Reactions of Acids*: Acid + Metal ($H_2$ pop test), Acid + Carbonate ($CO_2$ limewater test), Acid + Base. Traps unreactive Cu/Ag!
  - *Salt Preparation Decision Tree*: Interactive flowchart choosing between **Titration**, **Excess Insoluble Base**, or **Precipitation** using SPA solubility rules.
- **Pillar 4: Metals, Reactivity & Redox (~15% weight)**
  - *Reactivity Series*: Potassium to Silver displacement simulator. Rusting conditions ($O_2 + H_2O$).
  - *Redox Chemistry*: OIL RIG, Acidified $KMnO_4$ (purple to colourless), Potassium Iodide (colourless to brown).

### 3. Interactive Lab Tools
1. **Salt Preparation Decision Tree Simulator**: Pick any target salt (e.g. $CuSO_4, NaCl, BaSO_4$) to get step-by-step Cambridge-approved lab procedures.
2. **3-Step ASTC Trig Equation Solver**: Interactive 4-quadrant grid displaying active quadrants, acute angle $\alpha$, and DEG/RAD mode toggles.
3. **Mole Calculation Engine**: Converts Mass, Gas Volume (with $cm^3/dm^3$ trap warning), and Solution concentrations, plus a Limiting Reactant calculator.
4. **Quadratic Discriminant & Curve Visualizer**: Live responsive parabola graph with sliders for $a, b, c$, instantly flagging when a curve lies entirely above the x-axis ($a > 0$ and $b^2 - 4ac < 0$).
5. **Reactivity Series Ladder**: Metal displacement predictor with color changes and observations.

### 4. Active Recall & Exam Trap Quizzes
- **Flashcard Deck**: 3D flip cards with active recall questions, formulas, and examiner tips.
- **Spot the Trap Quiz**: Interactive scenario questions testing the exact traps that cost RVHS students method and accuracy marks.
- **Nightly Audit Checklist**: Integrated 10-minute Math and 5-minute Chemistry verbal audit with countdown timers and daily streak tracking.

---

## 💻 Local Development Setup

```bash
# Clone the repository
git clone https://github.com/anthonytan6661/ip-studies.git

# Navigate into the project directory
cd ip-studies

# Install dependencies
npm install

# Start development server
npm run dev

# Access the site on your phone:
# When running `npm run dev -- --host`, Vite will output a local network URL
# (e.g. http://192.168.x.x:5173) that you can open directly on your mobile browser!
```

---

## 🛠️ Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS with custom academic palette
- **Math & Science Typography**: KaTeX formula engine
- **Icons**: Lucide React
- **Design System**: Mobile-first responsive layout with Academic Command aesthetics
