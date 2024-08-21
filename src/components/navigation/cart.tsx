import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartModal from "../cart/cartModal";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
type CartProps = {
  size?: "sm" | "md" | "lg";
  showHeader?: boolean;
  shiftPosition?: boolean;
};

function Cart({ showHeader, shiftPosition }: CartProps) {
  const { handleModal } = useContext(CartContext);

  function handleClick() {
    handleModal();
  }
  return (
    <div className="cart-container">
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faCartShopping} className="fa-lg" />
      </button>
      <CartModal showHeader={showHeader} shiftPosition={shiftPosition} />
    </div>
  );
}

export default Cart;
