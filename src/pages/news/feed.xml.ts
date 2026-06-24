/**
 * RSS feed — /news/feed.xml
 *
 * Uses @astrojs/rss (first-party Astro package; added in Phase 4C and
 * documented in DECISIONS.md). Chosen over hand-rolled XML because feed
 * correctness — RFC-822 dates, XML escaping, valid GUIDs — matters and
 * fails silently in readers when wrong.
 *
 * Items link to the full post page when fullPost is true; otherwise to the
 * /news/ index anchored context (excerpt-only entries have no detail page).
 */
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const entries = (await getCollection("news")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  const site = context.site ?? new URL("https://3mip-project.com");

  return rss({
    title: "3MIP News",
    description:
      "Updates from the Mobility and Migration Modeling Intercomparison Project.",
    site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.excerpt,
      pubDate: entry.data.date,
      link: entry.data.fullPost ? `/news/${entry.id}/` : `/news/`,
      categories: entry.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
