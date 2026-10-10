# yourDrive

Phase 0 website for **yourDrive** — a bike & rickshaw ride-hailing platform for
**Bannu, Khyber Pakhtunkhwa, Pakistan**.

> This is **not** the booking app. This website only:
>
> 1. Collects **driver sign-ups**
> 2. Shows a live **"X / 100 drivers registered"** counter (real DB count — never faked)
> 3. Collects a **rider waitlist**
> 4. Gives the admin a view to **verify sign-ups and export phone numbers**

## Audience

Young, mobile-only, Pashto/Urdu-speaking users on cheap Android phones over slow
3G, often with low literacy. The public site is **mobile-first, bilingual
(Pashto + Urdu, right-to-left, Urdu default)**, and low-literacy friendly (big
tap targets, icons beside text). The admin area is in English.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS**
- **Supabase** — Postgres database + Storage (photos) + Auth (admin login)
- **react-hook-form + zod** for form validation (added with the form module)
- Deployed on **Vercel**

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example file and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

Get the values from your Supabase project under **Settings → API**:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

`.env.local` is gitignored — never commit real keys.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # ESLint
```

## Project structure

```
app/         Next.js App Router pages, layout, global styles
components/   Reusable UI components
lib/          Shared code (e.g. the Supabase client in lib/supabase.ts)
locales/      Pashto/Urdu/English dictionaries (hand-built, no i18n framework)
```

See [NOTES.md](./NOTES.md) for setup details and env vars.
