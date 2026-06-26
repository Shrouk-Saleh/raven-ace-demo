import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

function Features() {
  const { switchRole } = useAuth();
  const navigate = useNavigate();

  const handleRoleLaunch = (roleKey) => {
    switchRole(roleKey);
    const target =
      roleKey === 'instructor' ? '/instructor' :
      roleKey === 'organization' ? '/organization' :
      roleKey === 'admin' ? '/admin' :
      '/dashboard';
    navigate(target);
  };

  const featureList = [
    { title: 'Anti-Cheat Exams', desc: 'Live browser proctoring tracks window focus, tab transitions, and background activity to ensure academic integrity in real-time.', icon: 'smart_toy', color: 'text-blue-400', bg: 'bg-blue-600/20 border-blue-500/30', badge: 'Live Proctoring' },
    { title: 'AI Question Bank & Gen', desc: 'Instantly generate multi-option question sets with custom score weights and correct answers using automated AI prompting.', icon: 'auto_awesome', color: 'text-purple-400', bg: 'bg-purple-600/20 border-purple-500/30', badge: 'Instructor Tool' },
    { title: 'Automatic Grading', desc: 'Zero manual grading delay. Instant score calculations, passing evaluations, and answer logs immediately upon attempt submission.', icon: 'task_alt', color: 'text-green-400', bg: 'bg-green-600/20 border-green-500/30', badge: 'Core Engine' },
    { title: 'Verified Certificate Generation', desc: 'Produce stunning landscape-oriented PDF certificates embedded with cryptographic IDs and scannable verification QR codes.', icon: 'workspace_premium', color: 'text-amber-400', bg: 'bg-amber-600/20 border-amber-500/30', badge: 'Print Ready' },
    { title: 'Organization Management', desc: 'Institutional control center for onboarding instructors, importing student rosters, and reviewing overarching performance metrics.', icon: 'domain', color: 'text-emerald-400', bg: 'bg-emerald-600/20 border-emerald-500/30', badge: 'Enterprise' },
    { title: 'Instructor Dashboard', desc: 'Complete exam publication workflow, draft management, question assignment, and deep cheat analysis auditing.', icon: 'co_present', color: 'text-indigo-400', bg: 'bg-indigo-600/20 border-indigo-500/30', badge: 'Management' },
    { title: 'Student Dashboard', desc: 'A frictionless student portal displaying available courses, upcoming examinations, recent grades, and earned credentials.', icon: 'school', color: 'text-sky-400', bg: 'bg-sky-600/20 border-sky-500/30', badge: 'Portal' },
    { title: 'Sitewide Analytics', desc: 'Visual charts and aggregate data measuring student progression, test passing rates, and active attempt volume over time.', icon: 'analytics', color: 'text-rose-400', bg: 'bg-rose-600/20 border-rose-500/30', badge: 'Insights' },
    { title: 'Secure Demo Simulation', desc: 'Fully simulated role-based authentication allowing prospective clients and evaluators to explore every feature with zero login friction.', icon: 'shield', color: 'text-teal-400', bg: 'bg-teal-600/20 border-teal-500/30', badge: 'Security' },
    { title: 'Subscription Plan Scaling', desc: 'Designed for institutions of all sizes, featuring tiered student/instructor caps and seamless organization profile configuration.', icon: 'credit_card', color: 'text-orange-400', bg: 'bg-orange-600/20 border-orange-500/30', badge: 'Billing' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 flex flex-col font-sans select-none overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <header className="relative pt-20 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="text-xs font-bold text-purple-400 tracking-widest uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20">Comprehensive Feature Stack</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">Powerful Capabilities for Every Persona</h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Explore the advanced tools that make Raven ACE the premier choice for state-of-the-art proctored online examinations.
          </p>
        </div>
      </header>

      {/* Feature Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {featureList.map((f, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl hover:border-slate-700 transition-all hover:-translate-y-1 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${f.bg} border flex items-center justify-center`}>
                    <span className={`material-symbols-outlined text-[28px] ${f.color} group-hover:scale-110 transition-transform`}>{f.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-950 px-3 py-1 rounded-full border border-slate-800">{f.badge}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Interactive Dashboards Banner */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-10 md:p-14 text-center backdrop-blur-xl shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 pointer-events-none" />
          <div className="relative z-10 space-y-8">
            <h3 className="text-3xl md:text-4xl font-black text-white">Experience These Features Live</h3>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Why just read about features when you can test them yourself? Select a role below to jump straight into the interactive dashboard.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              {[
                { key: 'student', label: 'Student Portal', icon: 'school' },
                { key: 'instructor', label: 'Instructor Portal', icon: 'draw' },
                { key: 'organization', label: 'Organization Portal', icon: 'domain' },
                { key: 'admin', label: 'System Admin', icon: 'admin_panel_settings' },
              ].map(r => (
                <button
                  key={r.key}
                  onClick={() => handleRoleLaunch(r.key)}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-2xl shadow-lg hover:shadow-blue-600/30 transition-all active:scale-[0.98] flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">{r.icon}</span>
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

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

export default Features;
