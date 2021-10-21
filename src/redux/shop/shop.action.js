import shopActionTypes from "./shop.types";
// import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () =>({
    type:shopActionTypes.FETCH_COLLECTIONS_START
    
})

export const fetchCollectionsSuccess = collectionMap => ({
    type:shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap,
}) 

export const fetchCollectionsFailure = errorMessage => ({
    type:shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

