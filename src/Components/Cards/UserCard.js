import styled from "styled-components";
import { Cards } from "../../Styles/globalStyles";

export const UserCard = styled(Cards)`
  flex: 0 1 250px;
  display: flex;
  flex-flow: column;
  margin-bottom: 1em;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex: 0 0 200px;
  }

  @media only screen and (max-width: 500px) {
    display: flex;
    flex: 0 0 70%;
  }
`;

export const UserImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  align-self: center;
`;

export const UserName = styled.h3`
  color: #449b62;
  align-self: center;
`;

export const Quote = styled.blockquote`
  padding: 0;
  margin: 0;
  align-self: center;
`;
