import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST
  } from "./actionType";
  export const initState = {
    errorReg: "",
    successReg: "",
    isLoadingLogin: false,
    errorLogin: "",
    isAuth: false,
    token: ""
  };
  export default (state = initState, { type, payload }) => {
    switch (type) {
      case USER_REGISTER_REQUEST:
        return {
          ...state,
          errorReg: ""
        };
      case USER_REGISTER_SUCCESS:
        return {
          ...state,
          successReg: "Registration Success"
        };
      case USER_REGISTER_FAILURE:
        return {
          ...state,
          errorReg: "something went wrong"
        };
      case USER_LOGIN_REQUEST:
        console.log(state);
        return {
          ...state,
          errorLogin: "",
          isLoading: true
        };
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          isLoadingLogin: false,
          isAuth: true,
          token: payload.token
        };
      case USER_LOGIN_FAILURE:
        return {
          ...state,
          isLoadingLogin: false,
          errorLogin: "something went wrong"
        };
      default:
        return state;
    }
  };
  