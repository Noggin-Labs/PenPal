import React from "react";

interface HeaderProps {
  currentRole: "learner" | "parent" | "educator";
  onRoleChange: (role: "learner" | "parent" | "educator") => void;
  title: string;
}

export const NavigationHeader: React.FC<HeaderProps> = ({ currentRole, onRoleChange, title }) => {
  return (
    <header className="border-b transition duration-200" style={{ borderColor: "var(--theme-border-color)", backgroundColor: "var(--theme-card-bg)" }}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl" role="img" aria-label="PenPal Paint Brush & Handwriting">🎨✍️</span>
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-blue-600 font-sans">PenPal</h1>
            <p className="text-xs text-slate-500 font-sans">Adaptive Inclusive Learning</p>
          </div>
        </div>

        {/* Dynamic Title / Current Location */}
        <div className="hidden lg:block text-center font-bold px-4 py-1 rounded bg-slate-100/80 border border-slate-200 text-slate-700 text-sm">
          {title}
        </div>

        {/* Role Switching Simulator Navigation */}
        <nav className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto" aria-label="Switch User Simulation Persona">
          <span className="text-xs font-semibold px-2 text-slate-500 font-sans">Role:</span>
          {[
            { value: "learner", label: "✍️ Learner", color: "hover:text-blue-600 hover:bg-blue-50" },
            { value: "parent", label: "👩‍👦 Parent", color: "hover:text-purple-600 hover:bg-purple-50" },
            { value: "educator", label: "👨‍🏫 Educator/SEN", color: "hover:text-emerald-600 hover:bg-emerald-50" },
          ].map((role) => (
            <button
              key={role.value}
              onClick={() => onRoleChange(role.value as any)}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all font-sans ${
                currentRole === role.value
                  ? "bg-white text-slate-900 shadow-sm font-black border border-slate-200"
                  : `text-slate-600 ${role.color}`
              }`}
            >
              {role.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
