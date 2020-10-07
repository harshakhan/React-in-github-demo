import {
    ADD_COUNTER,
    REDUCE_COUNTER,
    ADD_TODO,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
  } from "./actionTypes";
  import { loadData, saveData } from "./localStorage";
  
  export const initState = {
    counter: 0,
    todo: loadData("tasks") || [],
    isLoading: false,
    error: "",
    isAuth: false,
    token: ""
  };
  
  export default (state = initState, { type, payload }) => {
    console.log(type, payload);
    switch (type) {
      case ADD_COUNTER:
        return {
          ...state,
          counter: state.counter + payload
        };
      case REDUCE_COUNTER:
        return {
          ...state,
          counter: state.counter - payload
        };
      case ADD_TODO:
        let data = [...state.todo, payload];
        saveData("tasks", data);
        return {
          ...state,
          todo: data
        };
      case USER_LOGIN_REQUEST:
        return {
          ...state,
          error: "",
          isLoading: true
        };
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          token: payload.token
        };
      case USER_LOGIN_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: "something went wrong"
        };
      default:
        return state;
    }
  };
  