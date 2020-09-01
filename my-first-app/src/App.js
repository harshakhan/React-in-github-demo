import React from 'react';
import styles from './App.module.css';
import List from './components/List'
import AnotherList from './components/AnotherList'


//functional components
//class components
function App() {
  return (
    <div className={styles.header}>
      Hello World
      {/* access anything rom public folder  */}
      
      <img src="/logo192.png" alt ='img' />
      <List/>
      <AnotherList />
    </div>
  );
}

export default App;
