import "./heroSection.css";
import ButtonLink from "./buttonLink";
type heroSectionProps = {
  title?: string;
  description?: string;
  secondaryDescription?: string;
  image: string;
  imageAlt: string;
  button?: string;
};

function HeroSection({
  title,
  description,
  secondaryDescription,
  image,
  imageAlt,
  button,
}: heroSectionProps) {
  return (
    <div className="hero-container">
      <div className="hero-content">
        {title && (
          <span>
            <h1>{title}</h1>
          </span>
        )}
        {description && (
          <span>
            <h2>{description}</h2>
          </span>
        )}
        {secondaryDescription && (
          <span>
            <h3>{secondaryDescription}</h3>
          </span>
        )}
        {button && (
          <span className="button-container">
            <ButtonLink title={button} color="black" size="large" />
          </span>
        )}
      </div>
      <img src={image} alt={imageAlt} />
    </div>
  );
}

export default HeroSection;
