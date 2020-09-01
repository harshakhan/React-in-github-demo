// import React from "react"

// class Counter extends React.Component{
//     constructor(props){
//         super(props)
//         this.state ={
//             value:0
//         }
//         this.counter = 0
//         this.handleClick=this.handleClick.bind(this)
//     }

//     handleClick(){
//         this.setState({
//             value: this.state.value +1
//         })
//     }

//     render(){
        
//         return (
//             <>
//                 <div>
//                     I am a class components.
//                 </div>
//                 <h5>{this.state.value}</h5>
//                 <button onClick={this.handleClick}>ADD</button>
//             </>
//         )
//     }
// }

// export default Counter


//------------------------------------------------------

// // By Clicking one button another volue count will also been increased.
// // first button is being depend  on other value



// import React from "react"

// class Counter extends React.Component{
//     constructor(props){
//         super(props)
//         this.state ={
//             value:0,
//             value2:100
//         }
//         this.counter = 0
//         this.handleClick=this.handleClick.bind(this)
//         this.handleSecoundValue = this.handleSecoundValue.bind(this)
//     }

//     handleClick(){
//         this.setState(state=>({
//             value: this.state.value +1
//         }))

//         this.setState(state=>({
//             value2: state.value2 + state.value
//         }))

//         console.log(this.state.value)
//     }

//     handleSecoundValue(){
//         this.setState((state)=>{
//             return {
//                 value2: state.value2 +1
//             }
//         })
//     }

//     render(){
        
//         return (
//             <>
//                 <div>
//                     I am a class components.
//                 </div>
//                 <h5>{this.state.value}</h5>
//                 <button onClick={this.handleClick}>ADD</button>
//                  <h5>{this.state.value2}</h5>
//                 <button onClick={this.handleSecoundValue}>ADD Secound </button>
//             </>
//         )
//     }
// }

// export default Counter

//-----------------------------------------------------------------------------------


//setState can add one more arguments
// callback we are using over here will only be invoked after render method is being done.



import React from "react"

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            value:0,
            value2:100
        }
        this.counter = 0
        this.handleClick=this.handleClick.bind(this)
        this.handleSecoundValue = this.handleSecoundValue.bind(this)
    }

    handleClick(){
        this.setState(state=>({
            value: this.state.value +1
        }),()=>console.log('updated'))

        this.setState(state=>({
            value2: state.value2 + state.value
        }))

        console.log('end of handle click')
    }

    handleSecoundValue(){
        this.setState((state)=>{
            return {
                value2: state.value2 +1
            }
        })
    }

    render(){
        console.log('render')
        return (
            <>
                <div>
                    I am a class components.
                </div>
                <h5>{this.state.value}</h5>
                <button onClick={this.handleClick}>ADD</button>
                 <h5>{this.state.value2}</h5>
                <button onClick={this.handleSecoundValue}>ADD Secound </button>
            </>
        )
    }
}

export default Counter