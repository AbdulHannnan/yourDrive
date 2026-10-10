"use client";

import { useI18n } from "@/lib/i18n";
import { localeNativeName, publicLocales } from "@/locales";

/**
 * Urdu/Pashto language switch. A simple two-button segmented control with big
 * tap targets, labelled in each language's own script so low-literacy users can
 * recognise their language by shape.
 */
export default function LanguageToggle() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.a11y.selectLanguage}
      className="flex items-center overflow-hidden rounded-full border border-emerald-600"
    >
      {publicLocales.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={`min-h-11 min-w-14 px-4 text-base font-medium transition-colors ${
              active
                ? "bg-emerald-600 text-white"
                : "bg-transparent text-emerald-700 hover:bg-emerald-50"
            }`}
          >
            {localeNativeName[code]}
          </button>
        );
      })}
    </div>
  );
}
