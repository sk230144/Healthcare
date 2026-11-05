import { CarouselArrows } from "../../components/CarouselArrows/CarouselArrows";
import { PROCESS_STEPS } from "../../data/landing";
import "./Process.css";

interface ProcessProps {
  onPrev: () => void;
  onNext: () => void;
}

/**
 * Chevron row (Figma 2653:274 / 2653:278) + the 8 numbered steps (2653:287–2653:302).
 * The chevrons sit here in the design; they scroll the hospitals carousel above.
 */
export function Process({ onPrev, onNext }: ProcessProps) {
  return (
    <section className="process" aria-label="How we work">
      <CarouselArrows variant="plain" label="hospital" onPrev={onPrev} onNext={onNext} className="process__arrows wrap" />

      <ol className="process__steps">
        {PROCESS_STEPS.map((lines, i) => (
          <li key={i} className="process__step">
            <span className="process__num" aria-hidden="true">
              {i + 1}
            </span>
            <p>
              {lines.map((line, j) => (
                <span key={j} className="process__line">
                  {line}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
