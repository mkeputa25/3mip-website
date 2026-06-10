/**
 * Phase 6 asset exports (4D.10) — Playwright over the built site:
 *   1. public/og-default.png         1200×630 social card (then REBUILD so
 *                                    it ships in dist)
 *   2. assets-for-slides/signature-viz-3000px.png   the plate at 3000px wide
 *   3. assets-for-slides/signature-viz.pdf          single-page PDF
 *
 * Slides render the REDUCED-MOTION (static) state by mandate — the export
 * context emulates reducedMotion: 'reduce'.
 *
 * Run:  npm run build && node scripts/export-assets.mjs && npm run build
 */
import { createServer } from "node:http";
import { readFileSync, existsSync, mkdirSync } from "node:fs";
import { extname, join } from "node:path";
import { chromium } from "playwright";

const DIST = new URL("../dist", import.meta.url).pathname;
const ROOT = new URL("..", import.meta.url).pathname;
const PORT = 4398;
const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2" };

const server = createServer((req, res) => {
  let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = join(DIST, path);
  if (path.endsWith("/")) file = join(file, "index.html");
  if (!existsSync(file)) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
  res.end(readFileSync(file));
}).listen(PORT);

const browser = await chromium.launch();

// 1 — OG card: the home hero region at exactly 1200×630.
{
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, reducedMotion: "reduce" });
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle" });
  await page.screenshot({ path: join(ROOT, "public/og-default.png") });
  await page.close();
  console.log("og-default.png written (re-run npm run build so it ships).");
}

// 2 + 3 — the figure plate, static state, for Dublin decks.
{
  mkdirSync(join(ROOT, "assets-for-slides"), { recursive: true });
  const page = await browser.newPage({
    viewport: { width: 1500, height: 1400 },
    deviceScaleFactor: 2, // 1500 css px × 2 = 3000px output width
    reducedMotion: "reduce",
  });
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle" });
  const plate = page.locator(".viz-band").first();
  await plate.scrollIntoViewIfNeeded();
  await plate.screenshot({ path: join(ROOT, "assets-for-slides/signature-viz-3000px.png") });
  await page.pdf({
    path: join(ROOT, "assets-for-slides/signature-viz.pdf"),
    landscape: true,
    format: "A4",
    printBackground: true,
    pageRanges: "1",
  });
  await page.close();
  console.log("assets-for-slides/ exports written.");
}

await browser.close();
server.close();
