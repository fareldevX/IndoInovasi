import { useLayoutEffect, useRef } from "react";
import { ButtonOutline, ButtonPrimary, Lines } from "../../components/ui/SitePrimitives.jsx";
import { gsap, MOTION_OK, goTo } from "../../lib/motion.js";

const TITLE = [
  "Software that",
  { t: "works the", cls: "md:pl-[8vw]" },
  { t: "night shift.", cls: "md:pl-[19vw]" },
];

export default function HeroSection() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      MOTION_OK,
      () => {
        // The one orchestrated entrance on the page: headline lines rise out of their masks.
        gsap.from(".ln", { yPercent: 115, duration: 1.2, ease: "power4.out", stagger: 0.14, delay: 0.1 });
        gsap.from(".hero-aside", { opacity: 0, y: 24, duration: 1, ease: "power2.out", delay: 0.9 });
        // Scrolling away pulls the lines apart in opposite directions.
        const scrub = { trigger: ref.current, start: "top top", end: "bottom top", scrub: true };
        gsap.utils.toArray(".ln-mask").forEach((el, i) =>
          gsap.to(el, { xPercent: (1 - i) * 7, ease: "none", scrollTrigger: scrub }),
        );
        gsap.to(".hero-title", { yPercent: -14, ease: "none", scrollTrigger: scrub });
      },
      ref,
    );
    return () => mm.revert();
  }, []);

  return (
    <section id="top" ref={ref} data-tone="dark" className="relative flex min-h-svh flex-col justify-end overflow-hidden px-5 pb-12 pt-32 md:px-10">
      <h1 className="hero-title display text-[13vw] md:text-[11vw] 2xl:text-[10rem]">
        <Lines lines={TITLE} />
      </h1>
      <div className="hero-aside mt-12 flex flex-col justify-between gap-8 md:ml-[44vw] md:mt-16 md:max-w-xl">
        <p className="text-lg leading-relaxed text-mute">
          IndoInovasi builds AI automation, company websites, landing pages, online stores, SEO and
          analytics. We take on the work your team repeats, and the pages your customers judge you
          by.
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <ButtonPrimary onClick={() => goTo("inquiry")}>Start a project</ButtonPrimary>
          <ButtonOutline onClick={() => goTo("services")}>See what we build</ButtonOutline>
        </div>
      </div>
    </section>
  );
}
