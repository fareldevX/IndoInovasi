import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { goTo } from "../../lib/motion.js";

const LINKS = [
  ["services", "Services"],
  ["work", "Work"],
  ["approach", "Approach"],
];

export default function SiteHeader({ mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (id) => {
    setMobileMenuOpen(false);
    goTo(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled ? "bg-bg/85" : ""}`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="relative z-50 font-display text-xl font-extrabold tracking-tight">
          IndoInovasi
        </a>
        <nav className="hidden items-center gap-10 text-[15px] md:flex">
          {LINKS.map(([id, label]) => (
            <button key={id} onClick={() => jump(id)} className="transition-colors hover:text-signal">
              {label}
            </button>
          ))}
          <button
            onClick={() => jump("inquiry")}
            className="border-b border-signal py-0.5 font-medium text-signal"
          >
            Start a project
          </button>
        </nav>
        <button
          className="relative z-50 md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-end gap-2 bg-bg px-5 pb-12">
          {[...LINKS, ["inquiry", "Start a project"]].map(([id, label]) => (
            <button
              key={id}
              onClick={() => jump(id)}
              className="display border-t border-line py-4 text-left text-[15vw] hover:text-signal"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
