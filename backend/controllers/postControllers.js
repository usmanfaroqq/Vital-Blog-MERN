const formidable = require("formidable");
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const createPost = (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, (error, fields, files) => {
    const { title, description, body, category, slug, id, user } = fields;
    const errors = [];
    if (title === "") {
      errors.push({ msg: "Topic Title is required" });
    }
    if (body === "") {
      errors.push({ msg: "Topic Content is required" });
    }
    if (description === "") {
      errors.push({ msg: "Description is required" });
    }
    if (category === "") {
      errors.push({ msg: "Topic Category is required" });
    }
    if (slug === "") {
      errors.push({ msg: "Slug Category is required" });
    }
    if (Object.keys(files).length === 0) {
      errors.push({ msg: "Cover Photo Is required" });
    } else {
      const { type } = files.image;
      const split = type.split("/");
      const extension = split[1].toLowerCase();
      if (extension !== "jpg" && extension !== 'jpeg' && extension !== 'png') {
        errors.push({ msg: `${extension} is not a valid`})
      }else{
        files.image.name = uuidv4() + '.' + extension;
        const newPath = __dirname + `./../../frontend/public/images/${files.image.name}`
        fs.copyFile(files.image.path, newPath, (error) => {
          if(error){
            console.log( error)
          }else{
            console.log('Image Uploaded')
          }
        })
      }
    }
    if (errors.length !== 0) {
      return res.status(400).json({ errors, files });
    }
  });
};

module.exports = {
  createPost,
};
