import React from 'react';
import {connect} from 'react-redux'

import Button from '../common/custom-button/button';
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems}) => {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
               {cartItems.map( cartItem => (
                   <CartItem key={cartItem.id} item={cartItem} />
               ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
     );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
  });


export default connect(mapStateToProps)(CartDropdown);