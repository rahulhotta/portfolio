import React from "react";

import "../Styles/NavBar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div className="Navbar__container">
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
        <NavLink to="/home" className="Navbar__Logo">
          RAHUL
        </NavLink>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-light"
            bg="light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="Navbar__links">
              <Nav className="me-auto">
                <NavLink
                  to="/home"
                  className="Navbar__link"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/work"
                  className="Navbar__link"
                >
                  Work
                </NavLink>
                <NavLink
                  to="/about"
                  className="Navbar__link"
                >
                  About
                </NavLink>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
