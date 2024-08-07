import "./itemCard.css";
import { Link } from "react-router-dom";
import { itemCardProps } from "./itemCardType";

function ItemCard({
  title,
  image,
  imageAlt,
  description,
  href,
  size,
  price,
}: itemCardProps) {
  return (
    <div className={`item-card ${size}`}>
      <Link to={href}>
        <div className="image-container">
          <img src={image} alt={imageAlt} />
        </div>
        <span>
          <h3>{title}</h3> <h3>${price}</h3>
        </span>
        {size === "large" ? <p>{description}</p> : null}
      </Link>
    </div>
  );
}

export default ItemCard;
