const { DATE } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('./bdd');

const Post = db.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING,
        defaultValue: 'test'
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'test'
    },
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }
});


module.exports = Post;