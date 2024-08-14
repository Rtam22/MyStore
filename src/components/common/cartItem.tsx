import { productType } from "../../data/products";
import { calculateItemTotal } from "../../utils/calculationUtils";
import { Link } from "react-router-dom";
import "./cartItem.css";
type cartItemProps = {
  cartItems: productType[];
  handleDelete: (itemId: string) => void;
};

function CartItem({ cartItems, handleDelete }: cartItemProps) {
  return cartItems.map((item) => {
    return (
      <div className="item-card-cart">
        <div className="image-container">
          <img src={item.image} alt={item.imageAlt} />
        </div>
        <div className="cart-item-information">
          <div className="title-container">
            <h5>
              <Link to={item.href}>{item.title}</Link>
            </h5>
            <button className="delete" onClick={() => handleDelete(item.id)}>
              X
            </button>
          </div>
          <p>
            <span className="bold">Size: </span>
            {item.selectedSize}
          </p>
          <p>
            <span className="bold">Color: </span>
            {item.selectedColor}
          </p>
          <p>
            <span className="bold">Quantity: </span>
            {item.quantity}
          </p>
          <p>${calculateItemTotal(item.salePrice, item.quantity)}</p>
        </div>
      </div>
    );
  });
}

export default CartItem;
