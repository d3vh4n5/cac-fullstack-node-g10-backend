const { db } = require('../database/db')
const { DataTypes } = require('sequelize')
const UserModel = require('./UserModel')

// Historia clinica resumida
const HistoriaClinicaModel = db.define("historia_clinica", {
    name: { type: DataTypes.STRING },
    //apellido: { type: DataTypes.STRING },    
    fecha_nacimiento: { type: DataTypes.DATE },
    sexo: { type: DataTypes.STRING },
    estado_civil: { type: DataTypes.STRING },
    peso: { type: DataTypes.INTEGER },
    altura: { type: DataTypes.INTEGER },
    grupo_sanguineo: { type: DataTypes.STRING },
    hipertension: { type: DataTypes.BOOLEAN },
    diabetes: { type: DataTypes.BOOLEAN },
    asma: { type: DataTypes.BOOLEAN },
    alergias: { type: DataTypes.BOOLEAN },
    insuf_cardiaca: { type: DataTypes.BOOLEAN },
    tabaco: { type: DataTypes.BOOLEAN },
    alcohol: { type: DataTypes.BOOLEAN },
    marihuana: { type: DataTypes.BOOLEAN },
    cocaina: { type: DataTypes.BOOLEAN },
    otras_drogas: { type: DataTypes.BOOLEAN },
    
})

// Asociaciones
UserModel.hasOne(HistoriaClinicaModel, {
    // onDelete: 'RESTRICT',
    // onUpdate: 'RESTRICT',
})

HistoriaClinicaModel.belongsTo(UserModel)

module.exports = HistoriaClinicaModel