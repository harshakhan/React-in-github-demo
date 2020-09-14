import React from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  input {
    margin: 15px;
    padding: 15px;
    border: 3px solid blue;
    font-weight: bold;
    border-radius: 15px;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  margin: 20px;
  text-align: center;
  border: 3px solid blue;
  font-weight: bold;
  border-radius: 15px;
  outline: none;
`;



const URL = "https://reqres.in";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: "",
      isAuth: false,
      isLogin: true
    };
  }

  handleAuthentication = async (e) => {
    e.preventDefault();
    //console.log(email,password)
    let url;
    if (this.state.isLogin) url = URL + "/api/login";
    else url = URL + "/api/register";

    let data = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(data);
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    let result = await res.json();
    if (result.token) {
      await this.setState({
        token: result.token,
        isAuth: true
      });
      this.props.onSuccess(data.email, this.state.token);
    }

    // console.log(await res.json());
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleLogin = () => {
    console.log("dfgdf");
    this.setState({
      isLogin: true
    });
  };
  handleRegistr = () => {
    console.log("dfgdf");
    this.setState({
      isLogin: false
    });
  };
  render() {
    const { email, token } = this.state;

    return (
      <>
        <h1>Enter Deatails</h1>
        <Card>
          <Button
            style={{
              marginLeft: "2px",
              marginRight: "80px",
              padding: "15px",
              width: "150px",
              backgroundColor: "#80DEEA",
              border: "none"
            }}
            onClick={() => this.handleLogin()}
          >
            Login
          </Button>
          <Button
            style={{
              padding: "15px",
              width: "150px",
              backgroundColor: "#FFB74D",
              border: "none"
            }}
            onClick={() => this.handleRegistr()}
          >
            Register
          </Button>

          <form onSubmit={this.handleAuthentication}>
            <div>
              <label>
                Email:
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="username"
                />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="password"
                />
              </label>
            </div>

            <input
              style={{
                width: "150px",
                background: "#64DD17",
                color: "white",
                border: "none"
              }}
              type="submit"
              value={this.state.isLogin ? "Login" : "Register"}
              onClick={this.handleAuthentication}
            />
          </form>
        </Card>
        
      </>
    );
  }
}
