import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({price}) => {
        const priceForStripe = price * 100;
        const publishableKey = 	'pk_test_51JdWo3LpOzfOjCOJ6T1HAMEWat0NqMJGFNBTQpoXTJSXaeFkWsIzxmxHupUt5J7m3QbmH18RVCf22AFdDtFhkpEn00nuHoRpWn'

        const onToken = token => {
            axios({
                url: '/payment',
                metchod:'post',
                data:{
                    ammount:priceForStripe,
                    token
                }
            })
            .then(response =>{
                console.log("payment successful")
            })
            .catch(error =>{
                console.log("payment successful")
            })
        }

    return (     
        <StripeCheckout 
            label='Pay Now'
            name ='Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />

      
     );
}
 
export default StripeCheckoutButton;
