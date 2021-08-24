import React from "react";
import {useQuery} from "@apollo/client";
import {MoonLoader} from "react-spinners";
import cashew from "../../Assets/images/cashew.jpg";
import cow from "../../Assets/images/caw.png";
import gallic from "../../Assets/images/gallic.jpg";
import ginger from "../../Assets/images/ginger.png";
import {HomeNav, Products} from "../AppEntries/home";
import {
  AmountSection,
  Interest,
  PayDuration,
  ProductAmount,
  ProductName,
  ProductsCard,
  ProductsImage,
} from "../Dashboard/dashboard.style";
import {ProductsList} from "../Products/products.style";
import GET_USERS_PACKAGES from "../../graphql/queries/GetUsersPackages";
import {useHistory} from "react-router";

const UsersProducts = () => {
  const history = useHistory();
  const {data, loading, error} = useQuery(GET_USERS_PACKAGES, {
    onError: () => {
      history.push("/dashboard");
    },
  });

  return (
    <ProductsList>
      <HomeNav>
        <Products>
          {loading ? (
            <MoonLoader />
          ) : (
            <>
              {data.getUsersPackages.map((product, index) => {
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
                    <AmountSection>
                      <PayDuration>User: </PayDuration>
                      <ProductAmount>{product.userId}</ProductAmount>
                    </AmountSection>
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

export default UsersProducts;
