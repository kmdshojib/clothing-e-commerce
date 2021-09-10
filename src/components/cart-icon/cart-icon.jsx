import React from 'react';
import { connect } from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.action';
import {ReactComponent as ShopingIcon} from '../../static/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden,itemCount}) => {
    return ( 
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShopingIcon  className="shoping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
     );
}


const mapDispatchToProps =dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart:{cartItems}}) => ({
    itemCount:cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 
    0)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CartIcon);
