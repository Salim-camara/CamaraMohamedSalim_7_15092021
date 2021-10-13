const { DATE } = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');
const db = require('./bdd');

const User = db.define('User', {
    user_id: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    lastname: {
        type: Sequelize.STRING 
    },
    firstname: {
        type: Sequelize.STRING
    },
    birth: {
        type: Sequelize.STRING
    },
    sexe: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: {
        type: Sequelize.STRING
    },
    mistakes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    bio: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.TEXT('long'),
        defaultValue: null
    },
    waitingTime: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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

User.associate = (models) => {
    // associations can be defined here
    User.hasOne(models.Post, { onDelete: 'cascade' });
};

module.exports = User;