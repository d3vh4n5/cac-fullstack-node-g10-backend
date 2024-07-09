const { Router } = require('express')
const router = Router()
const { authenticateToken } = require('../middlewares/authToken')
const { medicalStudyValidatorRoules } = require('../validators/medicalStudy.validator')

const { 
    returnAllStudies, 
    returnOneStudy, 
    addNewStudy,
    updateStudy,
    deleteStudy} = require('../controllers/medicalStudyController')
const upload = require('../middlewares/multer')

router.get('/', authenticateToken, returnAllStudies)
router.get('/:id', authenticateToken, returnOneStudy)
router.post('/', authenticateToken, upload.single('file'), medicalStudyValidatorRoules, addNewStudy)
router.put('/:id', authenticateToken, updateStudy)
router.delete('/:id', authenticateToken, deleteStudy)

module.exports = router