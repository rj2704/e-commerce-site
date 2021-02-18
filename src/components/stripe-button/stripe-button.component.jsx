import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IM8C3Au9lCCM2tncAryMx6Ay6ybho8sbjKzURnpZC7KPmb8iqE8qMixAYwhU6ZSc3RWmqVWYfW6wX4PqIjzvEgp00OtNR9Taz';


    const onToken = token => {
        alert('Payment Successful');
    }


    return (
        <StripeCheckout 
        label='Pay Now'
        name='Shoppers Point Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;

