# Julian Pantaleone — Sports Photography

A dark-first sports photography portfolio site. Static — no build step.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, **Add New → Project** and import the repo.
3. **Framework Preset:** Other. Leave Build Command empty and set **Output Directory** to `.` (the repo root). Vercel will serve the files as-is.
4. Deploy. Done.

## Run locally

Open a terminal in this folder and start any static server, e.g.:

```
npx serve .
```

Then visit the printed URL. (Opening `index.html` directly via `file://` will not
work — the browser blocks loading the `.jsx` modules over the file protocol, so
use a local server.)

## Notes

- React, ReactDOM and Babel load from a CDN (unpkg). The page compiles its JSX in
  the browser on each visit — great for editing, slightly slower to first paint.
  Ask if you'd like a pre-built/bundled production version for faster loads.
- Photography lives in `assets/`. Replace those files (keeping the same names) to
  swap in new work, or edit `data.jsx` / `gallery.jsx` to change what's shown.
