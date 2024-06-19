'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LeaveRequests', {
      LeaveRequestID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EmployeeID: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      LeaveTypeID: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      StartDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      EndDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      Reason: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      Status: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      ApprovedBy: {
        type: Sequelize.INTEGER,
        allowNull: false,

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
    await queryInterface.dropTable('LeaveRequests');
  }
};
