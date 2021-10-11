// importration de indispensables
const Post = require('../models/posts');
const User = require('../models/user');
const multer = require('../middlewares/multer');


// Middleware POST
exports.newPost = (req, res) => {

    const post = new Post ({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        user_id: 11
    });
    post.save()
        .then(() => {
            res.status(201).json({ message: 'post créé !' });
        })
        .catch((err) => { res.status(400).json({ message: 'post non créé' + err}) });
}

// Middleware GET
exports.getPosts = (req, res) => {

    Post.findAll()
        .then((data) => {
            res.status(200).json({data});
        })
        .catch((err) => console.log('il ya une erreur ' + err));
}