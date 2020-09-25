import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { Product } from "./Products";
import { ProductPage } from "./ProductPage";
import { AppContext } from "../Context/AppContext";

function PrivateRoutes() {
  return (
    <AppContext.Consumer>
      {({ isAuth }) => {
        if (!isAuth) {
          return <Redirect to="/login" />;
        }

        return (
          <Switch>
            <Route
              path="/dashboard"
              exact
              render={() => <div>DASHBOARD</div>}
            />
            <Route
              path="/dashboard/products/:id"
              render={(props) => <ProductPage {...props} />}
            />
            <Route
              path="/dashboard/products"
              render={(props) => <Product {...props} />}
            />
          </Switch>
        );
      }}
    </AppContext.Consumer>
  );
}

export { PrivateRoutes };
