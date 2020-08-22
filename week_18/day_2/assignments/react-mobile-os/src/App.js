import React from 'react';
import './App.css';
import List from './components/list.jsx'
import List1 from './components/list1'

const element1 = ['Android','Blackberry','IPhone','Window Phone']

const element2 =['Samsung','HTC','Micromax','Apple']

function App() {
  return (
    <>
      <List title = "Mobile Operating System" data={element1}/>
      <List1 title ="Mobile Manufactures" data={element2}/>
    </>
  );
}

export default App
