# 3MIP Website — Redesign Plan (v2)

Phase 0c output, amended by the **final directive (v2.1)**. Execution order:
**0c → 1c → 2c → 1d → 2d → 4e**, each ending in a review gate, then Phase 5
(advisors + news) proceeds as planned in
[archive/v1/PLAN.md](archive/v1/PLAN.md). Phases 6–7 unchanged except where
noted (OG image uses the Fraunces wordmark; the static SVG export for
Dublin slides renders the reduced-motion state).

> **Resume note for a fresh session:** PLAN-V2.md + DECISIONS-V2.md are
> authoritative. COMPLETE AND COMMITTED: 0c, 1c, 2c, 1d, 2d, 4e, Phase 5
> (advisors + news), and Phase 6a (prep — see below). NEXT: Phase 6b.
>
> **Phase 6 is split 6a/6b** (session usage cap):
> 6a (done): OPEN-QUESTIONS.md fully compiled; FACTS Burzyński fix;
> scripts/audit.mjs (axe + keyboard trace), scripts/check-links.mjs,
> scripts/export-assets.mjs (og-default.png + slide exports, reduced-motion
> state); .lighthouserc.json (≥95 ×4, ten routes).
> 6b (next session): `npm i -D playwright axe-core @lhci/cli && npx
> playwright install chromium`, then `npm run build`, `node
> scripts/audit.mjs` (fix violations, write A11Y-AUDIT.md from its output),
> `node scripts/check-links.mjs` (fix internal; document external),
> `CHROME_PATH=$(node -e "console.log(require('playwright').chromium.executablePath())") npx lhci autorun`
> (document any <95), `node scripts/export-assets.mjs && npm run build`,
> commit `chore(qa): quality gates and audit reports`. Then Phase 7
> (handoff docs) per archive/v1/PLAN.md.

---

## Phase 1d — gallery ground + motion infrastructure (v2.1)

**Scope:** background→white, surface→#F8F6F3, NEW plate token #F5EFE4
(figures only), border/border-strong revised; contrast re-verification on
/design against the new grounds; Tier 1 motion (shared reveal observer +
utilities) and Tier 2 hero ambience component; /design gains grounds,
plate-treatment demo, and live motion demos. Atlas land fill design-locked
to literal #EEE7D7 (V8). Accent-on-white usage rule documented (body-size
accent text → accent-deep or ink).

**Files:** global.css, Base.astro (RevealScript include), new
src/components/RevealScript.astro + HeroAmbience.astro, design.astro,
SignatureViz.astro + BangladeshMap.astro (land-fill literal only).

**Approval question:** *On /design: does the plate treatment read as "warm
print on a gallery wall," and is the ambience demo quiet enough?*

## Phase 2d — kinetic signature figure (v2.1)

**Scope:** the six-panel plate animates on a shared ~14s 2025→2050 loop
with a Geist Mono year readout. Per-panel motion mirrors each model's
computational logic: 01 dots drift toward the Dhaka corridor with fade-out/
fade-in displacement; 02 arcs draw in (dashoffset) then pulse with flow
weight; 03 rings ripple outward (~2.5s cascade); 04 region fills jump
through 5 discrete states (no tweening — the jump cut is the meaning);
05 contour bands crossfade between 3 precomputed states; 06 cells update
in discrete generations (~1.5s tick). CSS keyframes/SMIL on the existing
geometry; precomputed states as additional arrays; deterministic; no rAF,
no canvas, no library.

**Controls (non-negotiable):** plays in view / pauses out of view (shared
observer); visible pause/play ghost button (WCAG 2.2.2); reduced motion →
today's static plate, button hidden; long-form alternatives on Home and
/dublin gain one motion sentence per panel; nothing exceeds 3 changes/sec
(WCAG 2.3.1). Total JS stays within the ≤3KB system budget.

## Phase 4e — restyle pass (revised brief, v2.1)

As planned below (wordmark, colophon, eyebrows, hairlines, How-3MIP-works
rebuild, uppercase strip, V7 corrections) **plus**: all 14 pages on white;
every figure block mounts on plate, the Home//dublin viz band full-bleed
with space-8 above/below; hero clamps up to 4.25rem desktop with 1.04
leading; section h2s up one step; How-3MIP-works numerals ~3rem Fraunces
accent-dim hanging in the left margin at desktop; site-wide scroll-reveal
on section blocks (never the first viewport); card hover = border-strong
lift + title underline-slide, no translation, no shadow.

---

Complexity scale as before: **S** ≤2h, **M** ≤6h, **L** ≤12h.

---

## Implementation concerns (surfaced, not silently reinterpreted)

The directive says: do not soften the tokens; surface concerns here. These
are measured WCAG 2.x ratios against `background #F5EFE4`, computed in
Phase 0c (script-verified, re-verified live on `/design` in 1c):

