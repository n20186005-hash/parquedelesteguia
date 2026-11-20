import type { MetadataRoute } from 'next';

import { guideLanguages, guideTopics } from "@/i18n/visit-guides";

import { nearbyTopics } from "@/i18n/nearby";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "www.parquedelesteguia.com"}`;

  const languages = guideLanguages;
  const routes = ['', '/privacy', '/terms', '/cookies', ...guideTopics.map((topic) => `/guide/${topic}`), ...nearbyTopics.map((place) => `/nearby/${place}`)];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const lang of languages) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            es: `${baseUrl}/es${route}`,
            zh: `${baseUrl}/zh${route}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
