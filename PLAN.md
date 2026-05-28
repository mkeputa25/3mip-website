# 3MIP Website — Phased Build Plan

Phase 0 output. Concrete files, complexity, dependencies, and the one approval question per phase.

Complexity scale: **S** ≈ ≤2h, **M** ≈ ≤6h, **L** ≈ ≤12h. Estimates are for a focused single session; real wall time depends on review gates.

---

## Phase 0 — Plan and decisions *(this phase)*

| Item | Status |
|---|---|
| Read all 9 docs | done |
| Reference site research | done — synthesis in DECISIONS.md |
| `PLAN.md` (this file) | done |
| `DECISIONS.md` | done |
| Commit `chore(phase-0): plan and decisions` | next |

**Approval question for Mario:** *Are the choices in DECISIONS.md — typeface (Source Serif 4 + Inter), warm clay accent (`#B7472A`), Formspree, no analytics, no search — acceptable, or do you want a different starting point on any of them?*

---

## Phase 1 — Design system foundation

**Complexity: L.** Scaffolds the whole repo. Touches every later phase.

**Files to create:**

```
/package.json                         — locked dependencies
/package-lock.json                    — committed
/tsconfig.json                        — strict mode
/astro.config.mjs                     — integrations: tailwind, mdx, sitemap, vercel
/tailwind.config.mjs                  — tokens from DECISIONS.md
/postcss.config.mjs
/.gitignore                           — node_modules, .astro, dist, .vercel, .env*
/.nvmrc                               — node 20
/public/robots.txt
/public/favicon.svg                   — typographic, "3" set in serif
/src/styles/global.css                — reset, tokens as CSS vars, light + dark
/src/styles/typography.css            — type scale tokens
/src/lib/contrast.ts                  — runtime contrast calculator for /_design
/src/components/Token.astro           — color token swatch with measured contrast
/src/components/TypeSpecimen.astro    — type-scale row renderer
/src/components/Button.astro          — primary/secondary/ghost/disabled
/src/components/Link.astro            — in-prose/standalone/external variants
/src/components/Callout.astro         — note/citation/caution
/src/components/Figure.astro          — figure + figcaption wrapper
/src/components/Card.astro            — generic card primitive
/src/pages/_design.astro              — design system showcase
```

**Dependencies on prior phases:** Phase 0 token decisions. None other.

**Deliverable:** `npm run dev` boots clean. `/_design` renders every token with its measured contrast ratio, every component variant, the full type scale set with real copy from `docs/COPY-GUIDE.md`, the spacing scale, and a grid demo at three breakpoints. `npm run build` passes with zero warnings.

**Commit:** `feat(design): design system foundation and showcase page`

**Approval question for Mario:** *Does `/_design` render the type scale and color pairings at a register that feels right for the audience ranking (modelers > funders > policymakers)? If not, the right time to swap typefaces or accent hex is now.*

---

## Phase 2 — Signature visualization

**Complexity: M.** Self-contained component, but it is the visual centerpiece — has to land.

**Files to create:**

```
/src/components/SignatureViz.astro    — the six-panel small-multiples figure
/src/components/SignatureLegend.astro — shared legend + scale bar (or inlined)
/src/lib/bangladesh-outline.ts        — exported SVG path data for coastal silhouette
```

**Adds to `/_design`:** a "Signature visualization" section that renders the component at desktop, tablet, and 375px mobile.

**Hard constraints (from kickoff prompt, repeated for traceability):**

- Pure inline SVG. No `<img>`, no JS, no D3.
- Six panels: ABM, Gravity, Radiation, IAM, ML, Cellular Automaton.
- Same simplified Bangladesh coastal silhouette per panel (stylized, recognizable).
- Same question label across all panels.
- Distinct projected patterns per panel — synthetic, plausibly different, labeled *Illustrative*.
- Color ramp keyed to the accent token (sequential, not diverging, not rainbow).
- Shared legend, scale bar, panel titles, attribution line.
- 3×2 desktop / 2×3 tablet / 1×6 mobile.
- `role="img"`, `aria-labelledby` to a visually hidden description, plus a visible long-form text alternative immediately below.

**Synthetic data approach:** small JSON object inside the component with six panels × ~8 quantile bins each. The "data" is hand-tuned to tell the story (ABM concentrates inland, gravity smooths along the coast, radiation falls off with distance, IAM is coarser at district level, ML diffuses, Cellular Automaton clusters along land-use boundaries). Mario reviews the pattern story; Bell approves before launch.

**Dependencies:** Phase 1 design tokens (accent ramp, type, spacing).

**Commit:** `feat(viz): signature small-multiples component`

