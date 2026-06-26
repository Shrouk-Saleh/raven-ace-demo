import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

function Landing() {
  const { user, switchRole } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('student');
  const [faqOpen, setFaqOpen] = useState(null);

  const handleRoleLaunch = (roleKey) => {
    switchRole(roleKey);
    const target =
      roleKey === 'instructor' ? '/instructor' :
      roleKey === 'organization' ? '/organization' :
      roleKey === 'admin' ? '/admin' :
      '/dashboard';
    navigate(target);
  };

  const faqs = [
    { q: 'Is this demo fully interactive?', a: 'Yes! You can switch between Student, Instructor, Organization, and Admin roles to explore every dashboard, simulate taking exams, view AI tutor reports, and check generated certificates.' },
    { q: 'What makes Raven ACE different from other exam platforms?', a: 'Raven ACE integrates real-time browser proctoring, instant AI tutoring feedback, automatic plagiarism detection, and verified certificate generation in one seamless, modern SaaS experience.' },
    { q: 'How does the AI Tutor work?', a: 'Upon completing an exam, our AI engine analyzes your answers, identifies knowledge gaps, highlights strengths, and generates tailored study recommendations instantly.' },
    { q: 'Can organizations customize their branding?', a: 'Yes! Organization administrators can upload custom logos and modify institutional profiles so all student certificates inherit official branding and verified QR codes.' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 flex flex-col font-sans select-none overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 px-6 overflow-hidden">
        {/* Glowing Background Gradients */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-40 left-1/4 w-[500px] h-[300px] bg-purple-600/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 mb-8 animate-[fadeIn_0.5s_ease-out]">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Next-Gen Proctored Assessment Platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.1] mb-8">
            Elevate Online Exams with <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Anti-Cheat Integrity & Tutoring
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Experience the ultimate modern exam platform. Rigorous anti-cheat proctoring meets performance diagnostics, empowering institutions, instructors, and students alike.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button
              onClick={() => handleRoleLaunch('student')}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-2xl shadow-xl hover:shadow-blue-600/40 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              Launch Student Demo
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button
              onClick={() => handleRoleLaunch('instructor')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-bold text-base rounded-2xl hover:bg-slate-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Explore Instructor Dashboard
              <span className="material-symbols-outlined text-[20px]">psychology</span>
            </button>
          </div>

          {/* Feature Highlight Tabs Carousel */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl max-w-5xl mx-auto text-left">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white">Interactive Persona Showcase</h3>
                <p className="text-sm text-slate-400">Select a persona to preview their dedicated command center</p>
              </div>
              <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
                {[
                  { key: 'student', label: 'Student View', icon: 'school' },
                  { key: 'instructor', label: 'Instructor View', icon: 'draw' },
                  { key: 'org', label: 'Org View', icon: 'domain' },
                  { key: 'admin', label: 'Admin View', icon: 'admin_panel_settings' }
                ].map(t => (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === t.key ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}
                  >
                    <span className="material-symbols-outlined text-[16px]">{t.icon}</span>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Persona Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {activeTab === 'student' && (
                <>
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <span className="material-symbols-outlined text-[26px]">school</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white">Frictionless Exams & AI Tutoring</h4>
                    <p className="text-slate-300 text-base leading-relaxed">
                      Students gain access to an elegant dashboard displaying available tests, real-time proctored environments, instant AI score breakdowns, and downloadable verified certificates.
                    </p>
                    <ul className="space-y-3 text-sm text-slate-300 font-medium">
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-400 text-[18px]">check_circle</span> Live anti-cheat AI monitoring</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-400 text-[18px]">check_circle</span> Personalized AI Tutor strengths/weaknesses summary</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-400 text-[18px]">check_circle</span> Instant PDF Certificate Generation with QR code</li>
                    </ul>
                    <button onClick={() => handleRoleLaunch('student')} className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl shadow-lg transition-all">
                      Open Student Portal <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </button>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-inner space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Available Exams Preview</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[11px] font-bold">Live</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-sm text-white">Python Core Essentials</p>
                        <p className="text-xs text-slate-400 mt-0.5">45 mins · 100 max score · Development</p>
                      </div>
                      <span className="px-3 py-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold">Start Exam</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-sm text-white">React Lifecycle & Hooks</p>
                        <p className="text-xs text-slate-400 mt-0.5">30 mins · 100 max score · Frontend</p>
                      </div>
                      <span className="px-3 py-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold">Start Exam</span>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 flex items-center gap-3">
                      <span className="material-symbols-outlined text-blue-400 text-[28px]">psychology</span>
                      <div>
                        <p className="text-xs font-bold text-blue-300">AI Tutor Ready</p>
                        <p className="text-[11px] text-blue-200/70">Completed attempts receive automated breakdown</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'instructor' && (
                <>
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <span className="material-symbols-outlined text-[26px]">draw</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white">Powerful Creation & Anti-Cheat Insights</h4>
                    <p className="text-slate-300 text-base leading-relaxed">
                      Instructors wield an intuitive suite to generate questions via AI, manage question banks, review suspicious attempt flags, and inspect comprehensive grading stats.
                    </p>
                    <ul className="space-y-3 text-sm text-slate-300 font-medium">
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-purple-400 text-[18px]">check_circle</span> Automated AI Question Generator</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-purple-400 text-[18px]">check_circle</span> Deep Cheat Analysis (Tab switches, copy-paste flags)</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-purple-400 text-[18px]">check_circle</span> Global Plagiarism matching reports</li>
                    </ul>
                    <button onClick={() => handleRoleLaunch('instructor')} className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm rounded-xl shadow-lg transition-all">
                      Open Instructor Portal <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </button>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-inner space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Cheat Analysis & Stats</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-[11px] font-bold">Proctoring</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-sm text-white">John Doe · Python Core</p>
                        <p className="text-xs text-slate-400 mt-0.5">Score: 88% · Status: Completed</p>
                      </div>
                      <span className="px-2.5 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs font-bold">98% Clean</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-sm text-white">Emma Watson · React Hooks</p>
                        <p className="text-xs text-slate-400 mt-0.5">Score: 95% · Status: Completed</p>
                      </div>
                      <span className="px-2.5 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs font-bold">99% Clean</span>
                    </div>
                    <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 flex items-center gap-3">
                      <span className="material-symbols-outlined text-purple-400 text-[28px]">auto_awesome</span>
                      <div>
                        <p className="text-xs font-bold text-purple-300">AI Question Generator</p>
                        <p className="text-[11px] text-purple-200/70">Create complete exams in seconds with AI</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'org' && (
                <>
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <span className="material-symbols-outlined text-[26px]">domain</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white">Complete Institutional Oversight</h4>
                    <p className="text-slate-300 text-base leading-relaxed">
                      Organizations manage instructors, invite students, customize brand assets (logo), and track overall institutional attempts and subscription caps.
                    </p>
                    <ul className="space-y-3 text-sm text-slate-300 font-medium">
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span> Global metrics (Attempts, passing rates, students)</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span> Institutional Branding for verified certificates</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-400 text-[18px]">check_circle</span> Subscription & limit tracking</li>
                    </ul>
                    <button onClick={() => handleRoleLaunch('organization')} className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-lg transition-all">
                      Open Organization Portal <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </button>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-inner space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                        <span className="text-xs text-slate-400">Total Students</span>
                        <h4 className="text-2xl font-bold text-white mt-1">150</h4>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                        <span className="text-xs text-slate-400">Certificates Issued</span>
                        <h4 className="text-2xl font-bold text-white mt-1">45</h4>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex items-center gap-3">
                      <span className="material-symbols-outlined text-emerald-400 text-[28px]">workspace_premium</span>
                      <div>
                        <p className="text-xs font-bold text-emerald-300">Custom Brand Verified</p>
                        <p className="text-[11px] text-emerald-200/70">Acme University branding enabled on all issued PDFs</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'admin' && (
                <>
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <span className="material-symbols-outlined text-[26px]">admin_panel_settings</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white">Top-Level Platform Administration</h4>
                    <p className="text-slate-300 text-base leading-relaxed">
                      Platform admins maintain absolute visibility across all users, organizations, test data, global attempt histories, and active subscriptions.
                    </p>
                    <ul className="space-y-3 text-sm text-slate-300 font-medium">
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-amber-400 text-[18px]">check_circle</span> Sitewide user role management</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-amber-400 text-[18px]">check_circle</span> Complete audit log of published exams</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-amber-400 text-[18px]">check_circle</span> System performance overview</li>
                    </ul>
                    <button onClick={() => handleRoleLaunch('admin')} className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm rounded-xl shadow-lg transition-all">
                      Open System Admin Portal <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </button>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-inner space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                        <span className="text-xs text-slate-400">Platform Users</span>
                        <h4 className="text-2xl font-bold text-white mt-1">165</h4>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                        <span className="text-xs text-slate-400">Total Exams</span>
                        <h4 className="text-2xl font-bold text-white mt-1">24</h4>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/40 flex items-center gap-3">
                      <span className="material-symbols-outlined text-amber-400 text-[28px]">shield</span>
                      <div>
                        <p className="text-xs font-bold text-amber-300">Maximum Security Access</p>
                        <p className="text-[11px] text-amber-200/70">Top-level sitewide configuration unlocked</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Quick Feature Cards Section */}
      <section className="py-24 bg-slate-950/60 border-y border-slate-800 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Why Top Institutions Choose Raven ACE</h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">Discover the state-of-the-art tools built to modernize testing and preserve integrity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Anti-Cheat Monitoring', desc: 'Tab tracking, copy-paste prevention, and window focus analysis safeguard exam integrity without intrusive hardware installs.', icon: 'screen_search_desktop', color: 'text-blue-400', bg: 'bg-blue-600/20 border-blue-500/30' },
              { title: 'Automated Tutoring', desc: 'Students receive instant strengths and improvement summaries upon completion, transforming testing from a simple grade into an active learning tool.', icon: 'psychology', color: 'text-purple-400', bg: 'bg-purple-600/20 border-purple-500/30' },
              { title: 'Beautiful Verified Certificates', desc: 'Auto-generate high-fidelity printable PDF certificates embedded with secure, verifiable QR codes and custom organizational branding.', icon: 'workspace_premium', color: 'text-amber-400', bg: 'bg-amber-600/20 border-amber-500/30' },
              { title: 'Global Plagiarism Scanning', desc: 'Advanced comparative code and text algorithms evaluate entire attempt pools for suspicious structural and timing similarities.', icon: 'plagiarism', color: 'text-emerald-400', bg: 'bg-emerald-600/20 border-emerald-500/30' },
              { title: 'AI Question Generation', desc: 'Instructors can build massive question banks instantly by providing topics, allowing AI to draft challenging multiple-choice variations.', icon: 'auto_awesome', color: 'text-indigo-400', bg: 'bg-indigo-600/20 border-indigo-500/30' },
              { title: 'Role-Based Dashboards', desc: 'Intuitive tailored command centers for Students, Instructors, Organization Leads, and Platform Administrators in one elegant application.', icon: 'dashboard', color: 'text-rose-400', bg: 'bg-rose-600/20 border-rose-500/30' },
            ].map((f, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${f.bg} border flex items-center justify-center mb-6`}>
                    <span className={`material-symbols-outlined text-[28px] ${f.color}`}>{f.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-base md:text-lg">Everything you need to know about the Raven ACE interactive demo experience.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const open = faqOpen === idx;
            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all">
                <button
                  onClick={() => setFaqOpen(open ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-white hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-base md:text-lg">{faq.q}</span>
                  <span className="material-symbols-outlined text-slate-400">{open ? 'remove' : 'add'}</span>
                </button>
                {open && (
                  <div className="px-6 pb-6 text-slate-300 text-sm md:text-base leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-t from-slate-950 via-slate-900 to-[#0a0f1d] border-t border-slate-800 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Ready to Experience Raven ACE?</h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Jump directly into our standalone interactive demo. Switch roles on the fly and explore every advanced dashboard feature instantly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleRoleLaunch('student')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-2xl shadow-xl hover:shadow-blue-600/40 transition-all active:scale-[0.98] flex items-center gap-2"
            >
              Start Student Demo <span className="material-symbols-outlined text-[20px]">school</span>
            </button>
            <Link
              to="/about"
              className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-bold text-base rounded-2xl hover:bg-slate-800 transition-all active:scale-[0.98]"
            >
              Read Architecture Deep-Dive
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-slate-950 border-t border-slate-800 py-12 px-6 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="./logo.png" alt="Logo" className="w-8 h-8 object-contain" />
            <span className="text-slate-300 font-bold text-base">Raven ACE</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-slate-400 font-medium">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/features" className="hover:text-white transition-colors">Features</Link>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link to="/analytics" className="hover:text-white transition-colors">Analytics</Link>
          </div>
          <p className="text-xs">© 2026 Raven ACE Platform. Standalone Interactive Showcase.</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
