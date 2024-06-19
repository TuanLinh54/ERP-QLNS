'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class EmployeeMovement extends Model {
        static associate(models) {
            EmployeeMovement.belongsTo(models.Employee, {
                foreignKey: 'EmployeeID',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
        }
    }
    EmployeeMovement.init({
        MovementID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        EmployeeID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        MovementType: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        EffectiveDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        Description: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        IsActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        sequelize,
        modelName: 'EmployeeMovement',
        tableName: 'EmployeeMovements',
        timestamps: true
    });
    return EmployeeMovement;
};
