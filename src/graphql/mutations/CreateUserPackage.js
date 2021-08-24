import gql from "graphql-tag";

const CREATE_USER_PACKAGE = gql`
  mutation createUserPackage($packageId: String!, $amount: Int!) {
    createUserPackage(packageId: $packageId, amount: $amount) {
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
export default CREATE_USER_PACKAGE;
