import Link from "next/link";
import { nearbyCopy, nearbyLabels, nearbyPlaces } from "@/i18n/nearby";
import type { GuideLanguage } from "@/i18n/visit-guides";
import styles from "./PlanetariumVisit.module.css";

const content = {
  zh: {
    planning: "安排天文館參觀",
    cards: [
      ["場次與入場", "天文館放映有獨立場次。出發前先問當天是否有對外放映、是否需要預約、票價及最後入場時間。團體參觀請先確認人數與集合安排。"],
      ["白色圓頂與蔡司投影機", "天文館於 1961 年啟用。進到放映廳後，可觀察蔡司光學投影機如何把星點投向半球形幕面。若當天沒有場次，仍可從步道欣賞卡洛斯・吉南・桑多斯設計的白色圓頂。"],
      ["親子與無障礙", "放映廳會熄燈。帶孩子可先向館方詢問節目長度、適合年齡與進出方式。若需要無階梯通道或輪椅席位，請在出發前確認。"],
    ],
    route: "從米蘭達站到放映廳",
    steps: [
      "搭地鐵 1 號線到米蘭達站，循弗朗西斯科・德・米蘭達大道的東方公園入口入園。",
      "沿入口一帶的步道找白色圓頂。到館門口確認放映公告、報到地點及入場時間。",
      "放映結束後，從館外步道前往景觀庭院。想繼續走到第九湖，可先看園內地圖再安排折返。",
    ],
    faq: "參觀常見問題",
    questions: [
      ["可以只看外觀嗎？", "可以先確認公園開放，再從公共步道看圓頂。入內看放映時需另查場次與入場安排。"],
      ["在放映廳可以拍照嗎？", "館外可從公共步道取景。放映廳內請先詢問工作人員，避免使用閃光燈。"],
    ],
    location: "地址與導航",
    metro: "查看米蘭達站",
    directions: "從米蘭達站步行導航",
    source: "INPARQUES 園區資料",
    directory: "查看全部周邊景點",
  },
  en: {
    planning: "Plan your planetarium visit",
    cards: [
      ["Showtimes and admission", "The planetarium sets its own showtimes. Check for public screenings, reservations, admission fees and last entry before leaving. Groups should confirm their size and meeting arrangements in advance."],
      ["The white dome and Zeiss projector", "The planetarium opened in 1961. Inside, look for the Zeiss optical projector and the way it casts stars onto the dome. If there is no screening, you can still see Carlos Guinand Sandoz’s white dome from the park paths."],
      ["Families and accessibility", "The projection hall darkens during shows. Ask about programme length, suitable ages and re-entry if you are bringing children. Confirm step-free access and wheelchair seating with the venue ahead of time."],
    ],
    route: "From Miranda station to the dome",
    steps: [
      "Take Metro Line 1 to Miranda and use the East Park entrance on Avenida Francisco de Miranda.",
      "Follow the paths near the entrance toward the white dome. Check the screening notice and confirm where and when to check in.",
      "After the show, take the park path to the ornamental courtyards. If you continue to Lake 9, use the park map to plan your return.",
    ],
    faq: "Frequently asked questions",
    questions: [
      ["Can I see only the exterior?", "Check park access and view the dome from the public paths. Screenings have separate schedules and admission arrangements."],
      ["Can I take photographs in the projection hall?", "Public paths offer exterior views. Ask staff before taking photographs inside and keep the flash off."],
    ],
    location: "Address and directions",
    metro: "Find Miranda station",
    directions: "Walking directions from Miranda station",
    source: "INPARQUES park information",
    directory: "See all nearby attractions",
  },
  es: {
    planning: "Planifica la visita al planetario",
    cards: [
      ["Funciones y entrada", "El planetario tiene su propia programación. Antes de salir, consulta si hay funciones abiertas al público, si debes reservar, el precio y la hora límite de entrada. Los grupos pueden confirmar el número de personas y el punto de encuentro con el recinto."],
      ["La cúpula blanca y el proyector Zeiss", "El planetario abrió en 1961. Durante la función, fíjate en cómo el proyector óptico Zeiss dibuja el cielo en la superficie de la cúpula. Si no hay función, observa desde el sendero la cúpula diseñada por Carlos Guinand Sandoz."],
      ["Familias y accesibilidad", "La sala se oscurece durante la proyección. Si vas con niños, consulta la duración, la edad recomendada y las condiciones para salir durante la función. Confirma con el recinto el acceso sin escalones y los espacios para sillas de ruedas."],
    ],
    route: "De la estación Miranda a la cúpula",
    steps: [
      "Toma la Línea 1 hasta Miranda y usa el acceso al Parque del Este por la avenida Francisco de Miranda.",
      "Sigue las caminerías de la entrada hacia la cúpula blanca. En la puerta, revisa la cartelera y confirma dónde y cuándo debes presentarte.",
      "Al salir, continúa a los patios ornamentales por los caminos del parque. Si sigues hasta el Lago 9, consulta el mapa del parque para organizar el regreso.",
    ],
    faq: "Preguntas frecuentes",
    questions: [
      ["¿Puedo ver solo el exterior?", "Confirma el acceso al parque y observa la cúpula desde los senderos públicos. Las funciones tienen su propia programación y condiciones de entrada."],
      ["¿Puedo tomar fotos en la sala?", "Los senderos ofrecen vistas exteriores. Para fotografiar dentro, consulta al personal y evita el flash."],
    ],
    location: "Dirección y cómo llegar",
    metro: "Ver estación Miranda",
    directions: "Ruta a pie desde la estación Miranda",
    source: "Información del parque de INPARQUES",
    directory: "Ver todos los lugares cercanos",
  },
};

