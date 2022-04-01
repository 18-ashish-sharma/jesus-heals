import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { login } from '../../redux/actions';
import { connect } from "react-redux";

const LoginPage = ({ login }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
  });
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:8080/api/auth/signin"
    login(url, state)
    console.log(state);
  };
  return (
    <>
      <>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Login
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter username"
                  name="username"
                  onChange={(e) => handleChange(e)}
                  value={state.username}
                />
              </Form.Group>
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
              <Button variant="success btn-block" type="submit" onClick={handleSubmit}>
                Sign Up
              </Button>
              <br />
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label>New user?</Form.Label>
                <br />
                <a href="/signup">Sign Up</a>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </>
    </>
  );
};

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(LoginPage);