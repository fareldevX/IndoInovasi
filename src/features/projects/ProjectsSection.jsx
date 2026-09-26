import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../../components/ui/SitePrimitives.jsx";
import { PROJECTS } from "./projects.data.js";

export default function ProjectsSection() {
  return (
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
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="border border-slate-700 bg-slate-800/50 px-3 py-1 rounded-md text-xs font-mono text-slate-300"
                    >
                      {technology}
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
}
