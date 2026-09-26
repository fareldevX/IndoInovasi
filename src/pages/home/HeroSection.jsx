import { ArrowRight, Terminal } from "lucide-react";
import {
  ButtonPrimary,
  ButtonOutline,
} from "../../components/ui/SitePrimitives.jsx";

export default function HeroSection() {
  const videoAssetPath =
    "https://cdn.pixabay.com/video/2021/08/11/84687-587841100_large.mp4";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 w-full h-full z-0 motion-reduce:hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src={videoAssetPath} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10"></div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.3)_0%,rgba(2,6,23,0.8)_100%)]"></div>

      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center mt-20 md:mt-0 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Terminal className="w-4 h-4 text-orange-500" />
          <span className="text-xs md:text-sm font-mono text-orange-500 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            System Architecture & Automation
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-8">
          Engineered for <br />
          <span className="text-slate-300">Operational Scale.</span>
        </h1>

        <p className="text-lg md:text-xl font-sans text-slate-400 max-w-2xl font-light leading-relaxed mb-12">
          We build data-driven systems, custom web platforms, and intelligent
          automations designed to eliminate friction and accelerate your
          business growth.
        </p>

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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 animate-pulse z-20">
        <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400">
          Scroll Sequence
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-orange-500 to-transparent"></div>
      </div>
    </section>
  );
}
