import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {useHistory} from "react-router-dom";
import {user} from "../..";
import {PriButton} from "../../Styles/globalStyles";
import AUTH_TOKEN from "../../utils/constants";
import agropex from "../../Assets/images/logo.png";
import {
  AppLinks,
  Links,
  Logo,
  MobileMenu,
  Nav,
  NavContainer,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./navbar.style";

const Navbar = () => {
  const [mobile, setMobile] = useState(true);
  const [click, setClick] = useState(false);

  const history = useHistory();

  const handleClick = () => {
    setClick(!click);
  };
  const toggleMobile = () => {
    setMobile(!mobile);
  };

  const handleClickActions = () => {
    toggleMobile();
    handleClick();
  };

  const handleLogOut = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem("user");
    user(null);
    history.push("/");
  };
  const handleLogin = () => {
    history.push("/login");
  };

  const isLoggedIn = localStorage.getItem(AUTH_TOKEN);

  return (
    <NavContainer>
      <Nav>
        <NavLogo>
          <Logo src={agropex} />
        </NavLogo>
        {isLoggedIn ? (
          <NavMenu click={click}>
            <NavLinks onClick={handleClickActions}>
              <Links>
                <PriButton onClick={handleLogOut}>Logout</PriButton>
              </Links>
            </NavLinks>
          </NavMenu>
        ) : (
          <NavMenu click={click}>
            <NavLinks onClick={handleClickActions}>
              <Links>
                <PriButton onClick={handleLogin}>Login</PriButton>
              </Links>
            </NavLinks>
          </NavMenu>
        )}
        <MobileMenu click={click} onClick={handleClickActions}>
          {mobile ? <FaBars /> : <FaTimes />}
        </MobileMenu>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
