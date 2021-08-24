import gql from "graphql-tag";

const GET_USER_PACKAGES = gql`
  query getUserPackages {
    getUserPackages {
      id
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
export default GET_USER_PACKAGES;
