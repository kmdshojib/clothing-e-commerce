import {all, call,takeLatest,put} from 'redux-saga/effects'

import userActionTypes from '../user/user.typs'
import { clearCart } from './cart.action'

export function* clarSignOutSuccess(){
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clarSignOutSuccess)
}

export function* cartSaga(){
    yield(all([call(onSignOutSuccess)]))
}