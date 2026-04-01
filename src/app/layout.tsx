import type { Metadata } from "next";
import { Work_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://sprayfoaminsulationtelluride.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Telluride Thermal | Spray Foam Insulation in Telluride, CO",
    template: "%s | Telluride Thermal",
  },
  description:
    "Precision-engineered spray foam insulation for high-altitude mountain architecture in Telluride, CO. Attic, crawlspace, and commercial solutions. The Architectural Shield.",
  keywords: [
    "spray foam insulation Telluride",
    "attic insulation Telluride CO",
    "crawlspace sealing Telluride",
    "commercial insulation Mountain Village",
    "high altitude insulation San Juan Mountains",
    "energy efficient insulation Colorado",
    "ice dam prevention Telluride",
    "thermal barrier mountain homes",
  ],
  authors: [{ name: "Telluride Thermal" }],
  creator: "Telluride Thermal",
  publisher: "Telluride Thermal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Telluride Thermal",
    title: "Telluride Thermal | Spray Foam Insulation in Telluride, CO",
    description:
      "Precision-engineered spray foam insulation for high-altitude mountain architecture. Serving Telluride, Mountain Village, and San Miguel County.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Telluride Thermal - Spray Foam Insulation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telluride Thermal | Spray Foam Insulation",
    description:
      "Precision-engineered spray foam insulation for high-altitude mountain architecture in Telluride, CO.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "Telluride Thermal",
  description:
    "Precision-engineered spray foam insulation for high-altitude mountain architecture in Telluride, CO.",
  url: BASE_URL,
  telephone: "+1-970-555-8240",
  email: "info@sprayfoaminsulationtelluride.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "674 Mountain Village Blvd",
    addressLocality: "Telluride",
    addressRegion: "CO",
    postalCode: "81435",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.9375,
    longitude: -107.8123,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "00:00",
      closes: "00:00",
      description: "By Appointment",
    },
  ],
  areaServed: [
    { "@type": "Place", name: "Telluride, CO" },
    { "@type": "Place", name: "Mountain Village, CO" },
    { "@type": "Place", name: "Placerville, CO" },
    { "@type": "Place", name: "Ophir, CO" },
    { "@type": "Place", name: "San Miguel County, CO" },
  ],
  priceRange: "$$",
  serviceType: [
    "Spray Foam Insulation",
    "Attic Insulation",
    "Crawlspace Sealing",
    "Commercial Insulation",
    "Thermal Audit",
  ],
  image: `${BASE_URL}/og-image.png`,
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content="Telluride" />
        <meta name="geo.position" content="37.9375;-107.8123" />
        <meta name="ICBM" content="37.9375, -107.8123" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased font-body">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
