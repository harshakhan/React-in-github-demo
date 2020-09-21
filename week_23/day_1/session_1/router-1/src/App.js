import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from '../../../assignments/routing-1/src/Components/Navbar'
import { Routes } from '../../../assignments/routing-1/src/Routes/Routes'

function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes/>
   </BrowserRouter>
  )
}

export default App