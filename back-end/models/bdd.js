const Sequelize = require('sequelize');


module.exports = new Sequelize('testP7', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});