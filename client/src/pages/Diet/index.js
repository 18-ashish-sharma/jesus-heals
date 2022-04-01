import React from "react";
import { Card, CardGroup, Container, ListGroup, Row, Col as CL } from "react-bootstrap";
import { Col } from "../../components/Physiotherapy/Physio.style";
import { Para } from "../../components/Navbar/Navbar.style";
import Doctor from "../../components/images/Doctor.jpeg";
import Diet1 from "../../components/images/diet1.jpg";
import Diet2 from "../../components/images/diet2.jpg";
import Diet3 from "../../components/images/diet3.jpg";
import Diet4 from "../../components/images/diet4.webp";
import Diet5 from "../../components/images/diet5.webp";
import Diet6 from "../../components/images/diet6.webp";
import Apple from "../../components/images/apple.png";
import Heart from "../../components/images/heart.png";
import FollowUp from "../../components/images/followup.png";
import Phone from "../../components/images/phone.png";
import Tracking from "../../components/images/tracking.png";
import Constant from "../../components/images/constant.png";

export default function Diet() {
  const data = [
    {
      img: Diet1,
      title: "Weight Management",
      para: "A Perfect Program For Weight Loss, Fat Loss And Inch Loss. Ideal for anyone with or without a medical condition",
    },
    {
      img: Diet2,
      title: "Weight gain",
      para: "Do you need to put on a few kilos to make a sports team, better your health, or simply to bulk up?",
    },
    {
      img: Diet3,
      title: "Therapeutic Medical Issues",
      para: "No weight loss or gain goal but have a special requirement or a medical condition (Diabetes, BP, fatty liver, etc.)",
    },
  ];
  const dataCard = [
    {
      img: Doctor,
      title: "Experience",
      list: [
        "Qualified & experienced (M.Sc. F&N, M.Ed., PGD. HFW)",
        "10+ years of experience. 1000+ success stories",
        "Recognized with various healthcare & lifestyle awards",
        "Transforming lifestyles across the globe in 25+ countries",
      ],
    },
    {
      img: Diet4,
      title: "Diet & lifestyle",
      list: [
        "Personalised, non-restrictive diet & lifestyle plans",
        "No exotic or expensive items, only homely food",
        "No pills or supplements; only real food from your kitchen",
        "Focus on nutrition, not just calorie counts",
        "Improve your health. No ‘dieting’!",
      ],
    },
    {
      img: Diet5,
      title: "Flexible programs",
      list: [
        "No marketing gimmicks",
        "No false promises or guarantees. Focus on sustainability",
        "Programs where you don’t feel like being on a ‘diet’",
        "Maintenance plan included in every program",
        "Family offers",
      ],
    },
    {
      img: Diet6,
      title: "Client care",
      list: [
        "Get treated as a family. Form a 2-way relationship",
        "Support on call, chat & email: 9am – 8pm IST (Mon-Sat)",
        "Weekly scheduled feedback sessions – diet & lifestyle coaching",
        "Learn to create your own diet plan",
      ],
    },
  ];
  const workingData = [
    {
      img: Apple,
      title: "Tailor Made Diets",
      desc: "Foods your body will love - High on Nutrition and Right on Calories",
    },
    {
      img: Heart,
      title: "Healthy Food Options",
      desc: "Foods your body will love - High on Nutrition and Right on Calories",
    },
    {
      img: FollowUp,
      title: "Diet Complemented with Lifestyle Plans",
      desc: "Optional exercise tips such as using stairs instead of elevator etc., to help you burn those extra fats",
    },
    {
      img: Phone,
      title: "Personalized Guidance",
      desc: "Nutritionist personally available on ​Phone or WhatsApp",
    },
    {
      img: Tracking,
      title: "Personal Tracking",
      desc: "Regular weight, meal and goal tracking personally done by the nutritionist",
    },
    {
      img: Constant,
      title: "Constant Follow-Ups",
      desc: "Constant Follow-ups and food-diary reviews by the expert.",
    },
  ];
  return (
    <Container>
    <Row>
      <Col>
        <Para
          textAlign="center"
          fontSize="35px"
          lineHeight="40"
          weight="600"
          pl={10}
          pb={10}
        >
          Our Programs
        </Para>
        <Para
          textAlign="center"
          fontSize="20px"
          lineHeight="40"
          weight="400"
          pl={10}
          pb={10}
        >
          Programs tailored to meet your every nutrition need.
        </Para>
        <hr className="una" />
      </Col>
      <Col>
        <CardGroup>
          {data.map((item) => (
            <Card
              key={Math.random()}
              className="text-center caring"
              style={{ margin: "10px" }}
            >
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.para}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </Col>
      <Col>
        <Para
          textAlign="center"
          fontSize="35px"
          lineHeight="40"
          weight="600"
          pl={10}
          pb={10}
          pt={95}
        >
          Why Diet Insight?
        </Para>
        <hr className="una" />
        <Para
          textAlign="center"
          fontSize="18px"
          lineHeight="40"
          weight="400"
          pl={10}
          pb={10}
        >
          No strict nutrition philosophies, staying unrealistically thin, or
          depriving yourself of the foods you love. “Eat what you can sustain
          and easily integrate it into your lifestyle.” Feel great, have more
          energy, build your stamina and immunity – all of which can be achieved
          by learning some nutrition basics and incorporating them in a way that
          works for you.”
        </Para>
        <Col>
          <CardGroup>
            {dataCard.map((item) => (
              <Card
                key={Math.random()}
                className="text-center caring"
                style={{ margin: "10px" }}
              >
                <Card.Img
                  variant="top"
                  src={item.img}
                  style={{
                    borderRadius: "50%",
                    width: "40%",
                    height: "40",
                    marginLeft: "100px",
                  }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <ListGroup variant="flush">
                    {item.list.map((text) => (
                      <ListGroup.Item variant="success">{text}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </Col>
      </Col>
      <Col>
        <Para
          textAlign="center"
          fontSize="35px"
          lineHeight="40"
          weight="600"
          pl={10}
          pb={10}
          pt={95}
        >
          Why it Works?
        </Para>
        <hr className="una" />
      </Col>
      <Row>
        {workingData.map((item) => (
          <CL sm={4} key={Math.random()}>
            <Para>
              <img src={item.img} alt="sorry" style={{ marginLeft: "160px" }} />
            </Para>
            <Para
              textAlign="center"
              fontSize="2 5px"
              lineHeight="40"
              weight="600"
              pl={10}
              pb={10}
            >
              {item.title}
            </Para>
            <Para
              textAlign="center"
              fontSize="15px"
              lineHeight="30"
              weight="400"
              pl={10}
              pb={40}
            >
              {item.desc}
            </Para>
          </CL>
        ))}
      </Row>
    </Row>
    </Container>
  );
}
