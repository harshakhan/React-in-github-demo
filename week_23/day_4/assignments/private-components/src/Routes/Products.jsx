import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { ProductItem } from "./ProductItem";
function Product(props) {
  console.log(props);
  return (
    <AppContext.Consumer>
      {({ data, isAuth }) => {
        if (!isAuth) {
          return <Redirect to="/login" />;
        }

        return (
          <>
            {data.map((item) => (
              <ProductItem data={item} key={item.id} />
            ))}
          </>
        );
      }}
    </AppContext.Consumer>
  );
}

export { Product };

