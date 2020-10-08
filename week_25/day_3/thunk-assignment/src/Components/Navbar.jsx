import React, { Component } from "react";
// import axios from "axios";

import { Link } from "react-router-dom";
let links = [
  {
    to: "/Dashboard",
    title: "DashBoard"
  },
  {
    to: "/Login",
    title: "Login"
  },
  {
    to: "/Register",
    title: "Register"
  },
  {
    to: "/ProfilePage",
    title: "ProfilePage"
  }
];
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }

  render() {
    return (
      <>
        <div>
          <div style={{ marginLeft: "0px", display: "flex" }}>
            {links.map(({ to, title }) => (
              <Link
                key={to}
                style={{
                  marginTop: "16px",
                  textDecoration: "none",
                  marginLeft: "-45px",
                  flex: 1
                }}
                to={to}
              >
                <h4 style={{ fontSize: "18px" }}>{title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;
