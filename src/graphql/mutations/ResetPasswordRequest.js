import gql from "graphql-tag";

const RESET_PASSWORD_REQUEST = gql`
  mutation resetPasswordRequest($email: String!) {
    resetPasswordRequest(email: $email) {
      id
      userName
    }
  }
`;
export default RESET_PASSWORD_REQUEST;
