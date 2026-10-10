"use client";

import { useI18n } from "@/lib/i18n";

// Module 2 is just the shell + working language switching — no real content
// sections yet. This placeholder confirms translations flow into the page body.
export default function Home() {
  const { t } = useI18n();

  return (
    <main className="mx-auto flex max-w-screen-md flex-col items-center justify-center gap-4 px-4 py-20 text-center">
      <h1 className="font-latin text-5xl font-bold tracking-tight text-emerald-700">
        {t.brand}
      </h1>
      <p className="text-2xl">{t.tagline}</p>
      <p className="text-lg text-gray-500">{t.comingSoon}</p>
    </main>
  );
}
