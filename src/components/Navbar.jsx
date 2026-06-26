import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, switchRole } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Platform' },
    { to: '/features', label: 'Features' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/analytics', label: 'Analytics' },
  ];

  const dashboardRoute =
    user?.role === 'instructor' ? '/instructor' :
    user?.role === 'organization' ? '/organization' :
    user?.role === 'admin' ? '/admin' :
    '/dashboard';

  const handleRoleSelect = (roleKey) => {
    switchRole(roleKey);
    const targetRoute =
      roleKey === 'instructor' ? '/instructor' :
      roleKey === 'organization' ? '/organization' :
      roleKey === 'admin' ? '/admin' :
      '/dashboard';
    navigate(targetRoute);
  };

  return (
    <nav className="w-full bg-[#0a0f1d]/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-6 py-3 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Raven ACE Logo" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" />
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white leading-none">Raven ACE</h1>
            <span className="text-[10px] text-blue-400 font-semibold tracking-wider uppercase">Interactive Demo</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${active ? 'text-blue-400 font-semibold' : 'text-slate-300 hover:text-white'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side Actions & Role Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center bg-slate-900 border border-slate-700 p-1 rounded-xl gap-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase px-2">Demo Role:</span>
            {[
              { key: 'student', label: 'Student' },
              { key: 'instructor', label: 'Instructor' },
              { key: 'organization', label: 'Org' },
              { key: 'admin', label: 'Admin' },
            ].map(r => (
              <button
                key={r.key}
                onClick={() => handleRoleSelect(r.key)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${user?.role === r.key ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <Link
            to={dashboardRoute}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-blue-600/30 transition-all active:scale-[0.98]"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-slate-300 hover:text-white p-1"
        >
          <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
        </button>

      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0f1d] border-b border-slate-800 p-6 flex flex-col gap-4 shadow-xl z-50">
          <div className="flex flex-col gap-3 border-b border-slate-800 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs text-slate-400 font-bold uppercase">Switch Demo Role:</span>
            <div className="grid grid-cols-2 gap-2">
              {[
                { key: 'student', label: 'Student' },
                { key: 'instructor', label: 'Instructor' },
                { key: 'organization', label: 'Organization' },
                { key: 'admin', label: 'Admin' },
              ].map(r => (
                <button
                  key={r.key}
                  onClick={() => {
                    handleRoleSelect(r.key);
                    setMobileOpen(false);
                  }}
                  className={`py-2 rounded-lg text-xs font-bold transition-all ${user?.role === r.key ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'}`}
                >
                  {r.label}
                </button>
              ))}
            </div>
            <Link
              to={dashboardRoute}
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 bg-blue-600 text-white font-semibold text-center rounded-xl shadow-lg mt-2"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
