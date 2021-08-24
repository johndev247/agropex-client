import React from "react";
import {
  About,
  AboutImage,
  HeadTitle,
  HomeHero,
} from "../../pages/AppEntries/home";
import {Paragraph, Title} from "../../Styles/globalStyles";
import {Quote} from "../Cards/UserCard";
import invest from "../../Assets/images/invest.svg";

const AboutPage = () => {
  return (
    <div>
      <HomeHero>
        <About>
          <HeadTitle>
            <Title>How To Invest</Title>
          </HeadTitle>
          <Quote>
            <Paragraph>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Curabitur aliquet quam id dui posuere blandit. Nulla
              porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt.
              Nulla porttitor accumsan tincidunt.
            </Paragraph>
            <Paragraph>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Curabitur aliquet quam id dui posuere blandit. Nulla
              porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt.
              Nulla porttitor accumsan tincidunt.
            </Paragraph>
          </Quote>
        </About>
        <AboutImage src={invest} />
      </HomeHero>
    </div>
  );
};

export default AboutPage;
