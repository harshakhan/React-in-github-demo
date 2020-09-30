import React from "react";
import { addCounter, reduceCounter } from "../Redux/actions";
import connect from "../Redux/connect";

const Counter = props => {
  const { addCounter, reduceCounter, counter } = props;
  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={addCounter}>ADD</button>
      <button onClick={reduceCounter}>REDUCE</button>
      <br/>
    </>
  );
};

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  addCounter: () => dispatch(addCounter(1)),
  reduceCounter: () => dispatch(reduceCounter(1))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);