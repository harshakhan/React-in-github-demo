import React from 'react';

export default class AssignOne extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            name:''
        }
    }
    componentDidMount(){
        let profile ="harshakhan";
        fetch(`https://api.github.com/search/users?q=user:${profile}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                data:data.items
            })
        })
        .catch(err => console.error(err));
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        let profile=this.state.name;
        fetch(`https://api.github.com/search/users?q=user:${profile}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                data:data.items
            })
        })
        .catch(err=>console.error(err));
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        const{data}=this.state
        return(
            <div className="mt-5 container">
                <form onSubmit={this.handleSubmit}>
                    Enter uername: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
                    <button type="submit">Submit</button>
                </form>
                <div className ='mt-5'>
                    <table classNames="table table-border">
                        <thread>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Login</th>
                                <th scope="col">Type</th>
                                <th scope="col">Followers</th>
                            </tr>
                        </thread>
                        <tbody>
                            {
                                data && data.map((ele,index)=>{
                                    return (
                                        <tr key={index}>
                                            <td><img src={ele.avatar_url} width="100px" height='100px' alt=""></img></td>
                                            <td>{ele.login}</td>
                                            <td>{ele.type}</td>
                                            <td>{ele.follwers_url}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
