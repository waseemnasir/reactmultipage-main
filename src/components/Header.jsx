import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        {/* <img src="./images/logo.png" alt="logo" className="logo" /> */}
        <h3 className="logo-name">WASEEM NASIR (REACT Js)</h3>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
  }
  .logo-name{
    background-color: ${({ theme }) => theme.colors.btn};
    color:${({ theme }) => theme.colors.white};
    /* box-shadow: "10px 30px 10px #black"; */
  }
`;

export default Header;
