export default function Maintenance() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 px-4">
      <div className="max-w-lg w-full text-center bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/20">
        
        {/* Logo / Title */}
        <h1 className="text-3xl font-semibold text-white mb-4">
          SQAC Website Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-gray-200 mb-6 leading-relaxed">
          Our team is currently working on enhancements and improvements to
          deliver a better experience.
          The website will be available again shortly.
        </p>

        {/* Status Indicator */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-300">
            Maintenance in progress
          </span>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Software Quality Assurance Community (SQAC)
        </p>
      </div>
    </div>
  );
}
