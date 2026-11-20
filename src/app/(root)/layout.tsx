import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "East Park — Caracas, Venezuela",
  description: "A travel guide to East Park (Parque del Este / Parque Generalísimo Francisco de Miranda)",
  alternates: {
    canonical: `https://${process.env.CURRENT_SITE_DOMAIN || "www.parquedelesteguia.com"}/`,
    languages: {
      "en": "/en",
      "es": "/es",
      "zh": "/zh",
      "x-default": "/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
