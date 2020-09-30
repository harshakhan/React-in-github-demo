import{INCREMENT,DECREMENT,MULTIPLY,DIVIDE} from "./actionTypes";

export const increment = (payload) => ({
  type:INCREMENT,
  payload
})

export const decrement = (payload) => ({
  type:DECREMENT,
  payload
  })

export const multiply = (payload) => ({
  type: MULTIPLY,
  payload
})
export const divide = (payload) => ({
  type:DIVIDE,
  payload
})