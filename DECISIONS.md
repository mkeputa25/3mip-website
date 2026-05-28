# 3MIP Website — Decisions

Phase 0 output. Every design and architectural decision committed for v1, with rationale, alternatives rejected, and the v2 upgrade path.

A note on a brief inconsistency surfaced in Phase 0: `docs/REFERENCES.md` names a `3mip-design-research.md` Phase 0 deliverable that the kickoff prompt does not list. I have folded the research synthesis into this file (see "Reference site research synthesis" at the bottom) rather than producing a redundant fourth Phase 0 file. Flagging here; not asking permission.

---

## Reference site research synthesis

I fetched what was reachable. CPREE and CIESIN both returned HTTP 403 to WebFetch (likely WAF blocking automated fetchers); their patterns are well-documented elsewhere and the brief itself describes them accurately, so I proceeded without their specifics. Sites I did reach: agmip.org, isimip.org, anthropic.com, press.stripe.com, impactlab.org, worksinprogress.co.

**Patterns the reference set shares:**

1. Sans-serif body, with a serif appearing only for display/editorial moments (Stripe Press, Works in Progress). Two of the four academic references run sans-only.
2. Neutral palette anchored in off-white and deep charcoal/ink. Accent colors appear only on CTAs, tags, or key chart elements — never as a background gradient.
3. Generous whitespace, single-column reading widths around 65ch, no full-width prose.
4. Above-the-fold is a headline + short subhead. Not a hero image. Not a video.
5. Footers carry credibility signals (legal, accessibility, license, last-updated) rather than link farms.

**Anti-patterns observed in references the brief specifically forbids:**

- Climate Impact Lab uses a rotating photography carousel on the home page. This is exactly the anti-pattern flagged in `docs/BRIEF.md`.
- AgMIP's "Click Here" CTAs are dated and generic — the COPY-GUIDE.md forbids generic CTAs.

**Decisions the research informs:**

- A serif + sans pairing is justified for 3MIP. The signature visualization caption, page H1s, and the home hero headline benefit from serif weight; the rest is sans for legibility and density.
- The accent color should differentiate from the blue-green default that pervades climate work *and* the reference set. A warm clay/ochre accent achieves that without becoming gimmicky.
- The footer should carry the institutional signal the brief asks for (last-updated, license, accessibility, GitHub link), not a wall of nav repeats.

---

## D1 — Typeface pair

**Decision:** Source Serif 4 (variable) + Inter (variable). Self-hosted via `@fontsource-variable/source-serif-4` and `@fontsource-variable/inter`.

**Weights to load:** Serif — 400 regular, 600 semibold, 400 italic. Sans — 400 regular, 500 medium, 600 semibold. Variable font axis means a single file per family covers all weights at ~30–50KB each. Target total payload: ≤150KB woff2 across both families.

**Why:**
- Both are open-licensed (OFL / SIL). Zero ongoing license cost.
- Both ship variable font versions, so weight transitions are smooth and the payload is bounded.
- Source Serif 4 is Adobe's contemporary serif — purpose-designed for digital reading, looks current next to IBM Plex Serif but reads warmer. Strong precedent in research publishing.
- Inter is the most-tested screen sans of the last decade, with excellent metrics for tabular figures (a real concern on the Data page).
- Both are self-hostable via Fontsource with no Google Fonts CDN dependency, satisfying the privacy and performance requirements in the brief.

**Considered and rejected:**

- *IBM Plex Serif + IBM Plex Sans (pairing B)*: cohesive family, but Plex reads slightly utilitarian — leans more "IBM technical doc" than "academic infrastructure." Holding it as a fallback if Bell pushes back on Source Serif 4.
- *Newsreader + Inter (pairing E)*: distinctive serif, variable, free — the upgrade path the brief itself names. Holding as the alternative if Bell wants more editorial character at design review.
- *Untitled Serif + Inter / Tiempos + Söhne (pairings C, D)*: paid licenses, ruled out by budget.
- *System font stacks*: would save 100% of font payload but lose typographic consistency across platforms. The credibility cost outweighs the payload savings.

