import "./itemCard.css";
import { Link } from "react-router-dom";
type itemCardProps = {
  title: string;
  image: string;
  imageAlt: string;
  description?: string;
  rating?: number;
  href: string;
  price: number;
  size: "large" | "small";
};

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
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default ItemCard;
