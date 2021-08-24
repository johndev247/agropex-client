import {gql} from "graphql-tag";
const TOGGLE_BLOCK = gql`
  mutation toggleBlock($userId: String!) {
    toggleBlock(userId: $userId) {
      blackListed
    }
  }
`;
export default TOGGLE_BLOCK;
