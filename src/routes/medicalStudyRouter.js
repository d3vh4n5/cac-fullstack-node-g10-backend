const { Router } = require('express')
const router = Router()
const { authenticateToken } = require('../middlewares/authToken')

const { 
    returnAllStudies, 
    returnOneStudy, 
    addNewStudy} = require('../controllers/medicalStudyController')
const upload = require('../middlewares/multer')

router.get('/', authenticateToken, returnAllStudies)
router.get('/:id', authenticateToken, returnOneStudy)
router.post('/', authenticateToken, upload.single('file'), addNewStudy)

module.exports = router