**Approval question for Mario:** *Does the six-panel story — and the specific patterns shown in each panel — match the substantive pitch you want 3MIP to make at the Dublin session?*

---

## Phase 3 — Shared shell and content collections

**Complexity: M.** Quiet but load-bearing. Every later page depends on it.

**Files to create:**

```
/src/layouts/Base.astro               — <head>, meta, OG, JSON-LD slot, skip-link, semantic landmarks
/src/components/Header.astro          — wordmark + nav with aria-current, hamburger at <768
/src/components/Footer.astro          — contact, links, last-updated from git, license note
/src/components/Wordmark.astro        — typographic 3MIP mark
/src/components/SkipLink.astro
/src/components/JsonLd.astro          — typed JSON-LD emitter
/src/lib/last-updated.ts              — execSync git log helper
/src/content/config.ts                — Zod schemas for news, papers, webinars, team
/src/pages/404.astro                  — on-brand, useful
```

**Schemas committed (from CONTENT-INVENTORY.md, no v1 additions):** `news`, `papers`, `webinars`, `team`.

**Dependencies:** Phase 1 for tokens and components.

**Commit:** `feat(shell): base layout, header, footer, content collections, 404`

**Approval question for Mario:** *Footer structure — wordmark + tagline + contact + quick links + project links + legal + last-updated — does this match what you want the site's bottom-of-every-page signal to be?*

---

## Phase 4A — Content backbone (Home, About, Case 1, Data)

**Complexity: L.** Four pages, but Home and Data carry most of the weight.

**Files to create:**

```
/src/pages/index.astro                — 9 sections per CONTENT-INVENTORY § Home
/src/pages/about.astro                — 7 sections per CONTENT-INVENTORY § About
/src/pages/case-bangladesh.astro      — 8 sections per CONTENT-INVENTORY § Case 1
/src/pages/data.astro                 — table + extending-the-dataset, port from Weebly
/src/components/DataTable.astro       — sortable table with mobile card collapse, ≤2KB JS
/src/components/BangladeshMap.astro   — stylized SVG district outline (Phase 2 silhouette reuse)
/src/components/TimelineList.astro    — for Case 1 § 6 expected outputs
```

**Dependencies:** Phases 1, 2, 3.

**Commit:** `feat(pages): home, about, case, data`

**Approval question for Mario:** *Home page section sequence — hero → signature viz → current case → next milestone → how it works → register CTA → lineage strip — is the right ordering for a first-time funder visitor and a returning modeler. Confirm before I lock it.*

---

## Phase 4B — Participation and people (Participate, Team)

**Complexity: M.**

**Files to create:**

```
/src/pages/participate.astro          — 6 sections, form posts to Formspree placeholder
/src/pages/team.astro                 — leadership full bios, advisors as alphabetized rows
/src/components/Form.astro            — single-column layout, accessible labels
/src/components/FormField.astro       — input/textarea/select/multiselect variants
/src/components/FaqList.astro         — accessible disclosure pattern, no accordion JS
/src/components/PersonRow.astro       — advisor row format
/src/components/PersonCard.astro      — leadership entry format (no photo if Bell hasn't approved)
```

**Dependencies:** Phase 3 (content collection for team), Phase 1 components.

**Commit:** `feat(pages): participate, team`

**Approval question for Mario:** *Formspree action URL — do you have a Formspree account set up, or should I leave a placeholder for you to fill in before launch?*

---

## Phase 4C — Outputs and news (Outputs, News, Contact)

**Complexity: M.**

**Files to create:**

```
/src/pages/outputs.astro              — webinars, working papers (empty state), conference sessions, Climatic Change (empty state)
/src/pages/news.astro                 — list view from collection, paginated
/src/pages/news/[slug].astro          — individual post page (only if fullPost: true in frontmatter)
/src/pages/news/feed.xml.ts           — RSS endpoint
/src/pages/contact.astro              — primary, PI escalation, press, mailing address
/src/components/WebinarCard.astro
/src/components/PaperCard.astro       — for when working papers exist
/src/components/NewsListItem.astro
```

**Dependencies:** Phases 1, 3.

**Commit:** `feat(pages): outputs, news, contact`

**Approval question for Mario:** *Webinar recording hosting — current Weebly site embeds Google Drive. Do we keep the Drive embeds (works but discloses Drive URLs) or upload to a YouTube channel before launch? `[PENDING BELL APPROVAL on YouTube channel ownership.]`*

---

## Phase 5 — Seed content

**Complexity: M.** Mostly writing, not coding.

**Files to create:**

