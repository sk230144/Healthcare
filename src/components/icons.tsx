import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  "aria-hidden": true,
} as const;

const stroke = {
  ...base,
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/* ── Service icons ─────────────────────────────────────────────── */

export const BarChartIcon = (props: IconProps) => (
  <svg {...base} fill="currentColor" {...props}>
    <rect x="3" y="13" width="4" height="8" rx="2" />
    <rect x="10" y="9" width="4" height="12" rx="2" />
    <rect x="17" y="3" width="4" height="18" rx="2" />
  </svg>
);

export const SearchIcon = (props: IconProps) => (
  <svg {...stroke} strokeWidth={2.2} {...props}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M15.5 15.5 21 21" />
    <path d="M7.5 10.5a3 3 0 0 1 3-3" />
  </svg>
);

export const MapPinIcon = (props: IconProps) => (
  <svg {...stroke} strokeWidth={2.2} {...props}>
    <path d="M12 22s7-6.6 7-12.3A7 7 0 0 0 5 9.7C5 15.4 12 22 12 22Z" />
    <circle cx="12" cy="9.8" r="2.6" fill="currentColor" stroke="none" />
  </svg>
);

export const MonitorIcon = (props: IconProps) => (
  <svg {...stroke} strokeWidth={2.2} {...props}>
    <rect x="3" y="4" width="18" height="12.5" rx="2" />
    <path d="M9 20.5h6M12 16.5v4" />
  </svg>
);

/* ── Clinic website icons ──────────────────────────────────────── */

export const ToothIcon = (props: IconProps) => (
  <svg {...stroke} strokeWidth={2} {...props}>
    <path d="M7.5 3C4.6 3 3 5.2 3 8c0 3.3 1.6 5.2 2.3 8.6.5 2.4 1 4.4 2.3 4.4 1.6 0 1.6-5.4 4.4-5.4s2.8 5.4 4.4 5.4c1.3 0 1.8-2 2.3-4.4C19.4 13.2 21 11.3 21 8c0-2.8-1.6-5-4.5-5-2 0-2.9 1.1-4.5 1.1S9.5 3 7.5 3Z" />
  </svg>
);

export const CalendarIcon = (props: IconProps) => (
  <svg {...stroke} strokeWidth={1.8} {...props}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4M8 13h.01M12 13h.01M16 13h.01M8 16.5h.01M12 16.5h.01" />
  </svg>
);

export const UsersIcon = (props: IconProps) => (
  <svg {...stroke} strokeWidth={1.8} {...props}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
    <circle cx="16.5" cy="7" r="2.8" />
    <path d="M17 12.5c2.6.3 4.5 2.5 4.5 5.2" />
  </svg>
);

export const HeartPulseIcon = (props: IconProps) => (
  <svg {...stroke} strokeWidth={1.8} {...props}>
    <path d="M12 20.5S3 15 3 8.8A4.8 4.8 0 0 1 12 6.3a4.8 4.8 0 0 1 9 2.5C21 15 12 20.5 12 20.5Z" />
    <path d="M6 12h3l1.5-2.5 2.5 5 1.5-2.5H18" />
  </svg>
);

export const DocumentIcon = (props: IconProps) => (
  <svg {...stroke} strokeWidth={1.8} {...props}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5M9 12.5h6M9 16h6" />
  </svg>
);

export const UserIcon = (props: IconProps) => (
  <svg {...base} fill="currentColor" {...props}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20.5c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5Z" />
  </svg>
);
