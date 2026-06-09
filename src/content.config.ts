/**
 * Content collections — Zod-typed frontmatter for news, papers, webinars, team.
 *
 * Per docs/CONTENT-INVENTORY.md § Content Collections. Schemas are the v1
 * contract; new fields require explicit edit here.
 *
 * Astro 5 pattern: defineCollection with a glob loader. Markdown bodies are
 * accessed via render() on the rendered entry, so authors continue to write
 * plain Markdown in src/content/<collection>/<slug>.md with YAML frontmatter.
 */
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// News — short-form updates, reverse-chronological on /news/.
const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string().max(120),
    excerpt: z.string().max(300),
    tags: z.array(z.string()).optional(),
    /** If true, the markdown body is rendered as a full post page at /news/<slug>/. */
    fullPost: z.boolean().default(false),
  }),
});

// Papers — working papers, preprints, journal articles by participating teams.
// Empty in v1; structure exists so first paper drops in without retrofitting.
const papers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/papers" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number().int().min(2024).max(2100),
    venue: z.string().optional(),
    abstract: z.string().optional(),
    doi: z.string().url().optional(),
    preprintUrl: z.string().url().optional(),
    pdfUrl: z.string().url().optional(),
    related3MIPCase: z.enum(["bangladesh", "general"]).default("general"),
  }),
});

// Webinars — past webinars with abstracts, speakers, and recordings.
const webinars = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/webinars" }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    speakers: z
      .array(
        z.object({
          name: z.string(),
          affiliation: z.string(),
        }),
      )
      .min(1),
    lengthMinutes: z.number().int().positive().optional(),
    abstract: z.string().optional(),
    recordingUrl: z.string().url().optional(),
    slidesUrl: z.string().url().optional(),
  }),
});

// Team — leadership (full bios), advisory committee (one-line roles),
// project management. Rendered on /team/.
const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    /** Used for alphabetical sort on the advisory committee list. */
    surname: z.string(),
    affiliation: z.string(),
    role: z.enum(["co-lead", "advisor", "project-management", "domain-expert"]),
    /** One-line role description shown on the Team page. */
    shortRole: z.string(),
    /** Longer bio — typically only for co-leads. */
    bio: z.string().optional(),
    publications: z
      .array(
        z.object({
          citation: z.string(),
          doi: z.string().url().optional(),
        }),
      )
      .optional(),
    institutionalUrl: z.string().url().optional(),
    /** Personal/lab site, distinct from the institutional page (Phase 4D). */
    personalUrl: z.string().url().optional(),
    email: z.string().email().optional(),
    /** Path to a photo in /public/team/, e.g. "bell.webp". */
    photo: z.string().optional(),
  }),
});

export const collections = { news, papers, webinars, team };
