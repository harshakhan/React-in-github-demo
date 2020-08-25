import React, {Component} from 'react'


export default class Display extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: " ",
            active:"",
            data: [
                {
                    "name": "Agnes",
                  "dob": "10th December, 1992"
                },
               { 
                  "name": "Mridul",
                  "dob": "9th Jan, 1991"
                },
              {
                  "name": "Pranav",
                  "dob": "27th October, 1992"
                },
              ]
        }
    }
    handleClick = (e) =>{
        let x = this.state.data.find(item => item.name===e.target.textContent)
        let y = this.state.data.indexOf(x)
        this.setState({
            value: `name: ${x.name}  DOB: ${x.dob}`,
            active: x.name
        })
        e.target.style.background="green"
        
    }
    render(){
        
        return(
            <div style={{display:"grid", gridTemplateColumns: "50% 50%"}}>
                <div>
                {this.state.data.map(item => <button style={{background: "gray", margin:"5px"}} onClick={this.handleClick}>{item.name}</button>)}
                </div>
                <div>{this.state.value}</div>
            </div>
        )
    }

}