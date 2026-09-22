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
- **Zone 1: Core Algebra & Functions (~40% exam weight)**
  - *Topic 1*: Quadratic Equations, Graphs & Completing the Square (Vertex form $y = a(x-h)^2+k$, symmetry axis $x=h$, sign flip trap)
  - *Topic 2*: Linear & Quadratic Inequalities and Simultaneous Equations (Parabola sandwich vs wings, linear-quadratic substitution)
  - *Topic 3*: Nature of Roots & The Discriminant ($b^2 - 4ac > 0, = 0, < 0$; tangent condition; "curve lies entirely above x-axis" $\implies a > 0, b^2-4ac < 0$)
  - *Topic 4*: Exponential & Logarithmic Functions (Change of base, power drop law, strict non-positive argument rejection)
  - *Topic 5*: Functions, Graphs & Modulus Functions (Domain & range, modulus graph reflection $y = |f(x)|$ across x-axis, extraneous root checks)
- **Zone 2: Trigonometry, Circular Measure & 3D Bearings (~35% exam weight)**
  - *Topic 6*: Trigonometric Ratios, Triangle Rules & 3D Bearings (Area $\frac{1}{2}ab\sin C$, Sine Rule with ambiguous case, Cosine Rule, 3-figure bearings from North, 3D heights)
  - *Topic 7*: Circular Measure / Radian System ($s = r\theta, A = \frac{1}{2}r^2\theta$, segment area, **mandatory RAD vs DEG calculator check**)
  - *Topic 8*: Trigonometric Functions & Periodic Graphs ($y = a\sin(bx)+c$: amplitude $|a|$, period $2\pi/b$, midline shift $c$)
  - *Topic 9*: Trigonometric Equations & Simple Identities (3-step ASTC quadrant protocol, acute reference angle $\alpha$, factorisation vs division trap)
  - *Topic 10*: Further Trigonometric Identities, Double Angles & $R$-Formula (Addition & double angles, $R$-formula, LHS to RHS single-sided proof rule)
- **Zone 3: Polynomials, Partial Fractions & Coordinate Geometry (~25% exam weight)**
  - *Topic 11*: Polynomials, Remainder & Factor Theorems ($R = f(b/a)$, factor testing, polynomial long division, complete quadratic factorisation)
  - *Topic 12*: Partial Fractions (Distinct linear, repeated linear, irreducible quadratic; improper fraction division check)
  - *Topic 13*: Coordinate Geometry of Straight Lines (Parallel $m_1=m_2$, perpendicular $m_1 \cdot m_2 = -1$, 3-step perpendicular bisector routine)

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
