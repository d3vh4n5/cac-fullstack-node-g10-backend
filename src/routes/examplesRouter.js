const { Router } = require('express')
const router = Router()
const { returnAllExamples, returnOneExample, addNewExample } = require('../controllers/exampleController')

router.get('/', (req, res)=>{
    res.send("Bienvenidos a nuestra API")
})

router.get('/examples', returnAllExamples)
router.get('/examples/:id', returnOneExample)
router.post('/examples', addNewExample)

module.exports = router