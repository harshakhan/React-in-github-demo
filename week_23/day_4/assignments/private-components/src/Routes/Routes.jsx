import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Home } from "./Home";
import { Product } from "./Products";
import { ProductPage } from "./ProductPage";
import { Login } from "./Login";
import { PrivateRoutes } from "./PrivateRoutes";

function Routes() {
  return (
    <>
      <Route path="/" render={() => <Navbar />} />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/dashboard" render={() => <PrivateRoutes />} />
        <Route
          path="/dashboard/products/:id"
          render={(props) => <ProductPage {...props} />}
        />
        <Route
          path="/dashboard/products"
          render={(props) => <Product {...props} />}
        />
        <Route path="/login" render={() => <Login />} />

        <Route>
          <div>Error 404 </div>
          <Link to="/">GO BACK HOME</Link>
        </Route>
      </Switch>
    </>
  );
}

export { Routes };
