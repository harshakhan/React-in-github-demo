import React from "react";
import axios from "axios";
import { AppContext } from "../Context/AppContext";
import { Redirect } from "react-router-dom";
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { checkUserAuthentication } = this.context;
    checkUserAuthentication({ email, password });
  };
  render() {
    const { email, password } = this.state;
    const { isAuth } = this.context;

    if (isAuth) {
      return (
        <Redirect
          push
          to={{
            pathname: "/dashboard/products",
            state: {
              email,
              password,
              from: "login page"
            }
          }}
        />
      );
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={email}
          name="email"
          placeholder="email"
          onChange={this.handleChange}
        />
        <br />
        <input
          value={password}
          name="password"
          placeholder="password"
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

Login.contextType = AppContext;
