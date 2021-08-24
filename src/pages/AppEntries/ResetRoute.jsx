import {useReactiveVar} from "@apollo/client";
import React from "react";
import {Route, Redirect} from "react-router-dom";
import {user} from "../..";

const ResetRoute = ({component: Component, ...rest}) => {
  const logged = useReactiveVar(user);
  const email = localStorage.getItem("email");

  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? (
          <Redirect to="/dashboard" />
        ) : !logged && !email ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default ResetRoute;
