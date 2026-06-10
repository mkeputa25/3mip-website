# 3MIP launch checklist

Pre-flight before pointing the real domain at this site. Work top to bottom;
don't cut DNS over until everything in **Pre-launch**, **Technical**,
**Accessibility**, **Performance**, **SEO**, and **Privacy** is checked.

Items mirror `docs/CONTENT-INVENTORY.md` § Launch checklist, updated for the v2.1
build.

## Pre-launch content review

- [ ] Every `[VERIFY]` tag resolved or explicitly deferred — see `OPEN-QUESTIONS.md` § 2/§ 3
- [ ] Every remaining `[PENDING ...]` resolved by Bell — `OPEN-QUESTIONS.md` § 1
  - [ ] Final **domain** chosen (B1) → update `astro.config.mjs` `SITE_URL` + `public/robots.txt`
  - [ ] **Operating-phase funders** (B4): keep "not publicly announced" or add confirmed names
  - [ ] **GitHub repo URL** (B18) → update the footer link in `Footer.astro`
  - [ ] Session **day/room** for iEMSs (publishes ~June 15) → Home, `/dublin/`, Outputs
- [ ] Mario, Bell, Best, and Tierolf have each read every page
- [ ] At least one external reader (an advisor) has done a fresh read

## Technical

- [ ] `npm run build` passes clean, no warnings about content schemas
- [ ] `npm run check` (`astro check`) passes with zero errors
- [ ] Pages render correctly at **375px, 768px, 1024px, 1440px**
- [ ] Registration form: `PUBLIC_FORMSPREE_ENDPOINT` set in Vercel; submit a real
      test and confirm it arrives; confirm the inline success state shows
- [ ] `node scripts/check-links.mjs` — all internal links resolve
- [ ] External links spot-checked (a few forthcoming items may 404 by design —
      documented)
- [ ] `sitemap-index.xml` generated and lists the canonical pages (not `/design`)
- [ ] `robots.txt` correct (allows all; disallows `/design`)
- [ ] Custom 404 works (visit a nonexistent path)

## Accessibility

- [ ] `node scripts/audit.mjs` — axe reports **all routes clean** (it currently does)
- [ ] Manual keyboard traversal of every page (logged in `A11Y-AUDIT.md`)
- [ ] Screen-reader spot-check (VoiceOver) on Home, Case, Participate, Data
- [ ] Color contrast verified for every pair actually used (on `/design`)
- [ ] Reduced-motion: enable it (System Settings → Accessibility → Display →
      Reduce motion) and confirm the homepage figure is static and the ambience
      is gone

## Performance

- [ ] Lighthouse Accessibility ≥ 95 — currently **1.0** on every route
- [ ] Lighthouse Best Practices ≥ 95 — currently **1.0**
- [ ] Lighthouse SEO ≥ 95 — currently **1.0**
- [ ] Lighthouse Performance ≥ 95 — **9/10 routes ≥ 0.98; `/team/` 0.93**,
      documented in `A11Y-AUDIT.md` (web-font LCP on the longest page under
      throttled simulation; fine on real connections)
- [ ] Font payload sane (Fraunces + Geist, preloaded)
- [ ] No layout shift (CLS 0) — verified
- [ ] Team photos sized for their display slot

## SEO & social

- [ ] Each page has a unique `<title>`, meta description, canonical URL
- [ ] Open Graph + Twitter cards preview correctly on **Twitter/X, LinkedIn,
      Slack** (paste a link into each)
- [ ] `public/og-default.png` is the current brand image (regenerate with
      `node scripts/export-assets.mjs && npm run build` if the logo/hero changed)
- [ ] JSON-LD validates (paste a page into the Google Rich Results test)

## Privacy & legal

- [ ] Privacy notice live, linked from the footer; wording finalized with Bell
- [ ] Accessibility statement live; finalized with Bell
- [ ] No third-party trackers (check the browser DevTools Network tab — only your
      own domain + the Formspree POST on submit)
- [ ] Footer license note correct (CC BY 4.0 content, MIT code)

## Operational (DNS day)

- [ ] Vercel deploy from `main` verified on the preview URL first
- [ ] Custom domain added in Vercel; DNS records applied at the registrar
- [ ] SSL certificate active (Vercel issues automatically)
- [ ] `www` → apex (or chosen canonical) redirect configured
- [ ] `astro.config.mjs` `SITE_URL` matches the real domain (rebuild after change)
- [ ] Email forwarding for the project address set up, pointing to current
      coordinator

## Communication

- [ ] Old Weebly site set to **301 redirect** to the new domain (or a clear notice)
- [ ] Weebly content **archived** (export/screenshot) before taking it down
- [ ] Email to registered participants announcing the new site
- [ ] iEMSs Dublin presenters told the new domain ≥ 60 days before July 2026
- [ ] Repo access handed to the post-June-2026 maintainer; they've read
      `MAINTAINERS.md`
