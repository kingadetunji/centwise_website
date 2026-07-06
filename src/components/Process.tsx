"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "1",
    title: "Discover",
    description:
      "We learn your practice and find where AI saves the most time.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Set up",
    description:
      "We configure the tools, assistants, and automations around your real workflow.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Train",
    description:
      "We get your whole team confident and self-sufficient, in their own language.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Support",
    description:
      "We stay on hand as your needs grow — a partner, not a one-time vendor.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function Process() {
  const titleRef = useScrollReveal();
  const stepsRef = useScrollReveal();

  return (
    <section id="process" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className="reveal text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest text-mint uppercase mb-4">
            How we work
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
            Four steps to AI-ready.
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Simple, human, and done with you — not to you.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div
          ref={stepsRef as React.RefObject<HTMLDivElement>}
          className="reveal hidden lg:block"
        >
          <div className="relative">
            {/* Connector line */}
            <div
              className="absolute top-10 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-gradient-to-r from-mint/30 via-mint/60 to-mint/30"
              aria-hidden="true"
            />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center`}>
                  {/* Number badge */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-deep-green flex items-center justify-center mb-6 shadow-lg shadow-deep-green/20">
                    <span className="font-heading font-bold text-2xl text-white">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-ink mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm max-w-xs">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6">
              {/* Left: number + line */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-deep-green flex items-center justify-center flex-shrink-0 shadow-md shadow-deep-green/20">
                  <span className="font-heading font-bold text-xl text-white">
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-mint/50 to-mint/10 my-2" aria-hidden="true" />
                )}
              </div>

              {/* Right: content */}
              <div className={`pb-10 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-mint">{step.icon}</span>
                  <h3 className="font-heading font-bold text-xl text-ink">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
