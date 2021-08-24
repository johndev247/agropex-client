import gql from "graphql-tag";

const ADD_BANK_ACCOUNT = gql`
  mutation addBankInfo(
    $accountName: String!
    $accountNumber: String!
    $accountType: String!
    $bankName: String!
  ) {
    addBankInfo(
      accountName: $accountName
      accountNumber: $accountNumber
      accountType: $accountType
      bankName: $bankName
    ) {
      id
      userName
      firstName
      bankInfo {
        accountName
        accountNumber
        accountType
        bankName
      }
    }
  }
`;
export default ADD_BANK_ACCOUNT;
