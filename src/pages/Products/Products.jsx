import React, {useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {BeatLoader, MoonLoader} from "react-spinners";
import GET_PACKAGES from "../../graphql/queries/GetPackages";
import cashew from "../../Assets/images/cashew.jpg";
import {useForm} from "../../utils/hooks";
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
import {ProductsList} from "./products.style";
import {AppLinks} from "../../Components/Navbar/navbar.style";
import {
  DangerButton,
  FlexBlock,
  FlexDiv,
  Li,
  PriButton,
  Title,
  Ul,
} from "../../Styles/globalStyles";
import CREATE_PACKAGES from "../../graphql/mutations/AddPackages";
import {
  ErrorMessages,
  Form,
  FormInput,
  FormLabel,
  FormSelect,
} from "../../Styles/forms.style";
import DELETE_PACKAGE from "../../graphql/mutations/deletePackage";

const ProductsPage = ({getUser}) => {
  const [errors, setErrors] = useState({});
  const initialValues = {
    packageName: "",
    image: "",
    payDuration: "",
    description: "",
    interest: "",
  };
  const {data, loading, error} = useQuery(GET_PACKAGES);

  const {handleInput, handleSubmit, values} = useForm(
    callAddPackage,
    initialValues
  );

  const [addPackages] = useMutation(CREATE_PACKAGES, {
    variables: values,
    onError: (err) => {
      console.log(err);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    onCompleted: () => {
      setErrors({});
    },
  });

  const [deletePackage] = useMutation(DELETE_PACKAGE);

  function callAddPackage() {
    addPackages();
  }

  const handleDelete = (packageId) => {
    deletePackage({variables: {packageId}});
  };

  let packages = [];
  if (!loading && !error) {
    packages = data.getPackages;
  }
  console.log(values);
  return (
    <ProductsList>
      <HomeNav>
        <Products>
          {getUser.role === "admin" && (
            <Form onSubmit={handleSubmit}>
              <FormLabel>Package Name</FormLabel>
              <FormSelect
                name="packageName"
                type="text"
                onChange={handleInput}
                value={values.packageName}
              >
                <option disabled selected>
                  --Package Name--
                </option>
                <option name="packageName" value="Cashew Nuts">
                  Cashew Nuts
                </option>
                <option name="packageName" value="Cow Produce">
                  Cow Produce
                </option>
                <option name="packageName" value="Raw Gallic">
                  Row Gallic
                </option>
                <option name="packageName" value="Raw Ginger">
                  Raw Ginger
                </option>
              </FormSelect>

              <FormLabel>Image</FormLabel>
              <FormSelect
                name="image"
                type="text"
                onChange={handleInput}
                value={values.image}
              >
                <option disabled selected>
                  --Select Image--
                </option>
                <option name="image" value="cashew">
                  Cashew
                </option>
                <option name="image" value="cow">
                  Cow
                </option>
                <option name="image" value="gallic">
                  Gallic
                </option>
                <option name="image" value="ginger">
                  Ginger
                </option>
              </FormSelect>
              <FormLabel>Pay Duration</FormLabel>
              <FormSelect
                name="payDuration"
                type="text"
                onChange={handleInput}
                value={values.payDuration}
              >
                <option disabled selected>
                  --Select Image--
                </option>
                <option name="payDuration" value="7 Days">
                  7 Days
                </option>
                <option name="payDuration" value="15 Days">
                  15 Days
                </option>
                <option name="payDuration" value="30 Days">
                  30 Days
                </option>
              </FormSelect>

              <FormLabel> Description</FormLabel>
              <FormInput
                name="description"
                type="text"
                value={values.description}
                onChange={handleInput}
              />
              <FormLabel>Interest</FormLabel>
              <FormSelect
                name="interest"
                type="text"
                onChange={handleInput}
                value={values.interest}
              >
                <option disabled selected>
                  --Select Interest--
                </option>
                <option name="interest" value="30%">
                  30%
                </option>
                <option name="interest" value="50%">
                  50%
                </option>
                <option name="interest" value="80%">
                  80%
                </option>
              </FormSelect>
              {loading ? (
                <BeatLoader loading={loading} size={20} color={"#449b62;"} />
              ) : (
                <PriButton type="submit" onClick={handleSubmit}>
                  Add
                </PriButton>
              )}
              {Object.keys(errors).length > 0 && (
                <ErrorMessages>
                  <Ul>
                    <h4 style={{margin: "0"}}>Error!</h4>
                    {Object.values(errors).map((value) => (
                      <Li key={value}> * {value}</Li>
                    ))}
                  </Ul>
                </ErrorMessages>
              )}
            </Form>
          )}
          {loading ? (
            <MoonLoader color={"#449b62;"} />
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
                          (index === 0
                            ? 50
                            : index === 1
                            ? 38
                            : index * 15)}{" "}
                        People
                      </ProductAmount>
                    </AmountSection>
                    {/* <AmountSection>
                      <Description>
                        {product.description}
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Quisque velit nisi, pretium ut lacinia in,
                        elementum id enim.
                      </Description>
                    </AmountSection> */}
                    <FlexBlock>
                      <AppLinks to={`/product/${product.id}`}>
                        <PriButton style={{width: "100%"}}>Invest</PriButton>
                      </AppLinks>
                      {getUser.role === "admin" && (
                        <DangerButton onClick={() => handleDelete(product.id)}>
                          Delete
                        </DangerButton>
                      )}
                    </FlexBlock>
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

export default ProductsPage;
