const fs = require('node:fs')
const MedicalStudy = require('../models/s')
const { saveFile } = require('../utils/saveFile')

const returnAllStudies = async (req, res) => {
    try {
        const studies = await MedicalStudy.findAll()
        res.json( studies )

    } catch {
        res.status(500).json({
            error: "Ocurrió un error en el servidor, comuniquese con el administrador"
        })

    }
    
}

const returnOneStudy = async (req, res) => {
    try {
        const { id } = req.params
        const study = await MedicalStudy.findByPk(+id)

        if (study){
            res.json(study)
            } else {
            res.status(404).json( { error: "Estudio médico no encontrado" } )
            }

    } catch {
        res.status(500).json({
            error: "Ocurrió un error en el servidor, comuniquese con el administrador"
        })

    }

}

const addNewStudy = async (req, res) => {
    const { body } = req

    console.log({ body, file: req.file })

    if (req.file !== undefined){
        const filePath = saveFile(req.file)
        body.file = filePath
    } else {
        body.file = ""
    }
    body.read = false

    try{
        const study = new MedicalStudy(body)
        await study.save()
        res.json(study)
    } catch (e){
        fs.unlinkSync(filePath);
        console.log("Hubo un error: ",e)
        res.status(500).json({ 
            error: "No se pudo subir el estudio médico."
        })
    }
}


module.exports = { returnAllStudies, returnOneStudy, addNewStudy }
