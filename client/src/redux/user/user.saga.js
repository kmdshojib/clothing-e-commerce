import {takeLatest, put, all, call } from 'redux-saga/effects'

import userActionTypes from './user.typs'

import {
    SignInSuccess, 
    SignInFailure, 

    signOutSuccess, 
    signOutFailure,

    signUpSuccess, 
    signUpFailure,
} from './user.action'

import {
    auth, 
    googleProvider, 
    createUserProfileDocument, 
    getCurrentUser
} from '../../firebase/firebase.utils'


export function* getSnapshotFromUser(userAuth,additionalData) {
    try{
        const userRef = yield call( createUserProfileDocument, userAuth, additionalData)
        const userSnapshot = yield userRef.get()
        yield put (
            SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        )

    }catch(error){
        yield put(SignInFailure(error))
    }
}

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUser(user)
    }catch(error){
        yield put(SignInFailure(error))
    }
        
}


export function* signInWithEmail({payload: {email, password}}){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUser(user)

    }catch(error){
        put(signOutFailure(error))
    }
}

export function* signOut() {
    try{
        yield auth.signOut()
        yield put (signOutSuccess())
    }catch(error){
        yield put(SignInFailure(error))
    }
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser()
        if(!userAuth) return
        yield getSnapshotFromUser(userAuth)
    }catch(error){
        yield put(SignInFailure(error))
    }
}

//sign up saga user

export function* signUp({ payload: { email, password, displayName } }) {
    try {
      const { user } = yield auth.createUserWithEmailAndPassword(email, password);
      yield put(signUpSuccess({ user, additionalData: { displayName } }));
    } catch (error) {
      yield put(signUpFailure(error));
    }
  }

export function* signInAfterSignUp({payload:{user, additionalData}}){
    yield getSnapshotFromUser(user,additionalData)
}

export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGN_UP_START,signUp)
}
export function* onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}


export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle )
}

export function* OnEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignOutStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

export function* userSaga(){
    yield all([
        call (onGoogleSignInStart), 
        call(OnEmailSignInStart),

        call(isUserAuthenticated),
        call(onSignOutStart),

        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}