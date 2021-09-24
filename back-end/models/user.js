const { DATE } = require('sequelize');
const Sequelize = require('sequelize');
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
    waitingTime: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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

module.exports = User;