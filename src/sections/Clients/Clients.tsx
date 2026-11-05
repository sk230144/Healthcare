import fortisLogo from "../../assets/landing/client-logo-1952.png";
import jjimsLogo from "../../assets/landing/jjims-logo.webp";
import lifesaveLogo from "../../assets/landing/lifesave-logo.png";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import "./Clients.css";

function LogoSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="clients__set" aria-hidden={hidden || undefined}>
      <li>
        <img src={fortisLogo} width={184} height={103} alt={hidden ? "" : "Fortis Healthcare"} />
      </li>
      <li className="clients__jj">
        <img className="clients__jj-logo" src={jjimsLogo} width={87} height={75} alt="" />
        <span className="clients__jj-name">
          Jeevan Jyoti Hospital
          <br />
          &amp; Research Center
        </span>
      </li>
      <li>
        <img src={lifesaveLogo} width={251} height={60} alt={hidden ? "" : "Life Save Hospital"} />
      </li>
    </ul>
  );
}

/** "Few of Our Clients…" — Figma 2652:184–2652:194. Logos scroll as a marquee. */
export function Clients() {
  return (
    <section className="clients" aria-labelledby="clients-title">
      <SectionHeading id="clients-title" width={323}>
        Few of Our Clients we are working with over 40+ Hospital’s Across India
      </SectionHeading>

      <div className="clients__marquee">
        <div className="clients__track">
          <LogoSet />
          <LogoSet hidden />
        </div>
      </div>
    </section>
  );
}
