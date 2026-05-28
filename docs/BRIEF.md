# 3MIP Website — Project Brief

## What 3MIP is

**3MIP** stands for the **Mobility and Migration Modeling Intercomparison Project**. It is a community of climate-migration modelers who agree to apply their diverse modeling approaches to a single curated benchmark case and synthesize the results. The first benchmark case is coastal Bangladesh under climate stress.

The project is modeled on **AgMIP** (Agricultural Model Intercomparison and Improvement Project) and **ISIMIP** (Inter-Sectoral Impact Model Intercomparison Project) — two long-running, multi-institutional efforts that have produced hundreds of papers and contributed to the IPCC. 3MIP is doing for migration modeling what those projects did for crop modeling and cross-sectoral impacts.

The project launched October 2025. It originated at a workshop held at Princeton's Center for Policy Research on Energy and the Environment (C-PREE) on September 25–27, 2024.

Full team, funding, and lineage details are in `FACTS.md`. Critique of the current state is in `ANALYSIS.md`.

## Why this website matters

The current site is `3mip.weebly.com`. It is a free Weebly template with no professional domain, a typo in the timeline, no outputs section, raw Google Drive embeds for webinar recordings, no place for working papers or the planned *Climatic Change* topical collection, and a generally amateur visual presentation.

**The substance of the project massively exceeds the packaging.** Andrew Bell (Cornell, Schleifer Professor of Sustainability), Kelsea Best (Ohio State, Knowlton School), and Lars Tierolf (VU Amsterdam, COASTMOVE ERC project) lead it. Michael Oppenheimer (Princeton), Alex de Sherbinin (Columbia/CIESIN, World Bank *Groundswell* co-author), Jeroen Aerts (VU/COASTMOVE PI, €2.5M ERC Advanced Grant), and twelve other senior advisors sit on the advisory committee. This is a serious infrastructure project being presented like a graduate student side hustle.

The website's job is to close that gap before the project's first major public moment: **iEMSs 2026 in Dublin, July 2026**, where 3MIP will host **Session C7** ("Mobility and Migration Modeling Intercomparison Project (3MIP) – An open, first synthesis") and aligned **Workshop WSC7** ("Panel Discussion – 3MIP"). The conference is the field's main methodological venue. Walking into it with a Weebly site is not an option.

## Priorities, ranked

The website serves four purposes, in this order of priority:

1. **Credibility signal.** A program officer, funder, or senior modeler landing on the site should within 10 seconds recognize this as a serious academic infrastructure project. The visual register must match agmip.org, isimip.org, cpree.princeton.edu, and ciesin.columbia.edu — not exceed them, but not fall below them.

2. **Modeler recruitment.** The site exists to recruit working climate-migration modelers (agent-based models, gravity models, radiation models, integrated assessment models, machine learning models) to join the benchmark exercise. The value proposition, expectations, and registration must be unambiguous and frictionless.

3. **Outputs hub.** Webinars, working papers, the *Climatic Change* topical collection, and eventual benchmark results need a permanent home. The current site has no such home. Building one is necessary infrastructure regardless of whether content exists yet — empty states are honest if labeled honestly.

4. **Funder and policymaker discoverability.** SEO and a clean "What is 3MIP" page that a program officer can read in 90 seconds. The site should rank for "climate migration modeling intercomparison," "3MIP," and the names of the principals plus "3MIP" as a disambiguator.

Anything beyond these four is out of scope for v1.

## Audiences, ranked

Optimize for audiences in this order. Do not soften copy for audiences below #4.

1. **Active climate-migration modelers** — researchers building ABM, gravity, radiation, IAM, or ML approaches to migration under environmental stress. Read like academics, recognize methodological terminology, expect citations.

2. **Funders** — NSF program officers, Belmont Forum staff, foundation program officers (Sloan, Bezos Earth Fund, RWJF if they fund this). Want a one-screen answer to "what is this project, who runs it, what does it deliver."

3. **Policymakers** — World Bank Climate Change Group, UN Global Centre for Climate Mobility, IPCC WG2 authors, USAID, GIZ. Want trustworthy, comparable, citable outputs. They will not register; they will read.

4. **Adjacent academics** — demographers, climate impacts researchers, hazards scholars, sociologists. Sympathetic audience. Use specialist language but define the modeling terms.

5. **Press and general public** — out of scope. Do not soften copy. Do not add jargon glossaries. Do not write FAQ entries for general audiences.

## Default tech stack

**Astro + Tailwind + MDX + Vercel.** Locked. Reasoning:

- **Astro**: content-heavy, mostly static, fast page loads, MDX support means non-developers can add news and papers as Markdown after Mario leaves.
- **Tailwind**: utility-first CSS keeps styling co-located with markup, eliminates the design-system-vs-implementation drift that plagues academic sites.
- **MDX**: lets us embed components (the signature visualization, callouts, citation blocks) inside Markdown content. Important for working papers and case-study pages later.
- **Vercel**: free tier covers a static site of this size indefinitely. Preview deployments per PR. Zero ops burden for the maintainer.

Do not introduce React unless a specific page genuinely requires it. The homepage signature visualization is pure SVG, no JavaScript. Forms post to a static endpoint (Formspree free tier, default). No client-side framework for navigation.

## Information architecture

The working sitemap (full rationale in `IA.md`):

