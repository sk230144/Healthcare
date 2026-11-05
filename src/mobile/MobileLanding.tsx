import { useRef, useState } from "react";
import carouselDots from "../assets/landing/carousel-dots.svg";
import fortisLogo from "../assets/landing/client-logo-1952.png";
import cureCareFacade from "../assets/landing/cure-care-facade.webp";
import dentist from "../assets/landing/dentist.webp";
import doctorLaptop from "../assets/landing/doctor-laptop.png";
import footerTexture from "../assets/landing/footer-texture.webp";
import growthChart from "../assets/landing/growth-chart.webp";
import heroPoster from "../assets/landing/hero-poster.webp";
import indiaMap from "../assets/landing/india-map.png";
import jjimsHospital from "../assets/landing/jjims-hospital.webp";
import jjimsLogo from "../assets/landing/jjims-logo.webp";
import lifesaveFacade from "../assets/landing/lifesave-facade.webp";
import lifesaveLogo from "../assets/landing/lifesave-logo.png";
import macbook from "../assets/landing/macbook-doctors-near-me.webp";
import playButton from "../assets/landing/play-button.svg";
import playEllipse from "../assets/landing/play-ellipse.svg";
import playTriangle from "../assets/landing/play-triangle.svg";
import seoVideoThumb from "../assets/landing/seo-video-thumb.webp";
import testimonialThumb from "../assets/landing/testimonial-thumb.webp";
import videoPlayIcon from "../assets/landing/video-play-icon.svg";
import websitesShowcase from "../assets/landing/websites-showcase.jpg";
import wordmark from "../assets/landing/yantra-wordmark.svg";
import ymLogo from "../assets/landing/ym-logo.webp";
import { LINKS, OTHER_SERVICES } from "../data/landing";
import { at, r } from "./figma";
import "./MobileLanding.css";

/* ────────────────────────────────────────────────────────────────────────────
   Pixel replica of Figma frame 2648:2 ("iPhone 16 Pro - 7").
   Every at(x, y, w, h) below is copied from the Figma node noted beside it;
   y values are page coordinates within the 402 × 10674 frame.
   ──────────────────────────────────────────────────────────────────────────── */

/** Play control: a link when a video URL exists, otherwise an inert button. */
function Play({ label, url, style, children }: { label: string; url?: string; style: React.CSSProperties; children: React.ReactNode }) {
  return url ? (
    <a className="m-play" href={url} target="_blank" rel="noreferrer" aria-label={label} style={style}>
      {children}
    </a>
  ) : (
    <button type="button" className="m-play" aria-label={label} style={style}>
      {children}
    </button>
  );
}

