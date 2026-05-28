/**
 * Stylized Bangladesh coastal silhouette as an SVG path.
 *
 * Design constraints (per docs/CONTENT-INVENTORY.md § Home § Section 3 spec):
 *  - Recognizable but not geographically precise.
 *  - Single, reusable path data string so the same outline appears in every
 *    panel of the signature visualization AND on the Case page map without
 *    diverging visually.
 *  - Drawn in viewBox 0 0 240 180 (panel-native coordinates).
 *
 * Shape rationale:
 *  - Northwest corner at Rajshahi-ish.
 *  - North border is roughly horizontal with a slight rise eastward (Sylhet).
 *  - East border angles inward then steps out — Tripura/Mizoram bulges.
 *  - Southeast point at Chittagong / Cox's Bazar.
 *  - South coast is intentionally jagged: Meghna estuary, Bhola, the Sundarbans
 *    delta. The bumps are what make the silhouette read as Bangladesh.
 *  - West border tapers up to the NW corner.
 *
 * Not satellite-accurate. Recognizable, schematic, intentional.
 */

export const BANGLADESH_PATH =
  // NW corner → N border (slight rise to Sylhet)
  "M 30 42 " +
  "L 64 34 L 102 30 L 140 28 L 178 32 L 210 38 L 226 50 " +
  // E border (with the Tripura bulge step)
  "L 224 70 L 234 88 L 226 104 L 238 122 L 232 140 L 244 158 " +
  // SE point (Chittagong / Cox's Bazar)
  "L 240 176 L 222 172 " +
  // South coast, west-bound, with delta indentations
  "L 210 178 L 198 170 L 184 178 L 168 169 L 154 178 L 138 170 " +
  "L 122 178 L 104 170 L 88 178 L 72 169 L 56 176 L 38 170 " +
  // SW → up the west border
  "L 26 154 L 22 128 L 28 100 L 22 76 L 28 56 " +
  // close
  "Z";

export const BANGLADESH_VIEWBOX = "0 0 240 180" as const;

/**
 * The viewBox is also published as four numbers for components that need to
 * compute coordinates relative to it (e.g., the signature-viz grid generator).
 */
export const BANGLADESH_BOUNDS = {
  x: 0,
  y: 0,
  width: 240,
  height: 180,
} as const;
