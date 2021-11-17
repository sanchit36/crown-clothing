import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleText,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleText onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleText>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem
            key={item.id}
            item={{ ...item, title: title.toLowerCase() }}
          />
        ))}
    </PreviewContainer>
    <CustomButton
      style={{ width: "25%", margin: "30px auto 0px" }}
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      View All
    </CustomButton>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
