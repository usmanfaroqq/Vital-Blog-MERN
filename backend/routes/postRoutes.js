const express = require("express");
const postRouter = express.Router();
const postControllers = require("../controllers/postControllers");

postRouter.post("/createNew_post", postControllers.createPost);

module.exports = postRouter;
