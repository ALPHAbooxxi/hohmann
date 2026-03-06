import type { Metadata } from "next";
import { Nunito_Sans, Cormorant_Garamond } from "next/font/google";

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
    default: siteMeta.claim,
    template: `%s | ${siteMeta.name}`
  },
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  metadataBase: new URL("https://www.emsland-hovawarte.de"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteMeta.claim,
    description: siteMeta.description,
    locale: "de_DE",
    type: "website",
    siteName: siteMeta.name,
    images: [
      {
        url: "/images/hero/hero-hovawarte.jpg",
        width: 1600,
        height: 920,
        alt: "Hovawarte im Zwinger aus dem Emsland"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${bodyFont.variable} ${accentFont.variable}`}>
      <body>
        <div className="page-bg" aria-hidden="true" />
        <SiteHeader />
        <ContactStrip />
        <main className="mx-auto w-full max-w-content px-4 pt-8 sm:px-6 lg:px-8">{children}</main>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
