const postSchema = require("../models/Post");

const homeAllPost = async (req, res) => {
  const page = req.params.page;
  const perPage = 12;
  const skip = (page - 1) * perPage;
  try {
    const count = await postSchema.find({}).countDocuments();
    const posts = await postSchema
      .find({})
      .skip(skip)
      .limit(perPage)
      .sort({ updatedAt: -1 });
    return res.status(200).json({ postData: posts, count, perPage });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};

module.exports = {
  homeAllPost,
};
