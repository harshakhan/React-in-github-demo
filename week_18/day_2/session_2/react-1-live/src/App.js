import React from 'react';
import './App.css';
import List from './components/List/List'
import Join from './components/Join'


const list1 =['milk','apples','banana']

const list2 = ['Javascript','react','css']

function App() {
  return (
    // <div className="App">
    //   <img src="/logo192.png" alt = "logo"/>
    //  <List title='My Todo List' data={list1}/>
    //  <List title ='Secoud List Components' data={list2}/>
    //  <div className="header">Masai</div>
    // </div>


    <Join/>
  );
}

export default App;
