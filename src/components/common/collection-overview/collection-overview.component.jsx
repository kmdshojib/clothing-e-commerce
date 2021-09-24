import React from 'react';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectCollectionsFroPreview} from '../../../redux/shop/shop.selector'

import PreviewCollection from './../preview-collection/preview-collection'
import './collection-overview.styles.scss'

const CollectionsOverview = ({collections}) => {
    return ( 
        <div className="collections-overview">
            {
                collections.map(({id, ...restCollestionProps}) =>(
                    <PreviewCollection key={id} {...restCollestionProps}/>
                ))
            }
        </div>
     );
}
const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsFroPreview
})
 
export default connect(mapStateToProps) (CollectionsOverview);