const { DATE } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('./bdd');

const Post = db.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'value_temporaire_par_default'
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: 0
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: 0
    }
});


module.exports = Post;