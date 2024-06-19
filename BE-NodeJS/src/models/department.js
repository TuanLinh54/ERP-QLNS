'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      Department.belongsTo(models.Position, {
        foreignKey: 'PositionID',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
      Department.hasMany(models.Employee, {
        foreignKey: 'DepartmentID',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Department.init({
    DepartmentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    DepartmentName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    PositionID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Department',
    tableName: 'Departments',
    timestamps: true
  });
  return Department;
};
