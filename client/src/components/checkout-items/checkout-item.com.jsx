import React from 'react';
import {connect} from 'react-redux'

import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.action'
import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
  } from './checkoutitems.styles';

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
    const  {name,imageUrl,price,quantity} = item
    return ( 
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl}  alt="item" />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div className="arrow" onClick={()=> removeItem(item)}> &#10094; </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=> addItem(item)}> &#10095; </div>
            </QuantityContainer>
            <span className="price">{price}</span>
            <RemoveButtonContainer onClick={()=> clearItem(item)}>&#10006;</RemoveButtonContainer>
         
        </CheckoutItemContainer>
     );
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})
 
export default connect(null,mapDispatchToProps) (CheckoutItem);