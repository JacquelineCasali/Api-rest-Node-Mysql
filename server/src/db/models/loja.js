'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lojas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

     // hasmany  um para muitos 
     //as nome do relacinamento eu que escolho o nome
      this.hasMany(models.Produtos,{foreignKey:'lojaId',
      as:'loja',
      onUpdate:'CASCADE',
      onDelete:'CASCADE'})
    }
    }

    
  
  Lojas.init({
    nome:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {
          msg:"Esse campo não pode ser vazio"
        },
      }
    } 
  }, {
    sequelize,
    modelName: 'Lojas',
  });
  return Lojas;
};