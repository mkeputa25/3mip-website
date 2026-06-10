/**
 * Phase 6 link check — internal links verified against dist/, external
 * links inventoried (documented, not fetched: several legitimately 404
 * until live, e.g. the forthcoming Climatic Change collection).
 *
 * Run:  npm run build && node scripts/check-links.mjs
 * Exits non-zero on broken INTERNAL links only.
 */
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const DIST = new URL("../dist", import.meta.url).pathname;

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return htmlFiles(p);
    return name.endsWith(".html") ? [p] : [];
  });
}

const internalBroken = [];
const external = new Set();

for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, "utf8");
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = m[1];
    if (/^(mailto:|#|data:)/.test(url)) continue;
    if (/^https?:\/\//.test(url)) { external.add(url); continue; }
    const path = url.split("#")[0].split("?")[0];
    if (!path) continue;
    let target = join(DIST, path);
    const ok = existsSync(target) || existsSync(join(target, "index.html")) || existsSync(`${target}.html`);
    if (!ok) internalBroken.push(`${file.replace(DIST, "")} -> ${url}`);
  }
}

console.log(`External links (${external.size}) — verify manually / document:`);
[...external].sort().forEach((u) => console.log(`  ${u}`));
console.log(internalBroken.length ? `\nBROKEN internal links (${internalBroken.length}):` : "\nInternal links: all resolve.");
internalBroken.forEach((l) => console.log(`  ${l}`));
process.exit(internalBroken.length ? 1 : 0);
