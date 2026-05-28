# 3MIP Website — Design Principles

This document specifies the visual and interaction design system for the website. Every rule has a rationale. If you change a rule, change the rationale too.

## Core principles

### 1. Typography carries the design

The site looks like the work of a serious research project because typography does the heavy lifting. Color is restrained. Imagery is minimal. Whitespace is generous. The visual interest comes from a well-set page, not from layered visual effects.

**Why:** The reference sites we admire (cpree.princeton.edu, ciesin.columbia.edu, climateimpactlab.org, anthropic.com, stripe.press) all share this approach. They do not look like marketing sites because they are not marketing sites. The visual register signals "academic infrastructure" by being typographic, restrained, and confident — not flashy.

### 2. Restraint is the brand

Two colors. One serif. One sans. One radius value. One border weight. One shadow (and rarely). No gradients. No decorative illustrations. No background patterns.

**Why:** Restraint signals confidence. Sites that throw every available visual at the viewer signal anxiety about whether the content is enough. 3MIP's content is enough.

### 3. Diagrams over photography

If a visual is needed, it is a diagram, a map, a chart, or a data visualization. Not a photo. Not stock imagery. Not generative illustration.

**Why:** This is a quantitative methodological project. Its visual language should match: schematic, precise, informative. Photos of refugees, rising water, or generic Bangladesh imagery would actively undermine the register.

### 4. Mobile-first, but desktop earns its width

Every layout is designed at 375px first. Desktop layouts add structure, do not subtract it. A page that works on mobile but feels empty on desktop has not been designed; it has been scaled up.

**Why:** The first reference site visitor for many academics is a phone. Layouts that depend on a 1440px viewport to feel intentional fail the first impression test.

### 5. Accessibility is a baseline, not a feature

WCAG 2.2 AA is the floor, not the ceiling. Focus rings are visible. Contrast is verified. Keyboard navigation works in logical order. Screen reader output is checked. Reduced motion is respected.

**Why:** Some of 3MIP's most valuable potential collaborators use assistive tech. A research project that fails them at the front door is not a serious research project.

## Token system

Tokens are the only allowed values. Tailwind config maps tokens to utility classes. No arbitrary values in markup.

### Color tokens — what to commit to

The DECISIONS.md output of Phase 0 will commit to exact hex values. The token *roles* below are fixed; the *values* are decided in Phase 0.

```
background           Page background, light mode
surface              Cards, callouts, slight elevation
surface-elevated     Modals, dropdowns (if any), highest elevation
ink                  Primary text
ink-muted            Secondary text, captions
ink-subtle           Tertiary text, metadata
accent               Single accent color, used sparingly
accent-dim           Hover state of accent, dimmer variant
accent-ink           Text color on accent backgrounds (must pass AA)
border               Default border
border-strong        Emphasized border (table headers, focused states)
focus-ring           Focus ring color (must be visually distinct from accent for color-blind users)
success              Confirmation states (form success, etc.)
warning              Caution states (rarely used)
error                Form errors, broken state indicators
```

Dark mode versions of each token, via `prefers-color-scheme: dark`. No user toggle in v1.

**Color philosophy for the chosen palette:**

- Climate work overuses blue (sky, water) and green (sustainability, ecology). The 3MIP palette should deliberately differentiate.
- Earth tones, charcoal + ochre, ink + clay, deep neutral + a single warm accent are all on the table.
- The accent is used for: primary buttons, active nav state, key chart elements, signature visualization scale. Not used for: body links (use ink + underline), decorative backgrounds, hover states unrelated to the accent's semantic role.
- Two-color minimum, three-color maximum, including the neutral base.

**Contrast requirements:**

- Body text on background: 7:1 or better (AAA)
- Large text (≥18pt or ≥14pt bold) on background: 4.5:1 minimum (AA Large)
- All other text on background: 4.5:1 minimum (AA)
- Interactive element borders against background: 3:1 minimum
- Focus ring against any background it might appear over: 3:1 minimum

Document every actual color pair used in the design system showcase page (`/_design`) with its measured contrast ratio.

### Typography tokens

**Two typefaces. One serif for display and select prose moments. One sans for everything else.**

Candidate pairings to choose between in Phase 0:

| Pairing | Serif | Sans | Source | License | Notes |
|---|---|---|---|---|---|
| A | Source Serif 4 | Inter | Google Fonts via Fontsource | OFL / Apache | Workhorse. Reliable. Open. |
| B | IBM Plex Serif | IBM Plex Sans | Fontsource | OFL | Cohesive family, slightly utilitarian |
| C | Untitled Serif (Klim) | Inter | Klim Type Foundry / Fontsource | Paid — flag | Premium feel, paid license required |
| D | Tiempos Text | Söhne | Klim / Klim | Paid — flag | Distinctive, premium, paid |
| E | Newsreader | Inter | Google Fonts via Fontsource | OFL | Variable font, modern, free |

