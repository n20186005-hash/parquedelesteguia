import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guideLanguages, type GuideLanguage } from "@/i18n/visit-guides";
import { nearbyCopy, nearbyLabels, nearbyPlaces, nearbyTopics } from "@/i18n/nearby";

type Place = (typeof nearbyTopics)[number];
type Props = { params: Promise<{ lang: string; place: string }> };

async function readPlace(params: Props["params"]) {
  const { lang, place } = await params;
  if (!guideLanguages.includes(lang as GuideLanguage) || !nearbyTopics.includes(place as Place)) notFound();
  return { lang: lang as GuideLanguage, place: place as Place };
}

export function generateStaticParams() {
  return nearbyTopics.map((place) => ({ place }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, place } = await readPlace(params);
  const { title, description } = nearbyCopy[lang][place];
  const url = `/${lang}/nearby/${place}`;
  const images = [nearbyPlaces[place].photo];
  return {
    title, description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(guideLanguages.map((language) => [language, `/${language}/nearby/${place}`])),
        "x-default": `/es/nearby/${place}`,
      },
    },
    openGraph: { type: "article", title, description, url, images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export default async function NearbyPlace({ params }: Props) {
  const { lang, place } = await readPlace(params);
  const labels = nearbyLabels[lang];
  const copy = nearbyCopy[lang][place];
  const data = nearbyPlaces[place];
  const languageNames = { es: "Español", en: "English", zh: "中文" };
  return (
    <main className="section">
      <nav aria-label={labels.nearby} style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <Link href={`/${lang}#nearby-attractions`}>{labels.nearby}</Link>
        {guideLanguages.map((language) => (
          <Link key={language} href={`/${language}/nearby/${place}`} hrefLang={language} lang={language} aria-current={language === lang ? "page" : undefined}>
            {languageNames[language]}
          </Link>
        ))}
      </nav>
      <article>
        <header style={{ marginBlock: "2rem" }}>
          <h1 className="section-title">{copy.title}</h1>
          <div className="section-divider" />
          <p className="about-text">{copy.description}</p>
          <a className="maps-link" href={data.map}>{data.address}</a>
        </header>
        <figure style={{ marginBlock: "2rem" }}>
          <Image src={data.photo} alt={copy.photo} width={data.width} height={data.height} unoptimized style={{ maxWidth: "100%", width: "auto", height: "auto", maxHeight: "28rem" }} />
          <figcaption className="info-card-note">{copy.photo} · <a href={data.credit}>Veronidae / Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a></figcaption>
        </figure>
        <p className="about-text">{copy.history}</p>
        <p className="about-text">{copy.plan}</p>
        <section className="info-card">
          <h2 className="info-card-title">{labels.management}</h2>
          <p>{copy.manager}</p>
          {"operatorSource" in data && <a href={data.operatorSource}>{labels.source}</a>}
        </section>
        <div className="info-grid" style={{ marginBlock: "2rem" }}>
          <section className="info-card">
            <h2 className="info-card-title">{labels.basics}</h2>
            <p>{copy.basics}</p>
            <p>{data.address}</p>
          </section>
          <section className="info-card">
            <h2 className="info-card-title">{labels.transport}</h2>
            <p>{copy.transit}</p>
            <Link href={`/${lang}/guide/como-llegar`}>{labels.park}</Link>
          </section>
          <section className="info-card">
            <h2 className="info-card-title">{labels.reviews}</h2>
            <p><strong>{data.rating.score} / 5</strong> · {new Intl.NumberFormat(lang === "es" ? "es-VE" : lang).format(data.rating.count)} {labels.count}</p>
            <p className="info-card-note">{labels.checked} · <a href={data.rating.url}>{data.rating.name}</a></p>
            <a href={data.map}>{labels.view}</a>
          </section>
        </div>
        <p className="about-text"><a href={data.source}>{labels.source}</a></p>
      </article>
      <aside className="info-card">
        <h2 className="info-card-title">{labels.nearby}</h2>
        {nearbyTopics.filter((item) => item !== place).map((item) => (
          <Link key={item} href={`/${lang}/nearby/${item}`}>{nearbyCopy[lang][item].title}</Link>
        ))}
      </aside>
    </main>
  );
}
