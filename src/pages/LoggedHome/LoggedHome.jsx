import {useMutation, useQuery, useReactiveVar} from "@apollo/client";
import React, {useState} from "react";
import {AiFillDashboard} from "react-icons/ai";
import {GoGraph, GoSettings} from "react-icons/go";
import {FaBars, FaHistory, FaPowerOff} from "react-icons/fa";
import {TiMessage, TiFolderAdd} from "react-icons/ti";
import {IoIosPeople} from "react-icons/io";
import {user} from "../..";
import {
  Contents,
  DashboardGrid,
  Item,
  ItemImage,
  ItemTitle,
  Menu,
  Pages,
  ProfilePic,
  StatCards,
  StatCount,
  Stats,
  StatTitle,
  Welcome,
  Profile,
  Logout,
  MenuIcon,
} from "./home.style";
import jane from "../../Assets/images/avatar.svg";
import {useHistory, useLocation} from "react-router";
import {AppLinks} from "../../Components/Navbar/navbar.style";
import AUTH_TOKEN from "../../utils/constants";
import Dashboard from "../Dashboard/Dashboard";
import Users from "../Users/Users";
import ErrorPage from "../404/ErrorPage";
import Products from "../Products/Products";
import UpdateProfile from "../Profile/UpdateProfile";
import Transactions from "../Transactions/Transactions";
import Messages from "../Messages/Messages";
import Referral from "../Referral/Referral";
import GET_USER from "../../graphql/queries/GetUser";
import GET_USER_PACKAGES from "../../graphql/queries/GetUserProducts";
import ProductDetail from "../ProductDetail/ProductDetailPage";
import {MoonLoader} from "react-spinners";
import UsersProducts from "../UsersProducts/UsersProduct";
import SEND_TO_BALANCE from "../../graphql/mutations/sendToBal";
import RefWithdrawal from "../RefWithdrawal/RefWithdrawal";
import Rnd5Withdrawal from "../Rnd5Withdrawal/Rnd5Withdrawal";
const LoggedHome = () => {
  const loggedUser = useReactiveVar(user);
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const currentPage = useLocation().pathname;

  let userId = 12232323;
  if (loggedUser !== null) {
    userId = loggedUser.id;
  }

  const {data, loading, error} = useQuery(GET_USER, {
    variables: {
      userId,
    },
  });
  const [sendToBal] = useMutation(SEND_TO_BALANCE, {
    onError: (err) => {
      console.log(err.graphQLErrors[0].extensions.exception.errors);
    },
  });

  const {data: packageData, loading: packageLoading} =
    useQuery(GET_USER_PACKAGES);

  if (error) {
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

  if (loggedUser === null && currentPage !== "/") {
    return <>{history.push("/")}</>;
  }

  let getUser = {};
  if (!loading) {
    getUser = data.getUser;
  }

  const handleLogOut = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem("user");
    user(null);
    history.push("/");
  };
  const {userName, id, email} = loggedUser;

  const packages = [];

  if (!packageLoading) {
    for (let i = 0; i < packageData.getUserPackages.length; i++) {
      if (packageData.getUserPackages[i].active === true) {
        packages.push(packageData.getUserPackages[i]);
      }
    }
  }

  if (packages.length > 0) {
    for (let i = 0; i < packages.length; i++) {
      const endDayVal = parseInt(packages[i].endDayVal);
      if (new Date().valueOf() >= endDayVal) {
        console.log(packages[i].id);
        sendToBal({
          variables: {
            packageId: packages[i].id,
            amount: packages[i].amount,
          },
        });
      }
    }
  }

  if (!packageLoading) {
    console.log(packageData);
  }

  return (
    <>
      <DashboardGrid>
        <Menu open={open} onClick={() => setOpen(false)}>
          <Item>
            <AppLinks to="/dashboard">
              <ItemTitle>Dashboard</ItemTitle>
              <ItemImage>
                <AiFillDashboard style={{width: "40%", height: "40%"}} />
              </ItemImage>
            </AppLinks>
          </Item>
          <Item>
            {loading ? (
              "..."
            ) : (
              <AppLinks to="/products">
                <ItemTitle>
                  {data.getUser.role === "user" ? "Products" : "Add Products"}
                </ItemTitle>
                <ItemImage>
                  {data.getUser.role === "user" ? (
                    <GoGraph style={{width: "40%", height: "40%"}} />
                  ) : (
                    <TiFolderAdd style={{width: "40%", height: "40%"}} />
                  )}
                </ItemImage>
              </AppLinks>
            )}
          </Item>
          <Item>
            <AppLinks to={`/profile-update/${userName}`}>
              <ItemTitle>Settings</ItemTitle>
              <ItemImage>
                <GoSettings style={{width: "40%", height: "40%"}} />
              </ItemImage>
            </AppLinks>
          </Item>
          <Item>
            {loading ? (
              "..."
            ) : (
              <>
                {data.getUser.role === "user" ? (
                  <AppLinks to={`/transactions/${id}`}>
                    <ItemTitle>transactions</ItemTitle>
                    <ItemImage>
                      <FaHistory style={{width: "40%", height: "40%"}} />
                    </ItemImage>
                  </AppLinks>
                ) : (
                  <AppLinks to={`/pxderfsfddd/`}>
                    <ItemTitle>Users Products</ItemTitle>
                    <ItemImage>
                      <GoGraph style={{width: "40%", height: "40%"}} />
                    </ItemImage>
                  </AppLinks>
                )}
              </>
            )}
          </Item>
          <Item>
            <AppLinks to={`/messages/${id}`}>
              <ItemTitle>Messages</ItemTitle>
              <ItemImage>
                <TiMessage style={{width: "40%", height: "40%"}} />
              </ItemImage>
            </AppLinks>
          </Item>
          <Item>
            <AppLinks to={`/referral/${id}`}>
              <ItemTitle>Referral</ItemTitle>
              <ItemImage>
                <IoIosPeople style={{width: "40", height: "40"}} />
              </ItemImage>
            </AppLinks>
          </Item>
        </Menu>
        <Contents>
          <Welcome>
            <MenuIcon onClick={() => setOpen(true)}>
              <FaBars style={{width: "40", height: "40"}} />
            </MenuIcon>
            <p></p>
            <Profile>
              <ProfilePic src={jane} />
              <Logout onClick={handleLogOut}>
                Logout <span> </span>
                <FaPowerOff />
              </Logout>
            </Profile>
          </Welcome>
          <Stats onClick={() => setOpen(false)}>
            <AppLinks to={`/transactions/${id}`}>
              <StatCards>
                <StatTitle>Balance</StatTitle>
                <StatCount>
                  ₦{loading ? "..." : getUser.balance.toLocaleString("en-US")}
                </StatCount>
              </StatCards>
            </AppLinks>

            <StatCards>
              <StatTitle>My Products</StatTitle>
              <StatCount>{packageLoading ? "..." : packages.length}</StatCount>
            </StatCards>
            <StatCards>
              <StatTitle>Times Invested</StatTitle>
              <StatCount>{loading ? "..." : getUser.round5Count}</StatCount>
            </StatCards>
            <AppLinks to={`/ax213e23sf4d3d/${getUser.id}/comwithdrawal`}>
              <StatCards>
                <StatTitle>Logistics Balance</StatTitle>
                <StatCount>
                  ₦{loading ? "..." : getUser.round5Bal.toLocaleString("en-US")}
                </StatCount>
              </StatCards>
            </AppLinks>
          </Stats>

          <Pages onClick={() => setOpen(false)}>
            {loading ? (
              <MoonLoader />
            ) : (
              <>
                {currentPage === "/dashboard" ? (
                  <>
                    {getUser.role === "admin" ? (
                      <Users />
                    ) : (
                      <Dashboard
                        loggedUser={loggedUser}
                        getUser={loading ? {} : getUser}
                        packages={
                          packageLoading ? [] : packageData.getUserPackages
                        }
                        packageLoading={packageLoading}
                      />
                    )}
                  </>
                ) : currentPage === "/products" ? (
                  <Products getUser={getUser} />
                ) : currentPage === `/profile-update/${userName}` ? (
                  <UpdateProfile
                    getUser={loading ? {} : getUser}
                    loading={loading}
                  />
                ) : currentPage === `/transactions/${id}` ? (
                  <Transactions getUser={getUser} />
                ) : currentPage.startsWith(`/messages/`) ? (
                  <Messages getUser={loading ? {} : getUser} />
                ) : currentPage === `/referral/${id}` ? (
                  <Referral getUser={loading ? {} : getUser} />
                ) : currentPage.startsWith(`/product/`) ? (
                  <ProductDetail email={email} />
                ) : currentPage === `/pxderfsfddd/` ? (
                  <UsersProducts getUser={loading ? {} : getUser} />
                ) : currentPage ===
                  `/px21de23sf4ddd/${getUser.id}/refwithdrawal` ? (
                  <RefWithdrawal getUser={loading ? {} : getUser} />
                ) : currentPage ===
                  `/ax213e23sf4d3d/${getUser.id}/comwithdrawal` ? (
                  <Rnd5Withdrawal getUser={loading ? {} : getUser} />
                ) : (
                  <ErrorPage />
                )}
              </>
            )}
          </Pages>
        </Contents>
      </DashboardGrid>
    </>
  );
};

export default LoggedHome;
