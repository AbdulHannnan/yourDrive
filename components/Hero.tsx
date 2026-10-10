"use client";

import { useI18n } from "@/lib/i18n";
import { DRIVER_FORM_ID, RIDER_FORM_ID } from "@/lib/anchors";

/**
 * Landing-page hero: bold bilingual headline, one-line subheadline, and two
 * large call-to-action buttons. The CTAs are in-page anchor links that scroll
 * to the driver sign-up / rider waitlist sections (added in later modules).
 * All text comes from the i18n dictionary.
 */
export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-screen-md px-4 py-12 text-center sm:py-16">
      <h1 className="text-balance text-3xl font-bold leading-tight text-emerald-800 sm:text-5xl">
        {t.hero.headline}
      </h1>

      <p className="mx-auto mt-4 max-w-prose text-lg text-gray-600 sm:text-xl">
        {t.hero.subheadline}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        {/* Primary CTA: driver sign-up */}
        <a
          href={`#${DRIVER_FORM_ID}`}
          className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 text-lg font-bold text-white shadow-sm transition-colors hover:bg-emerald-700 active:bg-emerald-800"
        >
          <span aria-hidden className="text-2xl leading-none">
            🛵
          </span>
          {t.hero.ctaDriver}
        </a>

        {/* Secondary CTA: rider waitlist */}
        <a
          href={`#${RIDER_FORM_ID}`}
          className="flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 px-6 text-lg font-bold text-emerald-700 transition-colors hover:bg-emerald-50 active:bg-emerald-100"
        >
          <span aria-hidden className="text-2xl leading-none">
            🔔
          </span>
          {t.hero.ctaRider}
        </a>
      </div>
    </section>
  );
}
