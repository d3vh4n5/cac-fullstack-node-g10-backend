const { Router } = require('express')
const router = Router()

router.get('/', (req, res)=>{
    const context = {
        title: "Bienvenidos a nuestra API",
    }

    res.render('index', context);
})

module.exports = router