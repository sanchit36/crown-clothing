import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { clearCart } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price, dispatch }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HLLbUIC8Pm5McXxkTTh9vhvJN4UPjPQXTD6ZvkcrHNzM6zpzrF5iDstX5kx2FjPbCSWnyZUZzE9Yx4nBKGRYsAl00yK2hUQZY";
  const onToken = (token) => {
    dispatch(clearCart());
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default connect()(StripeCheckoutButton);
