import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Dashboard from "../Router/DashBoard";
import Register from "./Register";
import Login from "../Router/Login";
import ProfilePage from "../../src/Router/ProfilePage";
export default function Router() {
  return (
    <>
      <Switch>
        <Route path="/Login" exact render={() => <Login/>} />
        <Route path="/Dashboard" exact render={() => <Dashboard />} />
        <Route path="/Register" exact render={() => <Register />} />
        <Route path="/ProfilePage" exact render={() => <ProfilePage />} />
        <Route>
          <div>Error Found </div>
          <Link to="/">GO BACK HOME</Link>
        </Route>
      </Switch>
    </>
  );
}
