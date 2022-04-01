import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login  from "../components/signUp_Login/Login";
import SignUp from "../components/signUp_Login/SignUp";
import ContactUs from "../components/ContactUs";
import Physio from "../pages/Physiotherapy";
import Diet from "../pages/Diet";
import Calendar from "../components/AppointmentForm";
import { LoaderDiv } from "../components/Physiotherapy/Physio.style";
import { Row } from "react-bootstrap";
import Gif from "../components/images/gif3.gif";
import { connect } from "react-redux";

function Routing({ isLoading }) {
  return (
    <Row>
    {isLoading && (
      <LoaderDiv>
        <img src={Gif} alt="Loading" />
      </LoaderDiv>
      )}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/aboutus" element={<AboutUs />} />
      <Route exact path="/contactus" element={<ContactUs />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/physio" element={<Physio />} />
      <Route exact path="/diet" element={<Diet />} />
      <Route exact path="/book" element={<Calendar />} />
    </Routes>
    </Row>
  );
}
const mapStateToProps = (state) => ({
  isLoading: state.loader.isLoading,
});

export default connect(mapStateToProps, null)(Routing);