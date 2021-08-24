import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import PrivateRoute from "./pages/AppEntries/PrivateRoute";
import AuthRoute from "./pages/AppEntries/AuthRoute";
import LoggedHome from "./pages/LoggedHome/LoggedHome";
import Unlogged from "./pages/AppEntries/Unlogged";
import ResetPassword from "./Components/ForgetPassword/ResetPassword";
import ResetRoute from "./pages/AppEntries/ResetRoute";

function App() {
  return (
    <Router>
      <Switch>
        <AuthRoute path="/login" component={LoginSignUp} />
        <ResetRoute path="/reset-password" component={ResetPassword} />
        <AuthRoute exact path="/" component={Unlogged} />
        <LoggedHome>
          <PrivateRoute path="/dashboard"></PrivateRoute>
          <PrivateRoute path="/product/:pId"></PrivateRoute>
          <PrivateRoute path="/products"></PrivateRoute>
          <PrivateRoute path="/profile-update/:userName"></PrivateRoute>
          <PrivateRoute path="/transactions/uId"></PrivateRoute>
          <PrivateRoute path="/messages/:uId"></PrivateRoute>
          <PrivateRoute path="/referral/:uId"></PrivateRoute>
          <PrivateRoute path="/pxderfsfddd/"></PrivateRoute>
        </LoggedHome>
      </Switch>
    </Router>
  );
}
export default App;
