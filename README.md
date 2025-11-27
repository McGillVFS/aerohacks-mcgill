# McGill AeroHacks

Landing page for the McGill AeroHacks event built with Vite and React.

## Running the app

Install dependencies (includes the dev tools Vite uses for builds) and start the dev server:

```bash
npm install
npm run dev
```

## Building the app

Make sure dev dependencies are installed—`npm install` or `npm ci --include=dev`—then run:

```bash
npm run build
```

## Registration backend (Supabase)

1) Create the table the API writes to:

```sql
create table public.pre_registrations (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  mlh_code_of_conduct boolean not null,
  mlh_privacy_policy boolean not null,
  mlh_emails boolean not null default false,
  created_at timestamptz not null default now()
);

create unique index if not exists pre_registrations_email_idx on public.pre_registrations(email);
```

2) Configure environment variables so the built-in `/api/register` route can write submissions to Supabase:

```bash
SUPABASE_URL="https://qtrypzzcjebvfcihiynt.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="<your-service-role-key>" # keep this secret
VITE_REGISTRATION_ENDPOINT="/api/register"
```

Use the service role key provided for this project (it begins with `sbp_...`), but do not commit it to source control. Add these to `.env.local` for local testing and to Vercel **Project Settings → Environment Variables** for production. The `VITE_REGISTRATION_ENDPOINT` override is optional—`/api/register` is used by default—but setting it explicitly makes the intent clear.

On Vercel the included `vercel.json` keeps `/api/*` routes served by the platform while rewriting everything else to `index.html` for the SPA. If you customize routing, make sure `/api/register` continues to bypass any SPA rewrites.

## Deploying to Vercel

1) Set the environment variables in Vercel **Project Settings → Environment Variables** (or via `vercel env add`) for both **Production** and **Preview** environments:

```
SUPABASE_URL=https://qtrypzzcjebvfcihiynt.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
VITE_REGISTRATION_ENDPOINT=/api/register
```

2) For local CI-style deployments, set the Vercel token in your shell so it is not stored in source control:

```bash
export VERCEL_TOKEN="<your-vercel-token>"
```

3) Deploy using the included script (prompts will link the project on first run):

```bash
npm run deploy:vercel
```

The CLI reuses the `vercel.json` in this repo, so it will apply the same SPA rewrites and build command used locally.
