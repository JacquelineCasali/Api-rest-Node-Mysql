'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enderecos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
//um para um 
      this.belongsTo(models.Lojas,{
        foreignKey:'lojaId',
        as:'enderecoloja',
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
              })
    }
  }
  Enderecos.init({
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio",
        },
      },
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio",
        },
      },
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio",
        },
      },
    },

   
  }, {
    sequelize,
    modelName: 'Enderecos',
  });
  return Enderecos;
};