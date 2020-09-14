import React, { Component } from "react";


class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: []
    };
  }

  async componentDidMount() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (res.ok) {
      let result = await res.json();

      console.log(result);

      await this.setState({
        task: result
      });
    }
  }

  render() {
    const renderTodo = this.state.task.map((item, index) => {
      return (
        <div style={{textAlign:"left", padding:"5px" ,margin:"10px"}} key={index}>
          <h5> Task: {item.title} </h5>
          {item.completed && <h5 style={{ color: "red" }}> status: DONE</h5>}
          {!item.completed && (
            <h5 style={{ color: "green" }}> status:NOT DONE</h5>
            
          )}
          <hr/>
        </div>
      );
    });
    return (
      <>
        <div>
      <React.Fragment>
        <h2>Email :{this.props.email}</h2>
        <h3> Token :{this.props.token} </h3>
        <hr/>
        <div>{renderTodo}</div>
        
      </React.Fragment>
        </div>
      </>
      
    );
  }
}

export default UserDetail;
