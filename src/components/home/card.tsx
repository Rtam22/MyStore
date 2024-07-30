import "./card.css";
import ButtonLink from "./buttonLink";
import { Link } from "react-router-dom";
import { cardProps } from "./cardTypes";

function Card({
  title,
  image,
  size,
  imageAlt,
  type,
  color,
  banner,
  href,
}: cardProps) {
  return (
    <div className={` card-base ${type} ${size ? size : ""}`}>
      {banner ? (
        <div className={`card-banner ${color}`}>
          <h3>{banner}</h3>
        </div>
      ) : null}
      {type === "category-card" ? <Link to={href}></Link> : null}

      <div className="card-content">
        <h3>
          <span>{title}</span>
        </h3>
        {type === "promo-card" && (
          <ButtonLink title="Shop Now!" color={color} size="small" />
        )}
      </div>

      <div className="image-container">
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
}

export default Card;
