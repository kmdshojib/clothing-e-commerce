import React from 'react';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectCollectionsFroPreview} from '../../../redux/shop/shop.selector'

import PreviewCollection from './../preview-collection/preview-collection'

import {CollectionsOverviewContainer} from './collectionoverview.styles'

const CollectionsOverview = ({collections}) => {
    return ( 
        <CollectionsOverviewContainer>
            {
                collections.map(({id, ...restCollestionProps}) =>(
                    <PreviewCollection key={id} {...restCollestionProps}/>
                ))
            }
        </CollectionsOverviewContainer>
     );
}
const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsFroPreview
})
 
export default connect(mapStateToProps) (CollectionsOverview);