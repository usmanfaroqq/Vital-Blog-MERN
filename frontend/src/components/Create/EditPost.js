import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const EditPost = () => {
    const {id} = useParams();
  return (
    <div>
      <Helmet>
        <title>Edit Post - Vital Blog</title>
        <meta name="edit-post" content="edit-post" />
      </Helmet>
    </div>
  );
};

export default EditPost;
