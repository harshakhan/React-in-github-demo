import React, {Component} from 'react'

export default class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: "",
            tasks: [ ]
        }
    }

    handleInput = (e) =>{
        const {value} = e.target
        this.setState({value: value})

    }
    addList= () =>{
        const {value,tasks} = this.state
        this.setState({
            tasks : [...tasks, value]
        })
    }
    render(){
        const {tasks} = this.state
        return(
           <div>
                <input type="text" onChange={this.handleInput} value={this.state.value}/>
                <button onClick={this.addList}>Add</button>
                <ul>
                    {tasks.map(item => <li>{item}</li>)}
                </ul>
           </div>
        )
    }
}