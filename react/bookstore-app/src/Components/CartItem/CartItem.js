import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../../context/cart/CartContext";
import formatCurrency from "format-currency";
import { db, ref, set } from "../../Config/firebase";

const CartItem = ({ item }) => {
  const { updateQuantityState, decrementQuantityState } =
    useContext(CartContext);

  const updateQuantity = async (item) => {
    var data = item;

    await updateQuantityState(item);

    //  for()

    //   if(cartItems._id== item._id){
    //   }
    //   else{}

    data["quantity"] = data["quantity"] + 1;

    set(ref(db, "cart/" + item._id), item);
  };

  const decQuantity = async (item) => {
    var data = item;
    await decrementQuantityState(item);

    if (item.quantity === 1) {
      removeItem(item);
    } else {
      // let quantity = item.quantity--;
      // item = { ...item, quantity };
      data["quantity"] = data["quantity"] - 1;
      set(ref(db, "cart/" + item._id), item);
    }
  };

  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "Lekë " };
  return (
    <li className="CartItem__item">
      <img src={item.image} alt="" />
      {item.name}
      <div className="" style={{ width: "200px", marginLeft: "15%" }}>
        <button
          style={{
            color: "white",
            backgroundColor: "red",
            border: "2px solid red",
            margin: "10px",
            width: "30px",
          }}
          onClick={() => decQuantity(item)}
        >
          -
        </button>
        <b> {item.quantity}</b>

        <button
          style={{
            color: "white",
            backgroundColor: "green",
            border: "2px solid green",
            margin: "10px",
            width: "30px",
          }}
          onClick={() => updateQuantity(item)}
        >
          +
        </button>
      </div>
      <div className="currency__item">
        {formatCurrency(`${item.price}`, opts)}
      </div>
      <button className="CartItem__button" onClick={() => removeItem(item)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;