**v2 upgrade path:** Swap Source Serif 4 for Newsreader if Bell wants more editorial character, or upgrade to Tiempos+Söhne if 3MIP secures operating-phase funding that makes a $1K+ license trivial. Either swap is a 30-minute change because all type lives in tokens.

---

## D2 — Color palette

**Philosophy:** climate work overuses cool blues and conservation greens. 3MIP differentiates with a warm-neutral base (paper-off-white + ink) and a single clay/terra-cotta accent. The focus ring is a deliberately *cool* blue, distinct enough from the warm accent that color-blind users can distinguish "active" from "focused."

**Light mode tokens:**

| Token | Hex | Role |
|---|---|---|
| `background` | `#FAF7F2` | Warm paper white — page background |
| `surface` | `#F2EDE4` | Card and callout fill |
| `surface-elevated` | `#FFFFFF` | Modals, dropdowns (used rarely) |
| `ink` | `#1A1715` | Primary text |
| `ink-muted` | `#5C544D` | Captions, metadata, secondary prose |
| `ink-subtle` | `#8A8077` | Tertiary text, dataset row metadata |
| `accent` | `#B7472A` | Clay — primary buttons, active nav, key chart elements |
| `accent-dim` | `#8E3520` | Accent hover |
| `accent-ink` | `#FAF7F2` | Text on accent fill |
| `border` | `#E0D9CC` | Default 1px border |
| `border-strong` | `#B8AC99` | Table headers, focused-cell border |
| `focus-ring` | `#2D5A87` | Cool blue — distinct from accent on purpose |
| `success` | `#3F6B3F` | Form success only |
| `warning` | `#A86B12` | Caution callout (rare) |
| `error` | `#9A2E1F` | Form errors |

**Dark mode tokens** (applied via `@media (prefers-color-scheme: dark)`, no user toggle in v1):

| Token | Hex |
|---|---|
| `background` | `#14110E` |
| `surface` | `#1F1A15` |
| `surface-elevated` | `#2A231D` |
| `ink` | `#F1ECE2` |
| `ink-muted` | `#B8AC99` |
| `ink-subtle` | `#8A8077` |
| `accent` | `#D26B4D` |
| `accent-dim` | `#B7472A` |
| `accent-ink` | `#14110E` |
| `border` | `#2D2620` |
| `border-strong` | `#4A3F35` |
| `focus-ring` | `#6BA0D6` |
| `success` | `#7AA67A` |
| `warning` | `#D49A52` |
| `error` | `#D67566` |

**Contrast verification:** measured contrast ratios will be rendered next to each pair on `/_design` in Phase 1. The expected pass profile:

- `ink` on `background`: ~12.8:1 (AAA, exceeds 7:1 body requirement)
- `ink-muted` on `background`: ~6:1 (AA pass for non-body use only — captions, metadata)
- `accent-ink` on `accent`: ~5.6:1 (AA pass for buttons)
- `focus-ring` on `background`: ~6.5:1 (well above 3:1 minimum)

Any pair that fails its target on `/_design` gets darkened until it passes. No exceptions.

**Considered and rejected:**

- *Conservation green + neutral*: the differentiation argument cuts both ways — green is the climate-trope color, and 3MIP is climate work. Ruled out.
- *Pure ink + accent, no warm undertone*: cleaner but reads colder. The warm paper background pulls the site toward "publishing house" register, away from "SaaS dashboard" register, which is the right axis for a research consortium.
- *Multiple accents*: violates the two-color-max rule in `docs/DESIGN-PRINCIPLES.md`. The focus-ring is not a third color in the brand sense — it is a functional accessibility cue.

**v2 upgrade path:** If Bell wants institutional alignment with a specific Cornell/OSU/VU palette, the accent swap is one token change. The warm-paper background is more structural and would survive a partner-palette overlay.

