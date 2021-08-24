import gql from "graphql-tag";

const GET_USER_TRANSHISTORIES = gql`
  query getUserTransHistories {
    getUserTransHistories {
      title
      amount
      date
      userId
    }
  }
`;
export default GET_USER_TRANSHISTORIES;
