# 3MIP Website — Decisions, v2 (design reversal)

Phase 0c output, June 2026. This file supersedes the design decisions in
[archive/v1/DECISIONS.md](archive/v1/DECISIONS.md) where stated below;
everything not explicitly superseded remains in force (notably D4 content
collections, D5 Formspree, D7 no search, D8 no analytics, D9 sitemap/robots,
D10 404 posture, D12 last-updated, D15–D17 platform/tooling, D18 RSS,
D19 news pagination, D20 webinar hosting).

**Authority:** Mario's redesign directive (June 2026), issued after screenshot
review of the v1 build. The Fraunces/Geist references in the Phase 4D spec
were from this directive; the D1 flag I raised at the 4D gate is answered:
full reversal, not a wording slip.

---

## V0 — Why the reversal (recorded rationale)

The v1 system was competent but safe in exactly the ways `docs/BRIEF.md`
warned against: Source Serif 4 + Inter is the most default "serious
tech-academic" pairing of the decade; the original blue-leaning defaults and
saturated numbered-card patterns read as climate-tech startup. The new
register bar: Yale University Press monograph, Asterisk Magazine, Cabinet,
the printed IPCC reports as designed objects. Institutional rigor over
product polish. Supersedes **D1** (typeface), **D2** (palette), **D11**
(dark mode), and parts of **D13/D14's visual carriage** (copy unchanged).

---

## V1 — Typography: Fraunces + Geist + Geist Mono

**Decision (locked by directive):**

| Family | Source | Role |
|---|---|---|
| Fraunces (variable: opsz/wght/SOFT/WONK) | `@fontsource-variable/fraunces` | Display, headings, serif prose moments, wordmark, colophon |
| Geist (variable) | `@fontsource-variable/geist` | Nav, captions, metadata, buttons, eyebrows, panel labels. Weights 400/500 only |
| Geist Mono | `@fontsource/geist-mono` | Code, data attributions. Rare |

**Axis settings:**
- Display: `opsz 96, SOFT 50, WONK 1`, weight 500
- Body-serif moments: `opsz 14, SOFT 0, WONK 0`, weight 400
- Old-style figures in prose (`font-feature-settings: "onum" 1`); lining figures in tables
- Wordmark: `opsz 72, SOFT 100, WONK 1`, weight 500

**Implementation note:** the SOFT/WONK axes require Fontsource's *full-axes*
variable file (`@fontsource-variable/fraunces/full.css`), which is larger
than the default wght-only build. Payload target **≤180KB** total woff2;
actual sizes measured at install in Phase 1c and reported at that gate. If
over target, the fallback is full-axes Fraunces for display only + standard
build for text — surfaced at the gate, not decided silently.

**Old packages removed:** `@fontsource-variable/source-serif-4`,
`@fontsource-variable/inter`.

---

## V2 — Color: warm parchment, terracotta, light-only

**Decision (locked by directive, hex verbatim):**

| Token | Hex | Role | Measured vs background |
|---|---|---|---|
| `background` | `#F5EFE4` | Warm parchment — the whole site sits on this | — |
| `surface` | `#EEE7D7` | Cards step *deeper* than background, not white | — |
| `surface-elevated` | `#FFFFFF` | Dropdowns/overlays only | — |
| `ink` | `#1A1612` | Deep ink-brown, not pure black | 15.72:1 (AAA) |
| `ink-muted` | `#6B6358` | Secondary text | 5.17:1 (AA; 4.80:1 on surface) |
| `ink-subtle` | `#9A9085` | Tertiary | 2.74:1 — **see PLAN-V2 concern C1** |
| `accent` | `#B85A35` | Terracotta — the sole chromatic signal | 4.03:1 — **concern C2** |
| `accent-dim` | `#D08A6E` | Hover/secondary | 2.43:1 — **concern C2** |
| `accent-deep` | `#6B1F1F` | Rare emphasis | 9.97:1 (AAA) |
| `accent-ink` | `#FFFFFF` | Text on terracotta | 4.61:1 on accent (AA) |
| `border` | `#E8E2D5` | Default hairline | — |
| `border-strong` | `#C9C0AE` | Emphasized rules | 1.58:1 (decorative only) |
| `focus-ring` | `#2F6CB3` | Ink blue — **the only blue on the site** | 4.68:1 (passes 3:1 non-text) |
| `success` | `#3F6D2F` | | 5.33:1 (AA) |
| `warning` | `#C88A1A` | | 2.58:1 — **concern C3** |
| `error` | `#8E2424` | | 7.56:1 (AAA) |

**Signature-viz sequential ramp** (hex stops replace opacity-steps where
explicit stops are needed): `#F5EFE4 → #E8B98A → #D08A6E → #B85A35 →
#8E3A22 → #6B1F1F`. No blue in any figure.

All measured ratios re-verified live on `/design` in Phase 1c, as in v1.

---

## V3 — Dark mode: removed, not deferred

**Decision (locked by directive):** the site ships light-only.

- Every `prefers-color-scheme: dark` block deleted from `global.css`.
- Single `<meta name="theme-color" content="#F5EFE4">` in Base.astro (dark
  variant removed). `color-scheme` set to `light` so form controls and
  scrollbars don't auto-darken.
