"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    badge: "Lead service",
    title: "AI Adoption & Enablement",
    promise: 'We turn “we should use AI” into your team actually using it.',
    points: [
      "Assess where AI fits your day-to-day operations.",
      "Set up the right assistants and tools for your practice.",
      "Create simple ways of working your team will stick with.",
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    badge: null,
    title: "Productivity Tools & Workflow Automation",
    promise: "Your everyday tools, finally working as one system.",
    points: [
      "Configure modern productivity suites (Microsoft 365, Google Workspace).",
      "Connect shared email, documents, and team collaboration.",
      "Automate intake, bookings, routing, reminders, and follow-ups.",
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    badge: null,
    title: "Team Training & AI Coaching",
    promise: "Tools are easy. Adoption is the hard part — that's our specialty.",
    points: [
      "Live, role-specific training your whole team can act on immediately.",
      "Recorded sessions your team can revisit anytime.",
      "Coaching for the practice lead so the momentum sticks.",
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    badge: null,
    title: "Websites & Digital Presence",
    promise: "A clean, modern site that does its job — built fast.",
    points: [
      "Mobile-first websites on a custom domain with professional email.",
      "Reliable hosting and ongoing care.",
      "A tidy front door to the AI-ready practice behind it.",
    ],
  },
];

export default function Services() {
  const titleRef = useScrollReveal();

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className="reveal text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest text-mint uppercase mb-4">
            What we do
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
            Real help, not a slide deck.
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Four areas of work. One goal: a practice that runs confidently on AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[0];
  delay: number;
}) {
  const ref = useScrollReveal();

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal reveal-delay-${delay + 1} card-hover group flex flex-col p-7 rounded-2xl bg-white border border-black/8 shadow-sm hover:border-mint/40`}
    >
      <div className="w-14 h-14 rounded-xl bg-cream flex items-center justify-center text-deep-green mb-5 group-hover:bg-deep-green group-hover:text-white transition-colors duration-300">
        {service.icon}
      </div>

      {service.badge && (
        <span className="inline-block px-2.5 py-1 text-xs font-semibold text-mint bg-mint/10 rounded-full mb-3 self-start">
          {service.badge}
        </span>
      )}

      <h3 className="font-heading font-bold text-lg text-ink mb-2 leading-snug">
        {service.title}
      </h3>

      <p className="text-sm font-medium text-deep-green mb-4 leading-snug">
        {service.promise}
      </p>

      <ul className="mt-auto space-y-2.5">
        {service.points.map((point, j) => (
          <li key={j} className="flex items-start gap-2.5 text-sm text-muted">
            <svg
              className="w-4 h-4 text-mint mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
