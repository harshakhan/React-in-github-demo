import React from 'react';
import './App.css';
import Navbar from './Components';
import { Routes } from './Router/routes';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes/>
    </BrowserRouter>
  
  );
}

export default App;
