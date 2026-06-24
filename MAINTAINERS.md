# Maintaining the 3MIP website

**This guide is for whoever keeps the site updated after Mario leaves Cornell
in June 2026. It assumes you have never used Astro and don't want to learn it.**

You will not write code. You will copy an example, change the words, save the
file, and the website updates itself. That's it. Every task below is a recipe.

If something here doesn't work, don't panic and don't start changing things at
random — jump to **§9 When something breaks**.

---

## 1. What this site is, and is not

- It **is** a normal website whose text lives in plain text files you can edit in
  any editor (even TextEdit or the editor on GitHub.com).
- It **is not** a system with a login/admin panel like Wordpress or Weebly. There
  is no "dashboard." You edit a file, save it, and the site rebuilds.
- Content you'll touch: **news items, webinars, papers, team members.** Each is one
  small file in a folder.
- Everything else (page layouts, colors, the homepage figure) is built once and
  you should leave it alone — see **§10 What NOT to touch**.

## 2. Who to ask for what

| You need… | Ask… |
|---|---|
| Sign-off on wording, a new person, a funder name, the logo, the domain | **Andrew Bell** (lead PI) |
| The site to actually go live / the domain / Vercel access | Whoever holds the **Vercel** account (set at launch) |
| Something is broken in the code | A **developer** — post the error text; the repo is on **GitHub** |
| The original "why" behind a decision | The `DECISIONS-V2.md` file in the repo |

You never need to invent facts. If a fact isn't already on the site or in
`docs/FACTS.md`, ask Bell before publishing it.

## 3. How editing works (the one thing to understand)

The site lives in a **GitHub repository**. Editing happens one of two ways:

- **Easy (recommended):** edit files directly on **GitHub.com** in the browser.
  Open the file, click the pencil ✏️, change the text, scroll down, click
  **Commit changes**. The site rebuilds and updates in 1–2 minutes.
- **Local:** if a developer set you up with the project on your computer, edit the
  file, save, and run `npm run dev` to preview. Most maintainers won't need this.

Everything below tells you **which file** to edit and **what to put in it**.

The top part of each file, between the two `---` lines, is called **frontmatter**.
It's a list of `label: value` pairs. Keep the labels exactly as shown; change only
the values. Put text with a colon or special characters inside "quotes".

---

## 4. Adding a news item

**Folder:** `src/content/news/`

1. Copy an existing file there, e.g. `2025-10-launch.md`.
2. Name the new file `YYYY-MM-short-title.md` — for example
   `2026-07-dublin-recap.md`. Lowercase, words joined by hyphens.
3. Put this inside, changing the values:

```markdown
---
date: 2026-07-20
title: "3MIP synthesis presented at iEMSs Dublin"
excerpt: "The first public synthesis of 3MIP results was presented at iEMSs 2026 in Dublin. Recordings and slides will follow on the Outputs page."
tags:
  - conference
---
```

- `date` — `YYYY-MM-DD`. Controls the order (newest first).
- `title` — keep under ~120 characters.
- `excerpt` — 1–3 sentences; this is what shows on the News page.
- `tags` — optional; one per line after a `- `.

**Verify:** open the live News page after ~2 minutes; your item is at the top.
The RSS feed updates automatically.

> Want a full article page, not just an excerpt? Add `fullPost: true` to the
> frontmatter and write the article body **below** the closing `---` in normal
> Markdown. A "read more" link will appear.

## 5. Adding a webinar

**Folder:** `src/content/webinars/`

Copy `2026-05-bell.md` and adjust:

```markdown
---
date: 2026-09-01
title: "September Webinar Presentation"
recordingUrl: "https://drive.google.com/file/d/PASTE_FILE_ID/view"
lengthMinutes: 45
---
```

- `title` — the project names webinars by month, e.g. "September Webinar
  Presentation".
- `speakers` — list the presenter(s); shown under the title as
  "Name (Affiliation)". Format:
  ```yaml
  speakers:
    - name: Jane Researcher
      affiliation: University of Somewhere
  ```
- `recordingUrl` — paste the Google Drive share link. The card shows a play
  poster; clicking it plays the video **inline on the site** (the visitor is
  not sent to Google Drive). **The Drive file must be shared "anyone with the
  link"** or it won't embed.
- `lengthMinutes`, `abstract` — optional.
- `poster` (optional) — if you have a real still image from the talk, put the
  image in `public/webinars/` and add `poster: webinars/your-file.jpg`. Otherwise
  the designed play-poster shows automatically.

## 6. Adding a publication / working paper

**Folder:** `src/content/papers/` (empty until the first paper)

Create `surname-year-keyword.md`:

```markdown
---
title: "The full title of the paper"
authors:
  - "Bell, A. R."
  - "Best, K."
year: 2026
venue: "Climatic Change"
abstract: "One paragraph summary, optional."
doi: "https://doi.org/10.xxxx/xxxxx"
preprintUrl: "https://…"
related3MIPCase: "bangladesh"
---
```

Only `title`, `authors`, and `year` are required; the rest are optional. The paper
appears on the Outputs page automatically.

## 7. Adding or updating a team member

**Folder:** `src/content/team/` — one file per person.

```markdown
---
name: "Jane Researcher"
surname: "Researcher"
affiliation: "University of Somewhere"
role: "advisor"
shortRole: "Migration econometrics advisor."
institutionalUrl: "https://…"
---
```

