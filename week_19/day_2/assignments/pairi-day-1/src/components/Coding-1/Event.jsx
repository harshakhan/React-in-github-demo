import React from 'react'

export default class Event extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            password: "",
            isAuth: false
        }
    }

    handleInput = (e) =>{
        const {name,value} = e.target
        console.log(value)
        this.setState({
            [name] : value
        })
    }

    handleLogin = () =>{
        const {name,password,isAuth} = this.state
        // console.log(this.state.name,this.state.password)
        if(name=="admin" && password =="password"){
            this.setState({isAuth: !isAuth})
        }
    }

    render(){
        const {isAuth} = this.state
        if(isAuth){
            return(
                <div>
                    <button onClick={this.handleLogin}>SignOut</button>
                    <p>User is signed in</p>
                </div>
            )
        }
        else{
            return(
                <>
                    <label> Username:
                        <input name="name" onChange={this.handleInput} value={this.state.name}></input>
                    </label>
                    <label> Password:
                        <input name="password" onChange={this.handleInput} value={this.state.password}></input>
                    </label>
                    <br />
                    <button onClick={this.handleLogin}>SignIn</button>
                </>
            )
        }
    }
    
}