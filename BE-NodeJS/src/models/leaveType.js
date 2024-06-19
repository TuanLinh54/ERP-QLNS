'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class LeaveType extends Model {
        static associate(models) {
            // define association here
        }
    }
    LeaveType.init({
        LeaveTypeID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        LeaveName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        Description: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        IsActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'LeaveType',
        tableName: 'LeaveTypes',
        timestamps: true
    });
    return LeaveType;
};
