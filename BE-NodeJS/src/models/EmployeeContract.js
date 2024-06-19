'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class EmployeeContract extends Model {
        static associate(models) {
            EmployeeContract.belongsTo(models.Employee, {
                foreignKey: 'EmployeeID',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
        }
    }
    EmployeeContract.init({
        ContractID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        EmployeeID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ContractType: {
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
        BaseSalary: {
            type: DataTypes.DECIMAL(18, 2),
            allowNull: false
        },
        SignedDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        IsActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        sequelize,
        modelName: 'EmployeeContract',
        tableName: 'EmployeeContracts',
        timestamps: true
    });
    return EmployeeContract;
};
