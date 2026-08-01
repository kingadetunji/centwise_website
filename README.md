# CentWiseAI — Marketing Website

Modern, fully responsive marketing site for **CentWiseAI**, a Greater Toronto Area AI adoption and technology consulting practice.

Built with **Next.js 16** · **TypeScript** · **Tailwind CSS v4** · Deployable on **Vercel**.

---

## Quick start

```bash
# Install dependencies (already done if you're reading this from the project)
npm install

# Start the local dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Contact form — email delivery

The contact form submits directly to [Formspree](https://formspree.io) via `@formspree/react` — no server-side email code or API keys needed. Submissions are delivered to whatever inbox the Formspree form (`meeybpdy`) is configured to notify.

To change the destination address or notification settings, manage them from the [Formspree dashboard](https://formspree.io/forms) — no code changes required.

---

## Deploying to Vercel

```bash
# Install the Vercel CLI if you haven't already
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repo to Vercel from the [Vercel dashboard](https://vercel.com/new).

No environment variables are required — the Formspree form ID is embedded in `ContactSection.tsx`.

---

## Project structure

```
src/
  app/
    globals.css          # Tailwind v4 theme tokens + base styles
    layout.tsx           # Root layout — fonts, meta, Open Graph
    page.tsx             # Home page (imports all sections)
    sitemap.ts           # Auto-generated /sitemap.xml
  components/
    Navigation.tsx       # Sticky header with mobile menu
    Hero.tsx             # Full-screen hero with abstract graphic
    OutcomesStrip.tsx    # Navy outcomes band
    Services.tsx         # Four service cards
    Industries.tsx       # Industry grid
    WhyUs.tsx            # Differentiators section
    Process.tsx          # Four-step timeline
    FlagshipProduct.tsx  # AI product proof section
    AboutFounder.tsx     # Founder bio
    ContactSection.tsx   # CTA + contact form
    Footer.tsx           # Navy footer
  hooks/
    useScrollReveal.ts   # Intersection Observer scroll-reveal hook
public/
  icon.png               # 512px app icon (used in <head>)
  icon-192.png           # 192px icon
  apple-touch-icon.png   # Apple touch icon (1024px)
  robots.txt
```

---

## Brand tokens

Defined in `src/app/globals.css` via Tailwind v4 `@theme {}`:

| Token | Value | Usage |
|---|---|---|
| `deep-green` | `#085041` | Headers, primary buttons, key accents |
| `mint` | `#5DCAA5` | Icons, highlights, hover states |
| `navy` | `#0D1B2A` | Footer, dark panels |
| `cream` | `#F0F9F7` | Alternating section fills |
| `ink` | `#1C2B27` | Body text |
| `muted` | `#5E6B66` | Secondary text |

---

## Customisation checklist before launch

- [ ] Replace the headshot placeholder in `AboutFounder.tsx` with a real photo
- [ ] Update `next.config.ts` `metadataBase` URL once the domain is live
- [ ] Confirm the Formspree form (`meeybpdy`) notification email is set correctly in the Formspree dashboard
- [ ] Add real testimonials (or remove the placeholder section) if desired
- [ ] Verify all Open Graph / social meta tags with [opengraph.xyz](https://www.opengraph.xyz/)
- [ ] Run `npm run build` locally to catch any type or lint errors before deploy
