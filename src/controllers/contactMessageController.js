const ContactMessage = require('../models/ContactMessageModel')


const getAllMessages = async (req, res) => {
    const messages = await ContactMessage.findAll()
    res.json( messages )
}
const getOneMessage = async (req, res) => {
    const { id } = req.params
    const message = await ContactMessage.findByPk(+id)

    if (message){
        res.json(message)
    } else {
        res.status(404).json( { error: "Mensaje no encontrado" } )
    }
}
const createNewMessage = async (req, res) => {
    const { body } = req

    console.log(body)

    try{
        const message = new ContactMessage(body)
        await message.save()
        res.json(message)
    } catch (e){
        console.log("Hubo un error:",e)
        res.status(500).json({ error: "No se pudo realizar la inserción"})
    }

}

module.exports = { getAllMessages, getOneMessage, createNewMessage }
