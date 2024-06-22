const { db } = require('../database/db')
const { DataTypes } = require('sequelize')

const MedicalStudy = db.define("medical_studies", {
    type: { type: DataTypes.INTEGER },
    file: { type: DataTypes.STRING },
    read: { 
        type: DataTypes.BOOLEAN,
        default: false
    }
})

module.exports = MedicalStudy