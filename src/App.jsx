import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Menu,
  X,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning Automation",
    shortDesc:
      "Custom neural networks and automation protocols to eliminate manual workflows.",
    problem:
      "Operational friction, slow data entry, and inefficient manual tasks.",
    deliverables: [
      "Custom automation scripts",
      "ML model integration",
      "Workflow automation bots",
    ],
  },
  {
    id: "web-platform",
    title: "Corporate Web Platforms",
    shortDesc:
      "High-performance digital interfaces engineered for scale, security, and conversion.",
    problem:
      "Poor digital presence, slow loading speeds, and disjointed brand identity.",
    deliverables: [
      "React/Node.js Architecture",
      "Headless CMS Integration",
      "Technical UI/UX Design",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Engineering",
    shortDesc:
      "Robust transaction pipelines and inventory management systems built for volume.",
    problem: "Marketplace dependency and rigid, unscalable catalog structures.",
    deliverables: [
      "Custom Storefronts",
      "Payment Gateway Integration",
      "Automated Inventory Logic",
    ],
  },
  {
    id: "seo-analytics",
    title: "SEO & Digital Analytics",
    shortDesc:
      "Data-driven visibility architectures and granular metric tracking dashboards.",
    problem:
      "Invisible in search, decisions based on instinct rather than hard data.",
    deliverables: [
      "Technical SEO Audits",
      "Custom Analytics Dashboards",
      "Conversion Rate Optimization",
    ],
  },
];

const SOLUTIONS = [
  {
    problem:
      "Our team spends 40% of their time on manual data entry and repetitive workflows.",
    approach:
      "AI Automation & Scripting to bridge disconnected tools and handle repetitive routing.",
  },
  {
    problem:
      "Our current website is a slow, outdated template that doesn't reflect our enterprise quality.",
    approach:
      "Custom Web Platform Engineering using modern React/Vite stacks for sub-second load times.",
  },
  {
    problem:
      "We have traffic, but no clear data on what users are doing or why they leave.",
    approach:
      "Digital Analytics implementation with custom event tracking and visualization dashboards.",
  },
];

const PROJECTS = [
  {
    id: "prj-1",
    type: "Concept Architecture",
    title: "Neural Ops: Workflow Routing Engine",
    stack: ["Python", "TensorFlow", "FastAPI", "React"],
    challenge:
      "Legacy systems required manual human intervention to sort and tag thousands of incoming support queries daily.",
    execution:
      "Engineered a lightweight NLP model to pre-sort queries, integrated via REST API into the existing dashboard interface.",
    outcome: "Query routing time reduced by 94% (< 200ms per query).",
  },
  {
    id: "prj-2",
    type: "Internal R&D",
    title: "Velocity: Headless Commerce Template",
    stack: ["Next.js", "Tailwind", "Stripe API"],
    challenge:
      "Standard monolithic e-commerce platforms suffered from rigid UIs and slow time-to-interactive metrics.",
    execution:
      "Built a headless storefront decoupling the UI from the database, utilizing edge-caching for product pages.",
    outcome: "Lighthouse Performance Score: 99/100.",
  },
];

const APPROACH_STEPS = [
  {
    number: "01",
    title: "Diagnostic Audit",
    description:
      "Deep-dive analysis of existing infrastructure, data pipelines, and operational bottlenecks. We identify exactly where automation and modern web tech will yield the highest ROI.",
  },
  {
    number: "02",
    title: "Architecture Blueprint",
    description:
      "Formulating a scalable technical strategy. Selecting the optimal tech stack, designing database schemas, and mapping user/data flows before writing a single line of code.",
  },
  {
    number: "03",
    title: "Agile Engineering",
    description:
      "Iterative, milestone-based development. We build robustly and transparently, providing access to staging environments so you can verify progress in real-time.",
  },
  {
    number: "04",
    title: "Deployment & Scaling",
    description:
      "Rigorous QA, load testing, and zero-downtime deployment. Post-launch, we monitor system health and scale server resources dynamically as traffic grows.",
  },
];

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-400 font-sans max-w-2xl text-lg">{subtitle}</p>
    )}
  </div>
);

