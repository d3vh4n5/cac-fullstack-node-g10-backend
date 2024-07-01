const fs = require('node:fs')
const MedicalStudy = require('../models/MedicalStudyModel')
const { saveFile } = require('../utils/saveFile')

const returnAllStudies = async (req, res) => {
    try {
        const studies = await MedicalStudy.findAll({
            where: {
                userId: req.user.id
            }

        })
        res.json( studies )

    } catch (error) {
        res.status(500).json({
            error: "Ocurrió un error en el servidor, comuniquese con el administrador"
        })

    }
    
}

const returnOneStudy = async (req, res) => {
    try {
        const { id } = req.params
        const study = await MedicalStudy.findByPk(+id , {
            where: {
                userId: req.user.id
            }
        })

        if (study){
            res.json(study)
            } else {
            res.status(404).json( { error: "Estudio médico no encontrado" } )
            }

    } catch (error) {
        res.status(500).json({
            error: "Ocurrió un error en el servidor, comuniquese con el administrador"
        })

    }

}

const addNewStudy = async (req, res) => {
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
        const study = new MedicalStudy(body)
        await study.save()
        res.json(study)
    } catch (e){
        if (body.file !== ""){
            fs.unlinkSync(body.file);
        }
        console.log("Hubo un error: ",e)
        res.status(500).json({ 
            error: "No se pudo realizar la inserción."
        })
    }
}

const updateStudy = async (req, res) => {
    try {
        await MedicalStudy.update(req.body, {
            where: {
                id: req.params.id
            }
        })
    } catch (error) {
        console.log("Hubo un error: ",e)
        res.status(500).json({ 
            error: "Hubo un error al actualizar."
        })
    }
}

const deleteStudy = async (req, res) => {
    try {
        const study = await MedicalStudy.destroy({where :{id:req.params.id}})
        res.json({"message": "Estudio eliminado con éxito"})
    } catch (error) {
        if (body.file !== ""){
            fs.unlinkSync(body.file);
        }
        console.log("Hubo un error: ",e)
        res.status(500).json({ 
            error: "No se pudo borrar el estudio."
        })

    }
}

module.exports = { returnAllStudies, returnOneStudy, addNewStudy, updateStudy, deleteStudy }
