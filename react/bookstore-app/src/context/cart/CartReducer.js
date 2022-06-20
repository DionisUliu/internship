import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
  DECREMENT_QUANTITY,
} from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case "addAllToCart": {
      const newCart = [...action.payload];
      var quan = 0;
      for (var i = 0; i < newCart.length; i++) {
        quan += newCart[i].quantity;
      }

      return {
        ...state,
        cartItems: newCart,
        cartquantity: quan,
      };
    }

    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }

    case UPDATE_QUANTITY: {
      return {
        ...state,
        cartItems: state.cartItems.map((product) =>
          product._id === action.payload._id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
        cartquantity: state.cartquantity + 1,
      };
    }

    case DECREMENT_QUANTITY: {
      console.log(state);
      let newCart = state.cartItems.map((product) => {
        if (product._id === action.payload._id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });

      newCart = newCart.filter((product) => product.quantity > 0);

      return {
        ...state,
        cartItems: newCart,
        cartquantity: state.cartquantity - 1,
      };
      // return {
      //   ...state,
      //   cartItems: state.cartItems.map((product) =>{
      //    if(product._id === action.payload._id) {
      //     return { ...product, quantity: product.quantity - 1 }
      //    }
      //   }
      //   )
      //   //
      // };
      // // return ""
    }

    case ADD_TO_CART: {
      if (state.cartItems.find((b) => b.name === action.payload.name)) {
        return { ...state };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        cartquantity: state.cartquantity + 1,
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload._id
        ),
        cartquantity: state.cartquantity - action.payload.quantity,
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
