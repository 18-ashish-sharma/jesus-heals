import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  FlexWrapper,
  Icon,
  NavContainer,
  NavWrapper,
  Para,
} from "./Navbar.style";
import Plogo from "../images/cut.ico";

export default function Navbar1({ isLoggedIn }) {
  return (
    <NavContainer>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          {/* <Logo /> */}
          <Icon>
            <img src={Plogo} alt="" />
          </Icon>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavWrapper>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="physio">Physiotherapy</Nav.Link>
              <Nav.Link href="/diet">Deit Plans</Nav.Link>
              <Nav.Link href="/book">Book Appointment</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
            </Nav>
            <Nav style={{ display: "flex", textAlign: "center" }}>
              {!isLoggedIn && (
                <>
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </>
              )}
              {isLoggedIn && (
                <>
                  <Nav.Link eventKey={2} href="#memes">
                    Pic
                  </Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    <FlexWrapper>
                      <Para>James Brown</Para>
                      <Para pl={10} color="#D71638">
                        Data Excecutive
                      </Para>
                    </FlexWrapper>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </NavWrapper>
        </Navbar.Collapse>
      </Navbar>
    </NavContainer>
  );
}
