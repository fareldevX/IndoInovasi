import { Code2 } from "lucide-react";

export default function SiteFooter() {
  return (
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
              <a
                href="#work"
                className="hover:text-orange-500 transition-colors"
              >
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
        <p>
          &copy; {new Date().getFullYear()} IndoInovasi. All systems nominal.
        </p>
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
}
