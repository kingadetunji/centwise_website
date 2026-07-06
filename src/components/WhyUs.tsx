"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const edges = [
  {
    number: "01",
    title: "We build AI, not just talk about it.",
    body: "CentWiseAI started as a real, shipped AI product. You're hiring a builder who has done it — not a slide deck.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Adoption is our focus.",
    body: "Most teams stall after the pilot. We stay until your people actually use AI in their daily work — that's where the real value is.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Hands-on and local.",
    body: "A real GTA partner who sets things up with you, trains your team in person, and stays reachable — not an overseas ticket queue.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Built on tools you already trust.",
    body: "We work inside the modern platforms your team knows, so there's less to learn and faster results from day one.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  const titleRef = useScrollReveal();

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-deep-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className="reveal text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest text-mint/70 uppercase mb-4">
            The CentWiseAI edge
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Why practices choose us.
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            We're not a generic agency. We're a hands-on team that ships real AI — and stays with you until your people are running on it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {edges.map((edge, i) => (
            <EdgeCard key={i} edge={edge} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EdgeCard({
  edge,
  delay,
}: {
  edge: (typeof edges)[0];
  delay: number;
}) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal reveal-delay-${delay + 1} group p-8 rounded-2xl bg-white/6 border border-white/10 hover:bg-white/10 hover:border-mint/30 transition-all duration-300`}
    >
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-xl bg-mint/15 flex items-center justify-center text-mint flex-shrink-0 group-hover:bg-mint group-hover:text-deep-green transition-colors duration-300">
          {edge.icon}
        </div>
        <div>
          <span className="text-xs font-semibold tracking-widest text-mint/50 uppercase">
            {edge.number}
          </span>
          <h3 className="font-heading font-bold text-xl text-white mt-1 mb-3 leading-snug">
            {edge.title}
          </h3>
          <p className="text-white/65 leading-relaxed">
            {edge.body}
          </p>
        </div>
      </div>
    </div>
  );
}
