import  userActionTypes  from "./user.typs";


//GOOGLe SIGNIN user Action Types

export const googleSignInStart = () => ({
  type:userActionTypes.GOOGLE_SIGN_IN_START,
})

export const SignInSuccess = user => ({
  type:userActionTypes.SIGN_IN_SUCCESS,
  payload:user
  
})

export const SignInFailure = error => ({
  type:userActionTypes.SIGN_IN_FAILIURE,
  payload:error
})

//Email Sign IN Attion Type

export const emailSignInStart = emailAndPassword => ({
  type:userActionTypes.EMAIL_SIGN_IN_START,
  payload:emailAndPassword

})

//signout Attion Type

export const signOutStart = () =>({
  type:userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () =>({
  type:userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) =>({
  type:userActionTypes.SIGN_OUT_FAILIURE,
  payload:error
})

export const checkUserSession = () =>({
  type:userActionTypes.CHECK_USER_SESSION
})


//signup saga action

export const signUpStart = userCredentials =>({
  type:userActionTypes.SIGN_UP_START,
  payload:userCredentials
})

export const signUpSuccess = ({user, additionalData}) =>({
  type:userActionTypes.SIGN_UP_SUCCESS,
  payload:{user, additionalData}
})

export const signUpFailure = (error) =>({
  type:userActionTypes.SIGN_IN_FAILIURE,
  payload:error
})