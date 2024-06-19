'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EmployeeInsurances', {
      InsuranceID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EmployeeID: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      InsuranceType: {
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
      InsuranceNumber: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
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
    await queryInterface.dropTable('EmployeeInsurances');
  }
};
