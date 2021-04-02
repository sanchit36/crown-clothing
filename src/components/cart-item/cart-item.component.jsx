import React from "react";
import {
  CartItemContainer,
  ImageContainer,
  ItemDetails,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt="item" />
    <ItemDetails>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} X ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
