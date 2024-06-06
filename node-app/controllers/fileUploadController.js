const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // temporary storage location
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // keep the original file name
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Invalid image file!"), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
