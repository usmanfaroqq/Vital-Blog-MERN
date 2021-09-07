import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputs = (event) => {
    setState({
      ...state,
      [event.target.name]: [event.target.value],
    });
  };
  const dispatch = useDispatch();
  const userRegister = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: "SET_LOADER" });
    try {
      const response = await axios.post("/register", state, config); // posting register data to server
      console.log(response);
      dispatch({ type: "CLOSE_LOADER" });
    } catch (error) {
      dispatch({ type: "CLOSE_LOADER" });
      dispatch({type: 'REGISTER_ERRORS', payload: error.response.data.errors}); //errors
      console.log(error.response);
    }
  };
  return (
    <>
      <Helmet>
        <title>User Signup</title>
        <meta name="description" content="User Signup" />
      </Helmet>
      <Container>
        <Row>
          <Col md={12}>
            <div className="account">
              <div className="account__section">
                <h1>Create your account</h1>
                <form onSubmit={userRegister}>
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      className="group__control"
                      placeholder="Name"
                      value={state.name}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      className="group__control"
                      placeholder="username"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      className="group__control"
                      placeholder="Email"
                      value={state.email}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="group">
                    <input
                      type="password"
                      name="password"
                      className="group__control"
                      placeholder="Password"
                      value={state.password}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="group">
                    <input
                      type="submit"
                      className="loginRegisterBtn"
                      value="Signup"
                    />
                  </div>
                </form>
                <h4>
                  Have an account <Link to="/login">Login here</Link>
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
