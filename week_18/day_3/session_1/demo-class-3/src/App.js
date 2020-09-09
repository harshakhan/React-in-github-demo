import React from 'react';
import './App.css';
import Stateless from "./components/Stateless"
import Stateful from "./components/Stateful"

function App() {
  return (
    <div className="App">
      {/* <Stateless name="Raj"/>
      <Stateless name="Anwesa"/> */}
      <Stateful name="Masai"/>
      <Stateful name="School"/>

      
    </div>
  );
}

export default App;
