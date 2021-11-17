import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import {
  SpinnerContainer,
  SpinnerOverlay,
} from "../../components/with-spinner/with-spinner.styles";

const ProductDetailsPage = () => {
  const { collectionId, productId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [collectionId, productId]);

  if (loading) {
    return (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    );
  }

  return <div>Product Details</div>;
};

export default ProductDetailsPage;
