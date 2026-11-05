import indiaMap from "../../assets/landing/india-map.png";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { PRESENCE_POINTS } from "../../data/landing";
import "./Presence.css";

/** "Services we cater to… Our Presence" — map + numbered points (Figma 2653:195–2653:213). */
export function Presence() {
  return (
    <section className="presence" aria-labelledby="presence-title">
      <SectionHeading id="presence-title" width={299}>
        Services we cater to clinics, Hospitals and Doctors Our Presence
      </SectionHeading>

      <div className="presence__body wrap wrap--wide">
        <img
          className="presence__map"
          src={indiaMap}
          width={356}
          height={374}
          alt="Map of India marking Yantra's client cities: Delhi, Noida, Gurgaon, Ahmedabad, Surat, Indore, Mumbai, Kolkata, Guwahati, Silchar, Bangalore and Kerala"
        />

        <ol className="presence__list">
          {PRESENCE_POINTS.map(({ text, width }, i) => (
            <li key={i} className="presence__item">
              <span className="presence__num" aria-hidden="true">
                {i + 1}
              </span>
              <p style={{ maxWidth: width }}>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
