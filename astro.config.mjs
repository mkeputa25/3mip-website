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
  },
  trailingSlash: "always",
});
