import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin } from "../Router/action";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.loginRequest({ username, password });
  };
  render() {
    const { username, password } = this.state;
    const { isLoadingLogin, errorLogin } = this.props;
    return (
      <>
        <h1>Login</h1>
        <form>
          {" "}
          <input
            type="text"
            placeholder="username"
            name="username"
            required
            value={username}
            onChange={this.handleChange}
          />
          <br />{" "}
          <input
            type="password"
            placeholder="password"
            name="password"
            required
            value={password}
            onChange={this.handleChange}
          />
          <br />
          <button onClick={this.handleSubmit}>Login</button>
        </form>
        {isLoadingLogin && "...Loading"}
        {errorLogin && errorLogin}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.isAuth,
  errorLogin: state.errorLogin,
  isLoadingLogin: state.isLoadingLogin,
  token: state.token
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (payload) => dispatch(userLogin(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