/** Text broken into Figma's exact lines (spaces kept for copy/paste and screen readers). */
function Lines({ lines }: { lines: React.ReactNode[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span className="m-line" key={i}>
          {line}
          {i < lines.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

/** Scroll a horizontal strip by one card. */
function nudge(el: HTMLElement | null, dir: 1 | -1, step: number) {
  el?.scrollBy({ left: dir * step * (parseFloat(getComputedStyle(document.documentElement).fontSize) / 10), behavior: "smooth" });
}

export function MobileLanding() {
  const hospitalsStrip = useRef<HTMLDivElement>(null);
  const [site, setSite] = useState(0);

  return (
    <div className="m-page">
      <main>
        {/* ── Hero — 2652:183 (flat artwork in Figma) ── */}
        <section aria-labelledby="m-hero-title">
          <h1 id="m-hero-title" className="visually-hidden">
            Scale Your Healthcare Business with Organic Marketing, SEO, Google Business Optimisation &amp;
            High-Converting Websites.
          </h1>
          <img src={heroPoster} alt="" style={at(0, 0, 406, 721)} />
        </section>

        {/* ── Clients — 2652:184 … 2652:194 ── */}
        <section aria-labelledby="m-clients">
          <h2 id="m-clients" className="m-h m-h--grad" style={at(43, 799, 323)}>
            <Lines lines={["Few of Our Clients we are", "working with over 40+", "Hospital’s Across India"]} />
          </h2>
          <div className="m-strip" style={at(0, 1005, 402, 115)}>
            <div style={{ position: "relative", width: r(1080), height: "100%" }}>
              <img src={fortisLogo} alt="Fortis Healthcare" style={at(52, 6, 184, 103)} />
              <img className="m-jj-logo" src={jjimsLogo} alt="" style={at(246, 18.02, 87.11, 74.98)} />
              <p className="m-jj-name" style={at(341, 25)}>
                Jeevan Jyoti Hospital
                <br />
                &amp; Research Center
              </p>
              <img src={lifesaveLogo} alt="Life Save Hospital" style={at(800, 27.5, 251, 60)} />
            </div>
          </div>
        </section>

        {/* ── Presence — 2653:195 … 2793:6 ── */}
        <section aria-labelledby="m-presence">
          <h2 id="m-presence" className="m-h m-h--grad" style={at(44, 1314, 299)}>
            <Lines lines={["Services we cater to", "clinics, Hospitals and", "Doctors Our Presence"]} />
          </h2>
          <img
            src={indiaMap}
            alt="Map of India marking client cities: Delhi, Noida, Gurgaon, Ahmedabad, Surat, Indore, Mumbai, Kolkata, Guwahati, Silchar, Bangalore and Kerala"
            style={at(24, 1457, 356, 374)}
          />
          <ol className="m-list">
            {[
              { n: [51, 1889], t: [1869, 230], font: "inter", text: ["End to End Digital Presence,", "Growth, Lead Generation,", "Marketing & Management of", "your Clinic or Hospital."] },
              { n: [51, 1999], t: [1974, 221], font: "arial", text: ["Search Engine Optimisation", "(SEO), Strategic Keyword", "Ranking & Organic Search", "Visibility Generate Patient", "Enquiries and Sustainable", "Growth."] },
              { n: [53, 2137], t: [2122, 230], font: "arial", text: ["Patient-Centric UI/UX Design,", "Healthcare Website Development", "& Seamless Digital Experience", "Management."] },
              { n: [51, 2260], t: [2244, 240], font: "arial", text: ["Dedicated Expert Team,", "Continuous Assistance & Reliable", "Technical Support."] },
            ].map((p, i) => (
              <li key={i}>
                <span className="m-presence-num" aria-hidden="true" style={at(p.n[0], p.n[1], 39, 40)}>
                  {i + 1}
                </span>
                <p className={`m-presence-text m-presence-text--${p.font}`} style={at(110, p.t[0], p.t[1])}>
                  <Lines lines={p.text} />
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Case study video — 2653:216, 2654:409, 2653:223 ── */}
        <section aria-labelledby="m-case">
          <h2 id="m-case" className="m-h m-h--blue" style={at(51, 2355, 286)}>
            <Lines lines={["CaseStudy Video of", "Our Existing Customer", "the Sales Flow with a", "Interactive Website"]} />
          </h2>
          <div className="m-case-video" style={at(51, 2514, 299, 548)}>
            {/* JJIMS photo is 1556 × 553, offset −682px inside the 299px mask */}
            <img src={jjimsHospital} alt="JJIMS Hospital building in golden daylight" style={at(-682, 0, 1556, 553)} />
          </div>
          <Play label="Play the JJIMS case study video" url={LINKS.caseStudyVideo} style={at(157, 2750, 74, 76.58)}>
            <img src={videoPlayIcon} alt="" />
          </Play>
        </section>

        {/* ── Other hospitals — 2653:230 … 2653:277 ── */}
        <section aria-labelledby="m-hospitals">
          <h2 id="m-hospitals" className="m-h m-h--blue" style={at(60, 3143, 268)}>
            <Lines lines={["Other Hospital’s", "Accross India We", "Serve Our Services"]} />
          </h2>
          <div className="m-strip" ref={hospitalsStrip} style={at(0, 3245, 402, 160)}>
            <ul style={{ position: "relative", width: r(464), height: "100%" }}>
              {/* Life Save — 2653:232 */}
              <li className="m-card" style={at(45, 6, 118.77, 141.77)}>
                <div className="m-card-photo">
                  <img src={lifesaveFacade} alt="Life Save Hospital building" style={at(-9.61, 4.04, 134.9, 97.8)} />
                </div>
                <span className="m-card-logo" style={at(8, 94, 30, 29)}>
                  <img src={lifesaveLogo} alt="" style={{ position: "absolute", width: "537.84%", height: "131.03%", left: "-12.16%", top: "-16.55%", maxWidth: "none" }} />
                </span>
                <span className="m-card-name" style={at(44, 96, 82)}>Life Save Hospital</span>
              </li>
              {/* JJIMS — 2653:277 */}
              <li className="m-card" style={at(187, 7.23, 118.77, 141.75)}>
                <div className="m-card-photo">
                  <img src={lifesaveFacade} alt="" style={at(-9.64, -2.08, 134.97, 97.84)} />
                  <img src={jjimsHospital} alt="JJIMS Hospital building" style={{ ...at(-97.44, 4.41, 254.89, 90.66), objectFit: "cover" }} />
                </div>
                <img src={jjimsLogo} alt="" style={at(11.53, 94.78, 34.78, 29.93)} />
                <span className="m-card-name m-card-name--tight" style={at(50.32, 97.39, 87.96)}>
                  JJIMS
                  <br />
                  Hospital
                </span>
              </li>
              {/* Cure & Care — 2653:276 */}
              <li className="m-card" style={at(325.23, 7.23, 118.77, 141.75)}>
                <div className="m-card-photo">
                  <img src={cureCareFacade} alt="Cure & Care Hospital building" style={{ ...at(-5.97, 0.46, 134.85, 97.84), objectFit: "cover" }} />
                </div>
                <span className="m-card-name m-card-name--small" style={at(28.3, 93.69, 71.63)}>
                  Cure &amp; Care Hospital,
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── Growth banner — 2653:280, 2783:2, 2653:282 ── */}
        <section className="m-growth" aria-label="Results">
          <div className="m-band m-band--black m-band--round" style={at(-6, 3468, 414, 323)} />
          <p className="m-growth-text" style={at(36, 3530, 289)}>
            <Lines
              lines={[
                "Since 2020, we’ve",
                <>helped <strong>45+ hospitals</strong> &amp;</>,
                "clinics across India",
                <>achieve up to <strong>3X</strong></>,
                <strong>growth.</strong>,
              ]}
            />
          </p>
          <div className="m-crop" style={at(237, 3627, 173, 137)}>
            <img src={growthChart} alt="" style={{ position: "absolute", width: "119.08%", height: "100.08%", left: "-19.08%", top: "-0.04%", maxWidth: "none" }} />
          </div>
        </section>

        {/* ── Process — 2653:274/278 chevrons, 2653:287 … 2653:302 steps ── */}
        <section aria-label="How we work">
          <button type="button" className="m-chev m-chev--prev" aria-label="Previous hospital" onClick={() => nudge(hospitalsStrip.current, -1, 142)} style={at(19, 3900, 17, 36)}>
            <span aria-hidden="true">&gt;</span>
          </button>
          <button type="button" className="m-chev" aria-label="Next hospital" onClick={() => nudge(hospitalsStrip.current, 1, 142)} style={at(373, 3900, 17, 36)}>
            <span aria-hidden="true">&gt;</span>
          </button>
          <ol className="m-list">
            {[
              { n: [36, 4002], t: [4036, 235], lines: ["Complete audit of", "your Current market", "positioning"] },
              { n: [36, 4127], t: [4171, 235], lines: ["Competitor Analysic", "& Strategy"] },
              { n: [36, 4251], t: [4295, 235], lines: ["Planning &", "Execution"] },
              { n: [36, 4376], t: [4431, 235], lines: ["Website Development", "& Mantainance"] },
              { n: [37, 4501], t: [4549, 235], lines: ["Payment Integration", "Support & Management"] },
              { n: [36, 4639], t: [4684, 263], lines: ["Google My Business", "Optimisation"] },
              { n: [36, 4763], t: [4802, 235], lines: ["SEO AEO GEO ", "Increase Visitors and", "generate more quality", "Enquiries"] },
              { n: [36, 4922], t: [4956, 211], lines: ["Generating Online", "quearies/Lead", "Generation"] },
            ].map((s, i) => (
              <li key={i}>
                <span className="m-step-num" aria-hidden="true" style={at(s.n[0], s.n[1], 70, 125)}>
                  {i + 1}
                </span>
                <p className="m-step-text" style={at(145, s.t[0], s.t[1])}>
                  <Lines lines={s.lines} />
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Websites — 2653:303, 2653:324, 2653:325/328 ── */}
        <section aria-labelledby="m-websites">
          <img src={websitesShowcase} alt="Sanmati Traders e-commerce website designed by Yantra" style={at(0, 5204, 402, 558)} />
          <h2 id="m-websites" className="m-h m-h--grad" style={at(40, 5136, 321)}>
            {/* Figma keeps the trailing space after "for", which shifts that centered line */}
            <Lines lines={["Some Websites we have", "designed for\u00a0", "our Clients on recent", "deliveries"]} />
          </h2>
          <button type="button" className="m-box-arrow m-box-arrow--prev" aria-label="Previous website" disabled={site === 0} onClick={() => setSite(0)} style={at(36, 5807.79, 59.42, 55.7)}>
            <span aria-hidden="true">&gt;</span>
          </button>
          <button type="button" className="m-box-arrow" aria-label="Next website" onClick={() => setSite(0)} style={at(306.17, 5807.79, 59.42, 55.7)}>
            <span aria-hidden="true">&gt;</span>
          </button>
        </section>

        {/* ── Doctors Near Me — 2653:347, 2653:346, 2653:345 ── */}
        <section aria-label="Patients search for doctors near them">
          <div className="m-band m-band--black" style={at(0, 5893, 402, 672)} />
          <div className="m-nearme" style={at(50, 5984, 341)}>
            <p className="m-nearme-lead">
              <Lines lines={["78% of people", "near you", "searches by", "keyword"]} />
            </p>
            <p>
              {/* Figma's Inter has a small raised asterisk; the current Inter release centres it */}
              <Lines lines={[<><span className="m-ast m-ast--lead">*</span>Doctors Near</>, <>Me<span className="m-ast">*</span></>]} />
            </p>
          </div>
          <img src={doctorLaptop} alt="Illustration of a smiling doctor on a laptop screen" style={at(10, 6263, 398, 265)} />
        </section>

        {/* ── SEO video — 2653:350, 2653:351, 2653:332 ── */}
        <section aria-labelledby="m-seo">
          <h2 id="m-seo" className="m-h m-h--muted" style={at(56, 6616, 305)}>
            <Lines lines={["Strategic SEO Drives", "Sales & Generates More", "Google Enquearies"]} />
          </h2>
          <img
            className="m-seo-card"
            src={seoVideoThumb}
            alt="Google Business Profile dashboard for Jeevan Jyoti Institute of Medical Sciences"
            style={at(47, 6736, 326, 212.01)}
          />
          <Play label="Play the Google Business Profile video" url={LINKS.seoVideo} style={at(160.24, 6804.78, 87.12, 90.95)}>
            <img src={playButton} alt="" />
          </Play>
          <img src={carouselDots} alt="" style={at(127.19, 7030.03, 152.26, 11.14)} />
        </section>

        {/* ── Partner doctors — 2653:357, 2653:380 … 2653:383 ── */}
        <section aria-labelledby="m-doctors">
          <h2 id="m-doctors" className="m-h m-h--grad" style={at(50, 7054, 315)}>
            <Lines lines={["A Few of Doctors we", "partner with for there", "marketing and digital", "presence and boost there", "visibility on Google"]} />
          </h2>
          <div className="m-strip" style={at(0, 7248, 402, 560)}>
            <div style={{ position: "relative", width: r(520), height: "100%" }}>
              <div className="m-crop m-dentist" style={at(300, 0, 200, 396)}>
                <img src={dentist} alt="Portrait of Dr. Nupur Dabbas" style={{ position: "absolute", width: "130.93%", height: "100.29%", left: "-11.5%", top: "-0.14%", maxWidth: "none" }} />
              </div>
              <p className="m-doc-name" style={at(305, 441, 195)}>
                <Lines lines={["Dr. Nupur", "Dabbas"]} />
              </p>
              <p className="m-doc-role" style={at(305, 527, 133)}>Dental Surgeon</p>
            </div>
          </div>
        </section>

        {/* ── Google presence — 2653:385, 2653:387, 2653:388 ── */}
        <section aria-label="Google search presence">
          <img src={macbook} alt="MacBook showing Google results for “Doctors Near Me” with local clinics on the map" style={{ ...at(0, 7859, 609, 332), objectFit: "cover" }} />
          <div className="m-blue-card" style={at(45, 8224, 329, 245)} />
          <p className="m-blue-text" style={at(85, 8256, 244)}>
            <Lines
              lines={[
                "A strong presence on google",
                "and proper seo can bring you",
                "more organic traffic calls,",
                "website visit’s and Enquiries,",
                "Boost your business 2X with",
                "productive Seo and",
                "a patient friendly website.",
              ]}
            />
          </p>
        </section>

        {/* ── Doctor website video — 2654:395 … 2654:398 ── */}
        <section aria-label="Client website video">
          <img
            className="m-testimonial"
            src={testimonialThumb}
            alt="Website designed for Dr. Sambuddha Dhar, Neurosurgeon, Silchar"
            style={at(31, 8785, 380.35, 225)}
          />
          <Play label="Play the Dr. Sambuddha Dhar website video" url={LINKS.testimonialVideo} style={at(177.64, 8856.98, 92.5, 81.31)}>
            <img src={playEllipse} alt="" />
            <img src={playTriangle} alt="" style={at(32.95, 16.21, 37.44, 32.89)} />
          </Play>
        </section>

        {/* ── CTA — 2648:3, 2648:138, 2648:139 ── */}
        <section id="contact" aria-labelledby="m-cta">
          <div className="m-band m-band--green" style={at(-2, 9358, 404, 341)} />
          <h2 id="m-cta" className="m-cta-title" style={at(41, 9419, 349)}>
            <Lines lines={["Book a Website", "Strategy Call with", "Our Experts!"]} />
          </h2>
          <a className="m-cta-button" href={LINKS.strategyCallForm} style={at(20, 9575, 364, 72)}>
            Fill the Form
          </a>
        </section>
      </main>

      <footer>
        {/* ── Brand — 2648:126 ── */}
        <img src={ymLogo} alt="" style={at(59, 9722, 97, 97)} />
        <img src={wordmark} alt="Yantramedia" style={at(168, 9739, 173.84, 26.17)} />
        <span className="m-agency" style={at(173, 9765)}>
          Agency
        </span>

        {/* ── Footer — 2648:102 ── */}
        <div className="m-footer" style={at(-2, 9842, 404, 832)}>
          {/* office photo, overlay-blended at 50% (2648:109) */}
          <img className="m-footer-texture" src={footerTexture} alt="" style={at(-799.76, -104.84, 1967.34, 1253.8)} />
        </div>
        <h2 className="m-ft-head" style={at(30.16, 9890, 140.7)}>
          Other Services
        </h2>
        <ul className="m-ft-list" style={at(30.16, 9927, 226.12)}>
          {OTHER_SERVICES.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <h2 className="m-ft-head" style={at(35.18, 10300, 187.93)}>
          Join us for a Coffee!
        </h2>
        <h3 className="m-ft-head" style={at(35.18, 10352, 82.41)}>
          Gurgaon
        </h3>
        <address className="m-ft-address" style={at(35.18, 10377, 238.18)}>
          <p>{"Corporate  Office:"}</p>
          <p>
            <Lines lines={["1227, Gaur City Mall, Greater Noida", "West, Uttar Pradesh,"]} />
          </p>
          <p>Pin- 201318</p>
        </address>
        <h3 className="m-ft-head" style={at(35.18, 10485, 55.27)}>
          Noida
        </h3>
        <address className="m-ft-address" style={at(35.18, 10510, 264.31)}>
          <p>Founders Office:</p>
          <p>
            <Lines lines={["1227, Gaur City Mall, Greater Noida", "West, Uttar Pradesh,"]} />
          </p>
          <p>Pin- 201318</p>
        </address>
        <p className="m-ft-copy" style={at(15.08, 10625, 320.59)}>
          {"©  All Rights Reserved to Yantra Media Company_2026."}
        </p>
      </footer>
    </div>
  );
}
