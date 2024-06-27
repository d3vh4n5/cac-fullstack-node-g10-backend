const { db } = require('../database/db')
const { DataTypes } = require('sequelize')

const MedicalStudy = db.define("medical_studies", {
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE },
    type: { type: DataTypes.INTEGER },
    file: { type: DataTypes.STRING }
})

module.exports = MedicalStudy