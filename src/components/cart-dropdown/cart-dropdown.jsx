import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import Button from '../common/custom-button/button';
import CartItem from '../cart-item/cart-item.component'

import {selectCartItems} from '../../redux/cart/cart.selectors'
import './cart-dropdown.styles.scss'
import { toggleCartHidden } from './../../redux/cart/cart.action';

const CartDropdown = ({cartItems,history, dispatch}) => {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
               {
                cartItems.length?(
                   cartItems.map( cartItem => (
                   <CartItem key={cartItem.id} item={cartItem} />
               ))
               ):(
                   <span className="empty-message">Your cart is empty </span>
               )}
            </div>
            <Button onClick={()=>{
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</Button>
        </div>
     );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
  });


export default withRouter (connect(mapStateToProps)(CartDropdown));
