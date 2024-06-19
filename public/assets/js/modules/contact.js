import { submitFormData } from "../utils/formsSendingData.js"

const $form = document.querySelector('#contactForm')

$form.addEventListener('submit', async (event)=> {
    event.preventDefault()
    console.log(event)

    const { 
        name, 
        surname, 
        email, 
        subject, 
        message, 
        type, 
        file, 
        captcha
    } = event.target
    
    // Validacion de los inputs

    if (captcha.checked){
        
        await submitFormData(event)
        
        event.target.reset()
    } else {
        alert("Debe checkear el captcha")
    }
})

