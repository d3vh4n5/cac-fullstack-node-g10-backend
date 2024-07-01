const config = require('../config/config.cjs')

const { captchaSecretKey } = config.secret

const CAPTCHA_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecretKey}&response=`

exports.captchaValidation = async (token) => {

    if (token !== undefined){
        const resp = await fetch(CAPTCHA_URL + token)
        const data = await resp.json()
        return data.success
    } else {
        console.error("No se encuentra el token")
        return false
    }
}






exports.captchaValidation0 = async (req, res, next) => {
    const token = req.body['g-recaptcha-response']

    if (token !== undefined){
        const resp = await fetch(CAPTCHA_URL + token)
        const data = await resp.json()
        console.log({ token })
        console.log(data)
    } else {
        console.error("No se encuentra el token")
    }
}