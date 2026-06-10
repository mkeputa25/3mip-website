# 3MIP website

The website for **3MIP — the Mobility and Migration Modeling Intercomparison
Project**. Astro + Tailwind + MDX, static output, deployed on Vercel.

This README is for whoever runs the code (Mario, then technical contributors).
If you just need to **add a news item, a webinar, a paper, or a team member**,
you do not need this file — read [MAINTAINERS.md](MAINTAINERS.md) instead, which
is written for non-developers.

---

## Quick start

```bash
nvm use            # Node 20 (see .nvmrc)
npm install        # first time only
npm run dev        # http://localhost:4321
```

Edit files under `src/`; the browser reloads automatically. When you're done:

```bash
npm run build      # production build into dist/
npm run preview    # serve the built site locally to check it
```

That's the whole loop. Everything below is reference.

---

## What this is

- **Astro 5** static site generator — every page is pre-rendered to plain HTML.
  No server runs in production; Vercel just serves files.
- **Tailwind 4** for styling, driven by design tokens in
  `src/styles/global.css`.
- **MDX + content collections** — news, webinars, papers, and team members are
  Markdown files in `src/content/`, validated by Zod schemas in
  `src/content.config.ts`.
- **No client framework, no analytics, no trackers.** A few tiny inline vanilla
  scripts handle the mobile menu, the data-table sort, the registration form,
  and the signature figure's motion. Total JS is a couple of kilobytes.
- **Light theme only.** The site renders identically on dark- and light-mode
  machines (this is deliberate — see `DECISIONS-V2.md` V3).

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload at `http://localhost:4321` |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run check` | `astro check` — TypeScript + template validation (run before committing) |
| `node scripts/audit.mjs` | Accessibility audit (axe) + keyboard trace over the built site |
| `node scripts/check-links.mjs` | Verify internal links; list external links |
| `npx lhci autorun` | Lighthouse CI (needs `CHROME_PATH`, see below) |
| `node scripts/export-assets.mjs` | Regenerate the OG image + Dublin slide exports |

The quality scripts need their dev dependencies (already in `package.json`) and a
browser:

```bash
npx playwright install chromium
# Lighthouse needs a Chrome path:
CHROME_PATH=$(node -e "console.log(require('playwright').chromium.executablePath())") npx lhci autorun
```

## Project layout

```
src/
  pages/            one file per route (index, about, case-bangladesh, data,
                    participate, team, outputs, news, contact, dublin, 404,
                    privacy, accessibility) + news/feed.xml + news/[slug]
  layouts/Base.astro    the <head>, header, footer, SEO/OG/JSON-LD shell
  components/        reusable pieces (Header, Footer, Wordmark, SignatureViz,
                    PersonCard, DataTable, WebinarCard, FormField, …)
  content/          the editable Markdown — news/ webinars/ papers/ team/
  content.config.ts the Zod schemas that validate that Markdown
  styles/global.css design tokens (color, type, spacing) + base styles + motion
  lib/              small build-time helpers (git date, contrast, viz geometry)
public/             static files served as-is (favicon, robots.txt, team photos,
                    og-default.png)
docs/               the original project brief & source-of-truth docs (inputs)
scripts/            the QA/audit scripts
archive/v1/         the superseded v1 plan & decisions (kept for history)
```

## Configuration

- **Site URL / domain**: `astro.config.mjs` → `SITE_URL` (placeholder
  `https://3mip.org`; change at DNS cutover) and `public/robots.txt`.
- **Registration form**: set `PUBLIC_FORMSPREE_ENDPOINT` in the Vercel
  environment (and `.env.local` for local testing). Until set, the form renders
  but is inert and says so. See `.env.example`.
- **Design tokens**: `src/styles/global.css` (top of file). One light theme.

## Deploy

Push to `main`. Vercel builds and deploys automatically (framework preset:
Astro; build command `npm run build`; output `dist/`). Pull requests get preview
deployments. See [MAINTAINERS.md](MAINTAINERS.md) § Deploying and
[LAUNCH-CHECKLIST.md](LAUNCH-CHECKLIST.md) for the first-time cutover.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `npm run dev` fails on Node version | `nvm use` (need Node 20) |
| Build error mentioning a content collection | A Markdown file in `src/content/` has wrong/missing frontmatter — the error names the file and field. Compare to a working sibling. See MAINTAINERS § When something breaks. |
| A team photo doesn't show | The `photo:` path in the Markdown must point to a file that exists in `public/`. Missing file = the card falls back to text-only (by design). |
| `astro check` type errors after editing a page | Usually a typo in a prop or import; the error gives file + line. |
| Lighthouse `/team/` performance ~0.93 | Known and documented in `A11Y-AUDIT.md` — a web-font LCP artifact on the longest page under throttled simulation, not a real-connection defect. |

## The docs in this repo

- [MAINTAINERS.md](MAINTAINERS.md) — **for the non-developer who inherits the
  site.** Copy-paste recipes for adding content.
- [LAUNCH-CHECKLIST.md](LAUNCH-CHECKLIST.md) — pre-flight before going live on the
  real domain.
- [CONTRIBUTING.md](CONTRIBUTING.md) — for code contributors (branches, PRs,
  style).
- [DECISIONS-V2.md](DECISIONS-V2.md) — every design/architecture decision and why.
- [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md) — what still needs an answer from Bell or
  the co-leads before launch.
- [A11Y-AUDIT.md](A11Y-AUDIT.md) — accessibility & performance audit results.
- `docs/` — the original brief and source-of-truth documents.

## License

Content © the 3MIP project, licensed **CC BY 4.0**. Source code **MIT**.
