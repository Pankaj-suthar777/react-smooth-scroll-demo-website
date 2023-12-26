import React from "react";

import { Nav, NavbarContainer, NavLogo } from "./NavbarElement";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Rupee</NavLogo>
          <MobileIcon>
            <FaBars></FaBars>
          </MobileIcon>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
