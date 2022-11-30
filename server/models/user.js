'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/bcyrpt');
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
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          msg: "username is required"
        },
        notEmpty: {
          msg: "username is required!"
        }
      }
    },
    Email:  {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false,
      validate:{
        notNull: {
          msg: "email is required"
        },
        notEmpty: {
          msg: "email is required!"
        },
        isEmail:{
          msg:'email is required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          msg: "password is required"
        },
        notEmpty: {
          msg: "password is required!"
        },
        len:{
          args:[5],
          msg:'min password is 5 character'
        }
      }
    },
    role: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((model,option) =>{
    model.password = hashPass(model.password)
  })

  return User;
};