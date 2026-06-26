import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 flex flex-col font-sans select-none overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <header className="relative pt-20 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">Platform Architecture</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">About Raven ACE</h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Built to bridge the gap between rigorous academic assessment and state-of-the-art artificial intelligence, Raven ACE redefines online examination integrity and automated tutoring.
          </p>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="flex-1 max-w-6xl mx-auto px-6 pb-24 space-y-20">
        
        {/* What the Platform Does */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-[100px] pointer-events-none rounded-full" />
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
            </div>
            <h2 className="text-3xl font-bold text-white">What the Platform Does</h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Raven ACE acts as an end-to-end command center for proctored testing and skill certification. Traditional testing environments rely on intrusive software installs or manual proctoring. Raven ACE leverages secure web APIs and real-time behavioral analytics to monitor integrity directly within standard web browsers.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Upon completion, our system instantly evaluates answers, records scores into an immutable history log, generates print-ready verified PDF certificates, and builds a comprehensive AI performance diagnostic.
            </p>
          </div>
        </section>

        {/* Target Audience */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Universities & Bootcamps', desc: 'Manage hundreds of students and multiple faculty members across diverse academic courses with global institutional limit tracking.', icon: 'account_balance', color: 'text-emerald-400', bg: 'bg-emerald-600/20 border-emerald-500/30' },
            { title: 'Corporate Instructors', desc: 'Create complex technical certification exams effortlessly using AI question generators, tracking employee progression and test statistics.', icon: 'co_present', color: 'text-purple-400', bg: 'bg-purple-600/20 border-purple-500/30' },
            { title: 'Professional Students', desc: 'Gain access to a beautiful student command center, clear feedback loops via AI Tutor, and verifiable PDF credentials for resumes and LinkedIn.', icon: 'school', color: 'text-blue-400', bg: 'bg-blue-600/20 border-blue-500/30' },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-lg flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className={`w-12 h-12 rounded-2xl ${item.bg} border flex items-center justify-center mb-6`}>
                  <span className={`material-symbols-outlined text-[28px] ${item.color}`}>{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* AI Capabilities & Examinations */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 blur-[100px] pointer-events-none rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <span className="material-symbols-outlined text-[26px]">psychology</span>
              </div>
              <h2 className="text-3xl font-bold text-white">AI Capabilities & Proctored Examinations</h2>
              <p className="text-slate-300 text-base leading-relaxed">
                The core engine of Raven ACE is powered by dual-phase Artificial Intelligence:
              </p>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-purple-400 mt-1 text-[20px]">smart_toy</span>
                  <div>
                    <strong className="text-white block text-base">Live Proctoring</strong>
                    Analyzes tab visibility, window focus, and typing cadences in real-time to generate a clean confidence score for instructors.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-purple-400 mt-1 text-[20px]">psychology_alt</span>
                  <div>
                    <strong className="text-white block text-base">Post-Exam AI Tutoring</strong>
                    Breaks down student responses into core strengths, key improvement areas, and tailored study recommendations.
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-inner">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block border-b border-slate-800 pb-3">Automated AI Feedback Sample</span>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-xs text-green-400 font-bold uppercase mb-1">Identified Strengths</p>
                  <p className="text-sm text-slate-200">Flawless understanding of React useEffect cleanup mechanisms and Context API prop drilling avoidance.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-xs text-amber-400 font-bold uppercase mb-1">Recommended Growth Area</p>
                  <p className="text-sm text-slate-200">Review advanced useMemo/useCallback memoization edge cases for high-frequency re-renders.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Generation & Organization Management */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 blur-[100px] pointer-events-none rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6 md:order-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <span className="material-symbols-outlined text-[26px]">workspace_premium</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Verified Certificate & Org Management</h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Passing an exam is only half the journey. Raven ACE provides organizations with rich branding configuration tools. Upload institutional logos and custom titles to make every issued credential completely unique.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                Every certificate contains a live verification QR code, allowing prospective employers to validate authenticity instantly without requiring a login.
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-inner md:order-1">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block border-b border-slate-800 pb-3">Platform Verification Specs</span>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <span>Cryptographic Certificate ID</span>
                  <span className="font-mono text-xs text-amber-400 font-bold">CERT-PYTHON-2026</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <span>Print & PDF Layout Styling</span>
                  <span className="text-xs text-blue-400 font-bold">Landscape Optimized</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <span>Dynamic Verification QR</span>
                  <span className="text-xs text-green-400 font-bold">Automatic Generation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-slate-800 space-y-6">
          <h3 className="text-3xl font-black text-white">Explore the Feature Stack</h3>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">Dive deeper into our specific feature offerings or launch the demo directly from the navigation bar.</p>
          <Link to="/features" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-2xl shadow-xl transition-all active:scale-[0.98]">
            View All Features <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </section>

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

export default About;
