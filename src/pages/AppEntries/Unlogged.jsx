import React, {useState} from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import {AppLinks} from "../../Components/Navbar/navbar.style";
import cashew from "../../Assets/images/cashew.jpg";
import cow from "../../Assets/images/caw.png";
import gallic from "../../Assets/images/gallic.jpg";
import ginger from "../../Assets/images/ginger.png";
import invest from "../../Assets/images/invest.svg";
import about from "../../Assets/images/about.svg";
import benjamin from "../../Assets/images/benjamin.png";
import peter from "../../Assets/images/peter.jpg";
import grace from "../../Assets/images/grace.png";
import jane from "../../Assets/images/jane.jpeg";
import {
  Dots,
  Dot1,
  Dot2,
  Dot3,
  Dot4,
  HomeFooter,
  HomeHero,
  HomeNav,
  HomePage,
  ImageCont,
  LeftArrow,
  ArrowButtonLeft,
  ArrowButtonRight,
  RightArrow,
  SlideImages,
  Slides,
  About,
  AboutImage,
  Testimonies,
  HeadTitle,
  Contact,
  Products,
} from "./home";

import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {Paragraph, PriButton, Title} from "../../Styles/globalStyles";
import {
  Quote,
  UserCard,
  UserImage,
  UserName,
} from "../../Components/Cards/UserCard";
import {
  Interest,
  ProductsImage,
  ProductName,
  ProductsCard,
  AmountSection,
  ProductAmount,
  PayDuration,
  Description,
} from "../../Components/Cards/ProductsCard";
import AboutPage from "../../Components/About/About";

