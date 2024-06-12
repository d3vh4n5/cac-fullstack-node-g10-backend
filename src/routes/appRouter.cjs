const { Router } = require('express')
const router = Router()

router.get('/', (req, res)=>{
    res.send("<h1>Esto sería una home</h1>")
})

module.exports = router