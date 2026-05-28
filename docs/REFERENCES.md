# 3MIP Website — Reference Sites

This document lists every external site Claude Code should study during Phase 0 research, what to look at on each, and what to take from it. The goal is *efficient* research, not exhaustive review. Skim each site looking for the specific pattern listed; do not read every word.

## How to use this list

For each site:

1. Open the URL.
2. Note the specific patterns called out.
3. Spend ≤5 minutes per site unless something is genuinely novel.
4. Document findings in `3mip-design-research.md` (Phase 0 output) in the format: type system, color logic, grid, spacing, one pattern to adopt, one to reject.

Do not aspire to make 3MIP look like any single one of these. Take principles, not screenshots.

## Tier 1 — direct organizational analogues (required)

These are the sites 3MIP will be compared against. Match their floor; aim for their ceiling.

### agmip.org — Agricultural Model Intercomparison Project

What to look at:
- Top nav structure: how a multi-decade intercomparison project organizes content
- Outputs page: how they present papers, datasets, and synthesis products
- Team page: how they handle a large advisory and participant network
- The graphic identity (or its absence)

What to adopt: the matter-of-fact tone, the inclusion of detailed protocol documents, the explicit links to data and publications.

What to reject: visual dating — agmip.org has not been redesigned in some years. The information architecture is what to learn from, not the surface.

### isimip.org — Inter-Sectoral Impact Model Intercomparison

What to look at:
- The home page above-the-fold: how they explain what intercomparison is to a first-time visitor
- The "Protocol" pages: how they document the rules of participation
- The publications archive: how they categorize and timestamp outputs
- The funder acknowledgment in the footer

What to adopt: the structured publications archive, the protocol-as-document approach, the modest visual register.

What to reject: dense navigation that requires expertise to parse. 3MIP's nav should be shallower.

## Tier 1 — institutional siblings (required)

These are the credibility-adjacent academic sites whose register 3MIP must match.

### cpree.princeton.edu — Princeton Center for Policy Research on Energy and the Environment

This is where 3MIP was founded. The site sets a credibility baseline.

What to look at:
- Typography: serious, readable, no decorative effects
- Color: minimal palette, accent used sparingly
- The "News" feed: clean, dated, no fluff
- The "People" page: how a research center organizes faculty and affiliated researchers

What to adopt: the typographic restraint, the news-as-record format, the people page structure.

What to reject: any element that would feel out of place at a research center.

### ciesin.columbia.edu — Center for International Earth Science Information Network

Alex de Sherbinin's home institution. Direct relevance to data-heavy research presentation.

