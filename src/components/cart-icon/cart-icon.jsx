import React from 'react';
import { connect } from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.action';
import {ReactComponent as ShopingIcon} from '../../static/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden}) => {
    return ( 
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShopingIcon  className="shoping-icon"/>
            <span className="item-count">o</span>
        </div>
     );
}


const mapDispatchToProps =dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    null,
    mapDispatchToProps
    )(CartIcon);
