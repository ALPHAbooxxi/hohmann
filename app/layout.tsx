import type { Metadata } from "next";
import { Nunito_Sans, Cormorant_Garamond } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import { ContactStrip } from "@/components/layout/contact-strip";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { siteMeta } from "@/lib/site-data";

import "./globals.css";

const bodyFont = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800", "900"]
});

const accentFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["600", "700"]
});

export const metadata: Metadata = {
  title: {
    default: `${siteMeta.name} | ${siteMeta.claim}`,
    template: `%s | ${siteMeta.name}`
  },
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  metadataBase: new URL("https://www.emsland-hovawarte.de"),
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: siteMeta.name,
    description: siteMeta.description,
    url: 'https://www.emsland-hovawarte.de',
    siteName: siteMeta.name,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/hero/hero-hovawarte.jpg",
        width: 1200,
        height: 630,
        alt: "Hovawart-Zucht im Emsland"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMeta.name,
    description: siteMeta.description,
    images: ['/images/hero/hero-hovawarte.jpg'],
  },
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${bodyFont.variable} ${accentFont.variable}`}>
      <body className="flex min-h-screen flex-col">
        <div className="page-bg" aria-hidden="true" />
        <div className="relative z-40">
          <SiteHeader />
          <ContactStrip />
        </div>
        <main className="relative z-0 mx-auto w-full max-w-content flex-grow px-4 pt-8 sm:px-6 lg:px-8">
          {children}
        </main>
        <SiteFooter />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
