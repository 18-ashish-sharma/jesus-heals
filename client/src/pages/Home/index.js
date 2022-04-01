import React from "react";
// import { Row } from "react-bootstrap";
import "../../App.css";
import Pic from '../../components/Carousel';
// import { Para } from "../../components/Navbar/Navbar.style";
import Physiotherapy from "../../components/Physiotherapy"
// import { Col } from "../../components/Physiotherapy/Physio.style";

export default function App() {
  return(
    <div className="App">
      {/* <Row>
        <Col>
        <Para fontSize="20px" lineHeight="40" weight="400" pl={10} pb={35}>
          Book your appointment now
        </Para>
        </Col>
      </Row> */}
    <div style={{ marginTop: '50px' }} >
    <Pic />
    </div>
    <div style={{ marginTop: '100px' }} >
    <Physiotherapy />
    </div>
    </div>
  );
}
