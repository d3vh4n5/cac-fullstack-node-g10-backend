const { Router } = require('express')
const router = Router()
const { authenticateToken } = require('../middlewares/authToken')

const { 
    returnAllHistorias, 
    returnOneHistoria, 
    addNewHistoria,
    updateHistoria,
    returnUserHistory
} = require('../controllers/historiaClinicaController')

router.get('/', authenticateToken, returnAllHistorias)
router.get('/user-clinic-history', authenticateToken, returnUserHistory)
router.get('/:id', authenticateToken, returnOneHistoria)
router.post('/', authenticateToken, addNewHistoria)
router.put('/:id', authenticateToken, updateHistoria)

module.exports = router