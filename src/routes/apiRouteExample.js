const { Router } = require('express')
const router = Router()
const { exampleResponseHandler } = require('../controllers/exampleController')

router.get('/', (req, res)=>{
    res.send("Bienvenidos a nuestra API")
})

router.get('/example', exampleResponseHandler)

module.exports = router