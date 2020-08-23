import React from 'react';
import './App.css';
import ReactCard from './components/ReactCard'
import  ProfileImage from './components/ProfileImage'


const user = {
  name :"Harsha Khan",
  location : "Kolkata",
  title: "Full Stack Developer",
  avatar : "https://www.masaischool.com/static/team/prateek.jpeg",
  skills : ["UI/UX","Java Script", "Frontend Developer","React","Node","HTML","CSS"],
 
}

function App() {
  return (
    <div className="App">
      <ReactCard data ={user}/>
     


      
    </div>
  );
}

export default App;
 