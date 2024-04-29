'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Produtos.belongsTo(models.Lojas,{
foreignKey:'lojaId',
onUpdate:'CASCADE',
onDelete:'CASCADE'
      })
    }
  }
  Produtos.init({
    name:{
      type: DataTypes.STRING,
      unique:true,
      allowNull: false,
      validate:{
       // nao permite campo vazio
       notEmpty:{
         msg:"Esse campo não pode ser vazio"
       },
      }
    },
    quantidade:{
      type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
        // nao permite campo vazio
        notEmpty:{
          msg:"Esse campo não pode ser vazio"
        },
       }
    },
    
    
    lojaId:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};