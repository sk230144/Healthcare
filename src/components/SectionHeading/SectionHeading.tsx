import type { CSSProperties, ReactNode } from "react";

type Variant = "gradient" | "blue" | "muted";

interface SectionHeadingProps {
  children: ReactNode;
  variant?: Variant;
  /** Text-box width from Figma; controls where lines wrap. */
  width?: number;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

/** Centered section title in one of the three heading styles used in the design. */
export function SectionHeading({
  children,
  variant = "gradient",
  width,
  id,
  className = "",
  style,
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`section-heading section-heading--${variant} ${className}`.trim()}
      style={{ maxWidth: width, ...style }}
    >
      {children}
    </h2>
  );
}
