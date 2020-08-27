import React from "react";

export default class GithubUserName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      data: []
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(name);
  };

  componentDidMount = () => {
    
    let name = "harshakhan";
    fetch(`https://api.github.com/search/users?q=user:${name}`)
      .then((res) => res.json())
      .then(
        (res) => console.log(res)
        
      );
  };

  render() {
      console.log(this)
    return (
      <div>
        <label>
          UserName:
          <input
            type="text"
            name="name"
            placeholder="Enter GitHub UserName"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <h1>{this.state.data}</h1>
        </label>
      </div>
    );
  }
}
