# Contributing to the 3MIP website

For code contributors. If you only want to add content (news, webinars, papers,
team), read [MAINTAINERS.md](MAINTAINERS.md) instead — you don't need this.

## Setup

```bash
nvm use            # Node 20
npm install
npm run dev
```

## Before you open a PR

Run these locally; CI runs the same checks:

```bash
npm run build      # must pass clean
npm run check      # astro check — zero errors
node scripts/check-links.mjs   # internal links resolve
node scripts/audit.mjs         # axe: all routes clean  (needs: npx playwright install chromium)
```

If you touched anything visual, also eyeball it at **375px** and desktop, and
test with **reduced motion** on.

## Branches & commits

- Branch off `main`. Name branches `type/short-description`, e.g.
  `feat/participant-directory`, `fix/datatable-sort`, `docs/maintainers-typo`.
- **Never commit to `main` directly; never force-push.**
- **Conventional Commits** for messages: `feat:`, `fix:`, `chore:`, `docs:`,
  `refactor:`, `style:`, `test:`. One logical change per commit.
- End commit messages with the project trailer:
  `Co-Authored-By:` lines are fine; keep history honest.

## Pull requests

- Keep them small and single-purpose.
- Fill in the PR template: what changed, why, screenshots for visual changes, and
  confirm the checklist (build, check, a11y).
- A preview deploy is created automatically — link it in the PR.
- CI (build + Lighthouse) must be green. Accessibility, best-practices, and SEO
  are hard gates at ≥ 95; performance is a warning (see `A11Y-AUDIT.md` for the
  one documented `/team/` exception).

## Style & conventions

- **Design tokens, not raw values.** Colors, spacing, and type come from the CSS
  variables in `src/styles/global.css` (and their Tailwind utilities). Don't
  introduce new hex colors or one-off pixel values; extend the token system if
  something is genuinely missing and note it in `DECISIONS-V2.md`.
- **Light theme only.** Do not add `prefers-color-scheme: dark` rules — dark mode
  is a deliberate v2 item needing its own design pass (`DECISIONS-V2.md` V3).
- **Semantic HTML, real landmarks, no `<div>` soup.** Heading levels never skip.
  Every interactive element keeps a visible focus ring. Hit areas ≥ 44px.
- **Accessibility is a gate, not a nicety.** New interactive UI needs keyboard
  operation, an accessible name, and an axe-clean result. Motion must honor
  `prefers-reduced-motion`.
- **No new dependencies without a reason.** The stack is locked (Astro, Tailwind,
  MDX, Vercel). If you think something's missing, justify it in `DECISIONS-V2.md`
  first. No analytics, no client framework, no third-party embeds.
- **Copy follows `docs/COPY-GUIDE.md`** — the ban list is real (no "leverage",
  "robust", "cutting-edge", …). Facts trace to `docs/FACTS.md` or get a `[VERIFY]`
  tag plus an entry in `OPEN-QUESTIONS.md`.
- **TypeScript strict.** `astro check` must pass.

## Where things live

See the project layout table in [README.md](README.md). In short: routes in
`src/pages/`, reusable UI in `src/components/`, editable content in
`src/content/`, tokens in `src/styles/global.css`, decisions in
`DECISIONS-V2.md`.
