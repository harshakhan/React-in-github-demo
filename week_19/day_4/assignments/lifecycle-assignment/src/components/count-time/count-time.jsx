import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleChange = (e) => {
    this.setState({
      count: e.target.value
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Current Count: {count}</h1>
        <input type="number" name="count" onChange={this.handleChange} />
      
      </div>
    );
  }
  // setInterval
  // clearInterval
  componentDidMount() {
    this.myInterval = setInterval(() => {
      if(this.state.count>0){

        this.setState((prevState) => ({
          count: prevState.count - 1
        }));
      }
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}

export default Timer;
