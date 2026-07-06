"use client";

import { useState, useRef, FormEvent } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const INDUSTRIES = [
  "Clinics & Health Practices",
  "Legal Practices",
  "Paramedic & Emergency Services",
  "Early Learning & Education",
  "Professional & Advisory Firms",
  "Trades & Local Services",
  "Other",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const sectionRef = useScrollReveal();
  const formRef = useScrollReveal();

  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const orgRef = useRef<HTMLInputElement>(null);
  const industryRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!nameRef.current?.value.trim()) errs.name = "Name is required.";
    if (!orgRef.current?.value.trim())
      errs.organization = "Organization is required.";
    if (!industryRef.current?.value)
      errs.industry = "Please select your industry.";
    if (!messageRef.current?.value.trim() || messageRef.current.value.trim().length < 10)
      errs.message = "Please include a message (at least 10 characters).";
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameRef.current?.value,
          organization: orgRef.current?.value,
          industry: industryRef.current?.value,
          message: messageRef.current?.value,
        }),
      });

      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-deep-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA headline */}
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className="reveal text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to make your team AI-ready?
          </h2>
          <p className="text-xl text-white/70 font-medium">Let&apos;s talk.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: context */}
          <div className="reveal">
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Tell us a little about your practice and what you&apos;re trying
              to accomplish. There&apos;s no pitch — just a conversation to see
              if we&apos;re a good fit.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-mint" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Prefer email?</p>
                  <a
                    href="mailto:office@centwiseai.ca"
                    className="text-white font-semibold hover:text-mint transition-colors text-base"
                  >
                    office@centwiseai.ca
                  </a>
                  <p className="text-white/40 text-xs mt-1">
                    Reach us directly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-mint" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Based in</p>
                  <p className="text-white font-semibold">Greater Toronto Area, Ontario</p>
                  <p className="text-white/40 text-xs mt-1">
                    In-person and remote engagements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div
            ref={formRef as React.RefObject<HTMLDivElement>}
            className="reveal reveal-delay-2"
          >
            {formState === "success" ? (
              <div className="bg-white/10 border border-white/20 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-mint/20 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-mint" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  Thanks — we&apos;ll be in touch shortly.
                </h3>
                <p className="text-white/60 leading-relaxed">
                  We usually respond within one business day. Looking forward to
                  the conversation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white/8 border border-white/15 rounded-2xl p-7 sm:p-8 space-y-5"
                aria-label="Contact form"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Name <span className="text-mint" aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={nameRef}
                    id="name"
                    type="text"
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-mint transition-colors text-sm ${
                      errors.name ? "border-red-400" : "border-white/20 focus:border-mint/60"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-300">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Organization */}
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Organization <span className="text-mint" aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={orgRef}
                    id="organization"
                    type="text"
                    autoComplete="organization"
                    aria-required="true"
                    aria-describedby={errors.organization ? "org-error" : undefined}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-mint transition-colors text-sm ${
                      errors.organization ? "border-red-400" : "border-white/20 focus:border-mint/60"
                    }`}
                    placeholder="Practice or company name"
                  />
                  {errors.organization && (
                    <p id="org-error" role="alert" className="mt-1.5 text-xs text-red-300">
                      {errors.organization}
                    </p>
                  )}
                </div>

                {/* Industry */}
                <div>
                  <label
                    htmlFor="industry"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Industry <span className="text-mint" aria-hidden="true">*</span>
                  </label>
                  <select
                    ref={industryRef}
                    id="industry"
                    aria-required="true"
                    aria-describedby={errors.industry ? "industry-error" : undefined}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-mint transition-colors text-sm appearance-none cursor-pointer ${
                      errors.industry ? "border-red-400" : "border-white/20 focus:border-mint/60"
                    }`}
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-500 bg-navy">
                      Select your industry
                    </option>
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind} className="text-ink bg-white">
                        {ind}
                      </option>
                    ))}
                  </select>
                  {errors.industry && (
                    <p id="industry-error" role="alert" className="mt-1.5 text-xs text-red-300">
                      {errors.industry}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Message <span className="text-mint" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    ref={messageRef}
                    id="message"
                    rows={4}
                    aria-required="true"
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-mint transition-colors text-sm resize-none ${
                      errors.message ? "border-red-400" : "border-white/20 focus:border-mint/60"
                    }`}
                    placeholder="Tell us what you're working on and what you're hoping to change..."
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-300">
                      {errors.message}
                    </p>
                  )}
                </div>

                {formState === "error" && (
                  <div role="alert" className="px-4 py-3 bg-red-500/15 border border-red-400/30 rounded-xl text-red-300 text-sm">
                    Something went wrong. Please try again or email us directly at{" "}
                    <a href="mailto:office@centwiseai.ca" className="underline">
                      office@centwiseai.ca
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full py-4 bg-mint text-deep-green text-base font-bold rounded-xl hover:bg-mint/90 active:scale-[0.98] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    "Send message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
