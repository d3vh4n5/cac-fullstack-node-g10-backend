const { Router } = require('express')
const router = Router()
const { authenticateToken } = require('../middlewares/authToken')

const { 
    returnAllHistorias, 
    returnOneHistoria, 
    addNewHistoria,
    updateHistoria,
    returnUserHistory,
    deleteHistoria
} = require('../controllers/historiaClinicaController')
const { clinicHistoryValidatorRoules } = require('../validators/clinicHistory.validator')

router.get('/', authenticateToken, returnAllHistorias)
router.get('/user-clinic-history', authenticateToken, returnUserHistory)
router.get('/:id', authenticateToken, returnOneHistoria)
router.post('/', authenticateToken, clinicHistoryValidatorRoules, addNewHistoria)
router.put('/:id', authenticateToken, clinicHistoryValidatorRoules, updateHistoria)
router.delete('/:id', authenticateToken, deleteHistoria)

module.exports = router