import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { ButtonPrimary } from "../ui/SitePrimitives.jsx";

export default function SiteHeader({ mobileMenuOpen, setMobileMenuOpen }) {
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
        <div className="flex items-center gap-2 cursor-pointer z-50">
          <Code2 className="w-6 h-6 text-orange-500" />
          <span className="text-xl font-bold tracking-tighter uppercase font-serif text-white">
            IndoInovasi
          </span>
        </div>

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
}
