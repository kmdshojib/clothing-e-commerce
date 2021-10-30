import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {compose} from 'redux'

import { selectCollectionFetching } from '../../../redux/shop/shop.selector';
import withSpinner from '../../withspiner/with-spiner.component'
import CollectionsOverview from './collection-overview.component'


const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer