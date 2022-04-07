import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import {
  Icon,
  LogoImage,
  NavContainer,
  NavWrapper,
  Para,
} from "./Navbar.style";
import Plogo from "../images/cut.ico";
import { connect } from "react-redux";
import CompliancePopup from "../PopUp";

function Navbar1({ isLoggedIn, userData }) {
  function logout() {
    localStorage.clear();
    window.location.href = '/';
}
console.log(userData);
  return (
    <NavContainer>
      <Navbar fixed="" collapseOnSelect expand="lg">
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
                    <CompliancePopup>
                      <LogoImage>
                        <Image
                          thumbnail
                          src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg"
                          alt="sorry"
                        />
                      </LogoImage>
                    </CompliancePopup>
                  </Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    <Para pt={4}>{userData.username}</Para>
                  </Nav.Link>
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                </>
              )}
            </Nav>
          </NavWrapper>
        </Navbar.Collapse>
      </Navbar>
    </NavContainer>
  );
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.loader.isLoggedIn,
  userData: state.loader.userData,
});
export default connect(mapStateToProps, null)(Navbar1);
