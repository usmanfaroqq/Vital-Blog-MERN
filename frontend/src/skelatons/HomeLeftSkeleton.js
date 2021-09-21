import React from "react";
import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";
import Skeleton from "react-loading-skeleton";

const HomeLeftSkeleton = (props) => {
  return (
    <>
      {Array(30)
        .fill("")
        ?.map((product, index) => (
          <Skeleton
            style={{ borderRadius: "5px" }}
            height={190}
            className="mb-2"
            {...props.length}
          />
        ))}
    </>
  );
};

export default HomeLeftSkeleton;
