'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TrainingProgram extends Model {
        static associate(models) {
            TrainingProgram.belongsTo(models.Employee, {
                foreignKey: 'InstructorID',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
            TrainingProgram.hasMany(models.TrainingAttendance, {
                foreignKey: 'TrainingProgramID',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
        }
    }
    TrainingProgram.init({
        TrainingProgramID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ProgramName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Description: {
            type: DataTypes.STRING(500),
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
        InstructorID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'TrainingProgram',
        tableName: 'TrainingPrograms',
        timestamps: true
    });
    return TrainingProgram;
};
