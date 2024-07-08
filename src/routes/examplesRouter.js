const { Router } = require('express')
const router = Router()
const { 
    returnAllExamples, 
    returnOneExample, 
    addNewExample 
} = require('../controllers/exampleController')
const { 
    registerValidatorRoules,
 } = require('../validators/register.validator')

router.get('/', returnAllExamples)
router.get('/:id', returnOneExample)
router.post('/', addNewExample)
router.post('/validator', registerValidatorRoules, (req, res)=>{
    res.json(req.body)
})

module.exports = router