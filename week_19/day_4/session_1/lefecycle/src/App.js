// import React from 'react';

// import './App.css';

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       date:''
//     }
//     //1

//     console.log('constructor is called first')
//   }

//   componentDidMount(){
//     //3
    
//     console.log('componentDidMount called')
//     this.setState({
//       data:'something'
//     })
//   }

//   componentDidUpdate(){
//     //4

//     console.log('componentDidUpdate called')
//   }

//   componentWillUnmount(){


//   }

//   render(){
//     //2

//     console.log('render method called')
//     return(
//       <div>
//         Lifecycle method
//       </div>
//     )
//   }
// }

// export default App;



//------------------------------------------------------------------------------------------------------

// // render method and the componentDidUpdate is being called
// // onclicking the button




// import React from 'react';

// import './App.css';

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       date:'',
//       count:0
//     }
//     //1

//     console.log('constructor is called first')
//   }

//   componentDidMount(){
//     //3
    
//     console.log('componentDidMount called')
//     this.setState({
//       data:'something'
//     })
//   }

//   componentDidUpdate(){
//     //4
    
//     console.log('componentDidUpdate called')
//   }

//   componentWillUnmount(){


//   }

//   render(){
//     //2

//     console.log('render method called')
//     return(
//       <div>
//         {this.state.count}
//         <button onClick ={()=>this.setState({
//           count:this.state.count+1
//         })}>
//           ADD
//         </button>
//       </div>
//     )
//   }
// }

// export default App;



//-----------------------------------------------------------------------------------------

// craeting the clock with =lifecycle

import React from 'react';
import Clock from './components/clock/clock'

import './App.css';

class App extends React.Component{
 constructor(props){
   super(props)
   this.state={
     show:false
   }
 }
 toggle =()=>{
   this.setState({
     show: !this.state.show
   })
 }

 render(){
   return(
     <div>
       {this.state.show && <Clock />}
       <button onClick={this.toggle}>
         {this.state.show?'Hide':'Show'}
       </button>
     </div>
   )
 }
  
}

export default App;