**Recommended default**: Pairing A (Source Serif 4 + Inter). Both are open, both have variable font versions, both are self-hostable via `@fontsource-variable`. Strong precedent in research publishing. If Bell wants something more distinctive at the design review, pairing E (Newsreader + Inter) is the upgrade that stays within budget.

Decision in DECISIONS.md (Phase 0).

**Weights to load:**

- Serif: 400 regular, 600 semibold. Italic 400 for emphasis.
- Sans: 400 regular, 500 medium, 600 semibold. Italic 400 only if needed for emphasis in long prose; usually unnecessary.
- Total font payload target: ≤200KB.

**Type scale (8 steps):**

| Token | Size (rem / px) | Line-height | Letter-spacing | Weight | Family | Use |
|---|---|---|---|---|---|---|
| `display` | 3.5 / 56 | 1.05 | -0.02em | 400 | serif | Home page hero only |
| `h1` | 2.5 / 40 | 1.15 | -0.015em | 400 | serif | Page title |
| `h2` | 1.875 / 30 | 1.2 | -0.01em | 600 | sans | Section heading |
| `h3` | 1.375 / 22 | 1.3 | -0.005em | 600 | sans | Subsection |
| `h4` | 1.125 / 18 | 1.35 | 0 | 600 | sans | Component heading |
| `body-lg` | 1.125 / 18 | 1.65 | 0 | 400 | sans | Lede paragraphs, important prose |
| `body` | 1 / 16 | 1.65 | 0 | 400 | sans | Default prose |
| `small` | 0.875 / 14 | 1.5 | 0.005em | 400 | sans | Captions, metadata |
| `caption` | 0.75 / 12 | 1.4 | 0.02em | 500 | sans | Figure captions, table captions |

Adjust at mobile: display drops to 2.5rem, h1 drops to 2rem. Smaller increments below are kept; legibility floors at 14px for body text.

**Prose paragraph max-width**: 65ch. Wider is harder to read. Narrower wastes space. 65ch is the publishing convention.

### Spacing scale

8pt base. Use only these values:

```
space-1   4px    (rare, only inline gaps)
space-2   8px
space-3   16px
space-4   24px
space-5   32px
space-6   48px
space-7   64px
space-8   96px
space-9   128px   (section break on desktop only)
```

Vertical rhythm: between paragraphs, `space-3` (16px). Between sections within a page, `space-7` desktop / `space-5` mobile. Between major sections (e.g., hero to first content), `space-8` desktop / `space-6` mobile.

### Grid

- **Max content width**: 1280px
- **Page gutter**: 32px desktop, 24px tablet, 16px mobile
- **Columns**: 12 columns at ≥1024px, 6 columns at 768–1023px, 4 columns at 375–767px
- **Column gap**: 24px desktop, 16px mobile
- **Prose width**: 65ch maximum, regardless of grid column allocation

Breakpoints (Tailwind defaults are fine):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Border, radius, shadow

- **Border weight**: 1px. Only.
- **Border style**: solid. Only.
- **Radius**: 4px. Only. Applied to cards, buttons, form inputs. Never to images. Never to the page itself.
- **Shadow**: one shadow value, used only for popovers and dropdowns. Flat by default. No shadow on cards. No shadow on the page.

### Motion

- Hover transitions: 150ms ease-out
- Layout transitions (nav open/close, accordion if any): 250ms ease-in-out
- Page transitions: none in v1 (no view transitions API)
- `prefers-reduced-motion: reduce` disables all transitions except instantaneous state changes (active, focus). Document this in the accessibility statement.

## Component principles

### Buttons

Three variants: primary, secondary, ghost. No fourth.

- **Primary**: solid accent background, accent-ink text. Used for the single most important action on a page. Maximum one per visible region.
- **Secondary**: bordered, no fill, ink text. Used for second-most-important actions.
- **Ghost**: no border, no fill, ink text with hover background. Used for repeated actions (e.g., card "Read more" links that should not visually dominate).

Disabled state: 50% opacity, cursor not-allowed, no hover effects. Aria-disabled.

Loading state: not applicable in v1 (no client-side actions that need it).

Minimum hit area: 44×44px. Padding: `space-3 space-4` for default size.

### Links

Three variants:
- **In-prose**: ink color, underlined, accent on hover. Underline always present (do not rely on color alone).
- **Standalone**: ink color, no underline by default, underlined on hover. Used in nav, footer, and metadata strips.
- **External**: same as in-prose or standalone, with a discreet ↗ glyph following the link text. Always opens in same tab unless explicitly required otherwise.

Visited links are not styled differently. Visited-link styling implies a journey-tracking purpose that doesn't fit research content.

### Cards

Card patterns are defined per content type, but all share:

