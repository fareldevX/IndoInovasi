import { useLayoutEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonPrimary, ButtonOutline, Lines } from "../../components/ui/SitePrimitives.jsx";
import { gsap, MOTION_OK } from "../../lib/motion.js";
import { SERVICES } from "../services/services.data.js";

const field =
  "w-full border-0 border-b border-line bg-transparent py-3 text-lg text-fg placeholder:text-mute focus:border-signal focus:outline-none";
const label = "mb-1 block text-sm text-mute";

export default function InquirySection() {
  const ref = useRef(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ intent: "", details: "", budget: "", name: "", email: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const set = (key) => (e) => setFormData({ ...formData, [key]: e.target.value });

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      MOTION_OK,
      () => {
        gsap.from(".inq-head .ln", {
          yPercent: 115, duration: 1.1, ease: "power4.out", stagger: 0.12,
          scrollTrigger: { trigger: ref.current, start: "top 60%" },
        });
      },
      ref,
    );
    return () => mm.revert();
  }, []);

  const handleNext = () => {
    if (step === 1 && formData.intent) setStep(2);
    else if (step === 2 && formData.details) setStep(3);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const steps = ["Service", "Brief", "Contact"];

  return (
    <section id="inquiry" ref={ref} data-tone="dark" className="relative px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-12">
        <h2 className="inq-head display text-[14vw] md:text-[9vw] lg:col-span-6 lg:text-[6.6vw]">
          <Lines lines={["Tell us what’s", "slowing you", "down."]} />
        </h2>

        <div className="lg:col-span-5 lg:col-start-8 lg:pt-6">
          {isSuccess ? (
            <div role="status">
              <CheckCircle2 className="mb-6 h-12 w-12 text-signal" />
              <p className="display text-4xl">Message received.</p>
              <p className="mt-4 max-w-md leading-relaxed text-mute">
                We’ll read your brief and reply within one business day.
              </p>
            </div>
          ) : (
            <>
              <ol className="mb-12 flex gap-8 border-b border-line pb-4 text-sm">
                {steps.map((name, i) => (
                  <li key={name} className={step >= i + 1 ? "text-signal" : "text-mute"}>
                    {i + 1}. {name}
                  </li>
                ))}
              </ol>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div>
                    <p className="display mb-6 text-3xl">What do you need?</p>
                    <div className="divide-y divide-line border-y border-line">
                      {SERVICES.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, intent: s.id })}
                          aria-pressed={formData.intent === s.id}
                          className={`flex w-full items-center justify-between py-4 text-left text-lg transition-colors hover:text-signal ${
                            formData.intent === s.id ? "text-signal" : ""
                          }`}
                        >
                          {s.title}
                          {formData.intent === s.id && <CheckCircle2 className="h-5 w-5 shrink-0" />}
                        </button>
                      ))}
                    </div>
                    <div className="mt-10 flex justify-end">
                      <ButtonPrimary onClick={handleNext} disabled={!formData.intent}>
                        Next: your brief <ArrowRight className="h-4 w-4" />
                      </ButtonPrimary>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8">
                    <p className="display text-3xl">Describe the problem or the project.</p>
                    <div>
                      <label className={label} htmlFor="details">Project details</label>
                      <textarea id="details" className={`${field} min-h-32 resize-none`} value={formData.details} onChange={set("details")} required />
                    </div>
                    <div>
                      <label className={label} htmlFor="budget">Budget range</label>
                      <select id="budget" className={`${field} appearance-none`} value={formData.budget} onChange={set("budget")}>
                        <option value="" disabled>Select a range</option>
                        <option value="tier1">MVP (IDR 15M – 35M)</option>
                        <option value="tier2">Core system (IDR 35M – 75M)</option>
                        <option value="tier3">Enterprise (IDR 75M+)</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <ButtonOutline onClick={() => setStep(1)}>Back</ButtonOutline>
                      <ButtonPrimary onClick={handleNext} disabled={!formData.details}>
                        Next: contact <ArrowRight className="h-4 w-4" />
                      </ButtonPrimary>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8">
                    <p className="display text-3xl">Where should we reply?</p>
                    <div>
                      <label className={label} htmlFor="name">Full name</label>
                      <input id="name" type="text" className={field} value={formData.name} onChange={set("name")} required />
                    </div>
                    <div>
                      <label className={label} htmlFor="email">Work email</label>
                      <input id="email" type="email" className={field} value={formData.email} onChange={set("email")} required />
                    </div>
                    <div>
                      <label className={label} htmlFor="company">Company (optional)</label>
                      <input id="company" type="text" className={field} value={formData.company} onChange={set("company")} />
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <ButtonOutline onClick={() => setStep(2)}>Back</ButtonOutline>
                      <ButtonPrimary type="submit" disabled={isSubmitting || !formData.name || !formData.email}>
                        {isSubmitting ? "Sending…" : "Send brief"}
                      </ButtonPrimary>
                    </div>
                  </div>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
