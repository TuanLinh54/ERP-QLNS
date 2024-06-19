'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class LeaveRequest extends Model {
        static associate(models) {
            LeaveRequest.belongsTo(models.Employee, {
                foreignKey: 'EmployeeID',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
            LeaveRequest.belongsTo(models.LeaveType, {
                foreignKey: 'LeaveTypeID',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
            LeaveRequest.belongsTo(models.Employee, {
                foreignKey: 'ApprovedBy',
                as: 'Approver',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
        }
    }
    LeaveRequest.init({
        LeaveRequestID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        EmployeeID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        LeaveTypeID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        StartDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        EndDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        Reason: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        Status: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        ApprovedBy: {
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
        modelName: 'LeaveRequest',
        tableName: 'LeaveRequests',
        timestamps: true
    });
    return LeaveRequest;
};
