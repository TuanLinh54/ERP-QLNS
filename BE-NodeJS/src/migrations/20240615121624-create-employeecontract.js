'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EmployeeContracts', {
      ContractID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EmployeeID: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      ContractType: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      StartDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      EndDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      BaseSalary: {
        type: Sequelize.DECIMAL(18, 2),
        allowNull: false
      },
      SignedDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      IsActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('EmployeeContracts');
  }
};
