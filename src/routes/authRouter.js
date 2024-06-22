const { Router } = require('express')
const router = Router()
const {
    registerUser,
    updateUser,
    getAllUsers,
    getOneUser,
    deleteUser
} = require('../controllers/authController')

router.post('/register', registerUser)
router.post('/login', )
router.post('/token', )
router.post('/forgotten-password', )

router.get('/users', getAllUsers) // admin route
router.get('/users/:id', getOneUser) // admin route
router.put('/users/:id', updateUser) // admin route
router.delete('/users/:id', deleteUser) // admin route

module.exports = router