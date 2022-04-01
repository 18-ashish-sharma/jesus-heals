import React from "react";
import Card1 from "../images/card1.avif";
import Card2 from "../images/card2.jpg";
import Card3 from "../images/card3.jpg";
import { Card, CardGroup } from "react-bootstrap";
import "./Carousel.css";

export default function Pic() {
  const data = [
    {
      img: Card1,
      title: "Best in care !",
      para: "",
    },
    {
      img: Card2,
      title: "Patients are priority !",
      para: "",
    },
    {
      img: Card3,
      title: "We are here to help !",
      para: "",
    },
  ];
  return (
    <>
      <CardGroup>
        {data.map((item) => (
          <Card key={Math.random()} style={{ margin: "10px" }}>
            <Card.Img
              variant="top"
              src={item.img}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Jesus Heals Physiotherapy</small>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </>
  );
}

