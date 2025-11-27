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

## Optional configuration

`VITE_REGISTRATION_ENDPOINT` can be set to a URL to receive pre-registration submissions. When not provided, submissions are handled client-side only. To set it locally, create a `.env.local` file in the project root with:

```bash
VITE_REGISTRATION_ENDPOINT="https://example.com/registration"
```

On Vercel, add the same variable in **Project Settings → Environment Variables** so it is available during builds and runtime.
