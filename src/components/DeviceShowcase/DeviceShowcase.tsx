import { LaptopMockup } from "../LaptopMockup/LaptopMockup";
import { PhoneMockup } from "../PhoneMockup/PhoneMockup";
import "./DeviceShowcase.css";

/** Laptop + phone composition. Device positions are set by CSS variables here. */
export function DeviceShowcase() {
  return (
    <section className="devices" aria-label="Example clinic website and growth results">
      <LaptopMockup />
      <PhoneMockup />
    </section>
  );
}
