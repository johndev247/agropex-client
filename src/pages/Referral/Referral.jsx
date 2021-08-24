import React from "react";
import {AppLinks} from "../../Components/Navbar/navbar.style";
import {FlexBlock, Title} from "../../Styles/globalStyles";
import {
  HistoryBody,
  HistoryTitle,
  PayDuration,
  ProductName,
  ProductsCard,
} from "../Dashboard/dashboard.style";
import {
  ReferralBox,
  RefTopNav,
  RefBody,
  AllRefs,
  ValidRefs,
  RefBalance,
  RefLink,
  RefCount,
  BalanceBox,
  RefField,
  RefCardTitle,
  RefBox,
  CopyLink,
} from "./referral.style";

const Referral = ({getUser}) => {
  return (
    <ReferralBox>
      <RefTopNav>
        <RefBalance>
          <FlexBlock>
            <RefCardTitle>Referral Balance</RefCardTitle>
            <BalanceBox>
              ₦{getUser.referralBalance.toLocaleString("en-US")}
            </BalanceBox>
            <AppLinks to={`/px21de23sf4ddd/${getUser.id}/refwithdrawal`}>
              <button>Withdraw</button>
            </AppLinks>
          </FlexBlock>
        </RefBalance>
        <RefCount>
          <FlexBlock>
            <RefCardTitle>Total Referred</RefCardTitle>
            <BalanceBox>{getUser.referred.length}</BalanceBox>
          </FlexBlock>
        </RefCount>
        <RefLink>
          <FlexBlock style={{width: "100%"}}>
            <RefCardTitle>Your Referral Link</RefCardTitle>
            <RefBox>
              <RefField />
              <CopyLink>Copy</CopyLink>
            </RefBox>
          </FlexBlock>
        </RefLink>
      </RefTopNav>
      {getUser.referred.length > 0 ? (
        <RefBody>
          <AllRefs>
            <HistoryTitle>
              <h2 style={{color: "#449b62", margin: "0", textAlign: "center"}}>
                All Referred
              </h2>
            </HistoryTitle>
            <HistoryBody>
              {getUser.referred.map((user) => (
                <ProductsCard style={{height: "50px"}}>
                  <ProductName>{user.fullName}</ProductName>
                  <PayDuration>{user.phone}</PayDuration>
                </ProductsCard>
              ))}
            </HistoryBody>
          </AllRefs>
          <ValidRefs>
            <HistoryTitle>
              <h2 style={{color: "#449b62", margin: "0", textAlign: "center"}}>
                Paid Referrals
              </h2>
            </HistoryTitle>
            <HistoryBody>
              {getUser.validRefs.map((user) => (
                <ProductsCard style={{height: "70px"}}>
                  <ProductName>{user.phone}</ProductName>
                  <PayDuration>
                    ₦{user.amount.toLocaleString("en-US")}
                  </PayDuration>
                </ProductsCard>
              ))}
            </HistoryBody>
          </ValidRefs>
        </RefBody>
      ) : (
        <Title>Not Referred Anyone Yet</Title>
      )}
    </ReferralBox>
  );
};

export default Referral;
