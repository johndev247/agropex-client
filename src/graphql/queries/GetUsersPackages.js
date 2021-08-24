import gql from "graphql-tag";

const GET_USERS_PACKAGES = gql`
  query getUsersPackages {
    getUsersPackages {
      packageName
      image
      amount
      duration
      interest
      payDay
      endDayVal
      active
      userId
      createdAt
    }
  }
`;
export default GET_USERS_PACKAGES;
