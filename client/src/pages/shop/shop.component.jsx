import React, { lazy, Suspense, useEffect } from "react";
import { Route } from "react-router";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { useDispatch } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

const CollectionOverviewContainer = lazy(() =>
  import("../../components/collection-overview/collection-overview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);
const ProductDetailsPage = lazy(() =>
  import("../product-details/product-details.component")
);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </div>
  );
};

export default ShopPage;
