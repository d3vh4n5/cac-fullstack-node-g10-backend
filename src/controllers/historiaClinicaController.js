const fs = require('node:fs')
const HistoriaClinica = require('../models/HistoriaClinicaModel')
const { saveFile } = require('../utils/saveFile')

const returnAllHistorias = async (req, res) => {
    try {
        const historias = await HistoriaClinica.findAll({
            where: {
                userId: req.user.id
            }

        })
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
        const historia = await HistoriaClinica.findByPk(+id , {
            where: {
                userId: req.user.id
            }
        })

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
        const historia = new HistoriaClinica(body)
        await historia.save()
        res.json(historia)
    } catch (e){
        fs.unlinkSync(filePath);
        console.log("Hubo un error: ",e)
        res.status(500).json({ 
            error: "No se pudo subir la Historia Médica."
        })
    }
}


module.exports = { returnAllHistorias, returnOneHistoria, addNewHistoria }
