import React, {useState} from "react";
import ForgetPasswordForm from "../../Components/ForgetPassword/ForgetPasswordForm";
import LoginForm from "../../Components/Login/LoginForm";
import RegistrationForm from "../../Components/Register/RegistrationForm";
import {FormCard} from "../../Styles/forms.style";
import {HomePage} from "../../Styles/loingEntry";
import agropex from "../../Assets/images/logo.png";
import {Logo} from "../../Components/Navbar/navbar.style";

const LogRegFormEntry = () => {
  const [comp, setComp] = useState("login");

  const toggleForm = () => {
    switch (comp) {
      case "login":
        setComp("restPassword");
        break;
      case "restPassword":
        setComp("login");
        break;
      default:
        break;
    }
  };

  const signUp = () => {
    switch (comp) {
      case "login":
        setComp("sign-up");
        break;
      case "sign-up":
        setComp("login");
        break;
      default:
        break;
    }
  };

  return (
    <HomePage>
      <FormCard>
        <Logo style={{marginBottom: "1em"}} src={agropex} />

        {comp === "login" ? (
          <LoginForm signUp={signUp} toggleForm={toggleForm} />
        ) : comp === "restPassword" ? (
          <ForgetPasswordForm toggleForm={toggleForm} />
        ) : comp === "sign-up" ? (
          <RegistrationForm signUp={signUp} />
        ) : (
          ""
        )}
      </FormCard>
    </HomePage>
  );
};

export default LogRegFormEntry;
