const express = require('express');
const router = express.Router();
const postControl = require('../controllers/post');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer');


// route création d'un nouveau post
router.post('/posts', postControl.newPost)
// route récupération de tous les posts
router.get('/posts', postControl.getPosts)

module.exports = router;