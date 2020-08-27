import React from "react";

export default class Git extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount = () => {
    let name = "harshakhan";
    fetch(`https://api.github.com/search/users?q=user:${name}`)
      .then((output) => output.json())
      .then((output) =>
        this.setState({
          data: output.items[0]
        })
      );
  };

  render() {
      console.log(this.state)
    return (
      <>
        <h1>Welcome To GitHub</h1>
        <img style={{border:"2px solid black", borderRadius: '50px',width:'100px',height:'100px'}} src={this.state.data.avatar_url} alt="avatar_img" />
        <h3> Name : {this.state.data.login}</h3>
        <h3>User Id: {this.state.data.id}</h3>
        <h3>User Id: {this.state.data.bio}</h3>
        <h3>URL: {this.state.data.url}</h3>
       
      </>
    );
  }
}
