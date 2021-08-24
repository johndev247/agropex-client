import React, {useState} from "react";
import {MoonLoader} from "react-spinners";
import {HomeNav, Products} from "../AppEntries/home";
import cashew from "../../Assets/images/cashew.jpg";
import cow from "../../Assets/images/caw.png";
import gallic from "../../Assets/images/gallic.jpg";
import ginger from "../../Assets/images/ginger.png";
import {
  AmountSection,
  Interest,
  PayDuration,
  ProductAmount,
  ProductName,
  ProductsCard,
  ProductsImage,
} from "../Dashboard/dashboard.style";
import {publicKey} from "../../utils/config";
import {ProductDetail} from "./ProductDetail.style";
import {gql, useMutation, useQuery} from "@apollo/client";
import GET_PACKAGES from "../../graphql/queries/GetPackages";
import {useHistory, useLocation} from "react-router";
import CREATE_USER_PACKAGE from "../../graphql/mutations/CreateUserPackage";
import {PaystackButton} from "react-paystack";
import GET_USER_PACKAGES from "../../graphql/queries/GetUserProducts";

const ProductDetailPage = ({email}) => {
  const [value, setValue] = useState(null);
  const {data, loading, error} = useQuery(GET_PACKAGES);

  const Location = useLocation().pathname;
  const packageId = Location.slice(9);

  const packages = [];
  if (!loading && !error) {
    const products = data.getPackages;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === packageId) {
        packages.push(products[i]);
      }
    }
  }
  const handleChange = (e) => {
    const targetAmount = e.target.value;
    setValue(targetAmount);
  };

  var amount = parseInt(value);

  const [createPackage] = useMutation(CREATE_USER_PACKAGE, {});

  const config = {
    reference: new Date().getTime(),
    email,
    amount: amount * 100,
    publicKey,
  };

  const handlePaystackSuccessAction = (reference) => {
    createPackage();
  };
  // you can call this function anything
  const handlePaystackCloseAction = () => {};

  const componentProps = {
    ...config,
    text: "Invest",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  const callInvest = (e) => {
    e.preventDefault();
    createPackage({
      variables: {
        packageId,
        amount,
      },
      refetchQueries: [{query: GET_USER_PACKAGES}],
    });
  };

  return (
    <ProductDetail>
      <HomeNav>
        <Products>
          {loading ? (
            <MoonLoader />
          ) : (
            <>
              {packages.map((product, index) => {
                return (
                  <ProductsCard key={index}>
                    <Interest>{product.interest} Interest</Interest>
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
                      <PayDuration>Duration:</PayDuration>
                      <ProductAmount>{product.payDuration}</ProductAmount>
                    </AmountSection>
                    <AmountSection>
                      <PayDuration>Investors:</PayDuration>
                      <ProductAmount>
                        {product.sales.length +
                          (index === 0 ? 50 : index === 1 ? 38 : index * 15)}
                      </ProductAmount>
                    </AmountSection>
                    <AmountSection>
                      <PayDuration>Amount:</PayDuration>
                      <ProductAmount>
                        <form>
                          <select onChange={handleChange}>
                            <option disabled selected>
                              Select
                            </option>
                            <option value={10000}>10,000</option>
                            <option value={20000}>20,000</option>
                            <option value={50000}>50,000</option>
                            <option value={100000}>100,000</option>
                          </select>
                        </form>
                      </ProductAmount>
                    </AmountSection>
                    <button onClick={callInvest}>Invest</button>
                    {/* <PaystackButton {...componentProps} /> */}
                  </ProductsCard>
                );
              })}
            </>
          )}
        </Products>
      </HomeNav>
    </ProductDetail>
  );
};

export default ProductDetailPage;
