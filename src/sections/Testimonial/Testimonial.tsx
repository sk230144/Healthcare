import testimonialThumb from "../../assets/landing/testimonial-thumb.webp";
import { PlayButton } from "../../components/PlayButton/PlayButton";
import { LINKS } from "../../data/landing";
import "./Testimonial.css";

/** Doctor website video card — Figma 2654:395–2654:398. */
export function Testimonial() {
  return (
    <section className="testimonial" aria-label="Client website video">
      <div className="testimonial__inner">
        <div className="testimonial__card">
          <img
            src={testimonialThumb}
            width={800}
            height={386}
            alt="Website designed for Dr. Sambuddha Dhar, Neurosurgeon, Silchar"
          />
          <PlayButton variant="split" label="Play the Dr. Sambuddha Dhar website video" videoUrl={LINKS.testimonialVideo} />
        </div>
      </div>
    </section>
  );
}
