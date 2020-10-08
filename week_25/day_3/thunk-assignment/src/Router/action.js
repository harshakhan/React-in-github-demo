import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE
} from "./actionType";

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
    .post("http://localhost:8080/auth/login", {
      username: payload.username,
      password: payload.password
    })
    .then((res) => {
      dispatch(userLoginSuccess(res.data.token));
    })
    .catch((err) => {
      dispatch(userLoginFailure());
    });
};

export const userRegisterRequest = () => ({
  type: USER_REGISTER_REQUEST
});

export const userRegisterSuccess = (token) => ({
  type: USER_REGISTER_SUCCESS,
  payload: {
    token
  }
});

export const userRegisterFailure = () => ({
  type: USER_REGISTER_FAILURE
});

export const userRegister = (payload) => (dispatch) => {
  dispatch(userRegisterRequest());
  axios
    .post("http://localhost:8080/auth/register", {
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: payload.password,
      mobile: payload.mobile,
      description: payload.description
    })
    .then((res) => {
      dispatch(userRegisterSuccess(res.data.token));
    })
    .catch((err) => {
      dispatch(userRegisterFailure());
    });
};
