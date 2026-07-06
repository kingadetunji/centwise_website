"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutFounder() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="reveal grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Headshot placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-deep-green/20 to-mint/20 flex flex-col items-center justify-center border-2 border-dashed border-deep-green/20">
                <svg
                  className="w-20 h-20 text-deep-green/30 mb-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <p className="text-deep-green/40 text-xs font-medium">Headshot coming soon</p>
              </div>

              {/* GTA badge */}
              <div className="absolute -bottom-4 -right-4 bg-deep-green text-white px-4 py-2 rounded-xl shadow-lg text-xs font-semibold">
                📍 North York, GTA
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-mint uppercase mb-5">
              About the founder
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink tracking-tight mb-6">
              Adetunji Adeniran
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Adetunji is an AI product builder and technology consultant
                based in North York, Ontario, serving teams across the Greater
                Toronto Area.
              </p>
              <p>
                He built CentWiseAI — an AI-powered personal finance app — from
                scratch, designing every feature and shipping it end to end.
                That experience gave him a first-hand understanding of what it
                actually takes to make AI useful for real people, not just in a
                demo.
              </p>
              <p>
                Today he pairs that engineering depth with a focus on helping
                practices adopt what gets built — setting up the right tools,
                training the people who use them, and staying on hand as the
                work evolves. Warm and direct in conversation, concrete in
                delivery.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.kingadetunji.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-deep-green text-white text-sm font-semibold rounded-lg hover:bg-deep-green/90 transition-colors focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
              >
                View full profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