const nearby = ["patios-ornamentales", "lago-9-leander", "aviario"] as const;
const station = "Estación Miranda, Caracas";
const destination = "Planetario Humboldt, Parque del Este, Caracas";
const walkingLink = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(station)}&destination=${encodeURIComponent(destination)}&travelmode=walking`;

export default function PlanetariumVisit({ lang }: { lang: GuideLanguage }) {
  const t = content[lang];
  const venue = nearbyPlaces["planetario-humboldt"];
  return (
    <div className={styles.visit}>
      <section aria-labelledby="planetarium-planning">
        <h2 className="section-title" id="planetarium-planning">{t.planning}</h2>
        <div className="section-divider" />
        <div className={styles.cards}>
          {t.cards.map(([title, body]) => (
            <div className="info-card" key={title}>
              <h3 className="info-card-title">{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="info-card" aria-labelledby="planetarium-walk">
        <h2 className="info-card-title" id="planetarium-walk">{t.route}</h2>
        <ol className={styles.steps}>{t.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        <a href={walkingLink}>{t.directions}</a>
      </section>
      <section aria-labelledby="planetarium-faq">
        <h2 className="section-title" id="planetarium-faq">{t.faq}</h2>
        <div className={styles.cards}>
          {t.questions.map(([question, answer]) => (
            <details className="info-card" key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}
        </div>
      </section>
      <section className={styles.location} aria-labelledby="planetarium-location">
        <h2 className="info-card-title" id="planetarium-location">{t.location}</h2>
        <address>{venue.address}</address>
        <div className={styles.actions}>
          <a className="maps-link" href={venue.map}>Google Maps</a>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(station)}`}>{t.metro}</a>
          <a href={venue.source}>{t.source}</a>
        </div>
      </section>
      <section aria-labelledby="planetarium-nearby">
        <h2 className="section-title" id="planetarium-nearby">{nearbyLabels[lang].nearby}</h2>
        <div className={styles.cards}>
          {nearby.map((slug) => (
            <Link className="info-card" key={slug} href={`/${lang}/nearby/${slug}`}>
              <h3 className="info-card-title">{nearbyCopy[lang][slug].title}</h3>
              <p>{nearbyCopy[lang][slug].description}</p>
            </Link>
          ))}
        </div>
        <p className={styles.directory}><Link href={`/${lang}#nearby-attractions`}>{t.directory}</Link></p>
      </section>
    </div>
  );
}
