const fs = require('node:fs')
const HistoriaClinica = require('../models/HistoriaClinicaModel')
const { saveFile } = require('../utils/saveFile')

const returnAllHistorias = async (req, res) => {
    try {
        const historias = await HistoriaClinica.findAll()
        res.json( historias )

    } catch (error) {
        res.status(500).json({
            error: "Ocurrió un error en el servidor, comuniquese con el administrador"
        })

    }
    
}

const returnOneHistoria = async (req, res) => {
    try {
        const { id } = req.params
        const historia = await HistoriaClinica.findByPk(+id)

        if (historia){
            res.json(historia)
        } else {
            res.status(404).json( { error: "Historia Clínica no encontrada" } )
        }

    } catch (error) {
        res.status(500).json({
            error: "Ocurrió un error en el servidor, comuniquese con el administrador"
        })

    }
}

const returnUserHistory = async (req, res) => {
    try {
        const userId = req.user.id
        const clinicHistory = await HistoriaClinica.findOne({
            where: { userId }
        })
        res.send(clinicHistory)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ocurrió un error al obtener la historia"
        })
    }
}

const addNewHistoria = async (req, res) => {
    const { body } = req
    body.userId = req.user.id
    console.log({ body, file: req.file })

    if (req.file !== undefined){
        const filePath = saveFile(req.file)
        body.file = filePath
    } else {
        body.file = ""
    }
    body.read = false

    try{
        //Ver si existe una historia que pertenezca al usuario 
        const historyExists = await HistoriaClinica.findOne({
            where: { 
                userId: req.user.id 
            }
        })
        // Si existe: error, ya existe, cuantas queres?
        if (historyExists) {
            res.status(400).json({
                error: "La historia ya existe"
            })
        }else {
            // si no existe, la creamos.
            const historia = new HistoriaClinica(body)
            await historia.save()
            res.json(historia)
        }

    } catch (e){
        console.log("Hubo un error: ",e)
        res.status(500).json({ 
            error: "No se pudo subir la Historia Médica."
        })
    }
}

const updateHistoria = async (req, res) => {
    try {
        const userId = req.user.id
        const clinicHistory = await HistoriaClinica.findOne({
            where: { userId }
        })
        res.send(clinicHistory)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Ocurrió un error al obtener la historia"
        })
       
        const updatedHistoria = await HistoriaClinica.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({ 
            msg: "Historia clínica actualizada con éxito",
            updatedHistoria,
            data: req.body
        })


}

const deleteHistoria = async (req, res) => {
    try {
        const { id } = req.params
        const clinicHistory = await HistoriaClinica.findOne({
            where: { userId }
        })
        res.send(clinicHistory)
        if (!clinicHistory) return res.status(404).json({
            error: "No existe la Historia Clínica"
        })


        const deletedHistoria = await HistoriaClinica.destroy({where: { id: id }})
        
        res.status(200).json({ deletedHistoria })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "No se pudo eliminar la Historia"
        })
    
    }
}

module.exports = { 
    returnAllHistorias, 
    returnOneHistoria, 
    addNewHistoria,
    updateHistoria,
    deleteHistoria,
    returnUserHistory
}
