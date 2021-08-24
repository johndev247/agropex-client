import styled from "styled-components";

export const MessageCard = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: stretch;
  margin: 1em;
  border: 1px solid #cacaca;
  border-radius: 0.3em;
  @media only screen and (max-width: 430px) {
    width: 90vw;
    margin: 1em auto;
  }
`;

export const MessageBox = styled.div`
  display: flex;
  flex-flow: column;
  width: 400px;
  max-height: 240px;
  overflow-y: auto;
  margin: 0.3em;
  @media only screen and (max-width: 450px) {
    width: 95vw;
    margin: 0.3em auto;
  }
  @media only screen and (min-height: 800px) {
    max-height: 350px;
  }
  @media only screen and (max-height: 731px) {
    max-height: 270px;
  }
  @media only screen and (max-height: 667px) {
    max-height: 220px;
  }
  @media only screen and (max-height: 640px) {
    max-height: 200px;
  }
  @media only screen and (max-height: 568px) {
    max-height: 120px;
  }
`;

export const MessageUserBox = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0.1em 0.3em 0.1em 0.1em;
  @media only screen and (max-width: 450px) {
    margin: 0.1em 1.5em 0.1em 0.5em;
  }
`;
export const MessageSender = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  align-self: ${({me}) => (me ? `flex-end` : `flex-start`)};
`;
export const SenderImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
export const SenderName = styled.p`
  padding: 0;
  margin: 0 2px;
  color: #449b62;
`;
export const MessageSection = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  align-self: ${({me}) => (me ? `flex-end` : `flex-start`)};
  @media only screen and (max-width: 450px) {
  }
`;

export const DeleteIcon = styled.div`
  margin: 0 8px;
  color: red;
  cursor: pointer;
  align-self: flex-end;
`;

export const Message = styled.blockquote`
  background-color: #f3f0f0;
  /* padding: 0 10px; */
  width: 100%;
  margin: 0.1em 0;
  border-radius: 0.5em;
  color: #1c1c1c;
`;
export const MessageTimeStamp = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  color: #c1c1c1;
  align-self: ${({me}) => (me ? `flex-end` : `flex-start`)};
`;
export const MessageMoment = styled.div`
  margin-right: 5px;
`;
export const MessageDate = styled.div``;

export const TypeSection = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-self: self-end;
`;
