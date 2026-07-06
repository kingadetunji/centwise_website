import Image from "next/image";

const navSections = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Why Us", href: "#why-us" },
  { label: "How We Work", href: "#process" },
  { label: "Our Product", href: "#product" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/icon.png"
                alt="CentWiseAI logo mark"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                CentWise<span className="text-mint">AI</span>
              </span>
            </div>
            <p className="text-white/40 text-sm mb-5 leading-relaxed max-w-xs">
              AI readiness for every practice.
              <br />
              Work smarter. Every day.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:office@centwiseai.ca"
                className="flex items-center gap-2 text-white/50 text-sm hover:text-mint transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                office@centwiseai.ca
              </a>
              <p className="flex items-center gap-2 text-white/40 text-sm">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Greater Toronto Area, Ontario
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-5">
              Quick links
            </h3>
            <ul className="space-y-3">
              {navSections.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/55 text-sm hover:text-mint transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-5">
              Get started
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Book a no-pressure discovery call and find out if CentWiseAI is
              the right fit for your practice.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-mint text-deep-green text-sm font-bold rounded-xl hover:bg-mint/90 transition-colors"
            >
              Book a discovery call
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} CentWiseAI. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            AI Adoption & Technology Consulting — Greater Toronto Area
          </p>
        </div>
      </div>
    </footer>
  );
}
