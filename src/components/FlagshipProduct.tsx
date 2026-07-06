"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FlagshipProduct() {
  const textRef = useScrollReveal();
  const mockupRef = useScrollReveal();

  return (
    <section
      id="product"
      className="py-20 sm:py-28 bg-navy"
      aria-label="Built by people who ship AI"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Text */}
          <div ref={textRef as React.RefObject<HTMLDivElement>} className="reveal">
            <p className="text-xs font-semibold tracking-widest text-mint/70 uppercase mb-5">
              Built by people who ship AI
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
              We've been in the build seat.
            </h2>
            <p className="text-lg text-white/65 leading-relaxed mb-6">
              CentWiseAI began as an AI-powered savings app we designed, built,
              and shipped end to end. That same product instinct — making AI
              genuinely useful for everyday people — is what we now bring to
              your team.
            </p>
            <p className="text-white/50 text-base leading-relaxed">
              When you hire CentWiseAI, you're not hiring a consultant who
              attended a webinar. You're hiring a builder who knows what it
              takes to get AI from idea to daily use — because we've done it.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {["AI Product Design", "End-to-end Delivery", "Real-world Adoption", "GTA-based"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm font-medium text-mint bg-mint/10 rounded-full border border-mint/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* App mockup */}
          <div
            ref={mockupRef as React.RefObject<HTMLDivElement>}
            className="reveal reveal-delay-2 flex justify-center lg:justify-end"
            aria-hidden="true"
          >
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function AppMockup() {
  return (
    <div className="relative w-full max-w-sm">
      {/* Phone frame */}
      <div className="relative bg-white/5 border border-white/15 rounded-[2.5rem] p-3 shadow-2xl shadow-black/40">
        {/* Status bar */}
        <div className="flex justify-between items-center px-4 py-2 mb-1">
          <span className="text-white/40 text-xs">9:41</span>
          <div className="w-20 h-4 bg-white/10 rounded-full" />
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-white/30 rounded-sm" />
            <div className="w-3 h-3 bg-white/30 rounded-sm" />
          </div>
        </div>

        {/* App content area */}
        <div className="bg-[#0A1628] rounded-3xl overflow-hidden">
          {/* App header */}
          <div className="bg-deep-green px-5 pt-5 pb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-mint/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-mint flex items-center justify-center">
                  <span className="text-mint text-[8px] font-bold">¢</span>
                </div>
              </div>
              <span className="text-white/80 text-sm font-semibold">CentWiseAI</span>
            </div>
            <p className="text-white/50 text-xs mb-1">Your AI savings summary</p>
            <p className="text-white text-2xl font-bold font-heading">$247 saved</p>
            <p className="text-mint text-xs mt-1">↑ 18% vs last month</p>
          </div>

          {/* Content cards */}
          <div className="p-4 space-y-3">
            {/* AI insight card */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-mint/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-mint" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/80 text-xs font-semibold mb-1">AI insight</p>
                  <p className="text-white/50 text-xs leading-relaxed">Switch to annual billing on your 3 subscriptions to save $94/yr automatically.</p>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/8">
              <div className="flex justify-between items-center mb-2">
                <p className="text-white/60 text-xs">Monthly goal</p>
                <p className="text-mint text-xs font-bold">82%</p>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-to-r from-mint to-deep-green rounded-full" />
              </div>
            </div>

            {/* Action rows */}
            {[
              { label: "Grocery run optimised", value: "-$12" },
              { label: "Utility bill alert", value: "-$8" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/6"
              >
                <p className="text-white/60 text-xs">{row.label}</p>
                <span className="text-mint text-xs font-bold">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow effect behind phone */}
      <div
        className="absolute inset-x-8 bottom-0 h-24 bg-mint/20 blur-3xl -z-10"
        aria-hidden="true"
      />
    </div>
  );
}
