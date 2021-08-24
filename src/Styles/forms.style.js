import styled from "styled-components";
import {Cards} from "./globalStyles";

export const FormCard = styled(Cards)`
  background-color: white;
  width: 300px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const FormInput = styled.input`
  border: 1px solid #cacaca;
  background-color: whitesmoke;
  height: 2.5em;
  outline: none;
  display: block;
  width: 90%;
  max-width: 230px;
  margin: 0.6em auto;
  font-size: 1em;
  padding: 0 0.7em;
  &:hover {
    outline: 1px solid #3f8d5d;
  }
  @media only screen and (max-width: 333px) {
    /* max-width: 100%; */
  }
`;

export const ErrorMessages = styled.div`
  margin: 5px 0;
  padding: 4px;
  color: #9c3127;
  background-color: #eeb8b8;
`;

export const SuccessMessage = styled.div`
  transition: 0.3s all ease-in-out;
  display: ${({show}) => (show ? `flex` : `none`)};
  flex-flow: row;
  justify-content: center;
  margin: 5px 0;
  padding: 4px;
  color: #fff;
  text-align: center;
  background-color: #449b62;
`;

export const RadioInput = styled.input`
  margin: 0.6em;
  border: 1px solid #163c23;
  background-color: #163c23;
  height: 2.5em;
  outline: none;
  display: block;
  font-size: 1em;
  cursor: pointer;
  padding: 0 0.7em;
  &:hover {
    outline: 1px none #3f8d5d;
  }
`;

export const FormSelect = styled.select`
  margin: 0.6em;
  border: 1px solid #cacaca;
  background-color: whitesmoke;
  height: 2.5em;
  outline: none;
  display: block;
  font-size: 1em;
  width: 90%;
  max-width: 230px;
  margin: 0.6em auto;
  padding: 0 0.7em;
  &:hover {
    outline: 1px solid #3f8d5d;
  }
`;

export const SignUpButton = styled.div``;

export const FormRouter = styled.p`
  color: #449b62;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const FormLabel = styled.label`
  letter-spacing: 1px;
  text-align: left;
  max-width: 230px;
  margin: 0 8%;
  align-self: flex-start;
  @media only screen and (max-width: 315px) {
    margin: 0;
  }
`;