- The site renders identically on a dark-mode Mac and a light-mode PC.

**v2-feature note (as directed):** dark mode is a possible future feature
that requires its own design pass — a parchment-and-terracotta system has no
mechanical inversion; it is not a CSS toggle away and should not be
half-shipped.

The Phase 2 opacity-ramp-on-accent technique survives where used: opacity
steps on a single accent token are well-defined in a single-mode site.

---

## V4 — Layout register

**Decisions (locked by directive):**

- **Asymmetric editorial grid**: section heads may sit at column 2/12;
  pull-out captions may hang in the margin where space allows.
- **Section dividers**: 0.5px hairline in `border-strong` + a small
  "Sec. 01 / Name" label — Geist 500, 0.18em tracking.
- **Eyebrows**: Geist 500, 11–12px, 0.18em tracking, accent color (see
  concern C2 for the contrast consequence).
- **No `text-transform: uppercase` anywhere.** Tracking carries the register
  instead. (Inventory of current uppercase uses in PLAN-V2 § Phase 1c/4e.)
- **"How 3MIP works"** loses the 01/02/03 floating-numeral grid. Replaced by
  four short text blocks separated by hairline rules, step numbers set
  inline in Fraunces. It must not read as a SaaS feature grid.
- **Dashes**: en-dash for ranges, em-dash for parentheticals.

---

## V5 — Signature visualization: atlas plate, not uniform grid

**Decision (locked by directive):** each panel uses the visual grammar of
its own model architecture. What stands from Phase 2: shared viewBox, the
Bangladesh outline module (`src/lib/bangladesh-outline.ts`), deterministic
generators, the accessibility structure (per-panel `role="img"` +
`<title>`/`<desc>`, visible long-form alternative).

| Panel | Grammar |
|---|---|
| 01 Agent-based | 18–22 individual dots, size ∝ household weight, density trending coastal-southwest toward the Dhaka corridor; three tones (accent / accent-deep / accent-dim) |
| 02 Gravity | Flow arcs from 4–6 origin centroids to 3 destinations, stroke ∝ flow; origins small filled accent-deep, destinations larger outlined ink; arcs accent at varied opacity |
| 03 Radiation | 5–6 nested catchment rings from one focal point, decay in spacing and stroke; outermost `#E8B98A` → innermost `#6B1F1F`; solid accent-deep center |
| 04 Integrated assessment | 5 regional polygons, one flat ramp value each; 0.4pt ink-30% seams; no interior detail — the model is aggregated and the visual says so |
| 05 Machine learning | Smooth continuous surface as 4–6 soft contour bands from the ramp; no hard edges |
| 06 Cellular | The one panel keeping a discrete grid (~10×8), ramp-colored states, clipped to outline; must read as discrete against 05 |

**Cartographic treatment (all panels):** 0.6pt ink outline, 0.3pt internal
district hairlines at 25% ink, small N compass lower-right in ink-muted,
"Bay of Bengal" italic ink-subtle on bottom-row panels only.

**Figure furniture:** "Fig. 01" eyebrow + "Six architectures, one question"
in Fraunces above; hairline-bordered accent "Illustrative" tag top-right;
shared ramp legend + ≈100 km scale bar + right-aligned SSP2-4.5 below;
italic attribution caption (Bell 2019; Simini et al. 2012; Stouffer 1940;
Rigaud et al. 2018; ISIMIP3 protocol; Schiavina et al. 2019).

---

## V6 — Wordmark + colophon

- **Wordmark**: "3MIP" in Fraunces — `opsz 72, SOFT 100, WONK 1`, weight
  500 — with a hairline underrule at half the wordmark width. Used in
  header, footer, 404, favicon ("3M" raster variant), OG image.
- **Footer colophon**, Fraunces italic 12px ink-muted, hairline above:
  "This website set in Fraunces and Geist. Built with Astro and deployed on
  Vercel. Content licensed under CC BY 4.0; code under MIT. Last updated
  [git date]."

---

## V7 — Corrections riding along (land in Phase 4e)

1. **Webinars titled by month, no speaker names displayed**: "February
   Webinar Presentation", "March Webinar Presentation", "November Webinar
   Presentation" `[VERIFY month stays]` for Bell's entry. `speakers` becomes
   optional in the webinar schema; the Simona-surname `[VERIFY]` is dropped
   (moot under month naming). Speaker data already in frontmatter is kept as
   metadata but not rendered.
2. **SRDI row 11** gets the exact archived PDF URL:
   `https://srdi.portal.gov.bd/sites/default/files/files/srdi.portal.gov.bd/publications/bc598e7a_df21_49ee_882e_0302c974015f/Soil%20salinity%20report-Nov%202010.pdf`
   — resolves that `[VERIFY]`.
3. **Mallick et al. 2023** title confirmed: "How do migration decisions and
   drivers differ against extreme environmental events?" *Environmental
   Hazards* — resolves that `[VERIFY]`.

FACTS.md is updated alongside each.

---

## Open decisions awaiting Bell (carried forward from v1, unchanged)

The B1–B13 table lives in [archive/v1/DECISIONS.md](archive/v1/DECISIONS.md)
and remains the active list. The redesign adds no new Bell-level items —
B11 (logo vs wordmark) now resolves against the *new* Fraunces wordmark.
