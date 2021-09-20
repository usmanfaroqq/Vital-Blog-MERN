import React from "react";
import { Helmet } from "react-helmet";
import HomeAllPosts from "./HomeAllPosts";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Vital Blog</title>
        <meta name="description" content="Learn HTML css js etc" />
      </Helmet>
      <HomeAllPosts/>
    </>
  );
};

export default Home;
