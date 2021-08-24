import styled from "styled-components";
import {Container} from "../../Styles/globalStyles";

export const ProfileSettings = styled(Container)`
  display: flex;
  flex-flow: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const ProfileSettingsTitle = styled.h2`
  color: #449b62;
  text-align: center;
`;

export const SettingsCardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    height: 420px;
    overflow-y: scroll;
  }
`;

export const SettingsCard = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 100;
  margin: 1em;
  border: 1px solid #cacaca;
  border-radius: 0.3em;
`;

export const SettingsCardsTitle = styled.h2`
  color: #449b62;
  text-align: center;
`;

export const SettingsInfo = styled.div`
  margin: 0.5em;
`;
