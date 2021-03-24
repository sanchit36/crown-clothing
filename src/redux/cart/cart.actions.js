import CartAtionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartAtionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartAtionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartAtionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartAtionTypes.CLEAR_ITEM_FORM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartAtionTypes.CLEAR_CART,
});
