import { nearbyPhotos } from "@/i18n/nearby-photos";
import { nearbyFaq } from "@/i18n/nearby-faq";
import { nearbyContext, visitorAccess } from "@/i18n/nearby-context";
import styles from "@/components/PlanetariumVisit.module.css";
import { nearbyPlanning } from "@/i18n/nearby-planning";
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

const visitLabels = {
  es: { advice: "Cómo organizar la visita", looking: "Qué observar", map: "Dirección y mapa", directory: "Ver todos los lugares cercanos", onward: "Continúa el recorrido", address: "Dirección", maps: "Abrir en Google Maps", photo: "Punto de observación", background: "Historia y diseño", walkFrom: "Ruta a pie desde el metro", metro: "Estación de referencia", overview: "En esta página", notes: "Fuente de la historia y el diseño" },
  en: { advice: "Planning your visit", looking: "What to look for", map: "Address and map", directory: "See all nearby attractions", onward: "Continue your visit", address: "Address", maps: "Open in Google Maps", photo: "Where to stand", background: "History and design", walkFrom: "Walking directions from the metro", metro: "Suggested metro station", overview: "On this page", notes: "Source for history and design" },
  zh: { advice: "安排遊覽", looking: "現場觀察重點", map: "地址與地圖", directory: "查看所有周邊景點", onward: "下一站怎麼安排", address: "地址", maps: "在 Google 地圖開啟", photo: "觀察與拍攝位置", background: "歷史背景與設計", walkFrom: "從地鐵站步行導航", metro: "可用地鐵站", overview: "本頁導覽", notes: "歷史與設計資料來源" },
};

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
  const images = [nearbyPhotos[place]?.src ?? nearbyPlaces[place].photo];
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
  const visit = visitLabels[lang];
  const planning = place === "planetario-humboldt" ? null : nearbyPlanning[place];
  const languageIndex = lang === "es" ? 0 : lang === "en" ? 1 : 2;
  const context = nearbyContext[place];
  const additionalPhoto = nearbyPhotos[place];
  const [faqQuestion, faqAnswer] = nearbyFaq[place][languageIndex];
  const [accessTitle, accessBody] = visitorAccess[context.access][languageIndex];
  const managementSource = "operatorSource" in data ? data.operatorSource : data.source;
  const management = "management" in context ? context.management : null;
  const historySource = "source" in context ? context.source : data.source;
  const destination = new URL(data.map).searchParams.get("query") ?? data.address;
  const directions = `https://www.google.com/maps/dir/?${new URLSearchParams({
    api: "1",
    origin: `Estación de Metro ${context.station}, Caracas, Venezuela`,
    destination,
    travelmode: "walking",
  })}`;
  const distinctObservation = extra.observe !== copy.description && extra.observe !== extra.photo;
  const distinctVisitTip = copy.plan !== extra.faq[1];
  const genericReturn = {
    es: "Regresa por el acceso señalizado.",
    en: "Return via the marked access route.",
    zh: "沿有標示的通道返回。",
  };
  const routeSteps = extra.walk.filter((step) => step !== genericReturn[lang]);
  const walk = routeSteps.length > 2 ? routeSteps.filter((step) => step !== copy.transit) : routeSteps;
  const languageNames = { es: "Español", en: "English", zh: "中文" };
  return (
    <main className={`section ${styles.guide}`}>
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
        <section className={`info-card ${styles.management}`} aria-labelledby="visit-management">
          <h2 className="info-card-title" id="visit-management">{detailLabels.about}{lang === "zh" ? "" : " "}{copy.title}</h2>
          <p><strong>{labels.management}</strong> · {copy.manager}</p>
          {management && <p>{management.note[languageIndex]}</p>}
          <p>{extra.about}</p>
          <a href={management?.source ?? managementSource}>{labels.source}</a>
        </section>
        <nav className={styles.jumps} aria-label={visit.overview}>
          <a href="#visit-history">{visit.background}</a>
          <a href="#visiting-access">{accessTitle}</a>
          <a href="#walking-route">{detailLabels.walk}</a>
          <a href="#photo-spots">{detailLabels.photo}</a>
          <a href="#visit-faq">{detailLabels.faq}</a>
          <a href={planning ? "#visit-map" : "#planetarium-location"}>{visit.map}</a>
        </nav>
        <div className={styles.gallery}>
        <figure>
          <Image src={data.photo} alt={copy.photo} width={data.width} height={data.height} unoptimized style={{ maxWidth: "100%", width: "auto", height: "auto", maxHeight: "28rem" }} />
          <figcaption className="info-card-note">{copy.photo} · <a href={data.credit}>{"author" in data ? data.author : "Veronidae"} / Wikimedia Commons</a> · <a href={"licenseUrl" in data ? data.licenseUrl : "https://creativecommons.org/licenses/by-sa/3.0/"}>{"license" in data ? data.license : "CC BY-SA 3.0"}</a></figcaption>
        </figure>
        {additionalPhoto && (
          <figure>
            <Image src={additionalPhoto.src} alt={additionalPhoto.alt[languageIndex]} width={additionalPhoto.width} height={additionalPhoto.height} unoptimized />
            <figcaption className="info-card-note">
              {additionalPhoto.alt[languageIndex]} · <a href={additionalPhoto.source}>{labels.source}</a>
            </figcaption>
          </figure>
        )}
        </div>
        <section className={`info-card ${styles.history}`} aria-labelledby="visit-history">
          <h2 className="info-card-title" id="visit-history">{visit.background}</h2>
          <p className="about-text">{copy.history}</p>
          <p>{context.context[languageIndex]}</p>
          <a href={historySource}>{visit.notes}</a>
          {!planning && distinctObservation && <p className="about-text">{extra.observe}</p>}
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
            <dl className={styles.facts}>
              <dt>{visit.address}</dt>
              <dd><a href={data.map}>{data.address}</a></dd>
              <dt>{labels.management}</dt>
              <dd>{copy.manager}</dd>
            </dl>
          </section>
          <section className="info-card">
            <h2 className="info-card-title">{labels.transport}</h2>
            <p>{copy.transit}</p>
            <p><strong>{visit.metro}</strong> · {context.station}</p>
            <p><a href={directions}>{visit.walkFrom}</a></p>
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
        <div className={styles.visit}>
          <section className={`info-card ${styles.access}`} aria-labelledby="visiting-access">
            <h2 className="info-card-title" id="visiting-access">{accessTitle}</h2>
            <p>{accessBody}</p>
            <a href={managementSource}>{labels.source}</a>
          </section>
          {planning && (
            <section aria-labelledby="visit-planning">
              <h2 className="section-title" id="visit-planning">{visit.advice}</h2>
              <div className="section-divider" />
              <div className={styles.cards}>
                <div className="info-card">
                  <h3 className="info-card-title">{detailLabels.visit}</h3>
                  <p>{planning.advice[languageIndex]}</p>
                </div>
                <div className="info-card">
                  <h3 className="info-card-title">{visit.looking}</h3>
                  <p>{extra.observe}</p>
                </div>
              </div>
            </section>
          )}
          <section className="info-card" aria-labelledby="walking-route">
            <h2 className="info-card-title" id="walking-route">{detailLabels.walk}</h2>
            <ol className={styles.steps}>
              {walk.map((step) => <li key={step}>{step}</li>)}
            </ol>
            <div className={styles.actions}>
              <a href={directions}>{visit.walkFrom}</a>
              <a href={data.map}>{visit.maps}</a>
            </div>
          </section>
          <section aria-labelledby="photo-spots">
            <h2 className="section-title" id="photo-spots">{detailLabels.photo}</h2>
            <div className="section-divider" />
            <div className="info-card">
              <h3 className="info-card-title">{visit.photo}</h3>
              <p>{extra.photo}</p>
            </div>
          </section>
          <section aria-labelledby="visit-faq">
            <h2 className="section-title" id="visit-faq">{detailLabels.faq}</h2>
            <div className="section-divider" />
            <div className={styles.cards}>
              <details className="info-card">
                <summary>{extra.faq[0]}</summary>
                <p>{extra.faq[1]}</p>
              </details>
              <details className="info-card">
                <summary>{faqQuestion}</summary>
                <p>{faqAnswer}</p>
              </details>
            </div>
          </section>
          {planning && (
            <>
              <section className={styles.location} aria-labelledby="visit-map">
                <h2 className="info-card-title" id="visit-map">{visit.map}</h2>
                <address>{data.address}</address>
                <p>{copy.transit}</p>
                <div className={styles.actions}>
                  <a className="maps-link" href={data.map}>{visit.maps}</a>
                  <a href={data.source}>{labels.source}</a>
                </div>
              </section>
              <section aria-labelledby="visit-nearby">
                <h2 className="section-title" id="visit-nearby">{visit.onward}</h2>
                <div className="section-divider" />
                <div className={styles.cards}>
                  {planning.next.map((item) => (
                    <Link className={`info-card ${styles.related}`} key={item} href={`/${lang}/nearby/${item}`}>
                      <h3 className="info-card-title">{nearbyCopy[lang][item].title}</h3>
                      <p>{nearbyCopy[lang][item].description}</p>
                    </Link>
                  ))}
                </div>
                <p className={styles.directory}><Link href={`/${lang}#nearby-attractions`}>{visit.directory}</Link></p>
                <details className={`info-card ${styles.relatedDirectory}`}>
                  <summary>{labels.nearby}</summary>
                  <ul>
                    {nearbyTopics.filter((item) => item !== place && !planning.next.some((next) => item === next)).map((item) => (
                      <li key={item}><Link href={`/${lang}/nearby/${item}`}>{nearbyCopy[lang][item].title}</Link></li>
                    ))}
                  </ul>
                </details>
              </section>
            </>
          )}
        </div>
        {!planning && <p className="about-text"><a href={data.source}>{labels.source}</a></p>}
      </article>
      {place === "planetario-humboldt" && <PlanetariumVisit lang={lang} />}
    </main>
  );
}
