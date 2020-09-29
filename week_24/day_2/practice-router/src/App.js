import React from "react";
import store from "./redux/store";
import { increment, decrement,multiply,divide } from "./redux/action";

// console.log(store.getState());

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }
  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.handleUpdate);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  handleUpdate = () => {
    this.forceUpdate();
  };
  render() {
    return (
      <div className="App">
        <h1>COUNTER</h1>
        <input
          placeholder="enter a number"
          name="num"
          value={this.state.num}
          onChange={this.handleChange}
        ></input>
        {store.getState().counter === "undefined" ? (
          alert("error")
        ) : (
          <h2>{store.getState().counter}</h2>
        )}

        <button onClick={() => store.dispatch(increment(this.state.num))}>ADD</button>
        <button onClick={() => store.dispatch(decrement(this.state.num))}>REDUCE </button>
        <button onClick={() => store.dispatch(multiply(this.state.num))}>MULTIPLY</button>  
        <button onClick={() => store.dispatch(divide(this.state.num))}>DIVIDE</button>
      </div>
    );
  }
}