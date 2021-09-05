import { userActionTypes } from "./user.typs";
export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
  });