import {useMutation} from "@apollo/client";
import React, {useState} from "react";
import {useHistory} from "react-router";
import {BeatLoader} from "react-spinners";
import {user} from "../..";
import RESET_PASSWORD from "../../graphql/mutations/ResetPassword";
import {
  ErrorMessages,
  Form,
  FormCard,
  FormInput,
  FormLabel,
  FormRouter,
  SuccessMessage,
} from "../../Styles/forms.style";
import {Li, PriButton, Title, Ul, VertLine} from "../../Styles/globalStyles";
import {HomePage} from "../../Styles/loingEntry";
import AUTH_TOKEN from "../../utils/constants";
import {useForm} from "../../utils/hooks";

const ResetPassword = () => {
  const [errors, setErrors] = useState({});
  const email = localStorage.getItem("email");
  const history = useHistory();

  const initialValues = {
    email,
    token: "",
    newPassword: "",
    confirmPassword: "",
  };

  const gotoLogin = () => {
    history.push("/login");
  };
  const {handleInput, handleSubmit, values} = useForm(callReset, initialValues);

  const [resetPassword, {loading}] = useMutation(RESET_PASSWORD, {
    variables: values,
    onCompleted: ({resetPassword: data}) => {
      localStorage.setItem(AUTH_TOKEN, data.token);
      localStorage.setItem("user", JSON.stringify(data));
      user(data);
      history.push("/dashboard");
      localStorage.removeItem("email");
    },
    onError: (err) => {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
  });

  function callReset() {
    resetPassword();
  }
  return (
    <HomePage>
      <FormCard>
        <Form onSubmit={handleSubmit}>
          <Title>Password Reset</Title>
          <SuccessMessage show={email}>
            <p>
              A reset mail containing a token has been sent to{" "}
              <span style={{textDecoration: "underline", cursor: "pointer"}}>
                {email}
              </span>
            </p>
          </SuccessMessage>
          <VertLine />
          <FormLabel>Token</FormLabel>
          <FormInput
            type="text"
            name="token"
            value={values.token}
            onChange={handleInput}
          />
          <FormLabel>New Password</FormLabel>
          <FormInput
            type="password"
            name="newPassword"
            value={values.newPassword}
            onChange={handleInput}
          />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleInput}
          />
          {loading ? (
            <BeatLoader size={20} color={"#449b62;"} />
          ) : (
            <PriButton onClick={handleSubmit} type="submit">
              Reset
            </PriButton>
          )}
        </Form>
        {Object.keys(errors).length > 0 && (
          <ErrorMessages>
            <h4 style={{margin: "0"}}>Error!</h4>
            <Ul>
              {Object.values(errors).map((error) => (
                <Li key={error}>* {error}</Li>
              ))}
            </Ul>
          </ErrorMessages>
        )}
        <FormRouter onClick={gotoLogin}>Go To Login</FormRouter>
      </FormCard>
    </HomePage>
  );
};

export default ResetPassword;
