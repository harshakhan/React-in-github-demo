import React from "react"
import { store } from "./Redux/store";
import { decrementCounter, incrementCounter } from "./Redux/actions";

export default class App extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <h2>{store.getState().counter}</h2>
        <button onClick={() => store.dispatch(incrementCounter(1))}>ADD</button>
        <button onClick={() => store.dispatch(decrementCounter(1))}>
          REDUCE
        </button>
      </div>
    );
  }
}
