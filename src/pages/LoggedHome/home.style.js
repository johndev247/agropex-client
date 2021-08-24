import styled from "styled-components";
import {Container} from "../../Styles/globalStyles";

export const DashboardGrid = styled(Container)`
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-area: "menu contents";
  grid-column-gap: 0.1em;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  grid: menu;
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  box-shadow: 0px 0px 23px -10px #0b0b0b;
  align-items: center;
  background-color: #449b62;
  @media only screen and (max-width: 768px) {
    display: flex;
    z-index: 2;
    width: 50%;
    position: absolute;
    left: ${({open}) => (open ? `0` : `-50%`)};
    transition: 0.5s all ease-in-out;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    color: #fff;
    margin: 1.5em 0 0 1em;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-flow: column;
  width: 100px;
  height: 100px;
  margin: 0.5em;
  text-align: center;
  &:hover {
    background-color: #095021;
    border-radius: 0.5em;
  }
`;

export const ItemTitle = styled.p`
  padding: 0;
  margin: 0;
  text-align: center;
  color: #fff;
  font-style: normal;
`;
export const ItemImage = styled.div`
  color: #fff;
  margin: 0.5em;
  cursor: pointer;
`;

export const PagesContainer = styled.div`
  display: block;
  height: 100%;
  width: 100%;
`;

export const Contents = styled.div`
  grid: contents;
  display: grid;
  width: 100%;
  grid-template-rows: 90px 90px 1fr;
  grid-area: "welcome" "stat" "pages";
  @media only screen and (max-width: 768px) {
    display: block;
    position: fixed;
  }
`;

export const Welcome = styled.div`
  grid: welcome;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-bottom: 0.5em;
  background-color: #449b62;
  border-radius: 0.3em;
  @media only screen and (max-width: 768px) {
    height: 80px;
  }
`;

export const Greetings = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: flex-start;
`;

export const Hello = styled.p`
  padding: 0;
  margin: 3px 0;
  color: #449b62;
  text-align: center;
`;

export const TimeOfDay = styled.p`
  padding: 0;
  margin: 3px 2px;
  color: #449b62;
  text-align: center;
`;
export const Profile = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 1em;
`;
export const Logout = styled.div`
  cursor: pointer;
  color: #fff;
  margin: 0.3em;
`;
export const ProfilePic = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

export const Stats = styled.div`
  grid: stat;
  box-shadow: 0px 0px 18px -10px #0b0b0b;
  display: flex;
  flex-flow: row;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  overflow-x: scroll;
  overflow-y: hidden;
  @media only screen and (max-width: 768px) {
    height: 90px;
  }
`;

export const StatCards = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0px 0px 15px -12px #0b0b0b;
  border-radius: 0.5em;
  padding: 1em;
  height: 65px;
  min-width: 200px;
  background-color: #449b62;
`;

export const StatTitle = styled.p`
  padding: 0;
  margin: 5px 0;
  color: #fff;
`;

export const StatCount = styled.p`
  padding: 0;
  margin: 10px 0;
  color: #fff;
`;

export const Pages = styled.div`
  grid: pages;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-flow: row;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }
`;
