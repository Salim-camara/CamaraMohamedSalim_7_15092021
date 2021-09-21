// Importation des indispensables
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// autorisation de toutes du CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Ajout du bodyParser
app.use(bodyParser.json());

// **************************** Connexion à la base de données **************************************************
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('testP7', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

// Création du modèle user
class User extends Model {}
User.init({
        lastname: {
            allowNull: false,
            type: DataTypes.STRING
        },
        firstname: DataTypes.STRING,
        birth: DataTypes.DATE,
        sexe: DataTypes.INTEGER,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        mistakes: DataTypes.INTEGER,
        waitingTime: DataTypes.INTEGER,
        imageUrl: DataTypes.STRING,
        bio: DataTypes.STRING
      }
, { sequelize, modelName: 'user' });


(async () => {
  await sequelize.sync({
      alter: true
  });
  const jane = await User.create({
    username: 'janedoe',
    birth: new Date(1980, 6, 20)
  });
  console.log(jane.toJSON());
})();
// *********************************** Fin connexion à la base de données **************************************


// Exportation de app
module.exports = app;