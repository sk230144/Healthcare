import jjimsHospital from "../../assets/landing/jjims-hospital.webp";
import { PlayButton } from "../../components/PlayButton/PlayButton";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { LINKS } from "../../data/landing";
import "./CaseStudy.css";

/** Case-study video card — Figma 2653:216, 2654:409, 2653:223. */
export function CaseStudy() {
  return (
    <section className="case-study" aria-labelledby="case-study-title">
      <SectionHeading id="case-study-title" variant="blue" width={286}>
        CaseStudy Video of Our Existing Customer the Sales Flow with a Interactive Website
      </SectionHeading>

      <div className="case-study__video">
        <img src={jjimsHospital} width={1700} height={605} alt="JJIMS Hospital building in golden daylight" />
        <PlayButton variant="grey" label="Play the JJIMS case study video" videoUrl={LINKS.caseStudyVideo} />
      </div>
    </section>
  );
}