- **Home** — what 3MIP is, current case, next milestone, registration CTA, signature visual
- **About** — origin, AgMIP/ISIMIP lineage, governance, what 3MIP is not
- **Case 1: Bangladesh** — problem framing, data, expected outputs
- **Data** — curated input datasets with DOIs (port the dataset table from current site; it's the one page that works)
- **Participate** — registration, expectations, FAQ
- **Team** — leadership, advisory committee, project management
- **Outputs** — webinars, working papers, *Climatic Change* collection, conference sessions
- **News** — short-form updates, reverse chronological
- **Contact** — Mario primary, Bell PI escalation

## Design principles

Detailed token system and component rules are in `DESIGN-PRINCIPLES.md`. The high-level commitments:

- **Typography-led**. Whitespace-heavy. Typography carries the design; the design does not lean on imagery, gradients, or color.
- **One serif, one sans.** Both modern. Inter, IBM Plex, Source Serif 4, Untitled Serif, GT America (paid — flag), Söhne (paid — flag) territory. Not Open Sans defaults.
- **Two or three colors maximum.** Neutral base plus one accent. No gradient hero. No rainbow. Climate work overuses blue and green — differentiate.
- **Diagrams over photos.** If a photo is needed, it is a real map or chart, not a stock image of Bangladesh.
- **Data viz that means something.** The homepage signature visualization — a small multiples chart showing how different model archetypes project the same Bangladesh migration question differently — is the entire pitch of 3MIP in one image. It belongs on the home page above the fold.

## Anti-patterns — do not produce these

Visual:
- Hero sections with "3MIP" set in 120pt and nothing else
- Gradient hero backgrounds
- Stock photos of refugees, rising water, generic "global south" imagery, world maps with floating connection lines
- Round headshot team grids with one-line bios
- Carousel sliders, parallax scrolling, animated counters
- Floating chatbots, exit-intent popups, newsletter signup popups
- Bootstrap 4 academic lab site aesthetics from 2015
- Logo walls of partner institutions without sign-off on which logos to display

Copy:
- "Climate migration is one of the defining challenges of our time" — banned opening
- "Leveraging," "pioneering," "cutting-edge," "transformative," "robust," "innovative," "harness," "unlock," "empower," "revolutionize" — full ban list in `COPY-GUIDE.md`
- Invented statistics, fabricated partnerships, "studies show" without citation
- Audience-of-everyone copy that flattens the academic register

Behavioral:
- Soft-shoeing the field's uncertainty — migration modeling disagrees with itself, and that disagreement is 3MIP's reason for existing, not a thing to hide
- Listing participating modelers without their explicit consent
- Naming funders not yet confirmed in writing

## Copy register

Academic but readable. Active voice. Specifics over abstractions. Claims grounded in citations the reader can click through to.

Examples and the full ban list with replacements are in `COPY-GUIDE.md`. Verified numbers and dates are in `FACTS.md`. When the field disagrees with itself, the copy says so plainly.

## What Claude Code will produce

End-to-end:

- A working Astro repository, ready for `npm install && npm run dev`
- All nine pages built to spec
- A shared design system rendered live at `/_design`
- The signature small-multiples visualization as a reusable component
- Content collections (news, papers, webinars, team) with Zod-typed frontmatter
- SEO meta, Open Graph tags, JSON-LD on every page
- A `MAINTAINERS.md` for the non-developer inheriting the site
- A `LAUNCH-CHECKLIST.md` for pre-flight before DNS cutover
- Accessibility audit (`A11Y-AUDIT.md`) with WCAG 2.2 AA verified
- Lighthouse CI in `.github/workflows/`
- Surfaced open questions (`OPEN-QUESTIONS.md`) for Bell and Mario to resolve before launch

## What Claude Code will push back on

Mario expects pushback. The agent should refuse or surface, not silently comply, when:

- Scope creeps beyond v1 — interactive model dashboards, multi-language versions, a public participant directory before participants consent, social features, comments. Flag as v2.
- Decisions belong to Bell, not Mario — final domain, final logo, whether to list specific funders before they're confirmed in writing, photo permissions.
- Mario asks for cosmetic polish on something with a deeper structural problem — e.g., asking for hero copy when the IA still doesn't make sense.
- The brief is internally inconsistent — e.g., requiring the homepage to be both spare and to contain six sections. Flag the conflict.

## Constraints

- **Budget**: domain (~$15/yr) + Vercel free tier. No paid SaaS. Fonts must be free or already-licensed open fonts.
- **Timeline**: v1 live before iEMSs Dublin (July 2026). Soft target: end of February 2026 for first reviewable draft.
- **Accessibility**: WCAG 2.2 AA minimum. Real, not lip service. Verified via automated tools and manual keyboard traversal.
- **Privacy**: GDPR notice required. No analytics in v1, or Plausible self-hosted only. No third-party trackers.
- **Maintenance**: Mario leaves Cornell for Albania in June 2026. A non-developer must be able to add news items, papers, webinars, and team members via Markdown after that. The handoff document is a hard deliverable, not optional.
- **Domain**: TBD, awaiting Bell decision. Use `3mip.org` as a placeholder in configs.

## Mario's role

Project coordinator, Cornell MPA (May 2026). Authority to draft, prototype, propose, and ship working code. Final sign-off on copy, design, domain, and launch sits with Bell as lead PI. Departing for Albania in June 2026.

Email: mk2674@cornell.edu

Decisions Mario can make alone: tactical implementation, framework choice within the locked stack, copy first drafts, visual direction within the brief, what to label `[PENDING BELL APPROVAL]`.

Decisions Mario cannot make alone: institutional logos to display, formal funder list, official mission statement wording, press posture, photos of leadership, final domain.
