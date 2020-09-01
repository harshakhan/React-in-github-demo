import React from 'react';

export default class AssignTwo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            role:'',
        }
    }

    componentDidMount(){
        let username =localStorage.getItem('username') || ""  // intial we there will be pass empty array to avoid error
        let email = localStorage.getItem('email') || ""
        let role=localStorage.getItem('role') || ""

        if(username.length !==0 && email.length!==0 && role.length!==0){
            this.setState({
                username:username,
                email:email,
                role:role,
            })
        }
    }

    componentDidUpdate(prevProps,prevState){
        console.log("update called")
        localStorage.setItem('username',this.state.username)
        localStorage.setItem('email',this.state.email)
        localStorage.setItem('role',this.state.role)


    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(event)=>{
        
    }
}