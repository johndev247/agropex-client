import styled from "styled-components";
import {Cards, Container} from "../../Styles/globalStyles";

export const DashboardSection = styled.div`
  display: flex;
  flex-flow: column;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const CardsSection = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-flow: row;
    height: 100vh;
    justify-content: space-evenly;
  }
`;

export const ProductsDiv = styled(Container)`
  display: flex;
  flex-flow: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;
export const ProductSectionTitle = styled.h2`
  text-align: center;
  color: #449b62;
  padding: 0;
  margin: 0;
`;

export const NoPackage = styled(Container)`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 4em;
  padding: 0.5em;
`;

export const NoPackageMessage = styled.h3`
  margin-bottom: 2px;
  color: #449b62;
  text-align: center;
`;

export const ProductsSection = styled.div`
  display: flex;
  flex-flow: row;
  height: 500px;
  max-width: 600px;
  overflow: auto;
  flex-wrap: wrap;

  @media only screen and (max-width: 965px) {
    display: flex;
    flex-flow: column;
  }
  @media only screen and (max-width: 768px) {
    height: 470px;
  }
  @media only screen and (max-height: 568px) {
    height: 400px;
  }
`;

export const ProductsCard = styled(Cards)`
  display: flex;
  flex-flow: column;
  margin: 1em;
  background-color: #f5f5f5;

  @media only screen and (max-width: 965px) {
    display: flex;
    flex: 0 0 200px;
  }

  @media only screen and (max-width: 485px) {
    display: flex;
    flex: 0 0 200;
  }
`;

export const Interest = styled.h4`
  padding: 0;
  margin: 0 0 1em 0;
  color: #449b62;
`;

export const ProductsImage = styled.img`
  width: 200px;
  height: 150px;
  align-self: center;
  border-radius: 0.4em;
`;

export const ProductName = styled.h3`
  color: #449b62;
  align-self: center;
  margin: 0;
`;

export const AmountSection = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

export const ProductAmount = styled.h4`
  color: #449b62;
  margin: 0 0 1em 0;
  padding: 0;
`;
export const PayDuration = styled.h4`
  color: #449b62;
  margin: 0 0 1em 0;
  padding: 0;
`;

export const Description = styled.blockquote`
  padding: 0;
  margin: 0;
  margin: 0 0 1em 0;
  align-self: center;
`;

export const PrevHisIcon = styled.div`
  display: none;
  @media only screen and (max-width: 500px) {
    z-index: 120;
    display: block;
    position: absolute;
    right: 0.5em;
    margin-top: 0.5em;
    cursor: pointer;
  }
`;
export const PreviousProductCard = styled(Cards)`
  display: flex;
  flex-flow: column;
  margin-top: 0.5em;
  flex: 0 0 200px;
  background-color: #449b62;
  @media only screen and (max-width: 500px) {
    position: absolute;
    width: 200px;
    height: 100vh;
    transition: 0.3s all ease-in-out;
    right: ${({open}) => (open ? "0" : "-250px")};
    margin-top: 2.5em;
    z-index: 33;
  }
`;

export const HistoryTitle = styled.div``;
export const HistoryBody = styled.div`
  display: flex;
  flex-flow: column;
  max-height: 100vh;
  height: 470px;
  overflow-y: auto;
  background-color: #449b62;
  @media only screen and (max-width: 768px) {
    height: 100%;
    max-height: 500px;
  }
`;
