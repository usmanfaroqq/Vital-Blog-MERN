const express = require("express");
const postRouter = express.Router();
const postControllers = require("../controllers/postControllers");

postRouter.post("/createNew_post", postControllers.createPost);
postRouter.get("/posts/:id", postControllers.fetchPosts);

module.exports = postRouter;
