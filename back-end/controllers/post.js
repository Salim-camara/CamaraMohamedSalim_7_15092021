// importration de indispensables
const Post = require('../models/posts');
const multer = require('../middlewares/multer');

exports.newPost = (res, req, next) => {
    
    const post = new Post ({
        title:'bonjour',
        // createdAt: 'bonjour',
        // updatedAt: 'hello',
        user_id: 'çava'

    });
    post.save();
    console.log('fin du programme');
}