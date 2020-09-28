import actionConstants from "./actionTypes";

const incrementCounter = (payload) => {
  return {
    type: actionConstants.INCREMENT_COUNTER,
    payload
  };
};

const decrementCounter = (payload) => {
  return {
    type: actionConstants.DECREMENT_COUNTER,
    payload
  };
};

export { incrementCounter, decrementCounter };
