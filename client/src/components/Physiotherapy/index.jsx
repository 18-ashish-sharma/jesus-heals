import React from "react";
import { Card, CardGroup, Container, Row, Col } from "react-bootstrap";
// import { Col } from "../Physiotherapy/Physio.style";
import { CPHeading, PhyHeading, UL } from "./Physio.style";
import Physio1 from "../images/physio1.jpg";
import Physio2 from "../images/physio2.webp";
import Physio3 from "../images/physio3.webp";
import { Para } from "../Navbar/Navbar.style";
import "./style.css";

export default function Physiotherapy() {
  const imageData = [{ img: Physio1 }, { img: Physio2 }, { img: Physio3 }];
  const data = [
    "ARTHRITIS",
    "SPORTS INJURIES",
    "CONCUSSION",
    "DIZZINESS",
    " VERTIGO AND IMBALANCE",
    "FROZEN SHOULDER",
    "TENNIS ELBOW",
    "HEADACHE",
    "HEEL PAIN",
    "LOW BACK PAIN",
    "MOTOR VEHICLE ACCIDENTS",
    "NECK PAIN",
    "PAEDIATRIC CONDITIONS",
    "PELVIC FLOOR CONDITIONS",
    "POST SURGERY",
    "REPETITIVE STRAIN",
    "ROTATOR CUFF INJURY",
    "SCIATICA",
    "TENDINITIS",
    "SPRAINS AND STRAINS",
    "TMJ DYSFUNCTIONS",
    "WHIPLASH",
  ];
  return (
    <>
      <Container className="p-3">
        <Row>
          <CPHeading>Physiotherapy</CPHeading>
          <hr className="una" />
        </Row>
          <Row>
          <Col>
            <CardGroup>
              {imageData.map((item) => (
                <Card key={Math.random()} style={{ margin: "10px" }}>
                  <Card.Img variant="top" src={item.img} />
                </Card>
              ))}
            </CardGroup>

            </Col>
            </Row>
            <Row>
            <Col>
            <p>
              Physiotherapy is a health care profession assists to restore,
              maintain and maximize the strength, function, movement and overall
              well-being. Physiotherapists have knowledge of how the body works
              and specialized hands-on clinical skills to assess, diagnose and
              treat various injuries and illness. Physiotherapy includes
              rehabilitation, prevention of injury and promotion of health and
              fitness.
            </p>
            <p>
              Physiotherapy helps restore movement and function when someone is
              affected by injury, illness or disability. Moreover, physiotherapy
              is a healthcare profession that assesses, diagnoses, treats, and
              works to prevent disease and disability.
            </p>
            <p>
              Physiotherapy is the most commonly prescribed treatment to assist
              in the recovery of many injuries and conditions. Chronic pain, car
              and sports injuries and challenges with mobility can all be
              greatly improved with the use of physiotherapy. Here are just a
              few reasons why sticking to your physiotherapy is so important:
            </p>
          </Col>
          </Row>
        <Row>
          <Col>
            <PhyHeading align="left">Physiotherapy can help</PhyHeading>
            <ul style={{ margin: "15px" }}>
              <li>
                &nbsp; Become stronger and flexible
              </li>
              <li>
                &nbsp; Increase mobility
              </li>
              <li>
                &nbsp; Reduce pain
              </li>
              <li>
                &nbsp; Stay active
              </li>
              <li>
                &nbsp; Prevent injury
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <PhyHeading>
            Some of the conditions can be treated by Physiotherapy
          </PhyHeading>
          {data.map((item) => (
            <Col key={Math.random()} sm={3} p="10px">
              <Para fontSize="14px">
                &nbsp;
                <UL><li>{item}</li></UL>
              </Para>
            </Col>
          ))}
        </Row>
        <Row>
          <PhyHeading>
            What to expect during your visit at Jesus Heals Physiotherapy:
          </PhyHeading>
          <p style={{ margin: "15px" }}>
            Every patient will have a detailed assessment and discuss the
            findings, we will create a treatment plan to achieve client-centered
            goals. We believe in treating every patient with a hands-on
            physiotherapy approach.
          </p>
        </Row>
      </Container>
    </>
  );
}
