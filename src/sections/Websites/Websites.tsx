import { useState } from "react";
import { CarouselArrows } from "../../components/CarouselArrows/CarouselArrows";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { WEBSITE_SHOWCASE } from "../../data/landing";
import "./Websites.css";

/** "Some Websites we have designed…" slider — Figma 2653:303, 2653:324, 2653:325/328. */
export function Websites() {
  const [index, setIndex] = useState(0);
  const count = WEBSITE_SHOWCASE.length;
  const slide = WEBSITE_SHOWCASE[index];

  return (
    <section className="websites" aria-labelledby="websites-title">
      <SectionHeading id="websites-title" width={321} className="websites__title">
        Some Websites we have designed for <br />
        our Clients on recent deliveries
      </SectionHeading>

      <img
        key={slide.src}
        className="websites__slide"
        src={slide.src}
        width={slide.width}
        height={slide.height}
        alt={slide.alt}
      />

      <CarouselArrows
        variant="boxed"
        label="website"
        className="websites__arrows wrap"
        prevDisabled={index === 0}
        onPrev={() => setIndex((i) => Math.max(0, i - 1))}
        onNext={() => setIndex((i) => (i + 1) % count)}
      />
    </section>
  );
}
