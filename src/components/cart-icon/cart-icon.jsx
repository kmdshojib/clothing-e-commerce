import React from 'react';
import { connect } from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

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

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CartIcon);