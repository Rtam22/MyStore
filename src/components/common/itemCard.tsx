import "./itemCard.css";
import { Link } from "react-router-dom";
import { productType } from "../../data/products";

type itemCardProps = {
  item: productType;
  size: "small" | "large";
};

function ItemCard({ item, size }: itemCardProps) {
  return (
    <div className={`item-card ${size}`}>
      <Link to={item.href}>
        <div className="image-container">
          {item.discount > 0 ? (
            <div className="discount-tag-item">
              <h3>{item.discount}% Off</h3>
            </div>
          ) : null}
          <img src={item.image} alt={item.imageAlt} />
        </div>
        <span>
          <h3>{item.title}</h3>
          <div className="price-container">
            {item.discount > 0 ? (
              <>
                <h3>
                  <s>${item.price}</s>
                </h3>
                <h3 className="discount">${item.salePrice}</h3>
              </>
            ) : (
              <h3>${item.salePrice}</h3>
            )}
          </div>
        </span>
      </Link>
    </div>
  );
}

export default ItemCard;
