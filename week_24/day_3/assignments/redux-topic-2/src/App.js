import React from 'react';
import './App.css';
import Counter from './Component/Counter';
import Todo from './Component/Todo';

export default class App extends React.Component{
  render(){

    return (
      <div className="App">
       <Counter/>
       <Todo/>
      </div>
    );
  }
}

