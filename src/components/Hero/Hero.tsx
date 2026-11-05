import { DeviceShowcase } from "../DeviceShowcase/DeviceShowcase";
import { ServiceList } from "../ServiceList/ServiceList";
import "./Hero.css";

/** "Scale Your Healthcare Business" hero — Figma node 2652:183. */
export function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__wave" />
        <span className="hero__window" />
        <span className="hero__glow hero__glow--left" />
        <span className="hero__glow hero__glow--right" />
        <span className="hero__table" />
      </div>

      <div className="hero__inner">
        <section className="hero__copy">
          <h1 className="hero__title">
            <span className="hero__title-dark">Scale Your</span>
            <span className="hero__title-blue">Healthcare</span>
            <span className="hero__title-blue">Business</span>
          </h1>

          <p className="hero__lead">
            with Organic Marketing, SEO, Google Business Optimisation &amp;{" "}
            <span className="nowrap">High-Converting</span> Websites.
          </p>

          <ServiceList />
        </section>

        <DeviceShowcase />
      </div>
    </section>
  );
}
