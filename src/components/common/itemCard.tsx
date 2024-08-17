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
  discount,
  salePrice,
}: itemCardProps) {
  return (
    <div className={`item-card ${size}`}>
      <Link to={href}>
        <div className="image-container">
          {discount > 0 ? (
            <div className="discount-tag-item">
              <h3>{discount}% Off</h3>
            </div>
          ) : null}
          <img src={image} alt={imageAlt} />
        </div>
        <span>
          <h3>{title}</h3>
          <div className="price-container">
            {discount > 0 ? (
              <>
                <h3>
                  <s>${price}</s>
                </h3>
                <h3 className="discount">${salePrice}</h3>
              </>
            ) : (
              <h3>${salePrice}</h3>
            )}
          </div>
        </span>
        {size === "large" ? <p>{description}</p> : null}
      </Link>
    </div>
  );
}

export default ItemCard;
