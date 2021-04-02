import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIconContainer,
} from "./cart-icon.styles";

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer className="shopping-icon" />
    <ItemCountContainer className="item-count">{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
