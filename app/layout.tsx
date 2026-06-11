import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://adel-cooling.vercel.app";

const TITLE_AR = "عادل للتبريد والتكييف | إصلاح مكيفات وثلاجات وغسالات في جدة";
const DESC_AR =
  "عادل للتبريد والتكييف في جدة: إصلاح مكيفات (شباك وسبليت ومركزي)، ثلاجات، غسالات أتوماتيك، بوتغازات، وتمديد مواسير. خدمة سريعة، أسعار شفافة، وضمان على الإصلاح. أبحر الجنوبية وحي البساتين.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_AR,
    template: "%s | عادل للتبريد والتكييف",
  },
  description: DESC_AR,
  applicationName: "عادل للتبريد والتكييف",
  authors: [{ name: "عادل للتبريد والتكييف" }],
  creator: "عادل للتبريد والتكييف",
  publisher: "عادل للتبريد والتكييف",
  category: "Home Services",
  keywords: [
    "إصلاح مكيفات جدة", "صيانة مكيفات جدة", "فني مكيفات جدة", "أبحر الجنوبية",
    "إصلاح مكيفات سبليت", "تكييف مركزي جدة", "إصلاح ثلاجات جدة",
    "إصلاح غسالات جدة", "بوتغاز جدة", "تمديد مواسير جدة",
    "AC repair Jeddah", "fridge repair Jeddah", "washing machine repair Jeddah",
    "عادل للتبريد والتكييف", "حي البساتين جدة",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    siteName: "عادل للتبريد والتكييف",
    url: SITE_URL,
    title: TITLE_AR,
    description: DESC_AR,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "عادل للتبريد والتكييف - إصلاح مكيفات وأجهزة منزلية في جدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_AR,
    description: DESC_AR,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  formatDetection: { telephone: true, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "SA-02",
    "geo.placename": "Jeddah",
    "geo.position": "21.6893272;39.1125107",
    ICBM: "21.6893272, 39.1125107",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f3ec",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "عادل للتبريد والتكييف",
  alternateName: "Adel Cooling & AC",
  description: DESC_AR,
  url: SITE_URL,
  telephone: "+966598440397",
  priceRange: "$$",
  currenciesAccepted: "SAR",
  paymentAccepted: "Cash, Mada",
  knowsLanguage: ["ar", "en"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jeddah",
    addressRegion: "Makkah Province",
    addressCountry: "SA",
    description: "أبحر الجنوبية وحي البساتين",
  },
  geo: { "@type": "GeoCoordinates", latitude: 21.6893272, longitude: 39.1125107 },
  areaServed: [
    { "@type": "City", name: "Jeddah" },
    { "@type": "Place", name: "أبحر الجنوبية" },
    { "@type": "Place", name: "حي البساتين" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"],
      opens: "08:00",
      closes: "00:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966598440397",
    contactType: "customer service",
    areaServed: "SA",
    availableLanguage: ["ar", "en"],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    ratingCount: "18",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
