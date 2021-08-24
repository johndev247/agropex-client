const {default: gql} = require("graphql-tag");

const DELETE_MESSAGE = gql`
  mutation deleteMessage($userId: String!, $messageId: String!) {
    deleteMessage(userId: $userId, messageId: $messageId) {
      inbox {
        id
        firstName
        role
        userId
        message
        sentAt
      }
    }
  }
`;

export default DELETE_MESSAGE;
