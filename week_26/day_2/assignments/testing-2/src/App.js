import React from 'react';
import './App.css';
import Button from './Components/Button';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  handleAdd = () => {
    const { count } = this.state
    this.setState({
      count: count + 5
    })
  }

  handleReduce = () => {
    const { count } = this.state
    this.setState({
      count: count - 5
    })
  }
  render(){
    const { count } = this.state
    return (
      <div className="App">
        <h1>COUNTER</h1>
        <h1 data-testid = "counter">{count}</h1>
        <Button label = "ADD" onClick = {this.handleAdd}/>
        <Button label = "REDUCE" onClick = {this.handleReduce}/>
      </div>
    );
  }
}

export default App;
