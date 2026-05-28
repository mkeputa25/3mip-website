# 3MIP Website — Documentation Index

This folder contains everything Claude Code needs to build the 3MIP website in one pass. Read these files in the order listed below, then begin Phase 0 of the kickoff prompt.

## Read order (mandatory)

| # | File | What it is | Why it exists |
|---|---|---|---|
| 1 | `README.md` | This file. Index and read order. | So you know which file does what. |
| 2 | `BRIEF.md` | Project context, audiences, priorities, constraints, anti-patterns. | The "why" behind every decision. |
| 3 | `ANALYSIS.md` | Independent research on the project: who's involved, what the current site does well and badly, where 3MIP sits in the field. | So you understand what you're packaging, not just what to package. |
| 4 | `FACTS.md` | Verified facts, citations, dates, names, affiliations, grant numbers. | **Single source of truth.** Any factual claim not in this file must be tagged `[VERIFY]` inline. |
| 5 | `IA.md` | Information architecture, sitemap, navigation rationale, why pages are sequenced this way. | So you don't second-guess structural decisions. |
| 6 | `CONTENT-INVENTORY.md` | Page-by-page content specification. What's on every page, in what order, with what data. | The detailed spec for Phase 4. |
| 7 | `COPY-GUIDE.md` | Voice, register, examples of good vs. bad copy, ban list with replacements. | Voice consistency across 9 pages requires examples. |
| 8 | `DESIGN-PRINCIPLES.md` | Design rules with rationale, token system, accessibility requirements. | The reasoning behind the constraints. |
| 9 | `REFERENCES.md` | Reference sites with what to study on each. | So you don't waste research time. |

## How these relate

```
                    BRIEF.md
                       │
                       ▼
                  ANALYSIS.md ──────► what the project actually is
                       │
                       ▼
                   FACTS.md ────────► every verified claim, single source of truth
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
      IA.md      DESIGN-PRINCIPLES.md  COPY-GUIDE.md
        │              │              │
        └──────────────┴──────────────┘
                       │
                       ▼
              CONTENT-INVENTORY.md ──► page-by-page build spec
                       │
                       ▼
                  REFERENCES.md ─────► what to look at, not how to be inspired
```

## Files you will create

In the repo root (not in `docs/`):

- `PLAN.md` — phased build plan, output of Phase 0
- `DECISIONS.md` — design and architecture decisions, output of Phase 0
- `OPEN-QUESTIONS.md` — all `[VERIFY]` and `[PENDING BELL APPROVAL]` tags surfaced, output of Phase 6
- `A11Y-AUDIT.md` — accessibility audit results, output of Phase 6
- `README.md` — technical setup for Mario, output of Phase 7
- `MAINTAINERS.md` — copy-paste guide for the non-developer inheriting the site, output of Phase 7
- `LAUNCH-CHECKLIST.md` — pre-flight checklist, output of Phase 7
- `CONTRIBUTING.md` — for future code contributors, output of Phase 7

## Files you will not create

- Anything in `docs/` — these are inputs, not outputs.
- A separate `STYLE-GUIDE.md` — the design system showcase page at `/_design` is the style guide, rendered live.
- A separate `BRAND.md` — 3MIP does not have a brand identity in the marketing sense and should not pretend to.

## When in doubt

1. Check `FACTS.md` first.
2. Check `CONTENT-INVENTORY.md` for the page spec.
3. Check `COPY-GUIDE.md` for voice questions.
4. Check `DESIGN-PRINCIPLES.md` for visual questions.
5. If still ambiguous, ask Mario in the response — but state your default assumption and proceed.

Do not invent facts. Do not soften the register. Do not add features beyond v1 scope.
