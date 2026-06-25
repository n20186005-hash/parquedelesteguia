import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "East Park — Caracas, Venezuela",
    template: "%s | East Park",
  },
  description:
    "A travel guide to East Park (Parque del Este / Parque Generalísimo Francisco de Miranda), the important urban park in Caracas, Venezuela, featuring green spaces, walking trails, and cultural facilities.",
  keywords: [
    "East Park",
    "Parque del Este",
    "Parque Generalísimo Francisco de Miranda",
    "Caracas park",
    "Venezuela travel",
    "urban park",
    "Caracas tourism",
    "Francisco de Miranda",
  ],
  authors: [{ name: "East Park Travel Guide" }],
  creator: "East Park Travel Guide",
  publisher: "East Park Travel Guide",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_VE",
    alternateLocale: ["en_US", "zh_CN"],
    url: baseUrl,
    title: "East Park — Caracas, Venezuela",
    description:
      "A travel guide to East Park (Parque del Este), the important urban park in Caracas, Venezuela.",
    siteName: "East Park Travel Guide",
    images: [
      {
        url: "/gallery/east-park (1).jpg",
        width: 1200,
        height: 630,
        alt: "East Park - Urban Park in Caracas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "East Park — Caracas, Venezuela",
    description:
      "A travel guide to East Park (Parque del Este), the important urban park in Caracas, Venezuela.",
    images: ["/gallery/east-park (1).jpg"],
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
    canonical: "/",
    languages: {
      "en": "/en",
      "es": "/es",
      "zh": "/zh",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
