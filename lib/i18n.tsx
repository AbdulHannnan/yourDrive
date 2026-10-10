"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  dictionary,
  defaultLocale,
  dirForLocale,
  type Dictionary,
  type Locale,
} from "@/locales";

const STORAGE_KEY = "yourdrive.locale";

type I18nValue = {
  locale: Locale;
  dir: "rtl" | "ltr";
  /** Translations for the active locale. Use as `t.tagline`, `t.footer.rights`. */
  t: Dictionary;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Server renders with the default locale (Urdu) so the initial HTML matches
  // the <html lang="ur" dir="rtl"> in the root layout — no hydration mismatch.
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // After mount, restore the viewer's saved choice (if any).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && saved in dictionary) {
        setLocaleState(saved as Locale);
      }
    } catch {
      // localStorage can be unavailable (private mode, blocked storage) — ignore.
    }
  }, []);

  // Keep <html lang/dir> in sync with the active locale.
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dirForLocale(locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage failures; the choice still applies for this session.
    }
  }, []);

  const value: I18nValue = {
    locale,
    dir: dirForLocale(locale),
    t: dictionary[locale],
    setLocale,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside <I18nProvider>");
  }
  return ctx;
}
