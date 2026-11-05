import growthChart from "../../assets/landing/growth-chart.webp";
import "./GrowthBanner.css";

/** Black "Since 2020…" banner — Figma 2653:280, 2783:2, 2653:282. */
export function GrowthBanner() {
  return (
    <section className="growth">
      <div className="growth__inner">
        <p className="growth__text">
          Since 2020, we’ve helped <strong>45+ hospitals</strong> &amp; clinics across India achieve up to{" "}
          <strong>3X</strong> <strong>growth.</strong>
        </p>
        <img className="growth__chart" src={growthChart} width={520} height={347} alt="" />
      </div>
    </section>
  );
}
