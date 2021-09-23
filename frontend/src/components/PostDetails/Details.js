import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { singlePostDetails } from "../../redux/asyncMethods/HomeGetAllPostMethod";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import HomeRightBar from "../Home/HomeRightBar";
import testing from "../../asset/images/Map Seller Website.png";
import moment from "moment";

const Details = () => {
  const { id } = useParams();
  const { loading, postDetails } = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singlePostDetails(id));
  }, [id]);
  return (
    <div>
      <Helmet>
        <title>Vital Blog</title>
        <meta name="home" content="blogs" />
      </Helmet>
      <Container>
        <Row>
          <Col md={8}>
            {!loading ? (
              <div className="postDetails">
                <h1 className="postDetails-title">{postDetails.title}</h1>
                <img src={testing} alt="" className="postDetails-img" />
                <p className="postDetails-bodyText"> {postDetails.body.replace(/<(.|\n)*?>/)}</p>
                <div className="postDetails__header">
                  <div className="postDetails__header__avator">
                    {postDetails.userName ? postDetails.userName[0] : ""}
                  </div>
                  <div className="postDetails__header__user">
                    <span>{postDetails.userName}</span>
                    <span>{moment(postDetails.updatedAt).format("ll")}</span>
                  </div>
                </div>
              </div>
            ) : (
              "Ok"
            )}
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