- 1px border, ink color (or border-strong for emphasis)
- 4px radius
- `space-4` padding desktop, `space-3` mobile
- Hover state: border darkens to ink-muted. No translation. No shadow.
- Entire card clickable if it represents one resource. Use a single `<a>` wrapping the card content, with proper aria-label.

**Card types:**

| Type | Required fields | Optional fields |
|---|---|---|
| Dataset | Name, source, variable, citation | DOI link, license, resolution |
| Paper | Title, authors, year, venue | DOI, abstract excerpt, file |
| Webinar | Title, date, speaker, length | Abstract, slides, recording link |
| News | Date, title, excerpt | Tags |
| Team member | Name, affiliation, role in 3MIP | Bio, links, photo (leads only, pending approval) |

### Tables

Used heavily on the Data page; sparingly elsewhere.

- Header row: border-strong bottom, semibold
- Body rows: border bottom (default border color), padding `space-3`
- Zebra striping: not used. Striping reduces scanability when columns are short.
- Sortable tables (Data page): button-styled column headers with aria-sort attribute. Sort handled by minimal client JS, ≤2KB.

### Callouts

For pull-out information, citations, or notes. Three variants:

- **Note**: surface background, border-left in accent-dim, ink text
- **Citation**: surface background, no border, small text, used for inline citation blocks
- **Caution**: surface background, border-left in warning, ink text. Rare.

### Forms (Participate page)

- Single-column layout. Labels above inputs.
- Required fields marked with asterisk and "(required)" in label text. Not relying on color.
- Errors appear inline below input, with aria-describedby, in error color.
- Submit button: primary variant, full-width on mobile, content-width on desktop.
- Success: redirect to a thank-you state on the same page, not a new page. Preserve form data in case of error.

### Figures and captions

Every figure (chart, diagram, map, signature viz) is wrapped in `<figure>`. Caption is `<figcaption>`. Captions include:

1. A descriptive sentence
2. A source line (where data or imagery is from)
3. For illustrative figures: an "Illustrative" prefix

Alt text on images. Long descriptions for complex figures (signature viz) provided as visible text immediately below the figure, not in alt attribute alone.

## Accessibility specifics

These extend the WCAG 2.2 AA baseline.

- **Heading order**: never skips. Page hierarchy follows content hierarchy.
- **Focus**: visible ring on every interactive element. Ring color: focus-ring token. Ring offset: 2px. Width: 2px.
- **Skip link**: first focusable element on every page. Hidden until focused. Jumps to `<main>`.
- **Landmarks**: `<header>`, `<main>`, `<footer>`, `<nav aria-label="primary">`. No redundant ARIA roles.
- **Alt text**: every `<img>`. Empty alt (`alt=""`) for purely decorative images, with explanation in code comment.
- **SVG**: decorative SVGs get `aria-hidden="true"`. Meaningful SVGs get `role="img"` and `<title>` element as first child. Complex SVGs (signature viz) also get a visible text alternative below.
- **Forms**: every input has an associated `<label>`. No placeholder-as-label. Required fields announced.
- **Color**: information never conveyed by color alone. Required fields use asterisk + "required". Active nav state uses underline + aria-current, not color alone.
- **Motion**: prefers-reduced-motion respected.
- **Language**: `<html lang="en">` on every page. Per-page language attribute if content is in another language (not in v1).

## Iconography

Use icons sparingly. When used:
- Lucide icons (lucide.dev) — open source, simple, consistent
- Inline SVG, not icon font
- Match current ink color
- `aria-hidden="true"` if decorative; `aria-label` if standalone

Avoid icon-only buttons in v1. Every icon has a text label.

## Imagery (the rare cases)

If a non-diagram image is needed (e.g., a real map of coastal Bangladesh on the Case page):

- Source: open data (OpenStreetMap, Natural Earth, NASA, Copernicus)
- Format: SVG preferred, then WebP, then PNG
- Loading: lazy, with explicit width and height attributes
- Alt text: descriptive
- Attribution: visible caption beneath the image
- License compliance: noted in the caption or in the Data/References page

No photos of people unless:
- Leadership trio, square format, monochrome treatment, with explicit permission `[PENDING BELL APPROVAL]`
- Never used for advisory committee in v1
- Never used for participants

## What this design system explicitly does not include

- **Brand identity in the marketing sense**: no logo design beyond a wordmark, no brand colors beyond the token system, no brand guidelines document. The wordmark is the design system.
- **Illustration system**: no custom illustrations, no spot illustrations, no character illustrations. SVG is for data, not decoration.
- **Theme variants**: light + dark mode are not "themes," they are accessibility responses. No light/dark toggle UI in v1.
- **Animation library**: no Framer Motion, no GSAP, no Lottie. Browser-native transitions only.
- **Decorative components**: no badges, no pills with bright colors, no gradient borders, no shimmer effects, no animated dots.

If a future contributor wants to add any of these, they require explicit Bell sign-off and a documented justification.
