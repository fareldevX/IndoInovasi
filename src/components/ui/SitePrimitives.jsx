export function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 font-sans max-w-2xl text-lg">{subtitle}</p>
      )}
    </div>
  );
}

export function ButtonPrimary({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-orange-500 hover:bg-orange-600 text-white font-sans font-medium px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}

export function ButtonOutline({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`border border-slate-700 hover:border-orange-500 hover:text-orange-500 text-slate-300 font-sans font-medium px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2 bg-slate-900/50 backdrop-blur-sm ${className}`}
    >
      {children}
    </button>
  );
}
