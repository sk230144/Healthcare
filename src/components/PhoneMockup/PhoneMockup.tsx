import { useId } from "react";
import { UserIcon } from "../icons";
import "./PhoneMockup.css";

interface PhoneMockupProps {
  enquiriesGrowth?: string;
  trafficGrowth?: string;
  rating?: number;
  /** Bar heights for the enquiries chart, as percentages (0–100). */
  bars?: number[];
}

const DEFAULT_BARS = [10, 18, 28, 42, 60, 78, 100];

/** Website-traffic line, in the trend SVG's 120 × 50 viewBox. */
const TREND_POINTS: [number, number][] = [
  [2, 46], [16, 36], [28, 40], [42, 28], [54, 32],
  [68, 20], [80, 24], [94, 12], [106, 15], [118, 4],
];
const TREND_LINE = "M" + TREND_POINTS.map(([x, y]) => `${x} ${y}`).join(" L");

/** Phone showing growth stats and Google Reviews (decorative mockup). */
export function PhoneMockup({
  enquiriesGrowth = "+210%",
  trafficGrowth = "+185%",
  rating = 4.8,
  bars = DEFAULT_BARS,
}: PhoneMockupProps) {
  const gradientId = useId();

  return (
    <div className="phone">
      <div className="phone__screen">
        <div className="stat">
          <p className="stat__label">Patient Enquiries</p>
          <p className="stat__value">
            {enquiriesGrowth} <span aria-hidden="true">↗</span>
          </p>
          <div className="bars" aria-hidden="true">
            {bars.map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        <div className="stat">
          <p className="stat__label">Website Traffic</p>
          <p className="stat__value">
            {trafficGrowth} <span aria-hidden="true">↗</span>
          </p>
          <svg className="trend" viewBox="0 0 120 50" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#22b26b" stopOpacity=".35" />
                <stop offset="1" stopColor="#22b26b" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${TREND_LINE} L118 50 L2 50 Z`} fill={`url(#${gradientId})`} />
            <path
              d={TREND_LINE}
              fill="none"
              stroke="#22b26b"
              strokeWidth={2.5}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <circle cx="118" cy="4" r="3" fill="#22b26b" />
          </svg>
        </div>

        <div className="reviews">
          <div className="reviews__row">
            <span className="reviews__avatar">
              <UserIcon />
            </span>
            <span className="reviews__score">{rating.toFixed(1)}</span>
          </div>
          <div className="reviews__stars" role="img" aria-label={`Rated ${rating} out of 5`}>
            ★★★★★
          </div>
          <p className="reviews__label">Google Reviews</p>
        </div>
      </div>
    </div>
  );
}
