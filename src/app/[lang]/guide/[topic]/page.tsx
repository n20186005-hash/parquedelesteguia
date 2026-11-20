import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, guideLabels, guideLanguages, guideTopics, type GuideLanguage, type GuideTopic } from "@/i18n/visit-guides";

import { nearbyCopy, nearbyLabels, nearbyTopics, parkDetails } from "@/i18n/nearby";

const parkMap = "https://maps.app.goo.gl/QLrWN8gLZQ4CJkU5A";
const entranceMap = "https://www.google.com/maps/search/?api=1&query=F5V6%2B76M%2C+Av.+Francisco+de+Miranda%2C+Caracas";
const stationMap = "https://www.google.com/maps/search/?api=1&query=Estaci%C3%B3n+Miranda+Metro+de+Caracas";
const officialSource = "https://www.inparques.gob.ve/Parques%20de%20Recreacion/francisco-de-miranda.html";
const reopeningSource = "https://noticiavenezuela.com/noticias/el-parque-francisco-de-miranda-reabrio-sus-puertas-al-publico/";
const routeDetails = {
  es: {
    stops: ["Entrada de Miranda", "Planetario Humboldt", "Patios ornamentales", "Lago 9 · Leander"],
    caption: "Esquema del recorrido. Sigue la señalización del parque.",
    entrance: "Entrada del parque en Google Maps",
    reopening: "Horario anunciado en la reapertura de julio de 2026",
  },
  en: {
    stops: ["Miranda entrance", "Humboldt Planetarium", "Ornamental courtyards", "Lake 9 · Leander"],
    caption: "Schematic route. Follow the signs inside the park.",
    entrance: "Park entrance on Google Maps",
    reopening: "Hours announced at the July 2026 reopening",
  },
  zh: {
    stops: ["米蘭達入口", "洪堡天文館", "景觀庭院", "第九湖・利安德號"],
    caption: "步行路線示意。園內請依現場指標行走。",
    entrance: "在 Google 地圖查看公園入口",
    reopening: "2026 年 7 月復園時公布的開放時間",
  },
};
const languageNames = { es: "Español", en: "English", zh: "中文" };

type Props = { params: Promise<{ lang: string; topic: string }> };

async function readRoute(params: Props["params"]) {
  const { lang, topic } = await params;
  if (!guideLanguages.includes(lang as GuideLanguage) || !guideTopics.includes(topic as GuideTopic)) notFound();
  return { lang: lang as GuideLanguage, topic: topic as GuideTopic };
}

export function generateStaticParams() {
  return guideTopics.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, topic } = await readRoute(params);
  const { title, description } = guides[lang][topic];
  const route = `/${lang}/guide/${topic}`;
  return {
    title,
    description,
    alternates: {
      canonical: route,
      languages: {
        ...Object.fromEntries(guideLanguages.map((language) => [language, `/${language}/guide/${topic}`])),
        "x-default": `/es/guide/${topic}`,
      },
    },
    openGraph: { type: "article", title, description, url: route, images: ["/gallery/east-park (1).jpg"] },
    twitter: { card: "summary_large_image", title, description, images: ["/gallery/east-park (1).jpg"] },
  };
}

export default async function GuidePage({ params }: Props) {
  const { lang, topic } = await readRoute(params);
  const guide = guides[lang][topic];
  const labels = guideLabels[lang];
  const details = routeDetails[lang];
  const park = parkDetails[lang];
  const shared = nearbyLabels[lang];
  return (
    <main className="section">
      <nav aria-label={labels.guides} style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <Link href={`/${lang}#visit-guides`}>{labels.home}</Link>
        {guideLanguages.map((language) => (
          <Link key={language} href={`/${language}/guide/${topic}`} hrefLang={language} lang={language} aria-current={language === lang ? "page" : undefined}>
            {languageNames[language]}
          </Link>
        ))}
      </nav>
      <article>
        <header style={{ marginBlock: "2rem" }}>
          <h1 className="section-title">{guide.title}</h1>
          <div className="section-divider" />
          <p className="about-text">{guide.description}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem" }}>
            {topic === "como-llegar" && <a className="maps-link" href={stationMap}>{labels.station}</a>}
            <a className="maps-link" href={topic === "como-llegar" ? entranceMap : parkMap}>{topic === "como-llegar" ? details.entrance : labels.maps}</a>
          </div>
        </header>
        {guide.sections.map(([heading, body]) => (
          <section key={heading} style={{ marginBlock: "2rem" }}>
            <h2 className="info-card-title">{heading}</h2>
            <p className="about-text">{body}</p>
          </section>
        ))}
        {guide.steps && (
          <section style={{ marginBlock: "2rem" }}>
            <h2 className="info-card-title">{labels.route}</h2>
            <figure style={{ margin: "1rem 0" }}>
              <ol className="info-grid">
                {details.stops.map((stop, index) => (
                  <li key={stop} className="info-card">
                    <h3 className="info-card-title">{index + 1}. {stop}</h3>
                  </li>
                ))}
              </ol>
              <figcaption className="info-card-note">{details.caption}</figcaption>
            </figure>
            <ol className="about-text" style={{ paddingInlineStart: "1.5rem", listStyle: "decimal" }}>
              {guide.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </section>
        )}
        <section className="info-card">
          <h2 className="info-card-title">{shared.management}</h2>
          <p>{park.management}</p>
        </section>
        <div className="info-grid" style={{ marginBlock: "2rem" }}>
          <section className="info-card">
            <h2 className="info-card-title">{shared.basics}</h2>
            <p>{park.access}</p>
          </section>
          {topic !== "como-llegar" && (
            <section className="info-card">
              <h2 className="info-card-title">{shared.transport}</h2>
              <Link href={`/${lang}/guide/como-llegar`}>{park.transport}</Link>
            </section>
          )}
          <section className="info-card">
            <h2 className="info-card-title">{shared.reviews}</h2>
            <Link href={`/${lang}#reviews`}>{shared.park}</Link>
            <p><a href={parkMap}>{park.reviews}</a></p>
          </section>
        </div>
        <p className="about-text"><a href={officialSource}>{labels.source}</a></p>
        {topic === "horarios" && <p className="about-text"><a href={reopeningSource}>{details.reopening}</a></p>}
      </article>
      <aside className="info-card">
        <h2 className="info-card-title">{labels.guides}</h2>
        <ul>
          {guideTopics.filter((item) => item !== topic).map((item) => (
            <li key={item}><Link href={`/${lang}/guide/${item}`}>{guides[lang][item].title}</Link></li>
          ))}
        </ul>
        <h2 className="info-card-title" style={{ marginTop: "1rem" }}>{shared.nearby}</h2>
        <ul>
          {nearbyTopics.map((place) => (
            <li key={place}><Link href={`/${lang}/nearby/${place}`}>{nearbyCopy[lang][place].title}</Link></li>
          ))}
        </ul>
      </aside>
    </main>
  );
}
