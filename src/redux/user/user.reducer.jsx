import  userActionTypes  from "./user.typs";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error:null
      }
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser:null,
        error:null
      }
    case userActionTypes.SIGN_IN_FAILIURE:
    case userActionTypes.SIGN_OUT_FAILIURE:
    case userActionTypes.SIGN_UP_FAILIURE:
      return {
        ...state,
        error:action.payload
      }
    default:
      return state;
  }
};

export default userReducer;