- `role` must be exactly one of: `co-lead`, `project-management`, `advisor`,
  `domain-expert`. That decides which section the person appears in.
- `surname` is used to sort the advisor and expert lists alphabetically.
- **Advisors and domain experts** show as a one-line row (name, affiliation,
  `shortRole`). Keep `shortRole` to one short phrase.
- **Co-leads and project management** show as a full card. For those you can add:
  - `email`, `personalUrl`, `institutionalUrl`
  - `photo: team/filename.jpg` — first put the image in `public/team/`. Use a
    roughly **square** photo, head-and-shoulders. If you skip `photo`, the card
    shows cleanly without one.
  - a longer bio: write it as normal text **below** the closing `---`.
  - `publications:` — see `bell.md` for the format.

**To remove someone:** delete their file. **To rename:** change the `name` value.

## 8. Editing existing page text

The headline text on the standard pages (About, Case, Participate, etc.) lives in
the page files under `src/pages/` (e.g. `about.astro`). You **can** edit the
sentences between the tags — find the words on the live site, search the file for
them, change them, save.

**Safe to touch:** the visible sentences and headings.
**Leave alone:** anything that looks like code — lines with `import`, `<`, `{`,
`}`, `class=`, or `---` fences. If you're unsure, change one word, save, and check
the preview before doing more.

Anything tagged `[VERIFY]` or `[PENDING ...]` on the site is a known unconfirmed
fact — see `OPEN-QUESTIONS.md`. Replace it only with a confirmed fact, then delete
the tag.

## 9. Deploying (how your change goes live)

You don't run a deploy. When you commit a change on GitHub:

1. Vercel notices and **builds** the site (1–2 minutes).
2. If the build passes, it **goes live** at the real domain automatically.
3. If the build **fails**, your change does **not** go live (the old version stays
   up — good). You'll get an email from Vercel/GitHub. See §10.

To check it worked: wait 2 minutes, open the live site, hard-refresh
(Cmd/Ctrl+Shift+R).

## 10. When something breaks

Almost always it's a typo in a content file. The build fails **safely** — the live
site keeps the previous version. To fix:

1. Read the error email / the red ✗ on GitHub. It names the **file** and usually
   the **field**.
2. Open that file. Compare it to a working sibling file in the same folder.
   Common causes:
   - A missing or extra `---` fence line.
   - A `date` that isn't `YYYY-MM-DD`.
   - Text with a colon `:` or quote that isn't wrapped in `"quotes"`.
   - A `role:` that isn't one of the four allowed words.
   - Indentation under a list (use two spaces + `- `).
3. Fix it, commit again. The build re-runs.

If you can't see the problem in 10 minutes, **revert your change** (on GitHub, open
the file's history and restore the previous version) and ask a developer with the
error text. Never force anything.

## 11. What NOT to touch

Leave these alone unless a developer is helping you:

- Anything in `src/components/`, `src/layouts/`, `src/lib/`, `src/styles/`.
- `astro.config.mjs`, `tailwind.config.*`, `tsconfig.json`, `package.json`,
  `content.config.ts`.
- The `.github/` folder.
- The homepage signature figure code (`SignatureViz.astro`).

Editing these can break the whole site, and the breakage may not be obvious.

## 12. Domain renewal

- **Domain:** `3mip-project.com` (production). Canonical host is the apex; the
  `www.` host should be configured in Vercel to redirect to it (see README §
  "Domain & canonical host").
- **Registered to / paid by:** `[fill in at launch — owner + renewal date +
  payment method]`.
- Set a calendar reminder ~1 month before the renewal date. A lapsed domain takes
  the whole site offline.

## 13. Annual review checklist (each September, before iEMSs)

- [ ] Conference/session dates on the home page and `/dublin/` are current.
- [ ] The webinar list reflects the past year's webinars.
- [ ] Team page is current (departures, new advisors) — check with Bell.
- [ ] Any `[VERIFY]` / `[PENDING]` tags still on the site are resolved or still
      genuinely pending (see `OPEN-QUESTIONS.md`).
- [ ] The domain is not within 2 months of expiry (§12).
- [ ] Open the site on a phone and a laptop; click through every page once.
- [ ] Submit one test registration (§14) to confirm the form still delivers.

## 14. The registration form

The "Register" form on the **Participate** page is handled by **Formspree**
(free tier). There is no database and no admin panel — it works like this:

- **Where submissions go:** each registration arrives as an **email from
  Formspree to mkeputa25@gmail.com**. That inbox is where you read and act on
  them.
- **How the form knows where to send:** the Formspree endpoint is set as a
  **Vercel environment variable**, `PUBLIC_FORMSPREE_ENDPOINT` — **not** in the
  code. (Vercel → the `3mip-website` project → Settings → Environment
  Variables.) The site reads it at build time.
- **The email inbox is the system of record.** The Formspree free tier only
  archives submissions for **30 days** in its own dashboard, so do not rely on
  the dashboard as storage — keep the emails (or forward them somewhere
  durable).
- **To change the destination address** (e.g. when coordination passes to
  someone new): in the Formspree dashboard, add the new person's address as a
  **second linked email** on the form, have them click Formspree's verification
  email, then **remove the old address**. That's it — **no code change and no
  redeploy** are needed for an address change. (You'd only touch the Vercel env
  var if you switched to a brand-new Formspree form with a different endpoint.)
