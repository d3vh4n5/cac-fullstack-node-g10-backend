const { Router } = require('express')
const router = Router()
const {
    indexView,
    usersView,
    docsView
} = require('../controllers/viewsController')

router.get('/', indexView)
router.get('/users', usersView)
router.get('/docs', docsView)

module.exports = router