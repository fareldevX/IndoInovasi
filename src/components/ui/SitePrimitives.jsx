// Each entry is one line of a headline, wrapped so GSAP can slide it up from a mask.
export function Lines({ lines, className = "" }) {
  return lines.map((line, i) => {
    const { t, cls = "" } = typeof line === "string" ? { t: line } : line;
    return (
      <span
        key={i}
        className={`ln-mask block overflow-hidden pb-[0.12em] -mb-[0.12em] ${className} ${cls}`}
      >
        <span className="ln block">{t}</span>
      </span>
    );
  });
}

export function ButtonPrimary({ children, onClick, type = "button", disabled = false, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-3 bg-signal px-7 py-4 font-display text-lg font-bold text-[#0b1a1c] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 ${className}`}
    >
      {children}
    </button>
  );
}

export function ButtonOutline({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center gap-2 border-b border-current py-1 font-medium text-fg transition-colors hover:text-signal ${className}`}
    >
      {children}
    </button>
  );
}
