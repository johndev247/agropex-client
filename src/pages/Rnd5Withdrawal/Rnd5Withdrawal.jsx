import {useMutation} from "@apollo/client";
import React, {useState} from "react";
import {BeatLoader} from "react-spinners";
import {AppLinks} from "../../Components/Navbar/navbar.style";
import WITHDRAW_RND5_BALANCE from "../../graphql/mutations/withdrawRnd5";
import {
  ErrorMessages,
  Form,
  FormInput,
  FormLabel,
  SuccessMessage,
} from "../../Styles/forms.style";
import {FlexBlock, FlexDiv, Li, PriButton, Ul} from "../../Styles/globalStyles";
import {useForm} from "../../utils/hooks";
import {
  CardsSection,
  DashboardSection,
  NoPackage,
  NoPackageMessage,
} from "../Dashboard/dashboard.style";
import {SettingsCard, SettingsCardsTitle} from "../Profile/updateProfile";

const Rnd5Withdrawal = ({getUser}) => {
  const [amount, setAmount] = useState(null);
  const [errors, setErrors] = useState({});
  const [displayAmount, setDisplayAmount] = useState("");
  const [updated, setUpdated] = useState("");

  const numRegX = /^\d+$/;

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const [withdrawRnd5Bal] = useMutation(WITHDRAW_RND5_BALANCE, {
    variables: {
      amount: parseInt(amount),
    },
    onError: (err) => {
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
      withdrawRnd5Bal();
    }
  };
  let loading = false;

  return (
    <DashboardSection>
      <CardsSection>
        <SettingsCard>
          <SettingsCardsTitle>Withdraw Logistics Balance</SettingsCardsTitle>
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

export default Rnd5Withdrawal;
