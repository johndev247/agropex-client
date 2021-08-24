import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    font-family: "Lato", sans-serif;
    background-color: whitesmoke;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const AppContainer = styled(Container)``;

export const Ul = styled.ul`
  padding: 0 10px;
  margin: 0;
`;

export const Li = styled.li`
  list-style: none;
  margin: 3px;
`;
export const Cards = styled.div`
  border-radius: 0.5em;
  padding: 1em;
  box-shadow: 0px 0px 23px -10px #0b0b0b;
`;

export const Paragraph = styled.p`
  font-size: 17px;
  letter-spacing: 1.2px;
`;

export const Title = styled.h2`
  text-align: center;
  color: green;
  margin: 0;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

export const FlexBlock = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0.3em;
`;

export const SubTiltle = styled.h3``;

export const VertLine = styled.hr`
  background-color: red;
`;

export const PriButton = styled.button`
  min-width: 100px;
  height: 35px;
  outline: none;
  border: none;
  background-color: #163c23;
  border-radius: 0.4em;
  margin: 0 3px;
  color: white;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
`;

export const WarnButton = styled.button`
  min-width: 100px;
  height: 30px;
  outline: none;
  border: none;
  background-color: #c09553;
  border-radius: 0.4em;
  margin: 0.2em 3px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export const DangerButton = styled.button`
  min-width: 100px;
  height: 30px;
  outline: none;
  border: none;
  background-color: #c84344;
  border-radius: 0.4em;
  margin: 0 3px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
export const Warning = styled.p`
  color: red;
`;
//Tables
export const Table = styled.table`
  border: 1px solid #cacaca;
  height: 170px;
  width: 95%;
  margin: 1em auto;
`;
export const THead = styled.thead`
  border: 1px solid #cacaca;
`;
export const Tr = styled.tr`
  border: 1px solid #cacaca;
`;
export const Th = styled.th`
  border: 1px solid #cacaca;
`;
export const TBody = styled.tbody`
  border: 1px solid #cacaca;
`;
export const Td = styled.td`
  border: 1px solid #cacaca;
  cursor: pointer;
`;
export const TFoot = styled.tfoot`
  border: 1px solid #cacaca;
`;

//Tables

export const Link = styled.a`
  text-decoration: none;
`;

export const WarningBox = styled.div`
  display: flex;
  position: absolute;
  flex-flow: column;
  z-index: 999;
  background-color: green;
  width: 100vw;
  padding: 1em;
  align-self: flex-start;
`;
export const DeleteQuestion = styled.h2`
  color: #fff;
  text-align: center;
  margin: 0;
`;
export const DeleteQuestionName = styled.h4`
  color: #fff;
  text-align: center;
  margin: 0.5em;
`;

export default GlobalStyle;
