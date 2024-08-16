import "./cartList.css";
import { CartContext } from "../../context/cartContext";
import { useContext, useState } from "react";
import { onChange } from "react-toastify/dist/core/store";
import UseEditCartItems from "../../hooks/useEditCartItems";
import { calculateItemTotal } from "../../utils/calculationUtils";

function CartList() {
  const { cartItems, handleColor, handleSize } = UseEditCartItems();
  const { removeFromCart } = useContext(CartContext);
  function mapCartItems() {
    return cartItems.map((item) => {
      return (
        <div key={item.id} className="cart-item">
          <div className="image-container">
            <img src={item.image} alt={item.imageAlt} />
          </div>
          <div className="item-information">
            <div className="title-container">
              <h4>{item.title}</h4>
              <button
                className="delete"
                onClick={() => removeFromCart(item.id)}
              >
                X
              </button>
            </div>
            {handleSize(item.selectedSize, item.size, item.id)}
            {handleColor(item.selectedColor, item.color, item.id)}
            <p>
              <span className="bold">Quantity: </span> {item.quantity}
            </p>
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
