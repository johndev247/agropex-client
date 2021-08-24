import gql from "graphql-tag";

const WITHDRAW_REF_BALANCE = gql`
  mutation withdrawRef($amount: Int!) {
    withdrawRef(amount: $amount) {
      id
      image
      userName
      firstName
      middleName
      lastName
      gender
      country
      state
      email
      phone
      role
      referredBy
      payedRef
      balance
      round5Bal
      round5Count
      round5IWithDCount
      referralBalance
      referred {
        id
        phone
        fullName
      }
      inbox {
        id
        firstName
        role
        message
        userId
        sentAt
      }
      validRefs {
        phone
        amount
      }
      withdraw {
        id
        title
        amount
        requestDate
      }
      bankInfo {
        accountName
        accountNumber
        accountType
        bankName
        addedAt
      }
      blackListed
      active
      createdAt
    }
  }
`;
export default WITHDRAW_REF_BALANCE;
