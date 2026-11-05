import macbook from "../../assets/landing/macbook-doctors-near-me.webp";
import "./GooglePresence.css";

/** MacBook "Doctors Near Me" search + blue quote card — Figma 2653:385, 2653:387, 2653:388. */
export function GooglePresence() {
  return (
    <section className="google-presence">
      <div className="google-presence__inner">
        <div className="google-presence__laptop">
          <img
            src={macbook}
            width={1220}
            height={665}
            alt="MacBook showing Google results for “Doctors Near Me” with local clinics on the map"
          />
        </div>
        <p className="google-presence__card">
          A strong presence on google and proper seo can bring you more organic traffic calls, website visit’s and
          Enquiries, Boost your business 2X with productive Seo and <br />a patient friendly website.
        </p>
      </div>
    </section>
  );
}
