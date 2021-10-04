const express = require('express');
const router = express.Router();
const postControl = require('../controllers/post');
const multer = require('../middlewares/multer');


// route création d'un nouveau post
router.post('/posts', postControl.newPost)

module.exports = router;