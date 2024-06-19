'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TrainingAttendance extends Model {
        static associate(models) {
            TrainingAttendance.belongsTo(models.Employee, {
                foreignKey: 'EmployeeID',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
            TrainingAttendance.belongsTo(models.TrainingProgram, {
                foreignKey: 'TrainingProgramID',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
        }
    }
    TrainingAttendance.init({
        AttendanceID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        EmployeeID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        TrainingProgramID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        AttendanceDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        HoursAttended: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'TrainingAttendance',
        tableName: 'TrainingAttendances',
        timestamps: true
    });
    return TrainingAttendance;
};
