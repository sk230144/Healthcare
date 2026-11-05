import "./CarouselArrows.css";

interface CarouselArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  /** "plain": bare chevrons. "boxed": rounded-square buttons. */
  variant: "plain" | "boxed";
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  label: string;
  className?: string;
}

export function CarouselArrows({
  onPrev,
  onNext,
  variant,
  prevDisabled,
  nextDisabled,
  label,
  className = "",
}: CarouselArrowsProps) {
  return (
    <div className={`arrows arrows--${variant} ${className}`.trim()}>
      <button
        type="button"
        className="arrows__btn arrows__btn--prev"
        onClick={onPrev}
        disabled={prevDisabled}
        aria-label={`Previous ${label}`}
      >
        <span aria-hidden="true">&lt;</span>
      </button>
      <button
        type="button"
        className="arrows__btn"
        onClick={onNext}
        disabled={nextDisabled}
        aria-label={`Next ${label}`}
      >
        <span aria-hidden="true">&gt;</span>
      </button>
    </div>
  );
}