```
/src/content/news/2025-10-launch.md
/src/content/news/2026-iemss-acceptance.md          [VERIFY date]
/src/content/webinars/2025-02-webinar.md            [VERIFY title, speaker, abstract]
/src/content/webinars/2025-03-webinar.md            [VERIFY title, speaker, abstract]
/src/content/team/bell.md                           — full bio from FACTS.md § Bell
/src/content/team/best.md                           — full bio from FACTS.md § Best
/src/content/team/tierolf.md                        — full bio from FACTS.md § Tierolf
/src/content/team/aerts.md                          — one-line role
/src/content/team/bearpark.md                       [VERIFY title]
/src/content/team/burzynski.md
/src/content/team/choquette-levy.md
/src/content/team/cottier.md
/src/content/team/de-sherbinin.md
/src/content/team/hoffmann.md
/src/content/team/leis.md                           [VERIFY title and role]
/src/content/team/oh.md                             [VERIFY title]
/src/content/team/oppenheimer.md
/src/content/team/puma.md
/src/content/team/sall.md                           [VERIFY title]
/src/content/team/thalheimer.md
/src/content/team/thomas.md                         [VERIFY title and role]
```

**Rules for this phase:**
- Pull facts only from `docs/FACTS.md`. Anything beyond it gets `[VERIFY]` inline.
- Every `[VERIFY]` surfaced in OPEN-QUESTIONS.md at Phase 6.

**Dependencies:** Phase 3 (schemas).

**Commit:** `feat(content): seed news, webinars, team content`

**Approval question for Mario:** *Order of advisor entries on the Team page — alphabetical by surname (per CONTENT-INVENTORY) or grouped by primary research focus? Alphabetical is the default; grouping reads as opinionated.*

---

## Phase 6 — Quality gates

**Complexity: M.** Most of the time is fixing, not running.

**Files to create:**

```
/.lighthouserc.json                   — lhci config, ≥95 thresholds, all pages
/.pa11yrc.json or axe config          — accessibility tooling config
/lychee.toml                          — link checker config
/A11Y-AUDIT.md                        — keyboard traversal log, deferred-issue rationale
/OPEN-QUESTIONS.md                    — every [VERIFY] and [PENDING BELL APPROVAL] grouped by category
```

**Run, in order:**
1. `npm run build` clean
2. `astro check` zero errors
3. `axe-core` against every built page → fix all WCAG 2.2 AA violations
4. `lhci autorun` against built output → all four scores ≥95 (document any below)
5. Manual keyboard traversal of each page → log focus order in A11Y-AUDIT.md
6. `lychee` against built output → fix internal, document legitimately-broken externals
7. Compile OPEN-QUESTIONS.md from every `[VERIFY]` and `[PENDING BELL APPROVAL]` tag in `/src/content/` and `/src/pages/`

**Dependencies:** Phases 1–5 complete.

**Commit:** `chore(qa): quality gates and audit reports`

**Approval question for Mario:** *Any Lighthouse score below 95 should be documented and accepted, or fixed before continuing. Confirm the threshold: fix-everything-to-95 or accept-with-rationale?*

---

## Phase 7 — Handoff documentation

**Complexity: M.** Writing for a non-developer is harder than writing for a developer.

**Files to create:**

```
/README.md                            — for Mario, tech setup
/MAINTAINERS.md                       — for non-developer successor, copy-paste examples
/LAUNCH-CHECKLIST.md                  — pre-flight checklist per CONTENT-INVENTORY § Launch checklist
/CONTRIBUTING.md                      — branch naming, PR conventions, run-tests
/.github/workflows/ci.yml             — build + Lighthouse on every PR
/.github/workflows/deploy.yml         — Vercel deploy hook (or rely on Vercel git integration)
/.github/PULL_REQUEST_TEMPLATE.md     — minimal: what changed, screenshots, a11y check confirmed
```

**Dependencies:** Phase 6 audits complete.

**Commit:** `docs(handoff): maintainers, launch, contributing, CI`

**Final output:** *"Build complete. Repo ready for Vercel preview deploy. OPEN-QUESTIONS.md awaits Bell."*

---

## Cross-cutting things tracked but not phase-blocking

- Domain decision (Bell). Configs use `3mip.org` placeholder; flip at launch.
- Vercel deployment is set up at the end of Phase 7. Building locally produces a working `dist/`, so Vercel is a one-click connect.
- Old Weebly site 301 redirects to new domain — done by whoever owns the Weebly account at launch.
- Backup of Weebly content — Mario archives before flipping DNS.
- Domain DNS records — Vercel provides the records; Mario / Bell apply them at the registrar.

These are launch-day operational steps, not build steps. They live in `LAUNCH-CHECKLIST.md` after Phase 7.
