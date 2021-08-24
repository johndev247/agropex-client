import {gql} from "graphql-tag";
const TOGGLE_ROLE = gql`
  mutation changeRole($userId: String!) {
    changeRole(userId: $userId) {
      role
    }
  }
`;
export default TOGGLE_ROLE;
