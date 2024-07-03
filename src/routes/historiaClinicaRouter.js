const { Router } = require('express')
const router = Router()
const { authenticateToken } = require('../middlewares/authToken')

const { 
    returnAllHistorias, 
    returnOneHistoria, 
    addNewHistoria} = require('../controllers/historiaClinicaController')
const upload = require('../middlewares/multer')

router.get('/', authenticateToken, returnAllHistorias)
router.get('/:id', authenticateToken, returnOneHistoria)
router.post('/', authenticateToken, upload.single('file'), addNewHistoria)

module.exports = router