import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { ImSearch } from "react-icons/im";

const LowerNavbar = () => {
  return (
    <div className="shadow-sm  mb-5 rounded">
        <Container className="lower__navbar ">
        <Navbar  expand="lg" >
        <Nav.Link to="#" className="lower__navbar-text" active>Home</Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="gap-5">
            <Nav.Link to="#home" className="lower__navbar-text " >News Feed</Nav.Link>
            <Nav.Link to="#features" className="lower__navbar-text">News</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Business</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Magazine</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Sport</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Arts</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Culture</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Politics</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Style</Nav.Link>
            <Nav.Link to="#pricing" className="lower__navbar-text">Travel</Nav.Link>
            </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-primary" className="lower__navbar-button"> <ImSearch /></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
        </Container>
    </div>
  );
};

export default LowerNavbar;
