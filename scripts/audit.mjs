/**
 * Phase 6 accessibility audit — axe-core via Playwright over the built site.
 *
 * Run:  npm run build && node scripts/audit.mjs
 * Requires devDeps: playwright (chromium installed), axe-core.
 *
 * Serves dist/ on :4399, runs axe (WCAG 2.x A/AA + 2.2 AA tags) on every
 * route, prints violations grouped by page, exits non-zero if any are found.
 * Also writes a keyboard-traversal trace (first 25 tab stops per page) to
 * stdout for A11Y-AUDIT.md.
 */
import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { extname, join } from "node:path";
import { chromium } from "playwright";

const DIST = new URL("../dist", import.meta.url).pathname;
const PORT = 4399;
const ROUTES = [
  "/", "/about/", "/case-bangladesh/", "/data/", "/participate/",
  "/team/", "/outputs/", "/news/", "/contact/", "/dublin/",
  "/privacy/", "/accessibility/", "/404.html",
];

const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".png": "image/png", ".xml": "application/xml", ".woff2": "font/woff2", ".txt": "text/plain" };

const server = createServer((req, res) => {
  let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = join(DIST, path);
  if (path.endsWith("/")) file = join(file, "index.html");
  if (!existsSync(file)) { res.writeHead(404); res.end("404"); return; }
  res.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
  res.end(readFileSync(file));
}).listen(PORT);

const axeSource = readFileSync(new URL("../node_modules/axe-core/axe.min.js", import.meta.url), "utf8");
const browser = await chromium.launch();
const page = await browser.newPage();

let totalViolations = 0;
for (const route of ROUTES) {
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "load" });
  await page.evaluate(axeSource);
  const result = await page.evaluate(() =>
    axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"] } }),
  );
  if (result.violations.length === 0) {
    console.log(`OK   ${route}`);
  } else {
    totalViolations += result.violations.length;
    console.log(`FAIL ${route}`);
    for (const v of result.violations) {
      console.log(`  [${v.impact}] ${v.id}: ${v.help}`);
      for (const n of v.nodes.slice(0, 3)) console.log(`    ${n.target.join(" ")}`);
    }
  }

  // Keyboard trace: first 25 tab stops.
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "load" });
  const stops = [];
  for (let i = 0; i < 25; i++) {
    await page.keyboard.press("Tab");
    const desc = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body) return null;
      const text = (el.getAttribute("aria-label") || el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 40);
      return `${el.tagName.toLowerCase()}${el.className && typeof el.className === "string" ? "." + el.className.split(" ")[0] : ""} "${text}"`;
    });
    if (!desc) break;
    if (stops.includes(desc)) break;
    stops.push(desc);
  }
  console.log(`  tab-order: ${stops.join(" → ") || "(none)"}\n`);
}

await browser.close();
server.close();
console.log(totalViolations === 0 ? "\nAXE: all routes clean." : `\nAXE: ${totalViolations} violation group(s).`);
process.exit(totalViolations === 0 ? 0 : 1);
