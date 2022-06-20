import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
  DECREMENT_QUANTITY,
} from "../Types";
import { useEffect, useCallback } from "react";
import { deleteItemCart, getCart } from "../../services/cartServices";

const CartState = ({ children }) => {
  // const dispatch=useDispatch();
  // const {cartItems,showCart}=useSelector(state=>state."state")
  const getAllCartItems = useCallback(async () => {
    try {
      const { data } = await getCart();
      let cart = [];

      for (let item of Object.keys(data)) {
        cart.push({ ...data[item] });
        // quantity+=data[item].quantity
      }
      dispatch({ type: "addAllToCart", payload: cart });
    } catch (error) {}
  }, []);
  const initalState = {
    showCart: false,
    cartItems: [],
    cartquantity: 0,
  };
  useEffect(() => {
    getAllCartItems();
  }, [getAllCartItems]);

  const [state, dispatch] = useReducer(CartReducer, initalState); //

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const updateQuantityState = (item) => {
    dispatch({ type: UPDATE_QUANTITY, payload: item });
  };

  const decrementQuantityState = (item) => {
    dispatch({ type: DECREMENT_QUANTITY, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = async (id) => {
    try {
      await deleteItemCart(id._id);
      dispatch({ type: REMOVE_ITEM, payload: id });
    } catch (error) {}
  };

  return (
    <CartContext.Provider
      value={{
        // showCart: showCart,
        // cartItems: cartItems,

        showCart: state.showCart,
        cartItems: state.cartItems,
        cartquantity: state.cartquantity,
        addToCart,
        showHideCart,
        removeItem,
        updateQuantityState,
        decrementQuantityState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
