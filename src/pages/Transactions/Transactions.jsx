import React, {useState} from "react";
import {BeatLoader, MoonLoader} from "react-spinners";
import {FaArrowDown, FaHistory} from "react-icons/fa";
import {
  CardsSection,
  DashboardSection,
  HistoryBody,
  HistoryTitle,
  NoPackage,
  NoPackageMessage,
  PayDuration,
  PrevHisIcon,
  PreviousProductCard,
  ProductAmount,
  ProductName,
  ProductsCard,
} from "../Dashboard/dashboard.style";
import {FlexBlock, FlexDiv, Li, PriButton, Ul} from "../../Styles/globalStyles";
import {
  ProfileSettingsTitle,
  SettingsCard,
  SettingsCardsTitle,
} from "../Profile/updateProfile";
import {
  ErrorMessages,
  Form,
  FormInput,
  FormLabel,
  SuccessMessage,
} from "../../Styles/forms.style";
import {AppLinks} from "../../Components/Navbar/navbar.style";
import {useMutation, useQuery} from "@apollo/client";
import GET_USER_TRANSHISTORIES from "../../graphql/queries/GetUserTransHistories";
import {user} from "../..";
import {useHistory} from "react-router";
import AUTH_TOKEN from "../../utils/constants";
import WITHDRAW_BALANCE from "../../graphql/mutations/withdrawBal";

const Transactions = ({getUser}) => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(null);
  const [errors, setErrors] = useState({});
  const [displayAmount, setDisplayAmount] = useState("");
  const [updated, setUpdated] = useState("");
  const history = useHistory();

  const numRegX = /^\d+$/;

  const {loading: historyLoading, data} = useQuery(GET_USER_TRANSHISTORIES);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const [withdrawBal] = useMutation(WITHDRAW_BALANCE, {
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
      withdrawBal();
    }
  };

  if (!getUser) {
    return (
      <>
        {
          (localStorage.removeItem(AUTH_TOKEN),
          localStorage.removeItem("user"),
          user(null),
          history.push("/"))
        }
      </>
    );
  }

  let loading;

  return (
    <>
      <DashboardSection>
        <ProfileSettingsTitle>Transactions</ProfileSettingsTitle>

        <CardsSection>
          <SettingsCard>
            <SettingsCardsTitle>Withdraw Funds</SettingsCardsTitle>
            <SuccessMessage show={updated.length > 0 && updated === "withdraw"}>
              {updated === "withdraw" &&
                `₦${displayAmount.toLocaleString(
                  "en-US"
                )} withdrawn Successfully`}
            </SuccessMessage>
            {getUser.bankInfo.addedAt === "" ? (
              <NoPackage>
                <NoPackageMessage>Bank Account Not Added</NoPackageMessage>
                <FaArrowDown
                  style={{
                    color: " #449b62",
                    width: "25px",
                    height: "25px",
                  }}
                />
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
                    />
                  </FlexBlock>
                  <FlexBlock>
                    <FormLabel>Account Number</FormLabel>
                    <FormInput
                      placeholder={getUser.bankInfo.accountNumber}
                      disabled
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

          <PrevHisIcon onClick={() => setOpen(!open)}>
            <FaHistory
              style={{color: " #449b62", width: "25px", height: "25px"}}
            />
          </PrevHisIcon>
          <PreviousProductCard open={open}>
            <HistoryTitle>
              <h2
                style={{
                  color: " #fff",
                  margin: "0",
                  textAlign: "center",
                }}
              >
                Histories
              </h2>
            </HistoryTitle>
            <HistoryBody>
              {historyLoading ? (
                <MoonLoader />
              ) : (
                <>
                  {data.getUserTransHistories.length ? (
                    <>
                      {data.getUserTransHistories.map((product, index) => {
                        return (
                          <ProductsCard key={index} style={{height: "170px"}}>
                            <ProductName
                              style={{textAlign: "center", fontSize: "16px"}}
                            >
                              {product.title}
                            </ProductName>
                            <ProductAmount style={{textAlign: "center"}}>
                              ₦ {product.amount.toLocaleString("en-US")}
                            </ProductAmount>
                            <PayDuration></PayDuration>
                            <ProductAmount> Date: {product.date}</ProductAmount>
                          </ProductsCard>
                        );
                      })}
                    </>
                  ) : (
                    <h4 style={{textAlign: "center", color: "#fff"}}>
                      No Transaction History
                    </h4>
                  )}
                </>
              )}
            </HistoryBody>
          </PreviousProductCard>
        </CardsSection>
      </DashboardSection>
    </>
  );
};

export default Transactions;
