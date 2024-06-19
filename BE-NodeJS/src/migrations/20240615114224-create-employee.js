'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employees', {
      EmployeeID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FirstName: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      LastName: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      DateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      Gender: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      Address: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      Phone: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      Email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      Password: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      CivilianId: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      DepartmentID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      PositionID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      JoiningDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      IsActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      RoleID: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('Employees');
  }
};
