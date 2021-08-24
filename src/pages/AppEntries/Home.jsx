import React from "react";
import jwtDecode from "jwt-decode";
import Unlogged from "./Unlogged";
import LoggedHome from "../LoggedHome/LoggedHome";
import AUTH_TOKEN from "../../utils/constants";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Dashboard from "../Dashboard/Dashboard";
import {Redirect} from "react-router";

const Home = () => {
  const isLoggedIn = localStorage.getItem(AUTH_TOKEN);
  return (
    <>
      <Navbar />
      {isLoggedIn ? <Redirect to="/dashboard" /> : <Unlogged />}
      <Footer />
    </>
  );
};

export default Home;
