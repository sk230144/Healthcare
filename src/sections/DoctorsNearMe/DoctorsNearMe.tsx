import doctorLaptop from "../../assets/landing/doctor-laptop.png";
import "./DoctorsNearMe.css";

/** Black "78% of people…" band — Figma 2653:347, 2653:346, 2653:345. */
export function DoctorsNearMe() {
  return (
    <section className="near-me">
      <div className="near-me__inner">
        <p className="near-me__text">
          78% of people near you searches by keyword <strong>*Doctors Near Me*</strong>
        </p>
        <img
          className="near-me__art"
          src={doctorLaptop}
          width={612}
          height={408}
          alt="Illustration of a smiling doctor on a laptop screen"
        />
      </div>
    </section>
  );
}
