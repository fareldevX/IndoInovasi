import { useLayoutEffect, useRef } from "react";
import { gsap, MOTION_OK } from "../../lib/motion.js";
import { SOLUTIONS } from "./solutions.data.js";

const OFFSETS = ["md:ml-0", "md:ml-[22vw]", "md:ml-[8vw]"];

export default function SolutionsSection() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      MOTION_OK,
      () => {
        // Statements start dim and "light up" as the reader reaches them.
        gsap.utils.toArray(".sol-quote").forEach((el) =>
          gsap.fromTo(el, { opacity: 0.15 }, {
            opacity: 1, ease: "none",
            scrollTrigger: { trigger: el, start: "top 85%", end: "top 40%", scrub: true },
          }),
        );
      },
      ref,
    );
    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} data-tone="dark" className="relative px-5 py-28 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1600px] space-y-24 md:space-y-40">
        {SOLUTIONS.map((s, i) => (
          <div key={i} className={`max-w-4xl ${OFFSETS[i]}`}>
            <p className="sol-quote display text-[8.5vw] font-bold leading-[0.98] md:text-[4.4vw]">
              “{s.problem}”
            </p>
            <p className="mt-6 max-w-lg border-l-2 border-signal pl-5 leading-relaxed text-mute">
              {s.approach}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
