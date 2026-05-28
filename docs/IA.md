# 3MIP Website — Information Architecture

This document specifies the sitemap, navigation, and page sequencing for the 3MIP website. It exists separately from the content inventory so the structural decisions can be reviewed independent of the page-level content.

## Sitemap

```
/                                       Home
├── /about/                              About — origin, lineage, governance
├── /case-bangladesh/                    Case 1 — Bangladesh
├── /data/                               Data — curated input datasets
├── /participate/                        Participate — registration, FAQ
├── /team/                               Team — leadership, advisors, PMs
├── /outputs/                            Outputs — webinars, papers, sessions
├── /news/                               News — reverse-chronological updates
├── /contact/                            Contact
├── /404.html                            Custom 404
├── /_design                             Design system showcase (dev only, excluded from sitemap)
└── /sitemap.xml, /robots.txt            Standard
```

No nested routes in v1. Every page is one level deep. Reasoning: a small site with clear top-level categories is more navigable than a deeper hierarchy that requires breadcrumbs. Nine pages is the right size for top-level nav without scrolling on most viewports.

## Primary navigation

Order in nav, left to right:

```
[Wordmark]     About    Case 1    Data    Participate    Team    Outputs    News    Contact
```

Rationale for order:
- **About** comes first because new visitors arriving from a citation or referral need orientation.
- **Case 1** is second because the Bangladesh case is the project's substantive core right now.
- **Data** is third because for modelers (audience #1) this is the most important page — they need to know what they'll be working with.
- **Participate** is fourth because this is the primary recruitment CTA destination.
- **Team** is fifth because credibility checking is a common journey but not the primary one.
- **Outputs** is sixth because for v1 launch most of this is empty states.
- **News** is seventh because it's secondary content; not for new-visitor orientation.
- **Contact** is last because it's a fallback, not a destination.

No CTA button in the nav. The home page has its own registration CTA in section 6; visitors who want it can find it. A persistent CTA button in the nav adds visual noise and signals "we want something from you," which is the opposite of the credibility signal we need.

## Mobile navigation

At `<768px`, the primary nav collapses into a hamburger menu. The wordmark stays visible. The hamburger opens a full-viewport panel with the same nav order. No accordion, no submenus, no animation beyond a 150ms fade. Tap outside to close, or tap the X.

## URL conventions

- All lowercase
- Hyphens for word separation (`case-bangladesh`, not `case_bangladesh` or `caseBangladesh`)
- Trailing slash on directory routes (Astro default)
- No file extensions visible
- No query strings in v1
- News and webinar permalinks: `/news/[slug]/` and `/outputs/webinars/[slug]/` where `[slug]` is `YYYY-MM-short-title`

## Page sequencing and intended journeys

The site supports several entry-and-journey patterns. The IA should make each work without forcing visitors through a marketing funnel.

### Journey A: modeler considering registration

Entry: Home, About, or direct to Participate from a referral.
Path: Home → Case 1 → Data → Participate.
Pain points to avoid: data requirements buried under marketing copy; registration form gated behind a manifesto; expectations of participants unclear.

### Journey B: funder doing credibility check

Entry: Home (typically via search for "3MIP" or referral from Bell).
Path: Home → About → Team.
Pain points to avoid: no explanation of how 3MIP is funded; advisory committee not listed; no governance structure visible.

### Journey C: policymaker looking for outputs

Entry: Home or Outputs via search ("3MIP results," "climate migration intercomparison findings").
Path: Home → Outputs → potentially exits if outputs not yet published.
Pain points to avoid: pretending outputs exist when they don't; no clear "when to come back" signal.

### Journey D: adjacent academic discovering the project

Entry: News (via RSS or shared link), Case 1 (via search), or Team (via search for one of the advisors).
Path: variable.
Pain points to avoid: news entries with no context for cold readers; team page that doesn't connect each person to the project clearly.

### Journey E: returning participant checking project status

Entry: News, Outputs.
Path: News → Outputs → Participate if relevant.
Pain points to avoid: News not updated regularly; Outputs not reflecting recent webinars.

## What this IA excludes (and why)

The current Weebly site contains a few pages or sections that the new site deliberately does not have:

- **Modelers & Experts** page (Weebly) — replaced. The four featured profiles on the current site are not 3MIP leadership; they appear to be local expertise nods. Move appropriate names into Team or Advisory committee. Surface webinars on Outputs, not on a person-profile page.
- **No "Mission" or "Vision" pages** — the About page handles this in one paragraph. Separate Mission/Vision pages are an anti-pattern in serious research contexts; they add a marketing tier that doesn't fit the register.
- **No "Partners" or "Sponsors" logo wall** — until Bell signs off on which institutional logos to display. A logo wall without sign-off is a fabrication risk.
- **No blog separate from News** — News handles short-form updates. A blog implies longer-form opinion content that 3MIP is not yet producing.
- **No public "Participating modelers" directory** — without explicit opt-in consent from each registered modeler. This is a v2 feature, gated on consent collection.
- **No search** — the site is small enough that top nav suffices. Pagefind is the v2 upgrade path if content grows.

## What the IA explicitly accommodates for v2 expansion

The structure should not require restructuring when:

- **A second benchmark case is announced.** Case 1 page becomes one of multiple under a `/cases/` route, with `/case-bangladesh/` redirecting in or remaining as-is. The current single-page IA does not foreclose this.
- **Working papers begin publishing.** Outputs page already has a Working Papers section as an empty state.
- **The *Climatic Change* topical collection opens.** Outputs page has a placeholder; link goes live when Springer posts the call.
- **A public participant directory becomes possible with consent.** Team page has a placeholder section; can be populated after registration closes and consent is collected.
- **The project moves to a `.org` or institutional domain.** All internal links are relative. Domain change requires only Vercel config update and DNS.

## Footer information architecture

Persistent footer on every page, in this order:

1. **Wordmark** + one-line description ("Mobility and Migration Modeling Intercomparison Project")
2. **Contact line**: primary email
3. **Quick links**: About, Participate, Outputs, Contact (subset of nav, not duplicate)
4. **Project links**: GitHub repository `[PLACEHOLDER]`, Cite this site, RSS feed (News)
5. **Legal**: Privacy notice, Accessibility statement, License (CC BY 4.0 content, MIT code)
6. **Meta**: Last updated [auto-generated from git], Site version

Total footer height should fit one screen at desktop (no oversized footer with link farms). Mobile footer collapses to a single column.

## SEO and discoverability architecture

Each page has:
- Unique `<title>` (page name — 3MIP)
- Unique `<meta name="description">` (≤155 chars, written for human readers)
- Canonical URL
- Open Graph tags (og:title, og:description, og:type, og:image, og:url)
- Twitter Card tags
- JSON-LD structured data:
  - Home: `Organization`
  - Team page: list of `Person` entities
  - News items: `Article`
  - Data page: `Dataset` entities
  - Case page: `ResearchProject`

Sitemap auto-generated via `@astrojs/sitemap`. Exclude `/_design`. Include all canonical content pages.

Robots.txt allows all crawlers; disallows `/_design` and `/api/` (if any later added).

## Accessibility-led IA decisions

- Skip-to-content link on every page, first focusable element after the header.
- Heading order never skips levels. One `<h1>` per page; the wordmark is not an h1 except on Home.
- Landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`) with implicit roles, no redundant `role` attributes.
- Active page in nav indicated via `aria-current="page"` plus visual styling, not visual styling alone.
- All interactive elements reachable by keyboard in logical order matching visual order.
- Focus rings visible against every background. No outline removal.
