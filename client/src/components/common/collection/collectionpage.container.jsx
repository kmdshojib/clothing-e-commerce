import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {compose} from 'redux'

import { selectCollectionsLoaded } from '../../../redux/shop/shop.selector';
import withSpinner from '../../withspiner/with-spiner.component'

import CollectionPage from './collection.component'


const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionPage)

export default CollectionPageContainer