import { postContactMessage } from "../utils/formsSendingData.js"

const $form = document.querySelector('#contactForm')

$form.addEventListener('submit', async (event)=> {
    event.preventDefault()
    console.log(event)

    const { 
        name, 
        surname, 
        email, 
        subject, 
        description, 
        type, 
        file, 
        captcha
    } = event.target
    
    // Validacion de los inputs

    if (captcha.checked){

        const newMessage = {
            name: name.value,
            surname: surname.value,
            email: email.value,
            subject: subject.value,
            message: description.value,
            file: file.value,
            type: type.value,
            read: false
        }

        await postContactMessage(newMessage)
        
        event.target.reset()
    } else {
        alert("Debe checkear el captcha")
    }
})

