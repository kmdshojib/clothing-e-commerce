import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutBurron = ({price}) => {
        const priceForStripe = price * 100;
        const publishableKey = 	'pk_test_51JdWo3LpOzfOjCOJ6T1HAMEWat0NqMJGFNBTQpoXTJSXaeFkWsIzxmxHupUt5J7m3QbmH18RVCf22AFdDtFhkpEn00nuHoRpWn'

        const onToken = token => {
            console.log (token);
            alert('Payment successful')
        }

    return (     
        <StripeCheckout 
            label='Pay Now'
            name ='Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total ammount is $${price}`}
            ammount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
     );
}
 
export default StripeCheckoutBurron;