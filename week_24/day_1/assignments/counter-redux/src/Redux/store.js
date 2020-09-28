import { createStore } from "redux";
import actionTypes from "./actionTypes";
import { reducer } from "./reducer";

export const store = createStore(reducer);
