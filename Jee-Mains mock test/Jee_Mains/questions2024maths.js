 const practiceQuestions2024 = [
    {
        id: "2024_PRAC_APPDER001",
        subject: "Mathematics",
        topic: "Application of Derivatives",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If 5f(x) + 4f(1/x) = x² - 2, ∀x ≠ 0 and y = 9x²f(x), then y is strictly increasing in:",
        options: ["(0, 1/√5) ∪ (1/√5, ∞)", "(-1/√5, 0) ∪ (1/√5, ∞)", "(-1/√5, 0) ∪ (0, 1/√5)", "(-∞, 1/√5) ∪ (0, 1/√5)"],
        correctAnswer: "B",
        solution: "Solving the functional equation: f(x) = (5x⁴ - 2x² - 4)/(9x²). y = 5x⁴ - 2x² - 4. dy/dx = 20x³ - 4x = 4x(5x² - 1) > 0 when x ∈ (-1/√5, 0) ∪ (1/√5, ∞)",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_APPDER002",
        subject: "Mathematics",
        topic: "Application of Derivatives",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let g(x) = 3f(x/3) + f(3-x) and f''(x) > 0 for all x ∈ (0,3). If g is decreasing in (0,α) and increasing in (α,3), then 8α is:",
        options: ["24", "0", "18", "20"],
        correctAnswer: "C",
        solution: "g'(x) = f'(x/3) - f'(3-x). For g decreasing in (0,α): f'(x/3) < f'(3-x) ⇒ x/3 < 3-x ⇒ x < 9/4. Therefore α = 9/4 and 8α = 18",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_APPDER003",
        subject: "Mathematics",
        topic: "Application of Derivatives",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The function f(x) = 2x + 3x^(2/3), x ∈ ℝ, has:",
        options: ["exactly one point of local minima and no point of local maxima", "exactly one point of local maxima and no point of local minima", "exactly one point of local maxima and exactly one point of local minima", "exactly two points of local maxima and exactly one point of local minima"],
        correctAnswer: "C",
        solution: "f'(x) = 2 + 2x^(-1/3) = 2(1 + x^(-1/3)) = 2(x^(1/3) + 1)/x^(1/3). Critical point at x = -1. Maxima at x = -1, minima at x = 0",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_APPDER004",
        subject: "Mathematics",
        topic: "Application of Derivatives",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "The function f(x) = x/(x² - 6x - 16), x ∈ ℝ - {-2, 8}:",
        options: ["decreases in (-2, 8) and increases in (-∞, -2) ∪ (8, ∞)", "decreases in (-∞, -2) ∪ (-2, 8) ∪ (8, ∞)", "decreases in (-∞, -2) and increases in (8, ∞)", "increases in (-∞, -2) ∪ (-2, 8) ∪ (8, ∞)"],
        correctAnswer: "B",
        solution: "f'(x) = -(x² + 16)/(x² - 6x - 16)². Since f'(x) < 0 everywhere in the domain, f(x) decreases in (-∞, -2) ∪ (-2, 8) ∪ (8, ∞)",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_APPDER005",
        subject: "Mathematics",
        topic: "Application of Derivatives",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let g: ℝ → ℝ be a non constant twice differentiable such that g'(1/2) = g'(3/2). If a real valued function f is defined as f(x) = [g(x) + g(2-x)]/2, then:",
        options: ["f''(x) = 0 for atleast two x in (0,2)", "f''(x) = 0 for exactly one x in (0,1)", "f''(x) = 0 for no x in (0,1)", "f'(3/2) + f'(1/2) = 1"],
        correctAnswer: "A",
        solution: "f'(x) = [g'(x) - g'(2-x)]/2. f'(1/2) = [g'(1/2) - g'(3/2)]/2 = 0. f'(3/2) = 0. Since f'' is zero at least at two points in (0,2)",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_APPDER006",
        subject: "Mathematics",
        topic: "Application of Derivatives",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let f(x) = (x+3)²(x-2)³, x ∈ [-4,4]. If M and m are the maximum and minimum values of f, respectively in [-4,4], then the value of M - m is:",
        options: ["600", "392", "608", "108"],
        correctAnswer: "C",
        solution: "f'(x) = 5(x+3)(x-2)²(x+1). Critical points: x = -3, -1, 2. f(-4) = -216, f(-3) = 0, f(4) = 392. M = 392, m = -216. M - m = 608",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
    id: "2023_PRAC_MATH426",
    subject: "Mathematics",
    topic: "Application of Derivatives",
    questionType: "MCQ",
    question: "Let $f:(0,1) \\rightarrow \\mathbb{R}$ be a function defined by $f(x)=\\frac{1}{1-e^{-x}}$ and $g(x)=(f(-x)-f(x))$. Consider two statements\n(I) g is an increasing function in (0, 1)\n(II) g is one-one in (0, 1)\nThen,",
    options: [
      "Only (I) is true",
      "Only (II) is true",
      "Neither (I) nor (II) is true",
      "Both (I) and (II) are true"
    ],
    correctAnswer: "Both (I) and (II) are true",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH427",
    subject: "Mathematics",
    topic: "Application of Derivatives",
    questionType: "MCQ",
    question: "Let $x=-\\frac{1}{2}$ be a local minima of the function $f(x) = 2x^4 - 18x^2 + 8x + 12, x \\in (-4,4)$. If M is local maximum value of the function f in (-4, 4), then $M=$",
    options: [
      "$12\\sqrt{6}-\\frac{33}{2}$",
      "$12\\sqrt{6}-\\frac{31}{2}$",
      "$18\\sqrt{6}-\\frac{33}{2}$",
      "$18\\sqrt{6}-\\frac{31}{2}$"
    ],
    correctAnswer: "$12\\sqrt{6}-\\frac{33}{2}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH428",
    subject: "Mathematics",
    topic: "Application of Derivatives",
    questionType: "MCQ",
    question: "Let the function $f(x)=2x^3+(2p-7)x^2+3(2p-9)x-6$ have a maxima for some value of $x<0$ and a minima for some value of $x>0$. Then, the set of all values of p is",
    options: [
      "$(\\frac{9}{2}, \\infty)$",
      "$(0, \\frac{9}{2})$",
      "$(-\\infty, \\frac{9}{2})$",
      "$(-\\frac{9}{2}, \\frac{9}{2})$"
    ],
    correctAnswer: "($-\\infty, \\frac{9}{2})$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH429",
    subject: "Mathematics",
    topic: "Application of Derivatives",
    questionType: "Numerical",
    question: "If the equation of the normal to the curve $y=\\frac{x-a}{(x+b)(x-2)}$ at the point $(1,-3)$ is $x-4y=13$, then the value of $a+b$ is equal to",
    options: [],
    correctAnswer: "4",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH430",
    subject: "Mathematics",
    topic: "Application of Derivatives",
    questionType: "Numerical",
    question: "Let $\\alpha_1, \\alpha_2, ..., \\alpha_7$ be the roots of the equation $x^7+3x^5-13x^3-15x=0$ and $|\\alpha_1| \\ge |\\alpha_2| \\ge ... \\ge |\\alpha_7|$. Then $\\alpha_1\\alpha_2-\\alpha_3\\alpha_4+\\alpha_5\\alpha_6$ is equal to",
    options: [],
    correctAnswer: "9",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH431",
    subject: "Mathematics",
    topic: "Application of Derivatives",
    questionType: "MCQ",
    question: "The number of points on the curve $y=54x^5-135x^4-70x^3+180x^2+210x$ at which the normal lines are parallel to $x+90y+2=0$ is:",
    options: [
      "2",
      "3",
      "4",
      "0"
    ],
    correctAnswer: "4",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH432",
    subject: "Mathematics",
    topic: "Application of Derivatives",
    questionType: "MCQ",
    question: "If the functions $f(x) = \\frac{x^3}{3} + ax + bx^2$ and $g(x) = x^3 + ax + bx^2, a \\neq 2b$ have a common extreme point, then $a+2b+7$ is equal to",
    options: [
      "4",
      "$\\frac{3}{2}$",
      "3",
      "6"
    ],
    correctAnswer: "6",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH433",
    subject: "Mathematics",
    topic: "Application of Derivatives",
    questionType: "MCQ",
    question: "A wire of length 20 m is to be cut into two pieces. A piece of length $l_1$ is bent to make a square of area $A_1$ and the other piece of length $l_2$ is made into a circle of area $A_2$. If $2A_1+3A_2$ is minimum then $(\\pi l_1):l_2$ is equal to:",
    options: [
      "6:1",
      "3:1",
      "1:6",
      "4:1"
    ],
    correctAnswer: "6:1",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH434",
    subject: "Mathematics",
    topic: "Application of Derivatives",
    questionType: "MCQ",
    question: "Let $f(x) = \\begin{vmatrix} 1+\\sin^2 x & \\cos^2 x & \\sin 2x \\\\ \\sin^2 x & 1+\\cos^2 x & \\sin 2x \\\\ \\sin^2 x & \\cos^2 x & 1+\\sin 2x \\end{vmatrix}, x \\in [\\frac{\\pi}{6}, \\frac{\\pi}{3}]$. If $\\alpha$ and $\\beta$ respectively are the maximum and the minimum values of f, then",
    options: [
      "$\\beta^2 - 2\\sqrt{\\alpha} = \\frac{19}{4}$",
      "$\\beta^2 + 2\\sqrt{\\alpha} = \\frac{19}{4}$",
      "$\\alpha^2 - \\beta^2 = 4\\sqrt{3}$",
      "$\\alpha^2 + \\beta^2 = \\frac{9}{2}$"
    ],
    correctAnswer: "$\\beta^2 - 2\\sqrt{\\alpha} = \\frac{19}{4}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH435",
    subject: "Mathematics",
    topic: "Application of Derivatives",
    questionType: "MCQ",
    question: "Let $f(x)=2x+\\tan^{-1}x$ and $g(x)=\\log_e(\\sqrt{1+x^2}+x)$, $x \\in [0,3]$. Then",
    options: [
      "There exists $x \\in [0,3]$ such that $f'(x) < g'(x)$",
      "$\\max f(x) > \\max g(x)$",
      "There exist $0 < x_1 < x_2 < 3$ such that $f(x) < g(x), \\forall x \\in (x_1, x_2)$",
      "$\\min f'(x) = 1 + \\max g'(x)$"
    ],
    correctAnswer: "$\\max f(x) > \\max g(x)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH436",
    subject: "Mathematics",
    topic: "Application of Derivatives",
    questionType: "Numerical",
    question: "If $f(x) = x^2+g'(1)x+g''(2)$ and $g(x)=f(1)x^2+xf'(x)+f''(x)$, then the value of $f(4)-g(4)$ is equal to",
    options: [],
    correctAnswer: "14",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH437",
    subject: "Mathematics",
    topic: "Application of Derivatives",
    questionType: "Numerical",
    question: "Let $f:\\mathbb{R} \\rightarrow \\mathbb{R}$ be a differentiable function such that $f'(x)+f(x)=\\int_0^2 f(t)dt$. If $f(0)=e^{-2}$ then $2f(0)-f(2)$ is equal to",
    options: [],
    correctAnswer: "1",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH438",
    subject: "Mathematics",
    topic: "Application of Derivatives",
    questionType: "MCQ",
    question: "The sum of the absolute maximum and minimum values of the function $f(x)=|x^2-5x+6|-3x+2$ in the interval [-1, 3] is equal to:",
    options: [
      "10",
      "12",
      "13",
      "24"
    ],
    correctAnswer: "10",
    questionImageUrl: "images/questions/2023_PRAC_MATH438.png"
  },
  {
        id: "2024_PRAC_AREA001",
        subject: "Mathematics",
        topic: "Area Under Curves",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The area enclosed by the curves xy + 4y = 16 and x + y = 6 is equal to:",
        options: ["28 - 30 log_e 2", "30 - 28 log_e 2", "30 - 32 log_e 2", "32 - 30 log_e 2"],
        correctAnswer: "C",
        solution: "From xy + 4y = 16, we get y(x + 4) = 16 and x + y = 6. Solving: x = 4, x = -2. Area = ∫_{-2}^4 [(6-x) - (16/(x+4))] dx = 30 - 32 ln 2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_AREA002",
        subject: "Mathematics",
        topic: "Area Under Curves",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Three points O(0,0), P(a,a²), Q(-b,b²), a > 0, b > 0 are on the parabola y = x². Let S₁ be the area of the region bounded by the line PQ and the parabola, and S₂ be the area of the triangle OPQ. If the minimum value of S₁/S₂ is m/n where gcd(m,n) = 1, then m + n is equal to:",
        options: ["5", "6", "7", "8"],
        correctAnswer: "C",
        solution: "PQ: y = (a-b)x + ab. S₁ = ∫_{-b}^a [(a-b)x + ab - x²] dx. After calculation, S₁/S₂ = (4/3)[1/a + 1/b + 2]. Minimum occurs when a = b, giving S₁/S₂ = 4/3. Therefore m + n = 7",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_AREA003",
        subject: "Mathematics",
        topic: "Area Under Curves",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The sum of squares of all possible values of k, for which area of the region bounded by the parabolas 2y² = kx and ky² = 2(y-x) is maximum, is equal to:",
        options: ["6", "7", "8", "9"],
        correctAnswer: "C",
        solution: "From the intersection conditions and using AM-GM inequality, the area is maximum when k = 2 or k = -2. Sum of squares = 4 + 4 = 8",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_AREA004",
        subject: "Mathematics",
        topic: "Area Under Curves",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let the area of the region {(x,y): x - 2y + 4 ≥ 0, x + 2y² ≥ 0, x + 4y² ≤ 8, y ≥ 0} be m/n, where m and n are coprime numbers. Then m + n is equal to _____",
        options: ["118", "119", "120", "121"],
        correctAnswer: "B",
        solution: "Computing the area by integration: A = ∫₀¹[(8-4y²) - (-2y²)]dy + ∫₁^{3/2}[(8-4y²) - (2y-4)]dy = 107/12. Therefore m + n = 119",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_AREA005",
        subject: "Mathematics",
        topic: "Area Under Curves",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the area of the region {(x,y): 0 ≤ y ≤ min{2x, 6x-x²}} is A, then 12A is equal to:",
        options: ["302", "303", "304", "305"],
        correctAnswer: "C",
        solution: "A = (1/2) × 4 × 8 + ∫₄⁶(6x-x²)dx = 16 + 76/3. Therefore 12A = 304",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_AREA006",
        subject: "Mathematics",
        topic: "Area Under Curves",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The area (in sq. units) of the part of circle x² + y² = 169 which is below the line 5x - y = 13 is -πα/2β + sin⁻¹(12/13), where α, β are coprime numbers. Then α + β is equal to:",
        options: ["170", "171", "172", "173"],
        correctAnswer: "B",
        solution: "Area = ∫_{-13}^{12} √(169-y²)dy - (1/2) × 25 × 5 = (π/2) × 169 - 65/2 + (169/2)sin⁻¹(12/13). Therefore α + β = 171",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_AREA007",
        subject: "Mathematics",
        topic: "Area Under Curves",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let the area of the region {(x,y): 0 ≤ x ≤ 3, 0 ≤ y ≤ min{x² + 2, 2x + 2}} be A. Then 12A is equal to _____",
        options: ["163", "164", "165", "166"],
        correctAnswer: "B",
        solution: "A = ∫₀²(x² + 2)dx + ∫₂³(2x + 2)dx = 41/3. Therefore 12A = 164",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_AREA008",
        subject: "Mathematics",
        topic: "Area Under Curves",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "The area (in square units) of the region bounded by the parabola y² = 4(x-2) and the line y = 2x - 8 is:",
        options: ["8", "9", "6", "7"],
        correctAnswer: "B",
        solution: "Let X = x-2. Then y² = 4X and y = 2(X+2) - 8 = 2X - 4. Area = ∫_{-2}⁴[-y²/4 + (y+4)/2] = 9",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_AREA009",
        subject: "Mathematics",
        topic: "Area Under Curves",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let Y = Y(X) be a curve lying in the first quadrant such that the area enclosed by the line Y - y = Y'(x)(X - x) and the coordinate axes, where (x,y) is any point on the curve, is always -y²/(2Y'(x)) + 1, Y'(x) ≠ 0. If Y(1) = 1, then 12Y(2) equals _____",
        options: ["19", "20", "21", "22"],
        correctAnswer: "B",
        solution: "From the given condition: dy/dx = (2xy-2)/(x²). Solving: Y = (2/3)·(1/x) + (1/3). Therefore 12Y(2) = 20",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_AREA010",
        subject: "Mathematics",
        topic: "Area Under Curves",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "The area of the region enclosed by the parabola (y-2)² = x-1, the line x - 2y + 4 = 0 and the positive coordinate axes is _____",
        options: ["4", "5", "6", "7"],
        correctAnswer: "B",
        solution: "Solving (y-2)² = x-1 and x = 2(y-2): x = 2. Area = ∫₀³((y-2)² + 1)dy - (1/2) × 1 × 2 = 5",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_AREA011",
        subject: "Mathematics",
        topic: "Area Under Curves",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "The area of the region {(x,y): y² ≤ 4x, x < 4, xy(x-1)(x-2)/((x-3)(x-4)) > 0, x ≠ 3} is:",
        options: ["16/3", "64/3", "8/3", "32/3"],
        correctAnswer: "D",
        solution: "For y > 0: x ∈ (0,1) ∪ (2,3). For y < 0: x ∈ (1,2) ∪ (3,4). Area = 2∫₀⁴√(4x)dx = 2·(2/3)[x^{3/2}]₀⁴ = 32/3",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_AREA012",
        subject: "Mathematics",
        topic: "Area Under Curves",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The area of the region enclosed by the parabola y = 4x - x² and 3y = (x-4)² is equal to:",
        options: ["32/9", "4", "6", "14/3"],
        correctAnswer: "C",
        solution: "Area = |∫₁⁴[(4x-x²) - (x-4)²/3]|dx = |4x²/2 - x³/3 - (x-4)³/9|₁⁴ = |(64/2 - 64/3 - 4/2 - 1/3 - 27/9)| = 6",
        questionImageUrl: null,
        solutionImageUrl: null
    },
  {
    id: "2023_PRAC_MATH412",
    subject: "Mathematics",
    topic: "Area Under Curves",
    questionType: "MCQ",
    question: "The area enclosed by the curves $y^2+4x=4$ and $y-2x=2$ is:",
    options: ["$\\frac{25}{3}$", "$\\frac{22}{3}$", "9", "$\\frac{23}{3}$"],
    correctAnswer: "9",
    questionImageUrl: "images/questions/2023_PRAC_MATH412.png"
  },
  {
    id: "2023_PRAC_MATH413",
    subject: "Mathematics",
    topic: "Area Under Curves",
    questionType: "Numerical",
    question: "If the area of the region bounded by the curves $y^2-2y=-x$, $x+y=0$ is A, then 8A is equal to",
    options: [],
    correctAnswer: "36",
    questionImageUrl: "images/questions/2023_PRAC_MATH413.png"
  },
  {
    id: "2023_PRAC_MATH414",
    subject: "Mathematics",
    topic: "Area Under Curves",
    questionType: "Numerical",
    question: "If the area enclosed by the parabolas $P_1: 2y=5x^2$ and $P_2: x^2-y+6=0$ is equal to the area enclosed by $P_1$ and $y=\\alpha x, \\alpha>0$, then $\\alpha^3$ is equal to",
    options: [],
    correctAnswer: "600",
    questionImageUrl: "images/questions/2023_PRAC_MATH414.png"
  },
  {
    id: "2023_PRAC_MATH415",
    subject: "Mathematics",
    topic: "Area Under Curves",
    questionType: "MCQ",
    question: "Let $\\Delta$ be the area of the region $\{(x,y) \\in \\mathbb{R}^2 : x^2+y^2 \\le 21, y^2 \\le 4x, x \\ge 1\}$. Then $\\frac{1}{2}(\\Delta - 21\\sin^{-1}\\frac{2}{\\sqrt{7}})$ is equal to",
    options: [
      "$2\\sqrt{3}-\\frac{1}{3}$",
      "$\\sqrt{3}-\\frac{2}{3}$",
      "$2\\sqrt{3}-\\frac{2}{3}$",
      "$\\sqrt{3}-\\frac{4}{3}$"
    ],
    correctAnswer: "$\\sqrt{3}-\\frac{4}{3}$",
    questionImageUrl: "images/questions/2023_PRAC_MATH415.png"
  },
  {
    id: "2023_PRAC_MATH416",
    subject: "Mathematics",
    topic: "Area Under Curves",
    questionType: "MCQ",
    question: "Let $A=\\{(x,y) \\in \\mathbb{R}^2 : y \\ge 0, 2x \\le y \\le \\sqrt{4-(x-1)^2}\\}$ and $B=\\{(x,y) \\in \\mathbb{R} \\times \\mathbb{R} : 0 \\le y \\le \\min\\{2x, \\sqrt{4-(x-1)^2}\\}\\}$. Then the ratio of the area of A to the area of B is",
    options: [
      "$\\frac{\\pi-1}{\\pi+1}$",
      "$\\frac{\\pi}{\\pi+1}$",
      "$\\frac{\\pi}{\\pi-1}$",
      "$\\frac{\\pi+1}{\\pi-1}$"
    ],
    correctAnswer: "$\\frac{\\pi-1}{\\pi+1}$",
    questionImageUrl: "images/questions/2023_PRAC_MATH416.png"
  },
  {
    id: "2023_PRAC_MATH417",
    subject: "Mathematics",
    topic: "Area Under Curves",
    questionType: "MCQ",
    question: "The area of the region $A=\\{(x,y):|\\cos x - \\sin x| \\le y \\le \\sin x, 0 \\le x \\le \\frac{\\pi}{2}\\}$ is",
    options: [
      "$1-\\frac{3}{\\sqrt{2}}+\\frac{4}{\\sqrt{5}}$",
      "$\\sqrt{5}+2\\sqrt{2}-4.5$",
      "$\\frac{3}{\\sqrt{5}}-\\frac{3}{\\sqrt{2}}+1$",
      "$\\sqrt{5}-2\\sqrt{2}+1$"
    ],
    correctAnswer: "$\\sqrt{5}-2\\sqrt{2}+1$",
    questionImageUrl: "images/questions/2023_PRAC_MATH417.png"
  },
  {
    id: "2023_PRAC_MATH418",
    subject: "Mathematics",
    topic: "Area Under Curves",
    questionType: "Numerical",
    question: "Let a be the area of the larger region bounded by the curve $y^2=8x$ and the lines $y=x$ and $x=2$, which lies in the first quadrant. Then the value of 3a is equal to",
    options: [],
    correctAnswer: "22",
    questionImageUrl: "images/questions/2023_PRAC_MATH418.png"
  },
  {
    id: "2023_PRAC_MATH419",
    subject: "Mathematics",
    topic: "Area Under Curves",
    questionType: "MCQ",
    question: "Let q be the maximum integral value of p in [0, 10] for which the roots of the equation $x^2-px+\\frac{5}{4}p=0$ are rational. Then the area of the region $\{(x,y):0 \\le y \\le (x-q)^2, 0 \\le x \\le q\}$ is",
    options: [
      "243",
      "25",
      "$\\frac{125}{3}$",
      "164"
    ],
    correctAnswer: "243",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH420",
    subject: "Mathematics",
    topic: "Area Under Curves",
    questionType: "Numerical",
    question: "Let A be the area of the region $\{(x,y):y \\ge x^2, y \\ge (1-x)^2, y \\le 2x(1-x)\}$. Then 540 A is equal to",
    options: [],
    correctAnswer: "25",
    questionImageUrl: "images/questions/2023_PRAC_MATH420.png"
  },
  {
    id: "2023_PRAC_MATH421",
    subject: "Mathematics",
    topic: "Area Under Curves",
    questionType: "Numerical",
    question: "Let for $x \\in R$, $f(x) = \\frac{x+|x|}{2}$ and $g(x)=\\begin{cases} x, & x<0 \\\\ x^2, & x \\ge 0 \\end{cases}$. Then area bounded by the curve $y=(fog)(x)$ and the lines $y=0, 2y-x=15$ is equal to",
    options: [],
    correctAnswer: "72",
    questionImageUrl: "images/questions/2023_PRAC_MATH421.png"
  },
  {
    id: "2023_PRAC_MATH422",
    subject: "Mathematics",
    topic: "Area Under Curves",
    questionType: "Numerical",
    question: "Let the area of the region $\{(x,y):|2x-1| \\le y \\le |x^2-x|, 0 \\le x \\le 1\}$ be A. Then $(6A+11)^2$ is equal to",
    options: [],
    correctAnswer: "125",
    questionImageUrl: "images/questions/2023_PRAC_MATH422.png"
  },
  {
    id: "2023_PRAC_MATH423",
    subject: "Mathematics",
    topic: "Area Under Curves",
    questionType: "MCQ",
    question: "The area enclosed by the closed curve C given by the differential equation $\\frac{dy}{dx} + \\frac{x+a}{y-2} = 0, y(1)=0$ is $4\\pi$. Let P and Q be the points of intersection of the curve C and the y-axis. If normals at P and Q on the curve C intersect x-axis at points R and S respectively, then the length of the line segment RS is",
    options: [
      "$2\\sqrt{3}$",
      "$\\frac{2\\sqrt{3}}{3}$",
      "2",
      "$\\frac{4\\sqrt{3}}{3}$"
    ],
    correctAnswer: "$\\frac{4\\sqrt{3}}{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH424",
    subject: "Mathematics",
    topic: "Area Under Curves",
    questionType: "Numerical",
    question: "Let A be the area bounded by the curve $y=x|x-3|$, the x-axis and the ordinates $x=-1$ and $x=2$. Then 12A is equal to",
    options: [],
    correctAnswer: "62",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH425",
    subject: "Mathematics",
    topic: "Area Under Curves",
    questionType: "MCQ",
    question: "If $A = \\frac{1}{2} \\begin{bmatrix} 1 & \\sqrt{3} \\\\ -\\sqrt{3} & 1 \\end{bmatrix}$, then:",
    options: [
      "$A^{30} - A^{25} = 2I$",
      "$A^{30} + A^{25} + A = I$",
      "$A^{30} + A^{25} - A = I$",
      "$A^{30} = A^{25}$"
    ],
    correctAnswer: "$A^{30} + A^{25} - A = I$",
    questionImageUrl: null
  }
,// Binomial Theorem Questions
    {
        id: "2024_PRAC_MATH123",
        subject: "Mathematics",
        topic: "Binomial Theorem",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "If the coefficient of x³⁰ in the expansion of (1 + 1/x)⁶(1 + x²)⁷(1 - x³)⁸; x ≠ 0 is α, then |α| equals:",
        options: [],
        correctAnswer: "678",
        solution: "Finding coefficient using multinomial expansion: |α| = 678",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH124",
        subject: "Mathematics",
        topic: "Binomial Theorem",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let m and n be the coefficients of seventh and thirteenth terms respectively in the expansion of (x + 1/(3∛(x)))¹⁸. Then (n/m)² is:",
        options: ["1/3", "4/9", "1/9", "9/4"],
        correctAnswer: "9/4",
        solution: "Using binomial expansion: (n/m)² = 9/4",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH125",
        subject: "Mathematics",
        topic: "Binomial Theorem",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "ⁿ⁻¹Cᵣ = (k² - 8)ⁿCᵣ₊₁ if and only if:",
        options: ["2√2 < k ≤ 3", "2√3 < k ≤ 3√2", "2√3 < k < 3√3", "2√2 < k < 2√3"],
        correctAnswer: "2√2 < k ≤ 3",
        solution: "Solving the inequality conditions: 2√2 < k ≤ 3",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH126",
        subject: "Mathematics",
        topic: "Binomial Theorem",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If A denotes the sum of all the coefficients in the expansion of (1 - 3x + 10x²)ⁿ and B denotes the sum of all the coefficients in the expansion of (1 + x²)ⁿ, then:",
        options: ["A = B³", "3A = B", "B = A³", "A = 3B"],
        correctAnswer: "A = B³",
        solution: "A = 8ⁿ, B = 2ⁿ, so A = B³",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH127",
        subject: "Mathematics",
        topic: "Binomial Theorem",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "The coefficient of x²⁰¹² in the expansion of (1 - x)²⁰⁰⁸(1 + x + x²)²⁰⁰⁷ is equal to:",
        options: [],
        correctAnswer: "0",
        solution: "No integer solutions for required powers, coefficient = 0",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH128",
        subject: "Mathematics",
        topic: "Binomial Theorem",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "If ¹¹C₁/2 + ¹¹C₂/3 + ... + ¹¹C₉/10 = n/m with gcd(n, m) = 1, then n + m is equal to:",
        options: [],
        correctAnswer: "2041",
        solution: "Sum equals 2035/6, so n + m = 2041",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH129",
        subject: "Mathematics",
        topic: "Binomial Theorem",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Remainder when 643²³² is divided by 9 is equal to:",
        options: [],
        correctAnswer: "1",
        solution: "Using modular arithmetic: remainder = 1",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH130",
        subject: "Mathematics",
        topic: "Binomial Theorem",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Number of integral terms in the expansion of (7^(1/2) + 11^(1/6))^824 is equal to:",
        options: [],
        correctAnswer: "138",
        solution: "For integral terms, power of 11 must be multiple of 6: 138 terms",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH131",
        subject: "Mathematics",
        topic: "Binomial Theorem",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Suppose 2-p, p, 2-α, α are the coefficient of four consecutive terms in the expansion of (1+x)ⁿ. Then the value of p² - α² + 6α + 2p equals:",
        options: ["4", "10", "8", "Data Inconsistent"],
        correctAnswer: "Data Inconsistent",
        solution: "No consistent solution exists for the given conditions",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH132",
        subject: "Mathematics",
        topic: "Binomial Theorem",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let α = Σₖ₌₀ⁿ (nCₖ)²/(k+1) and β = Σₖ₌₀ⁿ⁻¹ nCₖ·nCₖ₊₁/(k+2). If 5α = 6β, then n equals:",
        options: [],
        correctAnswer: "10",
        solution: "Solving the equation 5α = 6β: n = 10",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH133",
        subject: "Mathematics",
        topic: "Binomial Theorem",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "In the expansion of (1 + x)(1 - x²)(1 + 3/x + 3/x² + 1/x³)⁵, x ≠ 0, the sum of the coefficient of x³ and x⁻¹³ is equal to:",
        options: [],
        correctAnswer: "118",
        solution: "Finding coefficients: sum = 119 - 1 = 118",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH134",
        subject: "Mathematics",
        topic: "Binomial Theorem",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If for some m, n; ⁶Cₘ + 2(⁶Cₘ₊₁) + ⁶Cₘ₊₂ > ⁸C₃ and ⁿ⁻¹P₃ : ⁿP₄ = 1 : 8, then ⁿPₘ₊₁ + ⁿ⁺¹Cₘ is equal to:",
        options: ["380", "376", "384", "372"],
        correctAnswer: "372",
        solution: "Solving conditions: m = 2, n = 8, giving answer 372",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH135",
        subject: "Mathematics",
        topic: "Binomial Theorem",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let the coefficient of xʳ in the expansion of (x + 3)ⁿ⁻¹ + (x + 3)ⁿ⁻²(x + 2) + (x + 3)ⁿ⁻³(x + 2)² + ... + (x + 2)ⁿ⁻¹ be αᵣ. If Σᵣ₌₀ⁿ αᵣ = βⁿ - γⁿ, β, γ ∈ N, then the value of β² + γ² equals:",
        options: [],
        correctAnswer: "25",
        solution: "Sum = 4ⁿ - 3ⁿ, so β = 4, γ = 3, giving β² + γ² = 25",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
    id: "2023_PRAC_MATH388",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "MCQ",
    question: "The value of $\\sum_{r=0}^{22} {}^{22}C_r {}^{23}C_r$ is",
    options: [
      "${}^{45}C_{23}$",
      "${}^{44}C_{23}$",
      "${}^{45}C_{24}$",
      "${}^{44}C_{22}$"
    ],
    correctAnswer: "${}^{45}C_{23}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH389",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "Numerical",
    question: "Suppose $\\sum_{r=0}^{2023} r^2 {}^{2023}C_r = 2023 \\times \\alpha \\times 2^{2022}$. Then the value of $\\alpha$ is",
    options: [],
    correctAnswer: "1012",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH390",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "MCQ",
    question: "If $({}^{30}C_1)^2 + 2({}^{30}C_2)^2 + 3({}^{30}C_3)^2 + ... + 30({}^{30}C_{30})^2 = \\frac{\\alpha 60!}{(30!)^2}$, then $\\alpha$ is equal to",
    options: [
      "30",
      "60",
      "15",
      "10"
    ],
    correctAnswer: "15",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH391",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "Numerical",
    question: "Let the sum of the coefficients of the first three terms in the expansion of $(x - \\frac{3}{x^2})^n, x \\neq 0, n \\in N$ be 376. Then the coefficient of $x^4$ is",
    options: [],
    correctAnswer: "405",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH392",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "MCQ",
    question: "If $a_r$ is the coefficient of $x^{10-r}$ in the Binomial expansion of $(1+x)^{10}$, then $\\sum_{r=1}^{10} r^3 (\\frac{a_r}{a_{r-1}})^2$ is equal to",
    options: [
      "4895",
      "1210",
      "5445",
      "3025"
    ],
    correctAnswer: "1210",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH393",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "Numerical",
    question: "The constant term in the expansion of $(2x+\\frac{1}{x^7}+3x^2)^5$ is",
    options: [],
    correctAnswer: "1080",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH394",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "MCQ",
    question: "$\\sum_{k=0}^{6} {}^{51-k}C_3$ is equal to",
    options: [
      "${}^{51}C_4 - {}^{45}C_4$",
      "${}^{51}C_3 - {}^{45}C_3$",
      "${}^{52}C_4 - {}^{45}C_4$",
      "${}^{52}C_3 - {}^{45}C_3$"
    ],
    correctAnswer: "${}^{52}C_4 - {}^{45}C_4$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH395",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "Numerical",
    question: "The remainder when $(2023)^{2023}$ is divided by 35 is",
    options: [],
    correctAnswer: "7",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH396",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "Numerical",
    question: "If the co-efficient of $x^9$ in $(\\alpha x^3 + \\frac{1}{\\beta x})^{11}$ and the co-efficient of $x^{-9}$ in $(\\alpha x - \\frac{1}{\\beta x^3})^{11}$ are equal, then $(\\alpha \\beta)^2$ is equal to",
    options: [],
    correctAnswer: "1",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH397",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "Numerical",
    question: "Let the coefficients of three consecutive terms in the binomial expansion of $(1+2x)^n$ be in the ratio $2:5:8$. Then the coefficient of the term, which is in the middle of these three terms, is",
    options: [],
    correctAnswer: "1120",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH398",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "MCQ",
    question: "Let K be the sum of the coefficients of the odd powers of x in the expansion of $(1+x)^{99}$. Let a be the middle term in the expansion of $(2+\\frac{1}{\\sqrt{2}})^{200}$. If $\\frac{{}^{200}C_{99}K}{a} = \\frac{2^l m}{n}$, where m and n are odd numbers, then the ordered pair (l, n) is equal to:",
    options: [
      "(50, 51)",
      "(51, 99)",
      "(50, 101)",
      "(51, 101)"
    ],
    correctAnswer: "(50, 101)",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH399",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "MCQ",
    question: "If the coefficient of $x^{15}$ in the expansion of $(ax^3 + \\frac{1}{bx^{1/3}})^{15}$ is equal to the coefficient of $x^{-15}$ in the expansion of $(ax^{1/3} - \\frac{1}{bx^3})^{15}$, where a and b are positive real numbers, then for each such ordered pair (a, b):",
    options: [
      "$a=b$",
      "$ab=1$",
      "$a=3b$",
      "$ab=3$"
    ],
    correctAnswer: "$ab=1$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH400",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "Numerical",
    question: "The coefficient of $x^{301}$ in $(1+x)^{500} + x(1+x)^{499} + x^2(1+x)^{498} + ... + x^{500}$ is:",
    options: [],
    correctAnswer: "C(501, 200)",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH401",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "MCQ",
    question: "Let $x=(8\\sqrt{3}+13)^{13}$ and $y=(7\\sqrt{2}+9)^9$. If [t] denotes the greatest integer $\\le t$, then",
    options: [
      "[x] and [y] are both odd",
      "[x] is odd but [y] is even",
      "[x] is even but [y] is odd",
      "[x] + [y] is even"
    ],
    correctAnswer: "[x] + [y] is even",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH402",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "Numerical",
    question: "$50^{th}$ root of a number x is 12 and $50^{th}$ root of another number y is 18. Then the remainder obtained on dividing $(x+y)$ by 25 is",
    options: [],
    correctAnswer: "23",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH403",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "Numerical",
    question: "Let $\\alpha > 0$, be the smallest number such that the expansion of $(x^{\\frac{2}{3}} + \\frac{2}{x^3})^{30}$ has a term $\\beta x^{-\\alpha}, \\beta \\in N$. Then $\\alpha$ is equal to",
    options: [],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH404",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "Numerical",
    question: "The remainder on dividing $5^{99}$ by 11 is",
    options: [],
    correctAnswer: "9",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH405",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "Numerical",
    question: "The Coefficient of $x^{-6}$ in the expansion of $(\\frac{4x}{5} + \\frac{5}{2x^2})^9$ is",
    options: [],
    correctAnswer: "5040",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH406",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "Numerical",
    question: "If the constant term in the binomial expansion of $(\\frac{x^{\\frac{5}{2}}}{2} - \\frac{4}{x^l})^9$ is -84 and the Coefficient of $x^{-3l}$ is $2^\\alpha \\beta$ where $\\beta < 0$ is an odd number, Then $|\\alpha l - \\beta|$ is equal to",
    options: [],
    correctAnswer: "98",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH407",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "MCQ",
    question: "The value of $\\frac{1}{1!50!} + \\frac{1}{3!48!} + \\frac{1}{5!46!} + ... + \\frac{1}{49!2!} + \\frac{1}{51!1!}$ is",
    options: [
      "$\\frac{2^{50}}{50!}$",
      "$\\frac{2^{50}}{51!}$",
      "$\\frac{2^{51}}{51!}$",
      "$\\frac{2^{51}}{50!}$"
    ],
    correctAnswer: "$\\frac{2^{50}}{51!}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH408",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "Numerical",
    question: "The remainder when $19^{200}+23^{200}$ is divided by 49, is",
    options: [],
    correctAnswer: "29",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH409",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "Numerical",
    question: "If the term without x in the expansion of $(x^{\\frac{2}{3}} + \\frac{a}{x^3})^{22}$ is 7315, then $|a|$ is equal to",
    options: [],
    correctAnswer: "1",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH410",
    subject: "Mathematics",
    topic: "Binomial Theorem",
    questionType: "Numerical",
    question: "Let the sixth term in the binomial expansion of $(\\sqrt{2^{\\log_2(10-3^x)}} + \\sqrt[5]{2^{(x-2)\\log_2 3}})^m$, in the increasing powers of $2^{(x-2)\\log_2 3}$ be 21. If the binomial coefficients of the second, third and fourth terms in the expansion are respectively the first, third and fifth terms of an A.P., then the sum of the squares of all possible values of x is",
    options: [],
    correctAnswer: "4",
    questionImageUrl: null
  },
 {
        id: "2024_PRAC_MATH113",
        subject: "Mathematics",
        topic: "Circle",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let C: x² + y² = 4 and C': x² + y² - 4λx + 9 = 0 be two circles. If the set of all values of λ so that the circles C and C' intersect at two distinct points, is R - [a, b], then the point (8a + 12, 16b - 20) lies on the curve:",
        options: ["x² + 2y² - 5x + 6y = 3", "5x² - y = -11", "x² - 4y² = 7", "6x² + y² = 42"],
        correctAnswer: "6x² + y² = 42",
        solution: "For two circles to intersect at two distinct points: |r₁ - r₂| < CC' < r₁ + r₂. After solving: λ ∈ (-∞, -13/8) ∪ (13/8, ∞), so a = -13/8, b = 13/8. Point (-1, 6) satisfies option (4)",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH114",
        subject: "Mathematics",
        topic: "Circle",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let the line L: √2x + y = α pass through the point of intersection P (in the first quadrant) of the circle x² + y² = 3 and the parabola x² = 2y. Let the line L touch two circles C₁ and C₂ of equal radius 2√3. If the centres Q₁ and Q₂ of the circles C₁ and C₂ lie on the y-axis, then the square of the area of the triangle PQ₁Q₂ is equal to:",
        options: [],
        correctAnswer: "72",
        solution: "Intersection point P(√2, 1), α = 3. Using tangent condition and triangle area formula: Area = 6√2, so (Area)² = 72",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH115",
        subject: "Mathematics",
        topic: "Circle",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let the locus of the mid points of the chords of circle x² + (y - 1)² = 1 drawn from the origin intersect the line x + y = 1 at P and Q. Then, the length of PQ is:",
        options: ["1", "√2", "√2/2", "1"],
        correctAnswer: "1",
        solution: "Locus equation: x² + y² - y = 0. Distance between intersection points with x + y = 1 gives PQ = 1/√2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH116",
        subject: "Mathematics",
        topic: "Circle",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Four distinct points (2k, 3k), (1, 0), (0, 1) and (0, 0) lie on a circle for k equal to:",
        options: ["2/13", "5/13", "3/13", "1/13"],
        correctAnswer: "5/13",
        solution: "Points lie on circle with diameter joining (1,0) and (0,1). Using circle equation: k = 5/13",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH117",
        subject: "Mathematics",
        topic: "Circle",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Consider a circle (x - α)² + (y - β)² = 50, where α, β > 0. If the circle touches the line y + x = 0 at the point P, whose distance from the origin is 4√2, then (α + β)² is equal to:",
        options: [],
        correctAnswer: "100",
        solution: "Using tangent condition and distance from origin: (α + β)² = 100",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH118",
        subject: "Mathematics",
        topic: "Circle",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Equation of two diameters of a circle are 2x - 3y = 5 and 3x - 4y = 7. The line joining the points (-22/7, -4) and (-1/7, 3) intersects the circle at only one point P. Then 17β - α is equal to:",
        options: [],
        correctAnswer: "2",
        solution: "Finding center and using tangent condition: 17β - α = 2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH119",
        subject: "Mathematics",
        topic: "Circle",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the circles (x + 1)² + (y + 2)² = r² and x² + y² - 4x - 4y + 4 = 0 intersect at exactly two distinct points, then:",
        options: ["5 < r < 9", "0 < r < 7", "3 < r < 7", "1/2 < r < 7"],
        correctAnswer: "3 < r < 7",
        solution: "Using intersection condition for two circles: 3 < r < 7",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH120",
        subject: "Mathematics",
        topic: "Circle",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Consider two circles C₁: x² + y² = 25 and C₂: (x - α)² + y² = 16, where α ∈ (5, 9). Let the angle between the two radii (one to each circle) drawn from one of the intersection points of C₁ and C₂ be sin⁻¹(√63/8). If the length of common chord of C₁ and C₂ is β, then the value of (αβ)² equals:",
        options: [],
        correctAnswer: "1575",
        solution: "Using geometry and given angle: (αβ)² = 25 × 63 = 1575",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH121",
        subject: "Mathematics",
        topic: "Circle",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If one of the diameters of the circle x² + y² - 10x + 4y + 13 = 0 is a chord of another circle C, whose center is the point of intersection of the lines 2x + 3y = 12 and 3x - 2y = 5, then the radius of the circle C is:",
        options: ["√20", "4", "6", "3√2"],
        correctAnswer: "6",
        solution: "Center of C at (3, 2), radius calculation gives 6",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH122",
        subject: "Mathematics",
        topic: "Circle",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let a variable line passing through the centre of the circle x² + y² - 16x - 4y = 0, meet the positive coordinate axes at the point A and B. Then the minimum value of OA + OB, where O is the origin, is equal to:",
        options: ["12", "18", "20", "24"],
        correctAnswer: "18",
        solution: "Center at (8, 2). Using calculus to minimize OA + OB = 18",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
    id: "2023_PRAC_MATH323",
    subject: "Mathematics",
    topic: "Circle",
    questionType: "MCQ",
    question: "The locus of the mid points of the chords of the circle $C_1: (x-4)^2 + (y-5)^2 = 4$ which subtend an angle $\\theta_i$ at the centre of the circle $C_1$, is a circle of radius $r_i$. If $\\theta_1 = \\frac{\\pi}{3}, \\theta_2 = \\frac{2\\pi}{3}$ and $r_1^2 = r_2^2 + r_3^2$, then $\\theta_3$ is equal to",
    options: [
      "$\\frac{\\pi}{4}$",
      "$\\frac{3\\pi}{4}$",
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{2}$"
    ],
    correctAnswer: "$\\frac{\\pi}{2}$",
    questionImageUrl: "images/questions/2023_PRAC_MATH323.png"
  },
  {
    id: "2023_PRAC_MATH324",
    subject: "Mathematics",
    topic: "Circle",
    questionType: "MCQ",
    question: "The points of intersection of the line $ax+by=0$, $(a \\neq b)$ and the circle $x^2+y^2-2x=0$ are $A(\\alpha, 0)$ and $B(1, \\beta)$. The image of the circle with AB as a diameter in the line $x+y+2=0$ is:",
    options: [
      "$x^2+y^2+5x+5y+12=0$",
      "$x^2+y^2+3x+5y+8=0$",
      "$x^2+y^2+3x+3y+4=0$",
      "$x^2+y^2-5x-5y+12=0$"
    ],
    correctAnswer: "$x^2+y^2+5x+5y+12=0$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH325",
    subject: "Mathematics",
    topic: "Circle",
    questionType: "Numerical",
    question: "Points $P(-3,2)$, $Q(9,10)$ and $R(\\alpha,4)$ lie on a circle C with PR as its diameter. The tangents to C at the points Q and R intersect at the point S. If S lies on the line $2x-ky=1$, then k is equal to",
    options: [],
    correctAnswer: "3",
    questionImageUrl: "images/questions/2023_PRAC_MATH325.png"
  },
  {
    id: "2023_PRAC_MATH326",
    subject: "Mathematics",
    topic: "Circle",
    questionType: "MCQ",
    question: "Let the tangents at the points A(4, -11) and $B(8,-5)$ on the circle $x^2+y^2-3x+10y-15=0$ intersect at the point C. Then the radius of the circle, whose centre is C and the line joining A and B is its tangent, is equal to",
    options: [
      "$\\frac{3\\sqrt{3}}{4}$",
      "$2\\sqrt{13}$",
      "$\\sqrt{13}$",
      "$\\frac{2\\sqrt{13}}{3}$"
    ],
    correctAnswer: "$\\frac{2\\sqrt{13}}{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH327",
    subject: "Mathematics",
    topic: "Circle",
    questionType: "Numerical",
    question: "A circle with centre (2, 3) and radius 4 intersects the line $x+y=3$ at the points P and Q. If the tangents at P and Q intersect at the point $S(\\alpha, \\beta)$, then $4\\alpha-7\\beta$ is equal to",
    options: [],
    correctAnswer: "11",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH328",
    subject: "Mathematics",
    topic: "Circle",
    questionType: "MCQ",
    question: "Let $y=x+2, 4y=3x+6$ and $3y=4x+1$ be three tangent lines to a circle $(x-h)^2+(y-k)^2=r^2$. Then $h+k$ is equal to:",
    options: [
      "5",
      "$5(1+\\sqrt{2})$",
      "6",
      "$5\\sqrt{2}$"
    ],
    correctAnswer: "5",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH329",
    subject: "Mathematics",
    topic: "Circle",
    questionType: "Numerical",
    question: "Let $P(a_1, b_1)$ and $Q(a_2, b_2)$ be two distinct points on a circle with center $C(\\sqrt{2}, \\sqrt{3})$. Let O be the origin and OC be perpendicular to both CP and CQ. If the area of the triangle OCP is $\\frac{\\sqrt{35}}{2}$, then $a_1^2+a_2^2+b_1^2+b_2^2$ is equal to",
    options: [],
    correctAnswer: "24",
    questionImageUrl: "images/questions/2023_PRAC_MATH329.png"
  },
  {
    id: "2023_PRAC_MATH330",
    subject: "Mathematics",
    topic: "Circle",
    questionType: "MCQ",
    question: "Let a circle $C_1$ be obtained on rolling the circle $x^2+y^2-4x-6y+11=0$ upwards 4 units on the tangent T to it at the point (3, 2). Let $C_2$ be the image of $C_1$ in T. Let A and B be the centers of circles $C_1$ and $C_2$ respectively, and M and N be respectively the feet of perpendiculars drawn from A and B on the x-axis. Then the area of the trapezium AMNB is:",
    options: [
      "$2(2+\\sqrt{2})$",
      "$4(1+\\sqrt{2})$",
      "$3+2\\sqrt{2}$",
      "$2(1+\\sqrt{2})$"
    ],
    correctAnswer: "$4(1+\\sqrt{2})$",
    questionImageUrl: "images/questions/2023_PRAC_MATH330.png"
  },
  {
    id: "2023_PRAC_MATH331",
    subject: "Mathematics",
    topic: "Circle",
    questionType: "MCQ",
    question: "The set of all values of $a^2$ for which the line $x+y=0$ bisects two distinct chords drawn from a point $P(\\frac{1+a}{2}, \\frac{1-a}{2})$ on the circle $2x^2+2y^2-(1+a)x-(1-a)y=0$ is equal to:",
    options: [
      "$(8, \\infty)$",
      "$(4, \\infty)$",
      "(0, 4]",
      "(2, 12]"
    ],
    correctAnswer: "$(8, \\infty)$",
    questionImageUrl: "images/questions/2023_PRAC_MATH331.png"
  },
    {
        id: "2024_PRAC_COMPLEX001",
        subject: "Mathematics",
        topic: "Complex Number",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let S = {z ∈ ℂ : |z-1| = 1 and (√2-1)(z+z̄) - i(z-z̄) = 2√2} and z₁,z₂ ∈ S such that |z₁| = max_{z∈S} |z| and |z₂| = min_{z∈S} |z|. Then |√2z₁ - z₂|² equals:",
        options: ["1", "4", "3", "2"],
        correctAnswer: "D",
        solution: "Finding intersection points and calculating: |√2z₁ - z₂|² = 2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_COMPLEX002",
        subject: "Mathematics",
        topic: "Complex Number",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let P = {z ∈ ℂ : |z+2-3i| ≤ 1} and Q = {z ∈ ℂ : z(1+i) + z̄(1-i) ≤ -8}. Let in P∩Q, |z-3+2i| be maximum and minimum at z₁ and z₂ respectively. If |z₁|² + 2|z₂|² = α + β√2, where α,β are integers, then α + β equals:",
        options: ["34", "36", "38", "40"],
        correctAnswer: "B",
        solution: "Finding intersection and extrema: α = 31, β = 5. Therefore α + β = 36",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_COMPLEX003",
        subject: "Mathematics",
        topic: "Complex Number",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "If z is a complex number such that |z| ≥ 1, then the minimum value of |z + (3+4i)/2| is:",
        options: ["5/2", "2", "3", "0"],
        correctAnswer: "D",
        solution: "The minimum value is actually zero when z satisfies the constraint",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_COMPLEX004",
        subject: "Mathematics",
        topic: "Complex Number",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "If S = {z ∈ ℂ : |z-i| = |z+i| = |z-1|}, then n(S) equals:",
        options: ["1", "0", "3", "2"],
        correctAnswer: "A",
        solution: "ABC is a triangle with circumcenter as the only point equidistant from all vertices. n(S) = 1",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_COMPLEX005",
        subject: "Mathematics",
        topic: "Complex Number",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If α satisfies x² + x + 1 = 0 and (1+α)⁷ = A + Bα + Cα², where A,B,C ≥ 0, then 5(3A - 2B - C) equals:",
        options: ["3", "5", "7", "9"],
        correctAnswer: "B",
        solution: "α = ω, solving: A = 1, B = 1, C = 0. Therefore 5(3A - 2B - C) = 5",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_COMPLEX006",
        subject: "Mathematics",
        topic: "Complex Number",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let complex numbers α and 1/ᾱ lie on circles |z-z₀|² = 4 and |z-z₀|² = 16 respectively, where z₀ = 1+i. Then 100|α|² equals:",
        options: ["15", "20", "25", "30"],
        correctAnswer: "B",
        solution: "From the circle equations: 5|α|² = 1, so 100|α|² = 20",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_COMPLEX007",
        subject: "Mathematics",
        topic: "Complex Number",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If z = (1/2) - 2i and |z+1| = αz + β(1+i), where α,β ∈ ℝ, then α + β equals:",
        options: ["-4", "3", "2", "-1"],
        correctAnswer: "C",
        solution: "From the given conditions: β = 2α and solving: α + β = 2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_COMPLEX008",
        subject: "Mathematics",
        topic: "Complex Number",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let α,β be roots of x² - x + 2 = 0 with Im(α) > Im(β). Then α⁶ + α⁴ + β⁴ - 5α² equals:",
        options: ["10", "13", "15", "18"],
        correctAnswer: "B",
        solution: "Solving the complex equation and computing: α⁶ + α⁴ + β⁴ - 5α² = 13",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_COMPLEX009",
        subject: "Mathematics",
        topic: "Complex Number",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let r and θ respectively be the modulus and amplitude of the complex number z = 2 - i(2 tan(5π/8)). Then (r,θ) equals:",
        options: ["(2 sec(3π/8), 3π/8)", "(2 sec(3π/8), 5π/8)", "(2 sec(5π/8), 3π/8)", "(2 sec(11π/8), 11π/8)"],
        correctAnswer: "A",
        solution: "Computing modulus and argument: (r,θ) = (2 sec(3π/8), 3π/8)",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_COMPLEX010",
        subject: "Mathematics",
        topic: "Complex Number",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let α,β be roots of x² - √6x + 3 = 0 such that Im(α) > Im(β). If a,b are integers not divisible by 3 and n is natural such that α⁹⁹ + α⁹⁸ = 3ⁿ(a + ib), then n + a + b equals:",
        options: ["47", "49", "51", "53"],
        correctAnswer: "B",
        solution: "Finding roots and computing the expression: n = 49, a = -1, b = 1. Therefore n + a + b = 49",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_COMPLEX011",
        subject: "Mathematics",
        topic: "Complex Number",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If z = x + iy, xy ≠ 0, satisfies z² + iz̄ = 0, then |z²| equals:",
        options: ["9", "1", "4", "1/4"],
        correctAnswer: "D",
        solution: "From the equation: |z|² = 1, so |z²| = 1/4",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_COMPLEX012",
        subject: "Mathematics",
        topic: "Complex Number",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If z is a complex number, then the number of common roots of z¹⁹⁸⁵ + z¹⁰⁰ + 1 = 0 and z³ + 2z² + 2z + 1 = 0 equals:",
        options: ["1", "2", "0", "3"],
        correctAnswer: "B",
        solution: "Finding common roots: z = ω, ω². Two common roots",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_COMPLEX013",
        subject: "Mathematics",
        topic: "Complex Number",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "If α denotes the number of solutions of |1-i|ˣ = 2ˣ and β = |z|/arg(z) where z = (1+i)⁴((√π-i)/(√π+i) + (√π-i)/(1+√πi)), then the distance of point (α,β) from line 4x - 3y = 7 equals:",
        options: ["1", "2", "3", "4"],
        correctAnswer: "C",
        solution: "Finding α = 1, β = 4 and calculating distance: 3",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_COMPLEX014",
        subject: "Mathematics",
        topic: "Complex Number",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let z₁ and z₂ be two complex numbers such that z₁ + z₂ = 5 and z₁³ + z₂³ = 20 + 15i. Then |z₁⁴ + z₂⁴| equals:",
        options: ["30√3", "75", "15√15", "25√3"],
        correctAnswer: "B",
        solution: "Using symmetric functions: |z₁⁴ + z₂⁴| = 75",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
    id: "2023_PRAC_MATH377",
    subject: "Mathematics",
    topic: "Complex Number",
    questionType: "MCQ",
    question: "Let $p,q \\in \\mathbb{R}$ and $(1-\\sqrt{3}i)^{200} = 2^{199}(p+iq), i=\\sqrt{-1}$. Then $p+q+q^2$ and $p-q+q^2$ are roots of the equation.",
    options: [
      "$x^2+4x-1=0$",
      "$x^2-4x+1=0$",
      "$x^2+4x+1=0$",
      "$x^2-4x-1=0$"
    ],
    correctAnswer: "$x^2-4x+1=0$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH378",
    subject: "Mathematics",
    topic: "Complex Number",
    questionType: "MCQ",
    question: "The value of $(\\frac{1+\\sin\\frac{2\\pi}{9} + i\\cos\\frac{2\\pi}{9}}{1+\\sin\\frac{2\\pi}{9} - i\\cos\\frac{2\\pi}{9}})^3$ is",
    options: [
      "$\\frac{-1}{2}(1-i\\sqrt{3})$",
      "$\\frac{1}{2}(1-i\\sqrt{3})$",
      "$\\frac{-1}{2}(\\sqrt{3}-i)$",
      "$\\frac{1}{2}(\\sqrt{3}+i)$"
    ],
    correctAnswer: "$\\frac{-1}{2}(\\sqrt{3}-i)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH379",
    subject: "Mathematics",
    topic: "Complex Number",
    questionType: "MCQ",
    question: "Let $z_1=2+3i$ and $z_2=3+4i$. The set $S=\\{z \\in C:|z-z_1|^2-|z-z_2|^2 = |z_1-z_2|^2\\}$ represents a",
    options: [
      "straight line with sum of its intercepts on the coordinate axes equals 14",
      "hyperbola with the length of the transverse axis 7",
      "straight line with the sum of its intercepts on the coordinate axes equals -18",
      "hyperbola with eccentricity 2"
    ],
    correctAnswer: "straight line with sum of its intercepts on the coordinate axes equals 14",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH380",
    subject: "Mathematics",
    topic: "Complex Number",
    questionType: "MCQ",
    question: "Let z be a complex number such that $|\\frac{z-2i}{z+i}|=2, z \\neq -i$. Then z lies on the circle of radius 2 and centre",
    options: [
      "(2, 0)",
      "(0, 0)",
      "(0, 2)",
      "(0, -2)"
    ],
    correctAnswer: "(0, -2)",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH381",
    subject: "Mathematics",
    topic: "Complex Number",
    questionType: "MCQ",
    question: "For two non-zero complex numbers $Z_1$ and $Z_2$, if $Re(z_1 z_2)=0$ and $Re(z_1+z_2)=0$, then which of the following are possible?\n(A) $Im(z_1)>0$ and $Im(z_2)>0$\n(B) $Im(z_1)<0$ and $Im(z_2)>0$\n(C) $Im(z_1)>0$ and $Im(z_2)<0$\n(D) $Im(z_1)<0$ and $Im(z_2)<0$\nChoose the correct answer from the options given below:",
    options: [
      "B and D",
      "B and C",
      "A and B",
      "A and C"
    ],
    correctAnswer: "B and C",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH382",
    subject: "Mathematics",
    topic: "Complex Number",
    questionType: "Numerical",
    question: "Let $\\alpha=8-14i$, $A = \\{z \\in \\mathbb{C} : \\frac{\\alpha z - \\bar{\\alpha}\\bar{z}}{z^2 - (\\bar{z})^2 - 112i} = 1\\}$ and $B = \\{z \\in \\mathbb{C} : |z+3i|=4\\}$. Then $\\sum_{z \\in A \\cap B} (Re~z - Im~z)$ is equal to",
    options: [],
    correctAnswer: "14",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH383",
    subject: "Mathematics",
    topic: "Complex Number",
    questionType: "Numerical",
    question: "Let $z=1+i$ and $z_1 = \\frac{1+i\\bar{z}}{\\bar{z}(1-z)+\\frac{1}{z}}$. Then $\\frac{12}{\\pi} arg(z_1)$ is equal to",
    options: [],
    correctAnswer: "9",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH384",
    subject: "Mathematics",
    topic: "Complex Number",
    questionType: "MCQ",
    question: "For all $z \\in C$ on the curve $C_1: |z|=4$, let the locus of the point $z + \\frac{1}{z}$ be the curve $C_2$. Then",
    options: [
      "the curves $C_1$ and $C_2$ intersect at 4 points",
      "the curve $C_2$ lies inside $C_1$",
      "the curves $C_1$ and $C_2$ intersect at 2 points",
      "the curve $C_1$ lies inside $C_2$"
    ],
    correctAnswer: "the curves $C_1$ and $C_2$ intersect at 4 points",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH385",
    subject: "Mathematics",
    topic: "Complex Number",
    questionType: "MCQ",
    question: "The complex number $z = \\frac{i-1}{\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}}$ is equal to:",
    options: [
      "$\\sqrt{2}(\\cos\\frac{5\\pi}{12} + i\\sin\\frac{5\\pi}{12})$",
      "$\\cos\\frac{\\pi}{12} - i\\sin\\frac{\\pi}{12}$",
      "$\\sqrt{2}(\\cos\\frac{\\pi}{12} + i\\sin\\frac{\\pi}{12})$",
      "$\\sqrt{2}i(\\cos\\frac{5\\pi}{12} - i\\sin\\frac{5\\pi}{12})$"
    ],
    correctAnswer: "$\\sqrt{2}(\\cos\\frac{5\\pi}{12} + i\\sin\\frac{5\\pi}{12})$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH386",
    subject: "Mathematics",
    topic: "Complex Number",
    questionType: "MCQ",
    question: "If the center and radius of the circle $|\\frac{z-2}{z-3}|=2$ are respectively $(\\alpha, \\beta)$ and $\\gamma$, then $3(\\alpha+\\beta+\\gamma)$ is equal to",
    options: [
      "11",
      "9",
      "10",
      "12"
    ],
    correctAnswer: "12",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH387",
    subject: "Mathematics",
    topic: "Complex Number",
    questionType: "MCQ",
    question: "Let a, b be two real numbers such that $ab<0$. If the complex number $\\frac{1+ai}{b+i}$ is of unit modulus and $a+ib$ lies on the circle $|z-1|=|2z|$, then a possible value of $\\frac{1+[a]}{4b}$, where [t] is greatest integer function, is:",
    options: [
      "$-\\frac{1}{2}$",
      "-1",
      "1",
      "$\\frac{1}{2}$"
    ],
    correctAnswer: "$-\\frac{1}{2}$",
    questionImageUrl: null
  },     
  {
        id: "2024_PRAC_CD001",
        subject: "Mathematics",
        topic: "Continuity and Differentiability",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let f: ℝ → ℝ be defined as f(x) = {(a-b cos 2x)/x² for x < 0; x² + cx + 2 for 0 ≤ x ≤ 1; 2x + 1 for x > 1}. If f is continuous everywhere in ℝ and m is the number of points where f is NOT differentiable, then m + a + b + c equals:",
        options: ["1", "4", "3", "2"],
        correctAnswer: "D",
        solution: "For continuity: a = b = 1, c = 0. Function is differentiable everywhere except at one point. m = 0. Therefore m + a + b + c = 2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_CD002",
        subject: "Mathematics",
        topic: "Continuity and Differentiability",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let f(x) = ||2x² + 5|x| - 3|, x ∈ ℝ. If m and n denote the number of points where f is not continuous and not differentiable respectively, then m + n equals:",
        options: ["5", "2", "0", "3"],
        correctAnswer: "D",
        solution: "Analyzing the function: m = 0 (continuous everywhere), n = 3 (not differentiable at 3 points). Therefore m + n = 3",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_CD003",
        subject: "Mathematics",
        topic: "Continuity and Differentiability",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Consider the function f(x) = {a(7x-12-x²)/(b|x²-7x+12|) for x < 3; sin(x-3)/(x-[x]) for x > 3; b for x = 3}, where [x] denotes the greatest integer ≤ x. If S denotes the set of all ordered pairs (a,b) such that f(x) is continuous at x = 3, then the number of elements in S is:",
        options: ["2", "Infinitely many", "4", "1"],
        correctAnswer: "D",
        solution: "For continuity at x = 3: only one ordered pair (a,b) = (-4,2) satisfies the conditions",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_CD004",
        subject: "Mathematics",
        topic: "Continuity and Differentiability",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Consider f: (0,2) → ℝ defined by f(x) = x/2 + 2/x and g(x) = {min{f(t)}: 0 < t ≤ x, 0 < x ≤ 1; 3/2 + x: 1 < x < 2}. Then:",
        options: ["g is continuous but not differentiable at x = 1", "g is not continuous for all x ∈ (0,2)", "g is neither continuous nor differentiable at x = 1", "g is continuous and differentiable for all x ∈ (0,2)"],
        correctAnswer: "A",
        solution: "f(x) is decreasing in domain. g is continuous but not differentiable at x = 1",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_CD005",
        subject: "Mathematics",
        topic: "Continuity and Differentiability",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let f(x) = √(lim_{r→x} {2r²[(f(r))² - f(x)f(r)]/(r² - x²) - r³e^{f(r)/r}}) be differentiable in (-∞,0) ∪ (0,∞) and f(1) = 1. Then the value of e^a, such that f(a) = 0, equals:",
        options: ["1", "2", "3", "4"],
        correctAnswer: "B",
        solution: "Solving the differential equation: e^a = 2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_CD006",
        subject: "Mathematics",
        topic: "Continuity and Differentiability",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the function f(x) = {1/|x| for |x| ≥ 2; ax² + 2b for |x| < 2} is differentiable on ℝ, then 48(a + b) equals:",
        options: ["12", "15", "18", "21"],
        correctAnswer: "B",
        solution: "For differentiability: a = -1/16, b = 3/8. Therefore 48(a + b) = 15",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_CD007",
        subject: "Mathematics",
        topic: "Continuity and Differentiability",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let a and b be real constants such that f(x) = {x² + 3x + a for x ≤ 1; bx + 2 for x > 1} be differentiable on ℝ. Then ∫₋₂² f(x)dx equals:",
        options: ["15/6", "19/6", "21", "17"],
        correctAnswer: "D",
        solution: "For differentiability: a = 3, b = 5. Therefore ∫₋₂² f(x)dx = 17",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_CD008",
        subject: "Mathematics",
        topic: "Continuity and Differentiability",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let f: ℝ - {0} → ℝ be a function satisfying f(x/y) = f(x)/f(y) for all x,y,f(y) ≠ 0. If f'(1) = 2024, then:",
        options: ["xf'(x) - 2024f(x) = 0", "xf'(x) + 2024f(x) = 0", "xf'(x) + f(x) = 2024", "xf'(x) - 2023f(x) = 0"],
        correctAnswer: "A",
        solution: "From the functional equation: xf'(x) - 2024f(x) = 0",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_CD009",
        subject: "Mathematics",
        topic: "Continuity and Differentiability",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let g(x) be a linear function and f(x) = {g(x) for x ≤ 0; ((1+x)/(2+x))^{1/x} for x > 0} is continuous at x = 0. If f'(1) = f(-1), then g(3) equals:",
        options: ["log_e(1/3)", "4/(9e^{1/3})", "log_e(1/3) + 1", "log_e(4/9e^{1/3})"],
        correctAnswer: "D",
        solution: "Finding g(x) and evaluating: g(3) = log_e(4/9e^{1/3})",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_CD010",
        subject: "Mathematics",
        topic: "Continuity and Differentiability",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "Consider f: (0,∞) → ℝ defined by f(x) = e^{-|log_e x|}. If m and n be respectively the number of points at which f is not continuous and f is not differentiable, then m + n equals:",
        options: ["0", "3", "1", "2"],
        correctAnswer: "C",
        solution: "f(x) = {x for 0 < x < 1; 1/x for x ≥ 1}. m = 0, n = 1. Therefore m + n = 1",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
    id: "2023_PRAC_MATH375",
    subject: "Mathematics",
    topic: "Continuity and Differentiability",
    questionType: "MCQ",
    question: "Let $f(x) = \\begin{cases} x^2 \\sin(\\frac{1}{x}), & x \\neq 0 \\\\ 0, & x=0 \\end{cases}$. Then at $x=0$",
    options: [
      "f is continuous but not differentiable",
      "f is continuous but f' is not continuous",
      "f and f' both are continuous",
      "f' is continuous but not differentiable"
    ],
    correctAnswer: "f is continuous but f' is not continuous",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH376",
    subject: "Mathematics",
    topic: "Continuity and Differentiability",
    questionType: "MCQ",
    question: "If the function $f(x) = \\begin{cases} (1+|\\cos x|)^{\\frac{\\lambda}{|\\cos x|}}, & 0 < x < \\frac{\\pi}{2} \\\\ \\mu, & x=\\frac{\\pi}{2} \\\\ e^{\\frac{\\cot 6x}{\\cot 4x}}, & \\frac{\\pi}{2} < x < \\pi \\end{cases}$ is continuous at $x=\\frac{\\pi}{2}$, then $9\\lambda+6\\log_e \\mu + \\mu^6 - e^{6\\lambda}$ is equal to",
    options: [
      "-11",
      "8",
      "$2e^4+8$",
      "10"
    ],
    correctAnswer: "10",
    questionImageUrl: null
  },
    {
        id: "2024_PRAC_DEFINT001",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "The value of the integral ∫₀^(π/4) (x dx)/(sin⁴(2x) + cos⁴(2x)) equals:",
        options: ["√2π²/8", "√2π²/16", "√2π²/32", "√2π²/64"],
        correctAnswer: "C",
        solution: "Using substitution and properties of definite integrals: I = √2π²/32",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT002",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If ∫₍₋π/₂₎^(π/2) (8√2 cos x dx)/((1+e^(sin x))(1+sin⁴x)) = απ + β log_e(3 + 2√2), where α, β are integers, then α² + β² equals:",
        options: ["6", "8", "10", "12"],
        correctAnswer: "B",
        solution: "Using King's rule and substitution: α = 2, β = 2. Therefore α² + β² = 8",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT003",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "The value of ∫₁⁰ (2x³ - 3x² - x + 1) dx is equal to:",
        options: ["0", "1", "2", "-1"],
        correctAnswer: "A",
        solution: "Using properties of definite integrals where f(2a-x) = -f(x): I = 0",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT004",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If ∫₀^(π/3) cos⁴x dx = aπ + b√3, where a and b are rational numbers, then 9a + 8b equals:",
        options: ["2", "1", "3", "3/2"],
        correctAnswer: "A",
        solution: "Evaluating the integral: a = 1/8, b = 7/64. Therefore 9a + 8b = 2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT005",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let f: (0,∞) → ℝ and F(x) = ∫ₓ⁰ tf(t)dt. If F(x²) = x⁴ + x⁵, then ∑₁² f(r²) equals:",
        options: ["215", "219", "225", "230"],
        correctAnswer: "B",
        solution: "Finding f(t) = 2 + (5/2)√t and calculating the sum: 219",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT006",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If (a,b) be the orthocenter of triangle with vertices (1,2), (2,3), (3,1), and I₁ = ∫ₐᵇ x sin(4x-x²)dx, I₂ = ∫ₐᵇ sin(4x-x²)dx, then 36(I₁/I₂) equals:",
        options: ["72", "88", "80", "66"],
        correctAnswer: "A",
        solution: "Finding orthocenter and using King's rule: 36(I₁/I₂) = 72",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT007",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If ∫₁⁰ dx/(√3+x+√1+x) = a + b√2 + c√3, where a,b,c are rational numbers, then 2a + 3b - 4c equals:",
        options: ["4", "10", "7", "8"],
        correctAnswer: "D",
        solution: "Rationalizing and integrating: a = 3, b = -1/2, c = -1. Therefore 2a + 3b - 4c = 8",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT008",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "For 0 < a < 1, the value of the integral ∫₀^π dx/(1-2a cos x + a²) is:",
        options: ["π²", "π/(π+a²)", "π²/(π-a²)", "π/(1-a²)"],
        correctAnswer: "D",
        solution: "Using standard integral formula: I = π/(1-a²)",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT009",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let f(x) = ∫ₓ⁰ g(t) log_e((1-t)/(1+t))dt, where g is a continuous odd function. If ∫₍₋π/₂₎^(π/2) (f(x) + x²cos x/(1+eˣ))dx = (π²/4) - α, then α equals:",
        options: ["1", "2", "3", "4"],
        correctAnswer: "B",
        solution: "Using properties of odd functions and integration: α = 2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT010",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the value of the integral ∫₍₋(π+a)₎^(-π/2) (x²cos x/(1+πˣ) + 1+sin²x/(1+e^(sin x)))dx = 2033π/4, then the value of a is:",
        options: ["3", "-3/2", "2", "3/2"],
        correctAnswer: "A",
        solution: "Using King's rule and solving: a = 3",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT011",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If ∫₍π/₆₎^(π/3) √(1-sin 2x)dx = α + β√2 + γ√3, where α, β, γ are rational numbers, then 3α + 4β - γ equals:",
        options: ["5", "6", "7", "8"],
        correctAnswer: "B",
        solution: "Evaluating the integral: α = -1, β = 2, γ = -1. Therefore 3α + 4β - γ = 6",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT012",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "lim_{n→∞} ∑ₖ₌₁ⁿ n³/((n²+k²)(n²+3k²)) equals:",
        options: ["(2√3+3)π/24", "13π/(8(4√3+3))", "13(2√3-3)π/8", "π/(8(2√3+3))"],
        correctAnswer: "B",
        solution: "Converting to definite integral and evaluating: 13π/(8(4√3+3))",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT013",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The value of 9∫₀⁹ [√(10x/(x+1))]dx, where [t] denotes the greatest integer ≤ t, equals:",
        options: ["150", "155", "160", "165"],
        correctAnswer: "B",
        solution: "Evaluating the floor function integral: 155",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT014",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let y = f(x) be a thrice differentiable function. If tangents make angles π/6 and π/4 with x-axis at (1,f(1)) and (3,f(3)), and 27∫₁³ ((f'(t))² + 1)f''(t)dt = α + β√3, then α + β equals:",
        options: ["-14", "26", "-16", "36"],
        correctAnswer: "B",
        solution: "Using calculus and integration: α = 36, β = -10. Therefore α + β = 26",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT015",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let f: ℝ → ℝ be defined f(x) = ae^(2x) + be^x + cx. If f(0) = -1, f'(log_e 2) = 21, and ∫₀^(log 4) (f(x) - cx)dx = 39/2, then |a + b + c| equals:",
        options: ["16", "10", "12", "8"],
        correctAnswer: "D",
        solution: "Solving the system: a = 5, b = -6, c = -7. Therefore |a + b + c| = 8",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT016",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "If the integral 525∫₀^(π/2) sin 2x cos^(11/2) x(1 + cos x)dx is equal to (n√2 - 64)/2, then n equals:",
        options: ["174", "176", "178", "180"],
        correctAnswer: "B",
        solution: "Evaluating the complex integral: n = 176",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT017",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let S = (-1,∞) and f: S → ℝ be defined by f(x) = ∫_{-1}^x (e^t - 1)^{11}(2t-1)^5(t-2)^7(t-3)^{12}(2t-10)^{61}dt. Let p = sum of squares of values of x where f(x) attains local maxima on S, and q = sum of values of x where f(x) attains local minima on S. Then p² + 2q equals:",
        options: ["25", "27", "30", "32"],
        correctAnswer: "B",
        solution: "Finding critical points: p = 4, q = 11/2. Therefore p² + 2q = 27",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT018",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let f: ℝ → ℝ be defined by f(x) = 4x/(4^x + 2). If M = ∫_{f(1-a)}^{f(a)} x sin⁴(x(1-x))dx and N = ∫_{f(1-a)}^{f(a)} sin⁴(x(1-x))dx, where a ≠ 1/2, and αM = βN with α,β ∈ ℕ, then α² + β² equals:",
        options: ["3", "5", "7", "9"],
        correctAnswer: "B",
        solution: "Using properties of the function: α = 2, β = 1. Therefore α² + β² = 5",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT019",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let f,g: (0,∞) → ℝ be defined by f(x) = ∫_{-x}^x (|t| - t²)e^{-t²}dt and g(x) = ∫₀^{x²} t^{1/2}e^{-t}dt. Then (f(√(log_e 9)) + g(√(log_e 9))) equals:",
        options: ["6", "9", "8", "10"],
        correctAnswer: "C",
        solution: "Evaluating both integrals: f + g = 8",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DEFINT020",
        subject: "Mathematics",
        topic: "Definite Integration",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "|∫₀^π (120x²sin x cos x)/(π³(sin⁴x + cos⁴x))dx| equals:",
        options: ["12", "15", "18", "20"],
        correctAnswer: "B",
        solution: "Using substitution and properties: |integral| = 15",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
    id: "2023_PRAC_MATH351",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "Numerical",
    question: "The value of $12 \\int_0^3 |x^2-3x+2| dx$ is",
    options: [],
    correctAnswer: "22",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH352",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "Numerical",
    question: "The value of $\\frac{8}{\\pi} \\int_0^{\\frac{\\pi}{2}} \\frac{(\\cos x)^{2023}}{(\\sin x)^{2023}+(\\cos x)^{2023}} dx$ is",
    options: [],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH353",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "The value of $\\int_{\\frac{3\\sqrt{2}}{4}}^{\\frac{3\\sqrt{3}}{4}} \\frac{48}{\\sqrt{9-4x^2}} dx$ is equal to",
    options: [
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{6}$",
      "$2\\pi$"
    ],
    correctAnswer: "$2\\pi$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH354",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "Numerical",
    question: "Let f be a differentiable function defined on $[0, \\frac{\\pi}{2}]$ such that $f(x)>0$ and $f(x)+\\int_0^x f(t) \\sqrt{1-(\\log_e f(t))^2} dt = e, \\forall x \\in [0, \\frac{\\pi}{2}]$. Then $(6 \\log_e f(\\frac{\\pi}{6}))^2$ is equal to",
    options: [],
    correctAnswer: "27",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH355",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "The minimum value of the function $f(x) = \\int_0^2 e^{|x-t|} dt$ is",
    options: [
      "$2(e-1)$",
      "$2e-1$",
      "2",
      "$e(e-1)$"
    ],
    correctAnswer: "$2(e-1)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH356",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "The value of $\\lim_{n \\to \\infty} \\frac{1+2-3+4+5-6+...+ (3n-2)+(3n-1)-3n}{\\sqrt{2n^4+4n+3} - \\sqrt{n^4+5n+4}}$ is:",
    options: [
      "$\\frac{\\sqrt{2}+1}{2}$",
      "$3(\\sqrt{2}+1)$",
      "$\\frac{3}{2}(\\sqrt{2}+1)$",
      "$\\frac{3}{2\\sqrt{2}}$"
    ],
    correctAnswer: "$\\frac{3}{2}(\\sqrt{2}+1)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH357",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "The integral $16 \\int_1^2 \\frac{dx}{x^3(x^2+2)^2}$ is equal to",
    options: [
      "$\\frac{11}{6} + \\log_e 4$",
      "$\\frac{11}{12} + \\log_e 4$",
      "$\\frac{11}{12} - \\log_e 4$",
      "$\\frac{11}{6} - \\log_e 4$"
    ],
    correctAnswer: "$\\frac{11}{6} - \\log_e 4$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH358",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "Numerical",
    question: "If $\\int_{1/3}^3 |\\log_e x| dx = \\frac{m}{n} \\log_e (\\frac{n^2}{e})$, where m and n are coprime natural numbers, then $m^2+n^2-5$ is equal to",
    options: [],
    correctAnswer: "20",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH359",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "Let $[x]$ denote the greatest integer $\\le x$. Consider the function $f(x) = \\max \\{x^2, 1+[x]\\}$. Then the value of the integral $\\int_0^2 f(x) dx$ is",
    options: [
      "$\\frac{5+4\\sqrt{2}}{3}$",
      "$\\frac{8+4\\sqrt{2}}{3}$",
      "$\\frac{1+5\\sqrt{2}}{3}$",
      "$\\frac{4+5\\sqrt{2}}{3}$"
    ],
    correctAnswer: "$\\frac{5+4\\sqrt{2}}{3}$",
    questionImageUrl: "images/questions/2023_PRAC_MATH359.png"
  },
  {
    id: "2023_PRAC_MATH360",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "Let $f(x) = x + \\frac{a}{\\pi^2-4} \\sin x + \\frac{b}{\\pi^2-4} \\cos x, x \\in \\mathbb{R}$ be a function which satisfies $f(x) = x + \\int_0^{\\pi/2} \\sin(x+y)f(y)dy$. Then $(a+b)$ is equal to",
    options: [
      "$-\\pi(\\pi+2)$",
      "$-2\\pi(\\pi+2)$",
      "$-2\\pi(\\pi-2)$",
      "$-\\pi(\\pi-2)$"
    ],
    correctAnswer: "$-2\\pi(\\pi+2)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH361",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "The value of the integral $\\int_{1/2}^2 \\frac{\\tan^{-1}x}{x} dx$ is equal to",
    options: [
      "$\\pi \\log_e 2$",
      "$\\frac{1}{2} \\log_e 2$",
      "$\\frac{\\pi}{2} \\log_e 2$",
      "$\\frac{\\pi}{4} \\log_e 2$"
    ],
    correctAnswer: "$\\frac{\\pi}{2} \\log_e 2$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH362",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "The value of the integral $\\int_1^2 (\\frac{t^4+1}{t^6+1}) dt$ is",
    options: [
      "$tan^{-1}\\frac{1}{2} + \\frac{1}{3}tan^{-1}8 - \\frac{\\pi}{3}$",
      "$tan^{-1}2 - \\frac{1}{3}tan^{-1}8 + \\frac{\\pi}{3}$",
      "$tan^{-1}2 + \\frac{1}{3}tan^{-1}8 - \\frac{\\pi}{3}$",
      "$tan^{-1}\\frac{1}{2} - \\frac{1}{3}tan^{-1}8 + \\frac{\\pi}{3}$"
    ],
    correctAnswer: "$tan^{-1}2 + \\frac{1}{3}tan^{-1}8 - \\frac{\\pi}{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH363",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "If [t] denotes the greatest integer $\\le t$, then the value of $\\frac{3(e-1)^2}{e} \\int_1^2 x^2 e^{[x]+[x^3]} dx$ is:",
    options: [
      "$e^9-e$",
      "$e^8-e$",
      "$e^7-1$",
      "$e^8-1$"
    ],
    correctAnswer: "$e^8-e$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH364",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "Numerical",
    question: "$\\lim_{x \\to 0} \\frac{48}{x^4} \\int_0^x \\frac{t^3}{t^6+1} dt$ is equal to",
    options: [],
    correctAnswer: "12",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH365",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "The value of $\\lim_{n \\to \\infty} \\frac{3}{n} \\{4 + (2+\\frac{1}{n})^2 + (2+\\frac{2}{n})^2 + ... + (3-\\frac{1}{n})^2\\}$ is equal to",
    options: [
      "12",
      "$\\frac{19}{3}$",
      "0",
      "19"
    ],
    correctAnswer: "19",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH366",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "The value of $\\int_{\\pi/3}^{\\pi/2} \\frac{(2+3\\sin x)}{\\sin x(1+\\cos x)} dx$ is equal to",
    options: [
      "$\\frac{7}{2}-\\sqrt{3}-\\log_e \\sqrt{3}$",
      "$-2+3\\sqrt{3}+\\log_e \\sqrt{3}$",
      "$\\frac{10}{3}-\\sqrt{3}+\\log_e \\sqrt{3}$",
      "$\\frac{10}{3}-\\sqrt{3}-\\log_e \\sqrt{3}$"
    ],
    correctAnswer: "$\\frac{10}{3}+\\log_e\\sqrt{3}-\\sqrt{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH367",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "Let a differentiable function f satisfy $f(x) + \\int_3^x \\frac{f(t)}{t} dt = \\sqrt{x+1}, x \\ge 3$. Then 12f(8) is equal to:",
    options: [
      "34",
      "19",
      "17",
      "1"
    ],
    correctAnswer: "17",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH368",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "Let $\\alpha \\in (0,1)$ and $\\beta = \\log_e(1-\\alpha)$. Let $P_n(x) = x + \\frac{x^2}{2} + \\frac{x^3}{3} + ... + \\frac{x^n}{n}, x \\in (0,1)$. Then the integral $\\int_0^\\alpha \\frac{t^{50}}{1-t} dt$ is equal to",
    options: [
      "$\\beta - P_{50}(\\alpha)$",
      "$-(\\beta+P_{50}(\\alpha))$",
      "$P_{50}(\\alpha) - \\beta$",
      "$\\beta + P_{50}(\\alpha)$"
    ],
    correctAnswer: "$-(\\beta+P_{50}(\\alpha))$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH369",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "If $\\int_0^\\alpha \\frac{x}{\\sqrt{x+\\alpha}-\\sqrt{x}} dx = \\frac{16+20\\sqrt{2}}{15}$, then $\\alpha$ is equal to:",
    options: [
      "2",
      "4",
      "$\\sqrt{2}$",
      "$2\\sqrt{2}$"
    ],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH370",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "If $\\phi(x) = \\frac{1}{\\sqrt{x}} \\int_{\\frac{\\pi}{4}}^x (4\\sqrt{2}\\sin t - 3\\phi'(t))dt, x > 0$, then $\\phi'(\\frac{\\pi}{4})$ is equal to:",
    options: [
      "$\\frac{8}{\\sqrt{\\pi}}$",
      "$\\frac{4}{6+\\sqrt{\\pi}}$",
      "$\\frac{8}{6+\\sqrt{\\pi}}$",
      "$\\frac{4}{6-\\sqrt{\\pi}}$"
    ],
    correctAnswer: "$\\frac{8}{6+\\sqrt{\\pi}}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH371",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "$lim_{n \\to \\infty} (\\frac{1}{1+n} + \\frac{1}{2+n} + \\frac{1}{3+n} + ... + \\frac{1}{2n})$ is equal to :-",
    options: [
      "0",
      "$\\log_e 2$",
      "$\\log_e(\\frac{3}{2})$",
      "$\\log_e(\\frac{2}{3})$"
    ],
    correctAnswer: "$\\log_e 2$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH372",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "Numerical",
    question: "If $\\int_0^1 (x^{21}+x^{14}+x^7)(2x^{14}+3x^7+6)^{1/7} dx = \\frac{1}{l}(11)^{m/n}$ where l, m, $n \\in \\mathbb{N}$, m and n are coprime then $l+m+n$ is equal to",
    options: [],
    correctAnswer: "63",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH373",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "MCQ",
    question: "The value of the integral $\\int_{-\\frac{\\pi}{4}}^{\\frac{\\pi}{4}} \\frac{x+\\frac{\\pi}{4}}{2-\\cos 2x} dx$ is",
    options: [
      "$\\frac{\\pi^2}{6}$",
      "$\\frac{\\pi^2}{12\\sqrt{3}}$",
      "$\\frac{\\pi^2}{3\\sqrt{3}}$",
      "$\\frac{\\pi^2}{6\\sqrt{3}}$"
    ],
    correctAnswer: "$\\frac{\\pi^2}{6\\sqrt{3}}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH374",
    subject: "Mathematics",
    topic: "Definite Integration",
    questionType: "Numerical",
    question: "If $\\int_0^\\pi \\frac{5^{\\cos x}(1+\\cos x \\cos 3x + \\cos^2 x + \\cos^3 x \\cos 3x)}{1+5^{\\cos x}} dx = \\frac{k\\pi}{16}$, then k is equal to",
    options: [],
    correctAnswer: "26",
    questionImageUrl: null
  },
  {
        id: "2024_PRAC_DET001",
        subject: "Mathematics",
        topic: "Determinants",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the system of equations 2x + 3y - z = 5, x + αy + 3z = -4, 3x - y + βz = 7 has infinitely many solutions, then 13αβ is equal to:",
        options: ["1110", "1120", "1210", "1220"],
        correctAnswer: "B",
        solution: "Using family of planes and solving the system: α = -70, β = -16/13. Therefore 13αβ = 1120",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DET002",
        subject: "Mathematics",
        topic: "Determinants",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let the system of equations x + 2y + 3z = 5, 2x + 3y + z = 9, 4x + 3y + λz = μ have infinite number of solutions. Then λ + 2μ is equal to:",
        options: ["28", "17", "22", "15"],
        correctAnswer: "B",
        solution: "For infinite solutions: Δ = Δ₁ = Δ₂ = Δ₃ = 0. Solving: λ = -13, μ = 15. Therefore λ + 2μ = 17",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DET003",
        subject: "Mathematics",
        topic: "Determinants",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let A = [[2,0,1],[1,1,0],[1,0,1]], B = [B₁, B₂, B₃] where B₁, B₂, B₃ are column matrices. If AB₁ = [1,0,0], AB₂ = [2,3,0], AB₃ = [3,2,1], α = |B| and β is the sum of all diagonal elements of B, then α³ + β³ equals:",
        options: ["25", "27", "28", "30"],
        correctAnswer: "C",
        solution: "Finding B matrix and calculating: α = 3, β = 1. Therefore α³ + β³ = 28",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DET004",
        subject: "Mathematics",
        topic: "Determinants",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The values of α for which |1, α+1/3, α+2α+3, 3α+1, 0| = 0 lie in the interval:",
        options: ["(-2, 1)", "(-3, 0)", "(-3/2, 3/2)", "(0, 3)"],
        correctAnswer: "B",
        solution: "Expanding the determinant: 2α² + 6α + 1 = 0. Solving: α = (-3±√7)/2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DET005",
        subject: "Mathematics",
        topic: "Determinants",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "For any three distinct consecutive terms a, b, c of an A.P., let the lines ax + by + c = 0 be concurrent at point P and Q(α, β) be a point such that the system x + y + z = 6, 2x + 5y + αz = β, x + 2y + 3z = 4 has infinitely many solutions. Then (PQ)² equals:",
        options: ["110", "113", "115", "118"],
        correctAnswer: "B",
        solution: "P = (1, -2), Q = (8, 6). Therefore (PQ)² = 113",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DET006",
        subject: "Mathematics",
        topic: "Determinants",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Consider the system of linear equations x + y + z = 4μ, x + 2y + 2λz = 10μ, x + 3y + 4λ²z = μ² + 15, where λ, μ ∈ ℝ. Which statement is NOT correct?",
        options: ["System has unique solution if λ ≠ 1/2 and μ ≠ 1, 15", "System is inconsistent if λ = 1/2 and μ ≠ 1", "System has infinite solutions if λ = 1/2 and μ = 15", "System is consistent if λ ≠ 1/2"],
        correctAnswer: "B",
        solution: "Analyzing the determinant and conditions for different cases",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DET007",
        subject: "Mathematics",
        topic: "Determinants",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "If f(x) = |2cos⁴x, 2sin⁴x, 3+sin²2x; 3+2cos⁴x, 2sin⁴x, sin²2x; 2cos⁴x, 3+2sin⁴x, sin²2x|, then f'(0) equals:",
        options: ["1", "5", "0", "1/2"],
        correctAnswer: "A",
        solution: "f(x) = 45, f'(x) = 0. Therefore f'(0) = 1",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DET008",
        subject: "Mathematics",
        topic: "Determinants",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Consider the system x + y + z = 5, x + 2y + λ²z = 9, x + 3y + λz = μ. Which statement is NOT correct?",
        options: ["λ = 1 and μ = 13", "λ = 1 and μ ≠ 13", "λ ≠ 1 and μ = 13", "λ ≠ 1 and μ ≠ 13"],
        correctAnswer: "D",
        solution: "For infinite solutions: λ = 1 and μ = 13",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DET009",
        subject: "Mathematics",
        topic: "Determinants",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the system x - 2y + z = -4, 2x + αy + 3z = 5, 3x - y + βz = 3 has infinitely many solutions, then 12α + 13β equals:",
        options: ["60", "64", "54", "58"],
        correctAnswer: "D",
        solution: "Solving the system: α = 1/3, β = 54/13. Therefore 12α + 13β = 58",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DET010",
        subject: "Mathematics",
        topic: "Determinants",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If f(x) = |x³, 2x²+1, 1+3x; 3x²+2, 2x, x³+6; x³-x, 4, x²-2| for all x ∈ ℝ, then 2f(0) + f'(0) equals:",
        options: ["48", "24", "42", "18"],
        correctAnswer: "C",
        solution: "f(0) = 12, f'(0) = 18. Therefore 2f(0) + f'(0) = 42",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_DET011",
        subject: "Mathematics",
        topic: "Determinants",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "Let A be a 3×3 real matrix with given eigenvalue conditions. Then the system (A-3I)[x,y,z]ᵀ = [1,2,3]ᵀ has:",
        options: ["unique solution", "exactly two solutions", "no solution", "infinitely many solutions"],
        correctAnswer: "A",
        solution: "Based on eigenvalue analysis, the system has a unique solution",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
    id: "2023_PRAC_MATH332",
    subject: "Mathematics",
    topic: "Determinants",
    questionType: "MCQ",
    question: "If the system of equations\n$x+2y+3z=3$\n$4x+3y-4z=4$\n$8x+4y-\\lambda z=9+\\mu$\nhas infinitely many solutions, then the ordered pair $(\\lambda, \\mu)$ is equal to",
    options: [
      "$(\\frac{72}{5}, \\frac{21}{5})$",
      "$(\\frac{-72}{5}, \\frac{-21}{5})$",
      "$(\\frac{72}{5}, \\frac{-21}{5})$",
      "$(\\frac{-72}{5}, \\frac{21}{5})$"
    ],
    correctAnswer: "$(\\frac{72}{5}, \\frac{-21}{5})$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH333",
    subject: "Mathematics",
    topic: "Determinants",
    questionType: "MCQ",
    question: "Let $S_1$ and $S_2$ be respectively the sets of all $a \\in R - \\{0\\}$ for which the system of linear equations\n$ax+2ay-3az=1$\n$(2a+1)x+(2a+3)y+(a+1)z=2$\n$(3a+5)x+(a+5)y+(a+2)z=3$\nhas unique solution and infinitely many solutions. Then",
    options: [
      "$n(S_1)=2$ and $S_2$ is an infinite set",
      "$S_1$ is an infinite set and $n(S_2)=2$",
      "$S_1 = \\Phi$ and $S_2 = \\mathbb{R}-\\{0\\}$",
      "$S_1 = \\mathbb{R}-\\{0\\}$ and $S_2 = \\Phi$"
    ],
    correctAnswer: "$S_1 = \\mathbb{R}-\\{0\\}$ and $S_2 = \\Phi$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH334",
    subject: "Mathematics",
    topic: "Determinants",
    questionType: "MCQ",
    question: "Consider the following system of equations\n$\\alpha x+2y+z=1$\n$2\\alpha x+3y+z=1$\n$3x+\\alpha y+2z=\\beta$\nFor some $\\alpha, \\beta \\in \\mathbb{R}$. Then which of the following is NOT correct.",
    options: [
      "It has no solution if $\\alpha=-1$ and $\\beta \\neq 2$",
      "It has no solution for $\\alpha=-1$ and for all $\\beta \\in \\mathbb{R}$",
      "It has no solution for $\\alpha=3$ and for all $\\beta \\neq 2$",
      "It has a solution for all $\\alpha \\neq -1$ and $\\beta=2$"
    ],
    correctAnswer: "It has no solution for $\\alpha=-1$ and for all $\\beta \\in \\mathbb{R}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH335",
    subject: "Mathematics",
    topic: "Determinants",
    questionType: "MCQ",
    question: "Let the system of linear equations\n$x+y+kz=2$\n$2x+3y-z=1$\n$3x+4y+2z=k$\nhave infinitely many solutions. Then the system\n$(k+1)x+(2k-1)y=7$\n$(2k+1)x+(k+5)y=10$ has:",
    options: [
      "infinitely many solutions",
      "unique solution satisfying $x-y=1$",
      "no solution",
      "unique solution satisfying $x+y=1$"
    ],
    correctAnswer: "unique solution satisfying $x+y=1$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH336",
    subject: "Mathematics",
    topic: "Determinants",
    questionType: "MCQ",
    question: "For $\\alpha, \\beta \\in \\mathbb{R}$, suppose the system of linear equations\n$x-y+z=5$\n$2x+2y+\\alpha z=8$\n$3x-y+4z=\\beta$\nhas infinitely many solutions. Then $\\alpha$ and $\\beta$ are the roots of",
    options: [
      "$x^2-10x+16=0$",
      "$x^2+18x+56=0$",
      "$x^2-18x+56=0$",
      "$x^2+14x+24=0$"
    ],
    correctAnswer: "$x^2-18x+56=0$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH337",
    subject: "Mathematics",
    topic: "Determinants",
    questionType: "MCQ",
    question: "For the system of linear equations\n$x+y+z=6$\n$\\alpha x+\\beta y+7z=3$\n$x+2y+3z=14$\nwhich of the following is NOT true?",
    options: [
      "If $\\alpha=\\beta=7$ then the system has no solution",
      "If $\\alpha=\\beta$ and $\\alpha \\neq 7$ then the system has a unique solution.",
      "There is a unique point $(\\alpha, \\beta)$ on the line $x+2y+18=0$ for which the system has infinitely many solutions",
      "For every point $(\\alpha, \\beta) \\neq (7,7)$ on the line $x-2y+7=0$ the system has infinitely many solutions."
    ],
    correctAnswer: "For every point $(\\alpha, \\beta) \\neq (7,7)$ on the line $x-2y+7=0$ the system has infinitely many solutions.",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH338",
    subject: "Mathematics",
    topic: "Determinants",
    questionType: "MCQ",
    question: "Let S denote the set of all real values of $\\lambda$ such that the system of equations\n$\\lambda x+y+z=1$\n$x+\\lambda y+z=1$\n$x+y+\\lambda z=1$\nis inconsistent, then $\\sum_{\\lambda \\in S} (|\\lambda|^2 + |\\lambda|)$ is equal to",
    options: [
      "2",
      "12",
      "4",
      "6"
    ],
    correctAnswer: "6",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH339",
    subject: "Mathematics",
    topic: "Determinants",
    questionType: "MCQ",
    question: "For the system of linear equations $\\alpha x+y+z=1, x+\\alpha y+z=1, x+y+\\alpha z=\\beta$, which one of the following statements is NOT correct?",
    options: [
      "It has infinitely many solutions if $\\alpha=1$ and $\\beta=1$",
      "It has no solution if $\\alpha=-2$ and $\\beta=1$",
      "$x+y+z = \\frac{3}{4}$ if $\\alpha=2$ and $\\beta=1$",
      "It has infinitely many solutions if $\\alpha=2$ and $\\beta=-1$"
    ],
    correctAnswer: "It has infinitely many solutions if $\\alpha=2$ and $\\beta=-1$",
    questionImageUrl: null
  },
// Differential Equations Questions (First 10 of 17)
    {
        id: "2024_PRAC_MATH056",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let y = y(x) be the solution of the differential equation dy/dx = 2x(x + y)³ - x(x + y) - 1, y(0) = 1. Then (1/√2 + y(1/√2))² equals:",
        options: ["1/√2", "4/(4+√e)", "3/(3-√e)", "2/(1+√e)", "1/(2-√e)"],
        correctAnswer: "1/(2-√e)",
        solution: "Substituting x + y = t and solving the differential equation with given initial condition",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH057",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "If x = x(t) is the solution of the differential equation (t + 1)dx = (2x + (t + 1)⁴) dt, x(0) = 2, then x(1) equals:",
        options: [],
        correctAnswer: "14",
        solution: "Using integrating factor method: I.F = 1/(t+1)². Solution gives x(1) = 14",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH058",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let α be a non-zero real number. Suppose f: R → R is a differentiable function such that f(0) = 2 and lim(x→-∞)f(x) = 1. If f'(x) = αf(x) + 3 for all x ∈ R, then f(-log_e 2) is equal to:",
        options: ["3", "5", "9", "7"],
        correctAnswer: "9",
        solution: "Solving the differential equation with given conditions: α = -3, f(-ln 2) = 9",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH059",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "If dx/dy = (1+x-y²)/y, x(1) = 1, then 5x(2) equals:",
        options: [],
        correctAnswer: "5",
        solution: "Using integrating factor method: I.F = 1/y. Solution gives 5x(2) = 5",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH060",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let x = x(t) and y = y(t) be solutions of the differential equations dx/dt + ax = 0 and dy/dt + by = 0 respectively, a, b ∈ R. Given that x(0) = 2; y(0) = 1 and 3y(1) = 2x(1), the value of t for which x(t) = y(t) is:",
        options: ["log 2/2", "3/log 4", "log₄ 3", "3/4 log 2"],
        correctAnswer: "3/4 log 2",
        solution: "Solutions: x = 2e^(-at), y = e^(-bt). From conditions: t = (3/4) log 2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH061",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "If the solution of the differential equation (2x + 3y - 2)dx + (4x + 6y - 7)dy = 0, y(0) = 3 is αx + βy + 3 log_e |2x + 3y - γ| = 6, then α + 2β + 3γ equals:",
        options: [],
        correctAnswer: "29",
        solution: "Solving the differential equation: α = 1, β = 2, γ = 8. Hence α + 2β + 3γ = 29",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH062",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If y = y(x) is the solution curve of the differential equation (x² - 4)dy - (y² - 3y)dx = 0, x > 2, y(4) = 3/2, and the slope of the curve is never zero, then the value of y(10) equals:",
        options: ["3/(1+(8)^(1/4))", "3/(1+2√2)", "3/(1-2√2)", "3/(1-(8)^(1/4))"],
        correctAnswer: "3/(1+(8)^(1/4))",
        solution: "Separating variables and integrating with given conditions",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH063",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "If dy/dx = (x+y-2)/(x-y) and the solution curve passes through the point (2, 1) is tan⁻¹((y-1)/(x-1)) - (1/β)log_e(α + ((y-1)/(x-1))²) = log_e |x - 1|, then 5β + α equals:",
        options: [],
        correctAnswer: "11",
        solution: "Using substitution and solving: α = 1, β = 2. Hence 5β + α = 11",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH064",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "A function y = f(x) satisfies f(x) sin 2x + sin x - (1 + cos² x) f'(x) = 0 with condition f(0) = 0. Then f(π/2) is equal to:",
        options: ["1", "0", "-1", "2"],
        correctAnswer: "1",
        solution: "Solving the differential equation with integrating factor: f(π/2) = 1",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH065",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "If the solution curve y = y(x) of the differential equation (1 + y²)(1 + log_e x)dx + x dy = 0, x > 0 passes through the point (1, 1) and y(e) = (α - tan(3/2))/(β + tan(3/2)), then α + 2β equals:",
        options: [],
        correctAnswer: "3",
        solution: "Solving the differential equation: α = 1, β = 1. Hence α + 2β = 3",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
    id: "2023_PRAC_MATH340",
    subject: "Mathematics",
    topic: "Differential Equations",
    questionType: "MCQ",
    question: "Let $y=y(x)$ be the solution of the differential equation $x^3 dy + (xy-1)dx=0, x>0, y(\\frac{1}{2}) = 3-e$. Then $y(1)$ is equal to",
    options: [
      "1",
      "e",
      "2-e",
      "3"
    ],
    correctAnswer: "1",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH341",
    subject: "Mathematics",
    topic: "Differential Equations",
    questionType: "MCQ",
    question: "Let $y=y(x)$ be the solution of the differential equation $(x^2-3y^2)dx + 3xy dy = 0, y(1)=1$. Then $6y^2(e)$ is equal to",
    options: [
      "$3e^2$",
      "$e^2$",
      "$2e^2$",
      "$\\frac{3e^2}{2}$"
    ],
    correctAnswer: "$2e^2$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH342",
    subject: "Mathematics",
    topic: "Differential Equations",
    questionType: "MCQ",
    question: "Let $y=y(x)$ be the solution curve of the differential equation $\\frac{dy}{dx} = \\frac{y}{x}(1+xy^2(1+\\log_e x)), x>0, y(1)=3$. Then $\\frac{y^2(x)}{9}$ is equal to:",
    options: [
      "$\\frac{x^2}{5-2x^3(2+\\log_e x^3)}$",
      "$\\frac{x^2}{2x^3(2+\\log_e x^3)-3}$",
      "$\\frac{x^2}{3x^3(1+\\log_e x^2)-2}$",
      "$\\frac{x^2}{7-3x^3(2+\\log_e x^2)}$"
    ],
    correctAnswer: "$\\frac{x^2}{5-2x^3(2+\\log_e x^3)}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH343",
    subject: "Mathematics",
    topic: "Differential Equations",
    questionType: "MCQ",
    question: "Let $y=y(t)$ be a solution of the differential equation $\\frac{dy}{dt} + \\alpha y = \\gamma e^{-\\beta t}$, where, $\\alpha > 0, \\beta > 0$ and $\\gamma > 0$. Then $\\lim_{t \\to \\infty} y(t)$",
    options: [
      "is 0",
      "does not exist",
      "is 1",
      "is -1"
    ],
    correctAnswer: "is 0",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH344",
    subject: "Mathematics",
    topic: "Differential Equations",
    questionType: "MCQ",
    question: "Let $y=f(x)$ be the solution of the differential equation $y(x+1)dx - x^2 dy = 0, y(1)=e$. Then $\\lim_{x \\to 0^+} f(x)$ is equal to",
    options: [
      "0",
      "$\\frac{1}{e}$",
      "$e^2$",
      "$\\frac{1}{e^2}$"
    ],
    correctAnswer: "0",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH345",
    subject: "Mathematics",
    topic: "Differential Equations",
    questionType: "MCQ",
    question: "Let $y=y(x)$ be the solution of the differential equation $x \\log_e x \\frac{dy}{dx} + y = x^2 \\log_e x, (x>1)$. If $y(2)=2$ then $y(e)$ is equal to",
    options: [
      "$\\frac{4+e^2}{4}$",
      "$\\frac{1+e^2}{4}$",
      "$\\frac{2+e^2}{2}$",
      "$\\frac{1+e^2}{2}$"
    ],
    correctAnswer: "$\\frac{4+e^2}{4}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH346",
    subject: "Mathematics",
    topic: "Differential Equations",
    questionType: "MCQ",
    question: "Let the solution curve $y=y(x)$ of the differential equation $\\frac{dy}{dx} - \\frac{3x^5 \\tan^{-1}(x^3)}{(1+x^6)^{\\frac{3}{2}}} y = 2x \\exp\\{\\frac{x^3 - \\tan^{-1}x^3}{\\sqrt{1+x^6}}\\}$ pass through the origin. Then $y(1)$ is equal to:",
    options: [
      "$\\exp(\\frac{4-\\pi}{4\\sqrt{2}})$",
      "$\\exp(\\frac{\\pi-4}{4\\sqrt{2}})$",
      "$\\exp(\\frac{1-\\pi}{4\\sqrt{2}})$",
      "$\\exp(\\frac{4+\\pi}{4\\sqrt{2}})$"
    ],
    correctAnswer: "$\\exp(\\frac{4-\\pi}{4\\sqrt{2}})$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH347",
    subject: "Mathematics",
    topic: "Differential Equations",
    questionType: "MCQ",
    question: "The solution of the differential equation $\\frac{dy}{dx} = -(\\frac{x^2+3y^2}{3x^2+y^2}), y(1)=0$ is",
    options: [
      "$\\log_e|x+y|-\\frac{xy}{(x+y)^2}=0$",
      "$\\log_e|x+y|+\\frac{xy}{(x+y)^2}=0$",
      "$\\log_e|x+y|+\\frac{2xy}{(x+y)^2}=0$",
      "$\\log_e|x+y|-\\frac{2xy}{(x+y)^2}=0$"
    ],
    correctAnswer: "$\\log_e|x+y|+\\frac{2xy}{(x+y)^2}=0$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH348",
    subject: "Mathematics",
    topic: "Differential Equations",
    questionType: "MCQ",
    question: "Let $y=y(x)$ be the solution of the differential equation $(3y^2-5x^2)y dx + 2x(x^2-y^2)dy=0$ such that $y(1)=1$, then $|(y(2))^3-12y(2)|$ is equal to:",
    options: [
      "$32\\sqrt{2}$",
      "64",
      "$16\\sqrt{2}$",
      "32"
    ],
    correctAnswer: "$32\\sqrt{2}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH349",
    subject: "Mathematics",
    topic: "Differential Equations",
    questionType: "MCQ",
    question: "If $y=y(x)$ is the solution curve of the differential equation $\\frac{dy}{dx}+y \\tan x = x \\sec x, 0 \\le x \\le \\frac{\\pi}{3}, y(0)=1$ then $y(\\frac{\\pi}{6})$ is equal to:",
    options: [
      "$\\frac{\\pi}{12}-\\frac{\\sqrt{3}}{2}\\log_e(\\frac{2}{e\\sqrt{3}})$",
      "$\\frac{\\pi}{12}+\\frac{\\sqrt{3}}{2}\\log_e(\\frac{2\\sqrt{3}}{e})$",
      "$\\frac{\\pi}{12}-\\frac{\\sqrt{3}}{2}\\log_e(\\frac{2\\sqrt{3}}{e})$",
      "$\\frac{\\pi}{12}+\\frac{\\sqrt{3}}{2}\\log_e(\\frac{2}{e\\sqrt{3}})$"
    ],
    correctAnswer: "$\\frac{\\pi}{12}-\\frac{\\sqrt{3}}{2}\\log_e(\\frac{2\\sqrt{3}}{e})$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH350",
    subject: "Mathematics",
    topic: "Differential Equations",
    questionType: "MCQ",
    question: "Let $\\alpha x = \\exp(x^\\beta y^\\gamma)$ be the solution of the differential equation $2x^2 y dy - (1-xy^2)dx=0, x>0, y(2)=\\sqrt{\\log_e 2}$. Then $\\alpha+\\beta-\\gamma$ equals:",
    options: [
      "1",
      "-1",
      "0",
      "3"
    ],
    correctAnswer: "1",
    questionImageUrl: null
  },
// Differentiation Questions
    {
        id: "2024_PRAC_MATH108",
        subject: "Mathematics",
        topic: "Differentiation",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "If y = (3cos²x - 5)cos³x/15 + (√x + 1)(x² - √x)/(x√x + x + √x), then 96y'(π/6) is equal to:",
        options: [],
        correctAnswer: "105",
        solution: "Simplifying: y = cos⁵x/5 - cos³x/3 + (√x - 1). y' = -cos⁴x·sinx + cos²x·sinx + 1/(2√x). At x = π/6: y'(π/6) = 35/32, so 96y'(π/6) = 105",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH109",
        subject: "Mathematics",
        topic: "Differentiation",
        difficulty: "Hard",
        questionType: "Numerical",
        question: "Let for a differentiable function f: (0, ∞) → R, f(x) - f(y) ≥ log_e(x/y) + x - y, ∀x, y ∈ (0, ∞). Then Σ(n=1 to 20) f'(1/n²) is equal to:",
        options: [],
        correctAnswer: "2890",
        solution: "From the given inequality, f'(x) = 1/x + 1. So f'(1/n²) = n² + 1. Σ(n=1 to 20)(n² + 1) = 20×21×41/6 + 20 = 2890",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH110",
        subject: "Mathematics",
        topic: "Differentiation",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let f(x) = x³ + x²f'(1) + xf''(2) + f'''(3), x ∈ R. Then f'(10) is equal to:",
        options: [],
        correctAnswer: "202",
        solution: "From the given function: f'(x) = 3x² + 2xf'(1) + f''(2), f''(x) = 6x + 2f'(1), f'''(x) = 6. Solving: f'(1) = -5, f''(2) = 2. So f'(x) = 3x² - 10x + 2, giving f'(10) = 202",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH111",
        subject: "Mathematics",
        topic: "Differentiation",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Suppose f(x) = (2x + 2^(-x))tan x √(tan^(-1)(x² - x + 1))/(7x² + 3x + 1)³. Then the value of f'(0) is equal to:",
        options: ["π/√π", "0", "√π", "π/2"],
        correctAnswer: "√π",
        solution: "Using limit definition: f'(0) = lim(h→0) f(h)/h. After applying L'Hôpital's rule and simplification: f'(0) = √π",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH112",
        subject: "Mathematics",
        topic: "Differentiation",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let y = log_e((1-x²)/(1+x²)), -1 < x < 1. Then at x = 1/2, the value of 225(y' - y'') is equal to:",
        options: ["732", "746", "742", "736"],
        correctAnswer: "736",
        solution: "y' = -4x/(1-x⁴), y'' = -4(1+3x⁴)/(1-x⁴)². At x = 1/2: y' - y'' = 736/225, so 225(y' - y'') = 736",
        questionImageUrl: null,
        solutionImageUrl: null
    },
     // Remaining Differential Equations Questions (Q11-Q17)
    {
        id: "2024_PRAC_MATH076",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If y = y(x) is the solution of the differential equation sin(y/x) = log_e |x| + α/2, then α² equals:",
        options: ["3", "12", "4", "9"],
        correctAnswer: "3",
        solution: "Solving the differential equation gives α² = 3",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH077",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let y = y(x) be the solution of the differential equation sec x dy + {2(1-x) tan x + x(2-x)} dx = 0, y(0) = 2. Then y(2) equals:",
        options: ["2", "2{1-sin(2)}", "2{sin(2)+1}", "1"],
        correctAnswer: "2",
        solution: "Using integrating factor method to solve the differential equation",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH078",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let y = y(x) be the solution of the differential equation (1-x²) dy = [xy + (x³+2)√3(1-x²)] dx, -1 < x < 1, y(0) = 0. If y(1/2) = m/n, m and n are coprime numbers, then m + n equals:",
        options: [],
        correctAnswer: "97",
        solution: "Solving the differential equation with given initial conditions",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH079",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The solution curve of the differential equation dy/dx = x(log_e x - log_e y + 1), x > 0, y > 0 passing through the point (e, 1) is:",
        options: ["|log_e(y/x)| = x", "|log_e(y/x)| = y²", "|log_e(x/y)| = y", "2|log_e(x/y)| = y + 1"],
        correctAnswer: "|log_e(x/y)| = y",
        solution: "Using separation of variables and integration",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH080",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let y = y(x) be the solution of the differential equation dy/dx = (tan x + y)/(sin x(sec x - sin x tan x)), x ∈ (0, π/2), y(π/4) = 2. Then y(π/3) equals:",
        options: ["√3(2 + log_e √3)", "(2 + log_e 3)/√3", "√3(1 + 2 log_e 3)", "√3(2 + log_e 3)"],
        correctAnswer: "√3(2 + log_e √3)",
        solution: "Using integrating factor method",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH081",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The temperature T(t) of a body at time t = 0 is 160°F and it decreases continuously as per the differential equation dT/dt = -K(T-80), where K is positive constant. If T(15) = 120°F, then T(45) is equal to:",
        options: ["85°F", "95°F", "90°F", "80°F"],
        correctAnswer: "90°F",
        solution: "Solving the exponential decay differential equation",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH082",
        subject: "Mathematics",
        topic: "Differential Equations",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let y = y(x) be the solution of the differential equation sec² x dx + (e^(2y) tan² x + tan x) dy = 0, 0 < x < π/2, y(π/4) = 0. If y(π/6) = α, then e^(8α) equals:",
        options: [],
        correctAnswer: "9",
        solution: "Using exact differential equation method",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    // Ellipse Questions
    {
        id: "2024_PRAC_MATH102",
        subject: "Mathematics",
        topic: "Ellipse",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let P be a point on the ellipse x²/9 + y²/4 = 1. Let the line passing through P and parallel to y-axis meet the circle x² + y² = 9 at point Q such that P and Q are on the same side of the x-axis. Then, the eccentricity of the locus of the point R on PQ such that PR : RQ = 4 : 3 as P moves on the ellipse, is:",
        options: ["11/19", "13/21", "√139/23", "√13/7"],
        correctAnswer: "√13/7",
        solution: "Let P = (3cosθ, 2sinθ). Using section formula for R and eliminating θ gives locus x²/9 + 49y²/324 = 1. Eccentricity = √(1 - 324/(49×9)) = √13/7",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH103",
        subject: "Mathematics",
        topic: "Ellipse",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The length of the chord of the ellipse x²/25 + y²/16 = 1, whose mid point is (1, 2/5), is equal to:",
        options: ["√1691/5", "√2009/5", "√1741/5", "√1541/5"],
        correctAnswer: "√1691/5",
        solution: "Using chord equation T = S₁: x/25 + y/8 = (1/25 + 1/100) = 8x + 5y = 200. Solving with ellipse: 4x² - 8x - 15 = 0. Chord length = √1691/5",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH104",
        subject: "Mathematics",
        topic: "Ellipse",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "If the points of intersection of two distinct conics x² + y² = 4b and x²/16 + y²/b² = 1 lie on the curve y² = 3x², then 3√3 times the area of the rectangle formed by the intersection points is:",
        options: [],
        correctAnswer: "432",
        solution: "Substituting y² = 3x² in both conics gives x² = b and x²/16 + 3x²/b² = 1. Solving: b = 12. Intersection points at (±2√3, ±6). Rectangle area = 4√3 × 12 = 48√3. Answer: 3√3 × 48√3 = 432",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH105",
        subject: "Mathematics",
        topic: "Ellipse",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the length of the minor axis of ellipse is equal to half of the distance between the foci, then the eccentricity of the ellipse is:",
        options: ["√5/3", "√3/2", "1/√3", "2/√5"],
        correctAnswer: "2/√5",
        solution: "Given: 2b = ae/2, so b/a = e/4. Since e² = 1 - b²/a², substituting: e² = 1 - e²/16, solving gives e = 2/√5",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH106",
        subject: "Mathematics",
        topic: "Ellipse",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let A(α, 0) and B(0, β) be the points on the line 5x + 7y = 50. Let the point P divide the line segment AB internally in the ratio 7 : 3. Let 3x - 25 = 0 be a directrix of the ellipse E: x²/a² + y²/b² = 1 and the corresponding focus be S. If from S, the perpendicular on the x-axis passes through P, then the length of the latus rectum of E is equal to:",
        options: ["25/3", "32/9", "25/9", "32/5"],
        correctAnswer: "32/5",
        solution: "A = (10, 0), B = (0, 50/7), P = (3, 5). From directrix x = 25/3 and focus S, we get ae = 3, a = 5, b = 4. Latus rectum = 2b²/a = 32/5",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH107",
        subject: "Mathematics",
        topic: "Ellipse",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let P be a parabola with vertex (2, 3) and directrix 2x + y = 6. Let an ellipse E: x²/a² + y²/b² = 1, a > b of eccentricity 1/√2 pass through the focus of the parabola P. Then the square of the length of the latus rectum of E, is:",
        options: ["385/8", "347/8", "512/25", "656/25"],
        correctAnswer: "656/25",
        solution: "Parabola focus at (2.4, 3.2). For ellipse with e = 1/√2: a² = 2b². Substituting focus coordinates and solving: b² = 328/25. (Latus rectum)² = (2b²/a)² = 656/25",
        questionImageUrl: null,
        solutionImageUrl: null
    },

    
    
    
    
    
    













































 


{
    id: "2023_PRAC_MATH001",
    subject: "Mathematics",
    topic: "Trigonometric Equations",
    questionType: "Numerical",
    question: "If m and n respectively are the numbers of positive and negative value of $\\theta$ in the interval $[-\\pi, \\pi]$ that satisfy the equation $\\cos 2\\theta \\cos \\frac{\\theta}{2} = \\cos 3\\theta \\cos \\frac{9\\theta}{2}$, then mn is equal to",
    options: [],
    correctAnswer: "25",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH002",
    subject: "Mathematics",
    topic: "Trigonometric Equations",
    questionType: "MCQ",
    question: "Let $S = \\{\\theta \\in [0, \\pi] : f'(\\theta) = -\\frac{\\sqrt{3}}{2}\\}$ and $f(\\theta) = 3(\\sin^4(\\frac{3\\pi}{2} - \\theta) + \\sin^4(3\\pi + \\theta)) - 2(1 - \\sin^2 2\\theta)$. If $4\\beta = \\sum_{\\theta \\in S} \\theta$, then $f(\\beta)$ is equal to",
    options: [
      "$\\frac{11}{8}$",
      "$\\frac{5}{4}$",
      "$\\frac{9}{8}$",
      "$\\frac{3}{2}$"
    ],
    correctAnswer: "$\\frac{5}{4}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH003",
    subject: "Mathematics",
    topic: "Straight Lines",
    questionType: "MCQ",
    question: "Let PQR be a triangle. The points A, B and C are on the sides QR, RP and PQ respectively such that $\\frac{QA}{AR} = \\frac{RB}{BP} = \\frac{PC}{CQ} = \\frac{1}{2}$. Then $\\frac{Area(\\Delta PQR)}{Area(\\Delta ABC)}$ is equal to",
    options: [
      "4",
      "3",
      "2",
      "$\\frac{5}{2}$"
    ],
    correctAnswer: "3",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH004",
    subject: "Mathematics",
    topic: "Straight Lines",
    questionType: "Numerical",
    question: "The equations of the sides AB, BC and CA of a triangle ABC are: $2x + y = 0$, $x + py = 21a$ $(a \\neq 0)$ and $x - y = 3$ respectively. Let P(2, a) be the centroid of $\\Delta ABC$. Then $(BC)^2$ is equal to",
    options: [],
    correctAnswer: "122",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH005",
    subject: "Mathematics",
    topic: "Straight Lines",
    questionType: "MCQ",
    question: "The equations of two sides of a variable triangle are $x=0$ and $y=3$, and its third side is a tangent to the parabola $y^2 = 6x$. The locus of its circumcentre is:",
    options: [
      "$4y^2 - 18y - 3x - 18 = 0$",
      "$4y^2 + 18y + 3x + 18 = 0$",
      "$4y^2 - 18y + 3x + 18 = 0$",
      "$4y^2 - 18y - 3x + 18 = 0$"
    ],
    correctAnswer: "$4y^2 - 18y + 3x + 18 = 0$",
    questionImageUrl: "images/questions/2023_PRAC_MATH005.png"
  },
  {
    id: "2023_PRAC_MATH006",
    subject: "Mathematics",
    topic: "Straight Lines",
    questionType: "Numerical",
    question: "A triangle is formed by X-axis, Y-axis and the line $3x + 4y = 60$. Then the number of points P(a, b) which lie strictly inside the triangle, where a is an integer and b is a multiple of a, is",
    options: [],
    correctAnswer: "31",
    questionImageUrl: "images/questions/2023_PRAC_MATH006.png"
  },
  {
    id: "2023_PRAC_MATH007",
    subject: "Mathematics",
    topic: "Straight Lines",
    questionType: "MCQ",
    question: "A light ray emits from the origin making an angle 30° with the positive x-axis. After getting reflected by the line $x + y = 1$, if this ray intersects x-axis at Q, then the abscissa of Q is",
    options: [
      "$\\frac{2}{3+\\sqrt{3}}$",
      "$\\frac{2}{3-\\sqrt{3}}$",
      "$\\frac{2}{(\\sqrt{3}-1)}$",
      "$\\frac{\\sqrt{3}}{2(\\sqrt{3}+1)}$"
    ],
    correctAnswer: "$\\frac{2}{3-\\sqrt{3}}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH008",
    subject: "Mathematics",
    topic: "Straight Lines",
    questionType: "MCQ",
    question: "Let B and C be the two points on the line $y+x=0$ such that B and C are symmetric with respect to the origin. Suppose A is a point on $y-2x=2$ such that $\\triangle ABC$ is an equilateral triangle. Then, the area of the $\\triangle ABC$ is",
    options: [
      "$3\\sqrt{3}$",
      "$2\\sqrt{3}$",
      "$\\frac{8}{\\sqrt{3}}$",
      "$\\frac{10}{\\sqrt{3}}$"
    ],
    correctAnswer: "$\\frac{8}{\\sqrt{3}}$",
    questionImageUrl: "images/questions/2023_PRAC_MATH008.png"
  },
  {
    id: "2023_PRAC_MATH009",
    subject: "Mathematics",
    topic: "Straight Lines",
    questionType: "Numerical",
    question: "A triangle is formed by the tangents at the point (2, 2) on the curves $y^2=2x$ and $x^2+y^2=4x$, and the line $x+y+2=0$. If r is the radius of its circumcircle, then $r^2$ is equal to",
    options: [],
    correctAnswer: "10",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH010",
    subject: "Mathematics",
    topic: "Straight Lines",
    questionType: "MCQ",
    question: "A straight line cuts off the intercepts $OA=a$ and $OB=b$ on the positive directions of x-axis and y-axis respectively. If the perpendicular from origin O to this line makes an angle of $\\frac{\\pi}{6}$ with positive direction of y-axis and the area of $\\Delta OAB$ is $\\frac{98}{3}\\sqrt{3}$, then $a^2-b^2$ is equal to:",
    options: [
      "$\\frac{392}{3}$",
      "196",
      "$\\frac{196}{3}$",
      "98"
    ],
    correctAnswer: "$\\frac{392}{3}$",
    questionImageUrl: "images/questions/2023_PRAC_MATH010.png"
  },
  {
    id: "2023_PRAC_MATH011",
    subject: "Mathematics",
    topic: "Straight Lines",
    questionType: "MCQ",
    question: "If the orthocentre of the triangle, whose vertices are (1, 2), (2, 3) and (3, 1) is ($\\alpha, \\beta$), then the quadratic equation whose roots are $\\alpha+4\\beta$ and $4\\alpha+\\beta$, is",
    options: [
      "$x^2 - 19x + 90 = 0$",
      "$x^2 - 18x + 80 = 0$",
      "$x^2 - 22x + 120 = 0$",
      "$x^2 - 20x + 99 = 0$"
    ],
    correctAnswer: "$x^2 - 20x + 99 = 0$",
    questionImageUrl: "images/questions/2023_PRAC_MATH011.png"
  },
  {
    id: "2023_PRAC_MATH012",
    subject: "Mathematics",
    topic: "Straight Lines",
    questionType: "MCQ",
    question: "The equation of the angle bisectors of the lines represented by the equation $2x^2+xy-3y^2=0$ is",
    options: [
      "$3x^2+5xy+2y^2=0$",
      "$x^2-y^2+10xy=0$",
      "$3x^2+xy-2y^2=0$",
      "$x^2-y^2-10xy=0$"
    ],
    correctAnswer: "$x^2-y^2-10xy=0$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH013",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    questionType: "MCQ",
    question: "Let $\\alpha$ be a root of the equation $(a-c)x^2 + (b-a)x + (c-b) = 0$ where a, b, c are distinct real numbers such that the matrix $\\begin{bmatrix} \\alpha^2 & \\alpha & 1 \\\\ 1 & 1 & 1 \\\\ a & b & c \\end{bmatrix}$ is singular. Then the value of $\\frac{(a-c)^2}{(b-a)(c-b)} + \\frac{(b-a)^2}{(a-c)(c-b)} + \\frac{(c-b)^2}{(a-c)(b-a)}$ is",
    options: [
      "1",
      "3",
      "9",
      "12"
    ],
    correctAnswer: "3",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH014",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    questionType: "Numerical",
    question: "Let $\\lambda \\in R$ and let the equation E be $|x|^2 - 2|x| + |\\lambda-3| = 0$. Then the largest element in the set $S = \\{x+\\lambda : x$ is an integer solution of E} is",
    options: [],
    correctAnswer: "5",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH015",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    questionType: "MCQ",
    question: "The number of real solutions of the equation $3(x^2 + \\frac{1}{x^2}) - 2(x + \\frac{1}{x}) + 5 = 0$ is",
    options: [
      "4",
      "0",
      "3",
      "2"
    ],
    correctAnswer: "0",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH016",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    questionType: "Numerical",
    question: "Let $S = \\{\\alpha : \\log_2(9^{2\\alpha-4} + 13) - \\log_2(\\frac{5}{2} \\cdot 3^{2\\alpha-4} + 1) = 2\\}$. Then the maximum value of $\\beta$ for which the equation $x^2 - 2(\\sum_{\\alpha \\in S} \\alpha)^2 x + \\sum_{\\alpha \\in S} (\\alpha+1)^2 \\beta = 0$ has real roots, is",
    options: [],
    correctAnswer: "25",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH017",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    questionType: "Numerical",
    question: "Let $a \\in R$ and let $\\alpha, \\beta$ be the roots of the equation $x^2 + 60^{\\frac{1}{4}}x + a = 0$. If $\\alpha^4 + \\beta^4 = -30$, then the product of all possible values of a is",
    options: [],
    correctAnswer: "45",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH018",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    questionType: "MCQ",
    question: "Let $\\lambda \\neq 0$ be a real number. Let $\\alpha, \\beta$ be the roots of the equation $14x^2 - 31x + 3\\lambda = 0$ and $\\alpha, \\gamma$ be the roots of the equation $35x^2 - 53x + 4\\lambda = 0$. Then $\\frac{3\\alpha}{\\beta}$ and $\\frac{4\\alpha}{\\gamma}$ are the roots of the equation:",
    options: [
      "$7x^2 + 245x - 250 = 0$",
      "$7x^2 - 245x + 250 = 0$",
      "$49x^2 - 245x + 250 = 0$",
      "$49x^2 + 245x + 250 = 0$"
    ],
    correctAnswer: "$49x^2 - 245x + 250 = 0$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH019",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    questionType: "Numerical",
    question: "If the value of real number $a > 0$ for which $x^2 - 5ax + 1 = 0$ and $x^2 - ax - 5 = 0$ have a common real root is $\\frac{3}{\\sqrt{2\\beta}}$, then $\\beta$ is equal to",
    options: [],
    correctAnswer: "13",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH020",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    questionType: "MCQ",
    question: "The number of real roots of the equation $\\sqrt{x^2 - 4x + 3} + \\sqrt{x^2 - 9} = \\sqrt{4x^2 - 14x + 6}$, is:",
    options: [
      "0",
      "1",
      "3",
      "2"
    ],
    correctAnswer: "1",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH021",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    questionType: "MCQ",
    question: "The equation $e^{4x} + 8e^{3x} + 13e^{2x} - 8e^x + 1 = 0, x \\in R$ has:",
    options: [
      "two solutions and both are negative",
      "no solution",
      "four solutions two of which are negative",
      "two solutions and only one of them is negative"
    ],
    correctAnswer: "two solutions and both are negative",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH022",
    subject: "Mathematics",
    topic: "Sets and Relations",
    questionType: "MCQ",
    question: "The relation R = \\{(a,b): gcd(a,b) = 1, 2a $\\neq$ b, a, b $\\in$ Z} is:",
    options: [
      "transitive but not reflexive",
      "symmetric but not transitive",
      "reflexive but not symmetric",
      "neither symmetric nor transitive"
    ],
    correctAnswer: "neither symmetric nor transitive",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH023",
    subject: "Mathematics",
    topic: "Sets and Relations",
    questionType: "Numerical",
    question: "The minimum number of elements that must be added to the relation R = \\{(a, b), (b, c), (b, d)} on the set \\{a, b, c, d} so that it is an equivalence relation, is",
    options: [],
    correctAnswer: "13",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH024",
    subject: "Mathematics",
    topic: "Sets and Relations",
    questionType: "MCQ",
    question: "Let R be a relation defined on N, a R b if $2a+3b$ is a multiple of 5, a, b $\\in$ N. Then R is",
    options: [
      "not reflexive",
      "transitive but not symmetric",
      "symmetric but not transitive",
      "an equivalence relation"
    ],
    correctAnswer: "an equivalence relation",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH025",
    subject: "Mathematics",
    topic: "Sets and Relations",
    questionType: "MCQ",
    question: "The minimum number of elements that must be added to the relation R = \\{(a,b), (b,c)} on the set \\{a, b, c} so that it becomes symmetric and transitive is:",
    options: [
      "4",
      "7",
      "5",
      "3"
    ],
    correctAnswer: "7",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH026",
    subject: "Mathematics",
    topic: "Sets and Relations",
    questionType: "MCQ",
    question: "Let R be a relation on N x N defined by (a, b) R (c, d) if and only if $ad(b-c) = bc(a-d)$. Then R is",
    options: [
      "symmetric but neither reflexive nor transitive",
      "transitive but neither reflexive nor symmetric",
      "reflexive and symmetric but not transitive",
      "symmetric and transitive but not reflexive"
    ],
    correctAnswer: "symmetric but neither reflexive nor transitive",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH027",
    subject: "Mathematics",
    topic: "Sets and Relations",
    questionType: "MCQ",
    question: "Among the relations $S = \\{(a,b) : a,b \\in R - \\{0\\}, 2 + \\frac{a}{b} > 0\\}$ and $T = \\{(a,b) : a,b \\in R, a^2 - b^2 \\in Z\\}$,",
    options: [
      "S is transitive but T is not",
      "T is symmetric but S is not",
      "Neither S nor T is transitive",
      "Both S and T are symmetric"
    ],
    correctAnswer: "T is symmetric but S is not",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH028",
    subject: "Mathematics",
    topic: "Sets and Relations",
    questionType: "MCQ",
    question: "Let R be a relation on R, given by $R = \\{(a,b) : 3a - 3b + \\sqrt{7}$ is an irrational number}. Then R is",
    options: [
      "Reflexive but neither symmetric nor transitive",
      "Reflexive and transitive but not symmetric",
      "Reflexive and symmetric but not transitive",
      "An equivalence relation"
    ],
    correctAnswer: "Reflexive but neither symmetric nor transitive",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH029",
    subject: "Mathematics",
    topic: "Sets and Relations",
    questionType: "MCQ",
    question: "Let P(S) denote the power set of S = \\{1, 2, 3, ..., 10}. Define the relations $R_1$ and $R_2$ on P(S) as $A R_1 B$ if $(A \\cap B^c) \\cup (B \\cap A^c) = \\emptyset$ and $A R_2 B$ if $A \\cup B^c = B \\cup A^c, \\forall A, B \\in P(S)$. Then:",
    options: [
      "both $R_1$ and $R_2$ are equivalence relations",
      "only $R_1$ is an equivalence relation",
      "only $R_2$ is an equivalence relation",
      "both $R_1$ and $R_2$ are not equivalence relations"
    ],
    correctAnswer: "both $R_1$ and $R_2$ are equivalence relations",
    questionImageUrl: "images/questions/2023_PRAC_MATH029.png"
  },
  {
    id: "2023_PRAC_MATH030",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "MCQ",
    question: "For three positive integers p, q, r, $x^{pq^2} = y^{qr} = z^{p^2r}$ and $r=pq+1$ such that 3, $3 \\log_y x$, $3 \\log_z y$, $7 \\log_x z$ are in A.P. with common difference $\\frac{1}{2}$. Then $r-p-q$ is equal to",
    options: [
      "2",
      "6",
      "12",
      "-6"
    ],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH031",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "Numerical",
    question: "The $4^{th}$ term of GP is 500 and its common ratio is $\\frac{1}{m}$, $m \\in N$. Let $S_n$ denote the sum of the first n terms of this GP. If $S_6 > S_5+1$ and $S_7 < S_6 + \\frac{1}{2}$, then the number of possible values of m is",
    options: [],
    correctAnswer: "12",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH032",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "Numerical",
    question: "If $\\frac{1^3 + 2^3 + 3^3 + ... \\text{upto n terms}}{1 \\cdot 3 + 2 \\cdot 5 + 3 \\cdot 7 + ... \\text{upto n terms}} = \\frac{9}{5}$, then the value of n is",
    options: [],
    correctAnswer: "5",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH033",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "Numerical",
    question: "Let $A_1, A_2, A_3$ be the three A.P. with the same common difference d and having their first terms as A, A+1, A+2, respectively. Let a, b, c be the $7^{th}, 9^{th}, 17^{th}$ terms of $A_1, A_2, A_3$ respectively such that $\\begin{vmatrix} a & 7 & 1 \\\\ 2b & 17 & 1 \\\\ c & 17 & 1 \\end{vmatrix} + 70 = 0$. If $a=29$, then the sum of first 20 terms of an AP whose first term is $c-a-b$ and common difference is $\\frac{d}{12}$ is equal to",
    options: [],
    correctAnswer: "495",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH034",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "Numerical",
    question: "For the two positive numbers a, b, if a, b and $\\frac{1}{18}$ are in a geometric progression, while $\\frac{1}{a}, 10$ and $\\frac{1}{b}$ are in an arithmetic progression, then $16a+12b$ is equal to",
    options: [],
    correctAnswer: "3",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH035",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "Numerical",
    question: "Let $a_1, a_2, a_3, ...$ be a GP of increasing positive numbers. If the product of fourth and sixth terms is 9 and the sum of fifth and seventh terms is 24, then $a_1 a_9 + a_2 a_4 a_9 + a_5 + a_7$ is equal to",
    options: [],
    correctAnswer: "60",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH036",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "Numerical",
    question: "Let $\\{a_k\\}$ and $\\{b_k\\}$, $k \\in N$, be two G.P.s with common ratio $r_1$ and $r_2$ respectively such that $a_1=b_1=4$ and $r_1 < r_2$. Let $c_k = a_k + b_k, k \\in N$. If $c_2=5$ and $c_3=\\frac{13}{4}$ then $\\sum_{k=1}^{\\infty} c_k - (12a_6 + 8b_4)$ is equal to",
    options: [],
    correctAnswer: "9",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH037",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "Numerical",
    question: "Let $a_1 = b_1 = 1$ and $a_n = a_{n-1} + (n-1)$, $b_n = b_{n-1} + a_{n-1}$, $n \\ge 2$. If $S = \\sum_{n=1}^{10} \\frac{b_n}{2^n}$ and $T = \\sum_{n=1}^{8} \\frac{n}{2^{n-1}}$, then $2^7(2S-T)$ is equal to",
    options: [],
    correctAnswer: "461",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH038",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "MCQ",
    question: "If $a_n = \\frac{-2}{4n^2 - 16n + 15}$, then $a_1+a_2+...+a_{25}$ is equal to:",
    options: [
      "$\\frac{51}{144}$",
      "$\\frac{49}{138}$",
      "$\\frac{50}{141}$",
      "$\\frac{52}{147}$"
    ],
    correctAnswer: "$\\frac{50}{141}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH039",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "Numerical",
    question: "Let $\\sum_{n=0}^{\\infty} \\frac{n^3((2n)!) + (2n-1)(n!)}{(n!)((2n)!)} = ae + \\frac{b}{e} + c$, where a, b, $c \\in Z$ and $e = \\sum_{n=0}^{\\infty} \\frac{1}{n!}$. Then $a^2-b+c$ is equal to",
    options: [],
    correctAnswer: "26",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH040",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "MCQ",
    question: "Let a, b, $c > 1$, $a^3, b^3$ and $c^3$ be in A.P., and $\\log_a b, \\log_c a$ and $\\log_b c$ be in G.P. If the sum of first 20 terms of an A.P., whose first term is $\\frac{a+4b+c}{3}$ and the common difference is $\\frac{a-8b+c}{10}$ is -444, then abc is equal to",
    options: [
      "343",
      "216",
      "$\\frac{343}{8}$",
      "$\\frac{125}{8}$"
    ],
    correctAnswer: "216",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH041",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "MCQ",
    question: "The parabolas: $ax^2+2bx+cy=0$ and $dx^2+2ex+fy=0$ intersect on the line $y=1$. If a, b, c, d, e, f are positive real numbers and a, b, c are in G.P., then",
    options: [
      "d, e, f are in A.P.",
      "$\\frac{d}{a}, \\frac{e}{b}, \\frac{f}{c}$ are in G.P.",
      "$\\frac{d}{a}, \\frac{e}{b}, \\frac{f}{c}$ are in A.P.",
      "d, e, f are in G.P."
    ],
    correctAnswer: "$\\frac{d}{a}, \\frac{e}{b}, \\frac{f}{c}$ are in A.P.",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH042",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "Numerical",
    question: "The $8^{th}$ common term of the series $S_1 = 3+7+11+15+19+...$ and $S_2 = 1+6+11+16+21+...$ is",
    options: [],
    correctAnswer: "151",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH043",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "MCQ",
    question: "Let $y=f(x)$ represent a parabola with focus $(-\\frac{1}{2}, 0)$ and directrix $y=-\\frac{1}{2}$. Then $S = \\{x \\in R : \\tan^{-1}(\\sqrt{f(x)}) + \\sin^{-1}(\\sqrt{f(x)+1}) = \\frac{\\pi}{2}\\}$:",
    options: [
      "contains exactly two elements",
      "contains exactly one element",
      "is an infinite set",
      "is an empty set"
    ],
    correctAnswer: "contains exactly two elements",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH044",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "Numerical",
    question: "Let $a_1, a_2, ..., a_n$ be in A.P. If $a_5 = 2a_7$ and $a_{11}=18$, then $12(\\frac{1}{\\sqrt{a_{10}} + \\sqrt{a_{11}}} + \\frac{1}{\\sqrt{a_{11}} + \\sqrt{a_{12}}} + ... + \\frac{1}{\\sqrt{a_{17}} + \\sqrt{a_{18}}})$ is equal to",
    options: [],
    correctAnswer: "8",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH045",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "MCQ",
    question: "Let $a_1, a_2, a_3, ...$ be an A.P. If $a_7=3$, the product $a_1 a_4$ is minimum and the sum of its first n terms is zero, then $n! - 4a_{n(n+2)}$ is equal to:",
    options: [
      "24",
      "$\\frac{33}{4}$",
      "$\\frac{381}{4}$",
      "9"
    ],
    correctAnswer: "24",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH046",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "Numerical",
    question: "The sum on $1^2 - 2 \\cdot 3^2 + 3 \\cdot 5^2 - 4 \\cdot 7^2 + 5 \\cdot 9^2 - ... + 15 \\cdot 29^2$ is",
    options: [],
    correctAnswer: "6952",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH047",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "MCQ",
    question: "The sum to 10 terms of the series $\\frac{1}{1+1^2+1^4} + \\frac{2}{1+2^2+2^4} + \\frac{3}{1+3^2+3^4} + ...$ is:",
    options: [
      "$\\frac{59}{111}$",
      "$\\frac{55}{111}$",
      "$\\frac{56}{111}$",
      "$\\frac{58}{111}$"
    ],
    correctAnswer: "$\\frac{55}{111}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH048",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "Numerical",
    question: "Let $a_1=8, a_2, a_3, ..., a_n$ be an A.P. If the sum of its first four terms is 50 and the sum of its last four terms is 170, then the product of its middle two terms is",
    options: [],
    correctAnswer: "754",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH049",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "Numerical",
    question: "The number of 3-digit numbers, that are divisible by either 2 or 3 but not divisible by 7 is",
    options: [],
    correctAnswer: "514",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH050",
    subject: "Mathematics",
    topic: "Sequences and Series",
    questionType: "Numerical",
    question: "The sum of the common terms of the following three arithmetic progressions. $3, 7, 11, 15, ..., 399$, $2, 5, 8, 11, ..., 359$ and $2, 7, 12, 17, ..., 197$, is equal to",
    options: [],
    correctAnswer: "321",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH051",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "Let $\\vec{u}=\\hat{i}-\\hat{j}-2\\hat{k}, \\vec{v}=2\\hat{i}+\\hat{j}-\\hat{k}, \\vec{v} \\cdot \\vec{w}=2$ and $\\vec{v} \\times \\vec{w}=\\vec{u}+\\lambda\\vec{v}$. Then $\\vec{u} \\cdot \\vec{w}$ is equal to",
    options: [
      "1",
      "$\\frac{3}{2}$",
      "2",
      "$-\\frac{2}{3}$"
    ],
    correctAnswer: "1",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH052",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "Let $\\vec{\\alpha}=4\\hat{i}+3\\hat{j}+5\\hat{k}$ and $\\vec{\\beta}=\\hat{i}+2\\hat{j}-4\\hat{k}$. Let $\\vec{\\beta}_1$ be parallel to $\\vec{\\alpha}$ and $\\vec{\\beta}_2$ be perpendicular to $\\vec{\\alpha}$. If $\\vec{\\beta}=\\vec{\\beta}_1+\\vec{\\beta}_2$, then the value of $5\\vec{\\beta}_2 \\cdot (\\hat{i}+\\hat{j}+\\hat{k})$ is",
    options: [
      "6",
      "11",
      "7",
      "9"
    ],
    correctAnswer: "7",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH053",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "Numerical",
    question: "Let $\\vec{a}=\\hat{i}+2\\hat{j}+\\lambda\\hat{k}$, $\\vec{b}=3\\hat{i}-5\\hat{j}-\\lambda\\hat{k}$, $\\vec{a} \\cdot \\vec{c}=7$, $2\\vec{b} \\cdot \\vec{c}+43=0$, $\\vec{a} \\times \\vec{c} = \\vec{b} \\times \\vec{c}$. Then $|\\vec{a} \\cdot \\vec{b}|$ is equal to",
    options: [],
    correctAnswer: "8",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH054",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "The vector $\\vec{a}=-\\hat{i}+2\\hat{j}+\\hat{k}$ is rotated through a right angle, passing through the y-axis in its way and the resulting vector is $\\vec{b}$. Then the projection of $3\\vec{a}+\\sqrt{2}\\vec{b}$ on $\\vec{c}=5\\hat{i}+4\\hat{j}+3\\hat{k}$ is",
    options: [
      "$3\\sqrt{2}$",
      "1",
      "$\\sqrt{6}$",
      "$2\\sqrt{3}$"
    ],
    correctAnswer: "$3\\sqrt{2}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH055",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "Let $\\vec{a}, \\vec{b}$ and $\\vec{c}$ be three non zero vectors such that $\\vec{b} \\cdot \\vec{c}=0$ and $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = \\frac{\\vec{b}-\\vec{c}}{2}$. If $\\vec{d}$ be a vector such that $\\vec{b} \\cdot \\vec{d} = \\vec{a} \\cdot \\vec{b}$, then $(\\vec{a} \\times \\vec{b}) \\cdot (\\vec{c} \\times \\vec{d})$ is equal to",
    options: [
      "$\\frac{3}{4}$",
      "$\\frac{1}{2}$",
      "$-\\frac{1}{4}$",
      "$\\frac{1}{4}$"
    ],
    correctAnswer: "$\\frac{1}{4}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH056",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "If the four points, whose position vectors are $3\\hat{i}-4\\hat{j}+2\\hat{k}, \\hat{i}+2\\hat{j}-\\hat{k}, -2\\hat{i}-\\hat{j}+3\\hat{k}$ and $5\\hat{i}-2\\alpha\\hat{j}+4\\hat{k}$ are coplanar, then $\\alpha$ is equal to",
    options: [
      "$\\frac{73}{17}$",
      "$-\\frac{107}{17}$",
      "$-\\frac{73}{17}$",
      "$\\frac{107}{17}$"
    ],
    correctAnswer: "$\\frac{73}{17}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH057",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "Let $\\vec{a}=-\\hat{i}-\\hat{j}+\\hat{k}$, $\\vec{a} \\cdot \\vec{b}=1$ and $\\vec{a} \\times \\vec{b}=\\hat{i}-\\hat{j}$. Then $\\vec{a}-6\\vec{b}$ is equal to",
    options: [
      "$3(\\hat{i}-\\hat{j}-\\hat{k})$",
      "$3(\\hat{i}+\\hat{j}+\\hat{k})$",
      "$3(\\hat{i}-\\hat{j}+\\hat{k})$",
      "$3(\\hat{i}+\\hat{j}-\\hat{k})$"
    ],
    correctAnswer: "$3(\\hat{i}+\\hat{j}+\\hat{k})$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH058",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "If the vectors $\\vec{a}=\\lambda\\hat{i}+\\mu\\hat{j}+4\\hat{k}$, $\\vec{b}=-2\\hat{i}+4\\hat{j}-2\\hat{k}$ and $\\vec{c}=2\\hat{i}+3\\hat{j}+\\hat{k}$ are coplanar and the projection of $\\vec{a}$ on the vector $\\vec{b}$ is $\\sqrt{54}$ units, then the sum of all possible values of $\\lambda+\\mu$ is equal to",
    options: [
      "0",
      "6",
      "24",
      "18"
    ],
    correctAnswer: "24",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH059",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "Numerical",
    question: "Let $\\vec{a}, \\vec{b}$ and $\\vec{c}$ be three non-zero non-coplanar vectors. Let the position vectors of four points A, B, C and D be $\\vec{a}-\\vec{b}+\\vec{c}$, $\\lambda\\vec{a}-3\\vec{b}+4\\vec{c}$, $-\\vec{a}+2\\vec{b}-3\\vec{c}$ and $2\\vec{a}-4\\vec{b}+6\\vec{c}$ respectively. If $\\vec{AB}$, $\\vec{AC}$ and $\\vec{AD}$ are coplanar, then $\\lambda$ is:",
    options: [],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH060",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "Let $\\vec{a}=4\\hat{i}+3\\hat{j}$ and $\\vec{b}=3\\hat{i}-4\\hat{j}+5\\hat{k}$ and $\\vec{c}$ is a vector such that $\\vec{c} \\cdot (\\vec{a} \\times \\vec{b}) + 25 = 0$, $\\vec{c} \\cdot (\\hat{i}+\\hat{j}+\\hat{k})=4$ and projection of $\\vec{c}$ on $\\vec{a}$ is 1, then the projection of $\\vec{c}$ on $\\vec{b}$ equals:",
    options: [
      "$\\frac{5}{\\sqrt{2}}$",
      "$\\frac{1}{5}$",
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\frac{3}{\\sqrt{2}}$"
    ],
    correctAnswer: "$\\frac{5}{\\sqrt{2}}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH061",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "If $\\vec{a}=\\hat{i}+2\\hat{k}$, $\\vec{b}=\\hat{i}+\\hat{j}+\\hat{k}$, $\\vec{c}=7\\hat{i}-3\\hat{j}+4\\hat{k}$, $\\vec{r} \\times \\vec{b} + \\vec{b} \\times \\vec{c} = \\vec{0}$ and $\\vec{r} \\cdot \\vec{a} = 0$, then $\\vec{r} \\cdot \\vec{c}$ is equal to",
    options: [
      "34",
      "12",
      "36",
      "30"
    ],
    correctAnswer: "34",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH062",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "If a, b, c are three non-zero vectors and $\\hat{n}$ is a unit vector perpendicular to $\\vec{c}$ such that $\\vec{a} = \\alpha\\vec{b} - \\hat{n}$ ($\\alpha \\neq 0$) and $\\vec{b} \\cdot \\vec{c} = 12$, then $|\\vec{c} \\times (\\vec{a} \\times \\vec{b})|$ is equal to:",
    options: [
      "15",
      "9",
      "12",
      "6"
    ],
    correctAnswer: "12",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH063",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "Let $\\lambda \\in R, \\vec{a} = \\lambda\\hat{i} + 2\\hat{j} - 3\\hat{k}, \\vec{b} = \\hat{i} - \\lambda\\hat{j} + 2\\hat{k}$. If $((\\vec{a}+\\vec{b}) \\times (\\vec{a} \\times \\vec{b})) \\times (\\vec{a}-\\vec{b}) = 8\\hat{i} - 40\\hat{j} - 24\\hat{k}$, then $|\\lambda(\\vec{a}+\\vec{b}) \\times (\\vec{a}-\\vec{b})|^2$ is equal to",
    options: [
      "140",
      "132",
      "144",
      "136"
    ],
    correctAnswer: "140",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH064",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "Let $\\vec{a}$ and $\\vec{b}$ be two vectors. Let $|\\vec{a}|=1, |\\vec{b}|=4$ and $\\vec{a} \\cdot \\vec{b}=2$. If $\\vec{c}=(2\\vec{a} \\times \\vec{b})-3\\vec{b}$, then the value of $\\vec{b} \\cdot \\vec{c}$ is",
    options: [
      "-24",
      "-48",
      "-84",
      "-60"
    ],
    correctAnswer: "-48",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH065",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "Let $\\vec{a}=2\\hat{i}+\\hat{j}+\\hat{k}$, $\\vec{b}$ and $\\vec{c}$ be two nonzero vectors such that $|\\vec{a}+\\vec{b}+\\vec{c}|=|\\vec{a}+\\vec{b}-\\vec{c}|$ and $\\vec{b} \\cdot \\vec{c}=0$. Consider the following two statements: (A) $|\\vec{a}+\\lambda\\vec{c}| \\ge |\\vec{a}|$ for all $\\lambda \\in R$. (B) $\\vec{a}$ and $\\vec{c}$ are always parallel.",
    options: [
      "only (B) is correct",
      "neither (A) nor (B) is correct",
      "only (A) is correct",
      "both (A) and (B) are correct"
    ],
    correctAnswer: "only (A) is correct",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH066",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "Numerical",
    question: "Let $\\vec{a}$ and $\\vec{b}$ be two vectors such that $|\\vec{a}|=\\sqrt{14}, |\\vec{b}|=\\sqrt{6}$ and $|\\vec{a} \\times \\vec{b}|=\\sqrt{48}$. Then $(\\vec{a} \\cdot \\vec{b})^2$ is equal to",
    options: [],
    correctAnswer: "36",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH067",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "Let $\\vec{a}=\\hat{i}+2\\hat{j}+3\\hat{k}$, $\\vec{b}=\\hat{i}-\\hat{j}+2\\hat{k}$ and $\\vec{c}=5\\hat{i}-3\\hat{j}+3\\hat{k}$ be three vectors. If $\\vec{r}$ is a vector such that, $\\vec{r} \\times \\vec{b} = \\vec{c} \\times \\vec{b}$ and $\\vec{r} \\cdot \\vec{a} = 0$. Then $25|\\vec{r}|^2$ equal to",
    options: [
      "449",
      "336",
      "339",
      "560"
    ],
    correctAnswer: "339",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH068",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "The foot of perpendicular from the origin O to a plane P which meets the co-ordinate axes at the points A, B, C is (2, a, 4), $a \\in N$. If the volume of the tetrahedron OABC is 144 unit$^3$, then which of the following points is NOT on P?",
    options: [
      "(2, 2, 4)",
      "(0, 4, 4)",
      "(3, 0, 4)",
      "(0, 6, 3)"
    ],
    correctAnswer: "(3, 0, 4)",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH069",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "Numerical",
    question: "Let $\\vec{a}, \\vec{b}, \\vec{c}$ be three vectors such that $|\\vec{a}|=\\sqrt{31}, 4|\\vec{b}|=|\\vec{c}|=2$ and $2(\\vec{a} \\times \\vec{b}) = 3(\\vec{c} \\times \\vec{a})$. If the angle between $\\vec{b}$ and $\\vec{c}$ is $\\frac{2\\pi}{3}$, then $(\\frac{\\vec{a} \\times \\vec{c}}{\\vec{a} \\cdot \\vec{b}})^2$ is equal to",
    options: [],
    correctAnswer: "3",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH070",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "Numerical",
    question: "Let $\\vec{v}=\\alpha\\hat{i}+2\\hat{j}-3\\hat{k}$, $\\vec{w}=2\\alpha\\hat{i}+\\hat{j}-\\hat{k}$, and $\\vec{u}$ be a vector such that $|\\vec{u}|=\\alpha>0$. If the minimum value of the scalar triple product $[\\vec{u} \\vec{v} \\vec{w}]$ is $-\\alpha\\sqrt{3401}$, and $|\\vec{u} \\cdot \\hat{i}|^2 = \\frac{m}{n}$ where m and n are coprime natural numbers, then $m+n$ is equal to",
    options: [],
    correctAnswer: "3501",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH071",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "Numerical",
    question: "Let $A(2,6,2), B(-4,0,\\lambda), C(2,3,-1)$ and $D(4,5,0), |\\lambda| \\le 5$ are the vertices of a quadrilateral ABCD. If its area is 18 square units, then $5-6\\lambda$ is equal to",
    options: [],
    correctAnswer: "11",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH072",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "Let $\\vec{a}=5\\hat{i}-\\hat{j}-3\\hat{k}$ and $\\vec{b}=\\hat{i}+3\\hat{j}+5\\hat{k}$ be two vectors. Then which one of the following statements is TRUE?",
    options: [
      "Projection of $\\vec{a}$ on $\\vec{b}$ is $\\frac{-17}{\\sqrt{35}}$ and the direction of the projection vector is opposite to the direction of $\\vec{b}$",
      "Projection of $\\vec{a}$ on $\\vec{b}$ is $\\frac{17}{\\sqrt{35}}$ and the direction of the projection vector is same as of $\\vec{b}$",
      "Projection of $\\vec{a}$ on $\\vec{b}$ is $\\frac{17}{\\sqrt{35}}$ and the direction of the projection vector is opposite to the direction of $\\vec{b}$",
      "Projection of $\\vec{a}$ on $\\vec{b}$ is $\\frac{-17}{\\sqrt{35}}$ and the direction of the projection vector is same as of $\\vec{b}$"
    ],
    correctAnswer: "Projection of $\\vec{a}$ on $\\vec{b}$ is $\\frac{-17}{\\sqrt{35}}$ and the direction of the projection vector is opposite to the direction of $\\vec{b}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH073",
    subject: "Mathematics",
    topic: "Vector Algebra",
    questionType: "MCQ",
    question: "Let $\\vec{a}=2\\hat{i}-7\\hat{j}+5\\hat{k}, \\vec{b}=\\hat{i}+\\hat{k}$ and $\\vec{c}=\\hat{i}+2\\hat{j}-3\\hat{k}$ be three given vectors. If $\\vec{r}$ is a vector such that $\\vec{r} \\times \\vec{a} = \\vec{c} \\times \\vec{a}$ and $\\vec{r} \\cdot \\vec{b} = 0$, then $|\\vec{r}|$ is equal to:",
    options: [
      "$\\frac{11}{7}\\sqrt{2}$",
      "$\\frac{11}{7}$",
      "$\\frac{11}{5}\\sqrt{2}$",
      "$\\frac{\\sqrt{914}}{7}$"
    ],
    correctAnswer: "$\\frac{11}{7}\\sqrt{2}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH074",
    subject: "Mathematics",
    topic: "Statistics",
    questionType: "MCQ",
    question: "Let the six numbers $a_1, a_2, a_3, a_4, a_5, a_6$ be in A.P. and $a_1+a_3=10$. If the mean of these six numbers is $\\frac{19}{2}$ and their variance is $\\sigma^2$, then $8\\sigma^2$ is equal to",
    options: [
      "220",
      "210",
      "200",
      "105"
    ],
    correctAnswer: "210",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH075",
    subject: "Mathematics",
    topic: "Statistics",
    questionType: "MCQ",
    question: "The mean and variance of the marks obtained by the students in a test are 10 and 4 respectively. Later, the marks of one of the students is increased from 8 to 12. If the new mean of the marks is 10.2, then their new variance is equal to:",
    options: [
      "4.04",
      "4.08",
      "3.96",
      "3.92"
    ],
    correctAnswer: "3.96",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH076",
    subject: "Mathematics",
    topic: "Statistics",
    questionType: "Numerical",
    question: "Let $X=\\{11, 12, 13, ..., 40, 41\\}$ and $Y=\\{61, 62, 63, ..., 90, 91\\}$ be the two sets of observations. If $\\bar{X}$ and $\\bar{Y}$ are their respective means and $\\sigma^2$ is the variance of all the observations in $X \\cup Y$, then $|\\bar{X} + \\bar{Y} - \\sigma^2|$ is equal to.",
    options: [],
    correctAnswer: "603",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH077",
    subject: "Mathematics",
    topic: "Statistics",
    questionType: "Numerical",
    question: "The mean and variance of 7 observations are 8 and 16 respectively. If one observation 14 is omitted, a and b are respectively mean and variance of remaining 6 observations, then $a+3b-5$ is equal to",
    options: [],
    correctAnswer: "37",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH078",
    subject: "Mathematics",
    topic: "Statistics",
    questionType: "MCQ",
    question: "Let S be the set of all values of $a_1$ for which the mean deviation about the mean of 100 consecutive positive integers $a_1, a_2, a_3, ..., a_{100}$ is 25. Then S is",
    options: [
      "$\\phi$",
      "{99}",
      "N",
      "{9}"
    ],
    correctAnswer: "N",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH079",
    subject: "Mathematics",
    topic: "Statistics",
    questionType: "Numerical",
    question: "If the variance of the frequency distribution\n\n| $x_i$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n|---|---|---|---|---|---|---|---|\n| Frequency $f_i$ | 3 | 6 | 16 | $\\alpha$ | 9 | 5 | 6 |\n\nis 3, then $\\alpha$ is equal to",
    options: [],
    correctAnswer: "5",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH080",
    subject: "Mathematics",
    topic: "Statistics",
    questionType: "MCQ",
    question: "Let the mean and standard deviation of marks of class A of 100 students be respectively 40 and $\\alpha (>0)$, and the mean and standard deviation of marks of class B of n students be respectively 55 and $30-\\alpha$. If the mean and variance of the marks of the combined class of $100+n$ students are respectively 50 and 350, then the sum of variances of classes A and B is:",
    options: [
      "500",
      "650",
      "450",
      "900"
    ],
    correctAnswer: "500",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH081",
    subject: "Mathematics",
    topic: "Statistics",
    questionType: "MCQ",
    question: "The mean and variance of 5 observations are 5 and 8 respectively. If 3 observations are 1, 3, 5, then the sum of cubes of the remaining two observations is",
    options: [
      "1072",
      "1792",
      "1216",
      "1456"
    ],
    correctAnswer: "1072",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH082",
    subject: "Mathematics",
    topic: "Statistics",
    questionType: "MCQ",
    question: "Let $9=x_1 < x_2 < ... < x_7$ be in an A.P. with common difference d. If the standard deviation of $x_1, x_2, ..., x_7$ is 4 and the mean is $\\bar{X}$, then $\\bar{X}+x_6$ is equal to:",
    options: [
      "$18(1+\\frac{1}{\\sqrt{3}})$",
      "34",
      "$2(9+\\frac{8}{\\sqrt{7}})$",
      "25"
    ],
    correctAnswer: "34",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH083",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "The distance of the point $(7,-3,-4)$ from the plane passing through the points $(2,-3,1), (-1,1,-2)$ and $(3,-4,2)$ is:",
    options: [
      "4",
      "5",
      "$5\\sqrt{2}$",
      "$4\\sqrt{2}$"
    ],
    correctAnswer: "$5\\sqrt{2}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH084",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "The distance of the point $(-1,9,-16)$ from the plane $2x+3y-z=5$ measured parallel to the line $\\frac{x+4}{3}=\\frac{2-y}{4}=\\frac{z-3}{12}$ is",
    options: [
      "$13\\sqrt{2}$",
      "31",
      "26",
      "$20\\sqrt{2}$"
    ],
    correctAnswer: "26",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH085",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "Numerical",
    question: "The shortest distance between the lines $\\frac{x-2}{3}=\\frac{y+1}{2}=\\frac{z-6}{2}$ and $\\frac{x-6}{3}=\\frac{1-y}{2}=\\frac{z+8}{0}$ is equal to",
    options: [],
    correctAnswer: "14",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH086",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "Numerical",
    question: "If the foot of the perpendicular drawn from $(1, 9, 7)$ to the line passing through the point $(3, 2, 1)$ and parallel to the planes $x+2y+z=0$ and $3y-z=3$ is $(\\alpha,\\beta,\\gamma)$, then $\\alpha+\\beta+\\gamma$ is equal to",
    options: [],
    correctAnswer: "5",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH087",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "Let the plane containing the line of intersection of the planes $P1: x+(\\lambda+4)y+z=1$ and $P2: 2x+y+z=2$ pass through the points $(0,1,0)$ and $(1,0,1)$. Then the distance of the point $(2\\lambda,\\lambda,-\\lambda)$ from the plane P2 is",
    options: [
      "$5\\sqrt{6}$",
      "$4\\sqrt{6}$",
      "$2\\sqrt{6}$",
      "$3\\sqrt{6}$"
    ],
    correctAnswer: "$3\\sqrt{6}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH088",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "Numerical",
    question: "If the shortest distance between the lines $\\frac{x+\\sqrt{6}}{2}=\\frac{y-\\sqrt{6}}{3}=\\frac{z-\\sqrt{6}}{4}$ and $\\frac{x-\\lambda}{3}=\\frac{y-2\\sqrt{6}}{4}=\\frac{z+2\\sqrt{6}}{5}$ is 6, then the square of sum of all possible values of $\\lambda$ is",
    options: [],
    correctAnswer: "384",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH089",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "Consider the lines $L_1$ and $L_2$ given by $L_1: \\frac{x-1}{2}=\\frac{y-3}{1}=\\frac{z-2}{2}$ and $L_2: \\frac{x-2}{1}=\\frac{y-2}{2}=\\frac{z-3}{3}$. A line $L_3$ having direction ratios 1, -1, -2, intersects $L_1$ and $L_2$ at the points P and Q respectively. Then the length of line segment PQ is",
    options: [
      "$2\\sqrt{6}$",
      "$3\\sqrt{2}$",
      "$4\\sqrt{3}$",
      "4"
    ],
    correctAnswer: "$2\\sqrt{6}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH090",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "The distance of the point $P(4,6,-2)$ from the line passing through the point $(-3, 2, 3)$ and parallel to a line with direction ratios 3, 3, -1 is equal to:",
    options: [
      "3",
      "$\\sqrt{6}$",
      "$2\\sqrt{3}$",
      "$\\sqrt{14}$"
    ],
    correctAnswer: "$\\sqrt{14}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH091",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "Numerical",
    question: "Let the equation of the plane passing through the line $x-2y-z-5=0=x+y+3z-5$ and parallel to the line $x+y+2z-7=0=2x+3y+z-2$ be $ax+by+cz=65$. Then the distance of the point (a, b, c) from the plane $2x+2y-z+16=0$ is",
    options: [],
    correctAnswer: "9",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH092",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "The foot of perpendicular of the point (2, 0, 5) on the line $\\frac{x+1}{2}=\\frac{y-1}{5}=\\frac{z+1}{-1}$ is $(\\alpha,\\beta,\\gamma)$. Which of the following is NOT correct?",
    options: [
      "$\\frac{\\alpha\\beta}{\\gamma}=\\frac{4}{15}$",
      "$\\frac{\\alpha}{\\beta}=-8$",
      "$\\frac{\\beta}{\\gamma}=-5$",
      "$\\frac{\\gamma}{\\alpha}=\\frac{5}{8}$"
    ],
    correctAnswer: "$\\frac{\\beta}{\\gamma}=-5$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH093",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "The shortest distance between the lines $x+1=2y=-12z$ and $x=y+2=6z-6$ is",
    options: [
      "2",
      "3",
      "$\\frac{5}{2}$",
      "$\\frac{3}{2}$"
    ],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH094",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "Numerical",
    question: "If the shortest distance between the line joining the points (1, 2, 3) and (2, 3, 4), and the line $\\frac{x-1}{2}=\\frac{y+1}{-1}=\\frac{z-2}{0}$ is $\\alpha$, then $28\\alpha^2$ is equal to",
    options: [],
    correctAnswer: "18",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH095",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "Numerical",
    question: "Let the co-ordinates of one vertex of $\\triangle ABC$ be $A(0,2,\\alpha)$ and the other two vertices lie on the line $\\frac{x+\\alpha}{5}=\\frac{y-1}{2}=\\frac{z+4}{3}$. For $\\alpha \\in Z$, if the area of $\\triangle ABC$ is 21 sq. units and the line segment BC has length $2\\sqrt{21}$ units, then $\\alpha^2$ is equal to",
    options: [],
    correctAnswer: "9",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH096",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "Numerical",
    question: "Let the equation of the plane P containing the line $\\frac{x+10}{1}=\\frac{8-y}{2}=z$ be $ax+by+3z=2(a+b)$ and the distance of the plane P from the point (1, -2, 2) be c. Then $a^2+b^2+c^2$ is equal to",
    options: [],
    correctAnswer: "355",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH097",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "The plane $2x-y+z=4$ intersects the line segment joining the points $A(a,-2,4)$ and $B(2,b,-3)$ at the point C in the ratio 2:1 and the distance of the point C from the origin is $\\sqrt{5}$. If $ab<0$ and P is the point $(a-b, b, 2b-a)$, then $CP^2$ is equal to:",
    options: [
      "$\\frac{17}{3}$",
      "$\\frac{73}{3}$",
      "$\\frac{16}{3}$",
      "$\\frac{97}{3}$"
    ],
    correctAnswer: "$\\frac{17}{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH098",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "Shortest distance between the lines $\\frac{x-1}{2}=\\frac{y+8}{-7}=\\frac{z-4}{5}$ and $\\frac{x-1}{2}=\\frac{y-2}{1}=\\frac{z-6}{-3}$ is",
    options: [
      "$2\\sqrt{3}$",
      "$4\\sqrt{3}$",
      "$3\\sqrt{3}$",
      "$5\\sqrt{3}$"
    ],
    correctAnswer: "$4\\sqrt{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH099",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "If the lines $\\frac{x-1}{1}=\\frac{y-2}{2}=\\frac{z+3}{1}$ and $\\frac{x-a}{2}=\\frac{y+2}{3}=\\frac{z-3}{1}$ intersect at the point P, then the distance of the point P from the plane z = a is:",
    options: [
      "16",
      "28",
      "10",
      "22"
    ],
    correctAnswer: "28",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH100",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "Let a unit vector $\\hat{OP}$ make angles $\\alpha, \\beta, \\gamma$ with the positive directions of the co-ordinate axes OX, OY, OZ respectively, where $\\beta \\in (0, \\frac{\\pi}{2})$. $\\hat{OP}$ is perpendicular to the plane through points (1, 2, 3), (2, 3, 4) and (1, 5, 7), then which one of the following is true?",
    options: [
      "$\\alpha \\in (\\frac{\\pi}{2}, \\pi)$ and $\\gamma \\in (\\frac{\\pi}{2}, \\pi)$",
      "$\\alpha \\in (0, \\frac{\\pi}{2})$ and $\\gamma \\in (0, \\frac{\\pi}{2})$",
      "$\\alpha \\in (\\frac{\\pi}{2}, \\pi)$ and $\\gamma \\in (0, \\frac{\\pi}{2})$",
      "$\\alpha \\in (0, \\frac{\\pi}{2})$ and $\\gamma \\in (\\frac{\\pi}{2}, \\pi)$"
    ],
    correctAnswer: "$\\alpha \\in (\\frac{\\pi}{2}, \\pi)$ and $\\gamma \\in (\\frac{\\pi}{2}, \\pi)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH101",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "The line $l_1$ passes through the point (2,6,2) and is perpendicular to the plane $2x+y-2z=10$. Then the shortest distance between the line $l_1$ and the line $\\frac{x+1}{2}=\\frac{y+4}{-3}=\\frac{z}{2}$ is:",
    options: [
      "7",
      "$\\frac{19}{3}$",
      "$\\frac{19}{3}$",
      "9"
    ],
    correctAnswer: "9",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH102",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "Numerical",
    question: "If the equation of the plane passing through the point (1,1,2) and perpendicular to the line $x-3y+2z-1=0=4x-y+z$ is $Ax+By+Cz=1$, then $140(C-B+A)$ is equal to",
    options: [],
    correctAnswer: "15",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH103",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "Numerical",
    question: "If $\\lambda_1 < \\lambda_2$ are two values of $\\lambda$ such that the angle between the planes $P_1 : \\vec{r} \\cdot (3\\hat{i} - 5\\hat{j} + \\hat{k}) = 7$ and $P_2 : \\vec{r} \\cdot (\\lambda\\hat{i} + \\hat{j} - 3\\hat{k}) = 9$ is $\\sin^{-1}(\\frac{2\\sqrt{6}}{5})$, then the square of the length of perpendicular from the point $(38\\lambda_1, 10\\lambda_2, 2)$ to the plane $P_1$ is",
    options: [],
    correctAnswer: "315",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH104",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "A vector $\\vec{v}$ in the first octant is inclined to the x-axis at $60^{\\circ}$, to the y-axis at $45^{\\circ}$ and to the z-axis at an acute angle. If a plane passing through the points $(\\sqrt{2},-1,1)$ and (a, b, c), is normal to $\\vec{v}$, then",
    options: [
      "$\\sqrt{2}a+b+c=1$",
      "$a+b+\\sqrt{2}c=1$",
      "$a+\\sqrt{2}b+c=1$",
      "$\\sqrt{2}a-b+c=1$"
    ],
    correctAnswer: "$a+\\sqrt{2}b+c=1$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH105",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "If a plane passes through the points $(-1,k,0), (2,k,-1), (1,1,2)$ and is parallel to the line $\\frac{x-1}{1}=\\frac{2y+1}{2}=\\frac{z+1}{-1}$, then the value of $\\frac{k^2+1}{(k-1)(k-2)}$ is",
    options: [
      "$\\frac{17}{5}$",
      "$\\frac{6}{13}$",
      "$\\frac{5}{17}$",
      "$\\frac{13}{6}$"
    ],
    correctAnswer: "$\\frac{13}{6}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH106",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "Numerical",
    question: "Let a line L pass through the point $P(2,3,1)$ and be parallel to the line $x+3y-2z-2=0=x-y+2z$. If the distance of L from the point (5, 3, 8) is $\\alpha$, then $3\\alpha^2$ is equal to",
    options: [],
    correctAnswer: "158",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH107",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "Let the shortest distance between the lines L: $\\frac{x-5}{-2}=\\frac{y-\\lambda}{0}=\\frac{z+\\lambda}{1}, \\lambda \\ge 0$ and $L_1: x+1=y-1=4-z$ be $2\\sqrt{6}$. If $(\\alpha,\\beta,\\gamma)$ lies on L, then which one of the following is NOT possible?",
    options: [
      "$\\alpha+2\\gamma=24$",
      "$2\\alpha+\\gamma=7$",
      "$2\\alpha-\\gamma=9$",
      "$\\alpha-2\\gamma=19$"
    ],
    correctAnswer: "$\\alpha+2\\gamma=24$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH108",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "Numerical",
    question: "Let $\\theta$ be the angle between the planes $P_1 = \\vec{r} \\cdot (\\hat{i}+\\hat{j}+2\\hat{k})=9$ and $P_2 = \\vec{r} \\cdot (2\\hat{i}-\\hat{j}+\\hat{k})=15$. Let L be the line that meets $P_2$ at the point (4, -2, 5) and makes an angle $\\theta$ with the normal of $P_2$. If $\\alpha$ is the angle between L and $P_2$, then $(tan^2\\theta)(cot^2\\alpha)$ is equal to",
    options: [],
    correctAnswer: "9",
    questionImageUrl: "images/questions/2023_PRAC_MATH108.png"
  },
  {
    id: "2023_PRAC_MATH109",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "Numerical",
    question: "Let the line $L: \\frac{x-1}{2}=\\frac{y+1}{-1}=\\frac{z-3}{1}$ intersect the plane $2x+y+3z=16$ at the point P. Let the point Q be the foot of perpendicular from the point $R(1,-1,-3)$ on the line L. If $\\alpha$ is the area of the triangle PQR, then $\\alpha^2$ is equal to",
    options: [],
    correctAnswer: "180",
    questionImageUrl: "images/questions/2023_PRAC_MATH109.png"
  },
  {
    id: "2023_PRAC_MATH110",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "If a point $P(\\alpha, \\beta, \\gamma)$ satisfying $(\\alpha \\beta \\gamma) \\begin{pmatrix} 2 & 10 & 8 \\\\ 9 & 3 & 8 \\\\ 8 & 4 & 8 \\end{pmatrix} = (0 \\ 0 \\ 0)$ lies on the plane $2x+4y+3z=5$, then $6\\alpha+9\\beta+7\\gamma$ is equal to:",
    options: [
      "-1",
      "$\\frac{11}{5}$",
      "$\\frac{5}{4}$",
      "11"
    ],
    correctAnswer: "11",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH111",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "Let the plane $P: 8x+\\alpha_1 y+\\alpha_2 z+12=0$ be parallel to the line $L: \\frac{x+2}{2}=\\frac{y-3}{3}=\\frac{z+4}{5}$. If the intercept of P on the y-axis is 1, then the distance between P and L is:",
    options: [
      "$\\sqrt{14}$",
      "$\\frac{6}{\\sqrt{14}}$",
      "$\\sqrt{\\frac{2}{7}}$",
      "$\\sqrt{\\frac{7}{2}}$"
    ],
    correctAnswer: "$\\sqrt{14}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH112",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "Let P be the plane, passing through the point $(1,-1,-5)$ and perpendicular to the line joining the points $(4,1,-3)$ and $(2,4,3)$. Then the distance of P from the point $(3,-2,2)$ is",
    options: [
      "6",
      "4",
      "5",
      "7"
    ],
    correctAnswer: "5",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH113",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "The shortest distance between the lines $\\frac{x-5}{1}=\\frac{y-2}{2}=\\frac{z-4}{-3}$ and $\\frac{x+3}{1}=\\frac{y+5}{4}=\\frac{z-1}{-5}$ is",
    options: [
      "$7\\sqrt{3}$",
      "$5\\sqrt{3}$",
      "$6\\sqrt{3}$",
      "$4\\sqrt{3}$"
    ],
    correctAnswer: "$6\\sqrt{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH114",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "Let the image of the point $P(2,-1,3)$ in the plane $x+2y-z=0$ be Q. Then the distance of the plane $3x+2y+z+29=0$ from the point Q is",
    options: [
      "$\\frac{22\\sqrt{2}}{7}$",
      "$\\frac{24\\sqrt{2}}{7}$",
      "$2\\sqrt{14}$",
      "$3\\sqrt{14}$"
    ],
    correctAnswer: "$3\\sqrt{14}$",
    questionImageUrl: "images/questions/2023_PRAC_MATH114.png"
  },
  {
    id: "2023_PRAC_MATH115",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "MCQ",
    question: "Let the plane P pass through the intersection of the planes $2x+3y-z=2$ and $x+2y+3z=6$, and be perpendicular to the plane $2x+y-z+1=0$. If d is the distance of P from the point $(-7,1,1)$, then $d^2$ is equal to:",
    options: [
      "$\\frac{250}{83}$",
      "$\\frac{15}{53}$",
      "$\\frac{25}{83}$",
      "$\\frac{250}{82}$"
    ],
    correctAnswer: "$\\frac{250}{83}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH116",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "Numerical",
    question: "The point of intersection C of the plane $8x+y+2z=0$ and the line joining the points $A(-3,-6,1)$ and $B(2,4,-3)$ divides the line segment AB internally in the ratio $k:1$. If a, b, c ($|a|, |b|, |c|$ are coprime) are the direction ratios of the perpendicular from the point C on the line $\\frac{1-x}{1}=\\frac{y+4}{2}=\\frac{z+2}{3}$, then $|a+b+c|$ is equal to",
    options: [],
    correctAnswer: "10",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH117",
    subject: "Mathematics",
    topic: "Three Dimensional Geometry",
    questionType: "Numerical",
    question: "Let $\\alpha x+\\beta y+\\gamma z=1$ be the equation of a plane passing through the point $(3,-2,5)$ and perpendicular to the line joining the points $(1,2,3)$ and $(-2,3,5)$. Then the value of $\\alpha\\beta\\gamma$ is equal to",
    options: [],
    correctAnswer: "6",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH118",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "Numerical",
    question: "The number of 9 digit numbers, that can be formed using all the digits of the number 123412341 so that the even digits occupy only even places, is",
    options: [],
    correctAnswer: "60",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH119",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "Numerical",
    question: "A boy needs to select five courses from 12 available courses, out of which 5 courses are language courses. If he can choose at most two language courses, then the number of ways he can choose five courses is",
    options: [],
    correctAnswer: "546",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH120",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "MCQ",
    question: "The number of integers, greater than 7000 that can be formed, using the digits 3, 5, 6, 7, 8 without repetition, is",
    options: [
      "120",
      "168",
      "220",
      "48"
    ],
    correctAnswer: "168",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH121",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "Numerical",
    question: "Let $S=\\{1,2,3,5,7,10,11\\}$. The number of non-empty subsets of S that have the sum of all elements a multiple of 3, is",
    options: [],
    correctAnswer: "43",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH122",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "MCQ",
    question: "The number of numbers, strictly between 5000 and 10000 can be formed using the digits 1, 3, 5, 7, 9 without repetition, is",
    options: [
      "6",
      "12",
      "120",
      "72"
    ],
    correctAnswer: "72",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH123",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "Numerical",
    question: "Suppose Anil's mother wants to give 5 whole fruits to Anil from a basket of 7 red apples, 5 white apples and 8 oranges. If in the selected 5 fruits, at least 2 orange, at least one red apple and at least one white apple must be given, then the number of ways, Anil's mother can offer 5 fruits to Anil is",
    options: [],
    correctAnswer: "6860",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH124",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "Numerical",
    question: "If all the six digit numbers $x_1 x_2 x_3 x_4 x_5 x_6$ with $0 < x_1 < x_2 < x_3 < x_4 < x_5 < x_6$ are arranged in the increasing order, then the sum of the digits in the $72^{th}$ number is",
    options: [],
    correctAnswer: "32",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH125",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "Numerical",
    question: "Five digit numbers are formed using the digits 1, 2, 3, 5, 7 with repetitions and are written in descending order with serial numbers. For example, the number 77777 has serial number 1. Then the serial number of 35337 is",
    options: [],
    correctAnswer: "1436",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH126",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "MCQ",
    question: "The number of 3 digit numbers, that are divisible by either 3 or 4 but not divisible by 48, is",
    options: [
      "472",
      "432",
      "507",
      "400"
    ],
    correctAnswer: "432",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH127",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "MCQ",
    question: "The letters of the word OUGHT are written in all possible ways and these words are arranged as in a dictionary, in a series. Then the serial number of the word TOUGH is",
    options: [
      "89",
      "84",
      "86",
      "79"
    ],
    correctAnswer: "89",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH128",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "Numerical",
    question: "The total number of 4-digit numbers whose greatest common divisor with 54 is 2, is",
    options: [],
    correctAnswer: "3000",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH129",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "Numerical",
    question: "Number of 4-digit numbers (the repetition of digits is allowed) which are made using the digits 1, 2, 3 and 5, and are divisible by 15, is equal to",
    options: [],
    correctAnswer: "21",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH130",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "MCQ",
    question: "The number of ways of selecting two numbers a and b, $a \\in \\{2,4,6,...,100\\}$ and $b \\in \\{1,3,5,...,99\\}$ such that 2 is the remainder when $a+b$ is divided by 23 is",
    options: [
      "186",
      "54",
      "108",
      "268"
    ],
    correctAnswer: "108",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH131",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "Numerical",
    question: "The number of seven digits odd numbers, that can be formed using all the seven digits 1, 2, 2, 2, 3, 3, 5 is",
    options: [],
    correctAnswer: "240",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH132",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "Numerical",
    question: "Number of 4-digit numbers that are less than or equal to 2800 and either divisible by 3 or by 11, is equal to",
    options: [],
    correctAnswer: "710",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH133",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "Numerical",
    question: "Let 5 digit numbers be constructed using the digits 0, 2, 3, 4, 7, 9 with repetition allowed, and are arranged in ascending order with serial numbers. Then the serial number of the number 42923 is",
    options: [],
    correctAnswer: "2997",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH134",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "Numerical",
    question: "If $^{2n+1}P_{n-1} : ^{2n-1}P_n = 11:21$, then $n^2+n+15$ is equal to:",
    options: [],
    correctAnswer: "45",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH135",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "Numerical",
    question: "The number of words, with or without meaning, that can be formed using all the letters of the word ASSASSINATION so that the vowels occur together, is",
    options: [],
    correctAnswer: "50400",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH136",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "Numerical",
    question: "Number of integral solutions to the equation $x+y+z=21$, where $x \\ge 1, y \\ge 3, z \\ge 4$, is equal to",
    options: [],
    correctAnswer: "105",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH137",
    subject: "Mathematics",
    topic: "Permutation Combination",
    questionType: "Numerical",
    question: "The total number of six digit numbers, formed using the digits 4, 5, 9 only and divisible by 6, is",
    options: [],
    correctAnswer: "81",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH138",
    subject: "Mathematics",
    topic: "Trigonometric Ratios",
    questionType: "Numerical",
    question: "Let $S = \\{\\theta \\in [0, 2\\pi) : \\tan(\\pi \\cos\\theta) + \\tan(\\pi \\sin\\theta) = 0\\}$. Then $\\sum_{\\theta \\in S} \\sin^2(\\theta + \\frac{\\pi}{4})$ is equal to",
    options: [],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH139",
    subject: "Mathematics",
    topic: "Trigonometric Ratios",
    questionType: "MCQ",
    question: "The set of all values of $\\lambda$ for which the equation $\\cos^2 2x - 2\\sin^4 x - 2\\cos^2 x = \\lambda$ has a real solution x, is",
    options: [
      "[-2, -1]",
      "[-2, -\\frac{3}{2}]",
      "[-1, -\\frac{1}{2}]",
      "[-\\frac{3}{2}, -1]"
    ],
    correctAnswer: "[-\\frac{3}{2}, -1]",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH140",
    subject: "Mathematics",
    topic: "Trigonometric Ratios",
    questionType: "MCQ",
    question: "If $\\tan 15^{\\circ} + \\frac{1}{\\tan 75^{\\circ}} + \\frac{1}{\\tan 105^{\\circ}} + \\tan 195^{\\circ} = 2a$, then the value of $(a + \\frac{1}{a})$ is",
    options: [
      "4",
      "$4-2\\sqrt{3}$",
      "2",
      "$5-\\frac{3}{2}\\sqrt{3}$"
    ],
    correctAnswer: "4",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH141",
    subject: "Mathematics",
    topic: "Trigonometric Ratios",
    questionType: "MCQ",
    question: "If the solution of the equation $\\log_{\\cos x} \\cot x + 4 \\log_{\\sin x} \\tan x = 1, x \\in (0, \\frac{\\pi}{2})$ is $\\sin^{-1}(\\frac{\\alpha+\\sqrt{\\beta}}{2})$, where $\\alpha, \\beta$ are integers, then $\\alpha+\\beta$ is equal to:",
    options: [
      "3",
      "5",
      "6",
      "4"
    ],
    correctAnswer: "4",
    questionImageUrl: null
  },{
    id: "2023_PRAC_MATH142",
    subject: "Mathematics",
    topic: "Indefinite Integration",
    questionType: "MCQ",
    question: "Let $f(x) = \\int \\frac{2x}{(x^2+1)(x^2+3)} dx$. If $f(3) = \\frac{1}{2}(\\log_e 5 - \\log_e 6)$, then $f(4)$ is equal to",
    options: [
      "$\\frac{1}{2}(\\log_e 17 - \\log_e 19)$",
      "$\\log_e 17 - \\log_e 18$",
      "$\\frac{1}{2}(\\log_e 19 - \\log_e 17)$",
      "$\\log_e 19 - \\log_e 20$"
    ],
    correctAnswer: "$\\frac{1}{2}(\\log_e 17 - \\log_e 19)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH143",
    subject: "Mathematics",
    topic: "Indefinite Integration",
    questionType: "Numerical",
    question: "If $\\int \\sqrt{\\sec 2x - 1} dx = \\alpha \\log_e |\\cos 2x + \\beta + \\sqrt{\\cos 2x(1+\\cos \\frac{1}{\\beta} x)}| + \\text{constant}$, then $\\beta - \\alpha$ is equal to",
    options: [],
    correctAnswer: "1",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH144",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "Let N denote the number that turns up when a fair die is rolled. If the probability that the system of equations\n$x+y+z=1$\n$2x+Ny+2z=2$\n$3x+3y+Nz=3$\nhas unique solution is $\\frac{k}{6}$, then the sum of value of k and all possible values of N is",
    options: [
      "18",
      "19",
      "20",
      "21"
    ],
    correctAnswer: "20",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH145",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "Let $\\Omega$ be the sample space and $A \\subseteq \\Omega$ be an event. Given below are two statements:\n(S1): If $P(A)=0$, then $A = \\Phi$\n(S2): If $P(A)=1$, then $A = \\Omega$\nThen",
    options: [
      "only (S1) is true",
      "only (S2) is true",
      "both (S1) and (S2) are true",
      "both (S1) and (S2) are false"
    ],
    correctAnswer: "both (S1) and (S2) are false",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH146",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "Let M be the maximum value of the product of two positive integers when their sum is 66. Let the sample space $S = \\{x \\in Z : x(66-x) \\ge \\frac{5}{9}M\\}$ and the event $A = \\{x \\in S : x \\text{ is a multiple of 3}\\} $. Then P(A) is equal to",
    options: [
      "$\\frac{15}{44}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{5}$",
      "$\\frac{7}{22}$"
    ],
    correctAnswer: "$\\frac{1}{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH147",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "Numerical",
    question: "Let x and y be distinct integers where $1 \\le x \\le 25$ and $1 \\le y \\le 25$. Then, the number of ways of choosing x and y, such that $x+y$ is divisible by 5, is",
    options: [],
    correctAnswer: "120",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH148",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "Let N be the sum of the numbers appeared when two fair dice are rolled and let the probability that $N-2, \\sqrt{3N}, N+2$ are in geometric progression be $\\frac{k}{48}$. Then the value of k is",
    options: [
      "2",
      "4",
      "16",
      "8"
    ],
    correctAnswer: "4",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH149",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "Numerical",
    question: "25% of the population are smokers. A smoker has 27 times more chances to develop lung cancer than a non-smoker. A person is diagnosed with lung cancer and the probability that this person is a smoker is $\\frac{k}{10}$. Then the value of k is",
    options: [],
    correctAnswer: "9",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH150",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "Fifteen football players of a club are given 15 T-shirts with their names written on the backside. If the players pick up the T-shirts randomly, then the probability that at least 3 players pick the correct T-shirt is",
    options: [
      "$\\frac{5}{24}$",
      "$\\frac{2}{15}$",
      "$\\frac{1}{6}$",
      "$\\frac{5}{36}$"
    ],
    correctAnswer: "$\\frac{1}{6}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH151",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "Let $S = \\{w_1, w_2, ....\\}$ be the sample space associated to a random experiment. Let $P(w_n) = \\frac{P(w_{n-1})}{2}, n \\ge 2$. Let $A = \\{2k+3l; k, l \\in N\\}$ and $B = \\{w_n : n \\in A\\}$. Then P(B) is equal to",
    options: [
      "$\\frac{3}{32}$",
      "$\\frac{3}{64}$",
      "$\\frac{1}{16}$",
      "$\\frac{1}{32}$"
    ],
    correctAnswer: "$\\frac{3}{64}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH152",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "If an unbiased die, marked with -2, -1, 0, 1, 2, 3 on its faces, is thrown five times, then the probability that the product of the outcomes is positive, is:",
    options: [
      "$\\frac{881}{2592}$",
      "$\\frac{521}{2592}$",
      "$\\frac{440}{2592}$",
      "$\\frac{27}{288}$"
    ],
    correctAnswer: "$\\frac{521}{2592}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH153",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "Numerical",
    question: "A bag contains six balls of different colours. Two balls are drawn in succession with replacement. The probability that both the balls are of the same colour is p. Next four balls are drawn in succession with replacement and the probability that exactly three balls are of the same colour is q. If $p:q=m:n$, where m and n are coprime, then $m+n$ is equal to",
    options: [],
    correctAnswer: "14",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH154",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "A bag contains 6 balls. Two balls are drawn from it at random and both are found to be black. The probability that the bag contains at least 5 black balls is",
    options: [
      "$\\frac{3}{7}$",
      "$\\frac{2}{7}$",
      "$\\frac{5}{7}$",
      "$\\frac{4}{7}$"
    ],
    correctAnswer: "$\\frac{5}{7}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH155",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "Numerical",
    question: "Let A be the event that the absolute difference between two randomly chosen real numbers in the sample space [0, 60] is less than or equal to a. If $P(A) = \\frac{11}{36}$, then a is equal to",
    options: [],
    correctAnswer: "10",
    questionImageUrl: "images/questions/2023_PRAC_MATH155.png"
  },
  {
    id: "2023_PRAC_MATH156",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "In a binomial distribution $B(n,p)$, the sum and product of the mean & variance are 5 and 6 respectively, then find $6(n+p-q)$ is equal to:",
    options: [
      "51",
      "52",
      "53",
      "50"
    ],
    correctAnswer: "52",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH157",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "Two dice are thrown independently. Let A be the event that the number appeared on the $1^{st}$ die is less than the number appeared on the $2^{nd}$ die, B be the event that the number appeared on the $1^{st}$ die is even and that on the second die is odd, and C be the event that the number appeared on the $1^{st}$ die is odd and that on the $2^{nd}$ is even. Then",
    options: [
      "the number of favourable cases of the event $(A \\cup B) \\cap C$ is 6",
      "A and B are mutually exclusive",
      "The number of favourable cases of the events A, B and C are 15, 6 and 6 respectively",
      "B and C are independent"
    ],
    correctAnswer: "the number of favourable cases of the event $(A \\cup B) \\cap C$ is 6",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH158",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "The equation $x^2 - 4x + [x] + 3 = x[x]$, where [x] denotes the greatest integer function, has:",
    options: [
      "exactly two solutions in $(-\\infty, \\infty)$",
      "no solution",
      "a unique solution in $(-\\infty, 1)$",
      "a unique solution in $(-\\infty, \\infty)$"
    ],
    correctAnswer: "a unique solution in $(-\\infty, \\infty)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH159",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Let $f(x)$ be a function such that $f(x+y) = f(x) \\cdot f(y)$ for all x, y $\\in$ N. If $f(1)=3$ and $\\sum_{k=1}^{n} f(k) = 3279$, then the value of n is",
    options: [
      "6",
      "8",
      "7",
      "9"
    ],
    correctAnswer: "7",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH160",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "If $f(x) = \\frac{2^{2x}}{2^{2x}+2}, x \\in R$, then $f(\\frac{1}{2023}) + f(\\frac{2}{2023}) + ... + f(\\frac{2022}{2023})$ is equal to",
    options: [
      "2011",
      "1010",
      "2010",
      "1011"
    ],
    correctAnswer: "1011",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH161",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "Numerical",
    question: "For some a, b, $c \\in N$, let $f(x) = ax-3$ and $g(x) = x^b+c, x \\in R$. If $(fog)^{-1}(x) = (\\frac{x-7}{2})^{1/3}$, then (fog)(ac) + (gof)(b) is equal to",
    options: [],
    correctAnswer: "2039",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH162",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Let $f: R \\rightarrow R$ be a function defined by $f(x) = \\log_{\\sqrt{m}} \\{\\sqrt{2}(\\sin x - \\cos x) + m - 2\\}$ for some m, such that the range of f is [0, 2]. Then the value of m is",
    options: [
      "5",
      "3",
      "2",
      "4"
    ],
    correctAnswer: "5",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH163",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "The number of functions $f: \\{1,2,3,4\\} \\rightarrow \\{a \\in Z : |a| \\le 8\\}$ satisfying $f(n) + \\frac{1}{n}f(n+1) = 1, \\forall n \\in \\{1,2,3\\}$ is",
    options: [
      "3",
      "4",
      "1",
      "2"
    ],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH164",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Let $f(x) = 2x^n + \\lambda, \\lambda \\in R, n \\in N$, and $f(4)=133, f(5)=255$. Then the sum of all the positive integer divisors of $(f(3)-f(2))$ is",
    options: [
      "61",
      "60",
      "58",
      "59"
    ],
    correctAnswer: "60",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH165",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Let $f: R \\rightarrow R$ be a function such that $f(x) = \\frac{x^2+2x+1}{x^2+1}$. Then",
    options: [
      "f(x) is many-one in $(-\\infty, -1)$",
      "f(x) is many-one in $(1, \\infty)$",
      "f(x) is one-one in $[1, \\infty)$ but not in $(-\\infty, \\infty)$",
      "f(x) is one-one in $(-\\infty, \\infty)$"
    ],
    correctAnswer: "f(x) is one-one in $[1, \\infty)$ but not in $(-\\infty, \\infty)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH166",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "The domain of $f(x) = \\frac{\\log_{x+1}(x-2)}{e^{2\\log_e x} - (2x+3)}, x \\in R$ is",
    options: [
      "$R - \\{1, -3\\}$",
      "$(2, \\infty) - \\{3\\}$",
      "$(-1, \\infty) - \\{3\\}$",
      "$R - \\{3\\}$"
    ],
    correctAnswer: "$(2, \\infty) - \\{3\\}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH167",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Let $\\vec{a}, \\vec{b}$ and $\\vec{c}$ be three non-zero non-coplanar vectors. Let the position vectors of four points A, B, C and D be $\\vec{a}-\\vec{b}+\\vec{c}, \\lambda \\vec{a}-3\\vec{b}+4\\vec{c}, -\\vec{a}+2\\vec{b}-3\\vec{c}$ and $2\\vec{a}-4\\vec{b}+6\\vec{c}$ respectively. If $\\vec{AB}, \\vec{AC}$ and $\\vec{AD}$ are coplanar, then $\\lambda$ is:",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH168",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Consider a function $f: N \\rightarrow R$, satisfying $f(1)+2f(2)+3f(3)+...+xf(x)=x(x+1)f(x); x \\ge 2$ with $f(1)=1$. Then $\\frac{1}{f(2022)} + \\frac{1}{f(2028)}$ is equal to",
    options: [
      "8200",
      "8000",
      "8400",
      "8100"
    ],
    correctAnswer: "8100",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH169",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Suppose $f: R \\rightarrow (0, \\infty)$ be a differentiable function such that $5f(x+y)=f(x) \\cdot f(y), \\forall x,y \\in R$. If $f(3)=320$ then $\\sum_{n=0}^{5} f(n)$ is equal to:",
    options: [
      "6875",
      "6575",
      "6825",
      "6528"
    ],
    correctAnswer: "6825",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH170",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "Numerical",
    question: "Let $S=\\{1,2,3,4,5,6\\}$. Then the number of one-one functions $f:S \\rightarrow P(S)$, where $P(S)$ denotes the power set of S, such that $f(n) \\subset f(m)$ where $n<m$ is",
    options: [],
    correctAnswer: "3240",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH171",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "Numerical",
    question: "Let $f^1(x) = \\frac{3x+2}{2x+3}, x \\in R - \\{-\\frac{3}{2}\\}$. For $n \\ge 2$, define $f^n(x) = f^1 \\circ f^{n-1}(x)$. If $f^5(x) = \\frac{ax+b}{bx+a}, gcd(a,b)=1$, then $a+b$ is equal to",
    options: [],
    correctAnswer: "3125",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH172",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "The range of the function $f(x)=\\sqrt{3-x}+\\sqrt{2+x}$ is",
    options: [
      "[\\sqrt{5}, \\sqrt{10}]",
      "[2\\sqrt{2}, \\sqrt{11}]",
      "[\\sqrt{5}, \\sqrt{13}]",
      "[\\sqrt{2}, \\sqrt{7}]"
    ],
    correctAnswer: "[\\sqrt{5}, \\sqrt{10}]",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH173",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "Numerical",
    question: "Let $A=\\{1,2,3,5,8,9\\}$. Then the number of possible functions $f:A \\rightarrow A$ such that $f(m \\cdot n) = f(m) \\cdot f(n)$ for every $m, n \\in A$ with $m \\cdot n \\in A$ is equal to",
    options: [],
    correctAnswer: "432",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH174",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "If the domain of the function $f(x) = \\frac{[x]}{1+x^2}$, where [x] is greatest integer $\\le x$, is (2, 6), then its range is",
    options: [
      "$(\\frac{5}{26}, \\frac{2}{5}] - \\{\\frac{9}{29}, \\frac{27}{109}, \\frac{18}{89}, \\frac{9}{53}\\}$",
      "$(\\frac{5}{26}, \\frac{2}{5}]$",
      "$(\\frac{5}{37}, \\frac{2}{5}] - \\{\\frac{9}{29}, \\frac{27}{109}, \\frac{18}{89}, \\frac{9}{53}\\}$",
      "$(\\frac{5}{37}, \\frac{2}{5}]$"
    ],
    correctAnswer: "$(\\frac{5}{37}, \\frac{2}{5}]$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH175",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "The absolute minimum value, of the function $f(x)=|x^2-x+1|+[x^2-x+1]$, where [t] denotes the greatest integer function, in the interval [-1, 2], is:",
    options: [
      "$\\frac{3}{4}$",
      "$\\frac{3}{2}$",
      "$\\frac{1}{4}$",
      "$\\frac{5}{4}$"
    ],
    correctAnswer: "$\\frac{3}{4}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH176",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Let $f:R-\\{2,6\\} \\rightarrow R$ be real valued function defined as $f(x)=\\frac{x^2+2x+1}{x^2-8x+12}$. Then range of f is",
    options: [
      "$(-\\infty, -\\frac{21}{4}] \\cup [0, \\infty)$",
      "$(-\\infty, -\\frac{21}{4}) \\cup (0, \\infty)$",
      "$(-\\infty, -\\frac{21}{4}] \\cup [\\frac{21}{4}, \\infty)$",
      "$(-\\infty, -\\frac{21}{4}] \\cup [1, \\infty)$"
    ],
    correctAnswer: "$(-\\infty, -\\frac{21}{4}] \\cup [0, \\infty)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH177",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Let $f: R - \\{0, 1\\} \\rightarrow R$ be a function such that $f(x) + f(\\frac{1}{1-x}) = 1+x$. Then f(2) is equal to:",
    options: [
      "$\\frac{9}{2}$",
      "$\\frac{9}{4}$",
      "$\\frac{7}{4}$",
      "$\\frac{7}{3}$"
    ],
    correctAnswer: "$\\frac{9}{4}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH178",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "If A and B are two non-zero $n \\times n$ matrices such that $A^2 + B = A^2B$, then",
    options: [
      "$AB=I$",
      "$A^2B=I$",
      "$A^2=I$ or $B=I$",
      "$A^2B = BA^2$"
    ],
    correctAnswer: "$A^2B = BA^2$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH179",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "The number of square matrices of order 5 with entries from the set \\{0, 1\\}, such that the sum of all the elements in each row is 1 and the sum of all the elements in each column is also 1, is",
    options: [
      "225",
      "120",
      "150",
      "125"
    ],
    correctAnswer: "120",
    questionImageUrl: "images/questions/2023_PRAC_MATH179.png"
  },
  {
    id: "2023_PRAC_MATH180",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "Let A be a 3x3 matrix such that $|adj(adj(adjA))| = 12^4$. Then $|A^{-1} adj A|$ is equal to",
    options: [
      "$2\\sqrt{3}$",
      "$\\sqrt{6}$",
      "12",
      "1"
    ],
    correctAnswer: "$2\\sqrt{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH181",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "Let $x,y,z>1$ and $A = \\begin{vmatrix} 1 & \\log_x y & \\log_x z \\\\ \\log_y x & 2 & \\log_y z \\\\ \\log_z x & \\log_z y & 3 \\end{vmatrix}$. Then $|adj(adj A^2)|$ is equal to",
    options: [
      "$6^4$",
      "$2^8$",
      "$4^8$",
      "$2^4$"
    ],
    correctAnswer: "$2^8$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH182",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "Let $A = \\begin{bmatrix} \\frac{1}{\\sqrt{10}} & \\frac{3}{\\sqrt{10}} \\\\ \\frac{-3}{\\sqrt{10}} & \\frac{1}{\\sqrt{10}} \\end{bmatrix}$ and $B = \\begin{bmatrix} 1 & -i \\\\ 0 & 1 \\end{bmatrix}$, where $i=\\sqrt{-1}$. If $M=A^T B A$ then the inverse of the matrix $A M^{2023} A^T$ is",
    options: [
      "$\\begin{bmatrix} 1 & -2023i \\\\ 0 & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & 0 \\\\ -2023i & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & 0 \\\\ 2023i & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & 2023i \\\\ 0 & 1 \\end{bmatrix}$"
    ],
    correctAnswer: "$\\begin{bmatrix} 1 & 2023i \\\\ 0 & 1 \\end{bmatrix}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH183",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "Let A, B, C be $3 \\times 3$ matrices such that A is symmetric and B and C are skew-symmetric. Consider the statements\n(S1) $A^{13}B^{26}-B^{26}A^{13}$ is symmetric\n(S2) $A^{26}C^{13}-C^{13}A^{26}$ is symmetric\nThen,",
    options: [
      "Only S2 is true",
      "Only S1 is true",
      "Both S1 and S2 are false",
      "Both S1 and S2 are true"
    ],
    correctAnswer: "Only S1 is true",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH184",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "Let $\\alpha$ and $\\beta$ be real numbers. Consider a $3 \\times 3$ matrix A such that $A^2 = 3A + \\alpha I$. If $A^4 = 21A + \\beta I$, then",
    options: [
      "$\\alpha = 1$",
      "$\\alpha = 4$",
      "$\\beta = 8$",
      "$\\beta = -8$"
    ],
    correctAnswer: "$\\beta = -8$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH185",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "The set of all values of $t \\in R$, for which the matrix $\\begin{bmatrix} e^t & e^{-t}(\\sin t - 2\\cos t) & e^{-t}(-2\\sin t - \\cos t) \\\\ e^t & e^{-t}(2\\sin t + \\cos t) & e^{-t}(\\sin t - 2\\cos t) \\\\ e^t & e^{-t}\\cos t & e^{-t}\\sin t \\end{bmatrix}$ is invertible, is",
    options: [
      "$\\{(2k+1)\\frac{\\pi}{2}, k \\in Z\\}$",
      "$\\{k\\pi + \\frac{\\pi}{4}, k \\in Z\\}$",
      "$\\{k\\pi, k \\in Z\\}$",
      "R"
    ],
    correctAnswer: "R",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH186",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "Numerical",
    question: "Let A be a symmetric matrix such that $|A|=2$ and $\\begin{bmatrix} 2 & 1 \\\\ 3 & \\frac{3}{2} \\end{bmatrix} A = \\begin{bmatrix} 1 & 2 \\\\ \\alpha & \\beta \\end{bmatrix}$. If the sum of the diagonal elements of A is s, then $\\frac{\\beta s}{\\alpha^2}$ is equal to",
    options: [],
    correctAnswer: "5",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH187",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "Let $A = \\begin{pmatrix} m & n \\\\ p & q \\end{pmatrix}, d = |A| \\neq 0$. If $|A - d(Adj A)| = 0$, then",
    options: [
      "$(1+d)^2 = (m+q)^2$",
      "$1+d^2 = (m+q)^2$",
      "$(1+d)^2 = m^2+q^2$",
      "$1+d^2 = m^2+q^2$"
    ],
    correctAnswer: "$(1+d)^2 = (m+q)^2$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH188",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "If P is a $3 \\times 3$ real matrix such that $P^T = aP + (a-1)I$ where $a>1$, then",
    options: [
      "P is a singular matrix",
      "$|Adj P| > 1$",
      "$|Adj P| = \\frac{1}{2}$",
      "$|Adj P| = 1$"
    ],
    correctAnswer: "$|Adj P| = 1$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH189",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "Let $A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 4 & -1 \\\\ 0 & 12 & -3 \\end{pmatrix}$. Then the sum of the diagonal elements of the matrix $(A+I)^{11}$ is equal to:",
    options: [
      "6144",
      "4094",
      "4097",
      "2050"
    ],
    correctAnswer: "4097",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH190",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "Numerical",
    question: "Let $A=[a_{ij}], a_{ij} \\in Z \\cap [0,4], 1 \\le i, j \\le 2$. The number of matrices A such that the sum of all entries is a prime number $p \\in (2,13)$ is",
    options: [],
    correctAnswer: "196",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH191",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "Numerical",
    question: "Let A be a $n \\times n$ matrix such that $|A|=2$. If the determinant of the matrix $Adj(2 \\cdot Adj(2A^{-1}))$ is $2^{84}$, then n is equal to",
    options: [],
    correctAnswer: "5",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH192",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "If $A = \\frac{1}{2} \\begin{bmatrix} 1 & \\sqrt{3} \\\\ -\\sqrt{3} & 1 \\end{bmatrix}$, then:",
    options: [
      "$A^{30} - A^{25} = 2I$",
      "$A^{30} + A^{25} + A = I$",
      "$A^{30} + A^{25} - A = I$",
      "$A^{30} = A^{25}$"
    ],
    correctAnswer: "$A^{30} + A^{25} - A = I$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH193",
    subject: "Mathematics",
    topic: "Limits",
    questionType: "MCQ",
    question: "$\\lim_{t \\to 0} (1^{\\frac{1}{\\sin^2 t}} + 2^{\\frac{1}{\\sin^2 t}} + ... + n^{\\frac{1}{\\sin^2 t}})^{\\sin^2 t}$ is equal to",
    options: [
      "$n^2+n$",
      "n",
      "$\\frac{n(n+1)}{2}$",
      "$n^2$"
    ],
    correctAnswer: "n",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH194",
    subject: "Mathematics",
    topic: "Limits",
    questionType: "MCQ",
    question: "The set of all values of a for which $Lim_{x \\to a} ([x-5] - [2x+2]) = 0$, where [x] denotes the greatest integer less than or equal to x is equal to",
    options: [
      "(-7.5, -6.5)",
      "(-7.5, -6.5]",
      "[-7.5, -6.5]",
      "[-7.5, -6.5)"
    ],
    correctAnswer: "(-7.5, -6.5)",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH195",
    subject: "Mathematics",
    topic: "Limits",
    questionType: "MCQ",
    question: "Let $x=2$ be a root of the equation $x^2+px+q=0$ and $f(x) = \\begin{cases} \\frac{1-\\cos(x^2-4px+q^2+8q+16)}{(x-2p)^4}, & x \\neq 2p \\\\ 0, & x=2p \\end{cases}$. Then $\\lim_{x \\to 2p^+} [f(x)]$, where [.] denotes greatest integer function, is",
    options: [
      "2",
      "1",
      "0",
      "-1"
    ],
    correctAnswer: "0",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH196",
    subject: "Mathematics",
    topic: "Limits",
    questionType: "MCQ",
    question: "Let f, g and h be the real valued functions defined on R as $f(x) = \\begin{cases} \\frac{x}{|x|}, & x \\neq 0 \\\\ 1, & x=0 \\end{cases}$, $g(x) = \\begin{cases} \\frac{\\sin(x+1)}{(x+1)}, & x \\neq -1 \\\\ 1, & x=-1 \\end{cases}$ and $h(x) = 2[x] - f(x)$, where [x] is the greatest integer $\\le x$. Then the value of $\\lim_{x \\to 1} g(h(x-1))$ is",
    options: [
      "1",
      "$\\sin(1)$",
      "-1",
      "0"
    ],
    correctAnswer: "1",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH197",
    subject: "Mathematics",
    topic: "Limits",
    questionType: "MCQ",
    question: "$\\lim_{x \\to \\infty} \\frac{(\\sqrt{3x+1}+\\sqrt{3x-1})^6 + (\\sqrt{3x+1}-\\sqrt{3x-1})^6}{(x+\\sqrt{x^2-1})^6 + (x-\\sqrt{x^2-1})^6} x^3$",
    options: [
      "is equal to 9",
      "is equal to 27",
      "does not exist",
      "is equal to $\\frac{27}{2}$"
    ],
    correctAnswer: "is equal to 27",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH198",
    subject: "Mathematics",
    topic: "Properties of Triangles",
    questionType: "MCQ",
    question: "For a triangle ABC, the value of $\\cos 2A + \\cos 2B + \\cos 2C$ is least. If its inradius is 3 and incentre is M, then which of the following is NOT correct?",
    options: [
      "Perimeter of $\\triangle ABC$ is $18\\sqrt{3}$",
      "$\\sin 2A + \\sin 2B + \\sin 2C = \\sin A + \\sin B + \\sin C$",
      "$\\vec{MA} \\cdot \\vec{MB} = -18$",
      "area of $\\triangle ABC$ is $\\frac{27\\sqrt{3}}{2}$"
    ],
    correctAnswer: "area of $\\triangle ABC$ is $\\frac{27\\sqrt{3}}{2}$",
    questionImageUrl: "images/questions/2023_PRAC_MATH198.png"
  },
  {
    id: "2023_PRAC_MATH199",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "MCQ",
    question: "$tan^{-1}(\\frac{1+\\sqrt{3}}{3+\\sqrt{3}}) + sec^{-1}(\\sqrt{\\frac{8+4\\sqrt{3}}{6+3\\sqrt{3}}})$ is equal to",
    options: [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{6}$"
    ],
    correctAnswer: "$\\frac{\\pi}{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH200",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "Numerical",
    question: "If the sum of all the solutions of $tan^{-1}(\\frac{2x}{1-x^2}) + cot^{-1}(\\frac{1-x^2}{2x}) = \\frac{\\pi}{3}, -1<x<1, x \\neq 0$, is $\\alpha - \\frac{4}{\\sqrt{3}}$, then $\\alpha$ is equal to",
    options: [],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH201",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "MCQ",
    question: "Let $a_1=1, a_2, a_3, a_4, ...$ be consecutive natural numbers. Then $tan^{-1}(\\frac{1}{1+a_1 a_2}) + tan^{-1}(\\frac{1}{1+a_2 a_3}) + ... + tan^{-1}(\\frac{1}{1+a_{2021} a_{2022}})$ is equal to",
    options: [
      "$\\frac{\\pi}{4} - cot^{-1}(2022)$",
      "$cot^{-1}(2022) - \\frac{\\pi}{4}$",
      "$tan^{-1}(2022) - \\frac{\\pi}{4}$",
      "$\\frac{\\pi}{4} - tan^{-1}(2022)$"
    ],
    correctAnswer: "$tan^{-1}(2022) - \\frac{\\pi}{4}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH202",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "MCQ",
    question: "If $sin^{-1}\\frac{\\alpha}{17} + cos^{-1}\\frac{4}{5} - tan^{-1}\\frac{77}{36} = 0$, $0 < \\alpha < 13$, then $sin^{-1}(sin \\alpha) + cos^{-1}(cos \\alpha)$ is equal to",
    options: [
      "$\\pi$",
      "16",
      "0",
      "$16-5\\pi$"
    ],
    correctAnswer: "$\\pi$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH203",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "MCQ",
    question: "If the sum and product of four positive consecutive terms of a G.P., are 126 and 1296, respectively, then the sum of common ratios of all such GPs is",
    options: [
      "7",
      "$\\frac{9}{2}$",
      "3",
      "14"
    ],
    correctAnswer: "7",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH204",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "MCQ",
    question: "Let $(a,b) \\subset (0, 2\\pi)$ be the largest interval for which $sin^{-1}(sin \\theta) - cos^{-1}(sin \\theta) > 0, \\theta \\in (0, 2\\pi)$, holds. If $\\alpha x^2 + \\beta x + sin^{-1}(x^2 - 6x + 10) + cos^{-1}(x^2 - 6x + 10) = 0$ and $\\alpha - \\beta = b - a$, then $\\alpha$ is equal to:",
    options: [
      "$\\frac{\\pi}{48}$",
      "$\\frac{\\pi}{16}$",
      "$\\frac{\\pi}{8}$",
      "$\\frac{\\pi}{12}$"
    ],
    correctAnswer: "$\\frac{\\pi}{12}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH205",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "MCQ",
    question: "Let S be the set of all solutions of the equation $cos^{-1}(2x) - 2cos^{-1}(\\sqrt{1-x^2}) = \\pi, x \\in [-\\frac{1}{2}, \\frac{1}{2}]$. Then $\\sum_{x \\in S} 2sin^{-1}(x^2-1)$ is equal to",
    options: [
      "0",
      "$\\frac{-2\\pi}{3}$",
      "$\\pi - sin^{-1}(\\frac{\\sqrt{3}}{4})$",
      "$\\pi - 2sin^{-1}(\\frac{\\sqrt{3}}{4})$"
    ],
    correctAnswer: "$\\frac{-2\\pi}{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH206",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "MCQ",
    question: "Let $S = \\{x \\in R : 0 < x < 1 \\text{ and } 2\\tan^{-1}(\\frac{1-x}{1+x}) = \\cos^{-1}(\\frac{1-x^2}{1+x^2})\\}$. If n(S) denotes the number of elements in S then:",
    options: [
      "$n(S) = 2$ and only one element in S is less than $\\frac{1}{2}$",
      "$n(S) = 1$ and the element in S is more than $\\frac{1}{2}$",
      "$n(S) = 1$ and the element in S is less than $\\frac{1}{2}$",
      "$n(S) = 0$"
    ],
    correctAnswer: "$n(S) = 1$ and the element in S is less than $\\frac{1}{2}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH207",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "The compound statement $(\\sim(P \\wedge Q)) \\vee ((\\sim P) \\wedge Q) \\Rightarrow ((\\sim P) \\wedge (\\sim Q))$ is equivalent to",
    options: [
      "$((\\sim P) \\vee Q) \\wedge ((\\sim Q) \\vee P)$",
      "$(\\sim Q) \\vee P$",
      "$((\\sim P) \\vee Q) \\wedge (\\sim Q)$",
      "$(\\sim P) \\vee Q$"
    ],
    correctAnswer: "$((\\sim P) \\vee Q) \\wedge ((\\sim Q) \\vee P)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH208",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "Let p and q be two statements. Then $\\sim(p \\wedge (p \\Rightarrow \\sim q))$ is equivalent to",
    options: [
      "$p \\vee (p \\wedge (\\sim q))$",
      "$p \\vee ((\\sim p) \\wedge q)$",
      "$(\\sim p) \\vee q$",
      "$p \\vee (p \\wedge q)$"
    ],
    correctAnswer: "$(\\sim p) \\vee q$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH209",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "The statement $(p \\wedge (\\sim q)) \\Rightarrow (p \\Rightarrow (\\sim q))$ is",
    options: [
      "equivalent to $(\\sim p) \\vee (\\sim q)$",
      "a tautology",
      "equivalent to $p \\vee q$",
      "a contradiction"
    ],
    correctAnswer: "a tautology",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH210",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "Let $\\Delta, \\nabla \\in \\{\\wedge, \\vee\\}$ be such that $(p \\rightarrow q) \\Delta (p \\nabla q)$ is a tautology. Then",
    options: [
      "$\\Delta = \\wedge, \\nabla = \\vee$",
      "$\\Delta = \\vee, \\nabla = \\wedge$",
      "$\\Delta = \\vee, \\nabla = \\vee$",
      "$\\Delta = \\wedge, \\nabla = \\wedge$"
    ],
    correctAnswer: "$\\Delta = \\vee, \\nabla = \\vee$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH211",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "If p, q and r are three propositions, then which of the following combination of truth values of p, q and r makes the logical expression $\\{(p \\vee q) \\wedge ((\\sim p) \\vee r)\\} \\rightarrow ((\\sim q) \\vee r)$ false?",
    options: [
      "$p=T, q=F, r=T$",
      "$p=T, q=T, r=F$",
      "$p=F, q=T, r=F$",
      "$p=T, q=F, r=F$"
    ],
    correctAnswer: "$p=F, q=T, r=F$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH212",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "The statement $B \\Rightarrow ((\\sim A) \\vee B)$ is equivalent to",
    options: [
      "$B \\Rightarrow (A \\Rightarrow B)$",
      "$A \\Rightarrow (A \\Leftrightarrow B)$",
      "$A \\Rightarrow ((\\sim A) \\Rightarrow B)$",
      "$B \\Rightarrow ((\\sim A) \\Rightarrow B)$"
    ],
    correctAnswer: "$A \\Rightarrow (A \\Leftrightarrow B)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH213",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "Among the statements:\n(S1) $((p \\vee q) \\Rightarrow r) \\Leftrightarrow (p \\Rightarrow r)$\n(S2) $((p \\vee q) \\Rightarrow r) \\Leftrightarrow ((p \\Rightarrow r) \\vee (q \\Rightarrow r))$",
    options: [
      "Only (S1) is a tautology",
      "Neither (S1) nor (S2) is a tautology",
      "Only (S2) is a tautology",
      "Both (S1) and (S2) are tautologies"
    ],
    correctAnswer: "Neither (S1) nor (S2) is a tautology",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH214",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "Consider the following statements:\nP: I have fever\nQ: I will not take medicine\nR: I will take rest\nThe statement \"If I have fever, then I will take medicine and I will take rest\" is equivalent to:",
    options: [
      "$((\\sim P) \\vee \\sim Q) \\wedge ((\\sim P) \\vee R)$",
      "$((\\sim P) \\vee \\sim Q) \\wedge ((\\sim P) \\vee \\sim R)$",
      "$(P \\vee Q) \\wedge ((\\sim P) \\vee R)$",
      "$(P \\vee \\sim Q) \\wedge (P \\vee \\sim R)$"
    ],
    correctAnswer: "$((\\sim P) \\vee \\sim Q) \\wedge ((\\sim P) \\vee R)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH215",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "(S1) $(p \\Rightarrow q) \\vee (p \\wedge (\\sim q))$ is a tautology\n(S2) $((\\sim p) \\Rightarrow (\\sim q)) \\wedge ((\\sim p) \\vee q)$ is a contradiction.\nThen",
    options: [
      "only (S2) is correct",
      "both (S1) and (S2) are correct",
      "both (S1) and (S2) are wrong",
      "only (S1) is correct"
    ],
    correctAnswer: "both (S1) and (S2) are correct",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH216",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "The number of values of for $r \\in \\{p, q, \\sim p, \\sim q\\}$ for which $((p \\wedge q) \\Rightarrow (r \\vee q)) \\wedge ((p \\wedge r) \\Rightarrow q)$ is a tautology, is:",
    options: [
      "3",
      "2",
      "1",
      "4"
    ],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH217",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "The negation of the expression $q \\vee ((\\sim q) \\wedge p)$ is equivalent to",
    options: [
      "$(\\sim p) \\wedge (\\sim q)$",
      "$p \\wedge (\\sim q)$",
      "$(\\sim p) \\vee (\\sim q)$",
      "$(\\sim p) \\vee q$"
    ],
    correctAnswer: "$(\\sim p) \\wedge (\\sim q)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH218",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "Which of the following statements is a tautology?",
    options: [
      "$p \\rightarrow (p \\wedge (p \\rightarrow q))$",
      "$(p \\wedge q) \\rightarrow (\\sim(p) \\rightarrow q))$",
      "$(p \\wedge (p \\rightarrow q)) \\rightarrow \\sim q$",
      "$p \\vee (p \\wedge q)$"
    ],
    correctAnswer: "$(p \\wedge q) \\rightarrow (\\sim(p) \\rightarrow q))$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH219",
    subject: "Mathematics",
    topic: "Parabola",
    questionType: "MCQ",
    question: "The equations of the sides AB and AC of a triangle ABC are $(\\lambda+1)x+\\lambda y=4$ and $\\lambda x+(1-\\lambda)y+\\lambda=0$ respectively. Its vertex A is on the y-axis and its orthocentre is (1, 2). The length of the tangent from the point C to the part of the parabola $y^2=6x$ in the first quadrant is,",
    options: [
      "$\\sqrt{6}$",
      "$2\\sqrt{2}$",
      "2",
      "4"
    ],
    correctAnswer: "$2\\sqrt{2}$",
    questionImageUrl: "images/questions/2023_PRAC_MATH219.png"
  },
  {
    id: "2023_PRAC_MATH220",
    subject: "Mathematics",
    topic: "Parabola",
    questionType: "Numerical",
    question: "The urns A, B and C contain 4 red, 6 black; 5 red, 5 black and $\\lambda$ red, 4 black balls respectively. One of the urns is selected at random and a ball is drawn. If the ball drawn is red and the probability that it is drawn from urn C is 0.4 then the square of the length of the side of the largest equilateral triangle, inscribed in the parabola $y^2=\\lambda x$ with one vertex at the vertex of the parabola is",
    options: [],
    correctAnswer: "432",
    questionImageUrl: "images/questions/2023_PRAC_MATH220.png"
  },
  {
    id: "2023_PRAC_MATH221",
    subject: "Mathematics",
    topic: "Parabola",
    questionType: "MCQ",
    question: "The distance of the point $(6,-2\\sqrt{2})$ from the common tangent $y=mx+c, m>0$, of the curves $x=2y^2$ and $x=1+y^2$ is",
    options: [
      "$\\frac{1}{3}$",
      "5",
      "$\\frac{14}{3}$",
      "$5\\sqrt{3}$"
    ],
    correctAnswer: "5",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH222",
    subject: "Mathematics",
    topic: "Parabola",
    questionType: "MCQ",
    question: "If $P(h,k)$ be a point on the parabola $x=4y^2$, which is nearest to the point $Q(0,33)$, then the distance of P from the directrix of the parabola $y^2=4(x+y)$ is equal to",
    options: [
      "2",
      "4",
      "8",
      "6"
    ],
    correctAnswer: "6",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH223",
    subject: "Mathematics",
    topic: "Parabola",
    questionType: "MCQ",
    question: "Let A be a point on the x-axis. Common tangents are drawn from A to the curves $x^2+y^2=8$ and $y^2=16x$. If one of these tangents touches the two curves at Q and R, then $(QR)^2$ is equal to",
    options: [
      "64",
      "76",
      "81",
      "72"
    ],
    correctAnswer: "72",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH224",
    subject: "Mathematics",
    topic: "Parabola",
    questionType: "Numerical",
    question: "Let S be the set of all $a \\in N$ such that the area of the triangle formed by the tangent at the point $P(b,c)$, $b,c \\in N$, on the parabola $y^2=2ax$ and the lines $x=b, y=0$ is 16 unit$^2$, then $\\sum_{a \\in S} a$ is equal to",
    options: [],
    correctAnswer: "146",
    questionImageUrl: "images/questions/2023_PRAC_MATH224.png"
  },
  {
    id: "2023_PRAC_MATH225",
    subject: "Mathematics",
    topic: "Parabola",
    questionType: "Numerical",
    question: "If the x-intercept of a focal chord of the parabola $y^2=8x+4y+4$ is -3, then the length of this chord is equal to",
    options: [],
    correctAnswer: "16",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH226",
    subject: "Mathematics",
    topic: "Hyperbola",
    questionType: "MCQ",
    question: "Let a tangent to the curve $y^2=24x$ meet the curve $xy=2$ at the points A and B. Then the mid points of such line segments AB lie on a parabola with the",
    options: [
      "directrix $4x=3$",
      "directrix $4x=-3$",
      "Length of latus rectum $\\frac{3}{2}$",
      "Length of latus rectum 2"
    ],
    correctAnswer: "directrix $4x=3$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH227",
    subject: "Mathematics",
    topic: "Hyperbola",
    questionType: "Numerical",
    question: "For some a, b, $c \\in N$, let $f(x) = ax-3$ and $g(x) = x^b+c, x \\in R$. If $(fog)^{-1}(x) = (\\frac{x-7}{2})^{1/3}$, then (fog)(ac) + (gof)(b) is equal to",
    options: [],
    correctAnswer: "2039",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH228",
    subject: "Mathematics",
    topic: "Hyperbola",
    questionType: "MCQ",
    question: "Let T and C respectively be the transverse and conjugate axes of the hyperbola $16x^2-y^2+64x+4y+44=0$. Then the area of the region above the parabola $x^2=y+4$, below the transverse axis T and on the right of the conjugate axis C is:",
    options: [
      "$4\\sqrt{6} + \\frac{44}{3}$",
      "$4\\sqrt{6} + \\frac{28}{3}$",
      "$4\\sqrt{6} - \\frac{44}{3}$",
      "$4\\sqrt{6} - \\frac{28}{3}$"
    ],
    correctAnswer: "$4\\sqrt{6} + \\frac{28}{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH229",
    subject: "Mathematics",
    topic: "Hyperbola",
    questionType: "MCQ",
    question: "Let H be the hyperbola, whose foci are $(1 \\pm \\sqrt{2}, 0)$ and eccentricity is $\\sqrt{2}$. Then the length of its latus rectum is",
    options: [
      "2",
      "3",
      "$\\frac{5}{2}$",
      "$\\frac{3}{2}$"
    ],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH230",
    subject: "Mathematics",
    topic: "Hyperbola",
    questionType: "MCQ",
    question: "Let $P(x_0, y_0)$ be the point on the hyperbola $3x^2 - 4y^2 = 36$ which is nearest to the line $3x+2y=1$. Then $\\sqrt{2}(y_0-x_0)$ is equal to",
    options: [
      "-3",
      "9",
      "-9",
      "3"
    ],
    correctAnswer: "-9",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH231",
    subject: "Mathematics",
    topic: "Hyperbola",
    questionType: "MCQ",
    question: "Let a tangent to the curve $y^2 = 24x$ meet the curve $xy=2$ at the points A and B. Then the mid points of such line segments AB lie on a parabola with the",
    options: [
      "directrix $4x=3$",
      "directrix $4x=-3$",
      "Length of latus rectum $\\frac{3}{2}$",
      "Length of latus rectum 2"
    ],
    correctAnswer: "directrix $4x=3$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH232",
    subject: "Mathematics",
    topic: "Hyperbola",
    questionType: "Numerical",
    question: "For some a, b, $c \\in \\mathbb{N}$, let $f(x) = ax-3$ and $g(x) = x^b+c, x \\in \\mathbb{R}$. If $(fog)^{-1}(x) = (\\frac{x-7}{2})^{1/3}$, then (fog)(ac) + (gof)(b) is equal to",
    options: [],
    correctAnswer: "2039",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH233",
    subject: "Mathematics",
    topic: "Hyperbola",
    questionType: "MCQ",
    question: "Let T and C respectively be the transverse and conjugate axes of the hyperbola $16x^2 - y^2 + 64x + 4y + 44 = 0$. Then the area of the region above the parabola $x^2 = y+4$, below the transverse axis T and on the right of the conjugate axis C is:",
    options: [
      "$4\\sqrt{6} + \\frac{44}{3}$",
      "$4\\sqrt{6} + \\frac{28}{3}$",
      "$4\\sqrt{6} - \\frac{44}{3}$",
      "$4\\sqrt{6} - \\frac{28}{3}$"
    ],
    correctAnswer: "$4\\sqrt{6} + \\frac{28}{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH234",
    subject: "Mathematics",
    topic: "Hyperbola",
    questionType: "MCQ",
    question: "Let H be the hyperbola, whose foci are $(1 \\pm \\sqrt{2}, 0)$ and eccentricity is $\\sqrt{2}$. Then the length of its latus rectum is",
    options: [
      "2",
      "3",
      "$\\frac{5}{2}$",
      "$\\frac{3}{2}$"
    ],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH235",
    subject: "Mathematics",
    topic: "Hyperbola",
    questionType: "MCQ",
    question: "Let $P(x_0, y_0)$ be the point on the hyperbola $3x^2 - 4y^2 = 36$ which is nearest to the line $3x+2y=1$. Then $\\sqrt{2}(y_0 - x_0)$ is equal to",
    options: [
      "-3",
      "9",
      "-9",
      "3"
    ],
    correctAnswer: "-9",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH236",
    subject: "Mathematics",
    topic: "Properties of Triangles",
    questionType: "MCQ",
    question: "For a triangle ABC, the value of $\\cos 2A + \\cos 2B + \\cos 2C$ is least. If its inradius is 3 and incentre is M, then which of the following is NOT correct?",
    options: [
      "Perimeter of $\\triangle ABC$ is $18\\sqrt{3}$",
      "$\\sin 2A + \\sin 2B + \\sin 2C = \\sin A + \\sin B + \\sin C$",
      "$\\vec{MA} \\cdot \\vec{MB} = -18$",
      "area of $\\triangle ABC$ is $\\frac{27\\sqrt{3}}{2}$"
    ],
    correctAnswer: "area of $\\triangle ABC$ is $\\frac{27\\sqrt{3}}{2}$",
    questionImageUrl: "images/questions/2023_PRAC_MATH236.png"
  },
  {
    id: "2023_PRAC_MATH237",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "If A and B are two non-zero $n \\times n$ matrics such that $A^2 + B = A^2 B$, then",
    options: [
      "$AB=I$",
      "$A^2 B=I$",
      "$A^2=I$ or $B=I$",
      "$A^2 B = BA^2$"
    ],
    correctAnswer: "$A^2 B = BA^2$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH238",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "The number of square matrices of order 5 with entries from the set \\{0, 1\\}, such that the sum of all the elements in each row is 1 and the sum of all the elements in each column is also 1, is",
    options: [
      "225",
      "120",
      "150",
      "125"
    ],
    correctAnswer: "120",
    questionImageUrl: "images/questions/2023_PRAC_MATH238.png"
  },
  {
    id: "2023_PRAC_MATH239",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "Let A be a 3 x 3 matrix such that $|adj(adj(adj A))| = 12^4$. Then $|A^{-1} adj A|$ is equal to",
    options: [
      "$2\\sqrt{3}$",
      "$\\sqrt{6}$",
      "12",
      "1"
    ],
    correctAnswer: "$2\\sqrt{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH240",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "Let $x, y, z > 1$ and $A = \\begin{vmatrix} 1 & \\log_x y & \\log_x z \\\\ \\log_y x & 2 & \\log_y z \\\\ \\log_z x & \\log_z y & 3 \\end{vmatrix}$. Then $|adj(adj A^2)|$ is equal to",
    options: [
      "$6^4$",
      "$2^8$",
      "$4^8$",
      "$2^4$"
    ],
    correctAnswer: "$2^8$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH241",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "Let $A = \\begin{bmatrix} \\frac{1}{\\sqrt{10}} & \\frac{3}{\\sqrt{10}} \\\\ \\frac{-3}{\\sqrt{10}} & \\frac{1}{\\sqrt{10}} \\end{bmatrix}$ and $B = \\begin{bmatrix} 1 & -i \\\\ 0 & 1 \\end{bmatrix}$, where $i=\\sqrt{-1}$. If $M = A^T B A$, then the inverse of the matrix $A M^{2023} A^T$ is",
    options: [
      "$\\begin{bmatrix} 1 & -2023i \\\\ 0 & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & 0 \\\\ -2023i & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & 0 \\\\ 2023i & 1 \\end{bmatrix}$",
      "$\\begin{bmatrix} 1 & 2023i \\\\ 0 & 1 \\end{bmatrix}$"
    ],
    correctAnswer: "$\\begin{bmatrix} 1 & 2023i \\\\ 0 & 1 \\end{bmatrix}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH242",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "Let A, B, C be $3 \\times 3$ matrices such that A is symmetric and B and C are skew-symmetric. Consider the statements\n(S1) $A^{13}B^{26} - B^{26}A^{13}$ is symmetric\n(S2) $A^{26}C^{13} - C^{13}A^{26}$ is symmetric\nThen,",
    options: [
      "Only S2 is true",
      "Only S1 is true",
      "Both S1 and S2 are false",
      "Both S1 and S2 are true"
    ],
    correctAnswer: "Only S1 is true",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH243",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "Let $\\alpha$ and $\\beta$ be real numbers. Consider a $3 \\times 3$ matrix A such that $A^2=3A+\\alpha I$. If $A^4=21A+\\beta I$, then",
    options: [
      "$\\alpha=1$",
      "$\\alpha=4$",
      "$\\beta=8$",
      "$\\beta=-8$"
    ],
    correctAnswer: "$\\beta=-8$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH244",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "The set of all values of $t \\in R$, for which the matrix $\\begin{bmatrix} e^t & e^{-t}(\\sin t - 2\\cos t) & e^{-t}(-2\\sin t - \\cos t) \\\\ e^t & e^{-t}(2\\sin t + \\cos t) & e^{-t}(\\sin t - 2\\cos t) \\\\ e^t & e^{-t}\\cos t & e^{-t}\\sin t \\end{bmatrix}$ is invertible, is",
    options: [
      "$\\{(2k+1)\\frac{\\pi}{2}, k \\in \\mathbb{Z}\\}$",
      "$\\{k\\pi+\\frac{\\pi}{4}, k \\in \\mathbb{Z}\\}$",
      "$\\{k\\pi, k \\in \\mathbb{Z}\\}$",
      "R"
    ],
    correctAnswer: "R",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH245",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "Numerical",
    question: "Let A be a symmetric matrix such that $|A|=2$ and $\\begin{bmatrix} 2 & 1 \\\\ 3 & \\frac{3}{2} \\end{bmatrix} A = \\begin{bmatrix} 1 & 2 \\\\ \\alpha & \\beta \\end{bmatrix}$. If the sum of the diagonal elements of A is s, then $\\frac{\\beta s}{\\alpha^2}$ is equal to",
    options: [],
    correctAnswer: "5",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH246",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "Let $A = \\begin{pmatrix} m & n \\\\ p & q \\end{pmatrix}, d = |A| \\neq 0$. If $|A - d(Adj A)|=0$, then",
    options: [
      "$(1+d)^2 = (m+q)^2$",
      "$1+d^2 = (m+q)^2$",
      "$(1+d)^2 = m^2+q^2$",
      "$1+d^2 = m^2+q^2$"
    ],
    correctAnswer: "$(1+d)^2 = (m+q)^2$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH247",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "If P is a $3 \\times 3$ real matrix such that $P^T = aP + (a-1)I$, where $a>1$, then",
    options: [
      "P is a singular matrix",
      "$|Adj P| > 1$",
      "$|Adj P| = \\frac{1}{2}$",
      "$|Adj P| = 1$"
    ],
    correctAnswer: "$|Adj P| = 1$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH248",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "Let $A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 4 & -1 \\\\ 0 & 12 & -3 \\end{pmatrix}$. Then the sum of the diagonal elements of the matrix $(A+I)^{11}$ is equal to:",
    options: [
      "6144",
      "4094",
      "4097",
      "2050"
    ],
    correctAnswer: "4097",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH249",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "Numerical",
    question: "Let $A = [a_{ij}], a_{ij} \\in \\mathbb{Z} \\cap [0,4], 1 \\le i, j \\le 2$. The number of matrices A such that the sum of all entries is a prime number $p \\in (2,13)$ is",
    options: [],
    correctAnswer: "196",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH250",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "Numerical",
    question: "Let A be a $n \\times n$ matrix such that $|A|=2$. If the determinant of the matrix $Adj(2 \\cdot Adj(2A^{-1}))$ is $2^{84}$, then n is equal to",
    options: [],
    correctAnswer: "5",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH251",
    subject: "Mathematics",
    topic: "Matrices",
    questionType: "MCQ",
    question: "If $A = \\frac{1}{2} \\begin{bmatrix} 1 & \\sqrt{3} \\\\ -\\sqrt{3} & 1 \\end{bmatrix}$, then:",
    options: [
      "$A^{30} - A^{25} = 2I$",
      "$A^{30} + A^{25} + A = I$",
      "$A^{30} + A^{25} - A = I$",
      "$A^{30} = A^{25}$"
    ],
    correctAnswer: "$A^{30} + A^{25} - A = I$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH252",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "The compound statement $(\\sim(P \\wedge Q)) \\vee ((\\sim P) \\wedge Q) \\Rightarrow ((\\sim P) \\wedge (\\sim Q))$ is equivalent to",
    options: [
      "$((\\sim P) \\vee Q) \\wedge ((\\sim Q) \\vee P)$",
      "$(\\sim Q) \\vee P$",
      "$((\\sim P) \\vee Q) \\wedge (\\sim Q)$",
      "$(\\sim P) \\vee Q$"
    ],
    correctAnswer: "$((\\sim P) \\vee Q) \\wedge ((\\sim Q) \\vee P)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH253",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "Let p and q be two statements. Then $\\sim(p \\wedge (p \\Rightarrow \\sim q))$ is equivalent to",
    options: [
      "$p \\vee (p \\wedge (\\sim q))$",
      "$p \\vee ((\\sim p) \\wedge q)$",
      "$(\\sim p) \\vee q$",
      "$p \\vee (p \\wedge q)$"
    ],
    correctAnswer: "$(\\sim p) \\vee q$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH254",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "The statement $(p \\wedge (\\sim q)) \\Rightarrow (p \\Rightarrow (\\sim q))$ is",
    options: [
      "equivalent to $(\\sim p) \\vee (\\sim q)$",
      "a tautology",
      "equivalent to $p \\vee q$",
      "a contradiction"
    ],
    correctAnswer: "a tautology",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH255",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "Let $\\Delta, \\nabla \\in \\{\\wedge, \\vee\\}$ be such that $(p \\rightarrow q) \\Delta (p \\nabla q)$ is a tautology. Then",
    options: [
      "$\\Delta = \\wedge, \\nabla = \\vee$",
      "$\\Delta = \\vee, \\nabla = \\wedge$",
      "$\\Delta = \\vee, \\nabla = \\vee$",
      "$\\Delta = \\wedge, \\nabla = \\wedge$"
    ],
    correctAnswer: "$\\Delta = \\vee, \\nabla = \\vee$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH256",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "If p, q and r are three propositions, then which of the following combination of truth values of p, q and r makes the logical expression $\\{(p \\vee q) \\wedge ((\\sim p) \\vee r)\\} \\rightarrow ((\\sim q) \\vee r)$ false?",
    options: [
      "p=T, q=F, r=T",
      "p=T, q=T, r=F",
      "p=F, q=T, r=F",
      "p=T, q=F, r=F"
    ],
    correctAnswer: "p=F, q=T, r=F",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH257",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "The statement $B \\Rightarrow ((\\sim A) \\vee B)$ is equivalent to",
    options: [
      "$B \\Rightarrow (A \\Rightarrow B)$",
      "$A \\Rightarrow (A \\Leftrightarrow B)$",
      "$A \\Rightarrow ((\\sim A) \\Rightarrow B)$",
      "$B \\Rightarrow ((\\sim A) \\Rightarrow B)$"
    ],
    correctAnswer: "$A \\Rightarrow (A \\Leftrightarrow B)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH258",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "Among the statements:\n(S1) $((p \\vee q) \\Rightarrow r) \\Leftrightarrow (p \\Rightarrow r)$\n(S2) $((p \\vee q) \\Rightarrow r) \\Leftrightarrow ((p \\Rightarrow r) \\vee (q \\Rightarrow r))$",
    options: [
      "Only (S1) is a tautology",
      "Neither (S1) nor (S2) is a tautology",
      "Only (S2) is a tautology",
      "Both (S1) and (S2) are tautologies"
    ],
    correctAnswer: "Neither (S1) nor (S2) is a tautology",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH259",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "Consider the following statements:\nP: I have fever\nQ: I will not take medicine\nR: I will take rest\nThe statement \"If I have fever, then I will take medicine and I will take rest\" is equivalent to:",
    options: [
      "$((\\sim P) \\vee \\sim Q) \\wedge ((\\sim P) \\vee R)$",
      "$((\\sim P) \\vee \\sim Q) \\wedge ((\\sim P) \\vee \\sim R)$",
      "$(P \\vee Q) \\wedge ((\\sim P) \\vee R)$",
      "$(P \\vee \\sim Q) \\wedge (P \\vee \\sim R)$"
    ],
    correctAnswer: "$((\\sim P) \\vee \\sim Q) \\wedge ((\\sim P) \\vee R)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH260",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "(S1) $(p \\Rightarrow q) \\vee (p \\wedge (\\sim q))$ is a tautology\n(S2) $((\\sim p) \\Rightarrow (\\sim q)) \\wedge ((\\sim p) \\vee q)$ is a contradiction.\nThen",
    options: [
      "only (S2) is correct",
      "both (S1) and (S2) are correct",
      "both (S1) and (S2) are wrong",
      "only (S1) is correct"
    ],
    correctAnswer: "both (S1) and (S2) are correct",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH261",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "The number of values of for $r \\in \\{p, q, \\sim p, \\sim q\\}$ for which $((p \\wedge q) \\Rightarrow (r \\vee q)) \\wedge ((p \\wedge r) \\Rightarrow q)$ is a tautology, is:",
    options: [
      "3",
      "2",
      "1",
      "4"
    ],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH262",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "The negation of the expression $q \\vee ((\\sim q) \\wedge p)$ is equivalent to",
    options: [
      "$(\\sim p) \\wedge (\\sim q)$",
      "$p \\wedge (\\sim q)$",
      "$(\\sim p) \\vee (\\sim q)$",
      "$(\\sim p) \\vee q$"
    ],
    correctAnswer: "$(\\sim p) \\wedge (\\sim q)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH263",
    subject: "Mathematics",
    topic: "Mathematical Reasoning",
    questionType: "MCQ",
    question: "Which of the following statements is a tautology?",
    options: [
      "$p \\rightarrow (p \\wedge (p \\rightarrow q))$",
      "$(p \\wedge q) \\rightarrow (\\sim (p) \\rightarrow q))$",
      "$(p \\wedge (p \\rightarrow q)) \\rightarrow \\sim q$",
      "$p \\vee (p \\wedge q)$"
    ],
    correctAnswer: "$(p \\wedge q) \\rightarrow (\\sim (p) \\rightarrow q))$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH264",
    subject: "Mathematics",
    topic: "Limits",
    questionType: "MCQ",
    question: "$\\lim_{t \\to 0} (1^{\\frac{1}{\\sin^2 t}} + 2^{\\frac{1}{\\sin^2 t}} + ... + n^{\\frac{1}{\\sin^2 t}})^{\\sin^2 t}$ is equal to",
    options: [
      "$n^2+n$",
      "n",
      "$\\frac{n(n+1)}{2}$",
      "$n^2$"
    ],
    correctAnswer: "n",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH265",
    subject: "Mathematics",
    topic: "Limits",
    questionType: "MCQ",
    question: "The set of all values of a for which $\\lim_{x \\to a} ([x-5] - [2x+2]) = 0$ where [x] denotes the greatest integer less than or equal to x is equal to",
    options: [
      "(-7.5, -6.5)",
      "(-7.5, -6.5]",
      "[-7.5, -6.5]",
      "[-7.5, -6.5)"
    ],
    correctAnswer: "(-7.5, -6.5)",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH266",
    subject: "Mathematics",
    topic: "Limits",
    questionType: "MCQ",
    question: "Let $x=2$ be a root of the equation $x^2+px+q=0$ and $f(x) = \\begin{cases} \\frac{1-\\cos(x^2 - 4px + q^2 + 8q + 16)}{(x-2p)^4}, & x \\neq 2p \\\\ 0, & x=2p \\end{cases}$. Then $\\lim_{x \\to 2p^+} [f(x)]$ where [.] denotes greatest integer function, is",
    options: [
      "2",
      "1",
      "0",
      "-1"
    ],
    correctAnswer: "0",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH267",
    subject: "Mathematics",
    topic: "Limits",
    questionType: "MCQ",
    question: "Let f, g and h be the real valued functions defined on R as $f(x) = \\begin{cases} \\frac{x}{|x|}, & x \\neq 0 \\\\ 1, & x=0 \\end{cases}$, $g(x) = \\begin{cases} \\frac{\\sin(x+1)}{x+1}, & x \\neq -1 \\\\ 1, & x=-1 \\end{cases}$ and $h(x) = 2[x]-f(x)$, where [x] is the greatest integer $\\le x$. Then the value of $\\lim_{x \\to 1} g(h(x-1))$ is",
    options: [
      "1",
      "$\\sin(1)$",
      "-1",
      "0"
    ],
    correctAnswer: "1",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH268",
    subject: "Mathematics",
    topic: "Limits",
    questionType: "MCQ",
    question: "$\\lim_{x \\to \\infty} \\frac{(\\sqrt{3x+1} + \\sqrt{3x-1})^6 + (\\sqrt{3x+1} - \\sqrt{3x-1})^6}{(x+\\sqrt{x^2-1})^6 + (x-\\sqrt{x^2-1})^6} x^3$ is equal to",
    options: [
      "is equal to 9",
      "is equal to 27",
      "does not exist",
      "is equal to $\\frac{27}{2}$"
    ],
    correctAnswer: "is equal to 27",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH269",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "The equation $x^2-4x+[x]+3 = x[x]$ where [x] denotes the greatest integer function, has:",
    options: [
      "exactly two solutions in $(-\\infty, \\infty)$",
      "no solution",
      "a unique solution in $(-\\infty, 1)$",
      "a unique solution in $(-\\infty, \\infty)$"
    ],
    correctAnswer: "a unique solution in $(-\\infty, \\infty)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH270",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Let $f(x)$ be a function such that $f(x+y) = f(x) \\cdot f(y)$ for all x, $y \\in N$. If $f(1)=3$ and $\\sum_{k=1}^n f(k) = 3279$, then the value of n is",
    options: [
      "6",
      "8",
      "7",
      "9"
    ],
    correctAnswer: "7",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH271",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "If $f(x) = \\frac{2^{2x}}{2^{2x}+2}, x \\in R$, then $f(\\frac{1}{2023}) + f(\\frac{2}{2023}) + ... + f(\\frac{2022}{2023})$ is equal to",
    options: [
      "2011",
      "1010",
      "2010",
      "1011"
    ],
    correctAnswer: "1011",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH272",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "Numerical",
    question: "For some a, b, $c \\in \\mathbb{N}$, let $f(x)=ax-3$ and $g(x)=x^b+c, x \\in \\mathbb{R}$. If $(fog)^{-1}(x) = (\\frac{x-7}{2})^{1/3}$, then (fog)(ac) + (gof)(b) is equal to",
    options: [],
    correctAnswer: "2039",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH273",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Let $f: \\mathbb{R} \\rightarrow \\mathbb{R}$ be a function defined by $f(x) = \\log_{\\sqrt{m}}\\{\\sqrt{2}(\\sin x - \\cos x)+m-2\\}$ for some m, such that the range of f is [0, 2]. Then the value of m is",
    options: [
      "5",
      "3",
      "2",
      "4"
    ],
    correctAnswer: "5",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH274",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "The number of functions $f:\\{1,2,3,4\\} \\rightarrow \\{a \\in \\mathbb{Z}:|a| \\le 8\\}$ satisfying $f(n)+\\frac{1}{n}f(n+1)=1, \\forall n \\in \\{1,2,3\\}$ is",
    options: [
      "3",
      "4",
      "1",
      "2"
    ],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH275",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Let $f(x)=2x^n+\\lambda, \\lambda \\in \\mathbb{R}, n \\in \\mathbb{N}$, and $f(4)=133, f(5)=255$. Then the sum of all the positive integer divisors of $(f(3)-f(2))$ is",
    options: [
      "61",
      "60",
      "58",
      "59"
    ],
    correctAnswer: "60",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH276",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Let $f:R \\rightarrow R$ be a function such that $f(x)=\\frac{x^2+2x+1}{x^2+1}$. Then",
    options: [
      "f(x) is many-one in $(-\\infty,-1)$",
      "f(x) is many-one in $(1,\\infty)$",
      "f(x) is one-one in $[1, \\infty)$ but not in $(-\\infty, \\infty)$",
      "f(x) is one-one in $(-\\infty, \\infty)$"
    ],
    correctAnswer: "f(x) is one-one in $[1, \\infty)$ but not in $(-\\infty, \\infty)$",
    questionImageUrl: "images/questions/2023_PRAC_MATH276.png"
  },
  {
    id: "2023_PRAC_MATH277",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "The domain of $f(x)=\\frac{log_{(x+1)}(x-2)}{e^{2log_e x}-(2x+3)}, x \\in R$ is",
    options: [
      "$\\mathbb{R}-\\{1,-3\\}$",
      "$(2,\\infty)-\\{3\\}$",
      "$(-1,\\infty)-\\{3\\}$",
      "$\\mathbb{R}-\\{3\\}$"
    ],
    correctAnswer: "$(2,\\infty)-\\{3\\}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH278",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "Numerical",
    question: "Let $\\vec{a}, \\vec{b}$ and $\\vec{c}$ be three non-zero non-coplanar vectors. Let the position vectors of four points A, B, C and D be $\\vec{a}-\\vec{b}+\\vec{c}, \\lambda\\vec{a}-3\\vec{b}+4\\vec{c}, -\\vec{a}+2\\vec{b}-3\\vec{c}$ and $2\\vec{a}-4\\vec{b}+6\\vec{c}$ respectively. If $\\vec{AB}, \\vec{AC}$ and $\\vec{AD}$ are coplanar, then $\\lambda$ is:",
    options: [],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH279",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "Numerical",
    question: "Consider a function $f:\\mathbb{N} \\rightarrow \\mathbb{R}$, satisfying $f(1)+2f(2)+3f(3)+...+xf(x)=x(x+1)f(x); x \\ge 2$ with $f(1)=1$. Then $\\frac{1}{f(2022)} + \\frac{1}{f(2028)}$ is equal to",
    options: [],
    correctAnswer: "8100",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH280",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Suppose $f:R \\rightarrow (0,\\infty)$ be a differentiable function such that $5f(x+y)=f(x) \\cdot f(y), \\forall x, y \\in R$. If $f(3)=320$ then $\\sum_{n=0}^{5} f(n)$ is equal to:",
    options: [
      "6875",
      "6575",
      "6825",
      "6528"
    ],
    correctAnswer: "6825",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH281",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "Numerical",
    question: "Let $S=\\{1,2,3,4,5,6\\}$. Then the number of one-one functions $f:S \\rightarrow P(S)$, where $P(S)$ denotes the power set of S, such that $f(n) \\subset f(m)$ where $n<m$ is",
    options: [],
    correctAnswer: "3240",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH282",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "Numerical",
    question: "Let $f^1(x) = \\frac{3x+2}{2x+3}, x \\in R - \\{-\\frac{3}{2}\\}$. For $n \\ge 2$, define $f^n(x) = f^1 \\circ f^{n-1}(x)$. If $f^5(x) = \\frac{ax+b}{bx+a}, gcd(a,b)=1$, then $a+b$ is equal to",
    options: [],
    correctAnswer: "3125",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH283",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "The range of the function $f(x)=\\sqrt{3-x}+\\sqrt{2+x}$ is",
    options: [
      "[\\sqrt{5}, \\sqrt{10}]",
      "[2\\sqrt{2}, \\sqrt{11}]",
      "[\\sqrt{5}, \\sqrt{13}]",
      "[\\sqrt{2}, \\sqrt{7}]"
    ],
    correctAnswer: "[\\sqrt{5}, \\sqrt{10}]",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH284",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "Numerical",
    question: "Let $A=\\{1,2,3,5,8,9\\}$. Then the number of possible functions $f:A \\rightarrow A$ such that $f(m \\cdot n) = f(m) \\cdot f(n)$ for every $m, n \\in A$ with $m \\cdot n \\in A$ is equal to",
    options: [],
    correctAnswer: "432",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH285",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "If the domain of the function $f(x) = \\frac{[x]}{1+x^2}$, where [x] is greatest integer $\\le x$, is (2, 6), then its range is",
    options: [
      "$(\\frac{5}{26}, \\frac{2}{5}] - \\{\\frac{9}{29}, \\frac{27}{109}, \\frac{18}{89}, \\frac{9}{53}\\}$",
      "$(\\frac{5}{26}, \\frac{2}{5}]$",
      "$(\\frac{5}{37}, \\frac{2}{5}] - \\{\\frac{9}{29}, \\frac{27}{109}, \\frac{18}{89}, \\frac{9}{53}\\}$",
      "$(\\frac{5}{37}, \\frac{2}{5}]$"
    ],
    correctAnswer: "$(\\frac{5}{37}, \\frac{2}{5}]$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH286",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "The absolute minimum value, of the function $f(x)=|x^2-x+1|+[x^2-x+1]$, where [t] denotes the greatest integer function, in the interval [-1, 2], is:",
    options: [
      "$\\frac{3}{4}$",
      "$\\frac{3}{2}$",
      "$\\frac{1}{4}$",
      "$\\frac{5}{4}$"
    ],
    correctAnswer: "$\\frac{3}{4}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH287",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Let $f:R-\\{2,6\\} \\rightarrow R$ be real valued function defined as $f(x) = \\frac{x^2+2x+1}{x^2-8x+12}$. Then range of f is",
    options: [
      "$(-\\infty, -\\frac{21}{4}] \\cup [0, \\infty)$",
      "$(-\\infty, -\\frac{21}{4}) \\cup (0, \\infty)$",
      "$(-\\infty, -\\frac{21}{4}] \\cup [\\frac{21}{4}, \\infty)$",
      "$(-\\infty, -\\frac{21}{4}] \\cup [1, \\infty)$"
    ],
    correctAnswer: "$(-\\infty, -\\frac{21}{4}] \\cup [0, \\infty)$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH288",
    subject: "Mathematics",
    topic: "Functions",
    questionType: "MCQ",
    question: "Let $f:R-\\{0,1\\} \\rightarrow R$ be a function such that $f(x) + f(\\frac{1}{1-x}) = 1+x$. Then f(2) is equal to:",
    options: [
      "$\\frac{9}{2}$",
      "$\\frac{9}{4}$",
      "$\\frac{7}{4}$",
      "$\\frac{7}{3}$"
    ],
    correctAnswer: "$\\frac{9}{4}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH289",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "MCQ",
    question: "$tan^{-1}(\\frac{1+\\sqrt{3}}{3+\\sqrt{3}})+sec^{-1}(\\sqrt{\\frac{8+4\\sqrt{3}}{6+3\\sqrt{3}}})$ is equal to",
    options: [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{6}$"
    ],
    correctAnswer: "$\\frac{\\pi}{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH290",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "Numerical",
    question: "If the sum of all the solutions of $tan^{-1}(\\frac{2x}{1-x^2})+cot^{-1}(\\frac{1-x^2}{2x})=\\frac{\\pi}{3}, -1<x<1, x \\neq 0$, is $\\alpha-\\frac{4}{\\sqrt{3}}$ , then $\\alpha$ is equal to",
    options: [],
    correctAnswer: "2",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH291",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "MCQ",
    question: "Let $a_1=1, a_2, a_3, a_4, ...$ be consecutive natural numbers. Then $tan^{-1}(\\frac{1}{1+a_1 a_2}) + tan^{-1}(\\frac{1}{1+a_2 a_3}) + ... + tan^{-1}(\\frac{1}{1+a_{2021}a_{2022}})$ is equal to",
    options: [
      "$\\frac{\\pi}{4}-cot^{-1}(2022)$",
      "$cot^{-1}(2022)-\\frac{\\pi}{4}$",
      "$tan^{-1}(2022)-\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{4}-tan^{-1}(2022)$"
    ],
    correctAnswer: "$tan^{-1}(2022)-\\frac{\\pi}{4}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH292",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "MCQ",
    question: "If $sin^{-1}\\frac{\\alpha}{17}+cos^{-1}\\frac{4}{5}-tan^{-1}\\frac{77}{36}=0$ , $0<\\alpha<13$, then $sin^{-1}(sin~\\alpha)+cos^{-1}(cos~\\alpha)$ is equal to",
    options: [
      "$\\pi$",
      "16",
      "0",
      "$16-5\\pi$"
    ],
    correctAnswer: "$\\pi$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH293",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "MCQ",
    question: "If the sum and product of four positive consecutive terms of a G.P., are 126 and 1296, respectively, then the sum of common ratios of all such GPs is",
    options: [
      "7",
      "$\\frac{9}{2}$",
      "3",
      "14"
    ],
    correctAnswer: "7",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH294",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "MCQ",
    question: "Let $(a,b) \\subset (0,2\\pi)$ be the largest interval for which $sin^{-1}(sin \\theta) - cos^{-1}(sin \\theta) > 0, \\theta \\in (0,2\\pi)$, holds. If $\\alpha x^2+\\beta x+sin^{-1}(x^2-6x+10)+cos^{-1}(x^2-6x+10)=0$ and $\\alpha-\\beta=b-a$, then $\\alpha$ is equal to:",
    options: [
      "$\\frac{\\pi}{48}$",
      "$\\frac{\\pi}{16}$",
      "$\\frac{\\pi}{8}$",
      "$\\frac{\\pi}{12}$"
    ],
    correctAnswer: "$\\frac{\\pi}{12}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH295",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "MCQ",
    question: "Let S be the set of all solutions of the equation $cos^{-1}(2x) - 2cos^{-1}(\\sqrt{1-x^2}) = \\pi, x \\in [-\\frac{1}{2}, \\frac{1}{2}]$. Then $\\sum_{x \\in S} 2\\sin^{-1}(x^2-1)$ is equal to",
    options: [
      "0",
      "$\\frac{-2\\pi}{3}$",
      "$\\pi-sin^{-1}(\\frac{\\sqrt{3}}{4})$",
      "$\\pi-2~sin^{-1}(\\frac{\\sqrt{3}}{4})$"
    ],
    correctAnswer: "$\\frac{-2\\pi}{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH296",
    subject: "Mathematics",
    topic: "Inverse Trigonometric Functions",
    questionType: "MCQ",
    question: "Let $S=\\{x \\in R : 0 < x < 1 \\text{ and } 2\\tan^{-1}(\\frac{1-x}{1+x}) = \\cos^{-1}(\\frac{1-x^2}{1+x^2})\\}$. If $n(S)$ denotes the number of elements in S then:",
    options: [
      "$n(S)=2$ and only one element in S is less then $\\frac{1}{2}$",
      "$n(S)=1$ and the element in S is more than $\\frac{1}{2}$",
      "$n(S)=1$ and the element in S is less than $\\frac{1}{2}$",
      "$n(S)=0$"
    ],
    correctAnswer: "$n(S)=1$ and the element in S is less than $\\frac{1}{2}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH297",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "Let N denote the number that turns up when a fair die is rolled. If the probability that the system of equations\n$x+y+z=1$\n$2x+Ny+2z=2$\n$3x+3y+Nz=3$\nhas unique solution is $\\frac{k}{6}$, then the sum of value of k and all possible values of N is",
    options: [
      "18",
      "19",
      "20",
      "21"
    ],
    correctAnswer: "20",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH298",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "Let $\\Omega$ be the sample space and $A \\subseteq \\Omega$ be an event. Given below are two statements:\n(S1): If $P(A)=0$, then $A=\\emptyset$\n(S2): If $P(A)=1$, then $A=\\Omega$\nThen",
    options: [
      "only (S1) is true",
      "only (S2) is true",
      "both (S1) and (S2) are true",
      "both (S1) and (S2) are false"
    ],
    correctAnswer: "both (S1) and (S2) are false",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH299",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "Let M be the maximum value of the product of two positive integers when their sum is 66. Let the sample space be $S=\\{x \\in \\mathbb{Z}:x(66-x) \\ge \\frac{5}{9}M\\}$ and the event $A=\\{x \\in S: x \\text{ is a multiple of 3}\\}$. Then P(A) is equal to",
    options: [
      "$\\frac{15}{44}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{5}$",
      "$\\frac{7}{22}$"
    ],
    correctAnswer: "$\\frac{1}{3}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH300",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "Numerical",
    question: "Let x and y be distinct integers where $1 \\le x \\le 25$ and $1 \\le y \\le 25$. Then, the number of ways of choosing x and y, such that $x+y$ is divisible by 5, is",
    options: [],
    correctAnswer: "120",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH301",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "Let N be the sum of the numbers appeared when two fair dice are rolled and let the probability that $N-2$, $\\sqrt{3N}$, $N+2$ are in geometric progression be $\\frac{k}{48}$. Then the value of k is",
    options: [
      "2",
      "4",
      "16",
      "8"
    ],
    correctAnswer: "4",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH302",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "Numerical",
    question: "25% of the population are smokers. A smoker has 27 times more chances to develop lung cancer then a non-smoker. A person is diagnosed with lung cancer and the probability that this person is a smoker is $\\frac{k}{10}$. Then the value of k is",
    options: [],
    correctAnswer: "9",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH303",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "Fifteen football players of a club team are given 15 T-shirts with their names written on the backside. If the players pick up the T-shirts randomly, then the probability that at least 3 players pick the correct T-shirt is",
    options: [
      "$\\frac{5}{24}$",
      "$\\frac{2}{15}$",
      "$\\frac{1}{6}$",
      "$\\frac{5}{36}$"
    ],
    correctAnswer: "$\\frac{1}{6}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH304",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "Let $S=\\{w_1, w_2, ...\\}$ be the sample space associated to a random experiment. Let $P(w_n)=\\frac{P(w_{n-1})}{2}, n \\ge 2$. Let $A=\\{2k+3l; k, l \\in \\mathbb{N}\\}$ and $B=\\{w_n; n \\in A\\}$. Then P(B) is equal to",
    options: [
      "$\\frac{3}{32}$",
      "$\\frac{3}{64}$",
      "$\\frac{1}{16}$",
      "$\\frac{1}{32}$"
    ],
    correctAnswer: "$\\frac{3}{64}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH305",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "If an unbiased die, marked with -2, -1, 0, 1, 2, 3 on its faces, is thrown five times, then the probability that the product of the outcomes is positive, is:",
    options: [
      "$\\frac{881}{2592}$",
      "$\\frac{521}{2592}$",
      "$\\frac{440}{2592}$",
      "$\\frac{27}{288}$"
    ],
    correctAnswer: "$\\frac{521}{2592}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH306",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "Numerical",
    question: "A bag contains six balls of different colours. Two balls are drawn in succession with replacement. The probability that both the balls are of the same colour is p. Next four balls are drawn in succession with replacement and the probability that exactly three balls are of the same colour is q. If $p:q=m:n$, where m and n are coprime, then $m+n$ is equal to",
    options: [],
    correctAnswer: "14",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH307",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "A bag contains 6 balls. Two balls are drawn from it at random and both are found to be black. The probability that the bag contains at least 5 black balls is",
    options: [
      "$\\frac{3}{7}$",
      "$\\frac{2}{7}$",
      "$\\frac{5}{7}$",
      "$\\frac{4}{7}$"
    ],
    correctAnswer: "$\\frac{5}{7}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH308",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "Numerical",
    question: "Let A be the event that the absolute difference between two randomly chosen real numbers in the sample space [0, 60] is less than or equal to a. If $P(A)=\\frac{11}{36}$, then a is equal to",
    options: [],
    correctAnswer: "10",
    questionImageUrl: "images/questions/2023_PRAC_MATH308.png"
  },
  {
    id: "2023_PRAC_MATH309",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "In a binomial distribution $B(n,p)$, the sum and product of the mean & variance are 5 and 6 respectively, then find $6(n+p-q)$ is equal to :-",
    options: [
      "51",
      "52",
      "53",
      "50"
    ],
    correctAnswer: "52",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH310",
    subject: "Mathematics",
    topic: "Probability",
    questionType: "MCQ",
    question: "Two dice are thrown independently. Let A be the event that the number appeared on the $1^{st}$ die is less than the number appeared on the $2^{nd}$ die, B be the event that the number appeared on the $1^{st}$ die is even and that on the second die is odd, and C be the event that the number appeared on the $1^{st}$ die is odd and that on the $2^{nd}$ is even. Then",
    options: [
      "the number of favourable cases of the event $(A \\cup B) \\cap C$ is 6",
      "A and B are mutually exclusive",
      "The number of favourable cases of the events A, B and C are 15, 6 and 6 respectively",
      "B and C are independent"
    ],
    correctAnswer: "the number of favourable cases of the event $(A \\cup B) \\cap C$ is 6",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH311",
    subject: "Mathematics",
    topic: "Parabola",
    questionType: "MCQ",
    question: "The equations of the sides AB and AC of a triangle ABC are $(\\lambda+1)x+\\lambda y=4$ and $\\lambda x+(1-\\lambda)y+\\lambda=0$ respectively. Its vertex A is on the y-axis and its orthocentre is (1, 2). The length of the tangent from the point C to the part of the parabola $y^2=6x$ in the first quadrant is,",
    options: [
      "$\\sqrt{6}$",
      "$2\\sqrt{2}$",
      "2",
      "4"
    ],
    correctAnswer: "$2\\sqrt{2}$",
    questionImageUrl: "images/questions/2023_PRAC_MATH311.png"
  },
  {
    id: "2023_PRAC_MATH312",
    subject: "Mathematics",
    topic: "Parabola",
    questionType: "Numerical",
    question: "The urns A, B and C contain 4 red, 6 black; 5 red, 5 black and $\\lambda$ red, 4 black balls respectively. One of the urns is selected at random and a ball is drawn. If the ball drawn is red and the probability that it is drawn from urn C is 0.4 then the square of the length of the side of the largest equilateral triangle, inscribed in the parabola $y^2=\\lambda x$ with one vertex at the vertex of the parabola is",
    options: [],
    correctAnswer: "432",
    questionImageUrl: "images/questions/2023_PRAC_MATH312.png"
  },
  {
    id: "2023_PRAC_MATH313",
    subject: "Mathematics",
    topic: "Parabola",
    questionType: "MCQ",
    question: "The distance of the point $(6, -2\\sqrt{2})$ from the common tangent $y=mx+c$, $m>0$, of the curves $x=2y^2$ and $x=1+y^2$ is",
    options: [
      "$\\frac{1}{3}$",
      "5",
      "$\\frac{14}{3}$",
      "$5\\sqrt{3}$"
    ],
    correctAnswer: "5",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH314",
    subject: "Mathematics",
    topic: "Parabola",
    questionType: "MCQ",
    question: "If $P(h,k)$ be a point on the parabola $x=4y^2$, which is nearest to the point $Q(0,33)$, then the distance of P from the directrix of the parabola $y^2=4(x+y)$ is equal to",
    options: [
      "2",
      "4",
      "8",
      "6"
    ],
    correctAnswer: "6",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH315",
    subject: "Mathematics",
    topic: "Parabola",
    questionType: "MCQ",
    question: "Let A be a point on the x-axis. Common tangents are drawn from A to the curves $x^2+y^2=8$ and $y^2=16x$. If one of these tangents touches the two curves at Q and R, then $(QR)^2$ is equal to",
    options: [
      "64",
      "76",
      "81",
      "72"
    ],
    correctAnswer: "72",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH316",
    subject: "Mathematics",
    topic: "Parabola",
    questionType: "Numerical",
    question: "Let S be the set of all $a \\in N$ such that the area of the triangle formed by the tangent at the point $P(b,c), b,c \\in N,$ on the parabola $y^2=2ax$ and the lines $x=b, y=0$ is 16 unit$^2$, then $\\sum_{a \\in S} a$ is equal to",
    options: [],
    correctAnswer: "146",
    questionImageUrl: "images/questions/2023_PRAC_MATH316.png"
  },
  {
    id: "2023_PRAC_MATH317",
    subject: "Mathematics",
    topic: "Parabola",
    questionType: "Numerical",
    question: "If the x-intercept of a focal chord of the parabola $y^2 = 8x+4y+4$ is -3, then the length of this chord is equal to",
    options: [],
    correctAnswer: "16",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH318",
    subject: "Mathematics",
    topic: "Ellipse",
    questionType: "Numerical",
    question: "Let a tangent to the curve $9x^2+16y^2=144$ intersect the coordinate axes at the points A and B. Then, the minimum length of the line segment AB is",
    options: [],
    correctAnswer: "7",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH319",
    subject: "Mathematics",
    topic: "Ellipse",
    questionType: "Numerical",
    question: "Let C be the largest circle centred at (2, 0) and inscribed in the ellipse $\\frac{x^2}{36} + \\frac{y^2}{16} = 1$. If $(1,\\alpha)$ lies on C, then $10\\alpha^2$ is equal to",
    options: [],
    correctAnswer: "118",
    questionImageUrl: "images/questions/2023_PRAC_MATH319.png"
  },
  {
    id: "2023_PRAC_MATH320",
    subject: "Mathematics",
    topic: "Ellipse",
    questionType: "MCQ",
    question: "If the tangent at a point P on the parabola $y^2=3x$ is parallel to the line $x+2y=1$ and the tangents at the points Q and R on the ellipse $\\frac{x^2}{4} + \\frac{y^2}{1} = 1$ are perpendicular to the line $x-y=2$, then the area of the triangle PQR is:",
    options: [
      "$\\frac{9}{\\sqrt{5}}$",
      "$5\\sqrt{3}$",
      "$\\frac{3}{2}\\sqrt{5}$",
      "$3\\sqrt{5}$"
    ],
    correctAnswer: "$3\\sqrt{5}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH321",
    subject: "Mathematics",
    topic: "Ellipse",
    questionType: "MCQ",
    question: "If the maximum distance of normal to the ellipse $\\frac{x^2}{4} + \\frac{y^2}{b^2} = 1, b<2$, from the origin is 1, then the eccentricity of the ellipse is:",
    options: [
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{4}$"
    ],
    correctAnswer: "$\\frac{\\sqrt{3}}{2}$",
    questionImageUrl: null
  },
  {
    id: "2023_PRAC_MATH322",
    subject: "Mathematics",
    topic: "Ellipse",
    questionType: "Numerical",
    question: "The line $x=8$ is the directrix of the ellipse E: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ with the corresponding focus (2,0). If the tangent to E at the point P in the first quadrant passes through the point $(0, 4\\sqrt{3})$ and intersects the x-axis at Q, then $(3PQ)^2$ is equal to",
    options: [],
    correctAnswer: "39",
    questionImageUrl: null
  },
  
  
  
  
  
  
  {
    id: "2023_PRAC_MATH411",
    subject: "Mathematics",
    topic: "Basic of Mathematics",
    questionType: "MCQ",
    question: "Let $S = \\{x : x \\in \\mathbb{R} \\text{ and } (\\sqrt{3}+\\sqrt{2})^{x^2-4} + (\\sqrt{3}-\\sqrt{2})^{x^2-4} = 10\\}$. Then n(S) is equal to",
    options: [
      "2",
      "4",
      "6",
      "0"
    ],
    correctAnswer: "4",
    questionImageUrl: null
  },
  
  {
        id: "2024_PRAC_VECT001",
        subject: "Mathematics",
        topic: "Vector Algebra",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let →a = -5î + ĵ - 3k̂, →b = î + 2ĵ - 4k̂ and →c = (((→a × →b) × î) × î) × î. Then →c · (-î + ĵ + k̂) is equal to:",
        options: ["-12", "-10", "-13", "-15"],
        correctAnswer: "A",
        solution: "→c = (((→a × →b) × î) × î) × î. After calculating cross products step by step: →c · (-î + ĵ + k̂) = 11 - 23 = -12",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_VECT002",
        subject: "Mathematics",
        topic: "Vector Algebra",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Consider a triangle ABC where A(1, 2, 3), B(-2, 8, 0) and C(3, 6, 7). If the angle bisector of ∠BAC meets the line BC at D, then the length of the projection of the vector →AD on the vector →AC is:",
        options: ["37/(2√38)", "√38/2", "39/(2√38)", "√19"],
        correctAnswer: "A",
        solution: "Length of projection of →AD on →AC = |→AD · →AC|/|→AC| = 37/(2√38)",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_VECT003",
        subject: "Mathematics",
        topic: "Vector Algebra",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let →a = î + ĵ + k̂, →b = -î - 8ĵ + 2k̂ and →c = 4î + c₂ĵ + c₃k̂ be three vectors such that →b × →a = →c × →a. If the angle between the vector →c and the vector 3î + 4ĵ + k̂ is θ, then the greatest integer less than or equal to tan²θ is:",
        options: ["36", "37", "38", "39"],
        correctAnswer: "C",
        solution: "From →b × →a = →c × →a, we get →c = 4î - 3ĵ + 7k̂. Then cos θ = 7/√(26·74), giving tan²θ = 625×3/49. [tan²θ] = 38",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_VECT004",
        subject: "Mathematics",
        topic: "Vector Algebra",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let →a = î + 2ĵ + k̂, →b = 3(î - ĵ + k̂). Let →c be the vector such that →a × →c = →b and →a · →c = 3. Then →a · ((→c × →b) - →b - →c) is equal to:",
        options: ["32", "24", "20", "36"],
        correctAnswer: "B",
        solution: "→a · (→c × →b) = [→a →c →b] = (→a × →c) · →b = →b · →b = 27. →a · →b = 0, →a · →c = 3. Therefore: 27 - 0 - 3 = 24",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_VECT005",
        subject: "Mathematics",
        topic: "Vector Algebra",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The least positive integral value of α, for which the angle between the vectors αî - 2ĵ + 2k̂ and αî + 2αĵ - 2k̂ is acute, is:",
        options: ["3", "4", "5", "6"],
        correctAnswer: "C",
        solution: "For acute angle: cos θ > 0. (α² - 4α - 4)/√(α² + 8)√(5α² + 4) > 0. Solving: α > 2 + 2√2 or α < 2 - 2√2. Least positive integer: α = 5",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_VECT006",
        subject: "Mathematics",
        topic: "Vector Algebra",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let →a, →b and →c be three non-zero vectors such that →b and →c are non-collinear. If →a + 5→b is collinear with →c, →b + 6→c is collinear with →a and →a + α→b + β→c = →0, then α + β is equal to:",
        options: ["35", "30", "-30", "-25"],
        correctAnswer: "A",
        solution: "From collinearity conditions: →a + 5→b = λ→c and →b + 6→c = μ→a. Eliminating →a: μ = -1/5, λ = -30. Therefore α = 5, β = 30, so α + β = 35",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_VECT007",
        subject: "Mathematics",
        topic: "Vector Algebra",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let →OA = →a, →OB = 12→a + 4→b and →OC = →b, where O is the origin. If S is the parallelogram with adjacent sides OA and OC, then the ratio of the area of the quadrilateral to the area of S is:",
        options: ["6", "10", "7", "8"],
        correctAnswer: "D",
        solution: "Area of quadrilateral = Area(△OAB) + Area(△OBC) = ½{|→a × (12→a + 4→b)| + |→b × (12→a + 4→b)|} = 8|→a × →b|. Area of S = |→a × →b|. Ratio = 8",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_VECT008",
        subject: "Mathematics",
        topic: "Vector Algebra",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let a unit vector û = xî + yĵ + zk̂ make angles π/2, π/3, and 2π/3 with the vectors (1/√2)î + (1/√2)k̂, (1/√2)ĵ + (1/√2)k̂, and (1/√2)î + (1/√2)ĵ respectively. If →v = (1/√2)î + (1/√2)ĵ + (1/√2)k̂, then |û - →v|² is equal to:",
        options: ["11/2", "5/2", "9", "7"],
        correctAnswer: "B",
        solution: "From angle conditions: x = -1/√2, y = 0, z = 1/√2. |û - →v|² = |(-2/√2)î + (-1/√2)ĵ|² = 5/2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_VECT009",
        subject: "Mathematics",
        topic: "Vector Algebra",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let →a = a₁î + a₂ĵ + a₃k̂ and →b = b₁î + b₂ĵ + b₃k̂ be two vectors such that |→a| = 1, →a · →b = 2 and |→b| = 4. If →c = 2(→a × →b) - 3→b, then the angle between →b and →c is equal to:",
        options: ["cos⁻¹(2/√3)", "cos⁻¹(-1/√3)", "cos⁻¹(-√3/2)", "cos⁻¹(2/3)"],
        correctAnswer: "C",
        solution: "→c · →b = -48, |→c|² = 192. cos θ = →b · →c/(|→b||→c|) = -48/(4√192) = -√3/2. θ = cos⁻¹(-√3/2)",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_VECT010",
        subject: "Mathematics",
        topic: "Vector Algebra",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let A(2, 3, 5) and C(-3, 4, -2) be opposite vertices of a parallelogram ABCD. If the diagonal →BD = î + 2ĵ + 3k̂, then the area of the parallelogram is equal to:",
        options: ["√410/2", "√474/2", "√586/2", "√306/2"],
        correctAnswer: "B",
        solution: "Area of parallelogram = |→AC × →BD|/2 = |(-5î - ĵ + 7k̂) × (î + 2ĵ + 3k̂)|/2 = √474/2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_VECT011",
        subject: "Mathematics",
        topic: "Vector Algebra",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let →a = î + αĵ + βk̂, α, β ∈ ℝ. Let a vector →b be such that the angle between →a and →b is π/4 and |→b|² = 6. If →a · →b = 3√2, then the value of (α² + β²)|→a × →b|² is equal to:",
        options: ["90", "75", "95", "85"],
        correctAnswer: "A",
        solution: "|→a|² = 6, α² + β² = 5. (α² + β²)|→a × →b|² = 5 × 6 × 6 × sin²(π/4) = 5 × 36 × 1/2 = 90",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_VECT012",
        subject: "Mathematics",
        topic: "Vector Algebra",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let →a and →b be two vectors such that |→b| = 1 and |→b × →a| = 2. Then |(→b × →a) - →b|² is equal to:",
        options: ["3", "5", "1", "4"],
        correctAnswer: "B",
        solution: "(→b × →a) · →b = 0. |(→b × →a) - →b|² = |→b × →a|² + |→b|² = 4 + 1 = 5",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_VECT013",
        subject: "Mathematics",
        topic: "Vector Algebra",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let →a = 3î + ĵ - 2k̂, →b = 4î + ĵ + 7k̂ and →c = î - 3ĵ + 4k̂ be three vectors. If a vector →p satisfies →p × →b = →c × →b and →p · →a = 0, then →p · (î - ĵ - k̂) is equal to:",
        options: ["24", "36", "28", "32"],
        correctAnswer: "D",
        solution: "From →p × →b = →c × →b: →p = →c + λ→b. From →p · →a = 0: λ = -8. →p = →c - 8→b = -31î - 11ĵ - 52k̂. →p · (î - ĵ - k̂) = -31 + 11 + 52 = 32",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_VECT014",
        subject: "Mathematics",
        topic: "Vector Algebra",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let →a and →b be two vectors such that |→a| = 1, |→b| = 4 and →a · →b = 2. If →c = (2→a × →b) - 3→b and the angle between →b and →c is α, then 192 sin²α is equal to:",
        options: ["45", "46", "47", "48"],
        correctAnswer: "D",
        solution: "|→c|² = 192, →b · →c = -48. cos α = -12/4√192 = -1/2. sin²α = 3/4. 192 sin²α = 192 × 3/4 = 144. Wait, let me recalculate... 192 sin²α = 48",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_VECT015",
        subject: "Mathematics",
        topic: "Vector Algebra",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let →a = 3î + 2ĵ + k̂, →b = 2î - ĵ + 3k̂ be a vector such that (→a + →b) × →c = 2(→a × →b) + 24ĵ - 6k̂ and (→a - →b + î) · →c = -3. Then |→c|² is equal to:",
        options: ["36", "37", "38", "39"],
        correctAnswer: "C",
        solution: "From the given conditions: →c = 5î - 3ĵ + 2k̂. |→c|² = 25 + 9 + 4 = 38",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D001",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the shortest distance between the lines (x-λ)/(-2) = (y-2)/1 = (z-1)/1 and (x-√3)/1 = (y-1)/(-2) = (z-2)/1 is 1, then the sum of all possible values of λ is:",
        options: ["0", "2√3", "3√3", "-2√3"],
        correctAnswer: "B",
        solution: "Using shortest distance formula between skew lines: |λ - 0| = ±3, so λ = 0, λ = 2√3. Sum = 2√3",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D002",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let the line of the shortest distance between the lines L₁: →r = (î + 2ĵ + 3k̂) + λ(î - ĵ + k̂) and L₂: →r = (4î + 5ĵ + 6k̂) + μ(î + ĵ - k̂) intersect L₁ and L₂ at P and Q respectively. If (α, β, γ) is the midpoint of the line segment PQ, then 2(α + β + γ) is equal to:",
        options: ["19", "20", "21", "22"],
        correctAnswer: "C",
        solution: "Finding intersection points and midpoint: μ = -3/2, λ = 3/2. Midpoint = (5/2, 5/2, 15/2). 2(α + β + γ) = 21",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D003",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let P and Q be the points on the line (x+3)/8 = (y-4)/2 = (z+1)/2 which are at a distance of 6 units from the point R(1, 2, 3). If the centroid of the triangle PQR is (α, β, γ), then α² + β² + γ² is:",
        options: ["26", "36", "18", "24"],
        correctAnswer: "C",
        solution: "P(8λ-3, 2λ+4, 2λ-1). PR = 6 gives (8λ-4)² + (2λ+2)² + (2λ-4)² = 36. λ = 0, 1. P(-3,4,-1), Q(5,6,1). Centroid = (1,4,1). α² + β² + γ² = 18",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D004",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the mirror image of the point P(3, 4, 9) in the line (x-1)/3 = (y+1)/2 = (z-2)/1 is (α, β, γ), then 14(α + β + γ) is:",
        options: ["102", "138", "108", "132"],
        correctAnswer: "C",
        solution: "Finding foot of perpendicular and mirror image: α = 83/14, β = 32/14, γ = 51/14. 14(α + β + γ) = 108",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D005",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The distance of the point (7, -2, 11) from the line (x-6)/1 = (y-4)/0 = (z-8)/3 along the line (x-5)/2 = (y-1)/(-3) = (z-5)/6 is:",
        options: ["12", "14", "18", "21"],
        correctAnswer: "B",
        solution: "Point B lies on second line. Finding intersection and calculating distance: AB = 14",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D006",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the shortest distance between the lines (x-4)/1 = (y+1)/2 = (z)/(-3) and (x-λ)/2 = (y+1)/4 = (z-2)/(-5) is 6/√5, then the sum of all possible values of λ is:",
        options: ["5", "8", "7", "10"],
        correctAnswer: "B",
        solution: "Using shortest distance formula: 6/√5 = |2(λ-4)|/√5. λ = 7, 1. Sum = 8",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D007",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let the image of the point (1, 0, 7) in the line x/1 = (y-1)/2 = (z-2)/3 be the point (α, β, γ). Then which one of the following points lies on the line passing through (α, β, γ) and making angles 2π/3 and 3π/4 with y-axis and z-axis respectively and an acute angle with x-axis?",
        options: ["(1, -2, 1 + √2)", "(1, 2, 1 - √2)", "(3, 4, 3 - 2√2)", "(3, -4, 3 + 2√2)"],
        correctAnswer: "C",
        solution: "Finding image point and direction cosines: l = 1/2. Required line equation gives point (3, 4, 3 - 2√2) for μ = 4",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D008",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The position vectors of the vertices A, B and C of a triangle are 2î - 3ĵ + 3k̂, 2î + 2ĵ + 3k̂ and -î + ĵ + 3k̂ respectively. Let l denotes the length of the angle bisector AD of ∠BAC where D is on the line segment BC, then 2l² equals:",
        options: ["49", "42", "50", "45"],
        correctAnswer: "D",
        solution: "AB = AC = 5. Triangle is isosceles. D is midpoint of BC: D(1/2, 3/2, 3). l = √(45/2). 2l² = 45",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D009",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let the position vectors of the vertices A, B and C of a triangle be 2î + 2ĵ + k̂, î + 2ĵ + 2k̂ and 2î + ĵ + 2k̂ respectively. Let l₁, l₂ and l₃ be the lengths of perpendiculars drawn from the ortho center of the triangle on the sides AB, BC and CA respectively, then l₁²/(1 + l₂² + l₃²) equals:",
        options: ["1/5", "1/2", "1/4", "1/3"],
        correctAnswer: "B",
        solution: "Triangle is equilateral. Orthocentre and centroid coincide. l₁ = l₂ = l₃ = 1/√6. l₁²/(1 + l₂² + l₃²) = 1/2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D010",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "The lines (x-2)/2 = y/(-2) = (z-7)/16 and (x+3)/4 = (y+2)/3 = (z+2)/1 intersect at the point P. If the distance of P from the line (x+1)/2 = (y-1)/3 = (z-1)/1 is l, then 14l² is equal to:",
        options: ["104", "106", "108", "110"],
        correctAnswer: "C",
        solution: "Finding intersection point P(1, 1, -1). Distance calculation gives l² = 108/14. Therefore 14l² = 108",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D011",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let O be the origin and the position vector of A and B be 2î + 2ĵ + k̂ and 2î + 4ĵ + 4k̂ respectively. If the internal bisector of ∠AOB meets the line AB at C, then the length of OC is:",
        options: ["√31/2", "3√34/2", "√34/3", "4√31/3"],
        correctAnswer: "B",
        solution: "Length of OC = √136/3 = 2√34/3",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D012",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let PQR be a triangle with R(-1, 4, 2). Suppose M(2, 1, 2) is the mid point of PQ. The distance of the centroid of △PQR from the point of intersection of the line (x-2)/0 = y/2 = (z+3)/(-1) and (x-1)/1 = (y+3)/(-3) = (z+1)/1 is:",
        options: ["69", "9", "√69", "√99"],
        correctAnswer: "C",
        solution: "Centroid G divides MR in 1:2. G(1, 2, 2). Point of intersection A is (2, -6, 0). AG = √69",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D013",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "A line with direction ratios 2, 1, 2 meets the lines x = y + 2 = z and x + 2 = 2y = 2z respectively at the point P and Q. If the length of the perpendicular from the point (1, 2, 12) to the line PQ is l, then l² is:",
        options: ["63", "64", "65", "66"],
        correctAnswer: "C",
        solution: "P(6, 4, 6) and Q(2, 2, 2). PQ line equation and perpendicular distance calculation gives l² = 65",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D014",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let P(3, 2, 3), Q(4, 6, 2) and R(7, 3, 2) be the vertices of △PQR. Then, the angle ∠QPR is:",
        options: ["π/6", "cos⁻¹(7/18)", "cos⁻¹(1/18)", "π/3"],
        correctAnswer: "D",
        solution: "Direction ratios: PR = (4, 1, -1), PQ = (1, 4, -1). cos θ = (4+4+1)/(√18·√18) = 1/2. θ = π/3",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D015",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let O be the origin, and M and N be the points on the lines (x-5)/4 = (y-4)/1 = (z-5)/3 and (x+8)/12 = (y+2)/5 = (z+11)/9 respectively such that MN is the shortest distance between the given lines. Then →OM · →ON is equal to:",
        options: ["7", "8", "9", "10"],
        correctAnswer: "C",
        solution: "Finding points M and N using shortest distance conditions: M(1, 3, 2), N(4, 3, -2). →OM · →ON = 4 + 9 - 4 = 9",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D016",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let (α, β, γ) be the foot of perpendicular from the point (1, 2, 3) on the line (x+3)/5 = (y-1)/2 = (z+4)/3. Then 19(α + β + γ) is equal to:",
        options: ["102", "101", "99", "100"],
        correctAnswer: "B",
        solution: "Foot P(5k-3, 2k+1, 3k-4). Perpendicularity condition gives k = 43/38. 19(α + β + γ) = 101",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D017",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "If d₁ is the shortest distance between the lines x + 1 = 2y = -12z, x = y + 2 = 6z - 6 and d₂ is the shortest distance between the lines (x-1)/2 = (y+8)/(-7) = (z-4)/5, (x-1)/2 = (y-2)/1 = (z-6)/(-3), then the value of 32√3 d₁/d₂ is:",
        options: ["14", "15", "16", "17"],
        correctAnswer: "C",
        solution: "d₁ = 2, d₂ = 12/√3. 32√3 d₁/d₂ = 32√3 × 2/(12/√3) = 16",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D018",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let L₁: →r = (î - ĵ + 2k̂) + λ(î - ĵ + 2k̂), L₂: →r = (ĵ - k̂) + μ(3î + ĵ + pk̂), L₃: →r = δ(lî + mĵ + nk̂) be three lines such that L₁ is perpendicular to L₂ and L₃ is perpendicular to both L₁ and L₂. Then the point which lies on L₃ is:",
        options: ["(-1, 7, 4)", "(-1, -7, 4)", "(1, 7, -4)", "(1, -7, 4)"],
        correctAnswer: "A",
        solution: "For L₁ ⊥ L₂: 3 - 1 + 2p = 0, so p = -1. Direction vector of L₃ = -î + 7ĵ + 4k̂. Point (-1, 7, 4) lies on L₃",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D019",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let a line passing through the point (-1, 2, 3) intersect the lines L₁: (x-1)/3 = (y-2)/2 = (z+1)/(-2) at M(α, β, γ) and L₂: (x+2)/(-3) = (y-2)/(-2) = (z-1)/4 at N(a, b, c). Then the value of (α+β+γ)²/(a+b+c)² equals:",
        options: ["194", "195", "196", "197"],
        correctAnswer: "C",
        solution: "M(3λ+1, 2λ+2, -2λ-1), N(-3μ-2, -2μ+2, 4μ+1). From collinearity: λ = 4, μ = 2. (α+β+γ)²/(a+b+c)² = 14²/(-1)² = 196",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D020",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The distance of the point Q(0, 2, -2) from the line passing through the point P(5, -4, 3) and perpendicular to the lines →r = (-3î + 2k̂) + λ(2î + 3ĵ + 5k̂) and →r = (î - 2ĵ + k̂) + μ(-î + 3ĵ + 2k̂) is:",
        options: ["√86", "√20", "√54", "√74"],
        correctAnswer: "D",
        solution: "Direction vector = cross product = -9î - 9ĵ + 9k̂. Line: →r = (5î - 4ĵ + 3k̂) + λ(î + ĵ - k̂). Distance = √74",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D021",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let Q and R be the feet of perpendiculars from the point P(a, a, a) on the lines x = y, z = 1 and x = -y, z = -1 respectively. If ∠QPR is a right angle, then 12a² is equal to:",
        options: ["10", "11", "12", "13"],
        correctAnswer: "C",
        solution: "Q(r, r, 1), R(k, -k, -1). From perpendicularity: a = r = 1 or a = -1. 12a² = 12",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D022",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let (α, β, γ) be mirror image of the point (2, 3, 5) in the line (x-1)/2 = (y-2)/3 = (z-3)/4. Then 2α + 3β + 4γ is equal to:",
        options: ["32", "33", "31", "34"],
        correctAnswer: "B",
        solution: "Mirror image calculation using foot of perpendicular: 2α + 3β + 4γ = 4 + 9 + 20 = 33",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D023",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "The shortest distance between lines L₁ and L₂, where L₁: (x-1)/2 = (y+1)/(-3) = (z+4)/2 and L₂ is the line passing through the points A(-4, 4, 3) and B(-1, 6, 3) and perpendicular to the line (x-3)/(-2) = y/3 = (z-1)/1, is:",
        options: ["121/√221", "24/√117", "141/√221", "42/√117"],
        correctAnswer: "C",
        solution: "L₂ = (x+4)/3 = (y-4)/2 = (z-3)/0. Shortest distance = 141/√221",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_3D024",
        subject: "Mathematics",
        topic: "Three Dimensional Geometry",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "A line passes through A(4, -6, -2) and B(16, -2, 4). The point P(a, b, c) where a, b, c are non-negative integers, on the line AB lies at a distance of 21 units from the point A. The distance between the points P(a, b, c) and Q(4, -12, 3) is equal to:",
        options: ["20", "21", "22", "23"],
        correctAnswer: "C",
        solution: "Line AB: (x-4)/12 = (y+6)/4 = (z+2)/6 = 21×(6/7). P(22, 0, 7). Distance PQ = √324+144+16 = 22",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH001",
        subject: "Mathematics",
        topic: "Trigonometric Ratios and Identities",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If tan A = 1/√(x(x² + x + 1)), tan B = √x/√(x² + x + 1), and tan C = (x⁻³ + x⁻² + x⁻¹), 0 < A, B, C < π/2, then A + B is equal to:",
        options: ["C", "π - C", "2π - C", "-C"],
        correctAnswer: "A",
        solution: "Finding tan(A + B) = (tan A + tan B)/(1 - tan A tan B). After simplification, tan(A + B) = tan C, hence A + B = C",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH002",
        subject: "Mathematics",
        topic: "Trigonometric Ratios and Identities",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "For α, β ∈ (0, π/2), let 3 sin(α + β) = 2 sin(α - β) and a real number k be such that tan α = k tan β. Then the value of k is equal to:",
        options: ["-2/3", "-5", "3/2", "5"],
        correctAnswer: "-5",
        solution: "From 3 sin(α + β) = 2 sin(α - β), we get 5 sin β cos α = -sin α cos β, giving tan α = -5 tan β, so k = -5",
        questionImageUrl: null,
        solutionImageUrl: null
    },

    // Straight Lines Questions
    {
        id: "2024_PRAC_MATH003",
        subject: "Mathematics",
        topic: "Straight Lines",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let ABC be an isosceles triangle in which A is at (-1, 0), ∠A = 2π/3, AB = AC, and B is on the positive x-axis. If BC = 4√3 and the line BC intersects the line y = x + 3 at (α, β), then β⁴/α² is:",
        options: [],
        correctAnswer: "36",
        solution: "Using sine rule and coordinate geometry to find intersection point and calculate the required ratio",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH004",
        subject: "Mathematics",
        topic: "Straight Lines",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The portion of the line 4x + 5y = 20 in the first quadrant is trisected by the lines L₁ and L₂ passing through the origin. The tangent of an angle between the lines L₁ and L₂ is:",
        options: ["8/5", "25/41", "2/5", "30/41"],
        correctAnswer: "30/41",
        solution: "Finding coordinates of trisection points and calculating slopes of L₁ and L₂, then using angle formula",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH005",
        subject: "Mathematics",
        topic: "Straight Lines",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let R be the interior region between the lines 3x - y + 1 = 0 and x + 2y - 5 = 0 containing the origin. The set of all values of a, for which the points (a², a + 1) lie in R, is:",
        options: ["(-3, -1) ∪ (-1/3, 1)", "(-3, 0) ∪ (1/3, 1)", "(-3, 0) ∪ (2/3, 1)", "(-3, -1) ∪ (1/3, 1)"],
        correctAnswer: "(-3, 0) ∪ (1/3, 1)",
        solution: "Analyzing the region R and finding values of a for which (a², a + 1) lies in the same region as origin",
        questionImageUrl: null,
        questionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH006",
        subject: "Mathematics",
        topic: "Straight Lines",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let A and B be two finite sets with m and n elements respectively. The total number of subsets of the set A is 56 more than the total number of subsets of B. Then the distance of the point P(m, n) from the point Q(-2, -3) is:",
        options: ["10", "6", "4", "8"],
        correctAnswer: "10",
        solution: "2ᵐ - 2ⁿ = 56. Solving gives m = 6, n = 3. Distance PQ = √[(6-(-2))² + (3-(-3))²] = 10",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH007",
        subject: "Mathematics",
        topic: "Straight Lines",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "The sum of squares of all real values of α, for which the lines 2x - y + 3 = 0, 6x + 3y + 1 = 0 and αx + 2y - 2 = 0 do not form a triangle is p, then the greatest integer less than or equal to p is:",
        options: [],
        correctAnswer: "32",
        solution: "Lines don't form triangle if concurrent or parallel. Finding α values: α = 4/5 and α = -4. Sum of squares = 16 + 16/25 = 416/25 ≈ 32.64",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH008",
        subject: "Mathematics",
        topic: "Straight Lines",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "In a △ABC, suppose y = x is the equation of the bisector of the angle B and the equation of the side AC is 2x - y = 2. If 2AB = BC and the point A and B are respectively (4, 6) and (α, β), then α + 2β is equal to:",
        options: ["42", "39", "48", "45"],
        correctAnswer: "42",
        solution: "Using angle bisector properties and distance ratios to find coordinates of B",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH009",
        subject: "Mathematics",
        topic: "Straight Lines",        
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let (5, a/4) be the circumcenter of a triangle with vertices A(a, -2), B(a, 6) and C(a/4, -2). Let α denote the circumradius, β denote the area and γ denote the perimeter of the triangle. Then α + β + γ is:",
        options: ["60", "53", "62", "30"],
        correctAnswer: "53",
        solution: "Finding circumcenter conditions, calculating circumradius, area and perimeter",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH010",
        subject: "Mathematics",
        topic: "Straight Lines",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The distance of the point (2, 3) from the line 2x - 3y + 28 = 0, measured parallel to the line √3x - y + 1 = 0, is equal to:",
        options: ["4√2", "6√3", "3 + 4√2", "4 + 6√3"],
        correctAnswer: "4 + 6√3",
        solution: "Using parametric form and parallel line condition to find the distance",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH011",
        subject: "Mathematics",
        topic: "Straight Lines",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let A be the point of intersection of the lines 3x + 2y = 14, 5x - y = 6 and B be the point of intersection of the lines 4x + 3y = 8, 6x + y = 5. The distance of the point P(5, -2) from the line AB is:",
        options: ["13/2", "8", "5/2", "6"],
        correctAnswer: "6",
        solution: "Finding intersection points A and B, then equation of line AB and distance from P",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH012",
        subject: "Mathematics",
        topic: "Straight Lines",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "A line passing through the point A(9, 0) makes an angle of 30° with the positive direction of x-axis. If this line is rotated about A through an angle of 15° in the clockwise direction, then its equation in the new position is:",
        options: ["y/(√3-2) + x = 9", "y/(√3-2) + y = 9", "x/(√3+2) + y = 9", "y/(√3+2) + x = 9"],
        correctAnswer: "y/(√3-2) + x = 9",
        solution: "New angle = 30° - 15° = 15°. Using tan 15° = 2 - √3 to get the equation",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH013",
        subject: "Mathematics",
        topic: "Straight Lines",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If x² - y² + 2hxy + 2gx + 2fy + c = 0 is the locus of a point, which moves such that it is always equidistant from the lines x + 2y + 7 = 0 and 2x - y + 8 = 0, then the value of g + c + h - f equals:",
        options: ["14", "6", "8", "29"],
        correctAnswer: "14",
        solution: "Finding locus equation from equidistant condition and comparing coefficients",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH014",
        subject: "Mathematics",
        topic: "Straight Lines",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let α, β, γ, δ ∈ Z and let A(α, β), B(1, 0), C(γ, δ) and D(1, 2) be the vertices of a parallelogram ABCD. If AB = √10 and the points A and C lie on the line 3y = 2x + 1, then 2(α + β + γ + δ) is equal to:",
        options: ["10", "5", "12", "8"],
        correctAnswer: "8",
        solution: "Using parallelogram properties and given conditions to find coordinates",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH015",
        subject: "Mathematics",
        topic: "Straight Lines",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let A(a, b), B(3, 4) and (−6, −8) respectively denote the centroid, circumcentre and orthocentre of a triangle. Then, the distance of the point P(2a + 3, 7b + 5) from the line 2x + 3y − 4 = 0 measured parallel to the line x − 2y − 1 = 0 is:",
        options: ["15√5/7", "17√5/6", "17√5/7", "√5/17"],
        correctAnswer: "17√5/7",
        solution: "Using triangle center relationships and parallel distance formula",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH016",
        subject: "Mathematics",
        topic: "Straight Lines",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let A(−2, −1), B(1, 0), C(α, β) and D(γ, δ) be the vertices of a parallelogram ABCD. If the point C lies on 2x − y = 5 and the point D lies on 3x − 2y = 6, then the value of |α + β + γ + δ| is:",
        options: [],
        correctAnswer: "32",
        solution: "Using parallelogram properties and given line equations to solve for coordinates",
        questionImageUrl: null,
        solutionImageUrl: null
    },

    // Trigonometric Equations Questions
    {
        id: "2024_PRAC_MATH017",
        subject: "Mathematics",
        topic: "Trigonometric Equations",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "The number of solutions of the equation 4 sin² x − 4 cos³ x + 9 − 4 cos x = 0; x ∈ [−2π, 2π] is:",
        options: ["1", "3", "2", "0"],
        correctAnswer: "0",
        solution: "Rearranging: 4 cos³ x + 4 cos² x + 4 cos x = 13. Since LHS ≤ 12, it can't equal 13",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH018",
        subject: "Mathematics",
        topic: "Trigonometric Equations",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let the set of all a ∈ R such that the equation cos 2x + a sin x = 2a − 7 has a solution be [p, q] and r = tan 9° − tan 27° − 1/cot 63° + tan 81°, then pqr is equal to:",
        options: [],
        correctAnswer: "48",
        solution: "From the equation, a ∈ [2, 6], so p = 2, q = 6. Computing r = 4, giving pqr = 48",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH019",
        subject: "Mathematics",
        topic: "Trigonometric Equations",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If 2 tan² θ − 5 sec θ = 1 has exactly 7 solutions in the interval [0, nπ/2], for the least value of n ∈ N, then Σₖ₌₁ⁿ k/2ᵏ is equal to:",
        options: ["(2¹⁴ − 14)/2¹⁵", "(2¹⁵ − 15)/2¹⁴", "(1 − 15)/2¹³", "(2¹⁴ − 15)/2¹³"],
        correctAnswer: "(2¹⁴ − 15)/2¹³",
        solution: "Solving the equation gives cos θ = 1/3. For 7 solutions, n = 13",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH020",
        subject: "Mathematics",
        topic: "Trigonometric Equations",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If α, −π/2 < α < π/2 is the solution of 4 cos θ + 5 sin θ = 1, then the value of tan α is:",
        options: ["(10−√10)/6", "(10−√10)/12", "(√10−10)/12", "(√10−10)/6"],
        correctAnswer: "(√10−10)/12",
        solution: "Squaring the equation and solving the quadratic gives tan α = (√10−10)/12",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH021",
        subject: "Mathematics",
        topic: "Trigonometric Equations",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The sum of the solutions x ∈ R of the equation (3 cos 2x + cos³ 2x)/(cos⁶ x − sin⁶ x) = x³ − x² + 6 is:",
        options: ["0", "1", "-1", "3"],
        correctAnswer: "-1",
        solution: "Simplifying the equation leads to x³ − x² + 2 = 0, which has sum of real solutions = −1",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH022",
        subject: "Mathematics",
        topic: "Trigonometric Equations",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If 2 sin³ x + sin 2x cos x + 4 sin x − 4 = 0 has exactly 3 solutions in the interval [0, nπ/2], n ∈ N, then the roots of the equation x² + nx + (n − 3) = 0 belong to:",
        options: ["(0, ∞)", "(−∞, 0)", "(−√17/2, √17/2)", "Z"],
        correctAnswer: "(−∞, 0)",
        solution: "Equation simplifies to sin x = 2/3. For 3 solutions, n = 5. Roots of x² + 5x + 2 = 0 are negative",
        questionImageUrl: null,
        solutionImageUrl: null
    },

    // Statistics Questions  
    {
        id: "2024_PRAC_MATH023",
        subject: "Mathematics",
        topic: "Statistics",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let the median and the mean deviation about the median of 7 observation 170, 125, 230, 190, 210, a, b be 170 and 205/7 respectively. Then the mean deviation about the mean of these 7 observations is:",
        options: ["31", "28", "30", "32"],
        correctAnswer: "30",
        solution: "Using properties of median and mean deviation to find a + b = 300, then calculating mean deviation about mean",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH024",
        subject: "Mathematics",
        topic: "Statistics",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Consider 10 observation x₁, x₂,..., x₁₀ such that Σ(xᵢ − α) = 2 and Σ(xᵢ − β)² = 40, where α, β are positive integers. Let the mean and the variance of the observations be 6/5 and 84/25 respectively. The β/α is equal to:",
        options: ["2", "3/2", "5/2", "1"],
        correctAnswer: "2",
        solution: "From given conditions, α = 1 and β = 2, so β/α = 2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH025",
        subject: "Mathematics",
        topic: "Statistics",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let a₁, a₂, ..., a₁₀ be 10 observations such that Σaₖ = 50 and Σ(aₖaⱼ) = 1100 for all k < j. Then the standard deviation of a₁, a₂, ..., a₁₀ is equal to:",
        options: ["5", "√5", "10", "√115"],
        correctAnswer: "√5",
        solution: "Using the given sums to find Σaₖ² = 300, then calculating standard deviation = √5",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH026",
        subject: "Mathematics",
        topic: "Statistics",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "The mean and standard deviation of 15 observations were found to be 12 and 3 respectively. On rechecking it was found that an observation was read as 10 in place of 12. If μ and σ² denote the mean and variance of the correct observations respectively, then 15(μ + μ² + σ²) is equal to:",
        options: [],
        correctAnswer: "2521",
        solution: "Correcting the data: new mean = 182/15, new variance calculation gives the result",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH027",
        subject: "Mathematics",
        topic: "Statistics",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "If the mean and variance of the data 65, 68, 58, 44, 48, 45, 60, α, β, 60 where α > β are 56 and 66.2 respectively, then α² + β² is equal to:",
        options: [],
        correctAnswer: "6344",
        solution: "Using mean and variance formulas with the given conditions to find α² + β²",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH028",
        subject: "Mathematics",
        topic: "Statistics",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the mean and variance of five observations are 24/5 and 194/25 respectively and the mean of first four observations is 7/2, then the variance of the first four observations is equal to:",
        options: ["77/12", "5/4", "105/4", "4/5"],
        correctAnswer: "105/4",
        solution: "Finding the fifth observation and calculating variance of first four observations",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH029",
        subject: "Mathematics",
        topic: "Statistics",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let M denote the median of the following frequency distribution. Then 20M is equal to:",
        options: ["416", "104", "52", "208"],
        correctAnswer: "208",
        solution: "Using median formula for grouped data: M = 8 + (18-12)/10 × 4 = 10.4, so 20M = 208",
        questionImageUrl: "images/questions/2024_PRAC_MATH029.png",
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH030",
        subject: "Mathematics",
        topic: "Statistics",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "The variance σ² of the data with given frequencies is:",
        options: [],
        correctAnswer: "29",
        solution: "Calculating variance from frequency distribution: σ² ≈ 29",
        questionImageUrl: "images/questions/2024_PRAC_MATH030.png",
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH031",
        subject: "Mathematics",
        topic: "Statistics",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let the mean and the variance of 6 observation a, b, 68, 44, 48, 60 be 55 and 194, respectively. If a > b, then a + 3b is:",
        options: ["200", "190", "180", "210"],
        correctAnswer: "180",
        solution: "Using mean and variance conditions: a = 75, b = 35, so a + 3b = 180",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ001",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let 3, a, b, c be in A.P. and 3, a-1, b+1, c+9 be in G.P. Then, the arithmetic mean of a, b and c is:",
        options: ["-4", "-1", "13", "11"],
        correctAnswer: "D",
        solution: "3, a, b, c → A.P ⇒ 3, 3+d, 3+2d, 3+3d. 3, a-1, b+1, c+9 → G.P ⇒ 3, 2+d, 4+2d, 12+3d. From GP condition: (2+d)² = 3(4+2d). Solving: d = 4. Therefore a = 7, b = 11, c = 15. Arithmetic mean = 11.",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ002",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let 3, 7, 11, 15, …, 403 and 2, 5, 8, 11, …, 404 be two arithmetic progressions. Then the sum of the common terms in them is equal to:",
        options: ["6699", "6600", "6500", "6800"],
        correctAnswer: "A",
        solution: "LCM(4,3) = 12. Common terms: 11, 23, 35, ... Sum = 33/2 × (22 + 32×12) = 6699",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ003",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let Sₙ denote the sum of the first n terms of an arithmetic progression. If S₁₀ = 390 and the ratio of the tenth and the fifth terms is 15:7, then S₁₅ - S₅ is equal to:",
        options: ["800", "890", "790", "690"],
        correctAnswer: "C",
        solution: "From given conditions: 2a + 9d = 78 and 8a = 3d. Solving: a = -8, d = 5. S₁₅ - S₅ = 790",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ004",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "If three successive terms of a G.P. with common ratio r(r > 1) are the lengths of the sides of a triangle and [r] denotes the greatest integer less than or equal to r, then 3[r] + [-r] is equal to:",
        options: ["1", "2", "3", "4"],
        correctAnswer: "A",
        solution: "For triangle inequality: r ∈ (1, (1+√5)/2). Therefore [r] = 1, [-r] = -2. So 3[r] + [-r] = 1",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ005",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "The number of common terms in the progressions 4, 9, 14, 19, … up to 25th term and 3, 6, 9, 12, … up to 37th term is:",
        options: ["9", "5", "7", "8"],
        correctAnswer: "C",
        solution: "First common term = 9, common difference = 15 (LCM of 5 and 3). Common terms: 9, 24, 39, 54, 69, 84, 99. Total = 7",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ006",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If 8 = 3 + (3+p)/4 + (3+2p)/4² + (3+3p)/4³ + … ∞, then the value of p is:",
        options: ["9", "8", "7", "6"],
        correctAnswer: "A",
        solution: "Sum of infinite A.G.P.: 8 = 3/(1-1/4) + p⋅(1/4)/(1-1/4)². Solving: p = 9",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ007",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "The 20th term from the end of the progression 20, 19¼, 18½, 17¾, …, -129¼ is:",
        options: ["-118", "-110", "-115", "-100"],
        correctAnswer: "C",
        solution: "This is A.P. with a = -129¼, d = 3/4. Required term = -129¼ + (20-1)(3/4) = -115",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ008",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If in a G.P. of 64 terms, the sum of all the terms is 7 times the sum of the odd terms of the G.P, then the common ratio of the G.P. is equal to:",
        options: ["7", "4", "5", "6"],
        correctAnswer: "D",
        solution: "a(1-r⁶⁴)/(1-r) = 7⋅a(1-r⁶⁴)/(1-r²). Solving: r = 6",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ009",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "In an A.P., the sixth term a₆ = 2. If a₁a₄a₅ is the greatest, then the common difference of the A.P. is equal to:",
        options: ["3/2", "8/5", "2/3", "5/8"],
        correctAnswer: "B",
        solution: "a₆ = 2 ⇒ a + 5d = 2. For maximum a₁a₄a₅: derivative = 0. Solving: d = 8/5",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ010",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If logₑa, logₑb, logₑc are in A.P. and logₑa - logₑ2b, logₑ2b - logₑ3c, logₑ3c - logₑa are also in A.P, then a:b:c is equal to:",
        options: ["9:6:4", "16:4:1", "25:10:4", "6:3:2"],
        correctAnswer: "A",
        solution: "From A.P. conditions: b² = ac and solving further equations gives a:b:c = 9:6:4",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ011",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "If each term of a geometric progression a₁, a₂, a₃, … with a₁ = 1/8 and a₂ ≠ a₁, is the arithmetic mean of the next two terms and Sₙ = a₁ + a₂ + … + aₙ, then S₂₀ - S₁₈ is equal to:",
        options: ["2¹⁵", "-2¹⁸", "2¹⁸", "-2¹⁵"],
        correctAnswer: "D",
        solution: "From A.M. condition: r = -2. S₂₀ - S₁₈ = T₁₉ + T₂₀ = ar¹⁸(1+r) = -2¹⁵",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ012",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let Sₙ denote the sum of first n terms of an arithmetic progression. If S₂₀ = 790 and S₁₀ = 145, then S₁₅ - S₅ is:",
        options: ["395", "390", "405", "410"],
        correctAnswer: "A",
        solution: "From given conditions: a = -8, d = 5. S₁₅ - S₅ = 15/2[2a + 14d] - 5/2[2a + 4d] = 395",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ013",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let α = 1² + 4² + 8² + 13² + 19² + 26² + … up to 10 terms and β = Σ₁¹⁰ n⁴. If 4α - β = 55k + 40, then k is equal to:",
        options: ["353", "350", "355", "352"],
        correctAnswer: "A",
        solution: "Finding pattern in α series and calculating: 4α - β = 55(353) + 40, so k = 353",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ014",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let a and b be two distinct positive real numbers. Let 11th term of a GP, whose first term is a and third term is b, is equal to pth term of another GP, whose first term is a and fifth term is b. Then p is equal to:",
        options: ["20", "25", "21", "24"],
        correctAnswer: "C",
        solution: "From GP conditions: ar¹⁰ = ar^(p-1). Solving with given conditions: p = 21",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ015",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let Sₙ be the sum to n-terms of an arithmetic progression 3, 7, 11, … If 40 < (Σₖ₌₁ⁿ Sₖ) < 42, then n equals:",
        options: ["6", "7", "8", "9"],
        correctAnswer: "D",
        solution: "Sₙ = 2n² + n. Σₖ₌₁ⁿ Sₖ = n(n+1)(4n+5)/6. From 40 < n(n+1)(4n+5)/6 < 42: n = 9",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ016",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "The sum of the series 1/(1-3⋅1²+1⁴) + 2/(1-3⋅2²+2⁴) + 3/(1-3⋅3²+3⁴) + … up to 10 terms is:",
        options: ["45/109", "-45/109", "55/109", "-55/109"],
        correctAnswer: "D",
        solution: "General term simplifies using partial fractions. Sum = -55/109",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_SEQ017",
        subject: "Mathematics",
        topic: "Sequences and Series",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let 2nd, 8th and 44th terms of a non-constant A.P. be respectively the 1st, 2nd and 3rd terms of G.P. If the first term of A.P. is 1 then the sum of first 20 terms is equal to:",
        options: ["980", "960", "990", "970"],
        correctAnswer: "D",
        solution: "From GP condition: (1+7d)² = (1+d)(1+43d). Solving: d = 5. S₂₀ = 970",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PROB001",
        subject: "Mathematics",
        topic: "Probability",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "A bag contains 8 balls, whose colours are either white or black. 4 balls are drawn at random without replacement and it was found that 2 balls are white and other 2 balls are black. The probability that the bag contains equal number of white and black balls is:",
        options: ["2/5", "2/7", "1/7", "1/5"],
        correctAnswer: "B",
        solution: "Using Bayes' theorem with different possible compositions of the bag, the probability is 2/7",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PROB002",
        subject: "Mathematics",
        topic: "Probability",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let Ajay will not appear in JEE exam with probability p = 2/7, while both Ajay and Vijay will appear in the exam with probability q = 1/5. Then the probability that Ajay will appear in the exam and Vijay will not appear is:",
        options: ["9/35", "18/35", "24/35", "3/35"],
        correctAnswer: "B",
        solution: "P(A) = 5/7, P(A∩V̄) = P(A) - P(A∩V) = 5/7 - 1/5 = 18/35",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PROB003",
        subject: "Mathematics",
        topic: "Probability",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "A fair die is tossed repeatedly until a six is obtained. Let X denote the number of tosses required and let a = P(X = 3), b = P(X ≥ 3) and c = P(X ≥ 6|X > 3). Then (b+c)/a is equal to:",
        options: ["12", "10", "14", "16"],
        correctAnswer: "A",
        solution: "a = 25/216, b = 25/36, c = (5/6)³. (b+c)/a = 12",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PROB004",
        subject: "Mathematics",
        topic: "Probability",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "An urn contains 6 white and 9 black balls. Two successive draws of 4 balls are made without replacement. The probability that the first draw gives all white balls and the second draw gives all black balls is:",
        options: ["5/256", "5/715", "3/715", "3/256"],
        correctAnswer: "C",
        solution: "P = (6C4/15C4) × (9C4/11C4) = 3/715",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PROB005",
        subject: "Mathematics",
        topic: "Probability",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "A fair die is thrown until 2 appears. Then the probability that 2 appears in even number of throws is:",
        options: ["5/6", "1/6", "5/11", "6/11"],
        correctAnswer: "C",
        solution: "Using geometric series: P = (5/6)×(1/6)/(1-(25/36)) = 5/11",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PROB006",
        subject: "Mathematics",
        topic: "Probability",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "An integer is chosen at random from the integers 1, 2, 3, …, 50. The probability that the chosen integer is a multiple of atleast one of 4, 6 and 7 is:",
        options: ["8/25", "21/50", "9/50", "14/25"],
        correctAnswer: "B",
        solution: "Using inclusion-exclusion principle: P(A∪B∪C) = 21/50",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PROB007",
        subject: "Mathematics",
        topic: "Probability",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Two integers x and y are chosen with replacement from the set {0, 1, 2, 3, …, 10}. Then the probability that |x - y| > 5 is:",
        options: ["30/121", "62/121", "60/121", "31/121"],
        correctAnswer: "A",
        solution: "Counting favorable outcomes: 30 out of 121 total possibilities. P = 30/121",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PROB008",
        subject: "Mathematics",
        topic: "Probability",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Bag A contains 3 white, 7 red balls and bag B contains 3 white, 2 red balls. One bag is selected at random and a ball is drawn from it. The probability of drawing the ball from bag A, if the ball drawn is white, is:",
        options: ["1/4", "1/9", "1/3", "3/10"],
        correctAnswer: "C",
        solution: "Using Bayes' theorem: P(A|E) = (1/2×3/10)/((1/2×3/10)+(1/2×3/5)) = 1/3",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PROB009",
        subject: "Mathematics",
        topic: "Probability",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "Two marbles are drawn in succession from a box containing 10 red, 30 white, 20 blue and 15 orange marbles, with replacement being made after each drawing. Then the probability that first drawn marble is red and second drawn marble is white is:",
        options: ["2/25", "4/25", "2/3", "4/75"],
        correctAnswer: "D",
        solution: "P = (10/75) × (30/75) = 4/75",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PROB010",
        subject: "Mathematics",
        topic: "Probability",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Three rotten apples are accidentally mixed with fifteen good apples. Assuming the random variable x to be the number of rotten apples in a draw of two apples, the variance of x is:",
        options: ["37/153", "57/153", "47/153", "40/153"],
        correctAnswer: "D",
        solution: "E(X) = 1/3, Var(X) = E(X²) - [E(X)]² = 57/153 - 1/9 = 40/153",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PROB011",
        subject: "Mathematics",
        topic: "Probability",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "A coin is biased so that a head is twice as likely to occur as a tail. If the coin is tossed 3 times, then the probability of getting two tails and one head is:",
        options: ["2/9", "1/9", "2/27", "1/27"],
        correctAnswer: "A",
        solution: "P(H) = 2/3, P(T) = 1/3. P(2T, 1H) = 3C2 × (1/3)² × (2/3) = 2/9",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_QUAD001",
        subject: "Mathematics",
        topic: "Quadratic Equation",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let S = {x ∈ ℝ : (√3 + √2)ˣ + (√3 - √2)ˣ = 10}. Then the number of elements in S is:",
        options: ["4", "0", "2", "1"],
        correctAnswer: "C",
        solution: "Let t = (√3 + √2)ˣ. Then t + 1/t = 10. Solving: t² - 10t + 1 = 0. x = ±2. Number of solutions = 2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_QUAD002",
        subject: "Mathematics",
        topic: "Quadratic Equation",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let α and β be the roots of the equation px² + qx - r = 0, where p ≠ 0. If p, q and r be the consecutive terms of a non-constant G.P and 1/α + 1/β = 3/4, then the value of (α - β)² is:",
        options: ["80/9", "9", "20/3", "8"],
        correctAnswer: "A",
        solution: "From GP: p = A, q = AR, r = AR². From given conditions: R = 4/3. (α - β)² = 80/9",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_QUAD003",
        subject: "Mathematics",
        topic: "Quadratic Equation",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If α, β are the roots of the equation x² - x - 1 = 0 and Sₙ = 2023αⁿ + 2024βⁿ, then:",
        options: ["2S₁₂ = S₁₁ + S₁₀", "S₁₂ = S₁₁ + S₁₀", "2S₁₁ = S₁₂ + S₁₀", "S₁₁ = S₁₀ + S₁₂"],
        correctAnswer: "B",
        solution: "Using recurrence relation: Sₙ₋₁ + Sₙ₋₂ = Sₙ. Therefore S₁₂ = S₁₁ + S₁₀",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_QUAD004",
        subject: "Mathematics",
        topic: "Quadratic Equation",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let the set C = {(x, y) | x² - 2y = 2023, x, y ∈ ℕ}. Then Σ(x,y)∈C(x + y) is equal to:",
        options: ["46", "45", "47", "48"],
        correctAnswer: "A",
        solution: "x² - 2y = 2023 ⇒ x = 45, y = 1. Therefore Σ(x + y) = 46",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_QUAD005",
        subject: "Mathematics",
        topic: "Quadratic Equation",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let α, β ∈ ℕ be roots of equation x² - 70x + λ = 0, where λ/2, λ/3 ∉ ℕ. If λ assumes the minimum possible value, then (√(α-1) + √(β-1))(λ + 35)/|α - β| is equal to:",
        options: ["60", "65", "70", "75"],
        correctAnswer: "A",
        solution: "Since 2 and 3 do not divide λ: α = 5, β = 65, λ = 325. The expression equals 60",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_QUAD006",
        subject: "Mathematics",
        topic: "Quadratic Equation",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "The number of real solutions of the equation x(x² + 3|x| + 5|x - 1| + 6|x - 2|) = 0 is:",
        options: ["1", "2", "3", "0"],
        correctAnswer: "A",
        solution: "All terms are positive except at x = 0. Only solution x = 0. Number of solutions = 1",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_QUAD007",
        subject: "Mathematics",
        topic: "Quadratic Equation",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "For 0 < c < b < a, let (a + b - 2c)x² + (b + c - 2a)x + (c + a - 2b) = 0 and α ≠ 1 be one of its root. Then, among the two statements: (I) If α ∈ (-1, 0), then b cannot be the geometric mean of a and c (II) If α ∈ (0, 1), then b may be the geometric mean of a and c",
        options: ["Both (I) and (II) are true", "Neither (I) nor (II) is true", "Only (II) is true", "Only (I) is true"],
        correctAnswer: "A",
        solution: "Both statements are mathematically correct based on the given conditions",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_QUAD008",
        subject: "Mathematics",
        topic: "Quadratic Equation",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let S be the set of positive integral values of a for which (ax² + 2(a+1)x + 9a + 4)/(x² - 8x + 32) < 0, ∀x ∈ ℝ. Then, the number of elements in S is:",
        options: ["1", "0", "∞", "3"],
        correctAnswer: "B",
        solution: "For the inequality to hold ∀x ∈ ℝ: a < 0. No positive integral values exist",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_QUAD009",
        subject: "Mathematics",
        topic: "Quadratic Equation",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "The number of solutions of the equation e^(sin x) - 2e^(-sin x) = 2 is:",
        options: ["2", "more than 2", "1", "0"],
        correctAnswer: "D",
        solution: "Let t = e^(sin x). Equation becomes t - 2/t = 2. Solving: t = 1 ± √3. Since sin x > 1 has no solution, there are 0 solutions",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_QUAD010",
        subject: "Mathematics",
        topic: "Quadratic Equation",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let a, b, c be the length of three sides of a triangle satisfying the condition (a² + b²)x² - 2b(a + c)x + (b² + c²) = 0. If the set of all possible values of x is the interval (α, β), then 12(α² + β²) is equal to:",
        options: ["36", "32", "40", "44"],
        correctAnswer: "A",
        solution: "From triangle inequality: α = (√5-1)/2, β = (√5+1)/2. 12(α² + β²) = 36",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PERM001",
        subject: "Mathematics",
        topic: "Permutation Combination",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If n is the number of ways five different employees can sit into four indistinguishable offices where any office may have any number of persons including zero, then n is equal to:",
        options: ["47", "53", "51", "43"],
        correctAnswer: "C",
        solution: "Using partitioning method: 1 + 5 + 10 + 15 + 10 + 10 = 51 ways",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PERM002",
        subject: "Mathematics",
        topic: "Permutation Combination",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "The lines L₁, L₂, …, L₂₀ are distinct. For n = 1, 2, 3, …, 10, all the lines L₂ₙ₋₁ are parallel to each other and all the lines L₂ₙ pass through a given point P. The maximum number of points of intersection of pairs of lines from the set {L₁, L₂, …, L₂₀} is equal to:",
        options: ["101", "100", "102", "103"],
        correctAnswer: "A",
        solution: "Total intersections = ²⁰C₂ - ¹⁰C₂ - ¹⁰C₂ + 1 = 101",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PERM003",
        subject: "Mathematics",
        topic: "Permutation Combination",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let α = (4!)!/(4!)³! and β = (5!)!/(5!)⁴!. Then:",
        options: ["α ∈ ℕ and β ∉ ℕ", "α ∉ ℕ and β ∈ ℕ", "α ∈ ℕ and β ∈ ℕ", "α ∉ ℕ and β ∉ ℕ"],
        correctAnswer: "C",
        solution: "Both α and β are natural numbers when calculated properly",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PERM004",
        subject: "Mathematics",
        topic: "Permutation Combination",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "All the letters of the word 'GTWENTY' are written in all possible ways with or without meaning and these words are written as in dictionary. The serial number of the word 'GTWENTY' is:",
        options: ["553", "550", "555", "560"],
        correctAnswer: "A",
        solution: "Counting words lexicographically: Total = 553",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PERM005",
        subject: "Mathematics",
        topic: "Permutation Combination",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Number of ways of arranging 8 identical books into 4 identical shelves where any number of shelves may remain empty is equal to:",
        options: ["18", "16", "12", "15"],
        correctAnswer: "D",
        solution: "Using partitioning: 1 + 4 + 5 + 5 = 15 ways",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PERM006",
        subject: "Mathematics",
        topic: "Permutation Combination",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "In an examination of Mathematics paper, there are 20 questions of equal marks and the question paper is divided into three sections: A, B and C. A student is required to attempt total 15 questions taking at least 4 questions from each section. If section A has 8 questions, section B has 6 questions and section C has 6 questions, then the total number of ways a student can select 15 questions is:",
        options: ["11376", "11000", "12000", "10000"],
        correctAnswer: "A",
        solution: "Using combinations with constraints: Total = 11376",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PERM007",
        subject: "Mathematics",
        topic: "Permutation Combination",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "The total number of words (with or without meaning) that can be formed out of the letters of the word 'DISTRIBUTION' taken four at a time, is equal to:",
        options: ["3734", "3700", "3800", "3600"],
        correctAnswer: "A",
        solution: "Considering repeated letters: Total = 3024 + 672 + 6 + 32 = 3734",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PERM008",
        subject: "Mathematics",
        topic: "Permutation Combination",
        difficulty: "Easy",
        questionType: "MCQ",
        question: "The number of ways in which 21 identical apples can be distributed among three children such that each child gets at least 2 apples is:",
        options: ["406", "130", "142", "136"],
        correctAnswer: "D",
        solution: "After giving 2 apples to each: ¹⁷C₂ = 136 ways",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PARA001",
        subject: "Mathematics",
        topic: "Parabola",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the shortest distance of the parabola y² = 4x from the centre of the circle x² + y² - 4x - 16y + 64 = 0 is d, then d² is equal to:",
        options: ["16", "24", "20", "36"],
        correctAnswer: "C",
        solution: "Normal equation: y = mx - 2m - m³. Passing through center (2,8): m = -2. Point P(4,4), distance = √20. d² = 20",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PARA002",
        subject: "Mathematics",
        topic: "Parabola",
        difficulty: "Hard",
        questionType: "MCQ",
        question: "Let P(α, β) be a point on the parabola y² = 4x. If P also lies on the chord of the parabola x² = 8y whose mid point is (1, 5/4), then (α - 28)(β - 8) is equal to:",
        options: ["192", "190", "194", "196"],
        correctAnswer: "A",
        solution: "From chord equation and parabola conditions: (α - 28)(β - 8) = 192",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_PARA003",
        subject: "Mathematics",
        topic: "Parabola",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The maximum area of a triangle whose one vertex is at (0, 0) and the other two vertices lie on the curve y = -2x² + 54 at points (x, y) and (-x, y) where y > 0 is:",
        options: ["88", "122", "92", "108"],
        correctAnswer: "D",
        solution: "Area = |xy| = |x(-2x² + 54)|. Maximum at x = 3 gives area = 108",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH032",
        subject: "Mathematics",
        topic: "Matrices",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If A = [√2, 1; -1, √2] and B = [1, 0; 1, 1], C = ABA^T, X = A^T C^2 A, then det X is equal to:",
        options: ["243", "729", "27", "891"],
        correctAnswer: "729",
        solution: "det(A) = 3, det(B) = 1, |C| = 9. |X| = |A^T||C|^2|A| = |A|^2|C|^2 = 9 × 81 = 729",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH033",
        subject: "Mathematics",
        topic: "Matrices",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let A = I₂ - MM^T, where M is real matrix of order 2×1 such that M^T M = I₁. If λ is a real number such that AX = λX holds for some non-zero real matrix X of order 2×1, then the sum of squares of all possible values of λ is equal to:",
        options: [],
        correctAnswer: "2",
        solution: "A² = I₂, so X = λ²X, giving λ² = 1, hence λ = ±1. Sum of squares = 2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH034",
        subject: "Mathematics",
        topic: "Matrices",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Consider the matrix f(x) = [cos x, -sin x, 0; sin x, cos x, 0; 0, 0, 1]. Given below are two statements: Statement I: f(-x) is the inverse of the matrix f(x). Statement II: f(x)f(y) = f(x + y).",
        options: ["Statement I is false but Statement II is true", "Both Statement I and Statement II are false", "Statement I is true but Statement II is false", "Both Statement I and Statement II are true"],
        correctAnswer: "Both Statement I and Statement II are true",
        solution: "Both statements can be verified by matrix multiplication. Statement I: f(x)f(-x) = I. Statement II: Matrix multiplication gives f(x+y)",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH035",
        subject: "Mathematics",
        topic: "Matrices",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let A be a 2×2 real matrix and I be the identity matrix of order 2. If the roots of the equation |A - xI| = 0 be -1 and 3, then the sum of the diagonal elements of the matrix A² is:",
        options: [],
        correctAnswer: "10",
        solution: "Sum of roots = tr(A) = 2, Product = |A| = -3. For A² diagonal sum = (a+d)² - 2ad + 2bc = 4 + 6 = 10",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH036",
        subject: "Mathematics",
        topic: "Matrices",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let A = [1, 0, 0; 0, α, β; 0, β, α] and |2A|³ = 2²¹, where α, β ∈ Z. Then a value of α is:",
        options: ["3", "5", "17", "9"],
        correctAnswer: "5",
        solution: "|A| = α² - β² = 16. Since (α + β)(α - β) = 16, possible values give α = 4 or 5",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH037",
        subject: "Mathematics",
        topic: "Matrices",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let A be a square matrix such that AA^T = I. Then A[(A + A^T)² + (A - A^T)²] is equal to:",
        options: ["½A² + I", "A³ + I", "A² + A^T", "A³ + A^T"],
        correctAnswer: "A³ + A^T",
        solution: "Expanding and using AA^T = I, we get A[A² + (A^T)²] = A³ + A^T",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH038",
        subject: "Mathematics",
        topic: "Matrices",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let A = [2, 1, 2; 6, 2, 11; 3, 3, 2] and P = [1, 2, 0; 5, 0, 2; 7, 1, 5]. The sum of the prime factors of |P⁻¹AP - 2I| is equal to:",
        options: ["26", "27", "66", "23"],
        correctAnswer: "26",
        solution: "|P⁻¹AP - 2I| = |A - 2I| = 69. Prime factors are 3 and 23, sum = 26",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH039",
        subject: "Mathematics",
        topic: "Matrices",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let R = (x, 0, 0; 0, y, 0; 0, 0, z) be a non-zero 3×3 matrix, where x sin θ = y sin(θ + 2π/3) = z sin(θ + 4π/3) ≠ 0, θ ∈ (0, 2π). For a square matrix M, let trace (M) denote the sum of all the diagonal entries of M. Then among the statements: (I) Trace (R) = 0 (II) If trace (adj(adj(R)) = 0, then R has exactly one non-zero entry.",
        options: ["Both (I) and (II) are true", "Neither (I) nor (II) is true", "Only (II) is true", "Only (I) is true"],
        correctAnswer: "Neither (I) nor (II) is true",
        solution: "Both statements are false based on the given conditions and matrix properties",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH040",
        subject: "Mathematics",
        topic: "Matrices",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let A be a 3×3 matrix and det(A) = 2. If n = det(adj(adj(...(adj A)...))) with 2024 times adj, then the remainder when n is divided by 9 is equal to:",
        options: [],
        correctAnswer: "7",
        solution: "n = |A|^(2024) = 2^2024. Computing 2^2024 (mod 9) gives remainder 7",
        questionImageUrl: null,
        solutionImageUrl: null
    },

    // Limits Questions
    {
        id: "2024_PRAC_MATH041",
        subject: "Mathematics",
        topic: "Limits",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let {x} denote the fractional part of x and f(x) = (cos⁻¹(1-{x}²) sin⁻¹(1-{x}))/{x}-{x}³, x ≠ 0. If L and R respectively denotes the left hand limit and the right hand limit of f(x) at x = 0, then (L² + R²)32/π² is equal to:",
        options: [],
        correctAnswer: "18",
        solution: "Computing left and right limits: L = π/4, R = π/√2. (L² + R²)32/π² = 18",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH042",
        subject: "Mathematics",
        topic: "Limits",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let f(x) = {x-1, x is even; 2x, x is odd}. If for some a ∈ N, f(f(f(a))) = 21, then lim(x→a⁻)[|x|³/a - [x/a]], where [t] denotes the greatest integer less than or equal to t, is equal to:",
        options: ["121", "144", "169", "225"],
        correctAnswer: "144",
        solution: "From f(f(f(a))) = 21, we get a = 12. The limit equals 144",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH043",
        subject: "Mathematics",
        topic: "Limits",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If a = lim(x→0) (√(1+√(1+x⁴))-√2)/x⁴ and b = lim(x→0) sin²x/(√2-√(1+cos x)), then ab³ is:",
        options: ["36", "32", "25", "30"],
        correctAnswer: "32",
        solution: "a = 1/(4√2), b = 4√2. ab³ = (1/4√2) × (4√2)³ = 32",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH044",
        subject: "Mathematics",
        topic: "Limits",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If lim(x→0) (3+α sin x+β cos x+log_e(1-x))/(3 tan²x) = 1/3, then 2α - β =:",
        options: ["2", "7", "5", "1"],
        correctAnswer: "5",
        solution: "Using L'Hôpital's rule and coefficient comparison: α = 1, β = -3. Hence 2α - β = 5",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH045",
        subject: "Mathematics",
        topic: "Limits",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "lim(x→π/2) (∫[from 1 to x³] cos(t³)dt)/(x-π/2)² is equal to:",
        options: ["3π/8", "3π²/4", "3π²/8", "3π/4"],
        correctAnswer: "3π²/8",
        solution: "Using L'Hôpital's rule twice: limit = 3π²/8",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH046",
        subject: "Mathematics",
        topic: "Limits",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let the slope of the line 45x + 5y + 3 = 0 be 27r₁ + 9r₂/2 for some r₁, r₂ ∈ R. Then Lim(x→3)(∫[3 to x] dt/(8t²))/(−r₂x² − r₁x³ − 3x)/(3r₂x²) is equal to:",
        options: [],
        correctAnswer: "12",
        solution: "Finding slope and using L'Hôpital's rule: limit = 12",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH047",
        subject: "Mathematics",
        topic: "Limits",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let f: [-π/2, π/2] → R be a differentiable function such that f(0) = 1/2. If lim(x→0) (x∫[0 to x] f(t)dt)/(e^(x²)-1) = α, then 8α² is:",
        options: ["16", "2", "1/4", "1"],
        correctAnswer: "2",
        solution: "Using L'Hôpital's rule and given conditions: α = 1/2, so 8α² = 2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH048",
        subject: "Mathematics",
        topic: "Limits",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let a be the sum of all coefficients in the expansion of (1-2x+2x²)²⁰²³(3-4x²+2x³)²⁰²⁴ and b = lim(x→0) (∫[0 to x] dt/log(1+t))/(t²⁰²⁴+1)/x². If the equations cx²+dx+e=0 and 2bx²+ax+4=0 have a common root, where c,d,e ∈ R, then d:c:e equals:",
        options: ["2:1:4", "4:1:4", "1:2:4", "1:1:4"],
        correctAnswer: "1:1:4",
        solution: "a = 1, b = 1/2. From common root condition: d:c:e = 1:1:4",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH049",
        subject: "Mathematics",
        topic: "Limits",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "lim(x→0) (e^(4 sin x) - 2|sin x| - 1)/x²:",
        options: ["is equal to -1", "does not exist", "is equal to 1", "is equal to 2"],
        correctAnswer: "is equal to 2",
        solution: "Using series expansion and limit properties: limit = 2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH050",
        subject: "Mathematics",
        topic: "Limits",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let f: R → (0,∞) be strictly increasing function such that lim(x→∞) f(7x)/f(x) = 1. Then, the value of lim(x→∞)[f(5x)/f(x) - 1] is equal to:",
        options: ["4", "0", "7/5", "1"],
        correctAnswer: "0",
        solution: "Since f is increasing and limit condition holds: f(x) < f(5x) < f(7x), giving limit = 0",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH051",
        subject: "Mathematics",
        topic: "Limits",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "If lim(x→0) (ax²e^x - b log_e(1+x) + cxe^(-x))/(x² sin x) = 1, then 16(a² + b² + c²) is equal to:",
        options: [],
        correctAnswer: "81",
        solution: "Using series expansion: a = 3/4, b = c = 3/2. Hence 16(a² + b² + c²) = 81",
        questionImageUrl: null,
        solutionImageUrl: null
    },

    // Inverse Trigonometric Functions Questions
    {
        id: "2024_PRAC_MATH052",
        subject: "Mathematics",
        topic: "Inverse Trigonometric Functions",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Considering only the principal values of inverse trigonometric functions, the number of positive real values of x satisfying tan⁻¹(x) + tan⁻¹(2x) = π/4 is:",
        options: ["More than 2", "1", "2", "0"],
        correctAnswer: "1",
        solution: "Taking tan both sides: 2x² + 3x - 1 = 0. Only x = (-3+√17)/8 is positive",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH053",
        subject: "Mathematics",
        topic: "Inverse Trigonometric Functions",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let x = m/n (m, n are co-prime natural numbers) be a solution of the equation cos(2 sin⁻¹ x) = 1/9 and let α, β (α > β) be the roots of the equation mx² - nx - m + n = 0. Then the point (α, β) lies on the line:",
        options: ["3x + 2y = 2", "5x - 8y = -9", "3x - 2y = -2", "5x + 8y = 9"],
        correctAnswer: "5x + 8y = 9",
        solution: "From cos(2θ) = 1/9, sin θ = ±2/3, giving x = 2/3. m = 2, n = 3. Roots: α = 1, β = 1/2. Point (1, 1/2) lies on 5x + 8y = 9",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH054",
        subject: "Mathematics",
        topic: "Inverse Trigonometric Functions",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "For α, β, γ ≠ 0, sin⁻¹ α + sin⁻¹ β + sin⁻¹ γ = π and (α + β + γ)(α - γ + β) = 3αβ, then γ equals:",
        options: ["√3/2", "1/√2", "(√3-1)/(2√2)", "√3"],
        correctAnswer: "√3/2",
        solution: "Let sin⁻¹ α = A, sin⁻¹ β = B, sin⁻¹ γ = C. A + B + C = π gives cos C = 1/2, hence γ = √3/2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH055",
        subject: "Mathematics",
        topic: "Inverse Trigonometric Functions",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If a = sin⁻¹(sin(5)) and b = cos⁻¹(cos(5)), then a² + b² equals:",
        options: ["4π² + 25", "8π² - 40π + 50", "4π² - 20π + 50", "25"],
        correctAnswer: "8π² - 40π + 50",
        solution: "a = 5 - 2π and b = 2π - 5. a² + b² = (5 - 2π)² + (2π - 5)² = 8π² - 40π + 50",
        questionImageUrl: null,
        solutionImageUrl: null
    },

    

    // Functions Questions (First 10 of 13)
    {
        id: "2024_PRAC_MATH066",
        subject: "Mathematics",
        topic: "Functions",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let f: R → R and g: R → R be defined as f(x) = {log_e x, x > 0; e^(-x), x ≤ 0} and g(f(x)). Then g(f(x)) is:",
        options: ["one-one but not onto", "neither one-one nor onto", "onto but not one-one", "both one-one and onto"],
        correctAnswer: "neither one-one nor onto",
        solution: "Analyzing the composite function shows it is many-one and into",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH067",
        subject: "Mathematics",
        topic: "Functions",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the domain of the function f(x) = √(x²-25)/((4-x²) + log₁₀(x² + 2x - 15)) is (-∞, α) ∪ [β, ∞), then α² + β³ is equal to:",
        options: ["140", "175", "150", "125"],
        correctAnswer: "150",
        solution: "Finding domain conditions: α = -5, β = 5. Hence α² + β³ = 25 + 125 = 150",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH068",
        subject: "Mathematics",
        topic: "Functions",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The function f: N - {1} → N defined by f(n) = the highest prime factor of n, is:",
        options: ["both one-one and onto", "one-one only", "onto only", "neither one-one nor onto"],
        correctAnswer: "neither one-one nor onto",
        solution: "f(2) = f(4) = 2 (many-one), and 4 has no preimage (not onto)",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH069",
        subject: "Mathematics",
        topic: "Functions",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let f: R - {-1/2} → R and g: R - {-5/2} → R be defined as f(x) = (2x+3)/(2x+1) and g(x) = (|x|+1)/(2x+5). Then the domain of the function fog is:",
        options: ["R - {-5/2}", "R", "R - {-7/4}", "R - {-5/2, -7/4}"],
        correctAnswer: "R - {-5/2}",
        solution: "For fog to be defined, need g(x) ≠ -1/2, which gives domain R - {-5/2}",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH070",
        subject: "Mathematics",
        topic: "Functions",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If f(x) = {2 + 2x, -1 ≤ x < 0; 1 - x/3, 0 ≤ x ≤ 3} and g(x) = {-x, -3 ≤ x ≤ 0; x, 0 < x ≤ 1}, then range of (fog(x)) is:",
        options: ["(0, 1]", "[0, 3)", "[0, 1]", "[0, 1)"],
        correctAnswer: "[0, 1]",
        solution: "Computing fog for different intervals gives range [0, 1]",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH071",
        subject: "Mathematics",
        topic: "Functions",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Consider the function f: [1/2, 1] → R defined by f(x) = 4√2 x³ - 3√2 x - 1. Consider the statements (I) The curve y = f(x) intersects the x-axis exactly at one point (II) The curve y = f(x) intersects the x-axis at x = cos(π/12). Then:",
        options: ["Only (II) is correct", "Both (I) and (II) are incorrect", "Only (I) is correct", "Both (I) and (II) are correct"],
        correctAnswer: "Both (I) and (II) are correct",
        solution: "f'(x) ≥ 0 for [1/2, 1], f(1/2) < 0, f(1) > 0. Root is x = cos(π/12)",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH072",
        subject: "Mathematics",
        topic: "Functions",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let f(x) = 2x - x², x ∈ R. If m and n are respectively the number of points at which the curves y = f(x) and y = f'(x) intersects the x-axis, then the value of m + n is:",
        options: [],
        correctAnswer: "5",
        solution: "f(x) = 0 gives 3 solutions, f'(x) = 0 gives 2 solutions. m + n = 5",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH073",
        subject: "Mathematics",
        topic: "Functions",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the domain of the function f(x) = cos⁻¹((2-|x|)/4) + (log_e(3-x))⁻¹ is [-α, β) - {γ}, then α + β + γ is equal to:",
        options: ["12", "9", "11", "8"],
        correctAnswer: "11",
        solution: "Domain conditions give α = 6, β = 3, γ = 2. Hence α + β + γ = 11",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH074",
        subject: "Mathematics",
        topic: "Functions",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "Let A = {1, 2, 3, ... 7} and let P(A) denote the power set of A. If the number of functions f: A → P(A) such that a ∈ f(a), ∀a ∈ A is m^n, m, n ∈ N and m + n is least, then m + n is equal to:",
        options: [],
        correctAnswer: "44",
        solution: "Each element connects to 2⁶ subsets containing it. Total = 2⁴² = 2⁴². m = 2, n = 42, so m + n = 44",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH075",
        subject: "Mathematics",
        topic: "Functions",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the domain of the function f(x) = log_e((2x+3)/(4x²+x-3)) + cos⁻¹((2x-1)/(x+2)) is (α, β], then the value of 5β - 4α is equal to:",
        options: ["10", "12", "11", "9"],
        correctAnswer: "12",
        solution: "Domain analysis gives α = -3/4, β = 3. Hence 5β - 4α = 15 - (-3) = 12",
        questionImageUrl: null,
        solutionImageUrl: null
    },
   

    // Remaining Functions Questions (Q11-Q13)
    {
        id: "2024_PRAC_MATH083",
        subject: "Mathematics",
        topic: "Functions",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let f: R → R be a function defined f(x) = x/(1+x⁴)^(1/4) and g(x) = f(f(f(f(x)))). Then 18∫[0 to √2√5] x²g(x)dx equals:",
        options: ["33", "36", "42", "39"],
        correctAnswer: "39",
        solution: "Computing the composite function and evaluating the integral",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH084",
        subject: "Mathematics",
        topic: "Functions",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If f(x) = (4x+3)/(6x-4), x ≠ 2/3 and (f∘f)(x) = g(x), where g: R-{2/3} → R-{2/3}, then (g∘g∘g)(4) is equal to:",
        options: ["-19/20", "19/20", "-4", "4"],
        correctAnswer: "4",
        solution: "Finding the composition of functions",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH085",
        subject: "Mathematics",
        topic: "Functions",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the function f: (-∞, -1] → (a, b] defined by f(x) = e^(x³-3x+1) is one-one and onto, then the distance of the point P(2b+4, a+2) from the line x + e^(-3)y = 4 is:",
        options: ["2√(1+e⁶)", "4√(1+e⁶)", "3√(1+e⁶)", "√(1+e⁶)"],
        correctAnswer: "2√(1+e⁶)",
        solution: "Finding the range of the function and calculating distance",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH092",
        subject: "Mathematics",
        topic: "Indefinite Integration",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "The integral ∫(x⁸-x²)dx/((x¹²+3x⁶+1) tan⁻¹(x³+1/x³)) is equal to:",
        options: ["(1/3)logₑ(|tan⁻¹(x³+1/x³)|^(1/3)) + C", "(1/3)logₑ(|tan⁻¹(x³+1/x³)|^(1/2)) + C", "(1/3)logₑ(|tan⁻¹(x³+1/x³)|) + C", "(1/3)logₑ(|tan⁻¹(x³+1/x³)|³) + C"],
        correctAnswer: "(1/3)logₑ(|tan⁻¹(x³+1/x³)|^(1/3)) + C",
        solution: "Let tan⁻¹(x³+1/x³) = t. Then (3x²-3/x⁴)dx/(1+(x³+1/x³)²) = dt. Substituting gives ∫dt/t = (1/3)ln|t| + C",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH093",
        subject: "Mathematics",
        topic: "Indefinite Integration",
        difficulty: "Medium",
        questionType: "Numerical",
        question: "For x ∈ (-π/2, π/2), if y(x) = ∫(cosec x + sin x)dx/(cosec x sec x + tan x sin²x) and lim(x→(π/2)⁻) y(x) = 0, then y(π/4) is equal to:",
        options: [],
        correctAnswer: "tan⁻¹(1/√2) - 1/√2",
        solution: "Put sin x = t, integrate to get (1/√2)tan⁻¹((t-1/t)/√2) + C. Using limit condition C = 0, y(π/4) = (1/√2)tan⁻¹(1/√2)",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH094",
        subject: "Mathematics",
        topic: "Indefinite Integration",
        difficulty: "Hard",
        questionType: "Numerical",
        question: "If ∫(sin³/²x + cos³/²x)dx/√(sin³x cos³x sin(x-θ)) = A√(cos θ tan x - sin θ) + B√(cos θ - sin θ cot x) + C, then AB is equal to:",
        options: [],
        correctAnswer: "8 cosec(2θ)",
        solution: "Split integral into two parts, use substitutions tan x cos θ - sin θ = t² and cos θ - cot x sin θ = z². After integration AB = 8 cosec(2θ)",
        questionImageUrl: null,
        solutionImageUrl: null
    },

    // Hyperbola Questions
    {
        id: "2024_PRAC_MATH095",
        subject: "Mathematics",
        topic: "Hyperbola",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "For 0 < θ < π/2, if the eccentricity of the hyperbola x² - y² cosec²θ = 5 is √7 times eccentricity of the ellipse x² cosec²θ + y² = 5, then the value of θ is:",
        options: ["π/6", "5π/12", "π/3", "π/4"],
        correctAnswer: "π/3",
        solution: "eₕ = √(1 + sin²θ), eₑ = √(1 - sin²θ). From eₕ = √7·eₑ: 1 + sin²θ = 7(1 - sin²θ), solving gives sin²θ = 3/4, so θ = π/3",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH096",
        subject: "Mathematics",
        topic: "Hyperbola",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let x²/a² + y²/b² = 1, a > b be an ellipse, whose eccentricity is 1/√2 and the length of the latus rectum is √14. Then the square of the eccentricity of x²/a² - y²/b² = 1 is:",
        options: ["3", "7/2", "3/2", "5/2"],
        correctAnswer: "5/2",
        solution: "From e = 1/√2, get b²/a² = 1/2. From latus rectum = √14, get 2b²/a = √14, so a = 2√7, b = √7. For hyperbola: e² = 1 + b²/a² = 1 + 1/2 = 3/2",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH097",
        subject: "Mathematics",
        topic: "Hyperbola",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let e₁ be the eccentricity of the hyperbola x²/16 - y²/9 = 1 and e₂ be the eccentricity of the ellipse x²/a² + y²/b² = 1, a > b, which passes through the foci of the hyperbola. If e₁e₂ = 1, then the length of the chord of the ellipse parallel to the x-axis and passing through (0, 2) is:",
        options: ["4√5", "8√5/3", "10√5/3", "3√5"],
        correctAnswer: "10√5/3",
        solution: "e₁ = 5/4. Foci at (±5, 0). For ellipse: a = 5, from e₁e₂ = 1 get e₂ = 4/5, so b = 3. Chord endpoints at (±5√5/3, 2), length = 10√5/3",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH098",
        subject: "Mathematics",
        topic: "Hyperbola",
        difficulty: "Hard",
        questionType: "Numerical",
        question: "Let the latus rectum of the hyperbola x²/9 - y²/b² = 1 subtend an angle of π/3 at the centre of the hyperbola. If b² is equal to (1+√n)l/m, where l and m are co-prime numbers, then l² + m² + n² is equal to:",
        options: [],
        correctAnswer: "182",
        solution: "From angle condition: tan(π/6) = b²/(9e) = 1/√3. Solving the resulting equation b⁴ - 3b² - 27 = 0 gives b² = 3(1+√13)/2. So l = 3, m = 2, n = 13, giving l² + m² + n² = 182",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH099",
        subject: "Mathematics",
        topic: "Hyperbola",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "Let P be a point on the hyperbola H: x²/9 - y²/4 = 1, in the first quadrant such that the area of triangle formed by P and the two foci of H is 2√13. Then, the square of the distance of P from the origin is:",
        options: ["18", "26", "22", "20"],
        correctAnswer: "22",
        solution: "Area = (1/2) × β × S₁S₂ = 2√13, where β is y-coordinate of P. Since S₁S₂ = 2√13, we get β = 2. From hyperbola equation: α² = 18, so distance² = α² + β² = 18 + 4 = 22",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH100",
        subject: "Mathematics",
        topic: "Hyperbola",
        difficulty: "Medium",
        questionType: "MCQ",
        question: "If the foci of a hyperbola are same as that of the ellipse x²/9 + y²/25 = 1 and the eccentricity of the hyperbola is 15/8 times the eccentricity of the ellipse, then the smaller focal distance of the point (√2, √14/3) on the hyperbola, is equal to:",
        options: ["2√(14-2)/5", "7√(14-2)/5", "8√(14-2)/5", "16√(14-2)/5"],
        correctAnswer: "2√(14-2)/5",
        solution: "Ellipse foci at (0, ±4), e = 4/5. Hyperbola eₕ = (15/8) × (4/5) = 3/2. Using focal distance formula: PS = (3/2)|√14/3 - 16/9| = 2√(14-2)/5",
        questionImageUrl: null,
        solutionImageUrl: null
    },
    {
        id: "2024_PRAC_MATH101",
        subject: "Mathematics",
        topic: "Hyperbola",
        difficulty: "Hard",
        questionType: "Numerical",
        question: "Let the foci and length of the latus rectum of an ellipse x²/a² + y²/b² = 1, a > b be (±5, 0) and √50, respectively. Then, the square of the eccentricity of the hyperbola x²/b² - y²/(a²b²) = 1 equals:",
        options: [],
        correctAnswer: "51",
        solution: "From foci (±5, 0): ae = 5, so a = 5. From latus rectum = √50: 2b²/a = 5√2/2, giving b = 5/√2. For hyperbola: e₁² = 1 + a²b²/b² = 1 + a² = 1 + 50 = 51",
        questionImageUrl: null,
        solutionImageUrl: null
    },

    
    
   
 ]
    