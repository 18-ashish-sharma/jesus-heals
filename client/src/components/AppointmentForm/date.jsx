import React, { useState } from "react";
import moment from "moment";
import { Container, Row, Col } from "react-bootstrap";

export default function Dates() {
  let newDate = new Date();
  let nowDate = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let defaultDate = `${nowDate}/${
    month < 10 ? `0${month}` : `${month}`
  }/${year}`;

  const [date, setDate] = useState("");

  const onSetDate = (event) => {
    setDate(event.target.value);
  };
  return (
    <Container>
      <Row>
        <Col col={4}>
          <label for="exampleEmail">Select Date to book Appointment</label>
        </Col>
        <Col col={4}>
          <input
            bsSize="lg"
            id="exampleEmail"
            name="email"
            placeholder="lg"
            type="date"
            value={date}
            onChange={(e) => onSetDate(e)}
          />
        </Col>
        <Col col={4}>
          <label>
            Selected Date :{" "}
            {date ? moment(date).format("DD-MM-YYYY") : defaultDate}
          </label>
        </Col>
      </Row>
    </Container>
  );
}
