import React from 'react';


// //Stateful components
// //this.state - if we want to maintain surtain property

// // bind - it return the data with refer to the contest that you pass

// class Stateful extends React.Component{
//     constructor(props){

//         super(props)    // to inherit all the parent class property

//         this.state={
//             value : 'clicked me'
//         }
//         // this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick=()=>{
//         console.log(this.state.value)
//     }

//     render(){
//         return (
//             <div>
//             <div>
//                 Greeting {this.props.name}
//             </div>
//             <button onClick={this.handleClick}>
//                 Click me
//             </button>

//             </div>
//         )
//     }
// }



//------------------------------------------------------------

// class Stateful extends React.Component{
//     constructor(props){

//         super(props)    // to inherit all the parent class property

//         this.state={
//             value : 0
//         }
       
//     }

//     handleClick=()=>{
//         //console.log(this.state.value++)
//         // state cannot be modified directly
//         // React need to know when to re-render
//         // So there is a method called this.setState

//         this.setState({value: this.state.value +1})
//         // it accept an object but doesnot over ride it.

//         // state can only be used in class components

//         // setState and update, react will re-render the DOM for you


//         // this.setState is a bit asynchronous in nature
//     }
//     render(){
//         return (
//             <div>
//             <div>
//                 Greeting {this.props.name}
//             </div>
//             <div>
//                 Clicked{this.state.value}
//             </div>
//             <button onClick={this.handleClick}>
//                 Click me
//             </button>

//             </div>
//         )
//     }
// }


// --------------------------------------------------------------



// another example  with setState by changing the name with respect to number of clicked 
// onclicking the button it will update both the count and the title.


// class Stateful extends React.Component{
//     constructor(props){

//         super(props)    // to inherit all the parent class property

//         this.state={
//             value : 10,
//             name: 'masai'
//         }
       
//     }

//     handleClick=()=>{
//         //console.log(this.state.value++)
//         // state cannot be modified directly
//         // React need to know when to re-render
//         // So there is a method called this.setState
//         console.log('before', this.state.value)
//         this.setState({value: this.state.value +1})
//         console.log('after', this.state.value)

//         this.setState({name: 'school'})
//         // it accept an object but doesnot over ride it.

//         // state can only be used in class components

//         // setState and update, react will re-render the DOM for you


//         // this.setState is a bit asynchronous in nature
//     }
//     render(){
//         return (
//             <div>

//                 <div>
//                     Greeting {this.state.name}
//                 </div>
//                 <div>
//                     Clicked{this.state.value}
//                 </div>
//                 <button onClick={this.handleClick}>
//                     Click me
//                 </button>

//             </div>
//         )
//     }
// }



//--------------------------------------------------------------

// anoher example : 


class Stateful extends React.Component{
    constructor(props){

        super(props)    // to inherit all the parent class property

        this.state={
            value : 10,
            name: 'masai'
        }
       
    }

    handleClick=()=>{
    
        this.setState({value: this.state.value +1})
        
    }
    render(){
        return (
            <div>

                <div>
                    Greeting {this.state.name}
                </div>
                <div>
                    Clicked{this.state.value}
                </div>
                <button onClick={this.handleClick}>
                    Click me
                </button>

            </div>
        )
    }
}

export default Stateful