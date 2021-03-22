import CartAtionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartAtionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartAtionTypes.ADD_ITEM,
  payload: item,
});
