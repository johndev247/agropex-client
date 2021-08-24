import gql from "graphql-tag";

const UPDATE_PROFILE = gql`
  mutation updateProfile(
    $firstName: String!
    $middleName: String!
    $lastName: String!
    $state: String!
  ) {
    updateProfile(
      firstName: $firstName
      middleName: $middleName
      lastName: $lastName
      state: $state
    ) {
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
      inbox {
        id
        firstName
        role
        userId
        message
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
export default UPDATE_PROFILE;
