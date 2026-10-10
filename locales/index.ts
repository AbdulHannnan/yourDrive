// Lightweight i18n dictionary for yourDrive — no external i18n framework.
//
// Public site languages: Urdu (ur) and Pashto (ps), both right-to-left.
// English (en) exists for the admin area only; it is NOT shown in the public
// language toggle. Default public language is Urdu.

export type Locale = "ur" | "ps" | "en";

export const locales: Locale[] = ["ur", "ps", "en"];

// Languages offered in the public-site toggle (admin uses English separately).
export const publicLocales: Locale[] = ["ur", "ps"];

export const defaultLocale: Locale = "ur";

const rtlLocales: Locale[] = ["ur", "ps"];

export function dirForLocale(locale: Locale): "rtl" | "ltr" {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

// Native name of each language, written in its own script. Used as the toggle
// labels, so they read the same regardless of the currently active language.
export const localeNativeName: Record<Locale, string> = {
  ur: "اردو",
  ps: "پښتو",
  en: "English",
};

// The shape every locale must provide. Adding a key here forces all three
// languages to supply a translation (TypeScript will complain otherwise).
export interface Dictionary {
  brand: string;
  tagline: string;
  comingSoon: string;
  hero: {
    headline: string;
    subheadline: string;
    ctaDriver: string;
    ctaRider: string;
  };
  a11y: {
    selectLanguage: string;
  };
  footer: {
    location: string;
    rights: string;
  };
}

const ur: Dictionary = {
  brand: "yourDrive",
  tagline: "بنوں میں بائیک اور رکشہ کی سواری",
  comingSoon: "جلد آ رہا ہے",
  hero: {
    headline: "بنوں میں محفوظ اور آرام دہ سفر",
    subheadline: "بائیک اور رکشہ، آپ کے موبائل سے — بہت جلد",
    ctaDriver: "ڈرائیور کے طور پر رجسٹر ہوں",
    ctaRider: "لانچ پر مجھے اطلاع دیں",
  },
  a11y: {
    selectLanguage: "زبان منتخب کریں",
  },
  footer: {
    location: "بنوں، خیبر پختونخوا",
    rights: "© 2026 yourDrive — جملہ حقوق محفوظ ہیں۔",
  },
};

const ps: Dictionary = {
  brand: "yourDrive",
  tagline: "په بنو کې د بايسکل او رکشا سفر",
  comingSoon: "ژر راځي",
  hero: {
    headline: "په بنو کې خوندي او آرام سفر",
    subheadline: "بايسکل او رکشا، ستاسو له موبایل څخه — ډېر ژر",
    ctaDriver: "د ډرايور په توګه راجستر شئ",
    ctaRider: "د پیل پر مهال ما خبر کړئ",
  },
  a11y: {
    selectLanguage: "ژبه وټاکئ",
  },
  footer: {
    location: "بنو، خیبر پښتونخوا",
    rights: "© 2026 yourDrive — ټول حقونه خوندي دي.",
  },
};

const en: Dictionary = {
  brand: "yourDrive",
  tagline: "Bike & rickshaw rides in Bannu",
  comingSoon: "Coming soon",
  hero: {
    headline: "Safe and smooth rides in Bannu",
    subheadline: "Bikes and rickshaws, booked from your phone — launching soon",
    ctaDriver: "Register as a driver",
    ctaRider: "Notify me at launch",
  },
  a11y: {
    selectLanguage: "Select language",
  },
  footer: {
    location: "Bannu, Khyber Pakhtunkhwa",
    rights: "© 2026 yourDrive — All rights reserved.",
  },
};

export const dictionary: Record<Locale, Dictionary> = { ur, ps, en };
