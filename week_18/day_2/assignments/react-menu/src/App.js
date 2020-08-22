import React from 'react';
import styles from'./App.module.css';
import Join from './components/Join.jsx'
import Login from './components/Login.jsx'
import Search from './components/Search'
import Home from './components/Home'
import Setting from './components/Setting'
import Contact from './components/Contact'
import Help from './components/Help'
import Download from './components/Download'

function App() {
  return (
  
      <div className={styles.App}>
        <div>
          <Join/>
          <Login/>
          <Search/>
          <Home/>
        </div>
        <div>
          <Setting/>
          <Contact/>
          <Help/>
          <Download/>
        </div>
      </div>
   
  )
}

export default App;
