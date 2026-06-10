/**
 * Last-updated helper.
 *
 * Per archive/v1/DECISIONS.md D12: footer "Last updated" date is the date of the most
 * recent git commit. Computed at build time only (this site has no SSR
 * routes); falls back to build date if git is unavailable (e.g., Vercel
 * shallow clones with --depth=1 if not configured).
 *
 * For per-page last-updated (a v2 feature), this function accepts an
 * optional file path and returns the last commit date for that file.
 */
import { execSync } from "node:child_process";

const FALLBACK_DATE = new Date().toISOString().slice(0, 10);

/**
 * Returns "YYYY-MM-DD" for the last commit on the repo, or for a specific
 * file if `path` is given. Returns today's date if git is not available or
 * the file has no history.
 */
export function getLastUpdated(path?: string): string {
  try {
    const args = ["log", "-1", "--format=%cd", "--date=short"];
    if (path) args.push("--", path);
    const out = execSync(`git ${args.join(" ")}`, {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    // Validate the shape so a stray output doesn't ship as garbage.
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : FALLBACK_DATE;
  } catch {
    return FALLBACK_DATE;
  }
}

/**
 * Long-form, locale-stable rendering of an ISO date for the footer.
 * "2026-05-28" -> "28 May 2026"
 */
export function formatLongDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  if (!y || !m || !d) return iso;
  return `${d} ${months[m - 1]} ${y}`;
}
