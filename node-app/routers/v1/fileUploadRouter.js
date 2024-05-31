const express = require("express");
const router = express.Router();
const upload = require("../../controllers/fileUploadController");
const fs = require("fs");

router.post("/upload/service-picture", upload.single("file"), (req, res) => {
  const file = req.file;
  console.log(file);
  fs.rename(file.path, `./public/service/${file.originalname}`, () => {
    console.log("done");
  });
  res.send("done");
});
router.post("/upload/profile-picture", upload.single("file"), (req, res) => {
  const file = req.file;
  console.log(file);
  fs.rename(file.path, `./public/profile/${file.originalname}`, () => {
    console.log("done");
  });
  res.send("done");
});

module.exports = router;
