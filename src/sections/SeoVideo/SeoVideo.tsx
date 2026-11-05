import carouselDots from "../../assets/landing/carousel-dots.svg";
import seoVideoThumb from "../../assets/landing/seo-video-thumb.webp";
import { PlayButton } from "../../components/PlayButton/PlayButton";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { LINKS } from "../../data/landing";
import "./SeoVideo.css";

/** "Strategic SEO Drives Sales…" video — Figma 2653:350, 2653:351, 2653:332. */
export function SeoVideo() {
  return (
    <section className="seo-video" aria-labelledby="seo-video-title">
      <SectionHeading id="seo-video-title" variant="muted" width={305}>
        Strategic SEO Drives Sales &amp; Generates More Google Enquearies
      </SectionHeading>

      <div className="seo-video__card">
        <img src={seoVideoThumb} width={700} height={317} alt="Google Business Profile dashboard for Jeevan Jyoti Institute of Medical Sciences" />
        <PlayButton variant="shadow" label="Play the Google Business Profile video" videoUrl={LINKS.seoVideo} />
      </div>

      <img className="seo-video__dots" src={carouselDots} width={152} height={11} alt="" />
    </section>
  );
}
