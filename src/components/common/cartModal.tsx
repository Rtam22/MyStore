import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./cartModal.css";
import CartItem from "./cartItem";
import {
  calculateTotalCost,
  calculateAllTotal,
} from "../../utils/calculationUtils";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div>
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
        <CartItem cartItems={cartItems} handleDelete={handleDelete} />

        <div className="sticky-container">
          <hr />
          <div className="totals-container">
            <p>
              Total items: <span>{calculateAllTotal(cartItems)}</span>
            </p>
            <p>
              Sub Total: <span>${calculateTotalCost(cartItems)}</span>
            </p>
          </div>
          <div className="buttons-container">
            <button>View Cart</button>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
