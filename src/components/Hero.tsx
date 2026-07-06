"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headlineRef.current, subRef.current, ctaRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 120 + i * 120);
    });
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-18 overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-cream via-cream/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-mint/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text column */}
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-6">
            AI Adoption &amp; Technology Consulting — Greater Toronto Area
          </p>
          <h1
            ref={headlineRef}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl leading-[1.1] tracking-tight text-ink mb-6"
          >
            Get your team{" "}
            <span className="text-deep-green">confidently using AI</span>
            {" "}— without the guesswork.
          </h1>
          <p
            ref={subRef}
            className="text-lg sm:text-xl text-muted leading-relaxed mb-10"
          >
            CentWiseAI helps practices of every kind adopt AI and modern
            productivity tools, then trains your people to actually use them.
            Practical, hands-on, and built around how your team already works.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="px-7 py-4 bg-deep-green text-white text-base font-semibold rounded-xl hover:bg-deep-green/90 active:scale-95 transition-all duration-200 shadow-lg shadow-deep-green/20 focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
            >
              Book a discovery call
            </button>
            <button
              onClick={() => scrollTo("#process")}
              className="px-7 py-4 text-deep-green text-base font-semibold rounded-xl border-2 border-deep-green/20 hover:border-mint hover:text-mint transition-all duration-200 focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
            >
              See how we work →
            </button>
          </div>
        </div>

        {/* Abstract graphic column */}
        <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
          <HeroGraphic />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40" aria-hidden="true">
        <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 560 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-lg xl:max-w-xl"
      role="img"
      aria-label="Abstract geometric pattern"
    >
      {/* Outer rings — echo of the ¢ mark */}
      <circle cx="320" cy="240" r="210" stroke="#5DCAA5" strokeWidth="1" opacity="0.12" />
      <circle cx="320" cy="240" r="168" stroke="#085041" strokeWidth="1.5" opacity="0.15" />
      <circle cx="320" cy="240" r="126" stroke="#5DCAA5" strokeWidth="2" opacity="0.22" />
      <circle cx="320" cy="240" r="84" stroke="#085041" strokeWidth="2.5" opacity="0.3" />
      <circle cx="320" cy="240" r="42" fill="#5DCAA5" opacity="0.12" />
      <circle cx="320" cy="240" r="18" fill="#085041" opacity="0.25" />
      <circle cx="320" cy="240" r="7" fill="#5DCAA5" opacity="0.9" />

      {/* Floating card — AI output */}
      <rect x="30" y="70" width="200" height="118" rx="14" fill="white" />
      <rect x="30" y="70" width="200" height="118" rx="14" stroke="#5DCAA5" strokeWidth="1.5" opacity="0.4" />
      <circle cx="62" cy="106" r="12" fill="#085041" opacity="0.85" />
      <rect x="84" y="100" width="90" height="9" rx="4.5" fill="#1C2B27" opacity="0.75" />
      <rect x="84" y="115" width="120" height="7" rx="3.5" fill="#5E6B66" opacity="0.35" />
      <rect x="50" y="148" width="68" height="24" rx="12" fill="#5DCAA5" opacity="0.85" />
      <rect x="128" y="155" width="80" height="8" rx="4" fill="#5E6B66" opacity="0.25" />

      {/* Floating card — Team adoption */}
      <rect x="360" y="300" width="168" height="104" rx="14" fill="white" />
      <rect x="360" y="300" width="168" height="104" rx="14" stroke="#085041" strokeWidth="1.5" opacity="0.2" />
      <rect x="378" y="320" width="56" height="8" rx="4" fill="#085041" opacity="0.7" />
      <rect x="378" y="334" width="130" height="6" rx="3" fill="#5E6B66" opacity="0.3" />
      <rect x="378" y="346" width="100" height="6" rx="3" fill="#5E6B66" opacity="0.2" />
      <rect x="378" y="368" width="44" height="20" rx="10" fill="#085041" opacity="0.8" />
      <rect x="430" y="373" width="60" height="8" rx="4" fill="#5DCAA5" opacity="0.5" />

      {/* Connector line */}
      <path d="M230 129 Q280 160 320 198" stroke="#5DCAA5" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.4" />
      <path d="M320 282 Q340 296 360 330" stroke="#085041" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.25" />

      {/* Scattered accent dots */}
      <circle cx="82" cy="320" r="6" fill="#5DCAA5" opacity="0.35" />
      <circle cx="500" cy="130" r="9" fill="#085041" opacity="0.18" />
      <circle cx="510" cy="390" r="5" fill="#5DCAA5" opacity="0.3" />
      <circle cx="140" cy="430" r="7" fill="#085041" opacity="0.12" />
      <circle cx="55" cy="200" r="4" fill="#5DCAA5" opacity="0.45" />
      <circle cx="448" cy="52" r="5" fill="#5DCAA5" opacity="0.3" />
      <circle cx="200" cy="30" r="4" fill="#085041" opacity="0.15" />
      <circle cx="530" cy="255" r="4" fill="#085041" opacity="0.2" />
    </svg>
  );
}
