import { createClient } from "@supabase/supabase-js";

/**
 * Browser/public Supabase client.
 *
 * Reads the project URL and the ANON (public) key from env vars. The anon key
 * is safe to expose to the browser *as long as* Row Level Security is enabled
 * on every table holding sensitive data (driver CNICs, photos, phone numbers).
 * RLS is configured in a later module — do NOT rely on the anon key alone to
 * keep data private.
 *
 * Never import the service-role key here; it must stay server-only.
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and " +
      "NEXT_PUBLIC_SUPABASE_ANON_KEY (see .env.example).",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
