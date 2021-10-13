// importration de indispensables
const Post = require('../models/posts');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const multer = require('../middlewares/multer');


// Middleware POST
exports.newPost = (req, res) => {

    const userToken = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(userToken, 'CLEF_SECRETE');
    const userId = decodedToken.tokenUID;

    const post = new Post ({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        user_id: userId 
    });
    post.save()
        .then(() => {
            res.status(201).json({ message: 'post créé !' });
        })
        .catch((err) => { res.status(400).json({ message: 'post non créé' + err}) });
}

// Middleware GET
exports.getPosts = (req, res) => {

    const userToken = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(userToken, 'CLEF_SECRETE');
    const userId = decodedToken.tokenUID;

    Post.findAll({ include: [{
        model: User,
        attributes: ['firstname', 'lastname', 'imageUrl', 'user_id']
      }] }) 
        .then((data) => {
            res.status(200).json({ data, userId });
        })
        .catch((err) => console.log('il ya une erreur ' + err));
}

// Middleware DELETE
exports.deletePost = (req, res) => {

    console.log(req.params);
    res.status(203).json({message: 'ok'})
}