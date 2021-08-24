import gql from "graphql-tag";

const GET_PACKAGES = gql`
  query getPackages {
    getPackages {
      id
      packageName
      image
      payDuration
      description
      interest
      active
      sales {
        id
        userName
        joinedOn
        amount
        userId
      }
      createdAt
    }
  }
`;
export default GET_PACKAGES;
