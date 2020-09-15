import React from "react";
import styled from "styled-components";
import Form from "./Form";
import UserDetail from "./UserDetail";

const Dashbord = styled.div`
  width: 440px;
  height: 500px;
  margin: 110px;
  border: 3px solid blue;
  font-weight: bold;
  border-radius: 15px;
  outline: none;
  background: #e0e0e0;
  overflow: auto;
 
`;


export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      token: ""
    };
  }

  onLoggedIn = (email, token) => {
    this.setState({
      email: email,
      isLoggedIn: true,
      token: token
    });
  };

  render() {
    return (
      <>
        <Dashbord>
          {!this.state.isLoggedIn && (
            <Form onSuccess={(email, token) => this.onLoggedIn(email, token)} />
          )}
          {this.state.isLoggedIn && (
            <UserDetail email={this.state.email} token={this.state.token} />
          )}
        </Dashbord>
      </>
    );
  }
}
