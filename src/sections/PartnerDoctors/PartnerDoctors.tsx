import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { PARTNER_DOCTORS } from "../../data/landing";
import "./PartnerDoctors.css";

/** "A Few of Doctors we partner with…" — Figma 2653:357, 2653:380–2653:383. */
export function PartnerDoctors() {
  return (
    <section className="partners" aria-labelledby="partners-title">
      <SectionHeading id="partners-title" width={315}>
        A Few of Doctors we partner with for there marketing and digital presence and boost there visibility on Google
      </SectionHeading>

      <ul className="partners__track">
        {PARTNER_DOCTORS.map((doc) => (
          <li key={doc.name} className="doctor-card">
            <img
              className="doctor-card__photo"
              src={doc.photo}
              width={200}
              height={396}
              alt={`Portrait of ${doc.name}`}
              style={{ objectPosition: doc.photoPosition }}
            />
            <p className="doctor-card__name">{doc.name}</p>
            <p className="doctor-card__role">{doc.specialty}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
