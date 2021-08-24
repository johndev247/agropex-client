import gql from "graphql-tag";

const DELETE_PACKAGE = gql`
  mutation deletePackage($packageId: String!) {
    deletePackage(packageId: $packageId) {
      id
    }
  }
`;
export default DELETE_PACKAGE;
