import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import gql from "graphql-tag";
import {useMutation} from "@apollo/client";
import {BeatLoader} from "react-spinners";
import {
  Form,
  FormInput,
  FormLabel,
  FormRouter,
  RadioInput,
  FormSelect,
  ErrorMessages,
} from "../../Styles/forms.style";
import {PriButton, Title, Ul, Li, VertLine} from "../../Styles/globalStyles";
import {useForm} from "../../utils/hooks";
import AUTH_TOKEN from "../../utils/constants";
import {user} from "../..";

const RegistrationForm = ({signUp}) => {
  const [errors, setErrors] = useState({});
  const [gender, setGender] = useState("male");
  const [state, setState] = useState("");
  const initialState = {
    userName: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    referredBy: "",
    password: "",
    confirmPassword: "",
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleState = (e) => {
    setState(e.target.value);
  };

  const {handleInput, handleSubmit, values} = useForm(add_User, initialState);

  const history = useHistory();

  const [addUser, {loading}] = useMutation(REGISTER_USER, {
    variables: {
      userName: values.userName.toLowerCase(),
      firstName: values.firstName,
      middleName: values.middleName,
      lastName: values.lastName,
      gender,
      state,
      email: values.email.toLowerCase(),
      phone: values.phone,
      referredBy: values.referredBy,
      password: values.password,
      confirmPassword: values.confirmPassword,
    },
    update(proxy, result) {},
    onError: (err) => {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    onCompleted: ({createUser}) => {
      localStorage.setItem(AUTH_TOKEN, createUser.token);
      localStorage.setItem("user", JSON.stringify(createUser));
      user(createUser);
      history.push("/dashboard");
    },
  });

  function add_User() {
    addUser();
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>User SignUp</Title>
        <VertLine />
        <FormLabel>Username</FormLabel>
        <FormInput
          name="userName"
          type="text"
          placeholder="Username"
          values={values.userName}
          error={errors.userName ? true : false}
          onChange={handleInput}
          required
        />
        <FormLabel>First Name</FormLabel>
        <FormInput
          name="firstName"
          type="text"
          placeholder="First Name"
          values={values.firstName}
          error={errors.firstName ? true : false}
          onChange={handleInput}
          required
        />
        <FormLabel>Middle Name</FormLabel>
        <FormInput
          name="middleName"
          type="text"
          placeholder="Middle Name"
          values={values.middleName}
          error={errors.middleName ? true : false}
          onChange={handleInput}
        />
        <FormLabel>Last Name</FormLabel>
        <FormInput
          name="lastName"
          type="text"
          placeholder="Last Name"
          values={values.lastName}
          error={errors.lastName ? true : false}
          onChange={handleInput}
          required
        />
        <p style={{display: "flex", margin: "0"}}>
          <FormLabel>Male</FormLabel>
          <RadioInput
            name="gender"
            type="radio"
            value="Male"
            checked={gender === "Male"}
            required
            onChange={handleGender}
          />
          <FormLabel>Female</FormLabel>
          <RadioInput
            name="gender"
            type="radio"
            checked={gender === "Female"}
            value="Female"
            onChange={handleGender}
            required
          />
        </p>

        <FormLabel>Country</FormLabel>
        <FormSelect
          onChange={() => {
            "";
          }}
        >
          <option disabled selected>
            --Select Country--
          </option>
          <option name="country" selected values="nigeria">
            Nigeria
          </option>
        </FormSelect>
        <FormLabel>State</FormLabel>
        <FormSelect onChange={handleState}>
          <option disabled selected>
            --Select State--
          </option>
          <option name="state" values="Abia">
            Abia
          </option>
          <option name="state" values="Adamawa">
            Adamawa
          </option>
          <option name="state" values="Akwa Ibom">
            Akwa Ibom
          </option>
          <option name="state" values="Anambra">
            Anambra
          </option>
          <option name="state" values="Bauchi">
            Bauchi
          </option>
          <option name="state" values="Bayelsa">
            Bayelsa
          </option>
          <option name="state" values="Benue">
            Benue
          </option>
          <option name="state" values="Borno">
            Borno
          </option>
          <option name="state" values="Cross Rive">
            Cross River
          </option>
          <option name="state" values="Delta">
            Delta
          </option>
          <option name="state" values="Ebonyi">
            Ebonyi
          </option>
          <option name="state" values="Edo">
            Edo
          </option>
          <option name="state" values="Ekiti">
            Ekiti
          </option>
          <option name="state" values="Enugu">
            Enugu
          </option>
          <option name="state" values="FCT">
            Federal Capital Territory
          </option>
          <option name="state" values="Gombe">
            Gombe
          </option>
          <option name="state" values="Imo">
            Imo
          </option>
          <option name="state" values="Jigawa">
            Jigawa
          </option>
          <option name="state" values="Kaduna">
            Kaduna
          </option>
          <option name="state" values="Kano">
            Kano
          </option>
          <option name="state" values="Katsina">
            Katsina
          </option>
          <option name="state" values="Kebbi">
            Kebbi
          </option>
          <option name="state" values="Kogi">
            Kogi
          </option>
          <option name="state" values="Kwara">
            Kwara
          </option>
          <option name="state" values="Lagos">
            Lagos
          </option>
          <option name="state" values="Nasarawa">
            Nasarawa
          </option>
          <option name="state" values="Niger">
            Niger
          </option>
          <option name="state" values="Ogun">
            Ogun
          </option>
          <option name="state" values="Ondo">
            Ondo
          </option>
          <option name="state" values="Osun">
            Osun
          </option>
          <option name="state" values="Oyo">
            Oyo
          </option>
          <option name="state" values="Plateau">
            Plateau
          </option>
          <option name="state" values="Rivers">
            Rivers
          </option>
          <option name="state" values="Sokoto">
            Sokoto
          </option>
          <option name="state" values="Taraba">
            Taraba
          </option>
          <option name="state" values="Yobe">
            Yobe
          </option>
          <option name="state" values="Zamfara">
            Zamfara
          </option>
        </FormSelect>
        <FormLabel>Email Address</FormLabel>
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          values={values.email}
          onChange={handleInput}
          required
        />
        <FormLabel>Phone</FormLabel>
        <FormInput
          name="phone"
          type="text"
          placeholder="Phone Number"
          values={values.phone}
          onChange={handleInput}
          required
        />
        <FormLabel>Referrer Phone (optional)</FormLabel>
        <FormInput
          name="referredBy"
          type="text"
          placeholder="Phone Number"
          onChange={handleInput}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          values={values.password}
          onChange={handleInput}
          required
        />
        <FormLabel>Confirm Password</FormLabel>
        <FormInput
          name="confirmPassword"
          type="password"
          placeholder="Retype Password"
          values={values.confirmPassword}
          onChange={handleInput}
          required
        />
        {loading ? (
          <BeatLoader loading={loading} size={20} color={"#449b62;"} />
        ) : (
          <PriButton type="submit">Sign Up</PriButton>
        )}
      </Form>
      {Object.keys(errors).length > 0 && (
        <ErrorMessages>
          <Ul>
            <h4 style={{margin: "0"}}>Warning!</h4>
            {Object.values(errors).map((value) => (
              <Li key={value}> * {value}</Li>
            ))}
          </Ul>
        </ErrorMessages>
      )}

      <FormRouter onClick={signUp}>Already Have An Account?</FormRouter>
    </>
  );
};
const REGISTER_USER = gql`
  mutation createUser(
    $userName: String!
    $firstName: String!
    $middleName: String!
    $lastName: String!
    $gender: String!
    $state: String!
    $email: String!
    $phone: String!
    $referredBy: String!
    $password: String!
    $confirmPassword: String!
  ) {
    createUser(
      userInput: {
        userName: $userName
        firstName: $firstName
        middleName: $middleName
        lastName: $lastName
        gender: $gender
        state: $state
        email: $email
        phone: $phone
        referredBy: $referredBy
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      token
      userName
      firstName
      middleName
      lastName
      gender
      country
      state
      email
      phone
      referredBy
      createdAt
    }
  }
`;
export default RegistrationForm;
