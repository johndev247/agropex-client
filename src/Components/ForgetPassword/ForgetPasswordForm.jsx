import {useMutation} from "@apollo/client";
import React, {useState} from "react";
import {useHistory} from "react-router";
import {BeatLoader} from "react-spinners";
import RESET_PASSWORD_REQUEST from "../../graphql/mutations/ResetPasswordRequest";
import {
  ErrorMessages,
  Form,
  FormInput,
  FormLabel,
  FormRouter,
} from "../../Styles/forms.style";
import {Li, PriButton, Title, Ul, VertLine} from "../../Styles/globalStyles";
import {useForm} from "../../utils/hooks";

const ForgetPasswordForm = ({toggleForm}) => {
  const [errors, setErrors] = useState({});
  const initialValues = {
    email: "",
  };
  const history = useHistory();

  const {handleSubmit, handleInput, values} = useForm(
    callResetPassword,
    initialValues
  );

  const [resetPassword, {loading}] = useMutation(RESET_PASSWORD_REQUEST, {
    variables: values,
    onCompleted: () => {
      localStorage.setItem("email", values.email);
      history.push(`/reset-password`);
    },
    onError: (err) => {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
  });

  function callResetPassword() {
    resetPassword();
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>Password Reset</Title>
        <VertLine />
        <FormLabel>Email Address</FormLabel>
        <FormInput
          type="email"
          name="email"
          value={values.email}
          onChange={handleInput}
        />
        {loading ? (
          <BeatLoader size={20} color={"#449b62;"} />
        ) : (
          <PriButton onClick={handleSubmit}>Reset</PriButton>
        )}
        {Object.keys(errors).length > 0 && (
          <ErrorMessages>
            <h4 style={{margin: "0"}}>Warning!</h4>
            <Ul>
              {Object.values(errors).map((error) => (
                <Li key={error}>* {error}</Li>
              ))}
            </Ul>
          </ErrorMessages>
        )}
      </Form>
      <FormRouter onClick={toggleForm}> Go To Login</FormRouter>
    </>
  );
};

export default ForgetPasswordForm;
