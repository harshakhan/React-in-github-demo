import React from 'react';
import './App.css';
import Navbar from './Components';
import { Routes } from './Router/routes';
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes/>
    </BrowserRouter>
  
  );
}

export default App;
