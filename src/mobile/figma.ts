import type { CSSProperties } from "react";

/**
 * Pixel-replica helpers for the Figma mobile frame (2648:2, 402 × 10674).
 *
 * On phones the root font-size is set so that 1rem = 10 design px at any
 * screen width (see MobileLanding.css), so every Figma coordinate can be
 * used as-is: at(x, y, w, h) with values copied straight from the design.
 */
export const FRAME_WIDTH = 402;
export const FRAME_HEIGHT = 10674;

/** Design px → rem. */
export const r = (px: number) => `${+(px / 10).toFixed(4)}rem`;

/** Absolute box at Figma coordinates (x, y, width, height), in design px. */
export function at(x: number, y: number, w?: number, h?: number): CSSProperties {
  return {
    position: "absolute",
    left: r(x),
    top: r(y),
    ...(w !== undefined && { width: r(w) }),
    ...(h !== undefined && { height: r(h) }),
  };
}
