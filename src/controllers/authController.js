const UserModel = require('../models/UserModel')

async function emailControl(req, res){
    const emailExists = await UserModel.findOne({
        where: {
            email: req.body.email
        }
    })

    if (emailExists) return res.status(400).json({
        error: "Ya existe un usuario con este email"
    })
}

async function userExists(req, res){
    const usuario = await UserModel.findByPk( req.params.id )
    if (!usuario) {
        return res.status(404).json({
            error: "No existe el usuario"
        })
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            error: "No se pudo registrar el usuario"
        })
    }
}

exports.getOneUser = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({
            error: "No se pudo registrar el usuario"
        })
    }
}

exports.registerUser = async (req, res) => {
    // validacion de que llegue la informacion y esté correcta
    try {
        emailControl(req, res)

        const newUser = await UserModel.create(req.body)
        res.status(201).json( newUser )
    } catch (error) {
        res.status(500).json({
            error: "No se pudo registrar el usuario"
        })
    }
}

exports.updateUser = async (req, res) => {
    // validacion de que llegue la informacion y esté correcta
    try {
        userExists(req, res)
        emailControl(req, res)

        const updatedUser = await UserModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({ updatedUser })
    } catch (error) {
        res.status(500).json({
            error: "No se pudo actualizar el usuario"
        })
    }
}

exports.deleteUser = async (req, res) => {
    // validacion de que llegue la informacion y esté correcta
    try {
        userExists(req, res)
        // Hago un borrado Lógico
        const updatedUser = await UserModel.update({
            state: false
        }, {
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({ updatedUser })
    } catch (error) {
        res.status(500).json({
            error: "No se pudo actualizar el usuario"
        })
    }
}

exports.loginCtrl = async (req, res) => {
    
}
