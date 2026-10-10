"use client";

import { useI18n } from "@/lib/i18n";
import LanguageToggle from "@/components/LanguageToggle";

export default function Header() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-screen-md items-center justify-between gap-3 px-4">
        {/* Brand: a bike/scooter glyph + the (Latin) product name */}
        <a href="/" className="flex items-center gap-2 text-emerald-700">
          <span aria-hidden className="text-2xl leading-none">
            🛵
          </span>
          <span className="font-latin text-xl font-bold tracking-tight">
            {t.brand}
          </span>
        </a>

        <LanguageToggle />
      </div>
    </header>
  );
}
