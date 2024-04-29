const express = require("express")
const router = express.Router()
const upload = require('../../controllers/fileUploadController');

router.post('/upload', upload.single('file'), (req, res) => {
    // Handle the uploaded file
    res.json({ message: 'File uploaded successfully!' });
  });

module.exports = router