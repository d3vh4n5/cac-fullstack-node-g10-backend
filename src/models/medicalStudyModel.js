const { db } = require('../database/db')
const { DataTypes } = require('sequelize')

const MedicalStudy = db.define("medical_studies", {
    subject: { type: DataTypes.STRING },
    message: { type: DataTypes.STRING },
    type: { type: DataTypes.INTEGER },
    file: { type: DataTypes.STRING },
    read: { 
        type: DataTypes.BOOLEAN,
        default: false
    }
})

module.exports = MedicalStudy