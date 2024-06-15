const { Router } = require('express')
const router = Router()
const { 
    getAllMessages, 
    getOneMessage, 
    createNewMessage} = require('../controllers/contactMessageController')

// Aquí iran sus rutas
router.get('/', getAllMessages)
router.get('/:id', getOneMessage)
router.post('/', createNewMessage)

module.exports = router