import { useState, useEffect } from "react";
import SiteHeader from "../../components/layout/SiteHeader.jsx";
import SiteFooter from "../../components/layout/SiteFooter.jsx";
import ServicesSection from "../../features/services/ServicesSection.jsx";
import SolutionsSection from "../../features/solutions/SolutionsSection.jsx";
import ProjectsSection from "../../features/projects/ProjectsSection.jsx";
import ApproachSection from "../../features/approach/ApproachSection.jsx";
import InquirySection from "../../features/inquiry/InquirySection.jsx";
import HeroSection from "./HeroSection.jsx";

export default function HomePage() {
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
      <SiteHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main>
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
