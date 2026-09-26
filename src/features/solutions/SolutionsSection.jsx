import { SectionHeader } from "../../components/ui/SitePrimitives.jsx";
import { SOLUTIONS } from "./solutions.data.js";

export default function SolutionsSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-800">
      <SectionHeader
        title="Strategic Alignment"
        subtitle="Mapping operational friction to technical implementation."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {SOLUTIONS.map((solution, index) => (
          <div
            key={index}
            className="border border-slate-800 rounded-2xl bg-slate-900/30 p-8 flex flex-col hover:border-slate-700 transition-colors"
          >
            <h3 className="font-mono text-sm uppercase tracking-wider text-slate-500 mb-4">
              Identified Problem
            </h3>
            <p className="text-xl font-serif mb-8 flex-grow text-white leading-relaxed">
              "{solution.problem}"
            </p>
            <div className="border-t border-slate-800 pt-6 mt-auto">
              <h3 className="font-mono text-xs uppercase tracking-wider text-orange-500 mb-3">
                Technical Approach
              </h3>
              <p className="text-slate-400 font-sans text-sm leading-relaxed">
                {solution.approach}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
