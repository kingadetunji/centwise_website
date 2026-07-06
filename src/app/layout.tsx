import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CentWiseAI — AI Adoption & Technology Consulting | Greater Toronto Area",
  description:
    "CentWiseAI helps GTA practices adopt AI and modern productivity tools, then trains your people to actually use them. Practical, hands-on, and built around how your team already works.",
  metadataBase: new URL("https://centwiseai.ca"),
  openGraph: {
    title: "CentWiseAI — AI Adoption & Technology Consulting | GTA",
    description:
      "Get your team confidently using AI — without the guesswork. Practical AI adoption and technology consulting for GTA practices.",
    url: "https://centwiseai.ca",
    siteName: "CentWiseAI",
    type: "website",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 1024,
        height: 1024,
        alt: "CentWiseAI logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CentWiseAI — AI Adoption & Technology Consulting | GTA",
    description:
      "Get your team confidently using AI — without the guesswork.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-deep-green focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
