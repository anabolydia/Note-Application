import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";

import { AuthContext } from "../contextStore/AuthContext";

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, firebase } = useContext(AuthContext);

  const toggle = () => setIsOpen(!isOpen);

  // For authorisation
  const GuestLinks = () => {
    return (
      <>
        <NavItem className="ml-auto pr-3">
          <Link className="nav-link" to="/login">Get Started!</Link>
        </NavItem>
        
      </>
    );
  };

  const AuthLinks = () => {
    return (
      <>
        <NavItem className="ml-auto pr-2">
          <Link className="nav-link" to="/">Home</Link>
        </NavItem>
        <NavItem className="ml-auto pr-2">
          <Link className="nav-link" to="/profile">Profile</Link>
        </NavItem>
        <NavItem className="ml-auto pr-1">
          <Button
            className="logout pl-3 pr-3"
            onClick={() => firebase.auth().signOut()}
          >
            Log Out
          </Button>
        </NavItem>
      </>
    );
  };

  return (
   <>
      <Navbar color="faded" light className="pt-3 pb-2" expand="md">
        <NavbarBrand>Notes-Application</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isLoggedIn ? <AuthLinks /> : <GuestLinks />}
          </Nav>
        </Collapse>
      </Navbar>
      </>
 );
};

export default Navigation;
