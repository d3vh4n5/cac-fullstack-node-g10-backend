const { Router } = require('express')
const router = Router()
const {
    registerUser,
    updateUser,
    getAllUsers,
    getOneUser,
    deleteUser,
    getTokens,
    refreshToken
} = require('../controllers/authController')
const { authenticateUser } = require('../middlewares/authUser')
const { authenticateToken } = require('../middlewares/authToken')

router.post('/register', registerUser)
router.post('/login', authenticateUser, getTokens)
router.post('/refresh-token', refreshToken)
router.delete('/refresh-token', ) // Este deber ser la ruta de logout
router.post('/forgotten-password', )

router.get('/users', getAllUsers) // admin route
router.get('/users/:id', getOneUser) // admin route
router.put('/users/:id', updateUser) // admin route
router.delete('/users/:id', deleteUser) // admin route

// rutas para testeo
router.post('/protected', authenticateToken, (req, res) => {
    res.json({
        msg: "Si estas aquí, estas validado y todo salió bien",
        user: req.user
    })
})

module.exports = router