import React from 'react';
import './App.css';
import Event from "./components/Coding-1/Event"
import Todo from "./components/Coding-2/Todo"
import Display from "./components/coding-3/display-card"
import DisplayCard from "./components/ProblemSolving/display-card"

function App() {
  return (
    <div className="App">
      <Event/>
      <br/>
      <hr/>
     <Todo/>
     <br/>
     <hr/>
     <Display/>
     <hr/>
     <DisplayCard/>
    </div>
    
  );
}

export default App;
