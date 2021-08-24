import styled from "styled-components";
import {Cards} from "../../Styles/globalStyles";

export const ProductsCard = styled(Cards)`
  flex: 0 1 250px;
  display: flex;
  flex-flow: column;
  margin-bottom: 1em;

  @media only screen and (max-width: 585px) {
    display: flex;
    flex: 0 0 200px;
  }

  @media only screen and (max-width: 485px) {
    display: flex;
    flex: 0 0 70%;
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
