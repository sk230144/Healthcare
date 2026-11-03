import doctorImg from "../../assets/doctor.png";
import { CalendarIcon, DocumentIcon, HeartPulseIcon, ToothIcon, UsersIcon } from "../icons";
import "./LaptopMockup.css";

const NAV_LINKS = ["Home", "About", "Services", "Doctors", "Contact"];

const QUICK_LINKS = [
  { label: "Book Appointment", Icon: CalendarIcon },
  { label: "Our Doctors", Icon: UsersIcon },
  { label: "Our Services", Icon: HeartPulseIcon },
  { label: "Patient Resources", Icon: DocumentIcon },
];

/** Laptop showing an example clinic website (decorative mockup). */
export function LaptopMockup() {
  return (
    <div className="laptop">
      <div className="laptop__lid">
        <div className="laptop__screen">
          <header className="site-nav">
            <span className="site-nav__logo">
              <ToothIcon />
              Your Clinic
            </span>
            <nav className="site-nav__links">
              {NAV_LINKS.map((link, i) => (
                <span key={link} className={i === 0 ? "is-active" : undefined}>
                  {link}
                </span>
              ))}
            </nav>
          </header>

          <div className="site-hero">
            <div className="site-hero__copy">
              <h2 className="site-hero__title">
                Expert Care
                <br />
                for a <em>Healthier</em>
                <br />
                <em>Tomorrow</em>
              </h2>
              <p className="site-hero__text">
                Personalised Treatment.
                <br />
                Advanced Technology.
                <br />
                Better Lives.
              </p>
            </div>
            <img
              className="site-hero__doctor"
              src={doctorImg}
              width={251}
              height={232}
              alt="Smiling doctor in a white coat with a stethoscope"
            />
          </div>

          <div className="site-cards">
            {QUICK_LINKS.map(({ label, Icon }) => (
              <div key={label} className="site-card">
                <Icon />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="laptop__base" aria-hidden="true" />
    </div>
  );
}
