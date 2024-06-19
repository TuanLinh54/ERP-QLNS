'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AttendanceRecords', {
      AttendanceRecordID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EmployeeID: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      AttendanceDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      InTime: {
        type: Sequelize.TIME,
        allowNull: true
      },
      OutTime: {
        type: Sequelize.TIME,
        allowNull: true
      },
      TotalHours: {
        type: Sequelize.DECIMAL(18, 2),
        allowNull: true
      },
      ShiftID: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      LeaveTypeID: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      IsActive: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('AttendanceRecords');
  }
};
