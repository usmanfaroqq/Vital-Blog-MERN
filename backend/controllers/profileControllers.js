const userSchema = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET, {
    expiresIn: "7d",
  });
};

const changeUserName = async(req, res) => {
  const { name, id } = req.body;
  if (name === "") {
    return res
      .status(400)
      .json({ errors: [{ msg: "You must need to provide a name" }] });
  } else {
    try {
      const user = await userSchema.findOneAndUpdate(
        { _id: id },
        { name: name },
        { new: true }
      );
      const token = jwt.sign({ user }, process.env.SECRET, {
        expiresIn: "7d",
      });
      return res.status(200).json({token, msg: 'Your name has been updated'})
    } catch (error) {}
  }
};

module.exports = {
  changeUserName,
};
