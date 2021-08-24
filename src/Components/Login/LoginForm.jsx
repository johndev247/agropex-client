import {useMutation} from "@apollo/client";
import gql from "graphql-tag";
import React, {useState} from "react";
import {useHistory} from "react-router";
import {BeatLoader} from "react-spinners";
import {
  ErrorMessages,
  Form,
  FormInput,
  FormLabel,
  FormRouter,
  SignUpButton,
} from "../../Styles/forms.style";
import {Li, PriButton, Title, Ul, VertLine} from "../../Styles/globalStyles";

import {useForm} from "../../utils/hooks";
import AUTH_TOKEN from "../../utils/constants";
import {user} from "../../index";

const LoginForm = ({signUp, toggleForm}) => {
  const [errors, setErrors] = useState({});
  const initialState = {
    emailOrPhone: "",
    password: "",
  };

  const history = useHistory();

  const {handleInput, handleSubmit, values} = useForm(login, initialState);

  const [loginUser, {loading}] = useMutation(LOGIN_USER, {
    onError: (err) => {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    onCompleted: ({login}) => {
      localStorage.setItem(AUTH_TOKEN, login.token);
      localStorage.setItem("user", JSON.stringify(login));
      user(login);

      history.push("/dashboard");
    },
    variables: {
      emailOrPhone: values.emailOrPhone.toLowerCase(),
      password: values.password,
    },
  });

  function login() {
    loginUser();
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>User Login</Title>
        <VertLine />
        <FormLabel>Email or Phone</FormLabel>
        <FormInput
          name="emailOrPhone"
          type="text"
          value={values.emailOrPhone}
          onChange={handleInput}
        />

        <FormLabel>Password</FormLabel>
        <FormInput
          name="password"
          type="password"
          value={values.password}
          onChange={handleInput}
        />
        {loading ? (
          <BeatLoader loading={loading} size={20} color={"#449b62;"} />
        ) : (
          <PriButton type="submit">Login</PriButton>
        )}
      </Form>
      {Object.keys(errors).length > 0 && (
        <ErrorMessages>
          <Ul>
            <h4 style={{margin: "0"}}>Error!</h4>
            {Object.values(errors).map((value) => (
              <Li key={value}> * {value}</Li>
            ))}
          </Ul>
        </ErrorMessages>
      )}
      <FormRouter onClick={toggleForm}>Forget Password?</FormRouter>
      <SignUpButton>
        <FormRouter style={{textAlign: "right"}} onClick={signUp}>
          Dont Have An Account? Sign Up
        </FormRouter>
      </SignUpButton>
    </>
  );
};

const LOGIN_USER = gql`
  mutation login($emailOrPhone: String!, $password: String!) {
    login(emailOrPhone: $emailOrPhone, password: $password) {
      id
      token
      userName
      firstName
      middleName
      lastName
      email
      phone
      blackListed
    }
  }
`;

export default LoginForm;
