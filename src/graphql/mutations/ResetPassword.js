import gql from "graphql-tag";

const RESET_PASSWORD = gql`
  mutation resetPassword(
    $email: String!
    $token: String!
    $newPassword: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      email: $email
      token: $token
      newPassword: $newPassword
      confirmPassword: $confirmPassword
    ) {
      id
      token
      userName
      firstName
      middleName
      lastName
      email
      phone
    }
  }
`;
export default RESET_PASSWORD;
