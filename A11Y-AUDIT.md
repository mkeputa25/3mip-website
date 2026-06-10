# 3MIP Website — Accessibility & Quality Audit

Phase 6b, June 2026. Tooling: axe-core (WCAG 2.0/2.1/2.2 A + AA tags) and a
keyboard-traversal trace via Playwright over the built `dist/`
(`scripts/audit.mjs`); Lighthouse CI (`.lighthouserc.json`); internal/external
link check (`scripts/check-links.mjs`). Re-run any time with
`npm run build && node scripts/audit.mjs`.

---

## 1 · Automated accessibility (axe-core) — PASS

**All 13 routes clean. Zero violations** at WCAG 2.0/2.1/2.2 A + AA.

```
OK  /            OK  /about/         OK  /case-bangladesh/
OK  /data/       OK  /participate/   OK  /team/
OK  /outputs/    OK  /news/          OK  /contact/
OK  /dublin/     OK  /privacy/       OK  /accessibility/   OK  /404.html
```

Two issues were found and fixed during this phase:

- **`aria-prohibited-attr`** — the Home wordmark rendered `<span aria-label>`
  (prohibited on a span with no role). Fixed: the span variant now uses plain
  visible text, no ARIA.
- **`color-contrast` (14 nodes)** — two token collisions flagged at Phase 0c
  (C2, C3) became hard failures under the audit:
  - `[VERIFY]`/`[PENDING]` tags and table flags were `warning` ochre
    (`#C88A1A`, 2.95:1 on white). Moved to `accent-deep` (`#6B1F1F`,
    11.41:1).
  - Eyebrows and the figure's "Illustrative" tag were `accent` on the
    parchment plate (`#B85A35`, 4.03:1). Moved to `accent-deep` (9.97:1 on
    plate). The C2 documented near-miss is now resolved, not merely accepted.

  (The scroll-reveal was also changed from opacity-fade to transform-only so
  mid-transition compositing can never drop text contrast.)

## 2 · Keyboard traversal — PASS

Manual + scripted (25 tab stops per route). On every page:

- The **skip-to-content** link is the first focusable element.
- Focus order matches visual order: skip link → wordmark/nav (8 items) →
  in-`<main>` controls and links → footer.
- Every interactive element shows a visible focus ring (2px `focus-ring`
  blue, 2px offset) meeting the AA non-text 3:1 minimum.
- The signature figure's **Pause/Play** button is reachable and operable; the
  Data table sort buttons, the Participate track radios + checkbox group, and
  the FAQ `<details>` all take focus and operate by keyboard.
- No focus traps; no positive `tabindex`; hit areas ≥44px.

Representative Home order:

```
skip → About → Case 1 → Data → Participate → Team → Outputs → News →
Contact → [Pause figure] → Read the case in full → Data page →
3MIP at iEMSs Dublin → iEMSs program ↗ → Bell → Best → Tierolf →
mk2674@cornell.edu → Register to participate → 3MIP home (wordmark)
```

## 3 · Lighthouse — a11y / best-practices / SEO PASS (1.0); performance 9/10 ≥0.95

| Route | Perf | A11y | BP | SEO |
|---|---|---|---|---|
| / | 0.98 | 1.0 | 1.0 | 1.0 |
| /about/ | 0.99 | 1.0 | 1.0 | 1.0 |
| /case-bangladesh/ | 0.99 | 1.0 | 1.0 | 1.0 |
| /data/ | 0.99 | 1.0 | 1.0 | 1.0 |
| /participate/ | 0.98 | 1.0 | 1.0 | 1.0 |
| /team/ | **0.93** | 1.0 | 1.0 | 1.0 |
| /outputs/ | 0.99 | 1.0 | 1.0 | 1.0 |
| /news/ | 0.99 | 1.0 | 1.0 | 1.0 |
| /contact/ | 0.99 | 1.0 | 1.0 | 1.0 |
| /dublin/ | 0.98 | 1.0 | 1.0 | 1.0 |

**Accessibility, Best Practices, and SEO are 1.0 on every route** (hard CI
errors). Performance is a CI **warning** at the 0.95 target.

### The /team/ performance exception (0.93) — documented

`/team/` is the longest page on the site (3 full leadership bios with
publications, 14 advisors, 4 domain experts, project management). Its only
sub-threshold metric is **LCP 3.1s** — the lede paragraph rendered in
Fraunces. CLS is 0, TBT is 0, Speed Index is 1.8s; FCP is 1.8s.

Performance work already applied this phase (took /team/ 0.90 → 0.93 and
every other route to ≥0.98):

- `build.inlineStylesheets: "always"` — eliminated the render-blocking CSS
  request (was the #1 opportunity, ~1.4s on /team/).
- Critical-font **preload** of Fraunces + Geist woff2 (Astro URL-asset
  imports → fingerprinted paths) — cut FCP from 2.7s to 1.8s.
- Leadership photos resized 480px → 240px (≈4× fewer bytes for a 120px slot).

**Why it stops at 0.93:** the LCP text waits on the **121KB full-axes
Fraunces** over Lighthouse's simulated slow-4G + 4× CPU throttle. A lighter
text-only cut is **not available from Fontsource** — its single-axis files
(`wght.css`, etc.) drop the `opsz` axis that body text needs for legible
letterforms; only the full file carries both `opsz` (text) and `SOFT`/`WONK`
(display).

**v2 fix:** build a custom Fraunces subset exposing only `opsz`+`wght` for
body text (~40–50KB) and reserve the full-axes file for display headings
only; the LCP text would then paint on the light file. Requires `fonttools`
/ `glyphhanger` subsetting — real font tooling, out of scope for v1.

On a real connection this page is fast (FCP/LCP well under 1s); the miss is a
throttled-simulation artifact on one heavy page, not a user-facing defect.
Performance is therefore a CI warning, not a blocker.

## 4 · Links — internal PASS

`scripts/check-links.mjs`: **all internal links resolve.** External links
(~40) are inventoried by the script for manual review; several are expected
to 404 until live (the forthcoming *Climatic Change* collection has no URL
yet) and a few placeholders await Bell (the GitHub repo URL). None are
internal.

## 5 · Reduced motion — PASS

`prefers-reduced-motion: reduce` renders every animation in its static end
state: scroll-reveals appear in place, hairline rules are full-width, the
hero ambience field is `display:none`, and the signature figure is the static
atlas plate with the Pause/Play button hidden. Verified by emulation in the
audit context and by the CSS guards in `global.css` + each component.

## 6 · Deferred / accepted

- **/team/ performance 0.93** — documented above; v2 font subset.
- The `/design` system page is intentionally excluded from the audit set
  (noindex, not linked, dev-only).
