const { Router } = require('express')
const router = Router()
const { authenticateToken } = require('../middlewares/authToken')

const { 
    returnAllStudies, 
    returnOneStudy, 
    addNewStudy,
    updateStudy,
    deleteStudy} = require('../controllers/medicalStudyController')
const upload = require('../middlewares/multer')

router.get('/', authenticateToken, returnAllStudies)
router.get('/:id', authenticateToken, returnOneStudy)
router.post('/', authenticateToken, upload.single('file'), addNewStudy)
router.put('/:id', authenticateToken, updateStudy)
router.delete('/:id', authenticateToken, deleteStudy)

module.exports = router