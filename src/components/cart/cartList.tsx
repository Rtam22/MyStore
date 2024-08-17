import "./cartList.css";
import { CartContext } from "../../context/cartContext";
import { useContext, useState } from "react";
import { onChange } from "react-toastify/dist/core/store";
import UseEditCartItems from "../../hooks/useEditCartItems";
import { calculateItemTotal } from "../../utils/calculationUtils";
import { Link } from "react-router-dom";

function CartList() {
  const { cartItems, handleColor, handleSize, handleQuantity } =
    UseEditCartItems();
  const { removeFromCart } = useContext(CartContext);
  const itemQuantity = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  function mapCartItems() {
    return cartItems.map((item) => {
      return (
        <div key={item.id} className="cart-item">
          <div className="image-container">
            <Link to={item.href}>
              <img src={item.image} alt={item.imageAlt} />
            </Link>
          </div>
          <div className="item-information">
            <div className="title-container">
              <h4>
                {" "}
                <Link to={item.href}>{item.title} </Link>
              </h4>

              <button
                className="delete"
                onClick={() => removeFromCart(item.id)}
              >
                X
              </button>
            </div>
            {handleSize(item.selectedSize, item.size, item.id)}
            {handleColor(item.selectedColor, item.color, item.id)}
            {handleQuantity(itemQuantity, item.id)}
            {item.discount > 0 ? (
              <p className="flex-start">
                <s>${calculateItemTotal(item.price, item.quantity)}</s>
                <span className="discount">
                  ${calculateItemTotal(item.salePrice, item.quantity)}
                </span>
              </p>
            ) : (
              <p>${calculateItemTotal(item.salePrice, item.quantity)}</p>
            )}
          </div>
        </div>
      );
    });
  }

  return <div className="cart-list">{mapCartItems()}</div>;
}

export default CartList;
