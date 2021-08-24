import {useReactiveVar} from "@apollo/client";
import React from "react";
import {Route, Redirect} from "react-router-dom";
import {user} from "../..";

const PrivateRoute = ({children, ...rest}) => {
  const isAuth = useReactiveVar(user);

  return (
    <Route
      {...rest}
      render={() => (isAuth ? <div>{children}</div> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
