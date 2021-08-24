import {gql} from "graphql-tag";
const DELETE_USER = gql`
  mutation deleteUser($userId: String!) {
    deleteUser(userId: $userId) {
      id
    }
  }
`;
export default DELETE_USER;