What to look at:
- The Data page (theirs, for comparison with 3MIP's): how dataset citations are formatted
- The publications system: how multi-decade output is organized
- The events listing: how they present past and future events together
- The footer: legal, accessibility, license notices

What to adopt: dataset card patterns, citation formatting.

What to reject: the busyness of some landing pages. 3MIP should be cleaner.

## Tier 1 — anti-example (required)

### coastmove.wordpress.com — what NOT to do

Tierolf's home project uses a default WordPress theme. Diagnose why this fails for a serious research project at the credibility tier of an ERC Advanced Grant.

What to look at:
- The mismatch between the substance (€2.5M EU-funded research) and the packaging
- The visual register signals (theme tropes, default fonts, default layouts)
- Where credibility leaks

What to take from it: a calibration of what 3MIP must avoid. The current Weebly site has the same problem.

## Tier 2 — best-in-class research and adjacent (pick 5–8)

Pick the most useful 5–8 from this list. Prefer sites that share 3MIP's register: serious, typography-led, whitespace-heavy, zero marketing gloss.

### Highly recommended

**stripe.press** — typography masterclass. Look at the type scale, the prose width, the figure handling. This is the closest reference for "books and serious essays online."

**anthropic.com** — restraint and confidence. Look at color discipline (one accent, lots of neutral), the way they present research papers, the absence of marketing tropes despite being a commercial product.

**climateimpactlab.org** — direct domain relevance. Look at how they present a research consortium with multiple PIs, multiple papers, and policy interface.

**ipcc.ch** — institutional credibility. The site is heavy but the credibility register is informative.

**brookings.edu/research** — long-running research presentation. Look at the publication card pattern.

**mit-serc.pubpub.org** — academic publishing online. Look at how serious essays are presented for the web.

### Useful candidates

**deepmind.google** — research lab presentation. Look at the project pages and publication archive. Reject any element that feels marketing-driven.

**climate.copernicus.eu** — EU institutional research. Reference for data-heavy, citation-rich research presentation.

**ouranos.ca** — Canadian climate consortium. Reference for bilingual content presentation (not for 3MIP v1, but for v2 if Albanian or French are added).

**futureearth.org** — global research network. Reference for advisory committee and partner network presentation.

**worksinprogress.co** — long-form essay online. Reference for prose width, citation handling, figure embedding.

**ias.edu** — Institute for Advanced Study. Reference for "centuries-old institution with restrained design."

**rand.org** — long-running policy research. Reference for publication archive at scale.

**niskanencenter.org** — policy think tank. Reference for content-heavy site with clear IA.

### Optional, only if time permits

- are.berkeley.edu (Berkeley ARE department)
- resourceswatch.org (WRI's data platform)
- ny.pubpub.org

### Explicit anti-references — do not study

Do not study or take from:

- **Any "climate tech" company site** (Climeworks, Stripe Climate, Patch). These are commercial pitches, not research presentations.
- **Any UN agency landing page**. They optimize for too many audiences at once and the register is wrong for 3MIP.
- **Most university lab sites built on WordPress academic themes**. The genre 3MIP must escape.
- **Any site with a parallax hero, a carousel, an animated counter, or a newsletter popup**. These are all anti-patterns from the brief.

## Tier 3 — data visualization references (required, study 3–4)

For the homepage signature visualization (small multiples showing how different models project the same Bangladesh question differently).

### IPCC AR6 WG1 Summary for Policymakers figures

URL: https://www.ipcc.ch/report/ar6/wg1/ (download the SPM PDF)

What to look at: panel layout, color discipline in ensemble figures, caption density, how uncertainty is communicated visually.

### AgMIP ensemble figures from published papers

Find via Google Scholar: search "AgMIP ensemble" or "AgMIP multi-model."

What to look at: how multiple model outputs are visually overlaid or paneled, how the consensus and divergence are both legible.

### CMIP6 small-multiples examples

Source: the IPCC AR6 figures use these heavily.

What to look at: panel grid arrangement, scale consistency across panels, legend placement, what makes a small-multiples figure legible vs. cluttered.

### One more from your own search

Pick based on what's missing from the above three. Strong candidates: any visualization in *Nature* or *Nature Climate Change* showing multi-model spread, the Climate Impact Lab's panel figures, the Climate Action Tracker's country comparisons.

## What to actually take from the references

After completing this research, your `3mip-design-research.md` deliverable contains:

1. A short summary (3–5 lines) of what the reference set has in common — the patterns that consistently work for serious research presentation.
2. The specific decisions you're committing to for 3MIP based on the references (typeface direction, color logic direction, grid choice, spacing rhythm).
3. The anti-patterns you observed and are explicitly avoiding.
4. The data visualization principles that will guide the signature visual.

Do not copy any single reference. Take the underlying principles and apply them to 3MIP's specifics.

## Time budget for Phase 0 research

- Tier 1 sites (5 sites including coastmove): 25 minutes
- Tier 2 sites (5–8 sites): 30 minutes
- Tier 3 data viz references (3–4): 20 minutes
- Synthesis into `3mip-design-research.md`: 30 minutes

Total: ~2 hours of research before any code is written. Anything beyond this is procrastination disguised as diligence.
