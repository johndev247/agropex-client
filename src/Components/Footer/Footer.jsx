import React from "react";
import {Container} from "../../Styles/globalStyles";
import {CopyRight, FooterDiv, FooterSection} from "./footer.style";

const Footer = () => {
  return (
    <FooterSection>
      <FooterDiv>
        <Container>
          <CopyRight> 2021 Agropex</CopyRight>
        </Container>
      </FooterDiv>
    </FooterSection>
  );
};

export default Footer;
