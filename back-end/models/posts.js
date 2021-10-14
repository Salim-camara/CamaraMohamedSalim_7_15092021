const { DATE } = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');
const User = require('./user');
const db = require('./bdd');

const Post = db.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,  
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING(255)
    },
    imageUrl: {
        type: Sequelize.TEXT('long'),
        defaultValue: null
    },
    usersLiked: {
        type: Sequelize.STRING(255)
    },
    user_id: { 
        type: Sequelize.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
});


Post.belongsTo(User, { foreignKey: 'user_id' });


module.exports = Post;