import React from "react";
import { products } from "./products";
import axios from "axios";

const AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: products,
      isAuth: false,
      email: "",
      token: ""
    };
  }

  checkUserAuthentication = ({ email, password }) => {
    axios.post("https://reqres.in/api/login", {
        email,
        password
      })
      .then((res) => {
        console.log(res);
        this.setState({
          isAuth: true,
          email,
          token: res.data.token
        });
      })
      .catch((err) => {
        console.log("error");
      });
  };

  render() {
    const { state, checkUserAuthentication } = this;
    const value = { ...state, checkUserAuthentication };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppContextProvider };
