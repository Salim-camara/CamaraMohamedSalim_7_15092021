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
        defaultValue: null
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

Post.associate = (models) => {
    // associations can be defined here
    Post.belongsTo(models.User, { foreignKey: 'user_id' });
};


module.exports = Post;