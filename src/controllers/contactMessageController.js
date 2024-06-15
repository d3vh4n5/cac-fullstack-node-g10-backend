// Datos handcodeados:

const messages = [
    { 
        id: 1, 
        name: "John",
        surname: "Doe",
        subject: "Test",
        message: "Hola, les dejo un mensaje",
    }, 
    { 
        id: 2, 
        name: "Dua",
        surname: "Lipa",
        subject: "Love",
        message: "Hola, la verdad que Juan me gusta mucho",
    }, 
]



const getAllMessages = (req, res) => {
    res.json(messages)
}
const getOneMessage = (req, res) => {
    const { id } = req.params
    const message = messages.find( m => m.id === +id)

    if (message !== undefined){
        res.json(message)
    } else {
        res.status(404).json({details: "Mensaje no encontrado"})
    }
}
const createNewMessage = (req, res) => {
    const { name, surname, subject, message } = req.body

    const newContactMessage = {
        id: messages.length + 1,
        name, 
        surname,
        subject,
        message
    }

    console.log(newContactMessage)

    try{

        if (messages.push(newContactMessage)) return res.json(newContactMessage)
        else return res.status(500).json({details: "No se pudo realizar la inserción"})
    } catch (e){
        console.log("Hubo un error:",e)
    }

}

module.exports = {getAllMessages, getOneMessage, createNewMessage}