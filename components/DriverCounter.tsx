"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

const DEFAULT_GOAL = 100;
const ANIM_MS = 900;

/**
 * Live "X / 100 drivers registered" counter with a progress bar and a subtle
 * count-up animation. Fetches the REAL count from /api/driver-count (which
 * reads lib/drivers.getDriverCount). Shows 0 gracefully when the DB isn't
 * wired yet. All text comes from the i18n dictionary.
 */
export default function DriverCounter() {
  const { t } = useI18n();
  const [goal, setGoal] = useState(DEFAULT_GOAL);
  const [target, setTarget] = useState(0); // real count from the API
  const [display, setDisplay] = useState(0); // animated value shown

  // Fetch the real count once on mount.
  useEffect(() => {
    let active = true;
    fetch("/api/driver-count", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => {
        if (!active) return;
        setTarget(typeof data.count === "number" ? data.count : 0);
        if (typeof data.goal === "number" && data.goal > 0) setGoal(data.goal);
      })
      .catch(() => {
        // Network/DB error — leave the count at 0.
      });
    return () => {
      active = false;
    };
  }, []);

  // Count-up animation from 0 to the real count.
  useEffect(() => {
    if (target <= 0) {
      setDisplay(0);
      return;
    }

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(target);
      return;
    }

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / ANIM_MS);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  const pct = goal > 0 ? Math.min(100, (target / goal) * 100) : 0;
  const ariaLabel = `${target} / ${goal} ${t.counter.label}`;

  return (
    <section className="mx-auto max-w-screen-md px-4 pb-8">
      <div
        className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 text-center shadow-sm"
        aria-label={ariaLabel}
      >
        <div className="flex items-end justify-center gap-2 font-latin">
          <span className="text-5xl font-extrabold tabular-nums text-emerald-700">
            {display}
          </span>
          <span className="pb-1 text-2xl font-semibold text-emerald-500">
            / {goal}
          </span>
        </div>

        <p className="mt-1 text-lg text-emerald-800">{t.counter.label}</p>

        <div
          className="mt-4 h-3 w-full overflow-hidden rounded-full bg-emerald-100"
          role="progressbar"
          aria-valuenow={target}
          aria-valuemin={0}
          aria-valuemax={goal}
        >
          <div
            className="h-full rounded-full bg-emerald-600 transition-[width] duration-700 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </section>
  );
}
