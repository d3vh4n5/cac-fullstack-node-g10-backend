// Check checkea la variable name de cualquier tipo, body checkea
// específicamente del cuerpo de la petición
const { check, body } = require('express-validator')

exports.baseEmailChain = ()=> body('email').exists().trim().escape().notEmpty().isEmail()
exports.baseNameChain = ()=> 
    check('name')
        .exists()
        .trim().escape()
        .not()
        .isEmpty()
        .withMessage('Nombre inválido')
exports.basePasswordChain = () => 
    body('password')
        .exists()
        .bail() // separa los mensajes de eror en la respuesta
        .trim().escape()
        .notEmpty()
        .withMessage('Contraseña Inválida')
