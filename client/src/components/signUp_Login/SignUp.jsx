import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { signUp } from '../../redux/actions';

const SignUpPage = ({ signUp }) => {
  // const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    roles: ["user"],
  });
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const url = "http://localhost:8080/api/auth/signup";
    signUp(url, state);
  };
  return (
    <>
      <>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Register New User
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  name="username"
                  onChange={(e) => handleChange(e)}
                  value={state.username}
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicNumber">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="contact"
                  placeholder="Enter Number"
                  name="phone"
                  onChange={(e) => handleChange(e)}
                  value={state.phone}
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => handleChange(e)}
                  value={state.email}
                />
              </Form.Group>
              <br />

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                  value={state.password}
                />
              </Form.Group>
              <br />
              <Button variant="success btn-block" type="submit" onClick={handleSubmit}>
                Sign Up
              </Button>
              <br />
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Already user?</Form.Label>
                <br />
                <a href="/login">Login</a>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </>
    </>
  );
};

const mapDispatchToProps = {
  signUp,
};

export default connect(null, mapDispatchToProps)(SignUpPage);
