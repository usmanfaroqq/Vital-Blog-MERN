import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { singlePostDetails } from "../../redux/asyncMethods/HomeGetAllPostMethod";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Button } from "react-bootstrap";
import HomeRightBar from "../Home/HomeRightBar";
import moment from "moment";
// import { htmlToText } from 'html-to-text';

const Details = () => {
  const { id } = useParams();
  const { loading, postDetails } = useSelector((state) => state.PostReducer);
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singlePostDetails(id));
  }, [id]);
  return (
    <div>
      <Helmet>
        <title>{postDetails.title}</title>
        <meta name="home" content="blogs" />
      </Helmet>
      <Container>
        <Row>
          <Col md={8}>
            {!loading ? (
              <div className="postDetails">
                <h1 className="postDetails-title">{postDetails.title}</h1>
                <img
                  src={`/images/${postDetails.image}`}
                  alt=""
                  className="postDetails-img"
                />
                <p className="postDetails-bodyText"> {postDetails.body}</p>
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

            <div className="comment">
              <h1>Discussion</h1>
              <div className="comment-box">
                <textarea
                  name="comment"
                  cols="30"
                  rows="10"
                  className="comment-box-textArea"
                  placeholder="Comment your Discussion "
                ></textarea>
                <Button variant="primary" className="comment-btn">
                  Comment
                </Button>
              </div>
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
