import gql from "graphql-tag";

const CHANGE_PASSWORD = gql`
  mutation changePassword($prevPassword: String!, $newPassword: String!) {
    changePassword(prevPassword: $prevPassword, newPassword: $newPassword) {
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
      }
      validRefs {
        phone
        amount
      }
      inbox {
        id
        firstName
        role
        message
        userId
        sentAt
      }
      withdraw {
        id
        title
        amount
        requestDate
      }
      bankInfo {
        accountType
        accountNumber
        bankName
        addedAt
      }
      blackListed
      active
      createdAt
    }
  }
`;
export default CHANGE_PASSWORD;
