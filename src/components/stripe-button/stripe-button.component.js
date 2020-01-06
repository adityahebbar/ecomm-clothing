import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const STRIPE_KEY = 'pk_test_6Dqr3ZbuYJQo0QrwK5QOLRUK00CNBYCgny';

const StripeButton = ({ price }) => {

    const priceForStripe = price * 100;

    const onToken = (token) => {
        console.log(token)
    }

    return (
        <StripeCheckout
            label="Pay Now"
            token={onToken}
            stripeKey={STRIPE_KEY}
            image="https://svgshare.com/i/CUz.svg"
            name="ECOMM CLOTHING"
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            shippingAddress
            billingAddress
        />
    );
}

export default StripeButton;