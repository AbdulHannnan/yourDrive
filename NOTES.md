# yourDrive — Build Notes

Running log of setup steps, required keys, and how to run the project locally.
Keep this updated as each module lands.

---

## Run locally

```bash
npm install            # install deps
cp .env.example .env.local   # then fill in real Supabase values
npm run dev            # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

Requires Node 18.17+ (developed on Node 24).

## Environment variables

Defined in `.env.example`; real values go in `.env.local` (gitignored).

| Variable                          | Where to find it            | Notes                                        |
| --------------------------------- | --------------------------- | -------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`        | Supabase → Settings → API   | Project URL. Public / browser-safe.          |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`   | Supabase → Settings → API   | Anon public key. Safe only *with RLS on*.    |
| `SUPABASE_SERVICE_ROLE_KEY`       | Supabase → Settings → API   | **Server-only.** Added in a later module. Bypasses RLS — never expose to the browser, never prefix with `NEXT_PUBLIC_`. |

On Vercel, add the same variables under **Project → Settings → Environment
Variables**.

## Supabase setup (what will be needed)

A Supabase project is required. Later modules will add:

- **Database** tables for drivers and the rider waitlist.
- **Row Level Security (RLS)** so driver CNICs, photos, and phone numbers are
  **not** publicly readable — only the authenticated admin can read them.
- **Storage** bucket for driver photos (private).
- **Auth** for the admin login.

> Nothing is wired to a live database yet — Module 1 only sets up the client
> (`lib/supabase.ts`). You can run the app without Supabase keys as long as no
> page actually imports the client; the placeholder home page does not.

---

## Module log

### Module 1 — Project initialization

- Scaffolded **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS**
  via `create-next-app@14`. Next pinned at `14.2.35`.
- Installed `@supabase/supabase-js`.
- Created the Supabase browser client at `lib/supabase.ts` (reads env vars;
  throws a clear error if they're missing).
- Folder structure: `app/`, `components/`, `lib/`, `locales/`.
- Added `.env.example` (Supabase URL + anon key; service-role key noted for later).
- Replaced the default template home page with a minimal yourDrive placeholder.
- Root layout set to `lang="ur" dir="rtl"` (Urdu default, RTL) as the public-site
  baseline. Bilingual dictionary, language toggle, and Urdu/Pashto web fonts come
  in a later module.
- Removed the default Geist local fonts (using a system font stack for now).
- `npm run build` and `npm run dev` verified working.
