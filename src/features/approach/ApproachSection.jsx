import { SectionHeader } from "../../components/ui/SitePrimitives.jsx";
import { APPROACH_STEPS } from "./approach.data.js";

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-800 scroll-mt-20"
    >
      <SectionHeader
        title="Methodology"
        subtitle="A disciplined, engineering-first approach to solving complex business problems."
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-16">
        <div className="hidden md:block absolute top-8 left-12 right-12 h-[2px] bg-gradient-to-r from-slate-900 via-orange-500/30 to-slate-900 z-0"></div>

        {APPROACH_STEPS.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col group">
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
}
