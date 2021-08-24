import {useReactiveVar} from "@apollo/client";
import React from "react";
import {Route, Redirect} from "react-router-dom";
import {user} from "../..";

const AuthRoute = ({component: Component, ...rest}) => {
  const logged = useReactiveVar(user);

  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? <Redirect to="/dashboard" /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;
