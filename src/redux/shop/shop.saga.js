import {takeLatest, call, put, all} from 'redux-saga/effects'

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.action'

import shopActionTypes from "./shop.types"


export function* fetchCollectionsStartAsync(){
    yield console.log("I got your Job")

    try{
        const collectionRef = firestore.collection('collections')
    
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap, 
            snapshot
        )
        yield put(fetchCollectionsSuccess(collectionsMap))

    }catch (error){
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsStartAsync
    )
}
export function* shopSaga(){
    yield all([call (fetchCollectionsStart),])
}