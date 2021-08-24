import styled from "styled-components";
import {Cards} from "../../Styles/globalStyles";
export const ReferralBox = styled.div`
  display: flex;
  flex-flow: column;
  max-height: 500px;
  overflow-y: auto;
  @media only screen and (max-width: 768px) {
    width: 100vw;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const RefTopNav = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  flex-wrap: wrap;
`;
export const RefBalance = styled.div`
  flex: 1 1 200px;
  display: flex;
  flex-flow: row;
  justify-content: center;
`;
export const BalanceBox = styled(Cards)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  color: #449b62;
  text-align: center;
`;

export const RefCardTitle = styled.p`
  color: #449b62;
  margin-left: 10px;
`;

export const RefLink = styled.div`
  flex: 4 1 400px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;

export const RefBox = styled.div`
  width: 90%;
  height: 35px;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
`;

export const RefField = styled.input`
  width: 80%;
  height: 30px;
  border: 1px solid #c1c1c1;
  outline: none;
  padding: 0 5px;
  border-radius: 0.3em;
`;

export const CopyLink = styled.p`
  color: #449b62;
  cursor: pointer;
`;
export const RefCount = styled.div`
  flex: 1 1 200px;
  display: flex;
  flex-flow: row;
  justify-content: center;
`;
export const RefBody = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const AllRefs = styled.div`
  flex: 0 1 200px;
  text-align: center;
`;

export const RefCardContainer = styled.div`
  height: 300px;
  background-color: green;
  height: 500px;
`;

export const RefCard = styled.div``;

export const ValidRefs = styled.div`
  flex: 0 1 200px;
  text-align: center;
  height: 500px;
  @media only screen and (max-width: 400px) {
    margin-top: 3em;
  }
`;
