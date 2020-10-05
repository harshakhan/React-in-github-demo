import {ADD_COUNTER,REDUCE_COUNTER,ADD_TODO,DELETE_TODO, TOGGLE_TODO, COMPLETED_TASK} from "./actionTypes";

  import { v4 as uuid } from "uuid";
  
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
    payload: {
      id: uuid(),
      title: payload,
      status: false
    }
  });
  
  export const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload
  });
  export const toggleStatus = (payload) => ({
    type: TOGGLE_TODO,
    payload
  });
  export const filterTask =(payload) => ({
    type:COMPLETED_TASK,
    payload
  })
  