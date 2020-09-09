import React from 'react';
import './App.css';
// import GithubUserName  from './components/git-hub-user/ComponentDidiMount'
import Git from './components/git-hub-user/git'
// import AssignOne from './components/mahes-solution/GitHub-Api';
// import AssignTwo from './components/mahes-solution/ComponentDidiupdate';


function App() {
  return (
    <div className="App">
       {/* <GithubUserName /> */}
       <Git/>
       {/* <AssignOne/> */}
       {/* <AssignTwo/> */}
    </div>
  );
}

export default App;

//------------------------------------------------------------------

//   // for-count time different app.js



// import React from "react";
// import "./App.css";
// import Timer from './components/count-time/count-time'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: false
//     };
//   }
//   toggle = () => {
//     this.setState({
//       show: !this.state.show
//     });
//   };

//   render() {
//     return (
//       <div>
//         {this.state.show && <Timer />}
//         <button onClick={this.toggle}>
//           {this.state.show ? "Hide" : "Show"}
//         </button>
//       </div>
//     );
//   }
// }
// export default App;
