import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: `${site.shortName} — Ottawa Heating, Cooling & Hot Water`,
  description: site.description,
  path: "/",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: site.name,
  alternateName: site.shortName,
  description: site.description,
  url: `https://${site.domain}`,
  telephone: site.phone.tel,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: [
    "Ottawa",
    "Kanata",
    "Orleans",
    "Nepean",
    "Barrhaven",
    "Stittsville",
    "Gloucester",
    "Manotick",
    "Gatineau",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "20:00",
    },
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body className="flex min-h-screen flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
