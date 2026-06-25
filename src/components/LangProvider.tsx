"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { translations, type Locale, type Translations } from "@/i18n/translations";

interface LangContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const defaultT: Translations = translations.es;

const LangContext = createContext<LangContextValue>({
  locale: "es",
  setLocale: () => {},
  t: defaultT,
});

export function LangProvider({ children, lang }: { children: React.ReactNode, lang: string }) {
  const [locale, setLocale] = useState<Locale>((lang as Locale) || "es");
  const t = translations[locale] || translations.es;
  return (
    <LangContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
