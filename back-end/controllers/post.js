// importration de indispensables
const Post = require('../models/posts');
const multer = require('../middlewares/multer');


// Middleware POST
exports.newPost = (req, res) => {

    const post = new Post ({
        title: req.body.title,
        description: req.body.description,
        user_id: 11
    });
    post.save()
        .then(() => {
            res.status(201).json({ message: 'post créé !' });
        })
        .catch((err) => { res.status(400).json({ message: 'post non créé' + err}) });
}

// Middleware GET
exports.getPosts = (res, req, next) => {

}