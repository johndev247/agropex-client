import gql from "graphql-tag";

const WITHDRAW_BALANCE = gql`
  mutation withdraw($amount: Int!) {
    withdraw(amount: $amount) {
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
export default WITHDRAW_BALANCE;
