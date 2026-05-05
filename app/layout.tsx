import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MARINA } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display-google",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body-google",
  display: "swap",
});

const siteUrl = "https://khlongsonmarina.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${MARINA.name} Trang | First Marina in Trang | Andaman Sea`,
    template: `%s | ${MARINA.name}`,
  },
  description:
    "Trang's first yacht marina. Protected natural harbour, 9 islands within 30 NM including dugongs and the Emerald Cave. 60 NM from Langkawi. Official Navily Partner Marina.",
  keywords: [
    "marina trang thailand",
    "yacht trang",
    "ko libong dugong boat",
    "emerald cave sailing",
    "marina between krabi langkawi",
    "khlong son pier",
    "andaman sailing anchorage",
    "Khlong Son Marina",
    "Trang yacht berth",
    "Si Kao marina",
    "Andaman marina",
    "Navily Trang",
  ],
  authors: [{ name: MARINA.legalEntity }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: MARINA.name,
    title: `${MARINA.name} — ${MARINA.tagline}`,
    description:
      "Trang's first yacht marina. Protected natural harbour, 9 islands within 30 NM, 60 NM from Langkawi. Official Navily Partner.",
    images: [
      {
        url: "/images/drone1.jpg",
        width: 1200,
        height: 630,
        alt: `${MARINA.name} aerial view`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${MARINA.name} — ${MARINA.tagline}`,
    description:
      "Trang's first marina. 9 islands within 30 NM. WhatsApp +66 99 242 2655.",
    images: ["/images/drone1.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0C3550",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#marina`,
  name: MARINA.fullName,
  alternateName: MARINA.name,
  description: MARINA.shortDesc,
  url: siteUrl,
  telephone: MARINA.contact.whatsapp,
  image: `${siteUrl}/images/drone1.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: MARINA.address.line1,
    addressLocality: MARINA.address.district,
    addressRegion: MARINA.address.province,
    postalCode: MARINA.address.postalCode,
    addressCountry: "TH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: MARINA.coords.lat,
    longitude: MARINA.coords.lng,
  },
  priceRange: "฿฿",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Concrete T-shape pier", value: true },
    { "@type": "LocationFeatureSpecification", name: "Alongside berthing", value: true },
    { "@type": "LocationFeatureSpecification", name: "Anchor authorized", value: true },
    { "@type": "LocationFeatureSpecification", name: "Mangrove protection (1,500 rai)", value: true },
    { "@type": "LocationFeatureSpecification", name: "Secure parking", value: true },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--color-cream)] text-[var(--color-navy-900)]">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
