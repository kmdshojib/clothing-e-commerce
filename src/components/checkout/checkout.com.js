import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../checkout-items/checkout-item.com';

import './checkout.styles.scss'

const CheckoutPage = ({cartItems,total}) => {
    return ( 
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>

                <div className="header-block">
                    <span>Discription</span>
                </div>

                <div className="header-block">
                    <span>Quantity</span>
                </div>

                <div className="header-block">
                    <span>Price</span>
                </div>

                 <div className="header-block">
                    <span>Remove</span>
                </div>

            </div>
            {cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} item={cartItem}/>))}

            <div className="total">
                <span>Total: ${total}</span>
            </div>
        </div>
     );
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total: selectCartTotal,
})
export default connect(mapStateToProps) (CheckoutPage);