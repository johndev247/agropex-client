import gql from "graphql-tag";

const SEND_TO_BALANCE = gql`
  mutation sendToBalances($packageId: String!, $amount: Int!) {
    sendToBalances(packageId: $packageId, amount: $amount) {
      id
    }
  }
`;
export default SEND_TO_BALANCE;
