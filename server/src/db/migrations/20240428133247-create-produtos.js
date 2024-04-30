'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
    
        allowNull: false,
        validate:{
         // nao permite campo vazio
         notEmpty:{
           msg:"Esse campo não pode ser vazio"
         },
        }
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
          // nao permite campo vazio
          notEmpty:{
            msg:"Esse campo não pode ser vazio"
          },
         }
      },
      lojaId:{
       type:Sequelize.INTEGER,
       allowNull: false,
       references:{
         model:'Lojas',
         key:'id'
       },
       onUpdate:'CASCADE',
       onDelete:'CASCADE',
      },
    

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produtos');
  }
};