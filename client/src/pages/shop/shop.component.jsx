import React, { useEffect } from "react";
import { Route } from "react-router";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import ProductDetailsPage from "../product-details/product-details.component";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionId/:productId`}
        component={ProductDetailsPage}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
