import { useLayoutEffect, useRef } from "react";
import { gsap, MOTION_OK } from "../../lib/motion.js";
import { APPROACH_STEPS } from "./approach.data.js";

export default function ApproachSection() {
  const ref = useRef(null);
  const track = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    // Desktop: the section pins and the four stages travel sideways.
    mm.add(`${MOTION_OK} and (min-width: 1024px)`, () => {
      const distance = () => track.current.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: () => -distance(), ease: "none",
        scrollTrigger: {
          trigger: ref.current, pin: true, scrub: 0.6, anticipatePin: 1,
          end: () => `+=${distance()}`, invalidateOnRefresh: true,
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="approach" ref={ref} data-tone="dark" className="relative overflow-hidden py-28 md:py-40 lg:flex lg:h-svh lg:items-center lg:py-0 motion-reduce:lg:overflow-x-auto">
      <div ref={track} className="flex flex-col gap-24 px-5 md:px-10 lg:w-max lg:flex-row lg:items-center lg:gap-0 lg:px-0">
        <div className="lg:w-[46vw] lg:shrink-0 lg:pl-10 lg:pr-16">
          <h2 className="display text-[14vw] md:text-[9vw] lg:text-[6.5vw]">
            Four stages,
            <br />
            no surprises.
          </h2>
        </div>
        {APPROACH_STEPS.map((step) => (
          <div key={step.number} className="relative lg:w-[42vw] lg:shrink-0 lg:pr-20">
            <span className="step-num outline-num display block text-[40vw] md:text-[24vw] lg:text-[18vw]">
              {step.number}
            </span>
            <h3 className="display -mt-[4vw] text-4xl md:text-5xl">{step.title}</h3>
            <p className="mt-5 max-w-md leading-relaxed text-mute">{step.description}</p>
          </div>
        ))}
        <div className="hidden lg:block lg:w-[10vw] lg:shrink-0" />
      </div>
    </section>
  );
}
