import gql from "graphql-tag";

const GET_MESSAGES = gql`
  query messages {
    messages {
      id
      firstName
      role
      message
      userId
      sentAt
    }
  }
`;
export default GET_MESSAGES;
