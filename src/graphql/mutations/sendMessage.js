import {gql} from "graphql-tag";
const SEND_MESSAGE = gql`
  mutation sendMessage($userId: String!, $message: String!) {
    sendMessage(userId: $userId, message: $message) {
      id
      userName
      role
      inbox {
        id
        firstName
        message
        role
        userId
        sentAt
      }
    }
  }
`;
export default SEND_MESSAGE;
