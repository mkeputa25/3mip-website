# 3MIP Website — Open Questions

**Phase 6 compilation (June 2026), updated after the blanket approval.**
Bell sign-off (relayed by Mario, June 2026) resolved the § 1 table below:
every decision now ships its stated default, the visible
`[PENDING BELL APPROVAL]` tags are removed from the site, and leadership +
coordinator photos are live (B3). Ishita Kashyap is removed from the
project and the site. Three § 1 items remain genuinely open because their
*content* doesn't exist yet: **B1 final domain** (configs keep the
`3mip.org` placeholder until DNS day), **B4 operating-phase funders** (the
About page truthfully says funding "has not been publicly announced"),
and **B18 GitHub repository URL** (footer placeholder until the repo is
public). § 2 items are factual and still need answers.

---

## 1 · Bell decisions (blockers for launch, not for build)

| # | Decision | Where it shows | Default shipping meanwhile |
|---|---|---|---|
| B1 | Final domain | `astro.config.mjs`, `public/robots.txt`, citations | `3mip.org` placeholder |
| B2 | Institutional logos on Home | [index.astro](src/pages/index.astro) lineage strip | None shown |
| B3 | Leadership headshots | [team.astro](src/pages/team.astro) | No photos rendered |
| B4 | Operating-phase funder list | [about.astro](src/pages/about.astro) § Funding | "operating-phase funding pending" + NSF RCN status `[VERIFY current status]` |
| B5 | Tagline wording | Footer, meta | "A community benchmark for climate-migration models" |
| B6 | Hero headline wording | [index.astro](src/pages/index.astro) | "Different models. Same question. One coordinated answer." |
| B7 | Protocol document — public or registration-gated | [case-bangladesh.astro](src/pages/case-bangladesh.astro) § Protocol | Registration-gated |
| B8 | Press posture | [contact.astro](src/pages/contact.astro) § Press | Routed through Cornell University Relations |
| B9 | Accent institutional alignment | design tokens | Terracotta `#B85A35` (v2.1 system) |
| B10 | Mario's successor | [contact.astro](src/pages/contact.astro), [about.astro](src/pages/about.astro) § PM | Placeholder text |
| B11 | Logo: existing `final-3mip-logo.png` vs Fraunces wordmark vs refresh | site-wide | Wordmark ships; do not mix |
| B12 | Code-sharing FAQ public wording | [participate.astro](src/pages/participate.astro) FAQ #5 | Official statement verbatim |
| B13 | Domain-expert photos (exist in Weebly archive) | [team.astro](src/pages/team.astro) | No photos, pending consent |
| B14 | Curated-dataset citation format + DOI minting | [data.astro](src/pages/data.astro) § citation callout | Proposed Bell/Best/Tierolf format, no DOI |
| B15 | Signature-figure archetype choice, pattern story, motion grammars, and lineage attributions (Bell 2019; Simini 2012; Stouffer 1940; Rigaud 2018; ISIMIP3; Schiavina 2019) | [SignatureViz.astro](src/components/SignatureViz.astro) attribution | Ships as built, labeled Illustrative |
| B16 | Final privacy notice wording | [privacy.astro](src/pages/privacy.astro) | Honest v1 placeholder |
| B17 | Final accessibility statement wording | [accessibility.astro](src/pages/accessibility.astro) | v1 placeholder; refine after 6b audit |
| B18 | GitHub repository URL | [Footer.astro](src/components/Footer.astro) | `github.com/3mip-project/3mip-website` placeholder |

## 2 · Mario-resolvable `[VERIFY]` (visitor-visible)

| Item | File | Note |
|---|---|---|
| iEMSs session-acceptance announcement date | [2026-01-iemss-acceptance.md](src/content/news/2026-01-iemss-acceptance.md) | Provisionally 2026-01-01; update `date:` + drop tag together |
| Bell webinar month | [2025-11-bell.md](src/content/webinars/2025-11-bell.md) | Provisional November 2025 per first-webinar timeline |
| Output submission deadline | [participate.astro](src/pages/participate.astro) ×2 (involves #4, FAQ #3) | Confirm with co-leads |
| SSP scenario specification | [index.astro](src/pages/index.astro) key facts, [case-bangladesh.astro](src/pages/case-bangladesh.astro) § shared question | Against protocol document |
| Exact coastal district list | [case-bangladesh.astro](src/pages/case-bangladesh.astro) § geographic scope | Against protocol document |
| *Climatic Change* call timing | [participate.astro](src/pages/participate.astro) FAQ, [outputs.astro](src/pages/outputs.astro), [case-bangladesh.astro](src/pages/case-bangladesh.astro) timeline | "late 2026" anticipated; Springer call not posted |
| Bell's preferred public email/page | [contact.astro](src/pages/contact.astro) § PI | FACTS has Cornell address `[VERIFY]` |
| Full mailing address | [contact.astro](src/pages/contact.astro) § mailing address | Department of Global Development, Cornell |
| Advisor titles/roles: Bearpark, Leis, Oh, Sall, Thomas | [src/content/team/](src/content/team/) respective files | Render as visible tags on /team/ |
| Ishita Kashyap title + email | [kashyap.md](src/content/team/kashyap.md), [about.astro](src/pages/about.astro) § PM | |
| Florio et al. (2024) full citation | [data.astro](src/pages/data.astro) row 2 | JRC building footprints |
| Ton et al. (2024) full author list/title | [data.astro](src/pages/data.astro) row 4 | DOI confirmed |
| Session day/room | [dublin.astro](src/pages/dublin.astro), Home, Outputs | `[PENDING — program publishes June 15, 2026]` |

## 3 · FACTS.md-only `[VERIFY]` (not rendered on the site)

Working-age population share; Bell Cornell email; Reimann et al. reference
note; NSF RCN status detail. See [docs/FACTS.md](docs/FACTS.md).

## 4 · Resolved this build (for the record)

Tellman citation (flood-exposure paper) · BBS survey title · iEMSs dates
(July 12–16, UCD) · webinar years (2026, not 2025) · Tierolf VU URL · SRDI
exact PDF URL · Mallick et al. title · Simona surname (moot under month
titling) · Burzyński spelling (FACTS corrected to Polish diacritics,
Phase 6).
