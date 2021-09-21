import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import HomeAllPosts from "./HomeAllPosts";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Vital Blog</title>
        <meta name="description" content="Learn HTML css js etc" />
      </Helmet>
      <Container>
        <Row>
          <Col md={8}>
            <div className="homeLeftBar">
              <HomeAllPosts />
            </div>
          </Col>
          <Col md={4}>
            <div className="homeRightBar">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              aliquid, consectetur cumque aspernatur obcaecati neque fuga
              possimus placeat? Voluptate ipsa, repellat porro doloribus
              explicabo blanditiis reprehenderit! Laudantium vero unde maiores?
              Aliquam illum sunt odit. Architecto ducimus minima asperiores
              culpa nam tempora suscipit neque ratione maxime. Repellat,
              molestias corrupti temporibus error sequi ipsam provident enim
              eaque, omnis, minima illo consequuntur reprehenderit.
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
