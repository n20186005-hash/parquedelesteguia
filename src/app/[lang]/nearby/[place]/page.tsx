import PlanetariumVisit from "@/components/PlanetariumVisit";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guideLanguages, type GuideLanguage } from "@/i18n/visit-guides";
import { nearbyCopy, nearbyLabels, nearbyPlaces, nearbyTopics } from "@/i18n/nearby";

import { nearbyDetailLabels, nearbyDetails } from "@/i18n/nearby-details";

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
  const extra = nearbyDetails[lang][place];
  const detailLabels = nearbyDetailLabels[lang];
  const distinctObservation = extra.observe !== copy.description && extra.observe !== extra.photo;
  const distinctVisitTip = copy.plan !== extra.faq[1];
  const walk = extra.walk.filter((step) => step !== copy.transit);
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
        <section className="info-card">
          <h2 className="info-card-title">{detailLabels.about}{lang === "zh" ? "" : " "}{copy.title}</h2>
          <p><strong>{labels.management}</strong> · {copy.manager}</p>
          <p>{extra.about}</p>
          <a href={"operatorSource" in data ? data.operatorSource : data.source}>{labels.source}</a>
        </section>
        <figure style={{ marginBlock: "2rem" }}>
          <Image src={data.photo} alt={copy.photo} width={data.width} height={data.height} unoptimized style={{ maxWidth: "100%", width: "auto", height: "auto", maxHeight: "28rem" }} />
          <figcaption className="info-card-note">{copy.photo} · <a href={data.credit}>{"author" in data ? data.author : "Veronidae"} / Wikimedia Commons</a> · <a href={"licenseUrl" in data ? data.licenseUrl : "https://creativecommons.org/licenses/by-sa/3.0/"}>{"license" in data ? data.license : "CC BY-SA 3.0"}</a></figcaption>
        </figure>
        <section>
          <h2 className="info-card-title">{detailLabels.history}</h2>
          <p className="about-text">{copy.history}</p>
          {distinctObservation && <p className="about-text">{extra.observe}</p>}
        </section>
        {distinctVisitTip && (
          <section>
            <h2 className="info-card-title">{detailLabels.visit}</h2>
            <p className="about-text">{copy.plan}</p>
          </section>
        )}
        <div className="info-grid" style={{ marginBlock: "2rem" }}>
          <section className="info-card">
            <h2 className="info-card-title">{labels.basics}</h2>
            <p>{copy.basics}</p>
            <address style={{ fontStyle: "normal" }}>
              <a href={data.map}>{data.address}</a>
            </address>
          </section>
          <section className="info-card">
            <h2 className="info-card-title">{labels.transport}</h2>
            <p>{copy.transit}</p>
            <a href={data.map}>{data.address}</a>
            <p><Link href={`/${lang}/guide/como-llegar`}>{labels.park}</Link></p>
          </section>
          <section className="info-card">
            <h2 className="info-card-title">{labels.reviews}</h2>
            {"rating" in data && <>
            <p><strong>{data.rating.score} / 5</strong> · {new Intl.NumberFormat(lang === "es" ? "es-VE" : lang).format(data.rating.count)} {labels.count}</p>
            <p className="info-card-note">{labels.checked} · <a href={data.rating.url}>{data.rating.name}</a></p>
            </>}
            <a href={data.map}>{labels.view}</a>
          </section>
        </div>
        <section style={{ marginBlock: "2rem" }}>
          <h2 className="info-card-title">{detailLabels.walk}</h2>
          <ol className="about-text" style={{ listStyle: "decimal", paddingInlineStart: "1.5rem" }}>
            {walk.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </section>
        <section style={{ marginBlock: "2rem" }}>
          <h2 className="info-card-title">{detailLabels.photo}</h2>
          <p className="about-text">{extra.photo}</p>
        </section>
        <section style={{ marginBlock: "2rem" }}>
          <h2 className="info-card-title">{detailLabels.faq}</h2>
          <details className="info-card">
            <summary>{extra.faq[0]}</summary>
            <p>{extra.faq[1]}</p>
          </details>
        </section>
        <p className="about-text"><a href={data.source}>{labels.source}</a></p>
      </article>
      {place === "planetario-humboldt" ? <PlanetariumVisit lang={lang} /> : (
      <aside className="info-card">
        <h2 className="info-card-title">{labels.nearby}</h2>
        <ul>
        {nearbyTopics.filter((item) => item !== place).map((item) => (
          <li key={item}><Link href={`/${lang}/nearby/${item}`}>{nearbyCopy[lang][item].title}</Link></li>
        ))}
        </ul>
      </aside>
      )}
    </main>
  );
}
