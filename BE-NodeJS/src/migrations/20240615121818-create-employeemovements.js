'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EmployeeMovements', {
      MovementID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EmployeeID: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      MovementType: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      EffectiveDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      Description: {
        type: Sequelize.STRING(500),
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
    await queryInterface.dropTable('EmployeeMovements');
  }
};
