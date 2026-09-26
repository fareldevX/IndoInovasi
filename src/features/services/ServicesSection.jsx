import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { SectionHeader } from "../../components/ui/SitePrimitives.jsx";
import { SERVICES } from "./services.data.js";

const VisualAI = ({ isActive }) => (
  <svg
    viewBox="0 0 400 400"
    className={`w-full h-full transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
  >
    {/* Base Grid/Mesh */}
    <path
      d="M50 200 L150 100 L250 150 L350 100"
      fill="none"
      stroke="#1e293b"
      strokeWidth="1"
    />
    <path
      d="M50 200 L150 300 L250 250 L350 300"
      fill="none"
      stroke="#1e293b"
      strokeWidth="1"
    />
    <path
      d="M150 100 L150 300"
      fill="none"
      stroke="#1e293b"
      strokeWidth="1"
      strokeDasharray="4 4"
    />
    <path
      d="M250 150 L250 250"
      fill="none"
      stroke="#1e293b"
      strokeWidth="1"
      strokeDasharray="4 4"
    />

    {/* The Core */}
    <rect
      x="180"
      y="160"
      width="40"
      height="80"
      fill="#020617"
      stroke="#334155"
      strokeWidth="1"
      rx="4"
    />
    <circle
      cx="200"
      cy="200"
      r="12"
      fill="none"
      stroke="#f97316"
      strokeWidth="1.5"
      className={isActive ? "animate-[spin_4s_linear_infinite]" : ""}
      strokeDasharray="15 5"
    />

    {/* Data Signal Flow (Orange) */}
    <path
      d="M50 200 L150 100 L200 160"
      fill="none"
      stroke="#f97316"
      strokeWidth="2"
      strokeLinecap="round"
      className="dash-signal"
    />
    <path
      d="M200 240 L250 250 L350 200"
      fill="none"
      stroke="#f97316"
      strokeWidth="2"
      strokeLinecap="round"
      className="dash-signal-delayed"
    />

    {/* Nodes */}
    <circle cx="50" cy="200" r="4" fill="#64748b" />
    <circle cx="150" cy="100" r="4" fill="#64748b" />
    <circle cx="150" cy="300" r="4" fill="#64748b" />
    <circle cx="250" cy="150" r="4" fill="#64748b" />
    <circle cx="250" cy="250" r="4" fill="#64748b" />
    <circle
      cx="350"
      cy="200"
      r="5"
      fill="#f97316"
      className={isActive ? "animate-pulse" : ""}
    />

    {/* Tech Labels */}
    <text
      x="45"
      y="190"
      fill="#475569"
      fontSize="10"
      fontFamily="monospace"
      textAnchor="end"
    >
      RAW_INPUT
    </text>
    <text
      x="355"
      y="190"
      fill="#f97316"
      fontSize="10"
      fontFamily="monospace"
      textAnchor="start"
    >
      AUTO_OUT
    </text>
  </svg>
);

const VisualWeb = ({ isActive }) => (
  <svg
    viewBox="0 0 400 400"
    className={`w-full h-full transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
  >
    {/* Browser Frame */}
    <rect
      x="40"
      y="60"
      width="320"
      height="280"
      fill="none"
      stroke="#1e293b"
      strokeWidth="1"
      rx="8"
    />
    <line x1="40" y1="90" x2="360" y2="90" stroke="#1e293b" strokeWidth="1" />
    <circle cx="55" cy="75" r="3" fill="#334155" />
    <circle cx="70" cy="75" r="3" fill="#334155" />
    <circle cx="85" cy="75" r="3" fill="#334155" />

    {/* Wireframe Construction */}
    <g className={isActive ? "animate-draw-wireframe" : "opacity-0"}>
      {/* Sidebar */}
      <rect
        x="60"
        y="110"
        width="60"
        height="210"
        fill="#020617"
        stroke="#334155"
        strokeWidth="1"
        strokeDasharray="2 2"
        rx="4"
      />
      {/* Header Block */}
      <rect
        x="140"
        y="110"
        width="200"
        height="40"
        fill="#0f172a"
        stroke="#f97316"
        strokeWidth="1"
        rx="4"
      />
      {/* Content Grid */}
      <rect
        x="140"
        y="170"
        width="90"
        height="70"
        fill="none"
        stroke="#475569"
        strokeWidth="1"
        rx="4"
      />
      <rect
        x="250"
        y="170"
        width="90"
        height="70"
        fill="none"
        stroke="#475569"
        strokeWidth="1"
        rx="4"
      />
      <rect
        x="140"
        y="260"
        width="200"
        height="60"
        fill="none"
        stroke="#475569"
        strokeWidth="1"
        rx="4"
      />
    </g>

    {/* Active Rendering / Scanning Line */}
    {isActive && (
      <line
        x1="140"
        y1="110"
        x2="340"
        y2="110"
        stroke="#f97316"
        strokeWidth="2"
        className="animate-scan-vertical"
      />
    )}

    <text x="65" y="130" fill="#475569" fontSize="12" fontFamily="monospace">
      {"<div/>"}
    </text>
  </svg>
);

const VisualCommerce = ({ isActive }) => (
  <svg
    viewBox="0 0 400 400"
    className={`w-full h-full transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
  >
    {/* Conveyor / Pipeline */}
    <path
      d="M50 200 C 150 200, 250 100, 350 200"
      fill="none"
      stroke="#1e293b"
      strokeWidth="2"
    />
    <path
      d="M50 250 C 150 250, 250 150, 350 250"
      fill="none"
      stroke="#1e293b"
      strokeWidth="2"
    />

    {/* Structural Rings */}
    <ellipse
      cx="150"
      cy="225"
      rx="10"
      ry="30"
      fill="none"
      stroke="#334155"
      strokeWidth="1"
    />
    <ellipse
      cx="250"
      cy="125"
      rx="10"
      ry="30"
      fill="none"
      stroke="#334155"
      strokeWidth="1"
    />

    {/* Data Packets (Products to Checkout) */}
    <rect x="40" y="215" width="20" height="20" fill="#334155" rx="4" />

    <g className={isActive ? "animate-conveyor" : ""}>
      <rect
        x="140"
        y="215"
        width="24"
        height="24"
        fill="#0f172a"
        stroke="#f97316"
        strokeWidth="1.5"
        rx="4"
      />
      <text
        x="152"
        y="230"
        fill="#f97316"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
      >
        ID
      </text>
    </g>

    <g className={isActive ? "animate-conveyor-delayed" : "opacity-0"}>
      <circle
        cx="250"
        cy="125"
        r="14"
        fill="#0f172a"
        stroke="#f97316"
        strokeWidth="1.5"
      />
      <path
        d="M245 125 L249 129 L256 121"
        fill="none"
        stroke="#f97316"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>

    {/* Transaction Endpoint */}
    <circle
      cx="350"
      cy="225"
      r="18"
      fill="#020617"
      stroke="#475569"
      strokeWidth="1"
    />
    <circle
      cx="350"
      cy="225"
      r="24"
      fill="none"
      stroke="#f97316"
      strokeWidth="1.5"
      strokeDasharray="4 4"
      className={isActive ? "animate-[spin_6s_linear_infinite_reverse]" : ""}
    />
  </svg>
);

const VisualAnalytics = ({ isActive }) => (
  <svg
    viewBox="0 0 400 400"
    className={`w-full h-full transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
  >
    {/* Graph Grid */}
    <line x1="50" y1="320" x2="350" y2="320" stroke="#334155" strokeWidth="1" />
    <line x1="50" y1="320" x2="50" y2="80" stroke="#334155" strokeWidth="1" />
    <path
      d="M50 260 L350 260 M50 200 L350 200 M50 140 L350 140"
      stroke="#1e293b"
      strokeWidth="1"
      strokeDasharray="2 4"
    />

    {/* Ascending Metric Line */}
    <path
      d="M50 300 Q 120 280, 150 220 T 250 160 T 350 90"
      fill="none"
      stroke="#475569"
      strokeWidth="2"
    />

    {/* Active Orange Data Trace */}
    {isActive && (
      <path
        d="M50 300 Q 120 280, 150 220 T 250 160 T 350 90"
        fill="none"
        stroke="#f97316"
        strokeWidth="3"
        strokeLinecap="round"
        className="dash-signal"
      />
    )}

    {/* Analytics Bars */}
    <rect x="80" y="280" width="24" height="40" fill="#1e293b" rx="2" />
    <rect x="140" y="240" width="24" height="80" fill="#1e293b" rx="2" />
    <rect x="200" y="190" width="24" height="130" fill="#1e293b" rx="2" />
    <rect
      x="260"
      y="130"
      width="24"
      height="190"
      fill="#0f172a"
      stroke="#f97316"
      strokeWidth="1"
      rx="2"
      className={isActive ? "animate-pulse" : ""}
    />
    <rect x="320" y="90" width="24" height="230" fill="#1e293b" rx="2" />

    {/* Target / Optimization Insight */}
    <circle
      cx="350"
      cy="90"
      r="6"
      fill="#020617"
      stroke="#f97316"
      strokeWidth="2"
    />
    <circle
      cx="350"
      cy="90"
      r="16"
      fill="none"
      stroke="#f97316"
      strokeWidth="1"
      opacity="0.5"
      className={isActive ? "animate-ping" : ""}
    />
    <text
      x="350"
      y="70"
      fill="#f97316"
      fontSize="10"
      fontFamily="monospace"
      textAnchor="middle"
    >
      YIELD
    </text>
  </svg>
);

const ServiceArchitecture = () => {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);

  useEffect(() => {
    const observers = SERVICES.map((service) => {
      const el = document.getElementById(`service-block-${service.id}`);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveServiceId(service.id);
          }
        },
        { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      );

      observer.observe(el);
      return { el, observer };
    }).filter(Boolean);

    return () => {
      observers.forEach(({ el, observer }) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="services"
      className="relative bg-slate-950 text-white border-y border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-20 md:mb-32 max-w-2xl">
          <SectionHeader
            title="Systems Architecture"
            subtitle="We engineer specialized digital infrastructure. Scroll to explore how our specific capabilities resolve operational bottlenecks."
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 relative">
          {/* Left Column: Scroll Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-32 lg:gap-[50vh] pb-[20vh] lg:pb-[50vh]">
            {SERVICES.map((service, index) => {
              const isActive = activeServiceId === service.id;

              return (
                <div
                  key={service.id}
                  id={`service-block-${service.id}`}
                  className={`transition-all duration-700 ${isActive ? "opacity-100" : "opacity-40 lg:opacity-20"}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-xs text-slate-500 uppercase tracking-widest border border-slate-800 rounded-full px-3 py-1">
                      SYS_0{index + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Mobile Fallback Visual */}
                  <div className="block lg:hidden w-full max-w-md aspect-square bg-slate-900/40 border border-slate-800 rounded-2xl mb-8 relative overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_0%,transparent_70%)]" />
                    <div className="relative z-10 w-full h-full p-4">
                      {service.id === "ai-ml" && <VisualAI isActive={true} />}
                      {service.id === "web-platform" && (
                        <VisualWeb isActive={true} />
                      )}
                      {service.id === "ecommerce" && (
                        <VisualCommerce isActive={true} />
                      )}
                      {service.id === "seo-analytics" && (
                        <VisualAnalytics isActive={true} />
                      )}
                    </div>
                  </div>

                  <p className="text-slate-300 font-sans text-lg mb-8 leading-relaxed border-l-2 border-orange-500 pl-5">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-8 bg-slate-900/30 p-6 md:p-8 border border-slate-800/50 rounded-2xl backdrop-blur-sm">
                    <div>
                      <h4 className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 mb-3 font-mono">
                        <X className="w-3 h-3 text-red-400" /> Problem Detected
                      </h4>
                      <p className="text-slate-400 font-sans text-sm leading-relaxed">
                        {service.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 mb-4 font-mono">
                        <CheckCircle2 className="w-3 h-3 text-orange-500" />{" "}
                        Technical Output
                      </h4>
                      <ul className="space-y-3">
                        {service.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-slate-300 font-sans text-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500/80 mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Visualizer (Desktop) */}
          <div className="hidden lg:block lg:col-span-6 relative">
            <div className="sticky top-1/2 -translate-y-1/2 w-full aspect-square max-h-[600px] border border-slate-800/80 rounded-3xl bg-slate-900/40 backdrop-blur-md overflow-hidden flex items-center justify-center shadow-2xl shadow-black/50">
              <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.06)_0%,transparent_60%)] transition-opacity duration-1000" />

              {/* Corner Accents */}
              <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-slate-600 rounded-tl-lg" />
              <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-slate-600 rounded-tr-lg" />
              <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-slate-600 rounded-bl-lg" />
              <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-slate-600 rounded-br-lg" />

              <div className="relative z-10 w-full h-full max-w-[550px] max-h-[550px] p-8">
                <div className="absolute inset-8">
                  <VisualAI isActive={activeServiceId === "ai-ml"} />
                </div>
                <div className="absolute inset-8">
                  <VisualWeb isActive={activeServiceId === "web-platform"} />
                </div>
                <div className="absolute inset-8">
                  <VisualCommerce isActive={activeServiceId === "ecommerce"} />
                </div>
                <div className="absolute inset-8">
                  <VisualAnalytics
                    isActive={activeServiceId === "seo-analytics"}
                  />
                </div>
              </div>

              {/* Technical readout overlay */}
              <div className="absolute bottom-6 right-8 text-[10px] font-mono text-slate-500 text-right uppercase leading-tight bg-slate-950/80 px-4 py-2 rounded-lg border border-slate-800">
                <div>State: Active</div>
                <div className="text-orange-500 mt-1">
                  ID: {activeServiceId}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArchitecture;
