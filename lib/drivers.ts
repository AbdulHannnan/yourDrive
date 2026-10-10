import { createClient } from "@supabase/supabase-js";

/**
 * Public goal shown in the "X / 100 drivers registered" counter.
 */
export const DRIVER_GOAL = 100;

/**
 * Returns the REAL number of registered drivers.
 *
 * This is the single seam to wire up in Module 8. Today the `drivers` table may
 * not exist yet, so this returns 0 on any problem (missing env, missing table,
 * RLS blocking the read) instead of throwing — the counter shows 0 gracefully.
 *
 * Privacy note: this intentionally fetches only an aggregate COUNT, never any
 * driver rows (CNICs, photos, phones stay private under RLS). It runs
 * server-side (called from the /api/driver-count route). In Module 8, point it
 * at the real table. If RLS blocks public counts, expose the count via a
 * SECURITY DEFINER Postgres function (RPC) and call that here instead.
 */
export async function getDriverCount(): Promise<number> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // DB not wired yet (or env not set) — treat as 0 registered.
  if (!url || !key) return 0;

  try {
    const client = createClient(url, key);
    const { count, error } = await client
      .from("drivers")
      .select("*", { count: "exact", head: true });

    if (error || count == null) return 0;
    return count;
  } catch {
    return 0;
  }
}
