# 3MIP Website — Content Inventory

This document specifies, page by page, exactly what content goes on each page, in what order, with what data, in what visual structure. It is the spec for Phase 4 of the build.

Every page has:
- A purpose statement (one sentence: why this page exists)
- A primary audience (which audience from the brief's ranked list)
- A primary action (the one thing a visitor should be able to do, even if "read and leave")
- An ordered list of sections with content guidance
- SEO meta description
- Open Graph treatment notes
- JSON-LD type

When `[VERIFY]` appears below, the content claim is not yet confirmed in `docs/FACTS.md` and must be tagged inline and surfaced in `OPEN-QUESTIONS.md`. When `[PENDING BELL APPROVAL]` appears, the decision is reserved for Bell and the page should use the closest sensible placeholder.

---

## Home — `src/pages/index.astro`

**Purpose**: Within 30 seconds, a visitor understands what 3MIP is, sees the signature visual that explains *why* it exists, and either registers or knows where to read more.

**Primary audience**: active climate-migration modelers (audience #1).

**Primary action**: register to participate (links to /participate).

**JSON-LD**: `Organization` with name, alternateName, description, founder list, sameAs URLs.

**Meta description** (≤155 chars): "3MIP coordinates climate-migration modelers around shared benchmark cases. First case: coastal Bangladesh. Synthesis at iEMSs Dublin, July 2026."

**Open Graph image**: the signature visual itself, rendered as a 1200×630 PNG (build-time or pre-generated). If pre-generated is too complex for v1, use a typographic OG image with the wordmark and tagline.

### Sections in order

#### Section 1 — Header (shared)

Wordmark + nav. See `IA.md` § Primary navigation.

#### Section 2 — Hero

Single column, left-aligned, max-width 720px, generous top padding (`space-8` desktop / `space-6` mobile).

**Headline** (display type token, max 14 words):

> Different models. Same question. One coordinated answer.

Alternative drafts to choose from in DECISIONS.md:
- "Climate-migration models disagree. 3MIP makes the disagreement legible."
- "A benchmark exercise for climate-migration modeling."
- "Coordinating climate-migration models on shared cases."

Mario to pick one in DECISIONS.md. Bell approves before launch.

**Subhead** (body-lg, max 30 words):

> 3MIP is a community of researchers who apply their climate-migration models to a shared benchmark case. The first case is coastal Bangladesh.

**No CTA button in the hero.** The CTA appears in section 6, after the visitor has seen the signature visual and the case context. Putting a button at the top before the visitor knows what they'd be signing up for is bad UX and bad academic register.

**No hero image, no gradient, no decorative element.** The headline carries it.

#### Section 3 — Signature visualization

Full-width within the content max-width. Includes:

1. The six-panel SVG (built in Phase 2)
2. A `<figcaption>` with the descriptive caption (see "Signature visual spec" below)
3. A visible text alternative below the figure for screen reader users and people who want to read it (one short paragraph describing what the figure shows)

**Section heading**: `<h2>` reading "Why the same question yields different answers" (sentence case).

**One short paragraph between the heading and the figure**:

> Different model architectures — agent-based, gravity, radiation, integrated assessment, and machine learning — encode different assumptions about how people decide to move. Run the same Bangladesh migration question through each and you get different answers. 3MIP makes that divergence visible and synthesizes it.

**Signature visual spec** (built in Phase 2 as `SignatureViz.astro`):

- Six panels arranged 3×2 desktop, 2×3 tablet, 1×6 mobile
- Each panel:
  - Same simplified Bangladesh coastal silhouette (stylized — recognizable but not geo-precise)
  - Panel title: model archetype name (e.g., "Agent-based")
  - Spatial pattern showing synthetic net migration intensity
  - Subtle scale indicator (no axis labels in panels themselves; shared legend)
- Above the grid: question label, "Net internal migration, 2025–2050, SSP2-4.5 (illustrative)"
- Below the grid: shared legend (sequential color ramp from accent-dim to accent), shared scale bar
- Attribution line at the bottom of the figure: "Illustrative. Synthetic data showing how the same question yields different answers across model architectures. 3MIP's purpose is to make this divergence legible."
- Color ramp keyed to the accent token from DECISIONS.md — sequential, not diverging, not rainbow
- Pure inline SVG, no JavaScript, no external libraries
- Accessible: `role="img"`, `aria-labelledby` pointing to a visually hidden description, plus visible long-form text alternative below

#### Section 4 — Current case

Two-column on desktop (60/40), single column on mobile.

Left column (60%):

**Section heading**: `<h2>` reading "Case 1: Coastal Bangladesh" (sentence case).

**One paragraph**:

> Bangladesh has 175.7 million people, much of it living in a low-lying delta where sea-level rise, salinity, and flood dynamics interact with economic and social drivers of migration. Bell et al. (2021) projected continued migration toward Bangladesh's coast through 2100 under all studied scenarios — not away from it. The empirical density and policy stakes make this the right place for a first benchmark.

Link "Read the case in full" → `/case-bangladesh/`.

Right column (40%): key facts list (4 items):

- **Country population**: 175.7 million (UNFPA SWOP 2025)
- **Time horizon**: 2025–2050 baseline, extensions to 2100
- **Climate scenarios**: SSP2-4.5 baseline, SSP1-2.6 and SSP5-8.5 sensitivity `[VERIFY]`
- **Curated dataset**: 6+ open datasets with DOIs (see Data page)

#### Section 5 — Next milestone

Single column, narrower (max-width 720px), centered.

**Section heading**: `<h2>` reading "Next milestone" (sentence case).

**Block content**:

> **iEMSs 2026 — Dublin, July 2026**
>
> Session C7: *Mobility and Migration Modeling Intercomparison Project (3MIP) – An open, first synthesis*
>
> Workshop WSC7: *Panel Discussion – 3MIP*
>
> The first public synthesis of 3MIP results. Open to all conference attendees.

Link "Session details on the iEMSs program" → external link to `https://conference.iemss.org/streams/`.

#### Section 6 — How 3MIP works (4-step explainer)

Four-column on desktop (`lg:grid-cols-4`), two-column on tablet, single column on mobile.

Each step:
- A numeral (1, 2, 3, 4) styled as a large display element — not an icon, not an illustration
- A short heading (`<h3>`)
- One sentence

Steps:

1. **Register**. Tell us your modeling approach and research interest.
2. **Receive curated data**. Get access to the harmonized Bangladesh input dataset.
3. **Run your model**. Apply your approach to the shared question. Your model stays yours.
4. **Contribute to synthesis**. Submit outputs to the *Climatic Change* topical collection and present at iEMSs.

No icons or illustrations. Numerals carry the visual structure.

#### Section 7 — Registration CTA

Single-column, centered, generous padding.

One primary button: `Register to participate`. Links to `/participate/`.

Supporting line below the button (small token):

> Open to climate-migration modelers using ABM, gravity, radiation, IAM, or ML approaches. No fee. Participation expectations on the Participate page.

#### Section 8 — Lineage strip

Single line of text, centered, body-lg, with `space-7` padding above and below to give it weight.

> Inspired by AgMIP and ISIMIP. Founded at Princeton C-PREE, September 2024. Led from Cornell, Ohio State, and VU Amsterdam.

**No institutional logo wall.** `[PENDING BELL APPROVAL: institutional logos to display or not]`. Surface this in OPEN-QUESTIONS.md.

#### Section 9 — Footer (shared)

See `IA.md` § Footer.

---

## About — `src/pages/about.astro`

**Purpose**: A funder or senior academic understands the origin, lineage, governance, and substantive scope of 3MIP in ~3 minutes of reading.

**Primary audience**: funders (audience #2), adjacent academics (audience #4).

**Primary action**: read, then either navigate to Team for credibility check or to Case 1 for substantive depth.

**JSON-LD**: `AboutPage` referencing the Organization on Home.

**Meta description**: "3MIP grew out of a 2024 Princeton workshop. Co-leads at Cornell, Ohio State, VU Amsterdam. Advisory committee includes Oppenheimer, de Sherbinin, Aerts."

### Sections in order

#### Section 1 — Page header

`<h1>` "About 3MIP".

Lede paragraph (body-lg):

> 3MIP is a community of climate-migration modelers who agree to apply their approaches to a shared benchmark case and synthesize the results. The first benchmark case is coastal Bangladesh. The first public synthesis takes place at iEMSs 2026 in Dublin.

#### Section 2 — Origin

`<h2>` "How 3MIP started"

Two paragraphs:

> 3MIP grew out of a workshop at Princeton's Center for Policy Research on Energy and the Environment (C-PREE) on September 25–27, 2024, organized by Nic Choquette-Levy (Penn State) and Fabien Cottier (Geneva). More than thirty researchers from three continents agreed that climate-migration modeling needed what crop modeling and cross-sectoral impacts modeling already had: a coordinated intercomparison.
>
> The workshop's funding came from the Lamont-Doherty Earth Observatory Climate Center at Columbia, the Carolee Bol and Scott Rosenberg '95 C-PREE Fund at Princeton, Cornell's Department of Global Development, and the United Nations Global Centre for Climate Mobility.

Link: "Workshop summary at Princeton C-PREE" → external to `https://cpree.princeton.edu/news/2024/researchers-around-world-attend-climate-migration-workshop-princeton`.

#### Section 3 — Intellectual lineage

`<h2>` "AgMIP, ISIMIP, and 3MIP"

Two paragraphs:

> 3MIP is modeled on two long-running model intercomparison projects: AgMIP (Agricultural Model Intercomparison and Improvement Project), launched in 2010, and ISIMIP (Inter-Sectoral Impact Model Intercomparison Project), coordinated from PIK Potsdam since 2012. Both have produced hundreds of papers, contributed to IPCC assessments, and demonstrated that diverse modeling communities can converge on shared protocols without surrendering methodological autonomy.
>
> 3MIP applies that pattern to climate-migration modeling. The first phase holds inputs constant — a curated, openly licensed dataset for coastal Bangladesh — and lets participating teams choose their own research questions, model architectures, and output variables. Future phases may move toward harmonized outputs as the community converges.

#### Section 4 — Governance

`<h2>` "Governance"

Three subsections, each with a `<h3>`:

**Leadership** (h3)

> Three co-leads coordinate the project: Andrew Bell (Cornell), Kelsea Best (Ohio State), and Lars Tierolf (VU Amsterdam). They make day-to-day decisions about protocol, communication, and scheduling.

**Advisory committee** (h3)

> A 14-member advisory committee reviews protocol changes, advises on case selection, and provides senior methodological perspective. Members are listed on the Team page.

**Project management** (h3)

> Day-to-day coordination is handled by Mario Keputa (Cornell) through June 2026, with Ishita Kashyap (Cornell) supporting `[VERIFY]`. After Mario's departure, project management transitions to `[PENDING BELL APPROVAL]`.

#### Section 5 — What 3MIP is and is not

`<h2>` "What 3MIP is and is not"

Two short bulleted lists side by side on desktop, stacked on mobile.

**3MIP is**:
- A coordinating layer for climate-migration modeling teams
- A curator of openly licensed input datasets for benchmark cases
- A synthesizer of model outputs across diverse architectures
- A venue for publishing intercomparison findings in peer-reviewed journals and conference proceedings

**3MIP is not**:
- A single-model forecasting service
- A policy advocacy organization
- A funding body
- A clearinghouse for individual modelers' research outputs (those remain with their authors)

#### Section 6 — Funding

`<h2>` "Funding"

Two paragraphs:

> 3MIP's founding workshop in September 2024 was funded by the Lamont-Doherty Earth Observatory Climate Center (Columbia), the Carolee Bol and Scott Rosenberg '95 C-PREE Fund (Princeton), the Department of Global Development (Cornell), and the United Nations Global Centre for Climate Mobility.
>
> Operating-phase funding for 2025–2027 is `[PENDING BELL APPROVAL — do not name specific funders without confirmation in writing]`. The leadership team is preparing additional proposals, including an application to the U.S. National Science Foundation Research Coordination Network program `[VERIFY current status]`.

#### Section 7 — Footer (shared)

---

## Case 1: Bangladesh — `src/pages/case-bangladesh.astro`

**Purpose**: A modeler considering participation understands the case in substantive depth: why Bangladesh, what's known, what dataset is curated, what the shared question is, and what outputs are expected.

**Primary audience**: active modelers (audience #1).

**Primary action**: navigate to /data and /participate from here.

**JSON-LD**: `ResearchProject` with name, description, location (Bangladesh), funder placeholder.

**Meta description**: "Coastal Bangladesh is 3MIP's first benchmark case. 175.7M people, sea-level rise, salinity, flood dynamics. Open dataset, shared protocol."

### Sections in order

#### Section 1 — Page header

`<h1>` "Case 1: Coastal Bangladesh"

Lede:

> Bangladesh's coastal districts face one of the most studied combinations of climate stress and population pressure in the world. 3MIP's first benchmark case asks participating modeling teams to project net internal migration in these districts from 2025 to 2050 under shared climate and socioeconomic scenarios, using shared input data.

#### Section 2 — Why Bangladesh

`<h2>` "Why Bangladesh is the first case"

Two paragraphs:

> Three factors converge on Bangladesh. The empirical literature on internal migration there is among the densest in the climate-migration field, providing a real benchmark against which model outputs can be sanity-checked. The country's population of 175.7 million `[citation: UNFPA SWOP 2025]` and its low-lying delta geography make the policy stakes consequential. And the data infrastructure — population grids, modeled migration flows, salinity layers, flood histories — is already openly licensed and usable.
>
> Bell et al. (2021) projected that migration *toward* Bangladesh's coast, not away from it, will continue through 2100 across the sea-level rise scenarios they studied. That finding sits in productive tension with the popular narrative of mass climate exodus and provides the empirical motivation for revisiting the problem with multiple model architectures.

Citation block:

> Bell, A. R., Wrathall, D. J., Mueller, V., Chen, J., Oppenheimer, M., et al. (2021). Migration towards Bangladesh coastlines projected to increase with sea-level rise through 2100. *Environmental Research Letters*, 16(2), 024045.

#### Section 3 — The shared question

`<h2>` "The shared question"

Callout block (note variant):

> **Net internal migration in coastal Bangladesh districts, 2025–2050, under SSP2-4.5.** Each participating team applies their model to this question using the curated input dataset. Teams may extend the analysis to SSP1-2.6 and SSP5-8.5 as sensitivity scenarios, and to 2100 as a sensitivity time horizon. `[VERIFY scenario specification with Bell — current FACTS.md draft]`

Paragraph below:

> Teams choose how to operationalize "migration" within their own model architecture. The intercomparison does not require harmonized output variables; it requires harmonized inputs and a shared central question. Where outputs diverge — and they will — the synthesis paper documents the divergence and the methodological choices that drive it.

#### Section 4 — Geographic scope

`<h2>` "Geographic scope"

Two-column on desktop. Left column: text. Right column: a stylized map of Bangladesh coastal districts (SVG, built in Phase 2 or 3, simple polygon outlines on a neutral background; no satellite imagery).

Text:

> The case focuses on districts in the Ganges-Brahmaputra-Meghna delta and adjacent coastal areas. The exact district list is specified in the protocol document and includes Khulna, Satkhira, Bagerhat, Barguna, Patuakhali, Pirojpur, Bhola, Noakhali, Chattogram, and adjacent inland districts that receive coastal migrants `[VERIFY exact district list against protocol]`.

#### Section 5 — Curated input dataset

`<h2>` "Curated input dataset"

One paragraph:

> 3MIP provides a harmonized, openly licensed dataset combining population grids, modeled migration flows, soil salinity, flood extent, and socioeconomic indicators. Teams use this dataset as their common input. They may add additional data sources if their model requires them, with documentation.

Link card: "See the full data documentation" → `/data/`.

#### Section 6 — Expected outputs and timeline

`<h2>` "Expected outputs and timeline"

Timeline structure (vertical list with dates):

- **Now – mid 2026**: teams run their models, attend webinars, share preliminary findings
- **July 2026**: first synthesis presented at iEMSs Dublin (Session C7 + Workshop WSC7)
- **Late 2026 onward**: submissions to *Climatic Change* topical collection `[VERIFY: formal Springer call not yet posted as of May 2026]`
- **2027**: synthesis paper drafted from the collected outputs

#### Section 7 — Protocol document

`<h2>` "Protocol document"

One paragraph:

> The 3MIP Bangladesh case protocol document specifies the shared question, the curated dataset, the climate scenarios, the geographic scope, and the output submission process. Registered participants receive the latest version of the protocol.

Button: "Request the protocol document" → links to `/participate/` (registration form). Do not link to a public PDF; the protocol is shared with registered participants.

`[PENDING BELL APPROVAL: whether the protocol document is fully public or registration-gated]`

#### Section 8 — Footer (shared)

---

## Data — `src/pages/data.astro`

**Purpose**: A registered or prospective modeler understands what datasets are curated, can verify citations, and can access download links.

**Primary audience**: active modelers (audience #1).

**Primary action**: review the dataset table; follow DOI or download links.

**JSON-LD**: array of `Dataset` entities, one per row.

**Meta description**: "Curated, openly licensed datasets for 3MIP's Bangladesh case: population grids, migration flows, salinity, flood extent, socioeconomic indicators. Full citations and DOIs."

### Sections in order

#### Section 1 — Page header

`<h1>` "Curated input data"

Lede:

> 3MIP curates an openly licensed dataset for the Bangladesh case. Each dataset is documented below with its source, variable, spatial and temporal coverage, full citation, DOI, and license. Teams may extend this dataset with additional sources; the curation provides a shared baseline.

#### Section 2 — Citation policy

Callout block (note variant), above the table:

> **How to cite the 3MIP curated dataset**: When using these datasets through the 3MIP curation, cite both the original publication of each dataset (listed below) and the 3MIP curated package: *Bell, Best, Tierolf & 3MIP Consortium (2025). 3MIP Curated Input Dataset for Coastal Bangladesh, Version 1.0.* `[DOI when minted]` `[PENDING BELL APPROVAL on exact citation format]`

#### Section 3 — Dataset table

A sortable table. Columns:

| Column | Width | Behavior |
|---|---|---|
| Dataset | 20% | Anchor link target; sortable |
| Variable | 15% | Sortable |
| Resolution | 10% | Sortable |
| Coverage | 12% | Sortable |
| License | 10% | Sortable |
| Citation | 25% | Not sortable; shows shortened citation with expand |
| DOI / Link | 8% | External link icon |

Each row has an `id` attribute matching a slug (e.g., `id="ghsl-population"`) so the row is directly linkable from elsewhere on the site.

**Mobile**: table collapses to cards. Each card stacks the columns vertically with bold labels.

**Sort behavior**: header click toggles ascending/descending sort. Sort indicator via aria-sort attribute and visual chevron.

Rows (from FACTS.md § Datasets — verify each against current Weebly site):

1. JRC/Copernicus GHSL Population Grid
2. CIESIN Gridded Population of the World v4 (GPWv4)
3. Sorichetta et al. modeled internal migration flows
4. Hassani et al. soil salinity
5. Tellman et al. global flood database `[VERIFY citation]`
6. Bangladesh Bureau of Statistics 2023 internal migration survey `[VERIFY]`
7. Additional datasets per current Weebly site `[VERIFY full list]`

#### Section 4 — Extending the dataset

`<h2>` "Adding your own data"

One paragraph:

> Teams may incorporate additional data sources if their model architecture requires inputs not present in the curated set. Document additional sources in your output submission so the synthesis paper can attribute methodological differences to data choices.

#### Section 5 — Footer (shared)

---

## Participate — `src/pages/participate.astro`

**Purpose**: A modeler considering participation can quickly assess whether they qualify, what is expected of them, and how to register.

**Primary audience**: active modelers (audience #1).

**Primary action**: complete the registration form.

**JSON-LD**: `WebPage` referencing the parent Organization.

**Meta description**: "Modelers using ABM, gravity, radiation, IAM, or ML approaches can join 3MIP's coastal Bangladesh case. Registration open."

### Sections in order

#### Section 1 — Page header

`<h1>` "Participate in 3MIP"

Lede:

> 3MIP is open to research teams applying any model architecture to climate-migration questions. The first benchmark case is coastal Bangladesh; registered participants commit to working with the curated input dataset and contributing outputs to the iEMSs 2026 synthesis and the *Climatic Change* topical collection.

#### Section 2 — Who should participate

`<h2>` "Who should participate"

Two-column on desktop.

Left column: short paragraph

> 3MIP is for active research teams developing migration models. Solo PhD students, postdocs with their own implementation, established modeling labs — all welcome. Participation requires working with a model that produces some form of mobility output for spatial units in Bangladesh.

Right column: model architectures bulleted list

- Agent-based models
- Gravity models
- Radiation models
- Integrated assessment models with migration modules
- Machine learning approaches (statistical, deep learning, hybrid)
- Other architectures producing comparable outputs

#### Section 3 — What participation involves

`<h2>` "What participation involves"

Numbered list (using semantic ordered list, not visual numbering):

1. **Receive the curated input dataset and protocol document** within five working days of registration.
2. **Attend two participant webinars per year**, scheduled with the cohort. Recordings are available if you cannot attend live.
3. **Run your model on the shared question** for the Bangladesh case at your own pace. The first major milestone is the iEMSs 2026 Dublin synthesis session in July 2026.
4. **Submit your outputs and methodological documentation** by `[VERIFY deadline]` for inclusion in the synthesis and the *Climatic Change* topical collection.
5. **Retain ownership of your model and outputs.** 3MIP synthesizes findings across teams; individual model outputs and code remain with their authors and may be published independently.

#### Section 4 — Registration form

`<h2>` "Register"

Form fields (all required unless marked optional):

| Field | Type | Notes |
|---|---|---|
| Name | text, single line | First and last |
| Affiliation | text, single line | University, institute, or organization |
| Email | email | Used for communication and dataset access |
| ORCID (optional) | text | Format: 0000-0000-0000-0000 |
| Modeling approach | multi-select | ABM, Gravity, Radiation, IAM, ML, Other |
| Research question of interest | textarea | 2–4 sentences on what you intend to study |
| How did you hear about 3MIP | select | Conference, colleague, publication, search, other |
| Any questions before registering (optional) | textarea | |

Submit button: "Submit registration".

**Form action**: posts to `[PLACEHOLDER — Mario to decide in DECISIONS.md between Formspree free tier, Cornell Qualtrics link-out, or other]`.

**Privacy note** below the form:

> Your information is used only for 3MIP coordination. We do not share it with third parties. See the privacy notice for details.

#### Section 5 — Frequently asked questions

`<h2>` "Frequently asked questions"

Accordion or definition list. 8–10 questions:

1. **Does it cost anything to participate?** No. Participation is free.
2. **What if my model is still in development?** You can register and join webinars. Output submission for the synthesis requires a working model by `[VERIFY deadline]`.
3. **Who owns the outputs?** You own your model and outputs. 3MIP synthesizes across teams; you remain the author of your own work.
4. **Do I have to share my code?** No. Code sharing is encouraged but not required. Methodological documentation is required.
5. **Can I join after July 2026?** Yes. The Bangladesh case continues after the iEMSs synthesis. Future cases will have their own registration windows.
6. **What if I want to use additional data sources?** Document them in your output submission so the synthesis can attribute differences to data choices.
7. **How are decisions made about protocol changes?** The three co-leads decide, in consultation with the advisory committee. Major protocol revisions are announced to registered participants before they take effect.
8. **What is the *Climatic Change* topical collection?** A planned topical collection in the journal *Climatic Change* for 3MIP-affiliated papers. The formal call is anticipated for late 2026 `[VERIFY]`.
9. **Will participating modelers be listed publicly?** Only with your explicit consent. A public directory is planned for a future version of the site.
10. **Who do I contact if I have questions?** Email Mario Keputa at mk2674@cornell.edu through June 2026, or use the Contact page.

#### Section 6 — Footer (shared)

---

## Team — `src/pages/team.astro`

**Purpose**: A credibility-checking visitor (funder, senior academic) can verify who runs 3MIP and who advises it.

**Primary audience**: funders (audience #2), adjacent academics (audience #4).

**Primary action**: read; click out to individual researchers' institutional pages.

**JSON-LD**: list of `Person` entities for leadership; not for advisory members in v1 (privacy).

**Meta description**: "3MIP is led by Andrew Bell (Cornell), Kelsea Best (OSU), and Lars Tierolf (VU Amsterdam). Advisory committee includes Oppenheimer, de Sherbinin, Aerts."

### Sections in order

#### Section 1 — Page header

`<h1>` "Team"

Lede:

> 3MIP is led by three co-leads, advised by a 14-member committee, and coordinated by project management at Cornell.

#### Section 2 — Leadership

`<h2>` "Leadership"

Three full-width entries, stacked vertically (not in a grid).

Each entry:

```
[Optional photo, monochrome square, ~120px — PENDING BELL APPROVAL]

[Name]
[Primary affiliation]
[Role in 3MIP — one line]

[Bio paragraph — ~100 words]

[Selected publications — 2–3 with links to DOI]

[Link to institutional page]
```

Bell entry text (from FACTS.md):

> **Andrew Reid Bell**
>
> Schleifer Family Professor of Sustainability, Department of Global Development, Cornell University
>
> Co-lead, primary PI
>
> Bell works on agent-based modeling of climate adaptation, migration, and food systems. He developed the MIDAS (Migration, Intensification, and Diversification as Adaptive Strategies) agent-based framework, formalized in Bell, Calvo Hernandez & Oppenheimer (2019), and led the Bell et al. (2021) analysis projecting continued migration toward Bangladesh's coast through 2100. Before joining Cornell in July 2024, he was Associate Professor at NYU.
>
> Selected publications:
> - Bell, A. R., et al. (2021). Migration towards Bangladesh coastlines projected to increase with sea-level rise through 2100. *Environmental Research Letters*, 16(2), 024045.
> - Bell, A. R., Calvo-Hernandez, C., & Oppenheimer, M. (2019). Migration, Intensification, and Diversification as Adaptive Strategies. *Socio-Environmental Systems Modelling*, 1, 16102.
>
> Cornell page: `https://einaudi.cornell.edu/discover/people/andrew-reid-bell`

Best and Tierolf entries follow the same template using FACTS.md content.

#### Section 3 — Advisory committee

`<h2>` "Advisory committee"

Single column. Each member as a row with:
- Name (semibold)
- Affiliation (regular)
- Role in 3MIP (small text, italic)

Members in alphabetical order by surname:

- **Jeroen Aerts**, Vrije Universiteit Amsterdam. *Coastal modeling methods advisor, COASTMOVE PI.*
- **Thomas Bearpark**, Princeton University. *Climate impacts and econometrics advisor.* `[VERIFY]`
- **Michał Burzyński**, Luxembourg Institute of Socio-Economic Research. *Economic migration modeling advisor.*
- **Nic Choquette-Levy**, Penn State University. *Smallholder modeling advisor, founding workshop co-organizer.*
- **Fabien Cottier**, University of Geneva. *Empirical migration analysis advisor, founding workshop co-organizer.*
- **Alex de Sherbinin**, Center for International Earth Science Information Network, Columbia University. *Data and policy interface advisor.*
- **Roman Hoffmann**, International Institute for Applied Systems Analysis. *Demographic and migration data advisor.*
- **Maxine Leis**, Uppsala University. *Role TBD.* `[VERIFY]`
- **Woi Sok Oh**, University of Waterloo. *Socio-environmental modeling advisor.*
- **Michael Oppenheimer**, Princeton University. *Senior science advisor, methodological framing.*
- **Michael Puma**, Center for Climate Systems Research, Columbia University; NASA GISS. *Food systems and climate impacts advisor.*
- **Seynabou Sall**, IPAR-Senegal. *West African case-study and field perspective advisor.* `[VERIFY]`
- **Lisa Thalheimer**, International Institute for Applied Systems Analysis. *Immobility and trapped populations advisor.*
- **Loring Thomas**, Princeton University. *Role TBD.* `[VERIFY]`

#### Section 4 — Project management

`<h2>` "Project management"

Two short entries:

> **Mario Keputa** (Cornell, through June 2026). Project coordinator. mk2674@cornell.edu.
>
> **Ishita Kashyap** (Cornell). Project management. `[VERIFY email and title]`

#### Section 5 — Participating modelers

`<h2>` "Participating modelers"

One paragraph (empty state):

> A public directory of participating modeling teams will appear here after teams register and provide their consent to public listing. If you are a registered participant and wish to be listed, contact project management.

Tag `[v2: opt-in participant directory after consent]`.

#### Section 6 — Footer (shared)

---

## Outputs — `src/pages/outputs.astro`

**Purpose**: Anyone interested in 3MIP's research outputs can find webinars, working papers, conference sessions, and the *Climatic Change* topical collection in one place.

**Primary audience**: policymakers (audience #3), academics (audience #4), modelers (audience #1).

**Primary action**: read or play webinar; click through to papers when available.

**JSON-LD**: array of `Article` and `Event` entities for actual content; pages with placeholder content use `WebPage`.

**Meta description**: "3MIP outputs: webinars, working papers, conference sessions, and the forthcoming *Climatic Change* topical collection."

### Sections in order

#### Section 1 — Page header

`<h1>` "Outputs"

Lede:

> 3MIP outputs include webinar recordings, working papers from participating teams, conference sessions, and a forthcoming topical collection in the journal *Climatic Change*. This page is updated as new outputs become available.

#### Section 2 — Webinars

`<h2>` "Webinars"

Card grid (single column desktop, single column mobile — these are detail-rich, not browse-able tiles).

Each card:
- Title
- Date
- Speaker(s) and affiliation
- Length (e.g., "45 min")
- Abstract (2–3 sentences)
- Buttons: "Watch recording" (external to Google Drive or YouTube replacement `[VERIFY hosting decision]`), "Slides" (if available)

Initial cards (from FACTS.md):

1. **February 2025 webinar**: `[VERIFY title, speaker, abstract]`
2. **March 2025 webinar**: `[VERIFY title, speaker, abstract]`

Future webinars added via the `webinars` content collection.

#### Section 3 — Working papers

`<h2>` "Working papers"

Empty state (single paragraph):

> Working papers from participating teams will appear here as they are released. Papers are linked to their original venue (preprint server or journal) and remain under their authors' control. Subscribe to the news feed for release announcements.

When the first working paper is added (via the `papers` content collection), this section becomes a card list with title, authors, abstract, link to preprint or publication.

#### Section 4 — Conference sessions

`<h2>` "Conference sessions"

Card list. Initial entries:

**iEMSs 2026 — Dublin, July 2026** `[VERIFY exact dates]`
- Session C7: *Mobility and Migration Modeling Intercomparison Project (3MIP) – An open, first synthesis*
- Workshop WSC7: *Panel Discussion – 3MIP*
- Link to iEMSs streams page

**Princeton C-PREE — September 25–27, 2024**
- Climate Migration Modeling Intercomparison Workshop
- The founding workshop of 3MIP
- Link to Princeton C-PREE summary

#### Section 5 — *Climatic Change* topical collection

`<h2>` "Climatic Change topical collection"

Empty state:

> A topical collection in the journal *Climatic Change* will host peer-reviewed 3MIP outputs. The formal call for papers is anticipated in late 2026 `[VERIFY: Springer call not yet posted as of May 2026]`. When the call opens, the link and submission instructions will appear here.

#### Section 6 — Footer (shared)

---

## News — `src/pages/news.astro`

**Purpose**: A returning visitor or RSS subscriber can see what's happened recently in the project.

**Primary audience**: returning participants, academics following the project.

**Primary action**: read; subscribe to RSS.

**JSON-LD**: `Blog` with `BlogPosting` entries.

**Meta description**: "Recent news from 3MIP: project updates, webinar announcements, publication releases, and conference participation."

### Sections in order

#### Section 1 — Page header

`<h1>` "News"

Lede:

> Updates from 3MIP. Subscribe to the [RSS feed](/news/feed.xml) for new entries.

RSS feed icon link.

#### Section 2 — News list

Reverse-chronological list of entries from the `news` content collection.

Each entry:
- Date (long format)
- Title (linked if a full post exists)
- 2–3 sentence excerpt
- Tags (small, muted)

Pagination: 20 entries per page. Older entries via `?page=2` etc. (Astro pagination).

Seed entries (from FACTS.md):

**October 2025 — 3MIP launches**

> 3MIP — the Mobility and Migration Modeling Intercomparison Project — opens for registration. The first benchmark case is coastal Bangladesh. Modelers using ABM, gravity, radiation, IAM, ML, and other approaches are invited to participate.

**[VERIFY date] — iEMSs 2026 Dublin session accepted**

> 3MIP will host Session C7 and Workshop WSC7 at iEMSs 2026 in Dublin in July 2026. The session will present the first public synthesis of 3MIP outputs across participating teams.

#### Section 3 — Footer (shared)

---

## Contact — `src/pages/contact.astro`

**Purpose**: Someone with a specific question can reach the right person.

**Primary audience**: anyone with a specific need (prospective participants, press, funders).

**Primary action**: send an email.

**JSON-LD**: `ContactPage`.

**Meta description**: "Contact 3MIP. Project coordinator: Mario Keputa (Cornell). PI escalation: Andrew Bell."

### Sections in order

#### Section 1 — Page header

`<h1>` "Contact"

Lede:

> 3MIP does not maintain a public contact form. Email is the preferred channel.

#### Section 2 — Primary contact

`<h2>` "Project coordination"

> **Mario Keputa**
>
> Project coordinator, Cornell University
>
> mk2674@cornell.edu
>
> Through June 2026. After that, please contact `[PENDING BELL APPROVAL — successor]` or use the PI escalation below.

#### Section 3 — PI escalation

`<h2>` "Principal investigator"

> **Andrew Bell**
>
> Schleifer Family Professor of Sustainability, Cornell University
>
> Contact via Cornell directory: `[VERIFY Bell's preferred public email or institutional page]`

#### Section 4 — Press

`<h2>` "Press"

> Press inquiries are routed through Cornell University Relations `[PENDING BELL APPROVAL on press posture]`. For specific research questions, contact one of the co-leads directly via their institutional pages.

#### Section 5 — Mailing address

`<h2>` "Mailing address"

> Department of Global Development, Cornell University, Ithaca, NY `[VERIFY full address]`.

#### Section 6 — Footer (shared)

---

## Content Collections

Defined in `src/content/config.ts` with Zod schemas.

### `news` collection

```typescript
{
  date: z.date(),
  title: z.string().max(120),
  excerpt: z.string().max(300),
  tags: z.array(z.string()).optional(),
  fullPost: z.boolean().default(false), // if true, file body becomes a full post page
}
```

File naming: `YYYY-MM-short-title.md` (e.g., `2025-10-launch.md`).

### `papers` collection

```typescript
{
  title: z.string(),
  authors: z.array(z.string()),
  year: z.number(),
  venue: z.string().optional(),
  abstract: z.string().optional(),
  doi: z.string().url().optional(),
  preprintUrl: z.string().url().optional(),
  pdfUrl: z.string().url().optional(),
  related3MIPCase: z.enum(['bangladesh', 'general']).default('general'),
}
```

### `webinars` collection

```typescript
{
  date: z.date(),
  title: z.string(),
  speakers: z.array(z.object({
    name: z.string(),
    affiliation: z.string(),
  })),
  lengthMinutes: z.number().optional(),
  abstract: z.string().optional(),
  recordingUrl: z.string().url().optional(),
  slidesUrl: z.string().url().optional(),
}
```

### `team` collection

```typescript
{
  name: z.string(),
  surname: z.string(), // for sorting
  affiliation: z.string(),
  role: z.enum(['co-lead', 'advisor', 'project-management']),
  shortRole: z.string(), // one-line role in 3MIP
  bio: z.string().optional(), // longer bio for co-leads only
  publications: z.array(z.object({
    citation: z.string(),
    doi: z.string().url().optional(),
  })).optional(),
  institutionalUrl: z.string().url().optional(),
  email: z.string().email().optional(),
  photo: z.string().optional(), // path to /public/team/[name].jpg if approved
}
```

---

## Launch checklist — `LAUNCH-CHECKLIST.md` content

This is the spec for the launch checklist file Claude Code writes in Phase 7. Items to include:

**Pre-launch content review**:
- [ ] Every `[VERIFY]` tag resolved or explicitly deferred to v2
- [ ] Every `[PENDING BELL APPROVAL]` tag resolved by Bell
- [ ] Mario, Bell, Best, and Tierolf have reviewed each page
- [ ] At least one external reader (Ishita, an advisor) has done a fresh read

**Technical**:
- [ ] `npm run build` passes clean with no warnings
- [ ] `astro check` passes with zero errors
- [ ] All pages render at 375px, 768px, 1024px, and 1440px
- [ ] All forms submit successfully to the chosen endpoint
- [ ] All internal links resolve
- [ ] External links checked (some legitimate 404s for forthcoming items documented)
- [ ] Sitemap.xml generated and reviewed
- [ ] robots.txt correct

**Accessibility**:
- [ ] WCAG 2.2 AA pass via automated tool (pa11y-ci or axe-core)
- [ ] Manual keyboard traversal of every page
- [ ] Screen reader spot-check (NVDA or VoiceOver) of key pages
- [ ] Color contrast verified for every pair actually used
- [ ] Reduced-motion behavior verified

**Performance**:
- [ ] Lighthouse Performance ≥95
- [ ] Lighthouse Accessibility ≥95
- [ ] Lighthouse Best Practices ≥95
- [ ] Lighthouse SEO ≥95
- [ ] Font payload ≤200KB
- [ ] No CLS issues
- [ ] Images explicitly sized and lazy-loaded where appropriate

**SEO and discoverability**:
- [ ] Each page has unique title, meta description, canonical URL
- [ ] Open Graph and Twitter card tags render correctly on Twitter, LinkedIn, Slack previews
- [ ] JSON-LD validates
- [ ] OG image renders at 1200×630

**Privacy and legal**:
- [ ] GDPR notice live, linked from footer
- [ ] No third-party trackers (verified via browser DevTools network tab)
- [ ] Privacy posture documented in the GDPR notice
- [ ] License terms (CC BY 4.0 content, MIT code) noted in footer

**Operational**:
- [ ] Vercel deploy from main branch verified
- [ ] Preview deployments enabled for PRs
- [ ] Custom domain DNS configured `[PENDING BELL APPROVAL on domain]`
- [ ] SSL certificate active
- [ ] www redirect handled
- [ ] 404 page works
- [ ] Email forward set up (info@[domain] → Mario, transitions to successor after June 2026)

**Communication**:
- [ ] Old Weebly site has 301 redirect to new domain `[PENDING BELL APPROVAL]`
- [ ] Backup of Weebly content archived
- [ ] Email to registered participants announcing new site
- [ ] iEMSs Dublin presenters informed of new domain ≥60 days before July 2026
