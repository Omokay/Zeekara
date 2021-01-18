import React from 'react';
import StripeCheckoutButton from 'react-stripe-checkout';


const StripeCheckout = ({ price }) => {
    const computedPrice = price * 100;
    const publishableKey = 'pk_test_G7D8OaDY1zUuCIdJvN2cjc8U00fmDLCGCO';


    const onToken = (token) => {
        console.log(token);
        alert('Payment is successful!');
    }

    return (
        <StripeCheckout

            name='Zeekara Line' 
            description='Zeekara' 
            image='https://stripe.com/img/documentation/checkout/marketplace.png' // 
            label='Purchase' 
            panelLabel='Make payment' 
            amount={computedPrice} 
            currency='NGN'
            stripeKey={publishableKey}
            email='chuku.omoke@gmail.com'
            token={onToken} 
            submit callback
            />

    )
};

export default StripeCheckoutButton;