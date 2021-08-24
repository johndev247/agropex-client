import React, {useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {MoonLoader} from "react-spinners";
import {HomeNav, Products} from "../AppEntries/home";
import {
  AmountSection,
  PayDuration,
  ProductAmount,
  ProductsCard,
} from "../Dashboard/dashboard.style";
import {ProductsList} from "../Products/products.style";
import {AppLinks} from "../../Components/Navbar/navbar.style";
import {
  DangerButton,
  Li,
  PriButton,
  Ul,
  WarnButton,
} from "../../Styles/globalStyles";
import GET_USERS from "../../graphql/queries/getUsers";
import {RequestsBox} from "./users";
import TOGGLE_BLOCK from "../../graphql/mutations/toggleBlock";
import {ErrorMessages} from "../../Styles/forms.style";
import TOGGLE_ROLE from "../../graphql/mutations/toggleRole";

const Users = () => {
  const [errors, setErrors] = useState({});
  const [toggleBlock] = useMutation(TOGGLE_BLOCK, {
    onError: (err) => {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
  });

  const [toggleRole] = useMutation(TOGGLE_ROLE, {
    onError: (err) => {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
  });

  const callToggleRole = (userId) => {
    toggleRole({variables: {userId}});
  };

  const callToggleBlock = (userId) => {
    window.alert("Are You Sure?");
  };
  const {data, loading, error} = useQuery(GET_USERS);

  return (
    <ProductsList>
      <HomeNav>
        <Products>
          {loading ? (
            <MoonLoader color={"#449b62;"} />
          ) : (
            <>
              {data.getUsers.map((user, index) => {
                return (
                  <ProductsCard key={index}>
                    <AmountSection>
                      <PayDuration>Name: </PayDuration>
                      <ProductAmount>
                        {user.firstName + " " + user.lastName}
                      </ProductAmount>
                    </AmountSection>
                    <AmountSection>
                      <PayDuration>Phone:</PayDuration>
                      <ProductAmount>{user.phone}</ProductAmount>
                    </AmountSection>
                    <AmountSection>
                      <ProductAmount>State:</ProductAmount>
                      <PayDuration>{user.state}</PayDuration>
                    </AmountSection>
                    <RequestsBox>
                      <Ul>
                        {user.withdraw.map((req, index) => (
                          <Li key={index}>
                            <Li>{req.title}</Li>
                            <Li>{req.amount}</Li>
                            <Li>{req.requestDate}</Li>
                          </Li>
                        ))}
                      </Ul>
                    </RequestsBox>
                    <AmountSection>
                      <PayDuration>Ref By: </PayDuration>
                      <ProductAmount>{user.referredBy}</ProductAmount>
                    </AmountSection>
                    <AmountSection>
                      <PayDuration>
                        Bal: ₦{user.balance.toLocaleString("en-US")}
                      </PayDuration>
                      <ProductAmount>
                        Rnd5: ₦{user.round5Bal.toLocaleString("en-US")}
                      </ProductAmount>
                    </AmountSection>
                    <AmountSection>
                      <PayDuration>RefBal</PayDuration>
                      <ProductAmount>
                        ₦{user.referralBalance.toLocaleString("en-US")}
                      </ProductAmount>
                    </AmountSection>
                    <AmountSection>
                      <PayDuration>
                        RefCount: {user.referred.length}
                      </PayDuration>
                      <ProductAmount> Msg: {user.inbox.length}</ProductAmount>
                    </AmountSection>
                    <AmountSection>
                      <PayDuration> {user.bankInfo.bankName}</PayDuration>
                      <ProductAmount>
                        {user.bankInfo.accountNumber}
                      </ProductAmount>
                    </AmountSection>
                    <AmountSection>
                      <PayDuration>Status: </PayDuration>
                      <ProductAmount>
                        {user.active === true ? "Active" : "Inactive"}
                      </ProductAmount>
                    </AmountSection>
                    <PayDuration>{user.createdAt}</PayDuration>

                    {/* <AmountSection>
                      <Description>
                        {product.description}
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Quisque velit nisi, pretium ut lacinia in,
                        elementum id enim.
                      </Description>
                    </AmountSection> */}
                    <DangerButton style={{width: "100%"}}>Delete</DangerButton>
                    {user.role === "admin" ? (
                      <PriButton
                        onClick={() => callToggleRole(user.id)}
                        style={{width: "100%"}}
                      >
                        Make User
                      </PriButton>
                    ) : (
                      <PriButton
                        onClick={() => callToggleRole(user.id)}
                        style={{width: "100%"}}
                      >
                        Make Admin
                      </PriButton>
                    )}
                    {user.blackListed === true ? (
                      <WarnButton
                        onClick={() => callToggleBlock(user.id)}
                        style={{width: "100%"}}
                      >
                        Unblock
                      </WarnButton>
                    ) : (
                      <WarnButton
                        onClick={() => callToggleBlock(user.id)}
                        style={{width: "100%"}}
                      >
                        Block
                      </WarnButton>
                    )}
                    <AppLinks to={`/messages/${user.id}`}>
                      <PriButton style={{width: "100%"}}>Message</PriButton>
                    </AppLinks>
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
                  </ProductsCard>
                );
              })}
            </>
          )}
        </Products>
      </HomeNav>
    </ProductsList>
  );
};

export default Users;
