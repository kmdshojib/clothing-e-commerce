import React from 'react';
import {connect} from 'react-redux'
import CollectionItem from '../collection-item/collection-item'
import {selectCollection} from '../../../redux/shop/shop.selector'
import {CollectionPageContainer,TitleContainer,ItemsContainer} from './collection.styles'


const CollectionPage = ({collection}) => {
    const {title,items} = collection;
    return ( 
        <CollectionPageContainer>
            <TitleContainer>{title}</TitleContainer>
            <ItemsContainer>
                {
                    items.map(item => (
                        <CollectionItem  key={item.id} item={item}/>
                ))}
            </ItemsContainer>
        </CollectionPageContainer>
     );
}
 
const mapStateToProps = (state,ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
 
export default connect(mapStateToProps)(CollectionPage) ;
