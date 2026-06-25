"use client";

import { useLang } from "./LangProvider";
import type { Locale } from "@/i18n/translations";
import { usePathname } from "next/navigation";

const LANG_LABELS: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
  es: "ES",
};

export function LanguageSwitcher() {
  const { locale } = useLang();
  const pathname = usePathname();
  
  // Replace current language in pathname with the new one
  const getLangUrl = (newLang: string) => {
    if (!pathname) return `/${newLang}`;
    const parts = pathname.split('/');
    if (parts.length > 1 && ['zh', 'en', 'es'].includes(parts[1])) {
      parts[1] = newLang;
      return parts.join('/') || '/';
    }
    return `/${newLang}${pathname}`;
  };

  return (
    <div className="lang-switcher">
      {(["zh", "en", "es"] as Locale[]).map((l) => (
        <a
          key={l}
          href={getLangUrl(l)}
          className={`lang-btn ${locale === l ? "active" : ""}`}
          style={{ textDecoration: 'none' }}
          aria-label={`Switch to ${l}`}
        >
          {LANG_LABELS[l]}
        </a>
      ))}
    </div>
  );
}
