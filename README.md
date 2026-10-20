# Yessin Rezgui — Portfolio

A personal portfolio site built with React, TypeScript, Vite and Tailwind CSS.

**Live focus:** honest positioning as a Full-Stack Engineer working in Angular,
Spring Boot, Keycloak, PostgreSQL and Docker — with ShopSphere as the flagship
project, a couple of clearly-labeled academic/personal projects, and a separate
"Currently Learning" section for Kubernetes and cloud platforms so nothing
reads as claimed professional experience it isn't.

## Features

- Blueprint/systems-diagram visual identity (not a generic template)
- Full English / Italiano / Français translations, persisted in `localStorage`
- Dark and light themes, persisted in `localStorage`, respects `prefers-reduced-motion`
- Filterable skills grid with real technology icons (`react-icons`)
- Career + education timeline
- Filterable project grid with dedicated detail pages (React Router)
- Fully data-driven content — no content is hardcoded inside JSX (see `src/data/`)
- SEO metadata, Open Graph image, JSON-LD, sitemap, robots.txt
- CI workflow that lints, type-checks and builds on every push/PR

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion (animations)
- React Router (project detail pages)
- react-icons (real technology logos)

## Project structure

```text
src/
├── components/       # UI, grouped by section (hero, about, skills, journey, projects, ...)
├── pages/             # Home, ProjectDetail, NotFound
├── data/              # Skills, projects, experience, education, journey, icon map — edit these to update content
├── i18n/              # en.ts / it.ts / fr.ts dictionaries + I18nProvider
├── hooks/             # useTheme
└── types/             # Shared TypeScript types
```

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
npm run lint      # oxlint
```

## Adding your résumé PDFs

Drop your generated CVs into `public/cv/` with these exact filenames so the
"Download CV" buttons work immediately:

```text
public/cv/yessin-rezgui-cv-en.pdf
public/cv/yessin-rezgui-cv-it.pdf
public/cv/yessin-rezgui-cv-fr.pdf
```

## Updating content

Everything shown on the site — skills, projects, experience, education, the
timeline, and what's currently being learned — lives in `src/data/`. Add a new
project by adding an entry to `src/data/projects.ts`; it will automatically
appear in the grid and get its own `/projects/:id` detail page.

**Keep it honest:** every `Project` has a `kind` of `flagship`, `academic`, or
`personal`, which renders as a badge on the card and detail page. When adding
new work, keep using this field accurately rather than presenting practice or
coursework as professional/shipped work.

## Deployment

### Vercel

Import the repo in the Vercel dashboard — `vercel.json` already includes the
SPA rewrite rule so client-side routing works on refresh/direct links.

### Netlify

Import the repo in the Netlify dashboard — `public/_redirects` already
contains the SPA fallback rule.

## Environment variables

See `.env.example`. None are required for the site to build or run as-is;
they're placeholders for if you later wire up live GitHub stats or a real
contact-form backend (Formspree / Web3Forms / EmailJS).

## Author

Yessin Rezgui — [GitHub](https://github.com/rezgui-yessin) · [LinkedIn](https://www.linkedin.com/in/yessin-rezgui/)
