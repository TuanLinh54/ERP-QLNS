'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AttendanceRecord extends Model {
        static associate(models) {
            AttendanceRecord.belongsTo(models.Employee, {
                foreignKey: 'EmployeeID',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
            AttendanceRecord.belongsTo(models.Shift, {
                foreignKey: 'ShiftID',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
            AttendanceRecord.belongsTo(models.LeaveType, {
                foreignKey: 'LeaveTypeID',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
        }
    }
    AttendanceRecord.init({
        AttendanceRecordID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        EmployeeID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        AttendanceDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        InTime: {
            type: DataTypes.TIME,
            allowNull: true
        },
        OutTime: {
            type: DataTypes.TIME,
            allowNull: true
        },
        TotalHours: {
            type: DataTypes.DECIMAL(18, 2),
            allowNull: true
        },
        ShiftID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        LeaveTypeID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        IsActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        sequelize,
        modelName: 'AttendanceRecord',
        tableName: 'AttendanceRecords',
        timestamps: true
    });
    return AttendanceRecord;
};
