'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('loja_produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      produtoId: {
        type:Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Produtos',
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
    await queryInterface.dropTable('loja_produtos');
  }
};