import { useContext } from "react";
import "./Cart.css";
import CartContext from "../../context/cart/CartContext";
import formatCurrency from "format-currency";
import CartItem from "../CartItem/CartItem";
import CartModal from "../CartModal/CartModal";
const Cart = ({ handleShowCartModal }) => {
  const { cartItems } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "Lekë " };

  return (
    <CartModal>
      <div style={{ textAlign: "right" }}>
        <i
          style={{ cursor: "pointer" }}
          className="fa fa-times-circle"
          aria-hidden="true"
          onClick={handleShowCartModal}
        ></i>
      </div>
      <div className="cart__innerWrapper">
        {cartItems.length === 0 ? (
          <h4>Cart is Empty</h4>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </ul>
        )}
      </div>
      <div className="Cart__cartTotal">
        <div>Cart TOTAL</div>
        <div></div>
        <div></div>
        <div style={{ marginLeft: 5 }}>
          {formatCurrency(
            cartItems.reduce(
              (amount, item) => +item.price * +item.quantity + +amount,
              0
            ),
            opts
          )}
          <br />
          <button className="Order__button">Order</button>
        </div>
      </div>
    </CartModal>
  );
};

export default Cart;
