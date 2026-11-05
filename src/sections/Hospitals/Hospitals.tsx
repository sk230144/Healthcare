import type { Ref } from "react";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { HOSPITALS } from "../../data/landing";
import "./Hospitals.css";

interface HospitalsProps {
  /** Scrollable track, so arrow buttons elsewhere on the page can drive it. */
  trackRef?: Ref<HTMLUListElement>;
}

/** "Other Hospital's Accross India…" card carousel — Figma 2653:230–2653:277. */
export function Hospitals({ trackRef }: HospitalsProps) {
  return (
    <section className="hospitals" aria-labelledby="hospitals-title">
      <SectionHeading id="hospitals-title" variant="blue" width={268}>
        Other Hospital’s Accross India We Serve Our Services
      </SectionHeading>

      <ul className="hospitals__track" ref={trackRef}>
        {HOSPITALS.map(({ name, image, imagePosition, logo }) => (
          <li key={name} className="hospital-card">
            <img
              className="hospital-card__photo"
              src={image}
              alt={`${name.replace(/,$/, "")} building`}
              style={{ objectPosition: imagePosition }}
            />
            <div className="hospital-card__info">
              {logo && (
                <span className="hospital-card__logo" style={{ width: logo.width, height: logo.height }}>
                  <img
                    src={logo.src}
                    alt=""
                    style={logo.crop ? { position: "absolute", maxWidth: "none", ...logo.crop } : undefined}
                  />
                </span>
              )}
              <span className="hospital-card__name">{name}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
