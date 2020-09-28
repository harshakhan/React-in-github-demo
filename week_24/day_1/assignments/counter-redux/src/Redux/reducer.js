import actionConstants from "./actionTypes";

const initState = { counter: 0 };
let count = 0;
const reducer = (state = initState, action) => {
  console.log(count++);
  switch (action.type) {
    case actionConstants.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case actionConstants.DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - action.payload
      };

    default:
      return state;
  }
};

export { reducer };
