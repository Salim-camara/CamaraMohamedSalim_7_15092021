const Sequelize = require('sequelize');
const db = require('./bdd');

const User = db.define('User', {
    lastname: {
        type: Sequelize.STRING
    },
    firstname: {
        type: Sequelize.STRING
    },
    birth: {
        type: Sequelize.STRING,
        defaultValue: ''
    },
    sexe: {
        type: Sequelize.STRING,
        defaultValue: 0
    },
    email: {
        type: Sequelize.STRING,
        defaultValue: ''
    },
    password: {
        allowNull: true,
        type: Sequelize.STRING
    },
    mistakes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    waitingTime: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

module.exports = User;