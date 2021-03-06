import React from 'react';
import {connect} from 'react-redux';
import { addItem } from '../../../redux/cart/cart.action';

import {CollectionItemContainer,AddButton,BackgroundImage,CollectionFooterContainer,NameContainer,PriceContainer} from './collectionitem.styles'



const CollectionItem = ({item,addItem}) => {
    const {name,price,imageUrl} = item;
    return ( 
        <CollectionItemContainer>
           <BackgroundImage
            className='image'
            style={{
            backgroundImage: `url(${imageUrl})`
            }}
        />

            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer className='price'>${price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>Add to cart</AddButton>
        </CollectionItemContainer>
     );
}
 
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem);