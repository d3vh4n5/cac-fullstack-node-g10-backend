const { db } = require('../database/db')
const { DataTypes } = require('sequelize')
const UserModel = require('./UserModel')

const MedicalStudyModel = db.define("medical_studies", {
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE },
    type: { type: DataTypes.INTEGER },
    file: { type: DataTypes.STRING }
})

// Asociaciones
UserModel.hasOne(MedicalStudyModel, {
    // onDelete: 'RESTRICT',
    // onUpdate: 'RESTRICT',
})

MedicalStudyModel.belongsTo(UserModel)

// MedicalStudyModel.sync()

module.exports = MedicalStudyModel