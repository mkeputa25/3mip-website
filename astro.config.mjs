// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

/**
 * Site URL is a [PENDING BELL APPROVAL] item; using 3mip.org as the placeholder.
 * When Bell confirms the final domain, change `site` here and update Vercel DNS.
 */
const SITE_URL = "https://3mip.org";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: "static",
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap({
      // Exclude the design system page from the public sitemap.
      // Astro skips underscore-prefixed pages from the build entirely, so the
      // design system lives at /design (not /_design) and is gated via noindex
      // + sitemap filter + robots.txt disallow instead.
      filter: (page) => !page.includes("/design"),
    }),
  ],
  vite: {
    // The @tailwindcss/vite plugin types against Vite 6, but Astro's bundled
    // Vite has its own Plugin type symbol. Same plugin shape at runtime; the
    // mismatch is only at the type level. The `any` cast is scoped to this
    // one known incompatibility.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
  build: {
    // Trailing-slash policy matches IA.md: directory routes only.
    format: "directory",
    // Inline ALL CSS into each page's <head> rather than emitting external
    // <link> stylesheets. On a 14-page static site this eliminates the
    // render-blocking CSS request that Lighthouse flagged as the only
    // performance opportunity on /team/ and /dublin/ (their scoped styles
    // exceed Astro's 4KB auto-inline threshold). Trades repeat-visit CSS
    // caching for first-paint speed — the right call when LH >=95 is a hard
    // gate and the CSS is small in absolute terms. (Phase 6b.)
    inlineStylesheets: "always",
  },
  trailingSlash: "always",
});
