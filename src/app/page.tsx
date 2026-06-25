"use client";

import React, { useEffect, useState, useRef } from "react";
import { LangProvider, useLang } from "@/components/LangProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const MAPS_URL = "https://maps.app.goo.gl/QLrWN8gLZQ4CJkU5A";

const GALLERY_IMAGES = Array.from({ length: 19 }, (_: number, i: number) => `/gallery/east-park (${i + 1}).jpg`);

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
          East Park
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <div className="nav-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#visiting">{t.nav.visiting}</a>
          <a href="#transportation">{t.nav.transportation}</a>
          <a href="#history">{t.nav.history}</a>
          <a href="#tips">{t.nav.tips}</a>
          <a href="#reviews">{t.nav.reviews}</a>
          <a href="#faq">{t.nav.faq}</a>
          <a href="#location">{t.nav.location}</a>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-texture" />
      <div className="hero-water" />
      <div className="hero-content">
        <p className="hero-tagline">{t.hero.tagline}</p>
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <a href="#visiting" className="hero-cta">
          {t.hero.cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
      <div className="hero-meta">
        <div className="hero-rating">4.3</div>
        <div className="hero-stars">★★★★☆</div>
        <div className="hero-reviews">15,964 {t.rating.reviews} · {t.rating.source}</div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="section">
      <ScrollReveal>
        <p className="section-label">01</p>
        <h2 className="section-title">{t.about.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <p className="about-text" style={{ whiteSpace: "pre-line" }}>{t.about.p1}</p>
        <p className="about-text" style={{ whiteSpace: "pre-line" }}>{t.about.p2}</p>
      </ScrollReveal>
      <ScrollReveal>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "1rem", marginTop: "2rem" }}>
          {(t as any).about?.highlights?.title || "亮点"}
        </h3>
        <div className="highlights-grid">
          {(t as any).about?.highlights?.items?.map((item: string, i: number) => (
            <div className="highlight-item" key={i}>
              <div className="highlight-icon" />
              <span className="highlight-text">{item}</span>
            </div>
          )) || []}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="management-info" style={{ marginTop: "2rem", padding: "1.5rem", background: "#fff", borderRadius: "2px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "0.5rem" }}>
            {(t as any).about?.management?.title || "景点管理"}
          </h4>
          <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "var(--color-earth-soft)" }}>
            {(t as any).about?.management?.content || "景点目前由当地政府与社区共同管理，门票收入用于维护周边环境和改善游客设施。"}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Visiting() {
  const { t } = useLang();
  const cards = [
    { title: t.visiting.hours.title, content: t.visiting.hours.content, note: t.visiting.hours.note },
    { title: t.visiting.price.title, content: t.visiting.price.content, note: t.visiting.price.note },
    { title: t.visiting.duration.title, content: t.visiting.duration.content, note: t.visiting.duration.note },
  ];
  
  return (
    <section id="visiting" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #eee8dd 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">02</p>
          <h2 className="section-title">{t.visiting.title}</h2>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="info-grid">
            {cards.map((c, i) => (
              <div className="info-card" key={i}>
                <div className="info-card-title">{c.title}</div>
                <div className="info-card-content" style={{ whiteSpace: "pre-line" }}>{c.content}</div>
                <div className="info-card-note">{c.note}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="bring-section">
            <div className="bring-title">{t.visiting.bring.title}</div>
            <ul className="bring-list">
              {t.visiting.bring.items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Location() {
  const { t } = useLang();
  return (
    <section id="location" className="section">
      <ScrollReveal>
        <p className="section-label">09</p>
        <h2 className="section-title">{t.location.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="location-section">
          <div className="location-map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.1536!2d-66.8936!3d10.4914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2f8e8e8e8e8e8%3A0x8c2f8e8e8e8e8e8e!2sEast+Park+Caracas!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="800"
              height="600"
              style={{border:0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="East Park Location Map"
            />
          </div>
          <div className="location-info">
            <p className="location-address">{t.location.address}</p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="maps-link">
              {t.location.openMaps}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
            
            <div className="contact-info" style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "1rem" }}>
                {(t as any).contact?.title || "联系方式"}
              </h3>
              <p style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", color: "var(--color-earth)", marginBottom: "0.5rem" }}>
                <span>📞</span>
                <a href={`tel:${(t as any).contact?.phone || "+58 212-2732867"}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {(t as any).contact?.phone || "+58 212-2732867"}
                </a>
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-earth-soft)" }}>
                {(t as any).contact?.phoneNote || "建议提前致电确认开放情况"}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Transportation() {
  const { t } = useLang();
  const transportOptions = [
    { icon: "✈️", title: (t as any).transportation?.fromAirport?.title || "从机场出发", content: (t as any).transportation?.fromAirport?.content || "从最近的国际机场到达后，如何前往景点" },
    { icon: "🚗", title: (t as any).transportation?.selfDrive?.title || "自驾前往", content: (t as any).transportation?.selfDrive?.content || "自驾路线和停车信息" },
    { icon: "🚌", title: (t as any).transportation?.publicTransport?.title || "公共交通", content: (t as any).transportation?.publicTransport?.content || "公共交通方式和班次" },
    { icon: "🚤", title: (t as any).transportation?.otherWays?.title || "乘船前往", content: (t as any).transportation?.otherWays?.content || "从码头乘船前往各个珊瑚岛" },
  ];
  
  return (
    <section id="transportation" className="section">
      <ScrollReveal>
        <p className="section-label">03</p>
        <h2 className="section-title">{(t as any).transportation?.title || "交通方式"}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="transport-grid">
          {transportOptions.map((option, i) => (
            <div className="transport-card" key={i}>
              <div className="transport-icon">{option.icon}</div>
              <h3 className="transport-title">{option.title}</h3>
              <p className="transport-content">{option.content}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

function History() {
  const { t } = useLang();
  return (
    <section id="history" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #e8e2d6 100%)" }}>
      <div className="section">
        <ScrollReveal>
        <p className="section-label">04</p>
        <h2 className="section-title">{(t as any).history?.title || "历史与生态"}</h2>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="history-content">
            <p className="history-text" style={{ whiteSpace: "pre-line" }}>{(t as any).history?.p1}</p>
            <p className="history-text" style={{ whiteSpace: "pre-line" }}>{(t as any).history?.p2}</p>
            {(t as any).history?.p3 && <p className="history-text" style={{ whiteSpace: "pre-line" }}>{(t as any).history?.p3}</p>}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Tips() {
  const { t } = useLang();
  return (
    <section id="tips" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #e8e2d6 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">05</p>
          <h2 className="section-title">{t.tips.title}</h2>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <ul className="tips-list">
            {t.tips.items.map((tip: string, i: number) => (
              <li className="tip-item" key={i}>
                <span className="tip-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="tip-text">{tip}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Gallery() {
  const { t } = useLang();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex !== null) {
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setLightboxIndex(null);
        if (e.key === "ArrowRight") setLightboxIndex((i) => (i !== null ? (i + 1) % GALLERY_IMAGES.length : null));
        if (e.key === "ArrowLeft") setLightboxIndex((i) => (i !== null ? (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="section">
      <ScrollReveal>
        <p className="section-label">06</p>
        <h2 className="section-title">{(t as any).gallery?.title || "Photo Gallery"}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((src, i) => (
            <div className="gallery-item" key={i} onClick={() => setLightboxIndex(i)}>
              <img src={src} alt={`East Park ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="google-maps-btn">
            {(t as any).gallery?.viewMore || "在 Google Maps 查看更多相片"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>×</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}>‹</button>
          <img src={GALLERY_IMAGES[lightboxIndex]} alt={`East Park ${lightboxIndex + 1}`} className="lightbox-img" />
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length); }}>›</button>
        </div>
      )}
    </section>
  );
}

// Google Reviews data
const GOOGLE_REVIEWS = [
  { name: "Carlos Mendoza", avatar: "CM", rating: 5, date: "2024-02-15", text: "¡Un excelente parque urbano! Muy buen lugar para caminar, hacer ejercicio y disfrutar en familia. Muy recomendado para visitar en la mañana." },
  { name: "Maria Rodriguez", avatar: "MR", rating: 4, date: "2024-03-20", text: "Es un parque muy agradable en el corazón de Caracas. Tiene buenas áreas para niños y espacios para descansar. Ojalá mantengan más la limpieza." },
  { name: "John Smith", avatar: "JS", rating: 5, date: "2024-01-10", text: "A peaceful oasis in the middle of Caracas. Great for morning jogs and family outings. The museum on-site is also worth visiting." },
  { name: "李小华", avatar: "李", rating: 4, date: "2024-04-05", text: "加拉加斯的一个不错的公园，适合散步和放松。免费开放很棒。建议上午去，天气比较凉爽。" },
  { name: "Ana Pérez", avatar: "AP", rating: 5, date: "2024-02-28", text: "Me encanta este parque. Es perfecto para sacar a caminar a los niños y mascotas. Tiene buena sombra y bancas para descansar." },
  { name: "Roberto Silva", avatar: "RS", rating: 4, date: "2024-03-15", text: "Buen parque público con historia. El nombre honra a un gran prcer de la independencia. Lástima que a veces falta mantenimiento en algunas áreas." },
];

function Reviews() {
  const { t } = useLang();

  return (
    <section id="reviews" className="section">
      <ScrollReveal>
        <p className="section-label">07</p>
        <h2 className="section-title">{(t as any).reviews?.title || "Visitor Reviews"}</h2>
        <p className="section-subtitle">{(t as any).reviews?.subtitle || "Real reviews from Google Maps"}</p>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="reviews-grid">
          {GOOGLE_REVIEWS.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="review-header">
                <div className="review-avatar">{review.avatar}</div>
                <div className="review-info">
                  <div className="review-name">{review.name}</div>
                  <div className="review-date">{review.date}</div>
                </div>
                <div className="review-rating">
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </div>
              </div>
              <p className="review-text">{review.text}</p>
              <div className="review-source">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#4285F4"/>
                </svg>
                Google
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="google-maps-btn">
            {(t as any).reviews?.viewMore || "在 Google Maps 查看更多评价"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}

function FAQ() {
  const { t } = useLang();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqItems = (t as any).faq?.items || [];

  return (
    <section id="faq" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #e8e2d6 100%)" }}>
      <div className="section">
        <ScrollReveal>
        <p className="section-label">08</p>
        <h2 className="section-title">{(t as any).faq?.title || "Frequently Asked Questions"}</h2>
          <p className="section-subtitle">{(t as any).faq?.subtitle || "Everything you need to know"}</p>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="faq-list">
            {faqItems.map((item: any, i: number) => (
              <div className="faq-item expanded" key={i}>
                <button
                  className="faq-question"
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                >
                  <span>{item.question}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`faq-icon ${expandedIndex === i ? "rotated" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="faq-answer">
                  {item.answer.split("\n\n").map((paragraph: string, j: number) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <p className="footer-links-title">{t.footer.linksTitle}</p>
        <div className="footer-links-grid">
          {t.footer.links.map((link: any, i: number) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-legal" style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem 0", textAlign: "center" }}>
        <a href="/privacy" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          Privacy Policy
        </a>
        <a href="/terms" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          Terms of Service
        </a>
        <a href="/cookies" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>
          Cookie Settings
        </a>
      </div>
      <p className="footer-text" style={{ marginTop: "1rem" }}>{t.footer.text}</p>
      <p className="footer-made">{t.footer.made}</p>
    </footer>
  );
}

export default function Home() {
  return (
    <LangProvider>
      <Nav />
      <Hero />
      <About />
      <Visiting />
      <Transportation />
      <History />
      <Tips />
      <Gallery />
      <Reviews />
      <FAQ />
      <Location />
      <Footer />
    </LangProvider>
  );
}
