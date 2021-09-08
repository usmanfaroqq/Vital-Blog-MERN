import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { postLogin } from "../../redux/asyncMethods/AuthMethods";
import { useSelector, useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const useLogin = (event) => {
    event.preventDefault();
    dispatch(useLogin(state));
  };

  return (
    <>
      <Helmet>
        <title>User Login</title>
        <meta name="description" content="User Login" />
      </Helmet>
      <Container>
        <Row>
          <Col md={12}>
            <div className="account">
              <div className="account__section">
                <h1>Please login your account</h1>
                <form onSubmit={useLogin}>
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
                  {" "}
                  Don't have an account <Link to="/register">Create one</Link>
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