const ButtonPrimary = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`bg-orange-500 hover:bg-orange-600 text-white font-sans font-medium px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  >
    {children}
  </button>
);

const ButtonOutline = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`border border-slate-700 hover:border-orange-500 hover:text-orange-500 text-slate-300 font-sans font-medium px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2 bg-slate-900/50 backdrop-blur-sm ${className}`}
  >
    {children}
  </button>
);

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? "pt-4" : "pt-6"}`}
    >
      <div
        className={`transition-all duration-500 flex items-center justify-between w-full max-w-7xl mx-auto px-6 ${
          isScrolled
            ? "md:w-[85%] bg-slate-950/80 backdrop-blur-xl rounded-full py-3 shadow-lg shadow-black/40"
            : "w-full bg-transparent py-4"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer z-50">
          <Code2 className="w-6 h-6 text-orange-500" />
          <span className="text-xl font-bold tracking-tighter uppercase font-serif text-white">
            IndoInovasi
          </span>
        </div>

        {/* Desktop Links (Pill grouped) */}
        <div className="hidden md:flex items-center bg-slate-900/50 border border-slate-800/50 rounded-full px-1 py-1">
          <a
            href="#services"
            className="px-5 py-2 text-sm font-sans text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-all"
          >
            Services
          </a>
          <a
            href="#work"
            className="px-5 py-2 text-sm font-sans text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-all"
          >
            Work
          </a>
          <a
            href="#approach"
            className="px-5 py-2 text-sm font-sans text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-all"
          >
            Approach
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#inquiry"
            className="text-sm font-sans text-slate-300 hover:text-white transition-colors"
          >
            Client Portal
          </a>
          <ButtonPrimary
            className="!py-2 !px-5 text-sm"
            onClick={() =>
              document
                .getElementById("inquiry")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Project
          </ButtonPrimary>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-950 z-40 flex flex-col justify-center items-center gap-8 px-6 animate-in fade-in duration-300">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-4xl font-serif text-white hover:text-orange-500 transition-colors"
          >
            Services
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-4xl font-serif text-white hover:text-orange-500 transition-colors"
          >
            Work
          </a>
          <a
            href="#approach"
            onClick={() => setMobileMenuOpen(false)}
            className="text-4xl font-serif text-white hover:text-orange-500 transition-colors"
          >
            Approach
          </a>
          <div className="w-16 h-px bg-slate-800 my-4"></div>
          <ButtonPrimary
            className="w-full max-w-xs"
            onClick={() => {
              setMobileMenuOpen(false);
              document
                .getElementById("inquiry")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start a Project
          </ButtonPrimary>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  // Use a reliable tech-oriented abstract looping video placeholder
  const VIDEO_ASSET_PATH =
    "https://cdn.pixabay.com/video/2021/08/11/84687-587841100_large.mp4";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 motion-reduce:hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src={VIDEO_ASSET_PATH} type="video/mp4" />
        </video>
      </div>

      {/* Sophisticated Vignette / Overlay */}
      {/* 1. Linear fade at the bottom to blend into the next section */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10"></div>
      {/* 2. Radial darkening to ensure text contrast while keeping the edges cinematic */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.3)_0%,rgba(2,6,23,0.8)_100%)]"></div>

      {/* Main Content (Single Column) */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center mt-20 md:mt-0 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Terminal className="w-4 h-4 text-orange-500" />
          <span className="text-xs md:text-sm font-mono text-orange-500 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            System Architecture & Automation
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-8">
          Engineered for <br />
          <span className="text-slate-300">Operational Scale.</span>
        </h1>

        {/* Supporting Description */}
        <p className="text-lg md:text-xl font-sans text-slate-400 max-w-2xl font-light leading-relaxed mb-12">
          We build data-driven systems, custom web platforms, and intelligent
          automations designed to eliminate friction and accelerate your
          business growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <ButtonPrimary
            className="w-full sm:w-auto !px-8 !py-4 text-lg"
            onClick={() =>
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Architectures <ArrowRight className="w-5 h-5" />
          </ButtonPrimary>
          <ButtonOutline
            className="w-full sm:w-auto !px-8 !py-4 text-lg"
            onClick={() =>
              document
                .getElementById("work")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View Technical Proof
          </ButtonOutline>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 animate-pulse z-20">
        <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400">
          Scroll Sequence
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-orange-500 to-transparent"></div>
      </div>
    </section>
  );
};

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

const ProblemRouter = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-800">
    <SectionHeader
      title="Strategic Alignment"
      subtitle="Mapping operational friction to technical implementation."
    />
    <div className="grid md:grid-cols-3 gap-8">
      {SOLUTIONS.map((sol, idx) => (
        <div
          key={idx}
          className="border border-slate-800 rounded-2xl bg-slate-900/30 p-8 flex flex-col hover:border-slate-700 transition-colors"
        >
          <h3 className="font-mono text-sm uppercase tracking-wider text-slate-500 mb-4">
            Identified Problem
          </h3>
          <p className="text-xl font-serif mb-8 flex-grow text-white leading-relaxed">
            "{sol.problem}"
          </p>
          <div className="border-t border-slate-800 pt-6 mt-auto">
            <h3 className="font-mono text-xs uppercase tracking-wider text-orange-500 mb-3">
              Technical Approach
            </h3>
            <p className="text-slate-400 font-sans text-sm leading-relaxed">
              {sol.approach}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Approach = () => (
  <section
    id="approach"
    className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-800 scroll-mt-20"
  >
    <SectionHeader
      title="Methodology"
      subtitle="A disciplined, engineering-first approach to solving complex business problems."
    />

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-16">
      {/* Desktop Connecting Line */}
      <div className="hidden md:block absolute top-8 left-12 right-12 h-[2px] bg-gradient-to-r from-slate-900 via-orange-500/30 to-slate-900 z-0"></div>

      {APPROACH_STEPS.map((step, idx) => (
        <div key={idx} className="relative z-10 flex flex-col group">
          {/* Node Marker */}
          <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-orange-500 transition-colors flex items-center justify-center mb-8 relative shadow-lg">
            <span className="font-mono text-lg text-slate-400 group-hover:text-orange-500 transition-colors">
              {step.number}
            </span>
            <div className="absolute inset-0 rounded-2xl bg-orange-500/0 group-hover:bg-orange-500/10 blur-md transition-all"></div>
          </div>

          <h3 className="text-xl font-serif font-bold text-white mb-3">
            {step.title}
          </h3>
          <p className="text-slate-400 font-sans text-sm leading-relaxed md:pr-4">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

const ProofOfWork = () => (
  <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
    <SectionHeader
      title="Concept Architecture"
      subtitle="Demonstrations of technical depth and problem-solving capability."
    />
    <div className="space-y-12">
      {PROJECTS.map((project) => (
        <article
          key={project.id}
          className="grid md:grid-cols-12 gap-8 border border-slate-800 rounded-3xl bg-slate-900/20 overflow-hidden hover:border-slate-700 transition-colors group"
        >
          <div className="md:col-span-4 flex flex-col gap-4 p-8 md:p-12 bg-slate-900/50">
            <span className="bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full w-fit">
              {project.type}
            </span>
            <h3 className="text-3xl font-serif font-bold tracking-tight leading-tight text-white mt-4">
              {project.title}
            </h3>

            <div className="mt-auto pt-12">
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-slate-700 bg-slate-800/50 px-3 py-1 rounded-md text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col justify-between p-8 md:p-12 gap-10">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-3">
                The Challenge
              </h4>
              <p className="text-lg text-slate-200 font-sans leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-3">
                Execution
              </h4>
              <p className="text-slate-400 font-sans leading-relaxed">
                {project.execution}
              </p>
            </div>
            <div className="bg-orange-500/5 p-6 border border-orange-500/20 rounded-xl flex items-center justify-between">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-orange-500 mb-2">
                  Outcome Benchmark
                </h4>
                <p className="font-mono text-orange-200">{project.outcome}</p>
              </div>
              <ArrowUpRight className="text-orange-500/50 w-8 h-8 group-hover:text-orange-500 transition-colors" />
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const InquiryForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    intent: "",
    details: "",
    budget: "",
    name: "",
    email: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => {
    if (step === 1 && formData.intent) setStep(2);
    else if (step === 2 && formData.details) setStep(3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-slate-900/50 text-white p-12 text-center border border-slate-800 rounded-3xl max-w-4xl mx-auto my-24 backdrop-blur-sm">
        <CheckCircle2 className="w-20 h-20 text-orange-500 mx-auto mb-6" />
        <h3 className="text-4xl font-serif font-bold mb-4">
          Transmission Received
        </h3>
        <p className="text-slate-400 font-sans text-lg max-w-md mx-auto leading-relaxed">
          Your inquiry has been logged. Our engineering team will review the
          specifications and respond within 24 business hours.
        </p>
      </div>
    );
  }

  return (
    <section
      id="inquiry"
      className="py-24 px-6 bg-slate-950 border-t border-slate-800 relative overflow-hidden"
    >
      {/* Decorative bg gradient for form */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.05)_0%,transparent_50%)]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader
          title="Initialize Project"
          subtitle="Define your parameters. We focus on technical viability and business outcomes."
        />

        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex items-center gap-2 mb-12 border-b border-slate-800 pb-6 font-mono text-xs uppercase tracking-widest text-slate-500">
            <span className={step >= 1 ? "text-orange-500 font-bold" : ""}>
              01. Intent
            </span>
            <span className="w-8 h-px bg-slate-700"></span>
            <span className={step >= 2 ? "text-orange-500 font-bold" : ""}>
              02. Specs
            </span>
            <span className="w-8 h-px bg-slate-700"></span>
            <span className={step >= 3 ? "text-orange-500 font-bold" : ""}>
              03. Identity
            </span>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <h3 className="text-2xl font-serif text-white mb-6">
                  What architecture are you looking to build?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, intent: s.id })}
                      className={`text-left p-6 border rounded-xl transition-all ${
                        formData.intent === s.id
                          ? "border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/5"
                          : "border-slate-700 hover:border-slate-500 bg-slate-950/50"
                      }`}
                    >
                      <span className="block font-serif text-lg font-semibold mb-2 text-white">
                        {s.title}
                      </span>
                      <span className="block font-sans text-sm text-slate-400 line-clamp-2">
                        {s.shortDesc}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="mt-10 flex justify-end">
                  <ButtonPrimary
                    onClick={handleNext}
                    disabled={!formData.intent}
                  >
                    Proceed to Specs <ArrowRight className="w-4 h-4" />
                  </ButtonPrimary>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                <h3 className="text-2xl font-serif text-white">
                  Define the operational friction or project scope.
                </h3>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                    Project Details
                  </label>
                  <textarea
                    className="w-full border border-slate-700 rounded-xl p-5 min-h-[150px] font-sans text-white focus:outline-none focus:ring-1 focus:ring-orange-500 bg-slate-950/50 placeholder:text-slate-600 transition-all"
                    placeholder="Describe the current bottleneck or desired technical outcome..."
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                    Estimated Budget Guideline
                  </label>
                  <select
                    className="w-full border border-slate-700 rounded-xl p-5 font-sans text-white focus:outline-none focus:ring-1 focus:ring-orange-500 bg-slate-950/50 appearance-none transition-all"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                  >
                    <option value="" disabled className="text-slate-500">
                      Select tier mapping...
                    </option>
                    <option value="tier1">
                      Exploratory / MVP (IDR 15M - 35M)
                    </option>
                    <option value="tier2">Core System (IDR 35M - 75M)</option>
                    <option value="tier3">
                      Enterprise Architecture (IDR 75M+)
                    </option>
                  </select>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <ButtonOutline onClick={() => setStep(1)}>Back</ButtonOutline>
                  <ButtonPrimary
                    onClick={handleNext}
                    disabled={!formData.details}
                  >
                    Proceed to Identity <ArrowRight className="w-4 h-4" />
                  </ButtonPrimary>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                <h3 className="text-2xl font-serif text-white">
                  Point of Contact
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full border border-slate-700 rounded-xl p-4 font-sans text-white focus:outline-none focus:ring-1 focus:ring-orange-500 bg-slate-950/50 transition-all"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      className="w-full border border-slate-700 rounded-xl p-4 font-sans text-white focus:outline-none focus:ring-1 focus:ring-orange-500 bg-slate-950/50 transition-all"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      className="w-full border border-slate-700 rounded-xl p-4 font-sans text-white focus:outline-none focus:ring-1 focus:ring-orange-500 bg-slate-950/50 transition-all"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center border-t border-slate-800 pt-8 mt-4">
                  <ButtonOutline onClick={() => setStep(2)}>Back</ButtonOutline>
                  <ButtonPrimary
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email}
                  >
                    {isSubmitting ? "Transmitting..." : "Execute Submission"}
                  </ButtonPrimary>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-white py-16 px-6 border-t border-slate-800 z-10 relative">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <Code2 className="w-6 h-6 text-orange-500" />
          <span className="text-xl font-bold tracking-tighter uppercase font-serif text-white">
            IndoInovasi
          </span>
        </div>
        <p className="text-slate-400 font-sans font-light text-sm max-w-sm leading-relaxed">
          Corporate IT Service Platform. Engineering data-driven web
          applications and AI automation architectures.
        </p>
      </div>
      <div>
        <h4 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-6">
          Architecture
        </h4>
        <ul className="space-y-3 text-sm font-sans text-slate-300">
          <li>
            <a
              href="#services"
              className="hover:text-orange-500 transition-colors"
            >
              Service Domains
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-orange-500 transition-colors">
              Concept Work
            </a>
          </li>
          <li>
            <a
              href="#approach"
              className="hover:text-orange-500 transition-colors"
            >
              Methodology
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-6">
          Transmission
        </h4>
        <ul className="space-y-3 text-sm font-sans text-slate-300">
          <li>
            <a
              href="#inquiry"
              className="hover:text-orange-500 transition-colors"
            >
              Start Project
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Client Portal Auth
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-slate-600 text-xs font-mono flex flex-col md:flex-row justify-between items-center">
      <p>&copy; {new Date().getFullYear()} IndoInovasi. All systems nominal.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-slate-400 transition-colors">
          Privacy Node
        </a>
        <a href="#" className="hover:text-slate-400 transition-colors">
          Terms of Protocol
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-orange-500/30 selection:text-orange-200 smooth-scroll">
      {/* Global CSS for Animations & Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        .font-sans { font-family: 'Inter', sans-serif !important; }
        .font-serif { font-family: 'Space Grotesk', sans-serif !important; }
        .font-mono { font-family: 'JetBrains Mono', monospace !important; }

        html { scroll-behavior: smooth; }
        
        /* Service Architecture Animation Styles */
        @media (prefers-reduced-motion: no-preference) {
          .dash-signal {
            stroke-dasharray: 60 400;
            stroke-dashoffset: 460;
            animation: flow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
          .dash-signal-delayed {
            stroke-dasharray: 40 400;
            stroke-dashoffset: 440;
            animation: flow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            animation-delay: 1.5s;
          }
          @keyframes flow {
            to { stroke-dashoffset: 0; }
          }
          
          .animate-draw-wireframe {
            animation: draw-fade 1.5s ease-out forwards;
          }
          @keyframes draw-fade {
            0% { opacity: 0; transform: scale(0.98) translateY(5px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }
          
          .animate-scan-vertical {
            animation: scan-v 3s ease-in-out infinite;
          }
          @keyframes scan-v {
            0%, 100% { transform: translateY(0); opacity: 0.3; }
            50% { transform: translateY(210px); opacity: 1; }
          }
          
          .animate-conveyor {
            animation: conveyor-move 4s linear infinite;
          }
          .animate-conveyor-delayed {
            animation: conveyor-move 4s linear infinite;
            animation-delay: 2s;
          }
          @keyframes conveyor-move {
            0% { transform: translate(-30px, 0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translate(130px, -50px); opacity: 0; }
          }
        }
      `}</style>

      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main>
        <Hero />
        <ServiceArchitecture />
        <ProblemRouter />
        <ProofOfWork />
        <Approach />
        <InquiryForm />
      </main>

      <Footer />
    </div>
  );
}
