import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartModal from "../cart/cartModal";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { activeHeaderProps } from "./header";

type CartProps = {
  size?: "sm" | "md" | "lg";
  showHeader?: boolean;
  shiftPosition?: boolean;
};

type combinedCartProps = CartProps & activeHeaderProps;

function Cart({
  showHeader,
  shiftPosition,
  activeHeader,
  handleActiveHeader,
}: combinedCartProps) {
  const { handleModal } = useContext(CartContext);

  function handleClick() {
    if (activeHeader === "cart") {
      handleActiveHeader("none");
      handleModal();
    } else {
      handleActiveHeader("cart");
      handleModal();
    }
  }

  return (
    <div className="cart-container">
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faCartShopping} className="fa-lg" />
      </button>
      <CartModal activeHeader={activeHeader} shiftPosition={shiftPosition} />
    </div>
  );
}

export default Cart;
