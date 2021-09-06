const express = require("express");
const router = express.Router();
const {
  registerController,
  registerValidation,
} = require("../controllers/userControllers");

router.post("/register", registerValidation, registerController);

module.exports = router;
