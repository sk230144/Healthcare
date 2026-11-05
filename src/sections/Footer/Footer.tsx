import ymLogo from "../../assets/landing/ym-logo.webp";
import wordmark from "../../assets/landing/yantra-wordmark.svg";
import { OFFICES, OTHER_SERVICES } from "../../data/landing";
import "./Footer.css";

/** Brand bar (Figma 2648:126) + green footer (2648:102). */
export function Footer() {
  return (
    <footer className="footer">
      <div className="brand">
        <img className="brand__logo" src={ymLogo} width={97} height={97} alt="" />
        <div className="brand__text">
          <img src={wordmark} width={174} height={26} alt="Yantramedia" />
          <span className="brand__agency">Agency</span>
        </div>
      </div>

      <div className="footer__main">
        <div className="footer__inner">
          <section className="footer__services" aria-labelledby="footer-services">
            <h2 id="footer-services" className="footer__heading">
              Other Services
            </h2>
            <ul>
              {OTHER_SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>

          <section className="footer__offices" aria-labelledby="footer-offices">
            <h2 id="footer-offices" className="footer__heading">
              Join us for a Coffee!
            </h2>
            {OFFICES.map((o) => (
              <address key={o.city} className="footer__office">
                <strong className="footer__heading">{o.city}</strong>
                {o.label}
                {o.address.map((line) => (
                  <span key={line}>
                    <br />
                    {line}
                  </span>
                ))}
              </address>
            ))}
          </section>
        </div>

        <p className="footer__copy">© All Rights Reserved to Yantra Media Company_2026.</p>
      </div>
    </footer>
  );
}
