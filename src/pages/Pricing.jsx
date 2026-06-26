import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Pricing() {
  const [demoAlert, setDemoAlert] = useState(null);

  const handleDemoClick = (planName) => {
    setDemoAlert(`This is an interactive static demo. The "${planName}" plan simulation is active in your organization dashboard! Payment processing is disabled.`);
    setTimeout(() => setDemoAlert(null), 6000);
  };

  const plans = [
    {
      name: 'Standard Institution',
      price: '$199',
      period: 'per month',
      desc: 'Perfect for growing bootcamps and localized training institutions.',
      features: [
        'Up to 150 active students',
        'Up to 10 instructor accounts',
        'Active AI Anti-Cheat proctoring',
        'Automatic grading & results log',
        'Standard PDF certificate generation',
        'Community email support'
      ],
      cta: 'Start Standard Demo',
      buttonBg: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
    },
    {
      name: 'Premium Enterprise',
      price: '$499',
      period: 'per month',
      desc: 'Advanced suite for top-tier universities and large corporate networks.',
      features: [
        'Up to 500 active students',
        'Up to 50 instructor accounts',
        'Full AI Tutor diagnostic summary',
        'Global plagiarism similarity reports',
        'Custom institutional logo on certificates',
        'Priority dedicated support'
      ],
      cta: 'Explore Premium Demo',
      buttonBg: 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30',
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 flex flex-col font-sans select-none overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <header className="relative pt-20 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">Transparent Pricing</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">Flexible Plans for Every Institution</h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Review our tier limits and feature offerings. In this standalone showcase, all premium enterprise features are fully unlocked for testing.
          </p>
        </div>
      </header>

      {/* Pricing Cards */}
      <main className="flex-1 max-w-5xl mx-auto px-6 pb-32 space-y-20">
        
        {demoAlert && (
          <div className="bg-blue-600/20 border border-blue-500 text-white p-6 rounded-2xl shadow-xl flex items-center justify-between gap-4 animate-[fadeIn_0.3s_ease-out]">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-blue-400 text-[28px]">info</span>
              <p className="text-base font-semibold">{demoAlert}</p>
            </div>
            <button onClick={() => setDemoAlert(null)} className="text-slate-400 hover:text-white font-bold">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {plans.map((p, idx) => (
            <div key={idx} className={`bg-slate-900 border ${p.popular ? 'border-blue-500/50 shadow-2xl shadow-blue-500/10' : 'border-slate-800 shadow-xl'} rounded-3xl p-8 md:p-10 flex flex-col justify-between relative`}>
              {p.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow">
                  MOST POPULAR
                </span>
              )}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">{p.desc}</p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-black text-white">{p.price}</span>
                  <span className="text-slate-400 text-sm font-medium">{p.period}</span>
                </div>
                <div className="border-t border-slate-800 pt-8 mb-8">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Included Features</p>
                  <ul className="space-y-4 text-sm text-slate-300">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-blue-400 text-[18px]">check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                onClick={() => handleDemoClick(p.name)}
                className={`w-full py-4 rounded-2xl font-bold text-base transition-all active:scale-[0.98] ${p.buttonBg}`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Detailed Plan Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Feature Capability</th>
                  <th className="py-4 px-6 text-center">Standard</th>
                  <th className="py-4 px-6 text-center">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm text-slate-300">
                {[
                  { name: 'Max Students', std: '150', pr: '500' },
                  { name: 'Max Instructors', std: '10', pr: '50' },
                  { name: 'Active AI Anti-Cheat', std: true, pr: true },
                  { name: 'Automated Grading Log', std: true, pr: true },
                  { name: 'Post-Exam AI Tutor Diagnostics', std: false, pr: true },
                  { name: 'Global Plagiarism Scanning', std: false, pr: true },
                  { name: 'Custom Certificate Branding', std: false, pr: true },
                  { name: 'Printable PDF & QR Verification', std: true, pr: true },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 font-medium text-white">{row.name}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.std === 'boolean' ? (
                        <span className={`material-symbols-outlined text-[20px] ${row.std ? 'text-green-400' : 'text-slate-600'}`}>
                          {row.std ? 'check_circle' : 'cancel'}
                        </span>
                      ) : (
                        <span className="font-semibold text-slate-300">{row.std}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.pr === 'boolean' ? (
                        <span className={`material-symbols-outlined text-[20px] ${row.pr ? 'text-green-400' : 'text-slate-600'}`}>
                          {row.pr ? 'check_circle' : 'cancel'}
                        </span>
                      ) : (
                        <span className="font-semibold text-blue-400">{row.pr}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-950 border-t border-slate-800 py-12 px-6 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
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

export default Pricing;
