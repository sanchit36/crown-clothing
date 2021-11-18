import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Spinner from "../../components/spinner/spinner.component";

const ProductDetailsPage = () => {
  const { collectionId, productId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    // console.log(collectionId, productId);
  }, [collectionId, productId]);

  if (loading) return <Spinner />;

  return <div>Product Details</div>;
};

export default ProductDetailsPage;
