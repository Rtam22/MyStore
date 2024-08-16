import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./cartModal.css";
import {
  calculateTotalCost,
  calculateQuantityTotal,
} from "../../utils/calculationUtils";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CartList from "../cart/cartList";

type cartModalProps = {
  showHeader: boolean;
  shiftPosition: boolean;
};
function CartModal({ showHeader, shiftPosition }: cartModalProps) {
  const { cartItems, showModal, removeFromCart, handleModal } =
    useContext(CartContext);

  function handleDelete(itemId: string) {
    removeFromCart(itemId);
  }

  function handleClose() {
    handleModal();
  }

  return (
    <div
      className={`scroller-container cart-modal ${
        shiftPosition ? "shift" : ""
      } ${!showModal ? "hide" : ""} ${showHeader ? "" : "extend"}`}
    >
      <div className="modal">
        <div className="title-container">
          <h3>Cart</h3>
          <button className="delete minimize" onClick={handleClose}>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        </div>
        {cartItems.length < 1 ? (
          <div>
            <p>Cart is empty</p>
          </div>
        ) : null}
        <CartList />
        <div className="sticky-container">
          <hr />
          <div className="totals-container">
            <p>
              Total items: <span>{calculateQuantityTotal(cartItems)}</span>
            </p>
            <p>
              Sub Total: <span>${calculateTotalCost(cartItems)}</span>
            </p>
          </div>
          <div className="buttons-container">
            <Link to="/cart">
              <button>View Cart</button>
            </Link>
            <Link to="/cart">
              <button>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
