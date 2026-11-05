import playButton from "../../assets/landing/play-button.svg";
import playEllipse from "../../assets/landing/play-ellipse.svg";
import playTriangle from "../../assets/landing/play-triangle.svg";
import videoPlayIcon from "../../assets/landing/video-play-icon.svg";
import "./PlayButton.css";

/** The three play-button artworks used in the Figma file. */
type Variant = "grey" | "shadow" | "split";

interface PlayButtonProps {
  label: string;
  variant: Variant;
  /** Video to open. Until one is supplied the button renders but does nothing. */
  videoUrl?: string;
}

export function PlayButton({ label, variant, videoUrl }: PlayButtonProps) {
  const art =
    variant === "grey" ? (
      <img src={videoPlayIcon} width={74} height={77} alt="" />
    ) : variant === "shadow" ? (
      <img src={playButton} width={87} height={91} alt="" />
    ) : (
      <>
        <img src={playEllipse} width={93} height={81} alt="" />
        <img className="play__triangle" src={playTriangle} width={37} height={33} alt="" />
      </>
    );

  const className = `play play--${variant}`;

  return videoUrl ? (
    <a className={className} href={videoUrl} target="_blank" rel="noreferrer" aria-label={label}>
      {art}
    </a>
  ) : (
    <button type="button" className={className} aria-label={label}>
      {art}
    </button>
  );
}
