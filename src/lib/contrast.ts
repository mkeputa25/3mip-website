/**
 * WCAG 2.2 contrast ratio calculator.
 *
 * Used by the design system showcase page to render the measured ratio
 * next to every color-token pair we actually use. If a pair fails its
 * intended threshold (AA 4.5:1 body, AAA 7:1 body, AA Large 3:1, etc.),
 * the swatch is annotated FAIL and someone has to darken or lighten.
 *
 * Inputs: hex strings ("#RRGGBB", with or without leading #, case-insensitive).
 * Output: ratio rounded to 2 decimals (e.g., 12.83).
 *
 * Per WCAG 2.x: ratio = (Llighter + 0.05) / (Ldarker + 0.05), where L is the
 * relative luminance.
 */

function clamp01(n: number): number {
  return Math.min(1, Math.max(0, n));
}

function hexToRgb(hex: string): [number, number, number] {
  const normalized = hex.trim().replace(/^#/, "");
  if (normalized.length !== 6) {
    throw new Error(`Expected 6-digit hex, got "${hex}"`);
  }
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  if ([r, g, b].some((v) => Number.isNaN(v))) {
    throw new Error(`Invalid hex "${hex}"`);
  }
  return [r, g, b];
}

/** Per WCAG 2.x relative luminance. */
function relativeLuminance([r, g, b]: [number, number, number]): number {
  const channel = (c: number): number => {
    const cs = clamp01(c / 255);
    return cs <= 0.03928 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/** Contrast ratio between two hex colors. Rounded to 2 decimals. */
export function contrastRatio(fg: string, bg: string): number {
  const L1 = relativeLuminance(hexToRgb(fg));
  const L2 = relativeLuminance(hexToRgb(bg));
  const [light, dark] = L1 > L2 ? [L1, L2] : [L2, L1];
  const raw = (light + 0.05) / (dark + 0.05);
  return Math.round(raw * 100) / 100;
}

/**
 * Classify a ratio against WCAG 2.2 thresholds.
 *  - body text: 4.5:1 (AA), 7:1 (AAA)
 *  - large text (≥18pt or ≥14pt bold): 3:1 (AA), 4.5:1 (AAA)
 *  - non-text UI (focus rings, interactive borders): 3:1 minimum.
 */
export function classify(
  ratio: number,
  kind: "body" | "large" | "ui" = "body",
): { level: "AAA" | "AA" | "AA-Large" | "FAIL"; passes: boolean } {
  const thresholds = {
    body: { AAA: 7, AA: 4.5 },
    large: { AAA: 4.5, AA: 3 },
    ui: { AAA: 4.5, AA: 3 },
  } as const;
  const t = thresholds[kind];
  if (ratio >= t.AAA) return { level: "AAA", passes: true };
  if (ratio >= t.AA) return { level: "AA", passes: true };
  return { level: "FAIL", passes: false };
}
