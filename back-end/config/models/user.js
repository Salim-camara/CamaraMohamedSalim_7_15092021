'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    user_id: DataTypes.INTEGER,
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    birth: DataTypes.STRING,
    sexe: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    mistakes: DataTypes.INTEGER,
    waitingTime: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};