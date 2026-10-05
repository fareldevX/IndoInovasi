import { useLayoutEffect, useRef } from "react";
import { gsap, MOTION_OK } from "../../lib/motion.js";
import { PROJECTS } from "./projects.data.js";

export default function ProjectsSection() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      MOTION_OK,
      () => {
        gsap.utils.toArray(".prj").forEach((prj) => {
          const num = prj.querySelector(".prj-num");
          const target = Number(num.dataset.value);
          const counter = { v: 0 };
          // The metric counts up once, as the project enters.
          gsap.to(counter, {
            v: target, duration: 1.6, ease: "power3.out",
            onUpdate: () => (num.textContent = Math.round(counter.v)),
            scrollTrigger: { trigger: prj, start: "top 70%", once: true },
          });
          // It also drifts slower than the text, giving the number physical weight.
          gsap.fromTo(num, { yPercent: 10 }, {
            yPercent: -10, ease: "none",
            scrollTrigger: { trigger: prj, start: "top bottom", end: "bottom top", scrub: true },
          });
        });
      },
      ref,
    );
    return () => mm.revert();
  }, []);

  return (
    <section id="work" ref={ref} data-tone="light" className="relative px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="display mb-20 max-w-5xl text-[11vw] md:mb-32 md:text-[7vw]">
          Proof, in numbers we can defend.
        </h2>

        <div className="space-y-32 md:space-y-52">
          {PROJECTS.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={p.id} className="prj grid items-end gap-10 md:grid-cols-12">
                <div className={`md:col-span-7 ${flip ? "md:order-2 md:text-right" : ""}`}>
                  <p className="display text-[34vw] leading-[0.8] md:text-[21vw]">
                    <span className="prj-num inline-block" data-value={p.metric}>{p.metric}</span>
                    <span className="text-[0.38em] text-signal">{p.unit}</span>
                  </p>
                  <p className="mt-4 text-lg font-medium">{p.metricLabel}</p>
                </div>
                <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
                  <p className="text-sm text-mute">{p.type}</p>
                  <h3 className="display mt-2 text-4xl md:text-5xl">{p.title}</h3>
                  <p className="mt-8 leading-relaxed">{p.challenge}</p>
                  <p className="mt-4 leading-relaxed text-mute">{p.execution}</p>
                  <p className="mt-6 text-sm">{p.stack.join(", ")}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
