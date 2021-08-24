import React, {useState} from "react";
import {MoonLoader} from "react-spinners";
import {Greetings, Hello, TimeOfDay} from "../LoggedHome/home.style";
import {FaHistory, FaArrowDown} from "react-icons/fa";
import {
  AmountSection,
  CardsSection,
  DashboardSection,
  HistoryBody,
  HistoryTitle,
  Interest,
  NoPackage,
  NoPackageMessage,
  PayDuration,
  PrevHisIcon,
  PreviousProductCard,
  ProductAmount,
  ProductName,
  ProductsCard,
  ProductsDiv,
  ProductSectionTitle,
  ProductsImage,
  ProductsSection,
} from "./dashboard.style";
import cashew from "../../Assets/images/cashew.jpg";
import cow from "../../Assets/images/caw.png";
import gallic from "../../Assets/images/gallic.jpg";
import ginger from "../../Assets/images/ginger.png";
import {PriButton} from "../../Styles/globalStyles";
import {AppLinks} from "../../Components/Navbar/navbar.style";

const Dashboard = ({loggedUser, packageLoading, packages: products}) => {
  const [open, setOpen] = useState(false);
  const packages = [];
  const inActive = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].active === true) {
      packages.push(products[i]);
    } else {
      inActive.push(products[i]);
    }
  }
  const fullName =
    loggedUser.firstName +
    " " +
    loggedUser.middleName +
    " " +
    loggedUser.lastName;

  const time = new Date().getHours();

  return (
    <>
      {packageLoading ? (
        <MoonLoader />
      ) : (
        <DashboardSection>
          <Greetings>
            <Hello>Hello {fullName}</Hello>
            <TimeOfDay>
              Good
              {time > 4 && time < 12
                ? " Morning"
                : time > 11 && time < 17
                ? " Afternoon"
                : time > 16 && time < 20
                ? " Evening"
                : " Night"}
            </TimeOfDay>
          </Greetings>
          <CardsSection>
            {packages.length ? (
              <ProductsDiv>
                <ProductSectionTitle>Invested In</ProductSectionTitle>
                <ProductsSection>
                  {packages.map((product, index) => {
                    return (
                      <ProductsCard key={index}>
                        <Interest>{product.interest}%</Interest>
                        <ProductsImage
                          src={
                            product.image === "cashew"
                              ? `${cashew}`
                              : product.image === "cow"
                              ? `${cow}`
                              : product.image === "ginger"
                              ? `${ginger}`
                              : `${gallic}`
                          }
                        />
                        <ProductName>{product.packageName}</ProductName>
                        <AmountSection>
                          <PayDuration>Amount: </PayDuration>
                          <ProductAmount>
                            ₦ {product.amount.toLocaleString("en-US")}
                          </ProductAmount>
                        </AmountSection>
                        <AmountSection>
                          <PayDuration>Interest</PayDuration>
                          <ProductAmount>{product.interest}</ProductAmount>
                        </AmountSection>
                        <AmountSection>
                          <PayDuration>Duration:</PayDuration>
                          <ProductAmount>{product.duration}</ProductAmount>
                        </AmountSection>
                        <AmountSection>
                          <PayDuration>To Be Payed On:</PayDuration>
                          <ProductAmount>{product.payDay}</ProductAmount>
                        </AmountSection>
                      </ProductsCard>
                    );
                  })}
                </ProductsSection>
              </ProductsDiv>
            ) : (
              <NoPackage>
                <ProductSectionTitle>No Product Found!</ProductSectionTitle>
                <NoPackageMessage>
                  Sorry You Don't Have Any Active Product.
                </NoPackageMessage>
                <NoPackageMessage>
                  Kindly Goto Products And Select One
                </NoPackageMessage>
                <FaArrowDown
                  style={{color: " #449b62", width: "25px", height: "25px"}}
                />
                <AppLinks to="/products">
                  <PriButton>Goto Products</PriButton>
                </AppLinks>
              </NoPackage>
            )}
            <PrevHisIcon onClick={() => setOpen(!open)}>
              <FaHistory
                style={{color: " #449b62", width: "25px", height: "25px"}}
              />
            </PrevHisIcon>
            <PreviousProductCard open={open}>
              <HistoryTitle>
                <h2 style={{color: " #fff", margin: "0", textAlign: "center"}}>
                  Previous
                </h2>
              </HistoryTitle>
              <HistoryBody>
                {inActive.length ? (
                  <>
                    {inActive.map((product, index) => {
                      return (
                        <ProductsCard key={index} style={{height: "170px"}}>
                          <ProductName>{product.packageName}</ProductName>
                          <ProductsImage
                            src={
                              product.image === "cashew"
                                ? `${cashew}`
                                : product.image === "cow"
                                ? `${cow}`
                                : product.image === "ginger"
                                ? `${ginger}`
                                : `${gallic}`
                            }
                            style={{width: "90px", height: "60px"}}
                          />
                          <ProductAmount style={{textAlign: "center"}}>
                            ₦ {product.amount.toLocaleString("en-US")}
                          </ProductAmount>
                          <AmountSection>
                            <PayDuration>Paid</PayDuration>
                            <ProductAmount>{product.payDay}</ProductAmount>
                          </AmountSection>
                        </ProductsCard>
                      );
                    })}
                  </>
                ) : (
                  <h4 style={{textAlign: "center", color: "#fff"}}>
                    No Previous Product
                  </h4>
                )}
              </HistoryBody>
            </PreviousProductCard>
          </CardsSection>
        </DashboardSection>
      )}
    </>
  );
};

export default Dashboard;
