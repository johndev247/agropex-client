import gql from "graphql-tag";

const CREATE_PACKAGES = gql`
  mutation createPackage(
    $packageName: String!
    $image: String!
    $payDuration: String!
    $description: String!
    $interest: String!
  ) {
    createPackage(
      userInput: {
        packageName: $packageName
        image: $image
        payDuration: $payDuration
        description: $description
        interest: $interest
      }
    ) {
      id
      packageName
      image
      payDuration
      description
      interest
      sales {
        userName
      }
      active
      createdAt
    }
  }
`;
export default CREATE_PACKAGES;
