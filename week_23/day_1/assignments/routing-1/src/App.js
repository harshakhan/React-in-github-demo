import React from 'react';
import Navbar from "./Components/Navbar"
import './App.css';
import { Routes } from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <h1>Routing</h1>
      {/* <Navbar/> */}
      <Routes/>
      
    
    </div>
  );
}

export default App;
