import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PostReducer } from "../../redux/reducers/PostReducer";
import { singlePostDetails } from "../../redux/asyncMethods/HomeGetAllPostMethod";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import HomeRightBar from "../Home/HomeRightBar";
import testing from "../../asset/images/Map Seller Website.png";

const Details = () => {
  const { id } = useParams();
  const { loading, details } = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singlePostDetails(id));
  }, [id]);
  console.log(details);
  return (
    <div>
      <Helmet>
        <title>Vital Blog</title>
        <meta name="home" content="blogs" />
      </Helmet>
      <Container>
        <Row>
          <Col md={8}>
            <div className="postDetails">
              <h1 className="postDetails-title">
                Top 10 post about javascript that you need to know
              </h1>
              <img src={testing} alt=""  className="postDetails-img"/>
                <p className="postDetails-bodyText">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium dolor cum eveniet rem culpa saepe a ratione
                  perspiciatis maiores nesciunt, incidunt minus fugit vero est
                  ducimus ab iste distinctio dignissimos! Sapiente quos suscipit
                  laudantium eius doloribus nobis animi minima quibusdam
                  molestiae eveniet fuga, quis nihil eaque mollitia perspiciatis
                  reprehenderit ad soluta itaque tempora ratione? Nemo placeat
                  necessitatibus debitis minus dolorum! Quibusdam maxime nulla,
                  vitae rerum dolorem aperiam? Expedita repellat laborum
                  consectetur quo harum nemo eaque odit minima dolor! Velit
                  numquam quia quae sapiente praesentium saepe incidunt,
                  repudiandae molestias quos exercitationem! Rem aut accusantium
                  atque dolorem minus saepe? Esse perspiciatis, numquam rerum
                  dolor quaerat voluptatibus minima porro eveniet, adipisci cum
                  possimus iste. Aperiam delectus eligendi corporis a quos, eius
                  commodi voluptates. Fuga quisquam, dolor possimus id, hic
                  adipisci reprehenderit voluptate atque libero veritatis totam
                  temporibus quibusdam illum officiis quo accusantium labore
                  quasi? Nostrum sequi quibusdam distinctio neque molestiae
                  blanditiis natus maiores! Molestias fuga atque cumque modi
                  corrupti a optio voluptatem asperiores nulla doloribus
                  cupiditate impedit odit adipisci laudantium ipsa vel
                  laboriosam nobis qui, quos rem repellendus iure pariatur
                  exercitationem reprehenderit. Iusto. Laboriosam, nemo?
                  Architecto repellat culpa soluta iure optio at facilis,
                  mollitia iusto atque quasi error magni excepturi dignissimos
                  qui sint minus asperiores autem ut sequi? Quia doloribus vel
                  nam soluta. Quam laudantium, fugit provident praesentium
                  sapiente voluptatibus! Enim vero eos, dicta libero saepe,
                  voluptatibus provident quia aperiam officiis, dolor aut
                  praesentium quidem nemo velit amet natus recusandae
                  necessitatibus reprehenderit quis. Sed beatae nemo ducimus
                  blanditiis sapiente minima! Amet recusandae ab doloribus
                  explicabo delectus ipsam in sunt numquam voluptas, molestias
                  iusto accusamus nemo, harum, ducimus sint vitae unde maxime
                  minus magni. Veritatis amet unde sunt nostrum dolorem esse
                  facere adipisci magnam nam debitis nemo, cum ipsam iste
                  consequuntur. Deserunt iure enim a quasi obcaecati. Libero
                  soluta delectus, fugit ratione saepe facere.
                </p>
              <div className=""></div>
            </div>
          </Col>
          <Col md={4}>
            <div className="homeRightBar">
              <HomeRightBar />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
