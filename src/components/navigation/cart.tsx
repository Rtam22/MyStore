import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartModal from "../cart/cartModal";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { activeHeaderProps } from "./header";
import { Link } from "react-router-dom";
import "./cart.css";
import { calculateQuantityTotal } from "../../utils/calculationUtils";
type CartProps = {
  size?: "sm" | "md" | "lg";
  showHeader?: boolean;
  shiftPosition?: boolean;
};

type combinedCartProps = CartProps & activeHeaderProps;

function Cart({
  shiftPosition,
  activeHeader,
  handleActiveHeader,
}: combinedCartProps) {
  const { handleModal, cartItems } = useContext(CartContext);

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
      <Link to="/cart" className="mobile-cart-button">
        {cartItems.length > 0 ? (
          <div className="item-count">{calculateQuantityTotal(cartItems)}</div>
        ) : null}
        <FontAwesomeIcon icon={faCartShopping} className="fa-lg" />
      </Link>
      <div className="cart-button-container">
        <button onClick={handleClick}>
          {cartItems.length > 0 ? (
            <div className="item-count">
              {calculateQuantityTotal(cartItems)}
            </div>
          ) : null}
          <FontAwesomeIcon icon={faCartShopping} className="fa-lg" />
        </button>
      </div>
      <CartModal
        activeHeader={activeHeader}
        shiftPosition={shiftPosition}
        handleActiveHeader={handleActiveHeader}
      />
    </div>
  );
}

export default Cart;
