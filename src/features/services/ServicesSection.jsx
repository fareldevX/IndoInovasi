import { useLayoutEffect, useRef, useState } from "react";
import { Lines } from "../../components/ui/SitePrimitives.jsx";
import { gsap, ScrollTrigger, MOTION_OK } from "../../lib/motion.js";
import { SERVICES } from "./services.data.js";

export default function ServicesSection() {
  const ref = useRef(null);
  const [open, setOpen] = useState(0);

  // Each service name slides in from alternating sides as it scrolls into view.
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      MOTION_OK,
      () => {
        gsap.from(".svc-head .ln", {
          yPercent: 115, duration: 1, ease: "power4.out", stagger: 0.1,
          scrollTrigger: { trigger: ".svc-head", start: "top 80%" },
        });
        gsap.utils.toArray(".svc-name").forEach((el, i) =>
          gsap.fromTo(el, { xPercent: i % 2 ? 7 : -7 }, {
            xPercent: 0, ease: "none",
            scrollTrigger: { trigger: el, start: "top 98%", end: "top 55%", scrub: true },
          }),
        );
      },
      ref,
    );
    return () => mm.revert();
  }, []);

  // Open one row at a time. Height is tweened, not toggled.
  useLayoutEffect(() => {
    const d = window.matchMedia(MOTION_OK).matches ? 0.7 : 0;
    ref.current.querySelectorAll(".svc-panel").forEach((panel, i) =>
      gsap.to(panel, {
        height: i === open ? "auto" : 0, duration: d, ease: "power3.inOut",
        onComplete: () => ScrollTrigger.refresh(),
      }),
    );
  }, [open]);

  return (
    <section id="services" ref={ref} data-tone="dark" className="relative px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="svc-head display mb-20 text-[11vw] md:mb-32 md:text-[8vw]">
          <Lines lines={["Six things", { t: "we do well.", cls: "md:pl-[14vw]" }]} />
        </h2>

        <ol>
          {SERVICES.map((s, i) => {
            const active = open === i;
            return (
              <li key={s.id} className="border-t border-line last:border-b">
                <button
                  className="group flex w-full items-baseline gap-4 py-5 text-left md:gap-8 md:py-7"
                  aria-expanded={active}
                  onClick={() => setOpen(active ? -1 : i)}
                >
                  <span className="w-8 shrink-0 text-sm text-mute md:w-12">0{i + 1}</span>
                  <span
                    className={`svc-name display text-[11.5vw] transition-[color,translate] duration-500 group-hover:translate-x-3 md:text-[7.5vw] ${
                      i % 2 ? "md:pl-[10vw]" : ""
                    } ${active ? "text-signal" : "text-fg"}`}
                  >
                    {s.name}
                  </span>
                </button>

                <div className="svc-panel h-0 overflow-hidden" inert={!active}>
                  <div className="grid gap-8 pb-12 pl-12 md:grid-cols-12 md:gap-10 md:pl-20">
                    <div className="md:col-span-5 md:col-start-2">
                      <p className="font-display text-2xl font-bold leading-tight md:text-3xl">{s.title}</p>
                      <p className="mt-5 max-w-md leading-relaxed text-mute">{s.shortDesc}</p>
                    </div>
                    <div className="md:col-span-4 md:col-start-8">
                      <p className="text-sm text-mute">The problem</p>
                      <p className="mt-2 leading-relaxed">{s.problem}</p>
                      <p className="mt-6 text-sm text-mute">What you get</p>
                      <ul className="mt-2 space-y-1.5">
                        {s.deliverables.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
