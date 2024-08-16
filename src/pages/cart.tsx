import "./cart.css";
import CartList from "../components/cart/cartList";
import CartSummary from "../components/cart/cartSummary";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";
function Cart() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="content cart">
      <div className="left-col">
        <h2>Cart</h2>
        <hr />
        <CartList />
        <hr />
      </div>
      <div className="right-col">
        <h2>Summary</h2>
        <hr />
        <CartSummary cartItems={cartItems} />
      </div>
    </div>
  );
}

export default Cart;
