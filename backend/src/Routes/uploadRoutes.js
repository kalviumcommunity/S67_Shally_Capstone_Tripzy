const express = require('express');
const router = express.Router();
const upload = require('../Middleware/upload');
const protect = require('../Middleware/authMiddleware');


// Single file upload
router.post('/single', protect, upload.single('file'), (req, res) => {
  res.json({
    success: true,
    fileUrl: req.file.path
  });
});

// Multiple files upload
router.post('/multiple', protect, upload.array('files', 5), (req, res) => {
  const fileUrls = req.files.map(file => file.path);
  res.json({ success: true, fileUrls });
});

module.exports = router;