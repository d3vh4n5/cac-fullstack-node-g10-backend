const fs = require('node:fs')
const ContactMessage = require('../models/ContactMessageModel')
const { saveFile } = require('../utils/saveFile')

const getAllMessages = async (req, res) => {
    try {
        const messages = await ContactMessage.findAll()
        res.json( messages )
    } catch (error) {
        res.status(500).json({
            error: "Ocurrió un error en el servidor, comuniquese con el administrador"
        })
    }
}

const getOneMessage = async (req, res) => {
    try {
        const { id } = req.params
        const message = await ContactMessage.findByPk(+id)

        if (message){
            res.json(message)
        } else {
            res.status(404).json( { error: "Mensaje no encontrado" } )
        }
    } catch (error) {
        res.status(500).json({
            error: "Ocurrió un error en el servidor, comuniquese con el administrador"
        })
    }  
}

const createNewMessage = async (req, res) => {
    const { body } = req

    console.log({ body, file: req.file })

    if (req.file !== undefined){
        const filePath = saveFile(req.file)
        body.file = filePath
    } else {
        body.file = ""
    }

    try{
        const message = new ContactMessage(body)
        await message.save()
        res.json(message)
    } catch (e){
        fs.unlinkSync(filePath);
        console.log("Hubo un error: ",e)
        res.status(500).json({ 
            error: "No se pudo realizar la inserción."
        })
    }
}

const updateMessage = async (req, res) => {
    try {
        await ContactMessage.update(req.body, {
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

module.exports = { getAllMessages, getOneMessage, createNewMessage, updateMessage }
