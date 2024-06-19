'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      Employee.belongsTo(models.Department, {
        foreignKey: 'DepartmentID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Employee.belongsTo(models.Position, {
        foreignKey: 'PositionID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Employee.belongsTo(models.Role, {
        foreignKey: 'RoleID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Employee.hasMany(models.EmployeeContract, {
        foreignKey: 'EmployeeID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Employee.hasMany(models.EmployeeInsurance, {
        foreignKey: 'EmployeeID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Employee.hasMany(models.EmployeeMovement, {
        foreignKey: 'EmployeeID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Employee.hasMany(models.LeaveRequest, {
        foreignKey: 'EmployeeID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Employee.hasMany(models.LeaveRequest, {
        foreignKey: 'ApprovedBy',
        as: 'Approver',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Employee.hasMany(models.TrainingAttendance, {
        foreignKey: 'EmployeeID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Employee.hasMany(models.TrainingProgram, {
        foreignKey: 'InstructorID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Employee.init({
    EmployeeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    FirstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    Password: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    CivilianId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DepartmentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PositionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    JoiningDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'Employees',
    timestamps: true
  });
  return Employee;
};
