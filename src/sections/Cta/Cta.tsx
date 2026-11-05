import { LINKS } from "../../data/landing";
import "./Cta.css";

/** Green "Book a Website Strategy Call" band — Figma 2648:3, 2648:138, 2648:139. */
export function Cta() {
  return (
    <section className="cta" id="contact" aria-labelledby="cta-title">
      <div className="cta__inner">
        <h2 id="cta-title" className="cta__title">
          Book a Website Strategy Call with <br />
          Our Experts!
        </h2>
        <a className="cta__button" href={LINKS.strategyCallForm}>
          Fill the Form
        </a>
      </div>
    </section>
  );
}
