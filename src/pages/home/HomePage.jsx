import { useState, useEffect, useLayoutEffect, useRef } from "react";
import SiteHeader from "../../components/layout/SiteHeader.jsx";
import SiteFooter from "../../components/layout/SiteFooter.jsx";
import ServicesSection from "../../features/services/ServicesSection.jsx";
import SolutionsSection from "../../features/solutions/SolutionsSection.jsx";
import ProjectsSection from "../../features/projects/ProjectsSection.jsx";
import ApproachSection from "../../features/approach/ApproachSection.jsx";
import InquirySection from "../../features/inquiry/InquirySection.jsx";
import HeroSection from "./HeroSection.jsx";
import { gsap, ScrollTrigger, MOTION_OK } from "../../lib/motion.js";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const stage = useRef(null);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  // Background story: the page's tone follows whichever section holds the middle of the viewport,
  // so dark and light sections dissolve into each other instead of cutting.
  useLayoutEffect(() => {
    const root = stage.current;
    const triggers = [...root.querySelectorAll("[data-tone]")].map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top 50%",
        end: "bottom 50%",
        onToggle: (self) => self.isActive && (root.dataset.tone = el.dataset.tone),
      }),
    );
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.to(".light", {
        y: () => window.innerHeight * 0.9, x: () => window.innerWidth * -0.2, ease: "none",
        scrollTrigger: { trigger: root, start: "top top", end: "bottom bottom", scrub: 1.5 },
      });
    });
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return () => {
      triggers.forEach((t) => t.kill());
      mm.revert();
    };
  }, []);

  return (
    <div ref={stage} data-tone="dark" className="stage relative min-h-screen">
      <div className="light" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <SiteHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <SolutionsSection />
        <ProjectsSection />
        <ApproachSection />
        <InquirySection />
      </main>
      <SiteFooter />
    </div>
  );
}