**C1 — `ink-subtle #9A9085` measures 2.74:1.** That fails AA for text at
any size (small needs 4.5:1, large needs 3:1). v1 used ink-subtle for
dataset row metadata, tag pills, kickers — all real text. Options at the 1c
gate: (a) restrict ink-subtle to genuinely decorative glyphs and move all
text uses to ink-muted (5.17:1); (b) darken the token (~`#7A7164` reaches
~4.0:1 — still short of small-text AA); (c) accept and document as a known
WCAG failure (not recommended; contradicts the brief's "accessibility is
real, not lip service"). **I will build 1c with option (a)** — token kept at
the mandated hex, text usage reassigned to ink-muted — unless you override.

**C2 — `accent #B85A35` measures 4.03:1; `accent-dim #D08A6E` 2.43:1.**
The directive specifies eyebrows at 11–12px in accent. 11–12px Geist 500 is
"small text" under WCAG (large = ≥24px regular / ≥18.66px bold), needing
4.5:1 — accent misses by 0.47. Hover states in accent-dim (2.43:1) fail
during interaction. Options: (a) eyebrow text in `accent-deep` (9.97:1)
with accent reserved for the eyebrow's hairline/marker; (b) accept 4.03:1
as a documented near-miss on decorative microcopy that always sits adjacent
to a compliant heading; (c) darken accent for text-only contexts via a
derived `accent-text` value. **I will build 1c with option (b) for eyebrows
(documented on /design and in A11Y-AUDIT.md) and avoid accent-dim for any
text or hover-text state (border/fill hovers only)** — unless you override.
This is the one place I'm accepting a sub-AA number, because the eyebrow is
redundant labeling by design; flag it to Bell if you want zero exceptions.

**C3 — `warning #C88A1A` measures 2.58:1.** Currently the `[VERIFY]` /
`[PENDING]` inline tags render in warning at caption size — they'd be
near-invisible failures on parchment. **I will move those tags to
`accent-deep` (9.97:1) in 1c/4e** and reserve warning for the caution
callout's left border paired with ink text — though even as a non-text
indicator 2.58:1 misses the 3:1 UI minimum; the callout never relies on the
border alone (it has a label), which is the WCAG-compliant reading.

**C4 — Fraunces full-axes payload.** SOFT/WONK require the full-axes
variable file, which is heavier than the wght-only build; the colophon also
wants an italic. Budget is ≤180KB. Measured at install in 1c and reported
at the gate with the fallback plan (full-axes for display, standard for
text) if over.

**C5 — uppercase inventory.** `text-transform: uppercase` currently appears
in: SignatureViz (question label, ramp ends), Footer column headings,
DataTable mobile labels, 404 + Dublin kickers, Home key-facts heading,
PersonCard publications heading, NewsListItem tags, WebinarCard length,
design.astro labels. All stripped in 1c (token/global) and 4e (per-page),
replaced by Geist 500 + 0.18em tracking.

**C6 — stale references.** Code comments and FACTS.md reference
"DECISIONS.md D5/D20" etc. Those files now live at archive/v1/. Phase 4e
updates in-code references to DECISIONS-V2.md or the archive path. The
inherited decisions (D4–D20) remain in force per DECISIONS-V2 § header.

**C7 — preview screenshot tooling** returned corrupt captures during 4D
verification. 1c/2c/4e verification will rely on DOM snapshots + computed
styles (`preview_inspect`/`preview_eval`); if screenshots stay broken, the
visual sign-off is yours at each gate via the dev server.

---

## Phase 0c — Plan and decisions (this phase)

| Item | Status |
|---|---|
| `git mv` PLAN.md, DECISIONS.md → archive/v1/ | done |
| DECISIONS-V2.md (D1 reversal recorded, tokens, viz spec, corrections) | done |
| PLAN-V2.md (this file, with measured contrast pre-flight) | done |
| Commit `docs(redesign): v2 plan and decisions; archive v1` | next |

**Approval question:** *Concerns C1–C3 each name a default I'll build with.
Confirm or override the three defaults — they are the only places where the
mandated hex values and WCAG AA collide.*

---

## Phase 1c — Design system replacement

**Complexity: L.** Touches every page through tokens, but pages are
restyled in 4e — 1c scope is fonts, tokens, global.css, and /design.

**Files to modify:**

```
package.json                    — add fraunces/geist/geist-mono, remove source-serif-4/inter
src/styles/global.css           — full token replacement; dark-mode blocks DELETED;
                                  color-scheme: light; Fraunces axis settings; onum/lining
                                  figure rules; eyebrow/hairline/section-label utilities;
                                  uppercase removal in global tokens
src/layouts/Base.astro          — single theme-color #F5EFE4; dark meta removed
src/components/ColorSwatch.astro— unchanged mechanics, new pairs
src/pages/design.astro          — rebuilt: new tokens with measured ratios, Fraunces
                                  axis specimens (display vs text optical sizes, WONK on/off),
                                  Geist scale, eyebrow + section-divider + hairline demos,
                                  spacing, grid demo, all components re-rendered
public/favicon.svg              — redrawn to new ink/parchment ("3M" variant lands with
                                  the wordmark in 4e if not here)
```

**Dependencies:** 0c approval of C1–C3 defaults.

**Verify:** clean build + check; /design at 375px and desktop; payload
measurement (C4) reported; zero `prefers-color-scheme` matches in dist CSS.

**Commit:** `feat(design): v2 system — Fraunces/Geist, parchment tokens, light-only`

**Approval question:** *Does /design render the Fraunces display register
(SOFT 50 / WONK 1) and the parchment-terracotta pairing at the Yale-Press
bar you're aiming for? Type and tokens lock here for 2c and 4e.*

---

## Phase 2c — Signature visualization atlas-plate rebuild

**Complexity: L.** Six distinct visual grammars replace one shared grid.

**Files to modify/create:**

```
src/components/SignatureViz.astro   — rebuilt per DECISIONS-V2 V5: per-panel
                                      generators (dots / arcs / rings / polygons /
                                      contours / grid), cartographic furniture,
                                      figure furniture (Fig. 01 eyebrow, Illustrative
                                      tag, ramp legend, ≈100 km scale, SSP2-4.5,
                                      attribution caption)
src/lib/bangladesh-outline.ts       — unchanged module; may gain district hairline
                                      paths (internal 0.3pt lines need geometry)
```

**What survives:** viewBox, outline module, deterministic generation,
accessibility structure, responsive 3×2 / 2×3 / 1×6.

**Verify:** /design and / at three breakpoints; each panel's grammar reads
as distinct (esp. 05-smooth vs 06-discrete); no blue anywhere; build+check.

**Commit:** `feat(viz): atlas-plate rebuild — six architectures, six grammars`

**Approval question:** *Do the six grammars read as six different model
worldviews at 375px (where panels stack full-width) — and does panel 04's
deliberate emptiness read as "aggregated" rather than "unfinished"?*

---

## Phase 4e — Restyle pass across all built pages

**Complexity: L.** Copy unchanged except where the 01/02/03 grid
replacement requires markup changes, plus the V7 corrections.

**Files to modify:**

```
src/components/Wordmark.astro       — Fraunces opsz 72 / SOFT 100 / WONK 1 / 500,
                                      hairline underrule at half width
src/components/Header.astro         — restyle; no uppercase
src/components/Footer.astro         — restyle + colophon (V6); headings de-uppercased
src/components/{Button,Link,Card,Callout,CitationBlock,FormField,CheckboxGroup,
  Faq,PersonCard,PersonRow,WebinarCard,PaperCard,NewsListItem,DataTable,
  TimelineList,BangladeshMap}.astro — token sweep, hairlines, figure conventions
src/pages/index.astro               — hero in Fraunces display; "How 3MIP works"
                                      rebuilt as hairline-ruled text blocks with
                                      inline Fraunces step numbers; leadership +
                                      lineage restyle; section dividers
src/pages/{about,case-bangladesh,data,participate,team,outputs,contact,
  news/index,news/[slug],dublin,404,privacy,accessibility}.astro
                                    — restyle: eyebrows, Sec. labels, asymmetric
                                      heads where the grid allows, dash audit
src/content.config.ts               — speakers optional (V7.1)
src/content/webinars/*.md           — month titles; Simona VERIFY dropped (V7.1)
src/pages/data.astro                — SRDI exact PDF URL (V7.2)
src/pages/case-bangladesh.astro     — Mallick title VERIFY resolved (V7.3)
docs/FACTS.md                       — V7 corrections mirrored
public/favicon.svg                  — "3M" wordmark variant
```

**Verify:** all 14 pages at 375px/768/desktop; zero uppercase in dist HTML
(grep); zero dark-mode CSS in dist; build + check clean; en/em dash audit.

**Commit:** `feat(redesign): editorial restyle across all pages, wordmark, colophon`

**Approval question:** *Walk Home → Case 1 → Data → Participate at both
widths: does the register now read monograph rather than product site —
and is there anywhere the asymmetric grid or margin captions hurt scanning?*

---

## Then: Phase 5 (advisors + news) per archive/v1/PLAN.md, reduced scope
as recorded there. Phases 6–7 unchanged; Phase 6's OG image and
slide-deck exports use the new wordmark and atlas-plate figure.
