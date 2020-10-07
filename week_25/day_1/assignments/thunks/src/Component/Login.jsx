import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../Redux/actions";
class Login extends React.Component {
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
  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginRequest({ email, password });
  };
  render() {
    const { email, password } = this.state;
    const { isAuth, isLoading, error, token } = this.props;
    console.log(isAuth, isLoading, error, token);
    if (!isAuth)
      return (
        <>
          <form onSubmit={this.onSubmit}>
            <div>
              <input
                onChange={this.handleChange}
                name="email"
                placeholder="email"
                type="text"
                value={email}
              />
            </div>
            <div>
              <input
                onChange={this.handleChange}
                name="password"
                placeholder="password"
                type="password"
                value={password}
              />
            </div>
            <div>
              <input value="submit" type="submit" />
            </div>
          </form>
          {isLoading && "...loading"}
          {error && error}
        </>
      );
    else {
      return <div>token:{token}</div>;
    }
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.app.isAuth,
  error: state.app.error,
  isLoading: state.app.isLoading,
  token: state.app.token
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (payload) => dispatch(userLogin(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
