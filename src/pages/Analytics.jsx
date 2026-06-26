import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Analytics() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const studentGrowth = [45, 60, 72, 85, 95, 110, 122, 130, 138, 145, 150, 165];
  const maxGrowth = 180;

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 flex flex-col font-sans select-none overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <header className="relative pt-20 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="text-xs font-bold text-rose-400 tracking-widest uppercase bg-rose-500/10 px-3.5 py-1.5 rounded-full border border-rose-500/20">Sitewide Telemetry</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">Global Analytics & Integrity Metrics</h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Analyze sitewide growth, exam completion rates, and historical passing averages aggregated across all simulated attempts.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-6 pb-32 space-y-16 w-full">
        
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Enrolled Users', value: '165', change: '+12% this month', icon: 'groups', color: 'text-blue-400', bg: 'bg-blue-600/20 border-blue-500/30' },
            { label: 'Proctored Attempts', value: '410', change: '+25% this month', icon: 'screen_search_desktop', color: 'text-purple-400', bg: 'bg-purple-600/20 border-purple-500/30' },
            { label: 'Overall Pass Rate', value: '84.2%', change: '+3.5% vs last year', icon: 'flaky', color: 'text-green-400', bg: 'bg-green-600/20 border-green-500/30' },
            { label: 'Certificates Issued', value: '89', change: '+15 new this week', icon: 'workspace_premium', color: 'text-amber-400', bg: 'bg-amber-600/20 border-amber-500/30' },
          ].map((m, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl ${m.bg} border flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-[24px] ${m.color}`}>{m.icon}</span>
                </div>
                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/20">{m.change}</span>
              </div>
              <p className="text-3xl font-black text-white mb-1">{m.value}</p>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Custom Bar Chart: Student Growth */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Student Enrollment Growth</h3>
              <p className="text-sm text-slate-400 mt-1">12-month cumulative user registration overview</p>
            </div>
            <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider">
              2026 Telemetry
            </span>
          </div>

          <div className="h-64 md:h-80 flex items-end gap-3 md:gap-6 pt-8 px-2 border-b border-slate-800">
            {months.map((m, idx) => {
              const count = studentGrowth[idx];
              const heightPct = (count / maxGrowth) * 100;
              return (
                <div key={m} className="flex-1 flex flex-col items-center gap-3 h-full justify-end group">
                  <span className="text-xs font-bold text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-2 py-1 rounded shadow">
                    {count}
                  </span>
                  <div
                    className="w-full bg-gradient-to-t from-blue-700 to-indigo-400 rounded-t-xl group-hover:brightness-115 transition-all shadow-lg shadow-blue-600/20"
                    style={{ height: `${heightPct}%` }}
                  />
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">{m}</span>
                </div>
              );
            })}
          </div>
          <div className="text-center text-xs text-slate-500 pt-2">
            Hover over bars to inspect specific monthly student registration aggregates
          </div>
        </div>

        {/* Progress Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Exam Completion */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h4 className="text-xl font-bold text-white">Exam Completion Stats</h4>
                <p className="text-xs text-slate-400 mt-1">Breakdown of started vs finished attempts</p>
              </div>
              <span className="material-symbols-outlined text-purple-400 text-[28px]">analytics</span>
            </div>

            <div className="space-y-6 pt-2">
              <div>
                <div className="flex items-center justify-between text-sm font-bold mb-2">
                  <span className="text-slate-300">Python Core Essentials</span>
                  <span className="text-purple-400">94% Completion</span>
                </div>
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: '94%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm font-bold mb-2">
                  <span className="text-slate-300">React Lifecycle & Hooks</span>
                  <span className="text-blue-400">89% Completion</span>
                </div>
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '89%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm font-bold mb-2">
                  <span className="text-slate-300">Database Administration SQL</span>
                  <span className="text-emerald-400">92% Completion</span>
                </div>
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Pass Rates & Integrity */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h4 className="text-xl font-bold text-white">Anti-Cheat & Pass Overview</h4>
                <p className="text-xs text-slate-400 mt-1">AI proctor confidence and test passing distribution</p>
              </div>
              <span className="material-symbols-outlined text-green-400 text-[28px]">verified_user</span>
            </div>

            <div className="space-y-6 pt-2">
              <div>
                <div className="flex items-center justify-between text-sm font-bold mb-2">
                  <span className="text-slate-300">Proctoring Clean Confidence</span>
                  <span className="text-green-400">98.5% Clean</span>
                </div>
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '98.5%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm font-bold mb-2">
                  <span className="text-slate-300">Plagiarism Independence Rating</span>
                  <span className="text-amber-400">99.1% Unique</span>
                </div>
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '99.1%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm font-bold mb-2">
                  <span className="text-slate-300">Average First-Attempt Passing Rate</span>
                  <span className="text-rose-400">82.4% Pass</span>
                </div>
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500 rounded-full" style={{ width: '82.4%' }} />
                </div>
              </div>
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

export default Analytics;
