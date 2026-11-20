import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, guideLabels, guideLanguages, guideTopics, type GuideLanguage, type GuideTopic } from "@/i18n/visit-guides";

const parkMap = "https://maps.app.goo.gl/QLrWN8gLZQ4CJkU5A";
const stationMap = "https://www.google.com/maps/search/?api=1&query=Estaci%C3%B3n+Miranda+Metro+de+Caracas";
const officialSource = "https://www.inparques.gob.ve/Parques%20de%20Recreacion/francisco-de-miranda.html";
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
          <a className="maps-link" href={topic === "como-llegar" ? stationMap : parkMap}>
            {topic === "como-llegar" ? labels.station : labels.maps}
          </a>
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
            <ol className="about-text" style={{ paddingInlineStart: "1.5rem", listStyle: "decimal" }}>
              {guide.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </section>
        )}
        <p className="about-text"><a href={officialSource}>{labels.source}</a></p>
      </article>
      <aside className="info-card">
        <h2 className="info-card-title">{labels.guides}</h2>
        <ul>
          {guideTopics.filter((item) => item !== topic).map((item) => (
            <li key={item}><Link href={`/${lang}/guide/${item}`}>{guides[lang][item].title}</Link></li>
          ))}
        </ul>
      </aside>
    </main>
  );
}
