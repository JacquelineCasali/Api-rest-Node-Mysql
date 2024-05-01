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
      this.hasMany(models.Enderecos,{foreignKey:'lojaId',
      as:'endereco',
      onUpdate:'CASCADE',
      onDelete:'CASCADE'})
    
      this.belongsToMany(models.Produtos,{
        //chave do produtos
        //through nome que vai relacionar loja com produtos (nome das tabelas com id)
        foreignKey:'lojaId',through:'loja_produtos',
        as:'produto',
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
              })

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
    } ,

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail:{
          msg:"Esse campo não pode ser vazio"
        },
      } 
    },
   
         

  }, {
    sequelize,
    modelName: 'Lojas',
  });
  return Lojas;
};