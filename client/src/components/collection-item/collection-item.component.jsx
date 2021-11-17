import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { addItem } from "../../redux/cart/cart.actions";
import {
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const history = useHistory();
  const { id, name, price, imageUrl, title } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        onClick={() => history.push(`/shop/${title}/${id}`)}
      />
      <CollectionFooterContainer className="collection-footer">
        <NameContainer className="name">{name}</NameContainer>
        <PriceContainer className="price">{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addItem(item)}>
        Add To Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
