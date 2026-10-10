"use client";

import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-screen-md flex-col items-center gap-1 px-4 py-6 text-center text-sm text-gray-600">
        <p className="flex items-center gap-1">
          <span aria-hidden>📍</span>
          {t.footer.location}
        </p>
        <p>{t.footer.rights}</p>
      </div>
    </footer>
  );
}
