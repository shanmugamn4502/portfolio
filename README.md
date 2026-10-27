# Shanmugam — Portfolio Website

A developer-style portfolio built with **Vite + React + Tailwind CSS**.

Design: monospace (JetBrains Mono) for headings, labels and metadata, with Inter
for body copy. Dark is the default theme; a light theme is available via the
toggle in the header and is remembered in `localStorage`.

## Edit your content

All text, skills, projects, experience, links and email live in one file:

```
src/data.js
```

Change your name, bio, contact email, add your **GitHub/LinkedIn/WhatsApp** links
(replace the `"#"` values), and swap the placeholder projects for real ones.

## Commands

```bash
npm install      # install dependencies (already done)
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploy

`npm run build` outputs static files to `dist/`. Point your web server
(Nginx/Apache) document root at `/var/www/portfolio/dist`, or copy `dist/`
anywhere you host static sites.

## Sections

Hero (code window) · Quote of the day (terminal) · Services · Work (repo list) ·
About + toolkit · Experience (timeline) + Education · Testimonials · Contact (mailto form)

## Theming

Colors live as CSS custom properties in `src/index.css`:

- `:root` — the light theme
- `html.dark` — the dark theme (the default)

Change `--accent`, `--bg`, `--ink` and friends there and both themes follow.
`tailwind.config.js` maps the same tokens onto Tailwind utilities
(`text-accent`, `bg-bg-2`, `border-line`, …).