const Unlogged = () => {
  const [count, setCount] = useState(0);
  const minCount = 0;
  const maxCount = 3;

  const goLeft = () => {
    if (count > minCount) {
      setCount(count - 1);
    }
  };
  const goRight = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  if (count < maxCount) {
    setTimeout(() => {
      goRight();
    }, 4000);
  } else {
    setTimeout(() => {
      setCount(0);
    }, 4000);
  }

  return (
    <>
      <Navbar />
      <HomePage>
        <HomeNav>
          <Slides>
            <ArrowButtonLeft disabled={count === minCount} onClick={goLeft}>
              <LeftArrow>
                <FaArrowLeft />
              </LeftArrow>
            </ArrowButtonLeft>
            <ImageCont>
              <SlideImages
                src={
                  count === 0
                    ? cashew
                    : count === 1
                    ? cow
                    : count === 3
                    ? gallic
                    : ginger
                }
              />
              <Dots>
                <Dot1 active={count === 0} onClick={() => setCount(0)}></Dot1>
                <Dot2 active={count === 1} onClick={() => setCount(1)}></Dot2>
                <Dot3 active={count === 2} onClick={() => setCount(2)}></Dot3>
                <Dot4 active={count === 3} onClick={() => setCount(3)}></Dot4>
              </Dots>
            </ImageCont>
            <ArrowButtonRight disabled={count === maxCount} onClick={goRight}>
              <RightArrow>
                <FaArrowRight />
              </RightArrow>
            </ArrowButtonRight>
          </Slides>
        </HomeNav>
        <Products>
          <ProductsCard>
            <Interest>30% Interest</Interest>
            <ProductsImage src={cashew} />
            <ProductName>Cashew Nuts Export</ProductName>
            <AmountSection>
              <ProductAmount>₦10,000</ProductAmount>
              <PayDuration>Payout In 7Days</PayDuration>
            </AmountSection>
            <AmountSection>
              <ProductAmount>Interest</ProductAmount>
              <PayDuration>₦3,000 (30%)</PayDuration>
            </AmountSection>
            <Description>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </Description>
            <AppLinks to="/login">
              <PriButton style={{width: "100%"}}>Invest</PriButton>
            </AppLinks>
          </ProductsCard>
          <ProductsCard>
            <Interest>30% Interest</Interest>
            <ProductsImage src={cow} />
            <ProductName>Cow Milk Export</ProductName>
            <AmountSection>
              <ProductAmount>₦20,000</ProductAmount>
              <PayDuration>Payout In 7Days</PayDuration>
            </AmountSection>
            <AmountSection>
              <ProductAmount>Interest</ProductAmount>
              <PayDuration>₦6,000 (30%)</PayDuration>
            </AmountSection>
            <Description>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </Description>
            <AppLinks to="/login">
              <PriButton style={{width: "100%"}}>Invest</PriButton>
            </AppLinks>
          </ProductsCard>
          <ProductsCard>
            <Interest>50% Interest</Interest>
            <ProductsImage src={ginger} />
            <ProductName>Ginger Export</ProductName>
            <AmountSection>
              <ProductAmount>₦50,000</ProductAmount>
              <PayDuration>Payout In 15Days</PayDuration>
            </AmountSection>
            <AmountSection>
              <ProductAmount>Interest</ProductAmount>
              <PayDuration>₦25,000 (50%)</PayDuration>
            </AmountSection>
            <Description>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </Description>
            <AppLinks to="/login">
              <PriButton style={{width: "100%"}}>Invest</PriButton>
            </AppLinks>
          </ProductsCard>
          <ProductsCard>
            <Interest>80% Interest</Interest>
            <ProductsImage src={gallic} />
            <ProductName>Gallic Export</ProductName>
            <AmountSection>
              <ProductAmount>₦100,000</ProductAmount>
              <PayDuration>Payout In 30Days</PayDuration>
            </AmountSection>
            <AmountSection>
              <ProductAmount>Interest</ProductAmount>
              <PayDuration>₦80,000 (80%)</PayDuration>
            </AmountSection>
            <Description>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </Description>
            <AppLinks to="/login">
              <PriButton style={{width: "100%"}}>Invest</PriButton>
            </AppLinks>
          </ProductsCard>
        </Products>
        <AboutPage />
        <HomeHero>
          <AboutImage src={about} />
          <About>
            <HeadTitle>
              <Title>About Pivon</Title>
            </HeadTitle>
            <Quote>
              <Paragraph>
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Curabitur aliquet quam id dui posuere blandit. Nulla
                porttitor accumsan tincidunt. Nulla porttitor accumsan
                tincidunt. Nulla porttitor accumsan tincidunt.
              </Paragraph>
              <Paragraph>
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Curabitur aliquet quam id dui posuere blandit. Nulla
                porttitor accumsan tincidunt. Nulla porttitor accumsan
                tincidunt. Nulla porttitor accumsan tincidunt.
              </Paragraph>
            </Quote>
          </About>
        </HomeHero>
        <HomeFooter>
          <HeadTitle>
            <Title>Testimonies</Title>
          </HeadTitle>
          <Testimonies>
            <UserCard>
              <UserImage src={jane} />
              <UserName>Janet Titus Dung</UserName>
              <Quote>
                Donec rutrum congue leo eget malesuada. Curabitur aliquet quam
                id dui posuere blandit. Pellentesque in ipsum id orci porta
                dapibus.
              </Quote>
            </UserCard>
            <UserCard>
              <UserImage src={peter} />
              <UserName>Japhet Peter</UserName>
              <Quote>
                Donec rutrum congue leo eget malesuada. Curabitur aliquet quam
                id dui posuere blandit. Pellentesque in ipsum id orci porta
                dapibus.
              </Quote>
            </UserCard>
            <UserCard>
              <UserImage src={benjamin} />
              <UserName>Benjamin Kala</UserName>
              <Quote>
                Donec rutrum congue leo eget malesuada. Curabitur aliquet quam
                id dui posuere blandit. Pellentesque in ipsum id orci porta
                dapibus.
              </Quote>
            </UserCard>
            <UserCard>
              <UserImage src={grace} />
              <UserName>Miryam Timothy</UserName>
              <Quote>
                Donec rutrum congue leo eget malesuada. Curabitur aliquet quam
                id dui posuere blandit. Pellentesque in ipsum id orci porta
                dapibus.
              </Quote>
            </UserCard>
          </Testimonies>
        </HomeFooter>
      </HomePage>
      <Contact>Contact Us</Contact>
      <Footer />
    </>
  );
};

export default Unlogged;
