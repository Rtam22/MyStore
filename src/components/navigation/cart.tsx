import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

type CartProps = {
  size?: "sm" | "md" | "lg";
};

function Cart(props: CartProps) {
  return (
    <button>
      <FontAwesomeIcon icon={faCartShopping} className="fa-lg" />
    </button>
  );
}

export default Cart;
