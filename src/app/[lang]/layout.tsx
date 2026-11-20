import type { Metadata, Viewport } from "next";
import "../globals.css";

const homepageSearch = {
  es: {
    title: "Parque del Este, Caracas | Horario, metro y mapa",
    description: "Planifica tu visita al Parque del Este de Caracas. Consulta cómo confirmar el horario, llegar por la estación Miranda y recorrer el planetario, los jardines y el Lago 9.",
  },
  en: {
    title: "East Park, Caracas | Hours, metro and visitor map",
    description: "Plan a visit to East Park in Caracas. Check opening information, find the Miranda metro entrance and follow a walk through the gardens to Lake 9.",
  },
  zh: {
    title: "卡拉卡斯東方公園｜開放時間、地鐵與園內地圖",
    description: "規劃卡拉卡斯東方公園行程，查詢開放資訊、米蘭達地鐵站與入口，以及洪堡天文館、景觀庭院和第九湖的步行路線。",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "www.parquedelesteguia.com"}`;
  const lang = (await params).lang;
  const { title, description } = lang === "es" ? homepageSearch.es : lang === "zh" ? homepageSearch.zh : homepageSearch.en;
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: "%s | East Park",
    },
    description,
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
      locale: lang === "es" ? "es_VE" : lang === "zh" ? "zh_CN" : "en_US",
      url: `${baseUrl}/${lang}`,
      title,
      description,
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
      title,
      description,
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
      canonical: `/${lang}`,
      languages: {
        "en": "/en",
        "es": "/es",
        "zh": "/zh",
        "x-default": "/en",
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }, { lang: "zh" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const resolvedParams = await params;
  return (
    <html lang={resolvedParams.lang}>
      <body>{children}</body>
    </html>
  );
}
