const { Router } = require('express')
const router = Router()
const { returnAllExamples, returnOneExample, addNewExample } = require('../controllers/exampleController')

router.get('/', returnAllExamples)
router.get('/:id', returnOneExample)
router.post('/', addNewExample)

module.exports = router