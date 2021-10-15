// importration de indispensables
const Post = require('../models/posts');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const multer = require('../middlewares/multer');
const e = require('express');


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

// Middleware GET All
exports.getPosts = (req, res) => {

    const userToken = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(userToken, 'CLEF_SECRETE');
    const userId = decodedToken.tokenUID;

    Post.findAll({ include: [{
        model: User,
        attributes: ['firstname', 'lastname', 'imageUrl', 'user_id', 'isAdmin']
      }] }) 
        .then((data) => {
            const dataReverse = data.reverse(); 
            res.status(200).json({ data, userId });
        })
        .catch((err) => console.log('il ya une erreur ' + err));
}

// Middleware GET ONE
exports.getLike = (req, res) => {

    const id = req.query.id;
    const encodedToken = req.query.token;
    const decodedToken = jwt.verify(encodedToken, 'CLEF_SECRETE');
    const userId = decodedToken.tokenUID;

    Post.findOne({ where: { id: id }})
        .then((data) => {
            console.log('heart' + data)
            res.status(200).json({ data, userId })
        })
        .catch((err) => res.status(404).json({ message : 'erreur systeme like ' + err}))
}

// Middleware DELETE
exports.deletePost = (req, res) => {

    const postId = req.body.postId;
    console.log(postId);
    Post.destroy({ where: { id: postId }})
        .then(() => res.status(203).json({ message: 'Post correctement supprimer'}))
        .catch(() => res.status(500).json({ message: 'Post non supprimer'}));
}

// Middleware LIKE
exports.likePost = (req, res) => {

    const userToken = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(userToken, 'CLEF_SECRETE');
    const userId = decodedToken.tokenUID;
    const id = req.body.postId;

    Post.findOne({ where: { id: id }})
        .then((data) => {
            const test = data.usersLiked;

            if(test == null) {
                const idString = userId.toString();

                Post.update({ usersLiked: idString }, { where: { id: id }})
                    .then(() => res.status(203).json({ message: 'liked'}))
                    .catch((err) => res.status(500).json({ message: err}));
            } else {

                let array = data.usersLiked.split('-');
                const userid = userId;
                const ui = userid.toString();
                let index = array.indexOf(ui);

                
                if(index != -1) {
                    // // si l'utilisateur a déjà liké
                    let indexDelete = array.splice(index, 1);
                    let totalLikes = array.length;
                    const arrayString = array.join('-');

                    Post.update({
                        likes: totalLikes,
                        usersLiked: arrayString
                    }, { where: { id: id }})
                        .then(() => res.status(203).json({ message: 'disliked'}))
                        .catch((err) => res.status(503).json({ message: 'erreur dislike' + err}))

                } else {
                    // si l'utilisateur n'a pas encore liké
                    let totalLikes = array.push(ui);
                    const arrayString = array.join('-');
                    
                    Post.update({
                        likes: totalLikes,
                        usersLiked: arrayString
                    }, { where: { id: id }})
                        .then(() => res.status(203).json({ message: 'liked'}))
                        .catch((err) => res.status(503).json({ message: 'erreur like' + err}))
                }
                }

        })
        .catch((err) => res.status(500).json({ message: 'erreur findOne' + err}))
}