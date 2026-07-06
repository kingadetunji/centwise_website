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

In development the form shows a success state and logs submissions to the terminal. No email is actually sent unless you configure Resend.

**To enable real email delivery:**

1. Create a free account at [resend.com](https://resend.com) (3,000 emails/month free).
2. Add and verify your sending domain (or use the sandbox domain for testing).
3. Generate an API key.
4. Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=office@centwiseai.ca    # must be on a verified Resend domain
CONTACT_TO_EMAIL=office@centwiseai.ca
```

5. Restart the dev server — form submissions now deliver to `CONTACT_TO_EMAIL`.

---

## Deploying to Vercel

```bash
# Install the Vercel CLI if you haven't already
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repo to Vercel from the [Vercel dashboard](https://vercel.com/new).

**Set environment variables in Vercel:**

Go to **Project → Settings → Environment Variables** and add:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | Your Resend API key |
| `RESEND_FROM_EMAIL` | Verified sender address |
| `CONTACT_TO_EMAIL` | Where form submissions land |

---

## Project structure

```
src/
  app/
    globals.css          # Tailwind v4 theme tokens + base styles
    layout.tsx           # Root layout — fonts, meta, Open Graph
    page.tsx             # Home page (imports all sections)
    sitemap.ts           # Auto-generated /sitemap.xml
    api/contact/
      route.ts           # Contact form handler (Resend or console.log)
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
- [ ] Configure Resend and set env vars in Vercel
- [ ] Add real testimonials (or remove the placeholder section) if desired
- [ ] Verify all Open Graph / social meta tags with [opengraph.xyz](https://www.opengraph.xyz/)
- [ ] Run `npm run build` locally to catch any type or lint errors before deploy
