import React from "react";
import { Card, CardGroup, Container, Row } from "react-bootstrap";
import { Col } from "../../components/Physiotherapy/Physio.style";
import LifeSpan from "../../components/images/lifespan.jpg";
import Benifits from "../../components/images/benifits.jpg";
import Methods from "../../components/images/methods.jpg";
import Evidence from "../../components/images/evidence.png";
import { Para } from "../../components/Navbar/Navbar.style";

export default function Physio() {
  const data = [
    {
      img: "https://img.pixers.pics/pho_wat(s3:700/FO/10/05/24/99/6/700_FO100524996_36efccecbd62adfaeec8c251b4b490cc.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-physiotherapy-rehabilitation-color-icons.jpg.jpg",
    },
    {
      img: "https://media.istockphoto.com/vectors/good-posture-correct-and-incorrect-human-poses-neutral-spine-man-vector-id1187088233?k=20&m=1187088233&s=612x612&w=0&h=guwEA-KxGVRTBGGe6WesbdotqWpdvHVoXHRSpGU7n4M=",
    },
    {
      img: "https://i.pinimg.com/originals/20/3b/44/203b44ff7dfe4d79f164c56e74e1e7eb.jpg",
    },
  ];
  return (
    <Container>
    <Row>
      <Col>
        <Para
          textAlign="center"
          fontSize="25px"
          lineHeight="40"
          weight="600"
          pl={10}
          pb={10}
        >
          What is physiotherapy?
        </Para>
        <hr className="una" />
      </Col>
      <Col>
        <Para fontSize="20px" lineHeight="40" weight="400" pl={10} pb={35}>
          Physiotherapy helps restore movement and function when someone is
          affected by injury, illness or disability. Moreover, physiotherapy is
          a healthcare profession that assesses, diagnoses, treats, and works to
          prevent disease and disability. If you would like to start
          understanding what really could do physiotherapy even in small things,
          take a look to this{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://world.physio/"
          >
            World Physiotherapy Association (WPA)
          </a>
          &nbsp; .
        </Para>
      </Col>
      <Col>
        <CardGroup>
          {data.map((item) => (
            <Card key={Math.random()} style={{ margin: "10px" }}>
              <Card.Img variant="top" src={item.img} />
            </Card>
          ))}
        </CardGroup>
      </Col>
      <Col>
        <Para
          textAlign="center"
          fontSize="20px"
          lineHeight="20"
          weight="600"
          pt={55}
          pl={10}
          pb={20}
        >
          As you may have understand from the video, physiotherapy is suitable
          for a variety of conditions at all stages of life.
        </Para>
        <hr className="una" />
      </Col>
      <Col ml="450px">
        <Card className="text-center caring" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={LifeSpan} />
        </Card>
      </Col>
      <Col>
        <Para
          textAlign="center"
          fontSize="22px"
          lineHeight="20"
          weight="600"
          pt={95}
          pl={10}
          pb={30}
        >
          Who are those physiotherapists?
        </Para>
        <hr className="una" />
      </Col>
      <Col>
        <Para
          fontSize="18px"
          lineHeight="20"
          weight="400"
          pt={55}
          pl={10}
          pb={30}
        >
          As WCPT says
        </Para>
        <Para
          fontSize="18px"
          lineHeight="20"
          weight="400"
          pt={40}
          pl={10}
          pb={30}
          backgroundColor="#a6b0af"
        >
          "Physical therapists provide services that develop, maintain and
          restore people’s maximum movement and functional ability. They can
          help people at any stage of life, when movement and function are
          threatened by ageing, injury, diseases, disorders, conditions or
          environmental factors.
        </Para>
        <Para
          fontSize="18px"
          lineHeight="20"
          weight="400"
          pt={25}
          pl={10}
          pb={30}
        >
          Physiotherapists are experts in movement and function who work in
          partnership with their patients, a physiotherapist can also help
          prevent further injury by listening to patients needs and
          expectations, working together to plan the most appropriate treatment
          for any individual condition, including setting goals and treatment
          outcomes.
        </Para>
      </Col>
      <Col>
        <Para
          textAlign="center"
          fontSize="25px"
          lineHeight="40"
          weight="600"
          pl={10}
          pb={10}
          pt={40}
        >
          What do they do?
        </Para>
        <hr className="una" />
      </Col>
      <Col>
        <Para
          textAlign="center"
          fontSize="18px"
          lineHeight="40"
          weight="400"
          pl={10}
          pb={10}
          pt={40}
        >
          In the picture below, you can see with how many different methods a
          physiotherapist can help a patient.
        </Para>
      </Col>
      <Col mt="55px" ml="400px">
        <Card className="text-center caring" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Methods} />
          <Card.Body>
            <Card.Text>
              Physiotherapists are trained professionals who can use a wide
              variety of methods to help you.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Para
          fontSize="18px"
          lineHeight="40"
          weight="400"
          pl={10}
          pb={10}
          pt={40}
        >
          Physiotherapist is a degree-based profession, so physiotherapists can
          use their knowledge and skills to assess, diagnose and treat a wide
          range of conditions, such as:
        </Para>
        <Para
          fontSize="18px"
          lineHeight="40"
          weight="400"
          pl={10}
          pb={10}
          pt={40}
        >
          <ul>
            <li>
              Neuromusculoskeletal (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.physio-pedia.com/Low_Back_Pain"
              >
                low back pain
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.physio-pedia.com/Subacromial_Impingement"
              >
                subacromial impingement
              </a>
              , sports injuries i.e.{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.physio-pedia.com/Anterior_Cruciate_Ligament_%28ACL%29_Injury"
              >
                ACL
              </a>{" "}
              rupture, osteoarthritis,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.physio-pedia.com/Lateral_Epicondylitis"
              >
                tennis elbow
              </a>
              ),
            </li>
            <li>
              Neurological (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.physio-pedia.com/Stroke"
              >
                stroke
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.physio-pedia.com/Overview_of_Spinal_Cord_Injuries"
              >
                spinal cord injuries
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.physio-pedia.com/Parkinson%27s"
              >
                Parkinson's
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.physio-pedia.com/Multiple_Sclerosis_(MS)"
              >
                multiple sclerosis
              </a>
              ),
            </li>
            <li>
              Cardiovascular (chronic heart disease,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.physio-pedia.com/Myocardial_Infarction"
              >
                rehabilitation after heart attack
              </a>
              ),
            </li>
            <li>
              Respiratory (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.physio-pedia.com/Asthma"
              >
                asthma
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.physio-pedia.com/COPD_%28Chronic_Obstructive_Pulmonary_Disease%29"
              >
                chronic obstructive pulmonary disease
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.physio-pedia.com/Cystic_Fibrosis"
              >
                cystic fibrosis
              </a>
              ),
            </li>
          </ul>
        </Para>
      </Col>
      <Col>
        <Para
          textAlign="center"
          fontSize="22px"
          lineHeight="20"
          weight="600"
          pt={55}
          pl={10}
          pb={20}
        >
          Evidence-based practice
        </Para>
        <hr className="una" />
        <Col mt="55px" ml="400px">
        <Card className="text-center caring" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Evidence} />
        </Card>
      </Col>
        <Para
          fontSize="18px"
          lineHeight="40"
          weight="400"
          pl={10}
          pb={10}
          pt={40}
        >
          Evidence-based medicine is the integration of best research evidence
          with clinical expertise and patient values[2]. Physical therapists are
          evidence-based health care professionals, which means they will always
          try to provide the best treatment available from research, tailored on
          the individual.
        </Para>
        <Para
          fontSize="18px"
          lineHeight="40"
          weight="400"
          pl={10}
          pb={10}
          pt={40}
        >
          Evidence-based physiotherapy practice (EBPP) is "open and thoughtful
          clinical decision making" about the physical therapy management of a
          patient/ client that integrates the "best available evidence with
          clinical judgement" and the patient/ client's preferences and
          values,and that further considers the larger social context in which
          physical therapy services are provided, to optimize patient/client
          outcomes and quality of life
        </Para>
      </Col>
      <Col>
        <Para
          textAlign="center"
          fontSize="22px"
          lineHeight="20"
          weight="600"
          pt={55}
          pl={10}
          pb={20}
        >
          Why is physiotherapy useful?
        </Para>
        <hr className="una" />
        <Col mt="55px" ml="400px">
          <Card className="text-center caring" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Benifits} />
          </Card>
        </Col>
        <Para
          fontSize="18px"
          lineHeight="40"
          weight="400"
          pl={10}
          pb={10}
          pt={40}
        >
          As you may have already understand, a physiotherapist can get you on
          track to have pain-free movement, which is essential to be able to do
          your favourites physical activities, so preventing a lot of chronic
          diseases, and have some good time too. You can recover well from a
          large variety of conditions with physiotherpists' help. Moreover, even
          if surgery and drugs can be the best course of treatment for certain
          diagnoses, there are conditions in which physiotherapy can be equally
          effective. Take low back pain as an example. There is evidence this
          condition is over-treated with imaging, drugs prescription and
          surgeries, while early physical therapy can be a really cost-effective
          treatment. It is the same if we talk about moderate meniscal tears or
          knee ostheoarthritis, again physiotherapy can be a first choice
          treatment. And what about non-traumatic rotator cuff tear? Guess what?
          There is no differences between surgery and physiotherapy treatment in
          terms of outcomes. So why choose surgery? Anyway, any individual is
          unique, therefore physiotherapists work in team with other healthcare
          professionals, to try to give you always the best treatment you need.
        </Para>
      </Col>
      <Col>
        <Para
          textAlign="center"
          fontSize="22px"
          lineHeight="20"
          weight="600"
          pt={85}
          pl={10}
          pb={20}
        >
          Related articles
        </Para>
        <hr className="una" />
      </Col>
      <Col>
        <Para
          fontSize="18px"
          lineHeight="20"
          weight="400"
          pt={55}
          pl={10}
          pb={20}
        >
          <a
            href="https://www.physio-pedia.com/Simple_informations_on_physiotherapy?utm_source=physiopedia&utm_medium=related_articles&utm_campaign=ongoing_internal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Simple informations on physiotherapy
          </a>
        </Para>
        <Para fontSize="16px" lineHeight="20" weight="400" pl={10} pb={20}>
          Introduction This page is meant to be a little resource of information
          for all those people who are not physiotherapist and would like to get
          to know what are we talking about. If you are a healthcare provider
          (i.e. physician, nurse, etc.) you may find more useful to proceed the
          navigation
        </Para>
      </Col>
      <Col>
        <Para
          fontSize="18px"
          lineHeight="20"
          weight="400"
          pt={55}
          pl={10}
          pb={20}
        >
          <a
            href="https://www.physio-pedia.com/index.php?title=World_PT_Day&utm_source=physiopedia&utm_medium=related_articles&utm_campaign=ongoing_internal"
            target="_blank"
            rel="noopener noreferrer"
          >
            World PT Day
          </a>
        </Para>
        <Para fontSize="16px" lineHeight="20" weight="400" pl={10} pb={20}>
          World PTh Day is on 8th September every year. The day is an
          opportunity for physiotherapists from all over the world to raise
          awareness about the crucial contribution the profession makes to
          keeping people well, mobile and independent.
        </Para>
      </Col>
      <Col>
        <Para
          fontSize="18px"
          lineHeight="20"
          weight="400"
          pt={55}
          pl={10}
          pb={20}
        >
          <a
            href="https://en.wikipedia.org/wiki/World_Physiotherapy"
            target="_blank"
            rel="noopener noreferrer"
          >
            World physiotherapy
          </a>
        </Para>
        <Para fontSize="16px" lineHeight="20" weight="400" pl={10} pb={20}>
          Search Search Search Toggle navigation pPhysiopedia pPhysiopedia About
          News Contribute Courses Resources Contact Donate Login pPhysiopedia
          About News Contribute Courses Resources Shop Contact Donate p o +
          Contents Editors Categories Share Cite Contents loading...
        </Para>
      </Col>
    </Row>
    </Container>
  );
}
