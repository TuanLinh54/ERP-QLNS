'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Position extends Model {
        static associate(models) {
            // define association here
        }
    }
    Position.init({
        PositionID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        PositionName: {
            type: DataTypes.STRING(100),
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
        modelName: 'Position',
        tableName: 'Positions',
        timestamps: true
    });
    return Position;
};
