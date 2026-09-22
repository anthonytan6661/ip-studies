// Comprehensive Quiz Dataset with Full Worked Solutions & Marking Traps
export const quizQuestions = [
  {
    "id": "q-m1",
    "subject": "math",
    "topic": "Topic 1: Quadratics & Completing Square",
    "question": "Completing the square on $y = -2x^2 + 12x - 11$ yields $y = -2(x - 3)^2 + 7$. What are the coordinates and nature of the turning point?",
    "options": [
      "Maximum turning point at (3, 7)",
      "Minimum turning point at (3, 7)",
      "Maximum turning point at (-3, 7)",
      "Minimum turning point at (-3, -11)"
    ],
    "correctAnswer": 0,
    "explanation": "Since the coefficient of $(x - 3)^2$ is negative ($-2$), the parabola opens downward (inverted U), so the curve attains a MAXIMUM value of 7 when $(x - 3) = 0$ (i.e. $x = +3$). The turning point is $(3, 7)$. Watch out for the sign flip: $(x - 3)$ means $x = +3$!",
    "solution": {
      "formulaSetup": "Standard Vertex Form: $y = a(x - h)^2 + k$, where turning point (vertex) is $(h, k)$. If $a < 0$, the parabola curves downward (inverted U) and achieves a maximum. If $a > 0$, it curves upward and achieves a minimum.",
      "steps": [
        "1. Write down the completed square form: $$y = -2(x - 3)^2 + 7$$",
        "2. Identify the vertex form parameters: $$a = -2, \\quad h = 3, \\quad k = 7$$",
        "3. Bracket Nullification: Because $(x - 3)^2 \\ge 0$ for all real $x$, the squared term reaches its minimum value of $0$ when the bracket is nullified: $$(x - 3) = 0 \\implies x = +3$$",
        "4. Nature Evaluation: Because the leading coefficient is negative ($a = -2 < 0$), multiplying $(x - 3)^2$ by $-2$ ensures: $$-2(x - 3)^2 \\le 0 \\quad \\text{for all } x \\in \\mathbb{R}$$",
        "5. Thus, the function achieves its MAXIMUM value when the bracket is zero: $$y_{\\max} = -2(3 - 3)^2 + 7 = -2(0)^2 + 7 = 7$$",
        "6. Conclude the vertex coordinates and curve nature: Maximum turning point at $(3, 7)$."
      ],
      "finalAnswer": "\\mathbf{Maximum\\ turning\\ point\\ at\\ (3, 7)}",
      "commonTrap": "Students frequently see $(x - 3)$ and write $-3$ for the $x$-coordinate. The standard form is $(x - h)$, so bracket nullification $(x - 3 = 0)$ flips the sign to $x = +3$. Furthermore, never confuse $a = -2$ with a minimum; a negative leading coefficient ($a < 0$) guarantees a maximum crest.",
      "step1": "Standard Vertex Form: $y = a(x - h)^2 + k$, where turning point (vertex) is $(h, k)$. If $a < 0$, the parabola curves downward (inverted U) and achieves a maximum. If $a > 0$, it curves upward and achieves a minimum.",
      "step2": [
        "1. Write down the completed square form: $$y = -2(x - 3)^2 + 7$$",
        "2. Identify the vertex form parameters: $$a = -2, \\quad h = 3, \\quad k = 7$$",
        "3. Bracket Nullification: Because $(x - 3)^2 \\ge 0$ for all real $x$, the squared term reaches its minimum value of $0$ when the bracket is nullified: $$(x - 3) = 0 \\implies x = +3$$",
        "4. Nature Evaluation: Because the leading coefficient is negative ($a = -2 < 0$), multiplying $(x - 3)^2$ by $-2$ ensures: $$-2(x - 3)^2 \\le 0 \\quad \\text{for all } x \\in \\mathbb{R}$$",
        "5. Thus, the function achieves its MAXIMUM value when the bracket is zero: $$y_{\\max} = -2(3 - 3)^2 + 7 = -2(0)^2 + 7 = 7$$",
        "6. Conclude the vertex coordinates and curve nature: Maximum turning point at $(3, 7)$."
      ],
      "step3": "\\mathbf{Maximum\\ turning\\ point\\ at\\ (3, 7)}",
      "trap": "Students frequently see $(x - 3)$ and write $-3$ for the $x$-coordinate. The standard form is $(x - h)$, so bracket nullification $(x - 3 = 0)$ flips the sign to $x = +3$. Furthermore, never confuse $a = -2$ with a minimum; a negative leading coefficient ($a < 0$) guarantees a maximum crest."
    }
  },
  {
    "id": "q-m2",
    "subject": "math",
    "topic": "Topic 2: Quadratic Inequalities",
    "question": "A student solves $(3 - x)(x + 2) > 0$. They multiply out to get $-x^2 + x + 6 > 0$, divide both sides by $-1$ to get $x^2 - x - 6 > 0$, and write $x < -2$ or $x > 3$. What is their fatal mistake?",
    "options": [
      "Dividing an inequality by -1 must reverse the inequality sign from > to <, giving (x - 3)(x + 2) < 0 and solution -2 < x < 3.",
      "They should have factorised as (x + 3)(x - 2) instead.",
      "A quadratic inequality cannot be divided by any number.",
      "The solution has no real values."
    ],
    "correctAnswer": 0,
    "explanation": "Golden Rule of Inequalities: When dividing or multiplying both sides by a negative number, the inequality sign MUST FLIP! $-x^2 + x + 6 > 0$ becomes $x^2 - x - 6 < 0$, so $(x - 3)(x + 2) < 0$. Sketching a smiling parabola cutting at $-2$ and $3$ shows the solution is the sandwich interval $-2 < x < 3$.",
    "solution": {
      "formulaSetup": "Golden Rule of Inequalities: When dividing or multiplying both sides of an inequality by a negative number, the direction of the inequality sign MUST reverse ($> \\iff <$).",
      "steps": [
        "1. Expand the given inequality: $$(3 - x)(x + 2) = -x^2 + x + 6 > 0$$",
        "2. Multiply or divide both sides by $-1$ to make the $x^2$ coefficient positive (reversing the inequality sign): $$x^2 - x - 6 < 0$$",
        "3. Factorise into linear brackets: $$(x - 3)(x + 2) < 0$$",
        "4. Determine the critical values (roots where $y = 0$): $$x = -2 \\quad \\text{and} \\quad x = 3$$",
        "5. Sketch an upward-opening parabola ($a = 1 > 0$). The region strictly below the $x$-axis ($< 0$) lies between the roots."
      ],
      "finalAnswer": "\\mathbf{-2 < x < 3}",
      "commonTrap": "Dividing by $-1$ on line 2 without reversing $>$ to $<$ leaves $x^2 - x - 6 > 0$, producing the false split-interval $x < -2 \\text{ or } x > 3$. Method marks are lost immediately on that specific step.",
      "step1": "Golden Rule of Inequalities: When dividing or multiplying both sides of an inequality by a negative number, the direction of the inequality sign MUST reverse ($> \\iff <$).",
      "step2": [
        "1. Expand the given inequality: $$(3 - x)(x + 2) = -x^2 + x + 6 > 0$$",
        "2. Multiply or divide both sides by $-1$ to make the $x^2$ coefficient positive (reversing the inequality sign): $$x^2 - x - 6 < 0$$",
        "3. Factorise into linear brackets: $$(x - 3)(x + 2) < 0$$",
        "4. Determine the critical values (roots where $y = 0$): $$x = -2 \\quad \\text{and} \\quad x = 3$$",
        "5. Sketch an upward-opening parabola ($a = 1 > 0$). The region strictly below the $x$-axis ($< 0$) lies between the roots."
      ],
      "step3": "\\mathbf{-2 < x < 3}",
      "trap": "Dividing by $-1$ on line 2 without reversing $>$ to $<$ leaves $x^2 - x - 6 > 0$, producing the false split-interval $x < -2 \\text{ or } x > 3$. Method marks are lost immediately on that specific step."
    }
  },
  {
    "id": "q-m3",
    "subject": "math",
    "topic": "Topic 2: Simultaneous Equations",
    "question": "Solving the simultaneous equations $y = 2x - 1$ and $x^2 + y^2 = 5$ gives $x = 2$ and $x = -0.4$. What must the student write to receive full marks?",
    "options": [
      "Stop at x = 2 and x = -0.4 because x is the primary independent variable.",
      "Substitute both x values back into y = 2x - 1 to find the matching y coordinates: (2, 3) and (-0.4, -1.8).",
      "Add the two x values together to calculate the midpoint.",
      "Reject x = -0.4 because coordinates cannot be negative."
    ],
    "correctAnswer": 1,
    "explanation": "Exam slip! A simultaneous system in two variables requires solving for BOTH $x$ and $y$ pairs. You must substitute each $x$ back into the linear equation: for $x = 2$, $y = 2(2) - 1 = 3$; for $x = -0.4$, $y = 2(-0.4) - 1 = -1.8$. The solutions are the coordinate pairs $(2, 3)$ and $(-0.4, -1.8)$.",
    "solution": {
      "formulaSetup": "Substitution method for non-linear systems: Substitute the linear relation $y = 2x - 1$ into the quadratic equation $x^2 + y^2 = 5$, solve for $x$, and evaluate matching $y$-values for every $x$.",
      "steps": [
        "1. Substitute $y = 2x - 1$ into $x^2 + y^2 = 5$: $$x^2 + (2x - 1)^2 = 5$$",
        "2. Expand and simplify to standard quadratic form: $$x^2 + (4x^2 - 4x + 1) = 5 \\implies 5x^2 - 4x - 4 = 0$$",
        "3. Factorise or solve: $$(x - 2)(5x + 2) = 0 \\implies x_1 = 2, \\quad x_2 = -0.4$$",
        "4. Substitute $x_1 = 2$ into $y = 2x - 1$: $$y_1 = 2(2) - 1 = 3$$",
        "5. Substitute $x_2 = -0.4$ into $y = 2x - 1$: $$y_2 = 2(-0.4) - 1 = -0.8 - 1 = -1.8$$"
      ],
      "finalAnswer": "\\mathbf{(2, 3) \\quad \\text{and} \\quad (-0.4, -1.8)}",
      "commonTrap": "Stopping at $x = 2$ and $x = -0.4$ without calculating the corresponding $y$-values. Simultaneous equations are intersection points of geometric curves; incomplete coordinate pairs lose all accuracy A-marks.",
      "step1": "Substitution method for non-linear systems: Substitute the linear relation $y = 2x - 1$ into the quadratic equation $x^2 + y^2 = 5$, solve for $x$, and evaluate matching $y$-values for every $x$.",
      "step2": [
        "1. Substitute $y = 2x - 1$ into $x^2 + y^2 = 5$: $$x^2 + (2x - 1)^2 = 5$$",
        "2. Expand and simplify to standard quadratic form: $$x^2 + (4x^2 - 4x + 1) = 5 \\implies 5x^2 - 4x - 4 = 0$$",
        "3. Factorise or solve: $$(x - 2)(5x + 2) = 0 \\implies x_1 = 2, \\quad x_2 = -0.4$$",
        "4. Substitute $x_1 = 2$ into $y = 2x - 1$: $$y_1 = 2(2) - 1 = 3$$",
        "5. Substitute $x_2 = -0.4$ into $y = 2x - 1$: $$y_2 = 2(-0.4) - 1 = -0.8 - 1 = -1.8$$"
      ],
      "step3": "\\mathbf{(2, 3) \\quad \\text{and} \\quad (-0.4, -1.8)}",
      "trap": "Stopping at $x = 2$ and $x = -0.4$ without calculating the corresponding $y$-values. Simultaneous equations are intersection points of geometric curves; incomplete coordinate pairs lose all accuracy A-marks."
    }
  },
  {
    "id": "q-m4",
    "subject": "math",
    "topic": "Topic 3: Nature of Roots (Discriminant)",
    "question": "The question states: 'The quadratic curve $y = ax^2 + bx + c$ lies entirely above the $x$-axis.' What are the required mathematical conditions?",
    "options": [
      "a > 0 and b² - 4ac > 0",
      "a > 0 and b² - 4ac < 0",
      "a < 0 and b² - 4ac = 0",
      "a > 0 and b² - 4ac = 0"
    ],
    "correctAnswer": 1,
    "explanation": "Because the curve smiles (opens upwards), $a > 0$. Because it lies ENTIRELY above the axis, it NEVER touches or intersects the axis, meaning ZERO real roots: $b^2 - 4ac < 0$! Students frequently fall into the trap of writing $b^2 - 4ac > 0$ because of the word 'above'.",
    "solution": {
      "formulaSetup": "Geometric interpretation of discriminant: For $y = ax^2 + bx + c$ to be strictly positive for all $x \\in \\mathbb{R}$ ($y > 0$), the parabola must open upwards ($a > 0$) and have no real roots ($b^2 - 4ac < 0$).",
      "steps": [
        "1. For the curve to lie entirely above the horizontal axis, $y > 0$ for all real $x$.",
        "2. If $a < 0$, the parabola opens downwards and must eventually cross below the axis into negative infinity; hence we must have: $$a > 0$$",
        "3. Setting $ax^2 + bx + c = 0$ must yield zero real intersection points with the axis.",
        "4. In the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, zero real intersections requires: $$\\Delta = b^2 - 4ac < 0$$",
        "5. Both conditions must be satisfied concurrently: $a > 0 \\text{ and } b^2 - 4ac < 0$."
      ],
      "finalAnswer": "\\mathbf{a > 0 \\quad \\text{and} \\quad b^2 - 4ac < 0}",
      "commonTrap": "Subconsciously associating the word 'above' with the greater-than sign ($>$), writing $b^2 - 4ac > 0$. In reality, $b^2 - 4ac > 0$ means the curve intersects the axis twice, dipping below it!",
      "step1": "Geometric interpretation of discriminant: For $y = ax^2 + bx + c$ to be strictly positive for all $x \\in \\mathbb{R}$ ($y > 0$), the parabola must open upwards ($a > 0$) and have no real roots ($b^2 - 4ac < 0$).",
      "step2": [
        "1. For the curve to lie entirely above the horizontal axis, $y > 0$ for all real $x$.",
        "2. If $a < 0$, the parabola opens downwards and must eventually cross below the axis into negative infinity; hence we must have: $$a > 0$$",
        "3. Setting $ax^2 + bx + c = 0$ must yield zero real intersection points with the axis.",
        "4. In the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, zero real intersections requires: $$\\Delta = b^2 - 4ac < 0$$",
        "5. Both conditions must be satisfied concurrently: $a > 0 \\text{ and } b^2 - 4ac < 0$."
      ],
      "step3": "\\mathbf{a > 0 \\quad \\text{and} \\quad b^2 - 4ac < 0}",
      "trap": "Subconsciously associating the word 'above' with the greater-than sign ($>$), writing $b^2 - 4ac > 0$. In reality, $b^2 - 4ac > 0$ means the curve intersects the axis twice, dipping below it!"
    }
  },
  {
    "id": "q-m5",
    "subject": "math",
    "topic": "Topic 3: Tangent & Line-Curve Intersections",
    "question": "The straight line $y = 2x + k$ is tangent to the curve $y = x^2 - 4x + 7$. What equation determines the value of $k$?",
    "options": [
      "Equate 2x + k = x² - 4x + 7, simplify to x² - 6x + (7 - k) = 0, and set discriminant (-6)² - 4(1)(7 - k) = 0.",
      "Set x² - 4x + 7 = 0 and solve using the quadratic formula.",
      "Set 2x + k = 0 and substitute x = 0.",
      "Set the discriminant of x² - 4x + 7 to be greater than 0."
    ],
    "correctAnswer": 0,
    "explanation": "To find when a line is tangent to a curve, equate them to form $Ax^2 + Bx + C = 0$: $x^2 - 6x + (7 - k) = 0$. A tangent line touches at exactly 1 point (two equal real roots), so set the discriminant $D = b^2 - 4ac = 0$: $36 - 4(7 - k) = 0 \\implies 36 - 28 + 4k = 0 \\implies 4k = -8 \\implies k = -2$.",
    "solution": {
      "formulaSetup": "Tangency Condition: When a line touches a quadratic curve at exactly one point (tangent), the combined intersection equation $Ax^2 + Bx + C = 0$ has real and equal roots, meaning: $$\\Delta = B^2 - 4AC = 0$$",
      "steps": [
        "1. Equate the line and the curve: $$x^2 - 4x + 7 = 2x + k$$",
        "2. Rearrange to standard quadratic form: $$x^2 - 6x + (7 - k) = 0$$",
        "3. Identify coefficients: $$A = 1, \\quad B = -6, \\quad C = 7 - k$$",
        "4. Set discriminant equal to zero: $$(-6)^2 - 4(1)(7 - k) = 0$$",
        "5. Solve for $k$: $$36 - 28 + 4k = 0 \\implies 8 + 4k = 0 \\implies 4k = -8 \\implies k = -2$$"
      ],
      "finalAnswer": "\\mathbf{k = -2}",
      "commonTrap": "Careless sign distribution when expanding $-4(7 - k)$. Many students write $-28 - 4k = 0$, leading to $4k = 8 \\implies k = 2$. Two minuses make a plus: $-4 \\times (-k) = +4k$.",
      "step1": "Tangency Condition: When a line touches a quadratic curve at exactly one point (tangent), the combined intersection equation $Ax^2 + Bx + C = 0$ has real and equal roots, meaning: $$\\Delta = B^2 - 4AC = 0$$",
      "step2": [
        "1. Equate the line and the curve: $$x^2 - 4x + 7 = 2x + k$$",
        "2. Rearrange to standard quadratic form: $$x^2 - 6x + (7 - k) = 0$$",
        "3. Identify coefficients: $$A = 1, \\quad B = -6, \\quad C = 7 - k$$",
        "4. Set discriminant equal to zero: $$(-6)^2 - 4(1)(7 - k) = 0$$",
        "5. Solve for $k$: $$36 - 28 + 4k = 0 \\implies 8 + 4k = 0 \\implies 4k = -8 \\implies k = -2$$"
      ],
      "step3": "\\mathbf{k = -2}",
      "trap": "Careless sign distribution when expanding $-4(7 - k)$. Many students write $-28 - 4k = 0$, leading to $4k = 8 \\implies k = 2$. Two minuses make a plus: $-4 \\times (-k) = +4k$."
    }
  },
  {
    "id": "q-m6",
    "subject": "math",
    "topic": "Topic 4: Logarithmic Functions",
    "question": "When solving a logarithmic equation, the quadratic step gives solutions $x = 5$ and $x = -3$. What must the student do before finalizing their answer?",
    "options": [
      "Keep both x = 5 and x = -3 as valid solutions.",
      "Change x = -3 to +3 because math handles absolute values.",
      "Check if x = -3 causes any logarithm argument to be ≤ 0; if so, write 'reject x = -3'.",
      "Divide both solutions by 10 to normalize them."
    ],
    "correctAnswer": 2,
    "explanation": "Negative and zero arguments are strictly illegal in logarithmic functions! Any candidate value that produces $\\log(\\le 0)$ must be rejected explicitly, or 1 to 2 accuracy marks will be deducted.",
    "solution": {
      "formulaSetup": "Domain restriction of logarithmic functions: For $\\log_b(u)$ to exist in the real number domain, the argument must be strictly positive: $$u > 0 \\quad (\\text{with base } b > 0, b \\ne 1)$$",
      "steps": [
        "1. Quadratic solving produces candidate algebraic solutions: $$x = 5 \\quad \\text{or} \\quad x = -3$$",
        "2. Check candidate $x = 5$: Argument inside original logarithmic terms is positive ($5 > 0$). Valid.",
        "3. Check candidate $x = -3$: Produces negative argument e.g. $\\log(-3)$, which is undefined in real numbers.",
        "4. Mandatory exam working: Explicitly state the rejection with reason: $$\\text{Reject } x = -3 \\quad (\\because \\text{argument must be } > 0)$$"
      ],
      "finalAnswer": "\\mathbf{x = 5 \\quad (\\text{reject } x = -3)}",
      "commonTrap": "Crossing out $x = -3$ without writing the formal exam word 'reject', or leaving both numbers boxed. Cambridge/RVHS rubrics require explicit rejection to secure the final accuracy A-mark.",
      "step1": "Domain restriction of logarithmic functions: For $\\log_b(u)$ to exist in the real number domain, the argument must be strictly positive: $$u > 0 \\quad (\\text{with base } b > 0, b \\ne 1)$$",
      "step2": [
        "1. Quadratic solving produces candidate algebraic solutions: $$x = 5 \\quad \\text{or} \\quad x = -3$$",
        "2. Check candidate $x = 5$: Argument inside original logarithmic terms is positive ($5 > 0$). Valid.",
        "3. Check candidate $x = -3$: Produces negative argument e.g. $\\log(-3)$, which is undefined in real numbers.",
        "4. Mandatory exam working: Explicitly state the rejection with reason: $$\\text{Reject } x = -3 \\quad (\\because \\text{argument must be } > 0)$$"
      ],
      "step3": "\\mathbf{x = 5 \\quad (\\text{reject } x = -3)}",
      "trap": "Crossing out $x = -3$ without writing the formal exam word 'reject', or leaving both numbers boxed. Cambridge/RVHS rubrics require explicit rejection to secure the final accuracy A-mark."
    }
  },
  {
    "id": "q-m7",
    "subject": "math",
    "topic": "Topic 4: Change of Base Formula",
    "question": "To solve $\\log_3(x) + \\log_9(x) = 3$ without a calculator, what is the correct change-of-base transformation?",
    "options": [
      "Convert log₉(x) into log₃(x) / log₃(9) = ½ log₃(x).",
      "Multiply both terms to get log₂₇(x²) = 3.",
      "Change log₃(x) into 3 · log₉(x).",
      "Add the bases: log₁₂(2x) = 3."
    ],
    "correctAnswer": 0,
    "explanation": "Change of base formula: $\\log_b(a) = \\frac{\\log_c(a)}{\\log_c(b)}$. Here, $\\log_9(x) = \\frac{\\log_3(x)}{\\log_3(9)} = \\frac{\\log_3(x)}{2} = \\frac{1}{2}\\log_3(x)$. The equation becomes $\\log_3(x) + \\frac{1}{2}\\log_3(x) = 1.5\\log_3(x) = 3 \\implies \\log_3(x) = 2 \\implies x = 3^2 = 9$.",
    "solution": {
      "formulaSetup": "Change of Base Formula: $$\\log_b(a) = \\frac{\\log_c(a)}{\\log_c(b)}$$ Unify all terms to the lower common base $c = 3$.",
      "steps": [
        "1. Transform $\\log_9(x)$ into base 3: $$\\log_9(x) = \\frac{\\log_3(x)}{\\log_3(9)} = \\frac{\\log_3(x)}{\\log_3(3^2)} = \\frac{\\log_3(x)}{2} = \\frac{1}{2}\\log_3(x)$$",
        "2. Substitute into the equation: $$\\log_3(x) + \\frac{1}{2}\\log_3(x) = 3$$",
        "3. Combine like terms: $$\\frac{3}{2}\\log_3(x) = 3$$",
        "4. Multiply both sides by $\\frac{2}{3}$: $$\\log_3(x) = 3 \\times \\frac{2}{3} = 2$$",
        "5. Convert logarithmic equation to exponential form: $$x = 3^2 = 9$$"
      ],
      "finalAnswer": "\\mathbf{x = 9}",
      "commonTrap": "Adding the bases together to write $\\log_{3+9}(x) = \\log_{12}(x)$, or multiplying the arguments before converting bases. Logarithm product laws only apply when bases are identical.",
      "step1": "Change of Base Formula: $$\\log_b(a) = \\frac{\\log_c(a)}{\\log_c(b)}$$ Unify all terms to the lower common base $c = 3$.",
      "step2": [
        "1. Transform $\\log_9(x)$ into base 3: $$\\log_9(x) = \\frac{\\log_3(x)}{\\log_3(9)} = \\frac{\\log_3(x)}{\\log_3(3^2)} = \\frac{\\log_3(x)}{2} = \\frac{1}{2}\\log_3(x)$$",
        "2. Substitute into the equation: $$\\log_3(x) + \\frac{1}{2}\\log_3(x) = 3$$",
        "3. Combine like terms: $$\\frac{3}{2}\\log_3(x) = 3$$",
        "4. Multiply both sides by $\\frac{2}{3}$: $$\\log_3(x) = 3 \\times \\frac{2}{3} = 2$$",
        "5. Convert logarithmic equation to exponential form: $$x = 3^2 = 9$$"
      ],
      "step3": "\\mathbf{x = 9}",
      "trap": "Adding the bases together to write $\\log_{3+9}(x) = \\log_{12}(x)$, or multiplying the arguments before converting bases. Logarithm product laws only apply when bases are identical."
    }
  },
  {
    "id": "q-m8",
    "subject": "math",
    "topic": "Topic 5: Modulus Functions & Graphs",
    "question": "When sketching $y = |2x - 6|$, what does the graph look like, and what is the coordinate of the sharp bounce vertex on the $x$-axis?",
    "options": [
      "A straight line continuing below the x-axis with y-intercept at (0, -6).",
      "A sharp V-shaped bounce with vertex at (3, 0), and all parts strictly on or above the x-axis.",
      "A smooth U-shaped curve with vertex at (0, 6).",
      "An inverted V-shape peaking at (3, 6)."
    ],
    "correctAnswer": 1,
    "explanation": "Modulus functions convert all negative outputs into positive distances from zero. Any portion of $y = 2x - 6$ below the $x$-axis is reflected vertically upward, forming a sharp V-shaped bounce at $x = 3$ (where $2x - 6 = 0$) with vertex $(3, 0)$ and $y$-intercept $(0, 6)$.",
    "solution": {
      "formulaSetup": "Definition of Modulus: $$|f(x)| = \\begin{cases} f(x), & \\text{if } f(x) \\ge 0 \\\\ -f(x), & \\text{if } f(x) < 0 \\end{cases}$$ Reflect any negative portion ($y < 0$) in the $x$-axis ($y = 0$).",
      "steps": [
        "1. Find the $x$-intercept (vertex / sharp bounce point) by setting $2x - 6 = 0$: $$2x = 6 \\implies x = 3 \\implies \\text{Vertex at } (3, 0)$$",
        "2. Find the $y$-intercept by substituting $x = 0$: $$y = |2(0) - 6| = |-6| = 6 \\implies (0, 6)$$",
        "3. For $x \\ge 3$: Line is $y = 2x - 6$ with positive gradient $+2$.",
        "4. For $x < 3$: Reflected line is $y = -(2x - 6) = -2x + 6$ with negative gradient $-2$.",
        "5. The two linear rays meet at a sharp point at $(3, 0)$, never descending below $y = 0$."
      ],
      "finalAnswer": "\\mathbf{\\text{Sharp V-shape with vertex at } (3, 0) \\text{ and } y\\text{-intercept at } (0, 6)}",
      "commonTrap": "Sketching a curved, rounded parabola turning point instead of two straight lines meeting at a sharp apex. Modulus of a linear expression always yields sharp straight edges.",
      "step1": "Definition of Modulus: $$|f(x)| = \\begin{cases} f(x), & \\text{if } f(x) \\ge 0 \\\\ -f(x), & \\text{if } f(x) < 0 \\end{cases}$$ Reflect any negative portion ($y < 0$) in the $x$-axis ($y = 0$).",
      "step2": [
        "1. Find the $x$-intercept (vertex / sharp bounce point) by setting $2x - 6 = 0$: $$2x = 6 \\implies x = 3 \\implies \\text{Vertex at } (3, 0)$$",
        "2. Find the $y$-intercept by substituting $x = 0$: $$y = |2(0) - 6| = |-6| = 6 \\implies (0, 6)$$",
        "3. For $x \\ge 3$: Line is $y = 2x - 6$ with positive gradient $+2$.",
        "4. For $x < 3$: Reflected line is $y = -(2x - 6) = -2x + 6$ with negative gradient $-2$.",
        "5. The two linear rays meet at a sharp point at $(3, 0)$, never descending below $y = 0$."
      ],
      "step3": "\\mathbf{\\text{Sharp V-shape with vertex at } (3, 0) \\text{ and } y\\text{-intercept at } (0, 6)}",
      "trap": "Sketching a curved, rounded parabola turning point instead of two straight lines meeting at a sharp apex. Modulus of a linear expression always yields sharp straight edges."
    }
  },
  {
    "id": "q-m9",
    "subject": "math",
    "topic": "Topic 5: Modulus Equations",
    "question": "When solving the modulus equation $|2x - 5| = x + 1$, you find $x = 6$ and $x = 4/3$. What verification step is mandatory?",
    "options": [
      "Check that the RHS (x + 1) ≥ 0 for each solution; since both 6 + 1 > 0 and 4/3 + 1 > 0, both are valid solutions.",
      "Reject x = 4/3 because solutions must always be integers.",
      "Reject x = 6 because it is larger than 5.",
      "Square both solutions to ensure they equal zero."
    ],
    "correctAnswer": 0,
    "explanation": "Because $|2x - 5| \\ge 0$ for all real numbers, the RHS must be non-negative ($x + 1 \\ge 0 \\implies x \\ge -1$). Testing $x = 6$: $|12 - 5| = 7$ and $6 + 1 = 7$ (valid). Testing $x = 4/3$: $|8/3 - 5| = |-7/3| = 7/3$ and $4/3 + 1 = 7/3$ (valid). Always verify to eliminate extraneous roots!",
    "solution": {
      "formulaSetup": "Equation $|A| = B$ is split into two cases: $$A = B \\quad \\text{or} \\quad A = -B$$ Constraint: Because $|A| \\ge 0$, any valid solution must satisfy $B \\ge 0$.",
      "steps": [
        "1. Case 1 ($2x - 5 = x + 1$): $$2x - x = 1 + 5 \\implies x = 6$$",
        "2. Case 2 ($2x - 5 = -(x + 1)$): $$2x - 5 = -x - 1 \\implies 3x = 4 \\implies x = \\frac{4}{3}$$",
        "3. Check root $x = 6$: $$\\text{LHS} = |2(6) - 5| = |7| = 7; \\quad \\text{RHS} = 6 + 1 = 7 \\implies \\text{Valid } \\checkmark$$",
        "4. Check root $x = \\frac{4}{3}$: $$\\text{LHS} = \\left|2\\left(\\frac{4}{3}\\right) - 5\\right| = \\left|\\frac{8 - 15}{3}\\right| = \\frac{7}{3}; \\quad \\text{RHS} = \\frac{4}{3} + 1 = \\frac{7}{3} \\implies \\text{Valid } \\checkmark$$",
        "5. Both roots satisfy the non-negativity constraint $x + 1 \\ge 0$ ($x \\ge -1$)."
      ],
      "finalAnswer": "\\mathbf{x = 6 \\quad \\text{and} \\quad x = \\frac{4}{3}}",
      "commonTrap": "Failing to check the RHS. If solving yielded an $x$-value where $x + 1 < 0$, that solution would be extraneous and must be rejected, because an absolute value cannot equal a negative number.",
      "step1": "Equation $|A| = B$ is split into two cases: $$A = B \\quad \\text{or} \\quad A = -B$$ Constraint: Because $|A| \\ge 0$, any valid solution must satisfy $B \\ge 0$.",
      "step2": [
        "1. Case 1 ($2x - 5 = x + 1$): $$2x - x = 1 + 5 \\implies x = 6$$",
        "2. Case 2 ($2x - 5 = -(x + 1)$): $$2x - 5 = -x - 1 \\implies 3x = 4 \\implies x = \\frac{4}{3}$$",
        "3. Check root $x = 6$: $$\\text{LHS} = |2(6) - 5| = |7| = 7; \\quad \\text{RHS} = 6 + 1 = 7 \\implies \\text{Valid } \\checkmark$$",
        "4. Check root $x = \\frac{4}{3}$: $$\\text{LHS} = \\left|2\\left(\\frac{4}{3}\\right) - 5\\right| = \\left|\\frac{8 - 15}{3}\\right| = \\frac{7}{3}; \\quad \\text{RHS} = \\frac{4}{3} + 1 = \\frac{7}{3} \\implies \\text{Valid } \\checkmark$$",
        "5. Both roots satisfy the non-negativity constraint $x + 1 \\ge 0$ ($x \\ge -1$)."
      ],
      "step3": "\\mathbf{x = 6 \\quad \\text{and} \\quad x = \\frac{4}{3}}",
      "trap": "Failing to check the RHS. If solving yielded an $x$-value where $x + 1 < 0$, that solution would be extraneous and must be rejected, because an absolute value cannot equal a negative number."
    }
  },
  {
    "id": "q-m10",
    "subject": "math",
    "topic": "Topic 6: Triangle Rules & Sine Rule",
    "question": "In triangle $ABC$, side $a = 7\\text{ cm}$, side $b = 10\\text{ cm}$, and angle $A = 35^\\circ$. When using the Sine Rule to calculate angle $B$, what trap must be checked?",
    "options": [
      "Angle B can have two valid solutions: an acute angle B ≈ 55.0° and an obtuse angle B' = 180° - 55.0° = 125.0°, because 35° + 125.0° < 180°.",
      "The Sine Rule can only be used on triangles with a 90° right angle.",
      "The obtuse angle solution must always be discarded immediately without checking.",
      "Sine Rule cannot be used when two sides and one angle are given."
    ],
    "correctAnswer": 0,
    "explanation": "Ambiguous Case of the Sine Rule! When given two sides and a non-included angle opposite the shorter side, an obtuse angle ($180^\\circ - \\theta$) may also be valid if the sum of angles does not exceed $180^\\circ$.",
    "solution": {
      "formulaSetup": "Sine Rule: $$\\frac{\\sin B}{b} = \\frac{\\sin A}{a} \\implies \\sin B = \\frac{b\\sin A}{a}$$ Ambiguous Case: $\\sin B = k$ yields acute $B_1 = \\sin^{-1}(k)$ and obtuse $B_2 = 180^\\circ - B_1$. $B_2$ is valid if $A + B_2 < 180^\\circ$.",
      "steps": [
        "1. Substitute $a = 7, \\; b = 10, \\; A = 35^\\circ$: $$\\sin B = \\frac{10\\sin 35^\\circ}{7} \\approx \\frac{10(0.573576)}{7} \\approx 0.819395$$",
        "2. Calculate acute angle $B_1$: $$B_1 = \\sin^{-1}(0.819395) \\approx 55.02^\\circ \\approx 55.0^\\circ$$",
        "3. Calculate obtuse candidate $B_2$: $$B_2 = 180^\\circ - 55.02^\\circ = 124.98^\\circ \\approx 125.0^\\circ$$",
        "4. Check validity of obtuse candidate with existing angle $A$: $$A + B_2 = 35^\\circ + 124.98^\\circ = 159.98^\\circ < 180^\\circ$$",
        "5. Since the angle sum is strictly less than $180^\\circ$, angle $C$ can be $20.0^\\circ$. Both triangles exist."
      ],
      "finalAnswer": "\\mathbf{B \\approx 55.0^\\circ \\quad \\text{or} \\quad B \\approx 125.0^\\circ}",
      "commonTrap": "Stopping at $55.0^\\circ$ on your calculator. In Cambridge/RVHS marking, whenever the side opposite the given angle is shorter than the other given side ($a < b$), the second triangle almost always exists; missing it loses 2 method/accuracy marks.",
      "step1": "Sine Rule: $$\\frac{\\sin B}{b} = \\frac{\\sin A}{a} \\implies \\sin B = \\frac{b\\sin A}{a}$$ Ambiguous Case: $\\sin B = k$ yields acute $B_1 = \\sin^{-1}(k)$ and obtuse $B_2 = 180^\\circ - B_1$. $B_2$ is valid if $A + B_2 < 180^\\circ$.",
      "step2": [
        "1. Substitute $a = 7, \\; b = 10, \\; A = 35^\\circ$: $$\\sin B = \\frac{10\\sin 35^\\circ}{7} \\approx \\frac{10(0.573576)}{7} \\approx 0.819395$$",
        "2. Calculate acute angle $B_1$: $$B_1 = \\sin^{-1}(0.819395) \\approx 55.02^\\circ \\approx 55.0^\\circ$$",
        "3. Calculate obtuse candidate $B_2$: $$B_2 = 180^\\circ - 55.02^\\circ = 124.98^\\circ \\approx 125.0^\\circ$$",
        "4. Check validity of obtuse candidate with existing angle $A$: $$A + B_2 = 35^\\circ + 124.98^\\circ = 159.98^\\circ < 180^\\circ$$",
        "5. Since the angle sum is strictly less than $180^\\circ$, angle $C$ can be $20.0^\\circ$. Both triangles exist."
      ],
      "step3": "\\mathbf{B \\approx 55.0^\\circ \\quad \\text{or} \\quad B \\approx 125.0^\\circ}",
      "trap": "Stopping at $55.0^\\circ$ on your calculator. In Cambridge/RVHS marking, whenever the side opposite the given angle is shorter than the other given side ($a < b$), the second triangle almost always exists; missing it loses 2 method/accuracy marks."
    }
  },
  {
    "id": "q-m11",
    "subject": "math",
    "topic": "Topic 6: 3-Figure Bearings",
    "question": "Ship B is at a bearing of $070^\\circ$ from lighthouse A. What is the bearing of lighthouse A from ship B (the back-bearing)?",
    "options": [
      "070°",
      "180° - 070° = 110°",
      "070° + 180° = 250°",
      "360° - 070° = 290°"
    ],
    "correctAnswer": 2,
    "explanation": "Back-bearing rule! Because the two North lines are parallel, the co-interior angles between them sum to $180^\\circ$. For any bearing $\\theta$ between $000^\\circ$ and $180^\\circ$, the reverse bearing from B to A is $\\theta + 180^\\circ = 070^\\circ + 180^\\circ = 250^\\circ$.",
    "solution": {
      "formulaSetup": "Parallel North lines property: The reverse bearing (back-bearing) between two points relates by a $180^\\circ$ rotation: $$\\text{Back-bearing} = \\begin{cases} \\theta + 180^\\circ, & \\text{if } \\theta < 180^\\circ \\\\ \\theta - 180^\\circ, & \\text{if } \\theta \\ge 180^\\circ \\end{cases}$$",
      "steps": [
        "1. Identify the given forward bearing from $A$ to $B$: $$\\theta = 070^\\circ$$",
        "2. Since $070^\\circ < 180^\\circ$, apply the $+180^\\circ$ parallel North rule: $$\\text{Bearing of } A \\text{ from } B = 070^\\circ + 180^\\circ = 250^\\circ$$",
        "3. Verification by co-interior angles: The angle between $AB$ and South at $B$ is $70^\\circ$ (alternate interior angle). From North at $B$, turn $180^\\circ$ to South, then an extra $70^\\circ$ clockwise $\\implies 180^\\circ + 70^\\circ = 250^\\circ$."
      ],
      "finalAnswer": "\\mathbf{250^\\circ}",
      "commonTrap": "Subtracting from $180^\\circ$ (getting $110^\\circ$) or subtracting from $360^\\circ$ (getting $290^\\circ$). Also remember bearings must always be written in 3 digits (e.g. $070^\\circ$, not $70^\\circ$).",
      "step1": "Parallel North lines property: The reverse bearing (back-bearing) between two points relates by a $180^\\circ$ rotation: $$\\text{Back-bearing} = \\begin{cases} \\theta + 180^\\circ, & \\text{if } \\theta < 180^\\circ \\\\ \\theta - 180^\\circ, & \\text{if } \\theta \\ge 180^\\circ \\end{cases}$$",
      "step2": [
        "1. Identify the given forward bearing from $A$ to $B$: $$\\theta = 070^\\circ$$",
        "2. Since $070^\\circ < 180^\\circ$, apply the $+180^\\circ$ parallel North rule: $$\\text{Bearing of } A \\text{ from } B = 070^\\circ + 180^\\circ = 250^\\circ$$",
        "3. Verification by co-interior angles: The angle between $AB$ and South at $B$ is $70^\\circ$ (alternate interior angle). From North at $B$, turn $180^\\circ$ to South, then an extra $70^\\circ$ clockwise $\\implies 180^\\circ + 70^\\circ = 250^\\circ$."
      ],
      "step3": "\\mathbf{250^\\circ}",
      "trap": "Subtracting from $180^\\circ$ (getting $110^\\circ$) or subtracting from $360^\\circ$ (getting $290^\\circ$). Also remember bearings must always be written in 3 digits (e.g. $070^\\circ$, not $70^\\circ$)."
    }
  },
  {
    "id": "q-m12",
    "subject": "math",
    "topic": "Topic 7: Circular Measure (Radian System)",
    "question": "A student calculates the area of a sector with $r = 5\\text{ cm}$ and $\\theta = 1.2\\text{ radians}$ using $A = \\frac{1}{2}r^2\\theta$. In the next part, they calculate segment area: $\\frac{1}{2}r^2(\\theta - \\sin\\theta)$. What is the #1 reason RVHS students lose all method marks here?",
    "options": [
      "Their calculator was left in DEG mode, so it calculated sin(1.2°) instead of sin(1.2 rad).",
      "They should have multiplied the radius by π.",
      "The sector area formula requires diameter instead of radius.",
      "Radians must always be converted to degrees before calculating."
    ],
    "correctAnswer": 0,
    "explanation": "#1 Source of Lost Marks in RVHS: Leaving the calculator in DEG mode! $\\sin(1.2\\text{ rad}) \\approx 0.9320$, but $\\sin(1.2^\\circ) \\approx 0.0209$. This creates an enormous numerical error that invalidates all subsequent steps.",
    "solution": {
      "formulaSetup": "Circular Measure formulas require angles in radians: $$A_{\\text{sector}} = \\frac{1}{2}r^2\\theta, \\quad A_{\\text{segment}} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)$$ Calculator MUST be set to **RADIAN (R)** mode when computing $\\sin(\\theta)$.",
      "steps": [
        "1. Calculate sector area: $$A_{\\text{sector}} = \\frac{1}{2}(5^2)(1.2) = \\frac{1}{2}(25)(1.2) = 15\\text{ cm}^2$$",
        "2. Segment formula: $$A_{\\text{segment}} = \\frac{1}{2}(5^2)(1.2 - \\sin(1.2))$$",
        "3. Evaluate $\\sin(1.2)$ in RAD mode: $$\\sin(1.2\\text{ rad}) \\approx 0.932039$$",
        "4. Difference: $$1.2 - 0.932039 = 0.267961$$",
        "5. Final segment area: $$A_{\\text{segment}} = 12.5 \\times 0.267961 \\approx 3.35\\text{ cm}^2 \\quad (\\text{to 3 s.f.})$$"
      ],
      "finalAnswer": "\\mathbf{A_{\\text{sector}} = 15\\text{ cm}^2, \\quad A_{\\text{segment}} \\approx 3.35\\text{ cm}^2}",
      "commonTrap": "Leaving the calculator in DEG mode: $\\sin(1.2^\\circ) \\approx 0.02094$, yielding $A_{\\text{segment}} \\approx 14.7\\text{ cm}^2$. This massive discrepancy immediately costs all accuracy marks.",
      "step1": "Circular Measure formulas require angles in radians: $$A_{\\text{sector}} = \\frac{1}{2}r^2\\theta, \\quad A_{\\text{segment}} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)$$ Calculator MUST be set to **RADIAN (R)** mode when computing $\\sin(\\theta)$.",
      "step2": [
        "1. Calculate sector area: $$A_{\\text{sector}} = \\frac{1}{2}(5^2)(1.2) = \\frac{1}{2}(25)(1.2) = 15\\text{ cm}^2$$",
        "2. Segment formula: $$A_{\\text{segment}} = \\frac{1}{2}(5^2)(1.2 - \\sin(1.2))$$",
        "3. Evaluate $\\sin(1.2)$ in RAD mode: $$\\sin(1.2\\text{ rad}) \\approx 0.932039$$",
        "4. Difference: $$1.2 - 0.932039 = 0.267961$$",
        "5. Final segment area: $$A_{\\text{segment}} = 12.5 \\times 0.267961 \\approx 3.35\\text{ cm}^2 \\quad (\\text{to 3 s.f.})$$"
      ],
      "step3": "\\mathbf{A_{\\text{sector}} = 15\\text{ cm}^2, \\quad A_{\\text{segment}} \\approx 3.35\\text{ cm}^2}",
      "trap": "Leaving the calculator in DEG mode: $\\sin(1.2^\\circ) \\approx 0.02094$, yielding $A_{\\text{segment}} \\approx 14.7\\text{ cm}^2$. This massive discrepancy immediately costs all accuracy marks."
    }
  },
  {
    "id": "q-m13",
    "subject": "math",
    "topic": "Topic 8: Trig Functions & Periodic Graphs",
    "question": "For the trigonometric curve $y = -3\\cos(4x) + 2$ for $0 \\le x \\le 2\\pi$, what are its amplitude, period, and maximum value?",
    "options": [
      "Amplitude = 3, Period = π/2 (90°), Maximum = 5",
      "Amplitude = -3, Period = 4, Maximum = 2",
      "Amplitude = 6, Period = 2π, Maximum = 3",
      "Amplitude = 3, Period = π/4, Maximum = 1"
    ],
    "correctAnswer": 0,
    "explanation": "Amplitude is strictly positive: $|a| = |-3| = 3$. Period = $2\\pi / b = 2\\pi / 4 = \\pi/2$ (or $90^\\circ$). Midline is at $y = 2$, so maximum value is $2 + 3 = 5$ (and minimum value is $2 - 3 = -1$).",
    "solution": {
      "formulaSetup": "General formula for $y = a\\cos(bx) + c$: $$\\text{Amplitude} = |a|, \\quad \\text{Period} = \\frac{2\\pi}{b}, \\quad \\text{Midline} = c, \\quad y_{\\max} = c + |a|, \\quad y_{\\min} = c - |a|$$",
      "steps": [
        "1. Identify parameters from $y = -3\\cos(4x) + 2$: $$a = -3, \\quad b = 4, \\quad c = 2$$",
        "2. Calculate Amplitude (always a non-negative distance): $$\\text{Amplitude} = |-3| = 3$$",
        "3. Calculate Period: $$\\text{Period} = \\frac{2\\pi}{b} = \\frac{2\\pi}{4} = \\frac{\\pi}{2} \\quad (\\text{or } 90^\\circ)$$",
        "4. Calculate Maximum value (occurring when $\\cos(4x) = -1$): $$y_{\\max} = -3(-1) + 2 = 3 + 2 = 5$$",
        "5. Calculate Minimum value: $$y_{\\min} = -3(1) + 2 = -1$$"
      ],
      "finalAnswer": "\\mathbf{\\text{Amplitude} = 3, \\quad \\text{Period} = \\frac{\\pi}{2} \\text{ (or } 90^\\circ\\text{)}, \\quad \\text{Maximum} = 5}",
      "commonTrap": "Writing Amplitude $= -3$. Amplitude is defined as a distance/magnitude from midline and is strictly positive ($|a| > 0$).",
      "step1": "General formula for $y = a\\cos(bx) + c$: $$\\text{Amplitude} = |a|, \\quad \\text{Period} = \\frac{2\\pi}{b}, \\quad \\text{Midline} = c, \\quad y_{\\max} = c + |a|, \\quad y_{\\min} = c - |a|$$",
      "step2": [
        "1. Identify parameters from $y = -3\\cos(4x) + 2$: $$a = -3, \\quad b = 4, \\quad c = 2$$",
        "2. Calculate Amplitude (always a non-negative distance): $$\\text{Amplitude} = |-3| = 3$$",
        "3. Calculate Period: $$\\text{Period} = \\frac{2\\pi}{b} = \\frac{2\\pi}{4} = \\frac{\\pi}{2} \\quad (\\text{or } 90^\\circ)$$",
        "4. Calculate Maximum value (occurring when $\\cos(4x) = -1$): $$y_{\\max} = -3(-1) + 2 = 3 + 2 = 5$$",
        "5. Calculate Minimum value: $$y_{\\min} = -3(1) + 2 = -1$$"
      ],
      "step3": "\\mathbf{\\text{Amplitude} = 3, \\quad \\text{Period} = \\frac{\\pi}{2} \\text{ (or } 90^\\circ\\text{)}, \\quad \\text{Maximum} = 5}",
      "trap": "Writing Amplitude $= -3$. Amplitude is defined as a distance/magnitude from midline and is strictly positive ($|a| > 0$)."
    }
  },
  {
    "id": "q-m14",
    "subject": "math",
    "topic": "Topic 9: Trig Equations & ASTC",
    "question": "A student is solving: $2\\sin(x)\\cos(x) = \\sin(x)$. They divide both sides by $\\sin(x)$ to obtain $2\\cos(x) = 1$, so $\\cos(x) = 0.5$. What is the critical error?",
    "options": [
      "Dividing by sin(x) eliminates the solutions where sin(x) = 0, losing half the valid roots.",
      "They should have divided by cos(x) instead of sin(x).",
      "cos(x) cannot equal 0.5 in trigonometry.",
      "The equation has no solutions in the real domain."
    ],
    "correctAnswer": 0,
    "explanation": "Trap Alert! Never divide both sides by a variable trig function. You must move all terms to one side: $\\sin(x)(2\\cos(x) - 1) = 0$, yielding both $\\sin(x) = 0$ and $\\cos(x) = 0.5$!",
    "solution": {
      "formulaSetup": "Fundamental Rule of Solving Equations: Never divide by an unknown variable expression because it may equal zero. Always factorise: $$A \\cdot B = A \\implies A(B - 1) = 0$$",
      "steps": [
        "1. Rearrange to zero on the right-hand side: $$2\\sin x \\cos x - \\sin x = 0$$",
        "2. Factor out common factor $\\sin x$: $$\\sin x (2\\cos x - 1) = 0$$",
        "3. Branch 1: $$\\sin x = 0 \\implies x = 0^\\circ, 180^\\circ, 360^\\circ \\quad (\\text{for } 0^\\circ \\le x \\le 360^\\circ)$$",
        "4. Branch 2: $$2\\cos x - 1 = 0 \\implies \\cos x = 0.5 \\implies x = 60^\\circ, 300^\\circ$$",
        "5. Collect all 5 valid solutions across the domain."
      ],
      "finalAnswer": "\\mathbf{x = 0^\\circ, 60^\\circ, 180^\\circ, 300^\\circ, 360^\\circ}",
      "commonTrap": "Dividing by $\\sin x$ instantly discards $\\sin x = 0$, forfeiting three entire solutions ($0^\\circ, 180^\\circ, 360^\\circ$) and over 50% of the question's total method marks.",
      "step1": "Fundamental Rule of Solving Equations: Never divide by an unknown variable expression because it may equal zero. Always factorise: $$A \\cdot B = A \\implies A(B - 1) = 0$$",
      "step2": [
        "1. Rearrange to zero on the right-hand side: $$2\\sin x \\cos x - \\sin x = 0$$",
        "2. Factor out common factor $\\sin x$: $$\\sin x (2\\cos x - 1) = 0$$",
        "3. Branch 1: $$\\sin x = 0 \\implies x = 0^\\circ, 180^\\circ, 360^\\circ \\quad (\\text{for } 0^\\circ \\le x \\le 360^\\circ)$$",
        "4. Branch 2: $$2\\cos x - 1 = 0 \\implies \\cos x = 0.5 \\implies x = 60^\\circ, 300^\\circ$$",
        "5. Collect all 5 valid solutions across the domain."
      ],
      "step3": "\\mathbf{x = 0^\\circ, 60^\\circ, 180^\\circ, 300^\\circ, 360^\\circ}",
      "trap": "Dividing by $\\sin x$ instantly discards $\\sin x = 0$, forfeiting three entire solutions ($0^\\circ, 180^\\circ, 360^\\circ$) and over 50% of the question's total method marks."
    }
  },
  {
    "id": "q-m15",
    "subject": "math",
    "topic": "Topic 9: Compound Angle Domain",
    "question": "When solving $\\cos(2x - 30^\\circ) = 0.5$ for the domain $0^\\circ \\le x \\le 180^\\circ$, what is the correct modified domain for angle $\\theta = (2x - 30^\\circ)$?",
    "options": [
      "0° ≤ θ ≤ 180°",
      "-30° ≤ θ ≤ 330°",
      "0° ≤ θ ≤ 360°",
      "-30° ≤ θ ≤ 150°"
    ],
    "correctAnswer": 1,
    "explanation": "Domain adjustment protocol: Start with $0^\\circ \\le x \\le 180^\\circ$. Multiply by 2: $0^\\circ \\le 2x \\le 360^\\circ$. Subtract 30°: $-30^\\circ \\le 2x - 30^\\circ \\le 330^\\circ$. Failing to modify the domain causes students to miss valid roots in negative quadrants or beyond 180°!",
    "solution": {
      "formulaSetup": "Domain Transformation Protocol: Apply identical linear operations to the compound angle expression: $$x_1 \\le x \\le x_2 \\implies 2x_1 - 30^\\circ \\le 2x - 30^\\circ \\le 2x_2 - 30^\\circ$$",
      "steps": [
        "1. Given original $x$-domain: $$0^\\circ \\le x \\le 180^\\circ$$",
        "2. Multiply through by 2: $$0^\\circ \\le 2x \\le 360^\\circ$$",
        "3. Subtract $30^\\circ$ from each part: $$0^\\circ - 30^\\circ \\le 2x - 30^\\circ \\le 360^\\circ - 30^\\circ$$",
        "4. Resulting modified domain for $\\theta = 2x - 30^\\circ$: $$-30^\\circ \\le \\theta \\le 330^\\circ$$",
        "5. Solve $\\cos\\theta = 0.5$: Basic angle $\\alpha = 60^\\circ$. Valid $\\theta = 60^\\circ, 300^\\circ \\implies x = 45^\\circ, 165^\\circ$."
      ],
      "finalAnswer": "\\mathbf{-30^\\circ \\le \\theta \\le 330^\\circ \\quad (x = 45^\\circ, 165^\\circ)}",
      "commonTrap": "Solving in $0^\\circ \\le \\theta \\le 180^\\circ$ directly. This omission causes students to miss $\\theta = 300^\\circ$, leaving out the valid second root $x = 165^\\circ$.",
      "step1": "Domain Transformation Protocol: Apply identical linear operations to the compound angle expression: $$x_1 \\le x \\le x_2 \\implies 2x_1 - 30^\\circ \\le 2x - 30^\\circ \\le 2x_2 - 30^\\circ$$",
      "step2": [
        "1. Given original $x$-domain: $$0^\\circ \\le x \\le 180^\\circ$$",
        "2. Multiply through by 2: $$0^\\circ \\le 2x \\le 360^\\circ$$",
        "3. Subtract $30^\\circ$ from each part: $$0^\\circ - 30^\\circ \\le 2x - 30^\\circ \\le 360^\\circ - 30^\\circ$$",
        "4. Resulting modified domain for $\\theta = 2x - 30^\\circ$: $$-30^\\circ \\le \\theta \\le 330^\\circ$$",
        "5. Solve $\\cos\\theta = 0.5$: Basic angle $\\alpha = 60^\\circ$. Valid $\\theta = 60^\\circ, 300^\\circ \\implies x = 45^\\circ, 165^\\circ$."
      ],
      "step3": "\\mathbf{-30^\\circ \\le \\theta \\le 330^\\circ \\quad (x = 45^\\circ, 165^\\circ)}",
      "trap": "Solving in $0^\\circ \\le \\theta \\le 180^\\circ$ directly. This omission causes students to miss $\\theta = 300^\\circ$, leaving out the valid second root $x = 165^\\circ$."
    }
  },
  {
    "id": "q-m16",
    "subject": "math",
    "topic": "Topic 10: Trig Identities & Proofs",
    "question": "In an exam question asking to 'Prove that $(1 - \\cos 2\\theta) / \\sin 2\\theta = \\tan\\theta$', a student writes: $(1 - \\cos 2\\theta) / \\sin 2\\theta = \\tan\\theta \\implies 1 - \\cos 2\\theta = \\tan\\theta \\cdot \\sin 2\\theta$. Why does this receive 0 method marks?",
    "options": [
      "Cross-multiplying assumes what is to be proved, which is mathematically invalid in identity proofs. You must manipulate LHS independently until it equals RHS.",
      "tan θ cannot be multiplied by sin 2θ.",
      "cos 2θ cannot be converted into sin θ.",
      "The identity is false."
    ],
    "correctAnswer": 0,
    "explanation": "TREATMENT OF EQUATION TRAP: In 'Prove LHS = RHS' problems, moving terms across the '=' sign loses ALL method marks. You must work strictly on LHS: LHS = $(1 - (1 - 2\\sin^2\\theta)) / (2\\sin\\theta\\cos\\theta) = (2\\sin^2\\theta) / (2\\sin\\theta\\cos\\theta) = \\sin\\theta / \\cos\\theta = \\tan\\theta = \\text{RHS}$.",
    "solution": {
      "formulaSetup": "Formal Identity Proof Rule: Start strictly with one side (usually LHS), apply known double-angle identities, and simplify until it identically matches RHS: $$\\cos 2\\theta = 1 - 2\\sin^2\\theta, \\quad \\sin 2\\theta = 2\\sin\\theta\\cos\\theta$$",
      "steps": [
        "1. State the Left Hand Side: $$\\text{LHS} = \\frac{1 - \\cos 2\\theta}{\\sin 2\\theta}$$",
        "2. Substitute $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ into the numerator: $$\\text{Numerator} = 1 - (1 - 2\\sin^2\\theta) = 2\\sin^2\\theta$$",
        "3. Substitute $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ into denominator: $$\\text{LHS} = \\frac{2\\sin^2\\theta}{2\\sin\\theta\\cos\\theta}$$",
        "4. Cancel the common factor $2\\sin\\theta$: $$\\text{LHS} = \\frac{\\sin\\theta}{\\cos\\theta}$$",
        "5. Apply quotient definition $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$: $$\\text{LHS} = \\tan\\theta = \\text{RHS} \\quad \\text{(Proven)}$$"
      ],
      "finalAnswer": "\\mathbf{\\text{LHS} = \\dots = \\tan\\theta = \\text{RHS \\quad (Proven)}}",
      "commonTrap": "Treatment of Equation trap: Writing $1 - \\cos 2\\theta = \\tan\\theta \\cdot \\sin 2\\theta$. Cross-multiplying or moving terms across '=' assumes the identity is already true. Cambridge marks this zero instantly.",
      "step1": "Formal Identity Proof Rule: Start strictly with one side (usually LHS), apply known double-angle identities, and simplify until it identically matches RHS: $$\\cos 2\\theta = 1 - 2\\sin^2\\theta, \\quad \\sin 2\\theta = 2\\sin\\theta\\cos\\theta$$",
      "step2": [
        "1. State the Left Hand Side: $$\\text{LHS} = \\frac{1 - \\cos 2\\theta}{\\sin 2\\theta}$$",
        "2. Substitute $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ into the numerator: $$\\text{Numerator} = 1 - (1 - 2\\sin^2\\theta) = 2\\sin^2\\theta$$",
        "3. Substitute $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ into denominator: $$\\text{LHS} = \\frac{2\\sin^2\\theta}{2\\sin\\theta\\cos\\theta}$$",
        "4. Cancel the common factor $2\\sin\\theta$: $$\\text{LHS} = \\frac{\\sin\\theta}{\\cos\\theta}$$",
        "5. Apply quotient definition $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$: $$\\text{LHS} = \\tan\\theta = \\text{RHS} \\quad \\text{(Proven)}$$"
      ],
      "step3": "\\mathbf{\\text{LHS} = \\dots = \\tan\\theta = \\text{RHS \\quad (Proven)}}",
      "trap": "Treatment of Equation trap: Writing $1 - \\cos 2\\theta = \\tan\\theta \\cdot \\sin 2\\theta$. Cross-multiplying or moving terms across '=' assumes the identity is already true. Cambridge marks this zero instantly."
    }
  },
  {
    "id": "q-m17",
    "subject": "math",
    "topic": "Topic 10: R-Formula & Max Values",
    "question": "Given $3\\sin\\theta - 4\\cos\\theta = R\\sin(\\theta - \\alpha)$, what is the maximum value of the expression, and what is the value of $R$?",
    "options": [
      "R = 5, Maximum value = +5",
      "R = 7, Maximum value = +7",
      "R = 1, Maximum value = +1",
      "R = 25, Maximum value = +25"
    ],
    "correctAnswer": 0,
    "explanation": "R = $\\sqrt{a^2 + b^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. The expression becomes $5\\sin(\\theta - \\alpha)$. Since the maximum value of any sine wave is $+1$, the maximum value of the expression is $5 \\times 1 = +5$.",
    "solution": {
      "formulaSetup": "Harmonic form $R$-Formula: $$a\\sin\\theta - b\\cos\\theta = R\\sin(\\theta - \\alpha)$$ where $R = \\sqrt{a^2 + b^2} > 0$ and $\\tan\\alpha = \\frac{b}{a}$. Since $-1 \\le \\sin(\\theta - \\alpha) \\le 1$, maximum is $+R$.",
      "steps": [
        "1. Identify coefficients from $3\\sin\\theta - 4\\cos\\theta$: $$a = 3, \\quad b = 4$$",
        "2. Calculate modulus amplitude $R$: $$R = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$",
        "3. Calculate acute phase angle $\\alpha$: $$\\tan\\alpha = \\frac{4}{3} \\implies \\alpha = \\tan^{-1}\\left(\\frac{4}{3}\\right) \\approx 53.13^\\circ$$",
        "4. Rewrite harmonic wave: $$3\\sin\\theta - 4\\cos\\theta = 5\\sin(\\theta - 53.13^\\circ)$$",
        "5. The sine factor reaches a peak of $+1$, so: $$\\text{Maximum value} = 5(1) = 5$$"
      ],
      "finalAnswer": "\\mathbf{R = 5, \\quad \\text{Maximum Value} = +5}",
      "commonTrap": "Forgetting to take the square root of $a^2 + b^2$, writing $R = 25$. Also, never add $a$ and $b$ ($3 + 4 = 7$); amplitudes must be added via Pythagoras.",
      "step1": "Harmonic form $R$-Formula: $$a\\sin\\theta - b\\cos\\theta = R\\sin(\\theta - \\alpha)$$ where $R = \\sqrt{a^2 + b^2} > 0$ and $\\tan\\alpha = \\frac{b}{a}$. Since $-1 \\le \\sin(\\theta - \\alpha) \\le 1$, maximum is $+R$.",
      "step2": [
        "1. Identify coefficients from $3\\sin\\theta - 4\\cos\\theta$: $$a = 3, \\quad b = 4$$",
        "2. Calculate modulus amplitude $R$: $$R = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$",
        "3. Calculate acute phase angle $\\alpha$: $$\\tan\\alpha = \\frac{4}{3} \\implies \\alpha = \\tan^{-1}\\left(\\frac{4}{3}\\right) \\approx 53.13^\\circ$$",
        "4. Rewrite harmonic wave: $$3\\sin\\theta - 4\\cos\\theta = 5\\sin(\\theta - 53.13^\\circ)$$",
        "5. The sine factor reaches a peak of $+1$, so: $$\\text{Maximum value} = 5(1) = 5$$"
      ],
      "step3": "\\mathbf{R = 5, \\quad \\text{Maximum Value} = +5}",
      "trap": "Forgetting to take the square root of $a^2 + b^2$, writing $R = 25$. Also, never add $a$ and $b$ ($3 + 4 = 7$); amplitudes must be added via Pythagoras."
    }
  },
  {
    "id": "q-m18",
    "subject": "math",
    "topic": "Topic 11: Polynomials & Factor Theorem",
    "question": "When factorising $P(x) = 2x^3 - 3x^2 - 11x + 6$, polynomial division by $(x - 3)$ yields the quotient $2x^2 + 3x - 2$. A student leaves the final answer as $(x - 3)(2x^2 + 3x - 2)$. Why is this marked down?",
    "options": [
      "Incomplete factorisation! The quadratic quotient can still be factorised into (2x - 1)(x + 2), so the full answer is (x - 3)(2x - 1)(x + 2).",
      "(x - 3) is not an exact factor of P(x).",
      "Cubic polynomials can never be factorised into three brackets.",
      "The coefficient 2 must be divided out to leave monic factors."
    ],
    "correctAnswer": 0,
    "explanation": "Incomplete factorisation trap! In factor theorem questions, leaving a quadratic quotient that is further factorisable costs the final A-mark. Always check if the quadratic factorises: $2x^2 + 3x - 2 = (2x - 1)(x + 2)$.",
    "solution": {
      "formulaSetup": "Complete Factorisation Protocol: When asked to 'factorise completely', factorise down to linear factors over $\\mathbb{R}$: $$P(x) = (x - c) \\cdot Q(x) = (x - c)(ax + b)(cx + d)$$",
      "steps": [
        "1. Verify linear factor $(x - 3)$: $$P(3) = 2(27) - 3(9) - 11(3) + 6 = 54 - 27 - 33 + 6 = 0 \\implies (x - 3) \\text{ is a factor}$$",
        "2. Perform polynomial long division: $$\\frac{2x^3 - 3x^2 - 11x + 6}{x - 3} = 2x^2 + 3x - 2$$",
        "3. Test whether the quadratic quotient $2x^2 + 3x - 2$ can be factorised further:",
        "4. By cross-multiplication or inspection: $$2x^2 + 3x - 2 = (2x - 1)(x + 2)$$",
        "5. Assemble all 3 linear factors: $$P(x) = (x - 3)(2x - 1)(x + 2)$$"
      ],
      "finalAnswer": "\\mathbf{P(x) = (x - 3)(2x - 1)(x + 2)}",
      "commonTrap": "Stopping at $(x - 3)(2x^2 + 3x - 2)$. Leaving a factorisable quadratic quotient on a 'factorise completely' question loses the final accuracy mark.",
      "step1": "Complete Factorisation Protocol: When asked to 'factorise completely', factorise down to linear factors over $\\mathbb{R}$: $$P(x) = (x - c) \\cdot Q(x) = (x - c)(ax + b)(cx + d)$$",
      "step2": [
        "1. Verify linear factor $(x - 3)$: $$P(3) = 2(27) - 3(9) - 11(3) + 6 = 54 - 27 - 33 + 6 = 0 \\implies (x - 3) \\text{ is a factor}$$",
        "2. Perform polynomial long division: $$\\frac{2x^3 - 3x^2 - 11x + 6}{x - 3} = 2x^2 + 3x - 2$$",
        "3. Test whether the quadratic quotient $2x^2 + 3x - 2$ can be factorised further:",
        "4. By cross-multiplication or inspection: $$2x^2 + 3x - 2 = (2x - 1)(x + 2)$$",
        "5. Assemble all 3 linear factors: $$P(x) = (x - 3)(2x - 1)(x + 2)$$"
      ],
      "step3": "\\mathbf{P(x) = (x - 3)(2x - 1)(x + 2)}",
      "trap": "Stopping at $(x - 3)(2x^2 + 3x - 2)$. Leaving a factorisable quadratic quotient on a 'factorise completely' question loses the final accuracy mark."
    }
  },
  {
    "id": "q-m19",
    "subject": "math",
    "topic": "Topic 12: Partial Fractions",
    "question": "A student is asked to express $(2x^3 + 5x^2 - 4) / (x^2 + 2x)$ in partial fractions. What MUST they do before setting up partial fraction brackets?",
    "options": [
      "Perform polynomial long division first because the degree of the numerator (3) is greater than or equal to the degree of the denominator (2).",
      "Immediately set up A / x + B / (x + 2).",
      "Cross-multiply by (x² + 2x).",
      "Differentiate both numerator and denominator."
    ],
    "correctAnswer": 0,
    "explanation": "IMPROPER FRACTION MINEFIELD! If degree of numerator $\\ge$ degree of denominator, the fraction is improper. You CANNOT decompose directly! You must perform long division first to extract the polynomial quotient $(2x + 1)$ before splitting the remainder.",
    "solution": {
      "formulaSetup": "Degree condition for Partial Fractions: $$\\frac{N(x)}{D(x)}$$ If $\\deg(N) \\ge \\deg(D)$, the rational expression is **improper**. You must perform polynomial long division first: $$\\frac{N(x)}{D(x)} = Q(x) + \\frac{R(x)}{D(x)}$$",
      "steps": [
        "1. Check polynomial degrees: $$\\deg(\\text{Numerator}) = 3, \\quad \\deg(\\text{Denominator}) = 2$$",
        "2. Since $3 \\ge 2$, long division is mandatory:",
        "3. Divide $2x^3 + 5x^2 - 4$ by $x^2 + 2x$:",
        "   - Leading term: $2x^3 / x^2 = 2x$",
        "   - Multiply: $2x(x^2 + 2x) = 2x^3 + 4x^2$",
        "   - Subtract: $(2x^3 + 5x^2 - 4) - (2x^3 + 4x^2) = x^2 - 4$",
        "   - Next quotient term: $x^2 / x^2 = +1$",
        "   - Multiply: $1(x^2 + 2x) = x^2 + 2x$",
        "   - Subtract: $(x^2 - 4) - (x^2 + 2x) = -2x - 4$",
        "4. Expression with quotient: $$\\frac{2x^3 + 5x^2 - 4}{x^2 + 2x} = (2x + 1) + \\frac{-2x - 4}{x(x + 2)}$$",
        "5. Now decompose proper remainder into $\\frac{A}{x} + \\frac{B}{x + 2}$."
      ],
      "finalAnswer": "\\mathbf{\\text{Quotient: } (2x + 1); \\quad \\text{Decompose: } (2x + 1) + \\frac{A}{x} + \\frac{B}{x + 2}}",
      "commonTrap": "Setting up $\\frac{A}{x} + \\frac{B}{x + 2}$ right away. Forgetting long division erases the entire quotient $(2x + 1)$ and invalidates the entire question from step one.",
      "step1": "Degree condition for Partial Fractions: $$\\frac{N(x)}{D(x)}$$ If $\\deg(N) \\ge \\deg(D)$, the rational expression is **improper**. You must perform polynomial long division first: $$\\frac{N(x)}{D(x)} = Q(x) + \\frac{R(x)}{D(x)}$$",
      "step2": [
        "1. Check polynomial degrees: $$\\deg(\\text{Numerator}) = 3, \\quad \\deg(\\text{Denominator}) = 2$$",
        "2. Since $3 \\ge 2$, long division is mandatory:",
        "3. Divide $2x^3 + 5x^2 - 4$ by $x^2 + 2x$:",
        "   - Leading term: $2x^3 / x^2 = 2x$",
        "   - Multiply: $2x(x^2 + 2x) = 2x^3 + 4x^2$",
        "   - Subtract: $(2x^3 + 5x^2 - 4) - (2x^3 + 4x^2) = x^2 - 4$",
        "   - Next quotient term: $x^2 / x^2 = +1$",
        "   - Multiply: $1(x^2 + 2x) = x^2 + 2x$",
        "   - Subtract: $(x^2 - 4) - (x^2 + 2x) = -2x - 4$",
        "4. Expression with quotient: $$\\frac{2x^3 + 5x^2 - 4}{x^2 + 2x} = (2x + 1) + \\frac{-2x - 4}{x(x + 2)}$$",
        "5. Now decompose proper remainder into $\\frac{A}{x} + \\frac{B}{x + 2}$."
      ],
      "step3": "\\mathbf{\\text{Quotient: } (2x + 1); \\quad \\text{Decompose: } (2x + 1) + \\frac{A}{x} + \\frac{B}{x + 2}}",
      "trap": "Setting up $\\frac{A}{x} + \\frac{B}{x + 2}$ right away. Forgetting long division erases the entire quotient $(2x + 1)$ and invalidates the entire question from step one."
    }
  },
  {
    "id": "q-m20",
    "subject": "math",
    "topic": "Topic 13: Coordinate Geometry",
    "question": "Segment $AB$ connects $A(-2, 5)$ and $B(4, -3)$. What is the gradient of the perpendicular bisector of $AB$?",
    "options": [
      "Gradient of AB is -4/3, so perpendicular gradient is +3/4 (flip and negate).",
      "Gradient of AB is -4/3, so perpendicular gradient is -3/4.",
      "Gradient is -4/3, identical to line AB.",
      "Gradient is +4/3."
    ],
    "correctAnswer": 0,
    "explanation": "Gradient $m_{AB} = (-3 - 5) / (4 - (-2)) = -8 / 6 = -4/3$. For perpendicular lines, $m_1 \\cdot m_2 = -1$, so $m_\\perp = -1 / (-4/3) = +3/4$. Both invert AND change sign! Don't forget: two minuses make a plus.",
    "solution": {
      "formulaSetup": "Perpendicular lines condition: Two non-vertical lines with gradients $m_1$ and $m_2$ are perpendicular if and only if: $$m_1 \\cdot m_2 = -1 \\implies m_\\perp = -\\frac{1}{m_1}$$",
      "steps": [
        "1. Calculate gradient of segment $AB$ using $m = \\frac{y_2 - y_1}{x_2 - x_1}$: $$m_{AB} = \\frac{-3 - 5}{4 - (-2)} = \\frac{-8}{4 + 2} = \\frac{-8}{6} = -\\frac{4}{3}$$",
        "2. Apply perpendicular gradient rule (negative reciprocal): $$m_\\perp = -\\frac{1}{m_{AB}} = -\\frac{1}{-\\frac{4}{3}} = +\\frac{3}{4}$$",
        "3. (Midpoint of $AB$ for equation): $$M = \\left(\\frac{-2 + 4}{2}, \\frac{5 + (-3)}{2}\\right) = (1, 1)$$",
        "4. Equation of perpendicular bisector: $$y - 1 = \\frac{3}{4}(x - 1) \\implies 4y - 4 = 3x - 3 \\implies 3x - 4y + 1 = 0$$"
      ],
      "finalAnswer": "\\mathbf{m_\\perp = +\\frac{3}{4} \\quad (\\text{Equation: } 3x - 4y + 1 = 0)}",
      "commonTrap": "Flipping the fraction without changing the sign (writing $-\\frac{3}{4}$) or negating without flipping (writing $+\\frac{4}{3}$). You must perform BOTH operations.",
      "step1": "Perpendicular lines condition: Two non-vertical lines with gradients $m_1$ and $m_2$ are perpendicular if and only if: $$m_1 \\cdot m_2 = -1 \\implies m_\\perp = -\\frac{1}{m_1}$$",
      "step2": [
        "1. Calculate gradient of segment $AB$ using $m = \\frac{y_2 - y_1}{x_2 - x_1}$: $$m_{AB} = \\frac{-3 - 5}{4 - (-2)} = \\frac{-8}{4 + 2} = \\frac{-8}{6} = -\\frac{4}{3}$$",
        "2. Apply perpendicular gradient rule (negative reciprocal): $$m_\\perp = -\\frac{1}{m_{AB}} = -\\frac{1}{-\\frac{4}{3}} = +\\frac{3}{4}$$",
        "3. (Midpoint of $AB$ for equation): $$M = \\left(\\frac{-2 + 4}{2}, \\frac{5 + (-3)}{2}\\right) = (1, 1)$$",
        "4. Equation of perpendicular bisector: $$y - 1 = \\frac{3}{4}(x - 1) \\implies 4y - 4 = 3x - 3 \\implies 3x - 4y + 1 = 0$$"
      ],
      "step3": "\\mathbf{m_\\perp = +\\frac{3}{4} \\quad (\\text{Equation: } 3x - 4y + 1 = 0)}",
      "trap": "Flipping the fraction without changing the sign (writing $-\\frac{3}{4}$) or negating without flipping (writing $+\\frac{4}{3}$). You must perform BOTH operations."
    }
  },
  {
    "id": "q-c1",
    "subject": "chemistry",
    "topic": "Bonding & Structure",
    "question": "Which of the following explanation statements receives FULL MARKS in River Valley High School marking schemes for why water has a low boiling point?",
    "options": [
      "Little energy is needed to break the strong covalent bonds between hydrogen and oxygen atoms.",
      "Little energy is required to overcome the weak intermolecular forces of attraction between water molecules.",
      "Water molecules have delocalised electrons that easily escape into the gas phase.",
      "The electrostatic forces of attraction between H⁺ and O²⁻ ions are weak."
    ],
    "correctAnswer": 1,
    "explanation": "FATAL TRAP! Boiling water does NOT break covalent bonds; it only overcomes weak intermolecular forces between molecules. Writing 'covalent bonds break' receives zero marks instantly.",
    "solution": {
      "formulaSetup": "Simple Molecular Structure Answering Protocol: (1) Identify structure type $\\rightarrow$ (2) Identify bonding overcome $\\rightarrow$ (3) State energy required.",
      "steps": [
        "1. Structure type: Water ($H_2O$) possesses a simple molecular structure.",
        "2. Physical change: Boiling is a physical change of state where molecules separate from each other.",
        "3. Covalent bonds inside each $H_2O$ molecule remain completely intact.",
        "4. Standard RVHS full-credit sentence: 'Water has a simple molecular structure with weak intermolecular forces of attraction between molecules. Little energy is required to overcome these weak intermolecular forces, hence water has a low boiling point.'"
      ],
      "finalAnswer": "\\mathbf{\\text{Overcome weak intermolecular forces between molecules (covalent bonds remain intact)}}",
      "commonTrap": "Writing 'covalent bonds are broken'. Covalent bonds are intramolecular and extraordinarily strong; breaking them would split water into $H_2$ and $O_2$ gases! Stating covalent bonds break scores 0 marks instantly.",
      "step1": "Simple Molecular Structure Answering Protocol: (1) Identify structure type $\\rightarrow$ (2) Identify bonding overcome $\\rightarrow$ (3) State energy required.",
      "step2": [
        "1. Structure type: Water ($H_2O$) possesses a simple molecular structure.",
        "2. Physical change: Boiling is a physical change of state where molecules separate from each other.",
        "3. Covalent bonds inside each $H_2O$ molecule remain completely intact.",
        "4. Standard RVHS full-credit sentence: 'Water has a simple molecular structure with weak intermolecular forces of attraction between molecules. Little energy is required to overcome these weak intermolecular forces, hence water has a low boiling point.'"
      ],
      "step3": "\\mathbf{\\text{Overcome weak intermolecular forces between molecules (covalent bonds remain intact)}}",
      "trap": "Writing 'covalent bonds are broken'. Covalent bonds are intramolecular and extraordinarily strong; breaking them would split water into $H_2$ and $O_2$ gases! Stating covalent bonds break scores 0 marks instantly."
    }
  },
  {
    "id": "q-c2",
    "subject": "chemistry",
    "topic": "Acids & Metals",
    "question": "A test paper asks: 'Dilute hydrochloric acid is added to copper turnings in a beaker. State the observation.' What is the correct answer?",
    "options": [
      "Effervescence of colourless hydrogen gas that pops with a lighted splint.",
      "The beaker becomes warm and a blue solution of copper(II) chloride forms.",
      "No reaction / no bubbles observed.",
      "A reddish-brown solid precipitates out of solution."
    ],
    "correctAnswer": 2,
    "explanation": "Unreactive metal trap! Copper (Cu) and silver (Ag) are below hydrogen in the reactivity series and do NOT react with dilute acids. Any answer claiming bubbles or reactions gets 0 marks.",
    "solution": {
      "formulaSetup": "Reactivity Series Principle: Metals located below hydrogen in the reactivity series do not displace hydrogen ions from dilute acids: $$K > Na > Ca > Mg > Al > Zn > Fe > Pb > \\mathbf{[H]} > \\mathbf{Cu} > Ag > Au$$",
      "steps": [
        "1. Identify metal: Copper ($Cu$).",
        "2. Compare with hydrogen: Copper is less reactive than hydrogen ($Cu < H$).",
        "3. Chemical equation: $$Cu(s) + 2HCl(aq) \\longrightarrow \\text{No Reaction}$$",
        "4. Observable phenomena: No bubbles, no temperature change, copper solid remains unchanged at the bottom of the beaker."
      ],
      "finalAnswer": "\\mathbf{\\text{No visible change / No reaction / No effervescence}}",
      "commonTrap": "Rote memorisation error: Automatically applying 'metal + acid $\\rightarrow$ salt + hydrogen' to all metals. Copper and silver never produce hydrogen with dilute non-oxidising acids.",
      "step1": "Reactivity Series Principle: Metals located below hydrogen in the reactivity series do not displace hydrogen ions from dilute acids: $$K > Na > Ca > Mg > Al > Zn > Fe > Pb > \\mathbf{[H]} > \\mathbf{Cu} > Ag > Au$$",
      "step2": [
        "1. Identify metal: Copper ($Cu$).",
        "2. Compare with hydrogen: Copper is less reactive than hydrogen ($Cu < H$).",
        "3. Chemical equation: $$Cu(s) + 2HCl(aq) \\longrightarrow \\text{No Reaction}$$",
        "4. Observable phenomena: No bubbles, no temperature change, copper solid remains unchanged at the bottom of the beaker."
      ],
      "step3": "\\mathbf{\\text{No visible change / No reaction / No effervescence}}",
      "trap": "Rote memorisation error: Automatically applying 'metal + acid $\\rightarrow$ salt + hydrogen' to all metals. Copper and silver never produce hydrogen with dilute non-oxidising acids."
    }
  },
  {
    "id": "q-c3",
    "subject": "chemistry",
    "topic": "Salt Preparation",
    "question": "A student is asked to prepare a pure, dry sample of Barium Sulfate ($BaSO_4$). Which method must they choose according to the decision tree?",
    "options": [
      "Titration using burette and pipette with indicator.",
      "Excess insoluble base added to sulfuric acid, followed by crystallisation.",
      "Precipitation: Mix two soluble solutions (e.g. aqueous Ba(NO₃)₂ and Na₂SO₄), filter the precipitate, wash with distilled water, and dry between filter paper.",
      "Direct synthesis by burning barium metal in sulfur gas."
    ],
    "correctAnswer": 2,
    "explanation": "BaSO₄ is an insoluble sulfate. Insoluble salts are ALWAYS prepared via PRECIPITATION by mixing two soluble aqueous salts, filtering the precipitate, washing with distilled water, and drying between filter papers.",
    "solution": {
      "formulaSetup": "Salt Preparation Decision Tree: 1. Is the salt soluble or insoluble? (All sulfates are soluble EXCEPT $BaSO_4, CaSO_4, PbSO_4$). Since $BaSO_4$ is insoluble, it MUST be prepared by **Precipitation**.",
      "steps": [
        "1. Solubility test: $BaSO_4$ is an insoluble precipitate.",
        "2. Choose two soluble aqueous reagents containing the required ions: $$\\text{Barium Nitrate: } Ba(NO_3)_2(aq) \\quad \\text{and} \\quad \\text{Sodium Sulfate: } Na_2SO_4(aq)$$",
        "3. Ionic reaction: $$Ba^{2+}(aq) + SO_4^{2-}(aq) \\longrightarrow BaSO_4(s)$$",
        "4. Standard 4-step purification: (a) Mix solutions in a beaker; (b) Filter to collect insoluble residue; (c) Wash residue with cold distilled water to remove spectator ions ($Na^+, NO_3^-$); (d) Dry between sheets of filter paper."
      ],
      "finalAnswer": "\\mathbf{\\text{Precipitation: Mix two soluble solutions, filter, wash residue, dry between filter papers}}",
      "commonTrap": "Choosing titration (strictly for soluble SPA salts: Sodium, Potassium, Ammonium) or excess metal/oxide on acid (for soluble non-SPA salts). Insoluble salts cannot be crystallised from solution!",
      "step1": "Salt Preparation Decision Tree: 1. Is the salt soluble or insoluble? (All sulfates are soluble EXCEPT $BaSO_4, CaSO_4, PbSO_4$). Since $BaSO_4$ is insoluble, it MUST be prepared by **Precipitation**.",
      "step2": [
        "1. Solubility test: $BaSO_4$ is an insoluble precipitate.",
        "2. Choose two soluble aqueous reagents containing the required ions: $$\\text{Barium Nitrate: } Ba(NO_3)_2(aq) \\quad \\text{and} \\quad \\text{Sodium Sulfate: } Na_2SO_4(aq)$$",
        "3. Ionic reaction: $$Ba^{2+}(aq) + SO_4^{2-}(aq) \\longrightarrow BaSO_4(s)$$",
        "4. Standard 4-step purification: (a) Mix solutions in a beaker; (b) Filter to collect insoluble residue; (c) Wash residue with cold distilled water to remove spectator ions ($Na^+, NO_3^-$); (d) Dry between sheets of filter paper."
      ],
      "step3": "\\mathbf{\\text{Precipitation: Mix two soluble solutions, filter, wash residue, dry between filter papers}}",
      "trap": "Choosing titration (strictly for soluble SPA salts: Sodium, Potassium, Ammonium) or excess metal/oxide on acid (for soluble non-SPA salts). Insoluble salts cannot be crystallised from solution!"
    }
  },
  {
    "id": "q-c4",
    "subject": "chemistry",
    "topic": "The Mole Concept",
    "question": "What is the number of moles of gas in $480\\text{ cm}^3$ of carbon dioxide at room temperature and pressure (r.t.p.)?",
    "options": [
      "480 / 24 = 20 moles",
      "(480 / 1000) / 24 = 0.48 / 24 = 0.02 moles",
      "480 × 24 = 11,520 moles",
      "480 × 6 × 10²³ moles"
    ],
    "correctAnswer": 1,
    "explanation": "Gas volume formula requires dm³! $1\\text{ dm}^3 = 1000\\text{ cm}^3$. $480\\text{ cm}^3 = 0.48\\text{ dm}^3$. Moles = $0.48 / 24 = 0.02\\text{ mol}$. Forgetting to divide by 1000 is a classic exam slip!",
    "solution": {
      "formulaSetup": "Molar Gas Volume Formula at r.t.p.: $$\\text{Moles of gas } (n) = \\frac{\\text{Volume in dm}^3}{24\\text{ dm}^3/\\text{mol}}$$ Unit Conversion: $1\\text{ dm}^3 = 1000\\text{ cm}^3 \\implies V(\\text{dm}^3) = \\frac{V(\\text{cm}^3)}{1000}$.",
      "steps": [
        "1. Identify given gas volume: $$V = 480\\text{ cm}^3$$",
        "2. Convert volume to $\\text{dm}^3$: $$V = \\frac{480}{1000} = 0.48\\text{ dm}^3$$",
        "3. Apply molar volume formula: $$n = \\frac{0.48\\text{ dm}^3}{24\\text{ dm}^3/\\text{mol}} = 0.02\\text{ mol}$$",
        "4. Scientific notation check: $$0.02\\text{ mol} = 2.0 \\times 10^{-2}\\text{ mol}$$"
      ],
      "finalAnswer": "\\mathbf{0.02\\text{ mol} \\quad (\\text{or } 2.0 \\times 10^{-2}\\text{ mol})}",
      "commonTrap": "Forgetting to divide $\\text{cm}^3$ by $1000$, computing $480 / 24 = 20\\text{ moles}$. Remember that $20\\text{ moles}$ of gas would fill a 480-litre tank, not a small syringe!",
      "step1": "Molar Gas Volume Formula at r.t.p.: $$\\text{Moles of gas } (n) = \\frac{\\text{Volume in dm}^3}{24\\text{ dm}^3/\\text{mol}}$$ Unit Conversion: $1\\text{ dm}^3 = 1000\\text{ cm}^3 \\implies V(\\text{dm}^3) = \\frac{V(\\text{cm}^3)}{1000}$.",
      "step2": [
        "1. Identify given gas volume: $$V = 480\\text{ cm}^3$$",
        "2. Convert volume to $\\text{dm}^3$: $$V = \\frac{480}{1000} = 0.48\\text{ dm}^3$$",
        "3. Apply molar volume formula: $$n = \\frac{0.48\\text{ dm}^3}{24\\text{ dm}^3/\\text{mol}} = 0.02\\text{ mol}$$",
        "4. Scientific notation check: $$0.02\\text{ mol} = 2.0 \\times 10^{-2}\\text{ mol}$$"
      ],
      "step3": "\\mathbf{0.02\\text{ mol} \\quad (\\text{or } 2.0 \\times 10^{-2}\\text{ mol})}",
      "trap": "Forgetting to divide $\\text{cm}^3$ by $1000$, computing $480 / 24 = 20\\text{ moles}$. Remember that $20\\text{ moles}$ of gas would fill a 480-litre tank, not a small syringe!"
    }
  },
  {
    "id": "q-c5",
    "subject": "chemistry",
    "topic": "Redox Reagents",
    "question": "When acidified potassium manganate(VII) ($KMnO_4$) acts as an oxidising agent on an unknown solution, what colour change confirms the redox reaction?",
    "options": [
      "Colourless to Brown",
      "Orange to Green",
      "Purple to Colourless",
      "Blue to Red"
    ],
    "correctAnswer": 2,
    "explanation": "Acidified $KMnO_4$ is a powerful oxidising agent that is itself reduced. Its characteristic color change is PURPLE to COLOURLESS (decolourisation). Colourless to brown is for KI (reducing agent).",
    "solution": {
      "formulaSetup": "Redox Reagent Test Principles: Acidified $KMnO_4$ contains the purple manganate(VII) ion ($MnO_4^-$). When oxidising another substance, $Mn$ is reduced from $+7$ to $+2$ ($Mn^{2+}$, colourless).",
      "steps": [
        "1. Initial oxidation state: $Mn$ in $KMnO_4$ is $+7$, giving the solution an intense deep purple colour.",
        "2. Reduction half-equation: $$MnO_4^-(aq) + 8H^+(aq) + 5e^- \\longrightarrow Mn^{2+}(aq) + 4H_2O(l)$$",
        "3. Final oxidation state: $Mn^{2+}$ is very pale pink / virtually colourless in dilute solution.",
        "4. Observable change: Purple turns to colourless (solution decolourises)."
      ],
      "finalAnswer": "\\mathbf{\\text{Purple to Colourless (Decolourisation)}}",
      "commonTrap": "Confusing $KMnO_4$ (purple to colourless) with Potassium Dichromate $K_2Cr_2O_7$ (orange to green) or Potassium Iodide $KI$ (colourless to brown). Keep your oxidising and reducing agent color pairs strictly distinct.",
      "step1": "Redox Reagent Test Principles: Acidified $KMnO_4$ contains the purple manganate(VII) ion ($MnO_4^-$). When oxidising another substance, $Mn$ is reduced from $+7$ to $+2$ ($Mn^{2+}$, colourless).",
      "step2": [
        "1. Initial oxidation state: $Mn$ in $KMnO_4$ is $+7$, giving the solution an intense deep purple colour.",
        "2. Reduction half-equation: $$MnO_4^-(aq) + 8H^+(aq) + 5e^- \\longrightarrow Mn^{2+}(aq) + 4H_2O(l)$$",
        "3. Final oxidation state: $Mn^{2+}$ is very pale pink / virtually colourless in dilute solution.",
        "4. Observable change: Purple turns to colourless (solution decolourises)."
      ],
      "step3": "\\mathbf{\\text{Purple to Colourless (Decolourisation)}}",
      "trap": "Confusing $KMnO_4$ (purple to colourless) with Potassium Dichromate $K_2Cr_2O_7$ (orange to green) or Potassium Iodide $KI$ (colourless to brown). Keep your oxidising and reducing agent color pairs strictly distinct."
    }
  }
];
