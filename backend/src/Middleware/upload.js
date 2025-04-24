const multer = require('multer');
const { storage } = require('../Utils/cloudinary');

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

module.exports = upload;