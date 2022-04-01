/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card, Carousel, Container, Row, Col } from "react-bootstrap";
// import {  } from "../../components/Physiotherapy/Physio.style";
import { Para } from "../../components/Navbar/Navbar.style";
import Doctor from "../../components/images/Doctor.jpeg";

export default function AboutUs() {
  const item = [1, 2, 3];
  return (
    <>
      <Container>
        <Row>
          <Para fontSize="25px" lineHeight="40" weight="600" pl={10} pb={35}>
            Our Doctor
          </Para>
          <Row>
            <Col>
              <Card className="text-center caring" style={{ width: "22rem" }}>
                <Card.Img variant="top" src={Doctor} />
                <Card.Body>
                  <Card.Title>Prashansa Kaushal</Card.Title>
                  <Card.Text>
                    Each body is different Therefore each rehabilitation must be
                    different
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">
                    <a href="#">
                      <img
                        style={{
                          width: "36px",
                          height: "36px",
                          marginLeft: "5px",
                        }}
                        src="https://st3.zoom.us/static/94172/image/new/home/IconInstagram.png"
                        alt="Instagram"
                      />
                    </a>
                  </Card.Link>
                  <Card.Link href="#">
                    <a href="#">
                      <img
                        style={{
                          width: "36px",
                          height: "36px",
                          marginLeft: "5px",
                        }}
                        src="https://st1.zoom.us/static/94172/image/new/home/IconFacebook.png"
                        alt="Facebook"
                      />
                    </a>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Para fontSize="18px" lineHeight="35" weight="4 00" pb={30}>
                Prashansa is a dedicated Physiotherapist with extensive
                experience in providing wide spectrum of rehabilitative services
                to the patient in Hospital & Clinical settings. Adept in
                Assessment, diagnosing & strategizing best possible treatment
                plan for the patient. Currently she is running Physiotherapy
                Clinic (Jesus Heals Physiotherapy Clinic) situated at 16,
                Christian Colony, Rasalpura, District- Indore, M.P, India
                (453446) since August, 2020. She has gained work experience from
                Select Physical Therapy, San Diego, California where she
                mastered rehabilitation in multiple fields of Physiotherapy,
                such as, neurological, orthopedic & geriatric rehabilitation.
                She completed six months of rotatory internship from 13th Nov 19
                till 24th Aug 20 in the following departments of Maharaja
                Yashwantrao Hospital (M.Y.H), Indore.
              </Para>
            </Col>
          </Row>
        </Row>
        {item.map((item) => (
          <Row key={Math.random()} style={{ marginTop: "200px" }}>
            <Col col={6}>
              <div className="carousel">
                <Carousel
                  nextIcon={
                    <span
                      aria-hidden="true"
                      className="fas fa-chevron-right fa-3x customNextClass"
                    />
                  }
                  prevIcon={
                    <span
                      aria-hidden="true"
                      className="fas fa-chevron-left fa-3x customPrevClass"
                    />
                  }
                  indicators={false}
                  variant="dark"
                  fade
                >
                  <Carousel.Item interval={500}>
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1609113160023-4e31f3765fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Best Equipments</h3>
                      <p>
                        Delivers continuous stimulation deep into the affected
                        tissue.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://media.istockphoto.com/photos/shot-of-an-older-woman-doing-light-exercises-during-a-session-with-a-picture-id1338886069?b=1&k=20&m=1338886069&s=170667a&w=0&h=ine67Au5FZro-2hLCEW_Cx81kOIOIC4E-XqjP3ispoc="
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Find Best Care</h3>
                      <p>Do what I do. Hold tight and pretend it’s a plan!.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://media.istockphoto.com/photos/modern-hospital-physical-therapy-patient-with-injury-walks-on-picture-id1335020215?b=1&k=20&m=1335020215&s=170667a&w=0&h=f_847byeXgFyrzjfMLIrDw69vauMfflL5WQgwS264DM="
                      alt="Third slide"
                    />

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col col={6}>
              <div className="carousel">
                <Carousel
                  nextIcon={
                    <span
                      aria-hidden="true"
                      className="fas fa-chevron-right fa-3x customNextClass"
                    />
                  }
                  prevIcon={
                    <span
                      aria-hidden="true"
                      className="fas fa-chevron-left fa-3x customPrevClass"
                    />
                  }
                  indicators={false}
                  variant="dark"
                  fade
                >
                  <Carousel.Item interval={500}>
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1609113160023-4e31f3765fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Best Equipments</h3>
                      <p>
                        Delivers continuous stimulation deep into the affected
                        tissue.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://media.istockphoto.com/photos/shot-of-an-older-woman-doing-light-exercises-during-a-session-with-a-picture-id1338886069?b=1&k=20&m=1338886069&s=170667a&w=0&h=ine67Au5FZro-2hLCEW_Cx81kOIOIC4E-XqjP3ispoc="
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Find Best Care</h3>
                      <p>Do what I do. Hold tight and pretend it’s a plan!.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://media.istockphoto.com/photos/modern-hospital-physical-therapy-patient-with-injury-walks-on-picture-id1335020215?b=1&k=20&m=1335020215&s=170667a&w=0&h=f_847byeXgFyrzjfMLIrDw69vauMfflL5WQgwS264DM="
                      alt="Third slide"
                    />

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
}
