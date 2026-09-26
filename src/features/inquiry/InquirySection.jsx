import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  ButtonPrimary,
  ButtonOutline,
  SectionHeader,
} from "../../components/ui/SitePrimitives.jsx";
import { SERVICES } from "../services/services.data.js";

export default function InquirySection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    intent: "",
    details: "",
    budget: "",
    name: "",
    email: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  if (isSuccess) {
    return (
      <div className="bg-slate-900/50 text-white p-12 text-center border border-slate-800 rounded-3xl max-w-4xl mx-auto my-24 backdrop-blur-sm">
        <CheckCircle2 className="w-20 h-20 text-orange-500 mx-auto mb-6" />
        <h3 className="text-4xl font-serif font-bold mb-4">
          Transmission Received
        </h3>
        <p className="text-slate-400 font-sans text-lg max-w-md mx-auto leading-relaxed">
          Your inquiry has been logged. Our engineering team will review the
          specifications and respond within 24 business hours.
        </p>
      </div>
    );
  }

  return (
    <section
      id="inquiry"
      className="py-24 px-6 bg-slate-950 border-t border-slate-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.05)_0%,transparent_50%)]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader
          title="Initialize Project"
          subtitle="Define your parameters. We focus on technical viability and business outcomes."
        />

        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex items-center gap-2 mb-12 border-b border-slate-800 pb-6 font-mono text-xs uppercase tracking-widest text-slate-500">
            <span className={step >= 1 ? "text-orange-500 font-bold" : ""}>
              01. Intent
            </span>
            <span className="w-8 h-px bg-slate-700"></span>
            <span className={step >= 2 ? "text-orange-500 font-bold" : ""}>
              02. Specs
            </span>
            <span className="w-8 h-px bg-slate-700"></span>
            <span className={step >= 3 ? "text-orange-500 font-bold" : ""}>
              03. Identity
            </span>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <h3 className="text-2xl font-serif text-white mb-6">
                  What architecture are you looking to build?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, intent: service.id })
                      }
                      className={`text-left p-6 border rounded-xl transition-all ${
                        formData.intent === service.id
                          ? "border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/5"
                          : "border-slate-700 hover:border-slate-500 bg-slate-950/50"
                      }`}
                    >
                      <span className="block font-serif text-lg font-semibold mb-2 text-white">
                        {service.title}
                      </span>
                      <span className="block font-sans text-sm text-slate-400 line-clamp-2">
                        {service.shortDesc}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="mt-10 flex justify-end">
                  <ButtonPrimary
                    onClick={handleNext}
                    disabled={!formData.intent}
                  >
                    Proceed to Specs <ArrowRight className="w-4 h-4" />
                  </ButtonPrimary>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                <h3 className="text-2xl font-serif text-white">
                  Define the operational friction or project scope.
                </h3>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                    Project Details
                  </label>
                  <textarea
                    className="w-full border border-slate-700 rounded-xl p-5 min-h-[150px] font-sans text-white focus:outline-none focus:ring-1 focus:ring-orange-500 bg-slate-950/50 placeholder:text-slate-600 transition-all"
                    placeholder="Describe the current bottleneck or desired technical outcome..."
                    value={formData.details}
                    onChange={(event) =>
                      setFormData({ ...formData, details: event.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                    Estimated Budget Guideline
                  </label>
                  <select
                    className="w-full border border-slate-700 rounded-xl p-5 font-sans text-white focus:outline-none focus:ring-1 focus:ring-orange-500 bg-slate-950/50 appearance-none transition-all"
                    value={formData.budget}
                    onChange={(event) =>
                      setFormData({ ...formData, budget: event.target.value })
                    }
                  >
                    <option value="" disabled className="text-slate-500">
                      Select tier mapping...
                    </option>
                    <option value="tier1">
                      Exploratory / MVP (IDR 15M - 35M)
                    </option>
                    <option value="tier2">Core System (IDR 35M - 75M)</option>
                    <option value="tier3">
                      Enterprise Architecture (IDR 75M+)
                    </option>
                  </select>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <ButtonOutline onClick={() => setStep(1)}>Back</ButtonOutline>
                  <ButtonPrimary
                    onClick={handleNext}
                    disabled={!formData.details}
                  >
                    Proceed to Identity <ArrowRight className="w-4 h-4" />
                  </ButtonPrimary>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                <h3 className="text-2xl font-serif text-white">
                  Point of Contact
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full border border-slate-700 rounded-xl p-4 font-sans text-white focus:outline-none focus:ring-1 focus:ring-orange-500 bg-slate-950/50 transition-all"
                      value={formData.name}
                      onChange={(event) =>
                        setFormData({ ...formData, name: event.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      className="w-full border border-slate-700 rounded-xl p-4 font-sans text-white focus:outline-none focus:ring-1 focus:ring-orange-500 bg-slate-950/50 transition-all"
                      value={formData.email}
                      onChange={(event) =>
                        setFormData({ ...formData, email: event.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      className="w-full border border-slate-700 rounded-xl p-4 font-sans text-white focus:outline-none focus:ring-1 focus:ring-orange-500 bg-slate-950/50 transition-all"
                      value={formData.company}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          company: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center border-t border-slate-800 pt-8 mt-4">
                  <ButtonOutline onClick={() => setStep(2)}>Back</ButtonOutline>
                  <ButtonPrimary
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email}
                  >
                    {isSubmitting ? "Transmitting..." : "Execute Submission"}
                  </ButtonPrimary>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