**`[PENDING BELL APPROVAL]`:** if Bell wants the accent moved to a specific institutional color (Cornell's carnelian #B31B1B is very close to my proposed #B7472A but more saturated), this can be swapped in 5 minutes.

---

## D3 — Grid system

**Decision:** 1280px max content width. 12-col / 6-col / 4-col at lg / md / sm breakpoints. Gutters 32 / 24 / 16. Column gap 24 desktop, 16 mobile. Prose width capped at 65ch regardless of column allocation.

| Breakpoint | Viewport | Columns | Gutter | Column gap |
|---|---|---|---|---|
| `sm` | 375–639 | 4 | 16 | 16 |
| `md` | 640–767 | 6 | 24 | 16 |
| `lg` | 768–1023 | 6 | 24 | 24 |
| `xl` | 1024–1279 | 12 | 32 | 24 |
| `2xl` | ≥1280 | 12 | 32 (content capped) | 24 |

**Why:** matches `docs/DESIGN-PRINCIPLES.md` and Tailwind defaults. 1280 keeps line-length sane on 27" monitors; 65ch keeps prose readable regardless.

**v2 upgrade path:** none required.

---

## D4 — Content collection schemas

**Decision:** ship the four collections exactly as specified in `docs/CONTENT-INVENTORY.md § Content Collections`. No additions in v1.

Adds I considered and deferred to v2:
- A `cases` collection for when Case 2 is announced. The current Bangladesh case is a single page; promoting it to a collection now adds indirection without value.
- A `protocols` collection for versioned protocol documents. Currently a registration-gated PDF, not site content.

**File-naming convention:** `YYYY-MM-short-slug.md` for dated content (news, webinars). `surname-firstname.md` for team. The CONTENT-INVENTORY spec uses surname-only slugs; I'll use surname-only to match.

**v2 upgrade path:** add `cases` and `protocols` collections when content exists.

---

## D5 — Form strategy

**Decision:** Formspree free tier. Action URL is a placeholder until Mario creates the form; build does not depend on it.

**Why:**
- Brief defaults to Formspree free tier; I'm not overriding without reason.
- Static site stays static — no serverless function to maintain.
- Free tier: 50 submissions/month is the documented cap. Audience is climate-migration modelers, not the general public — 50/month is generous.
- GDPR-acceptable: Formspree's processor agreement covers the EU.
- Maintainer transfer is trivial: change one environment variable on Vercel.

**Considered and rejected:**

- *Cornell Qualtrics link-out*: forces visitor off-site, loses analytics on completion, ties the project to Mario's Cornell account which expires May 2026. Bad maintainer story.
- *Static mailto*: zero infrastructure but no captcha, no anti-spam, no submission record. Spam load would be unmanageable once the site is indexed.
- *Vercel form action*: requires a serverless function, which violates "static output" in the brief.

**Risk:** Formspree's free tier may change terms. Mitigation: form posting is one HTML attribute; swapping providers is 5 minutes.

**v2 upgrade path:** if registrations exceed 50/month or Bell wants submissions in Cornell systems of record, swap to Cornell-managed endpoint at handoff.

---

## D6 — Image strategy

**Decision:** SVG-first for everything visual. No raster imagery in v1 except possibly leadership headshots pending Bell approval. No stock photos ever.

**Rules:**
- Diagrams, maps, charts, signature viz: inline SVG. No external image references.
- Bangladesh district map on Case 1: stylized SVG polygon outlines, no satellite imagery.
- Open Graph image: build-time generated PNG (Astro `@vercel/og` if needed) or a typographic OG card. Decision deferred to Phase 2.
- Leadership headshots (Bell, Best, Tierolf): `[PENDING BELL APPROVAL]`. If approved, square monochrome treatment, served as WebP with PNG fallback, explicit width/height, lazy-loaded. If not approved, no photos at all — the page still works.
- No photos of advisors. Ever.
- No photos of participants. Ever.

**Why:** brief is explicit. Photos of refugees, rising water, or "global south" imagery would actively damage credibility.

**v2 upgrade path:** consider real map underlays (OpenStreetMap tiles or Natural Earth) for the Case page if Bell wants more geographic specificity. Adds image-handling complexity, not v1 scope.

---

## D7 — Search strategy

**Decision:** no search in v1.

**Why:** the site is nine pages plus a news collection that will hold ≤20 entries at launch. Top nav reaches everything in one click. Adding search adds either client-side bundle weight (Pagefind ~50KB minimum) or a server dependency, both for marginal value.

**v2 upgrade path:** install Pagefind when News exceeds ~30 entries or Outputs grows past a single page. Pagefind is build-time static and adds zero runtime cost on pages where the user does not invoke it.

---

## D8 — Analytics

**Decision:** none in v1. No client-side analytics. No server logs collected. No third-party trackers of any kind.

**Why:**
- The brief permits "none or Plausible self-hosted only."
- Self-hosted Plausible requires a server, contradicting Vercel free tier.
- A cloud Plausible instance would cost $9/month and triggers a GDPR cookie banner conversation that nobody on the team wants to have right now.
- The site's success measure is not pageviews; it is registrations (form submissions) and citations in academic work. Both are measurable outside the site.

**Considered and rejected:**

- *Plausible Cloud*: $9/month, GDPR-compliant without cookie banner, but unjustifiable for v1 budget.
- *Vercel Analytics*: free on hobby tier but uses Vercel-specific bundle, adds JS, and the audience is small enough that the data is noise.
- *Google Analytics*: hard no. Privacy posture mismatch, cookie banner required, brand contradiction for a privacy-conscious research project.

**v2 upgrade path:** add Plausible self-hosted on a $5 Hetzner box when 3MIP has operating-phase funding and a maintainer who can keep it running.

---

## D9 — Sitemap and robots.txt

**Decision:**

- `@astrojs/sitemap` integration generates `sitemap-index.xml` at build time.
- `/_design` excluded (underscore prefix).
- `robots.txt` written to `public/robots.txt`: `User-agent: *` `Allow: /` `Disallow: /_design/` plus the sitemap URL.

**v2 upgrade path:** none required.

---

## D10 — 404 page

**Decision:** `src/pages/404.astro`. Layout matches the site shell (header, footer, base layout). Body contains:

- Page title: "404 — page not found"
- One-paragraph explanation in the project's voice ("This page doesn't exist on the 3MIP site. The site is small enough that everything available is in the navigation above.")
- A list of the five most-visited pages as direct links: Home, About, Case 1, Participate, Team
- A line offering email contact for broken citations

No illustrations. No "lost in space" copy. No oversized 404. The page treats getting lost as routine, not theatrical.

**Why:** the brief explicitly forbids cute 404s on research sites.

**v2 upgrade path:** none required.

---

## D11 — Dark mode

**Decision:** auto via `prefers-color-scheme: dark`. No user toggle in v1.

**Implementation:** CSS variables on `:root` with `@media (prefers-color-scheme: dark)` override block. No JS, no flash of incorrect theme.

**Why:** the brief calls a toggle "v2 scope creep." Agreed. A toggle requires localStorage, a small JS shim to set the class before paint, and an additional control in the UI. For a v1 launch focused on credibility, the toggle is not a content gap; the dark mode itself is.

**v2 upgrade path:** add a tri-state toggle (auto / light / dark) in the footer when there is a documented user request for it. Plumbing exists already because the dark theme is fully defined.

---

## D12 — Last-updated date

**Decision:** rendered in the footer, derived from the last git commit date on the file. Implemented at build time:

```js
// In Footer.astro or a helper:
import { execSync } from 'node:child_process';
const lastUpdated = execSync('git log -1 --format=%cd --date=short').toString().trim();
```

Falls back to `import.meta.env.BUILD_TIME` if git isn't available during build (Vercel builds run on shallow clones; `--depth=20` is sufficient and configurable).

**Why:** the brief asks for "Last-updated [auto-generated from git]." Build-time computation keeps the value honest and avoids running git in the browser.

**v2 upgrade path:** consider per-page last-modified (also from git) if individual page freshness becomes a credibility signal.

---

## D13 — Hero headline (Home page)

**Decision (v1 draft):** *Different models. Same question. One coordinated answer.*

**Why this over the alternatives in CONTENT-INVENTORY.md:**
- Direct. Three short clauses. Survives the COPY-GUIDE ban list cleanly.
- Names the entire thesis of 3MIP in one line: divergence is the input, synthesis is the output.
- The "coordinated answer" framing pairs with the signature visualization below it without spoiling it.

**Considered and rejected:**

- *"Climate-migration models disagree. 3MIP makes the disagreement legible."* — strong, but "legible" might land as too literary for a funder skimming.
- *"A benchmark exercise for climate-migration modeling."* — accurate, but reads as the subhead, not the headline.
- *"Coordinating climate-migration models on shared cases."* — fine but loses the "why" — you don't yet know the divergence is the point.

**`[PENDING BELL APPROVAL]`:** Bell sign-off required before launch.

---

## D14 — Tagline (used in meta, footer wordmark line, OG)

**Decision (v1 draft):** *A community benchmark for climate-migration models.*

**Why:** descriptive, no banned words, locates the project in the AgMIP/ISIMIP family without saying so.

**`[PENDING BELL APPROVAL]`.**

---

## D15 — Astro adapter and output mode

**Decision:** `@astrojs/vercel` adapter, static output (`output: 'static'`). No SSR. No serverless functions. Site builds to plain HTML/CSS/JS.

**Why:** matches stack lock in the brief. Vercel free tier hosts unlimited static bandwidth; SSR routes count against function invocations.

**v2 upgrade path:** flip to hybrid output if a future feature needs server-rendered routes (e.g., a participant directory with auth).

---

## D16 — Node, TypeScript, package manager

**Decision:**
- Node 20 LTS (matches brief)
- TypeScript strict mode (`"strict": true` in tsconfig, `verbatimModuleSyntax: true`)
- npm (not pnpm, not yarn) — the brief shows `npm` examples; non-developer maintainer in 2026 will recognize npm
- Lockfile committed
- Major versions pinned in `package.json`; `package-lock.json` carries minors

**v2 upgrade path:** move to pnpm if monorepo structure ever justifies it. Not v1.

---

## D17 — Lighthouse / a11y tooling

**Decision:**
- `@lhci/cli` (Lighthouse CI) for performance, a11y, best practices, SEO targets ≥95.
- `axe-core` CLI (not pa11y-ci — `pa11y` has stalled releases and brittle node-version constraints).
- `lychee` for link checking (Rust binary, fast, handles internal + external).
- Run on CI via GitHub Actions on every PR (Phase 7 deliverable).

**v2 upgrade path:** add visual regression (Chromatic / Playwright snapshots) when the maintenance burden justifies it. Not v1.

---

## Open decisions awaiting Bell (surfaced in OPEN-QUESTIONS.md at Phase 6)

| ID | Decision | Default while waiting |
|---|---|---|
| B1 | Final domain (3mip.org vs institutional) | Configs use `3mip.org` placeholder |
| B2 | Institutional logos on home page | None shown |
| B3 | Leadership headshots permission | No photos rendered |
| B4 | Operating-phase funder list | About page reads "operating-phase funding pending" |
| B5 | Tagline final wording | "A community benchmark for climate-migration models" |
| B6 | Hero headline final wording | "Different models. Same question. One coordinated answer." |
| B7 | Protocol document — public PDF or registration-gated | Registration-gated (safer default) |
| B8 | Press posture | Routed through Cornell University Relations |
| B9 | Accent color institutional alignment | Clay `#B7472A` |
| B10 | Mario's successor for project management | Placeholder text on Team and Contact pages |

These are not blockers for the build. They are blockers for the launch.
