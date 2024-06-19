'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Shift extends Model {
        static associate(models) {
            // define association here
        }
    }
    Shift.init({
        ShiftID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ShiftName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        StartTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        EndTime: {
            type: DataTypes.TIME,
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
        modelName: 'Shift',
        tableName: 'Shifts',
        timestamps: true
    });
    return Shift;
};
