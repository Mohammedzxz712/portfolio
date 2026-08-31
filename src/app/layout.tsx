import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Inter_Tight } from "next/font/google";
import { profile } from "@/data/profile";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeScript } from "@/components/ThemeScript";
import "./globals.css";

const display = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display-ui",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-ui",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-ui",
  display: "swap",
});

const description = `${profile.title} in ${profile.location}. ${profile.summary}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}, Flutter & Python`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Mohammed Rageh",
    "Flutter developer",
    "Software engineer",
    "Mobile developer Egypt",
    "Flutter Cairo",
    "Django developer",
    "Python backend",
    "Clean Architecture",
    "iOS Android apps",
    "Cross-platform developer",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.title}`,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description,
  },
  robots: { index: true, follow: true },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080c14" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.siteUrl,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  description: profile.summary,
  address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
  alumniOf: { "@type": "CollegeOrUniversity", name: profile.education.school },
  knowsLanguage: ["Arabic", "English"],
  knowsAbout: ["Flutter", "Dart", "Python", "Django", "Mobile development", "Clean Architecture"],
  sameAs: [profile.linkedin, profile.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${display.variable} ${sans.variable} ${mono.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <div className="page">
          {children}
          <SiteFooter />
        </div>
        <script
          type="application/ld+json"
          // Static, build-time JSON — no user input involved.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
