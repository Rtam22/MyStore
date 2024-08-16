import "./cartSummary.css";
import { productType } from "../../data/products";
import { calculateTotalCost } from "../../utils/calculationUtils";
import { Link } from "react-router-dom";
type cartSummaryProps = {
  cartItems: productType[];
};
function CartSummary({ cartItems }: cartSummaryProps) {
  const subtotal = calculateTotalCost(cartItems);
  const delivery = subtotal >= 100 ? 0 : 9.95;
  const total = delivery + subtotal;
  return (
    <div className="cart-summary-container">
      <div className="flex">
        <p>Sub Total:</p> <p>${calculateTotalCost(cartItems)}</p>
      </div>
      <div className="flex">
        <p>Shipping:</p>
        <p>{delivery === 0 ? "Free Shipping" : `$ ${delivery}`}</p>
      </div>
      <hr />
      <div className="flex">
        <p>Total:</p> <p>${total.toFixed(2)}</p>
      </div>
      <Link to={"/checkout"}>
        <button>Check Out</button>
      </Link>
    </div>
  );
}

export default CartSummary;
