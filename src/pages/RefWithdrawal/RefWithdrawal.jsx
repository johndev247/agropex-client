import {useMutation} from "@apollo/client";
import React, {useState} from "react";
import {BeatLoader} from "react-spinners";
import WITHDRAW_REF_BALANCE from "../../graphql/mutations/withdrawRef";
import {
  ErrorMessages,
  Form,
  FormInput,
  FormLabel,
  SuccessMessage,
} from "../../Styles/forms.style";
import {AppLinks} from "../../Components/Navbar/navbar.style";
import {FlexBlock, FlexDiv, Li, PriButton, Ul} from "../../Styles/globalStyles";
import {
  CardsSection,
  DashboardSection,
  NoPackage,
  NoPackageMessage,
} from "../Dashboard/dashboard.style";
import {SettingsCard, SettingsCardsTitle} from "../Profile/updateProfile";

const RefWithdrawal = ({getUser}) => {
  const [amount, setAmount] = useState(null);
  const [errors, setErrors] = useState({});
  const [displayAmount, setDisplayAmount] = useState("");
  const [updated, setUpdated] = useState("");

  const numRegX = /^\d+$/;

  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const [withdrawRefBal] = useMutation(WITHDRAW_REF_BALANCE, {
    variables: {
      amount: parseInt(amount),
    },
    onError: (err) => {
      console.log(err);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    onCompleted: () => {
      setErrors({});
      setUpdated("withdraw");
      setDisplayAmount(parseInt(amount));
    },
  });

  const withdraw = (e) => {
    e.preventDefault();
    if (numRegX.test(amount) && amount !== 0) {
      withdrawRefBal();
    }
  };
  let loading = false;

  return (
    <DashboardSection>
      <CardsSection>
        <SettingsCard>
          <SettingsCardsTitle>Withdraw Referral Balance</SettingsCardsTitle>
          <SuccessMessage show={updated.length > 0 && updated === "withdraw"}>
            {updated === "withdraw" &&
              `₦${displayAmount.toLocaleString(
                "en-US"
              )} withdrawn Successfully`}
          </SuccessMessage>
          {getUser.bankInfo.addedAt === "" ? (
            <NoPackage>
              <NoPackageMessage>Bank Account Not Added</NoPackageMessage>

              <AppLinks to={`/profile-update/${getUser.userName}`}>
                <PriButton>Add Account</PriButton>
              </AppLinks>
            </NoPackage>
          ) : (
            <Form onSubmit={withdraw}>
              <FlexDiv>
                <FlexBlock>
                  <FormLabel>Account Name</FormLabel>
                  <FormInput
                    placeholder={getUser.bankInfo.accountName}
                    disabled
                    value={getUser.bankInfo.accountName}
                  />
                </FlexBlock>
                <FlexBlock>
                  <FormLabel>Account Number</FormLabel>
                  <FormInput
                    placeholder={getUser.bankInfo.accountNumber}
                    disabled
                    value={getUser.bankInfo.accountNumber}
                  />
                </FlexBlock>
              </FlexDiv>
              <FlexDiv>
                <FlexBlock>
                  <FormLabel>Bank Name</FormLabel>
                  <FormInput
                    placeholder={getUser.bankInfo.bankName}
                    disabled
                    value={getUser.bankInfo.bankName}
                  />
                </FlexBlock>
                <FlexBlock>
                  <FormLabel style={{alignSelf: "center"}}>Amount</FormLabel>
                  <FormInput
                    type="text"
                    name="amount"
                    onChange={handleChange}
                    value={amount}
                  />
                </FlexBlock>
              </FlexDiv>

              {loading ? (
                <BeatLoader size={20} color={"#449b62;"} />
              ) : (
                <PriButton onClick={withdraw}>Withdraw</PriButton>
              )}
            </Form>
          )}
          {Object.keys(errors).length > 0 && (
            <ErrorMessages>
              <h4 style={{margin: "0"}}>Error!</h4>
              <Ul>
                {Object.values(errors).map((error) => (
                  <Li key={error}>* {error}</Li>
                ))}
              </Ul>
            </ErrorMessages>
          )}
        </SettingsCard>
      </CardsSection>
    </DashboardSection>
  );
};

export default RefWithdrawal;
