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
      //
      //belongsToMany relacionamento muitos para muitos n:n
      this.belongsToMany(models.Lojas,{
//chave do produtos
//through nome que vai relacionar loja com produtos (nome das tabelas com id)
        foreignKey:'produtoId',through:'loja_produtos',
as:'loja',
onUpdate:'CASCADE',
onDelete:'CASCADE'
      })
    }
  }
  Produtos.init({
    name:{
      type: DataTypes.STRING,
     
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
     
 
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};