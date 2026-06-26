import {
  mockUsers,
  mockExams,
  mockAttempts,
  mockCertificates,
  mockOrgStats,
  mockOrgInstructors,
  mockOrgStudents,
  mockOrgSubscription,
  mockAdminStats,
  mockAdminUsers,
  mockNotifications,
  mockQuestions,
  mockAiReports,
  mockCheatAnalysis,
  mockPlagiarismReport
} from '../data/mockData';

// Standalone Mock API Client replacing Axios for Raven ACE Demo
// Simulates network requests instantly using static local mock data.

const api = {
  defaults: {
    baseURL: 'http://localhost:5000/api',
  },
  interceptors: {
    request: { use: () => {} },
    response: { use: () => {} },
  },

  get: async (url, config) => {
    console.log(`[Mock API] GET ${url}`);
    
    // Auth & Users
    if (url.includes('/users/me')) return { data: { data: { user: mockUsers.student } } };

    // Organization
    if (url.includes('/organization/dashboard')) return { data: { data: mockOrgStats } };
    if (url.includes('/organization/instructors')) return { data: { data: { instructors: mockOrgInstructors } } };
    if (url.includes('/organization/students')) return { data: { data: { students: mockOrgStudents } } };
    if (url.includes('/organization/subscription')) return { data: { data: mockOrgSubscription } };
    if (url.includes('/organization/profile')) return { data: { data: { name: 'Acme University', logo: '/logo.png' } } };

    // Admin
    if (url.includes('/admin/dashboard')) return { data: { data: mockAdminStats } };
    if (url.includes('/admin/users')) return { data: { data: { users: mockAdminUsers } } };
    if (url.includes('/admin/exams')) return { data: { data: { exams: mockExams } } };

    // Notifications
    if (url.includes('/notifications')) return { data: { unreadCount: 1, data: { notifications: mockNotifications } } };

    // Certificates
    if (url.includes('/certificates/mine')) return { data: { data: { certificates: mockCertificates } } };
    if (url.includes('/certificates/verify') || url.includes('/verify')) {
      const certId = url.split('/').pop();
      const cert = mockCertificates.find(c => c.certId === certId) || mockCertificates[0];
      return { data: { data: { certificate: cert } } };
    }

    // Attempts & Results
    if (url.includes('/attempts/history')) return { data: { data: { attempts: mockAttempts } } };
    if (url.includes('/attempts/') || url.includes('/results/')) {
      const id = url.split('/').pop();
      const attempt = mockAttempts.find(a => a._id === id) || mockAttempts[0];
      return { data: { data: { attempt } } };
    }

    // AI Features
    if (url.includes('/ai/report')) {
      const id = url.split('/').pop();
      return { data: { data: mockAiReports[id] || mockAiReports['attempt-1'] } };
    }
    if (url.includes('/ai/cheat-analysis') || url.includes('/cheat-analysis')) {
      const id = url.split('/').pop();
      return { data: { data: mockCheatAnalysis[id] || mockCheatAnalysis['attempt-1'] } };
    }
    if (url.includes('/ai/plagiarism') || url.includes('/plagiarism')) {
      return { data: { data: mockPlagiarismReport } };
    }

    // Instructor exams/questions/stats
    if (url.includes('/results')) return { data: { data: { attempts: mockAttempts } } };
    if (url.includes('/stats')) return { data: { data: { totalAttempts: 15, passedAttempts: 12, averageScore: 88, passRate: 80 } } };
    if (url.includes('/questions')) {
      const examId = url.split('/')[2];
      return { data: { data: { questions: mockQuestions[examId] || mockQuestions['exam-1'] } } };
    }

    // Exams (General)
    if (url.includes('/exams/')) {
      const id = url.split('/').pop();
      const exam = mockExams.find(e => e._id === id) || mockExams[0];
      return { data: { data: { exam } } };
    }
    if (url.includes('/exams')) return { data: { data: { exams: mockExams } } };

    // Default fallback
    return { data: { data: {} } };
  },

  post: async (url, data, config) => {
    console.log(`[Mock API] POST ${url}`, data);
    if (url.includes('/auth/login') || url.includes('/auth/register')) {
      return { data: { data: { user: mockUsers.student, token: 'mock-jwt-token' } } };
    }
    if (url.includes('/attempt') || url.includes('/exams/')) {
      return {
        data: {
          data: {
            attempt: {
              _id: 'attempt-new',
              exam: mockExams[0],
              answers: [],
              status: 'in-progress',
              startedAt: new Date().toISOString()
            }
          }
        }
      };
    }
    if (url.includes('/submit') || url.includes('/attempts/')) {
      return { data: { data: { attempt: mockAttempts[0] } } };
    }
    if (url.includes('/generate')) {
      return {
        data: {
          data: {
            questions: [
              { text: 'Which hook manages state in functional components?', options: ['useState', 'useEffect', 'useContext', 'useRef'], correctOption: 0, marks: 20 },
              { text: 'What is virtual DOM in React?', options: ['A direct copy of actual DOM', 'A lightweight JavaScript representation of DOM', 'A browser plugin', 'A database table'], correctOption: 1, marks: 20 }
            ]
          }
        }
      };
    }
    return { data: { data: { success: true } } };
  },

  put: async (url, data, config) => {
    console.log(`[Mock API] PUT ${url}`, data);
    return { data: { data: { success: true, isPublished: true } } };
  },

  patch: async (url, data, config) => {
    console.log(`[Mock API] PATCH ${url}`, data);
    return { data: { data: { success: true, isPublished: true } } };
  },

  delete: async (url, config) => {
    console.log(`[Mock API] DELETE ${url}`);
    return { data: { data: { success: true } } };
  },
};

export default api;
