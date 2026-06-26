// Comprehensive Static Mock Data for Raven ACE Demo

export const mockUsers = {
  student: {
    _id: 'user-student',
    name: 'John Doe',
    email: 'john@raven-ace.edu',
    role: 'student',
    profilePhoto: '/logo.png',
  },
  instructor: {
    _id: 'user-instructor',
    name: 'Dr. Alice Vance',
    email: 'alice@raven-ace.edu',
    role: 'instructor',
    profilePhoto: '/logo.png',
  },
  organization: {
    _id: 'user-org',
    name: 'Acme University',
    email: 'admin@acme.edu',
    role: 'organization',
    profilePhoto: '/logo.png',
    logo: '/logo.png',
  },
  admin: {
    _id: 'user-admin',
    name: 'System Admin',
    email: 'sysadmin@raven-ace.edu',
    role: 'admin',
    profilePhoto: '/logo.png',
  }
};

export const mockQuestions = {
  'exam-1': [
    { _id: 'q1', text: 'What is the correct file extension for Python files?', options: ['.py', '.python', '.pyt', '.pt'], correctOption: 0, marks: 20 },
    { _id: 'q2', text: 'Which collection is ordered, changeable, and allows duplicate members in Python?', options: ['Set', 'Dictionary', 'List', 'Tuple'], correctOption: 2, marks: 20 },
    { _id: 'q3', text: 'How do you insert comments in Python code?', options: ['// comment', '# comment', '/* comment */', '<!-- comment -->'], correctOption: 1, marks: 20 },
    { _id: 'q4', text: 'Which keyword is used to create a function in Python?', options: ['function', 'def', 'fun', 'create'], correctOption: 1, marks: 20 },
    { _id: 'q5', text: 'What is the output of print(2 ** 3)?', options: ['5', '6', '8', '9'], correctOption: 2, marks: 20 },
  ],
  'exam-2': [
    { _id: 'q6', text: 'Which hook is used for side effects in React functional components?', options: ['useState', 'useEffect', 'useMemo', 'useRef'], correctOption: 1, marks: 20 },
    { _id: 'q7', text: 'How do you pass data from a parent component to a child component?', options: ['Using State', 'Using Redux', 'Using Props', 'Using Context'], correctOption: 2, marks: 20 },
    { _id: 'q8', text: 'What does JSX stand for?', options: ['JavaScript XML', 'Java Syntax Extension', 'JSON Xpress', 'JavaScript Syntax'], correctOption: 0, marks: 20 },
    { _id: 'q9', text: 'Which method in a React class component is required?', options: ['componentDidMount', 'render', 'getInitialState', 'constructor'], correctOption: 1, marks: 20 },
    { _id: 'q10', text: 'How can you optimize performance for a function component that renders identical content given the same props?', options: ['React.memo', 'useMemo', 'useCallback', 'All of the above'], correctOption: 3, marks: 20 },
  ],
  'exam-3': [
    { _id: 'q11', text: 'Which SQL statement is used to extract data from a database?', options: ['EXTRACT', 'OPEN', 'SELECT', 'GET'], correctOption: 2, marks: 20 },
    { _id: 'q12', text: 'Which clause is used to filter records?', options: ['WHERE', 'FILTER', 'HAVING', 'LIKE'], correctOption: 0, marks: 20 },
    { _id: 'q13', text: 'What does ACID stand for in database transactions?', options: ['Atomicity, Consistency, Isolation, Durability', 'Automatic, Continuous, Instant, Dynamic', 'Array, Character, Integer, Double', 'Association, Connection, Integration, Deletion'], correctOption: 0, marks: 20 },
    { _id: 'q14', text: 'Which join returns all records from the left table, and the matched records from the right table?', options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN'], correctOption: 1, marks: 20 },
    { _id: 'q15', text: 'What is a primary key?', options: ['A unique identifier for each record in a table', 'A key used to encrypt data', 'A foreign key from another database', 'A table column that allows nulls'], correctOption: 0, marks: 20 },
  ],
  'exam-4': [
    { _id: 'q16', text: 'What is supervised learning?', options: ['Training on labeled data', 'Training on unlabeled data', 'Training via rewards', 'Clustering data'], correctOption: 0, marks: 25 },
    { _id: 'q17', text: 'Which algorithm is used for binary classification?', options: ['Linear Regression', 'K-Means', 'Logistic Regression', 'PCA'], correctOption: 2, marks: 25 },
    { _id: 'q18', text: 'What is overfitting in machine learning?', options: ['Model performs well on training data but poorly on unseen data', 'Model performs poorly on both', 'Model trains too fast', 'Model uses too little data'], correctOption: 0, marks: 25 },
    { _id: 'q19', text: 'Which library is widely used for deep learning in Python?', options: ['Matplotlib', 'Seaborn', 'PyTorch', 'BeautifulSoup'], correctOption: 2, marks: 25 },
  ]
};

export const mockExams = [
  {
    _id: 'exam-1',
    title: 'Python Core Essentials',
    description: 'Comprehensive certification test on Python fundamentals, data structures, and algorithms.',
    category: 'Development',
    duration: 45,
    passingScore: 70,
    totalScore: 100,
    isPublished: true,
    questions: mockQuestions['exam-1'],
    instructor: mockUsers.instructor,
    createdAt: '2026-05-10T10:00:00.000Z',
  },
  {
    _id: 'exam-2',
    title: 'React Lifecycle & Hooks',
    description: 'Advanced certification test for React developers covering state, effects, performance, and architecture.',
    category: 'Frontend',
    duration: 30,
    passingScore: 80,
    totalScore: 100,
    isPublished: true,
    questions: mockQuestions['exam-2'],
    instructor: mockUsers.instructor,
    createdAt: '2026-05-15T12:00:00.000Z',
  },
  {
    _id: 'exam-3',
    title: 'Database Administration SQL',
    description: 'Deep dive into SQL query optimization, transactions, ACID properties, and index management.',
    category: 'Data Science',
    duration: 60,
    passingScore: 75,
    totalScore: 100,
    isPublished: true,
    questions: mockQuestions['exam-3'],
    instructor: mockUsers.instructor,
    createdAt: '2026-05-20T14:00:00.000Z',
  },
  {
    _id: 'exam-4',
    title: 'Machine Learning Fundamentals',
    description: 'Master supervised/unsupervised learning, model evaluation metrics, and neural network basics.',
    category: 'AI & Data',
    duration: 90,
    passingScore: 70,
    totalScore: 100,
    isPublished: false,
    questions: mockQuestions['exam-4'],
    instructor: mockUsers.instructor,
    createdAt: '2026-06-01T09:00:00.000Z',
  }
];

export const mockAttempts = [
  {
    _id: 'attempt-1',
    exam: mockExams[0],
    user: mockUsers.student,
    score: 88,
    passed: true,
    status: 'completed',
    attemptNumber: 1,
    answers: [0, 2, 1, 1, 2],
    startedAt: '2026-06-10T14:00:00.000Z',
    completedAt: '2026-06-10T14:38:00.000Z',
  },
  {
    _id: 'attempt-2',
    exam: mockExams[1],
    user: mockUsers.student,
    score: 95,
    passed: true,
    status: 'completed',
    attemptNumber: 1,
    answers: [1, 2, 0, 1, 3],
    startedAt: '2026-06-15T10:00:00.000Z',
    completedAt: '2026-06-15T10:25:00.000Z',
  }
];

export const mockCertificates = [
  {
    _id: 'cert-1',
    certId: 'CERT-PYTHON-2026',
    exam: mockExams[0],
    student: mockUsers.student,
    score: 88,
    issuedAt: '2026-06-10T14:38:00.000Z',
    organization: { name: 'Acme University', logo: '/logo.png' }
  },
  {
    _id: 'cert-2',
    certId: 'CERT-REACT-2026',
    exam: mockExams[1],
    student: mockUsers.student,
    score: 95,
    issuedAt: '2026-06-15T10:25:00.000Z',
    organization: { name: 'Acme University', logo: '/logo.png' }
  }
];

export const mockOrgStats = {
  totalInstructors: 12,
  totalStudents: 150,
  totalCertificatesIssued: 45,
  totalAttempts: 320,
};

export const mockOrgInstructors = [
  { _id: 'inst-1', name: 'Dr. Alice Vance', email: 'alice@raven-ace.edu', status: 'Active', examsCount: 4 },
  { _id: 'inst-2', name: 'Prof. Marcus Brody', email: 'marcus@raven-ace.edu', status: 'Active', examsCount: 2 },
  { _id: 'inst-3', name: 'Dr. Robert Chen', email: 'robert@raven-ace.edu', status: 'Active', examsCount: 3 },
];

export const mockOrgStudents = [
  { _id: 'stud-1', name: 'John Doe', email: 'john@raven-ace.edu', status: 'Active', certsCount: 2, passedCount: 2 },
  { _id: 'stud-2', name: 'Emma Watson', email: 'emma@raven-ace.edu', status: 'Active', certsCount: 1, passedCount: 1 },
  { _id: 'stud-3', name: 'David Beckham', email: 'david@raven-ace.edu', status: 'Active', certsCount: 3, passedCount: 3 },
];

export const mockOrgSubscription = {
  plan: 'Premium Institution',
  status: 'Active',
  billingCycle: 'Annual',
  maxStudents: 500,
  maxInstructors: 50,
  autoRenew: true,
};

export const mockAdminStats = {
  totalUsers: 165,
  totalExams: 24,
  totalAttempts: 410,
  totalCertificates: 89,
};

export const mockAdminUsers = [
  mockUsers.student,
  mockUsers.instructor,
  mockUsers.organization,
  mockUsers.admin,
  { _id: 'user-5', name: 'Emma Watson', email: 'emma@raven-ace.edu', role: 'student' },
  { _id: 'user-6', name: 'Prof. Marcus Brody', email: 'marcus@raven-ace.edu', role: 'instructor' },
];

export const mockNotifications = [
  { _id: 'notif-1', message: '🎉 You have been awarded the certificate for Python Core Essentials!', createdAt: '2026-06-10T14:38:00.000Z', read: true },
  { _id: 'notif-2', message: '🎉 You have been awarded the certificate for React Lifecycle & Hooks!', createdAt: '2026-06-15T10:25:00.000Z', read: true },
  { _id: 'notif-3', message: '🚀 New Exam Published: Database Administration SQL is now available.', createdAt: '2026-06-20T14:00:00.000Z', read: false },
];

export const mockAiReports = {
  'attempt-1': {
    summary: 'Excellent performance on Python basics! You showed a strong grasp of data structures and function definitions.',
    strengths: ['Understanding of list vs tuple mutability', 'Proper syntax for function definitions', 'Arithmetic operators and exponentiation'],
    improvements: ['Review edge cases in dictionary comprehension', 'Look into generators for memory efficiency'],
    recommendations: ['Take the Advanced Python Architecture exam next', 'Practice building custom decorators']
  },
  'attempt-2': {
    summary: 'Flawless execution on React Hooks and Lifecycle! Your understanding of component side effects and re-renders is top tier.',
    strengths: ['useEffect cleanup mechanism', 'Context API vs Props passing', 'Component memoization strategies'],
    improvements: ['Explore custom hooks for fetching logic encapsulation'],
    recommendations: ['Build a custom state management tool using useReducer and Context', 'Explore React Server Components']
  }
};

export const mockCheatAnalysis = {
  'attempt-1': {
    confidenceScore: 98,
    status: 'Clean',
    events: [
      { type: 'Tab Switch', time: '14:15:22', details: 'User switched tab for 2 seconds. Returned immediately.' }
    ],
    summary: 'No suspicious behavior detected. Mouse tracking and focus remained stable throughout the exam.'
  },
  'attempt-2': {
    confidenceScore: 99,
    status: 'Clean',
    events: [],
    summary: 'Flawless proctored session. All checks passed with maximum integrity.'
  }
};

export const mockPlagiarismReport = {
  examId: 'exam-1',
  overallSimilarity: 12,
  flaggedPairs: [
    { student1: 'David Lee', student2: 'Mark Vance', similarity: 45, reason: 'High structural match in code snippets for Q4.' }
  ],
  summary: 'Overall integrity is extremely high. 98% of submissions exhibit unique typing cadences and distinct problem-solving approaches.'
};
