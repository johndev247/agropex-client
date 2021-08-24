import styled from "styled-components";
import {Container} from "../../Styles/globalStyles";

export const HomePage = styled(Container)`
  background-color: white;
  display: block;
  margin-top: 70px;
`;

export const HomeNav = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
`;

export const Slides = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ArrowButtonLeft = styled.button`
  position: absolute;
  background-color: #72a987;
  border: 1px solid #dee2df;
  left: 1em;

  &:disabled {
    background-color: #449b62;
  }
`;

export const ArrowButtonRight = styled.button`
  background-color: #72a987;
  border: 1px solid #dee2df;
  position: absolute;
  right: 1em;

  &:disabled {
    background-color: #449b62;
  }
`;

export const LeftArrow = styled.div`
  color: white;
  font-size: 2em;
  cursor: pointer;
`;
export const ImageCont = styled.div`
  display: flex;
  flex-flow: column;
  place-items: center;
`;
export const SlideImages = styled.img`
  width: 80vw;
  max-width: 900px;
  height: 350px;
  bottom: 0 auto 6px auto;
  transition: 0.4s ease-in-out;
  border-radius: 0.5em;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;
export const Dots = styled.div`
  margin-top: 1em;
  display: flex;
`;
export const RightArrow = styled.div`
  color: white;
  font-size: 2em;
  cursor: pointer;
`;

export const Dot1 = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${({active}) => (active ? "#163c23" : "#919ca3")};
  cursor: pointer;
`;
export const Dot2 = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${({active}) => (active ? "#163c23" : "#919ca3")};
  cursor: pointer;
`;

export const Dot3 = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${({active}) => (active ? "#163c23" : "#919ca3")};
  cursor: pointer;
`;

export const Dot4 = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${({active}) => (active ? "#163c23" : "#919ca3")};
  cursor: pointer;
`;

export const Products = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 1em 0;
`;

export const HomeHero = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  box-shadow: 0px 0px 17px -12px #163c23;

  margin-top: 1em;
`;
export const About = styled.div`
  display: flex;
  flex-flow: column;
  flex: 0 1 400px;
`;

export const AboutImage = styled.img`
  height: 200px;
  flex: 0 1 400px;
  place-self: center;
`;

export const HomeFooter = styled(Container)`
  display: flex;
  flex-flow: column;
`;
export const HeadTitle = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
`;
export const Testimonies = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 1em 0;
`;

export const Contact = styled.div`
  background-color: #449b62;
`;
