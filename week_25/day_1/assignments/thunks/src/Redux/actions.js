import axios from "axios";
import {ADD_COUNTER,REDUCE_COUNTER,ADD_TODO,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILURE,FETCH_GITHUB_REQUEST,FETCH_GITHUB_SUCCESS,FETCH_GITHUB_FAILURE} from "./actionTypes";


export const addCounter = (payload) => ({
  type: ADD_COUNTER,
  payload
});

export const reduceCounter = (payload) => ({
  type: REDUCE_COUNTER,
  payload
});

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload: { title: payload, status: false }
});

export const authSuccess = (payload) => ({
  type: "AUTH_SUCCESS",
  payload
});

export const asyncRequest = () => ({
  type: "ASYNC_REQUEST"
});

export const asyncSuccess = () => ({
  type: "ASYNC_SUCCESS"
});

export const asyncFailure = () => ({
  type: "ASYNC_FAILURE"
});

// export const fetchUserRequest = payload =>({
//     type:FETCH_GITHUB_REQUEST,
//     payload
// })
// export const fetchUserSuccess = payload =({
//     type:FETCH_GITHUB_SUCCESS,
//     payload
// });
// export const fetchUserFailure = payload => ({
//     type:FETCH_GITHUB_FAILURE,
//     payload
// });

export const asyncCall = (payload) => (dispatch) => {
  dispatch(asyncRequest());
  
  if (true) {
    dispatch(asyncSuccess());
  } 
  else {
    dispatch(asyncFailure());
  }
};

export const userLoginRequest = () => ({
  type: USER_LOGIN_REQUEST
});

export const userLoginSuccess = (token) => ({
  type: USER_LOGIN_SUCCESS,
  payload: {
    token
  }
});

export const userLoginFailure = () => ({
  type: USER_LOGIN_FAILURE
});

export const userLogin = (payload) => (dispatch) => {
  dispatch(userLoginRequest());
  axios
    .post("https://reqres.in/api/login", {
      email: payload.email,
      password: payload.password
    })
    .then((res) => {
      dispatch(userLoginSuccess(res.data.token));
    })
    .catch((err) => {
      dispatch(userLoginFailure());
    });
};
