import React from 'react';
import './App.css';
import Count from './Components/Count';
import FilterGit from './Components/pageFilterGit';
import Github from './Components/SearchGit';

function App() {
  return (
    <div className="App">
      <Count/>
      <Github/>
      <FilterGit/>
     
    </div>
  );
}

export default App;
