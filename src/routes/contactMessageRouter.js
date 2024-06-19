const { Router } = require('express')
const router = Router()
const { 
    getAllMessages, 
    getOneMessage, 
    createNewMessage} = require('../controllers/contactMessageController')
const upload = require('../middlewares/multer')


// Aquí iran sus rutas
router.get('/', getAllMessages)
router.get('/:id', getOneMessage)
router.post('/', upload.single('file'), createNewMessage)

module.exports = router