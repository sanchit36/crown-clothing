import CartAtionTypes from "./cart.types";
import { addItemCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartAtionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartAtionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
