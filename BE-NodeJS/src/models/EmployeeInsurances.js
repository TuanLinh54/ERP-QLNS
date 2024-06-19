'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class EmployeeInsurance extends Model {
        static associate(models) {
            EmployeeInsurance.belongsTo(models.Employee, {
                foreignKey: 'EmployeeID',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
        }
    }
    EmployeeInsurance.init({
        InsuranceID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        EmployeeID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        InsuranceType: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        StartDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        EndDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        InsuranceNumber: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        IsActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        sequelize,
        modelName: 'EmployeeInsurance',
        tableName: 'EmployeeInsurances',
        timestamps: true
    });
    return EmployeeInsurance;
};
