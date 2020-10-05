import {v4 as uuid} from "uuid";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes"

export const addTodo = (payload) => ({
    type:ADD_TODO,
    payload:{
        id:uuid(),
        title:payload,
        status: false
    }
});

export const deleteTodo = (payload) => ({
    type:DELETE_TODO,
    payload
});

export const toggleStatus = (payload) => ({
    type:TOGGLE_TODO,
    payload
});