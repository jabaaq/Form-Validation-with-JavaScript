'use strict';
// function validation(form) {

//     function removeError(input) {
//         const parent = input.parentNode

//         if (parent.classList.contains('error')) {
//             parent.querySelector('.error-text').remove()
//             parent.classList.remove('error')
//         }
//     }

//     function createError(input, text) {
//         const parent = input.parentNode

//         const errorLabel = document.createElement('p')
//         errorLabel.classList.add('error-text')
//         errorLabel.textContent = text

//         parent.classList.add('error')
//         parent.appendChild(errorLabel)
//     }

//     let result = true

//     const allInputs = form.querySelectorAll('input')
//     for (let input of allInputs) {
//         removeError(input)
//         if (input.value == '') {
//             console.log(); ('Please fill all the inputs!')
//             createError(input, 'Please fill the required fields!')
//             result = false
//         }
//     }

//     return result
// }


// document.querySelector('.form').addEventListener('submit', function (e) {
//     e.preventDefault()
//     if (validation(this)) {
//         alert('Submitted!')
//     }
// })

let form = document.querySelector('.form'),
    inputFields = document.querySelectorAll('.input-field'),
    inputEmail = document.querySelector('#email'),
    inputZip = document.querySelector('#zip'),
    inputCheckbox = document.querySelector('#input-checkbox')

function validateEmail(email) {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    //Regular expressions

    return reg.test(String(email).toLocaleLowerCase())
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    let emailVal = inputEmail.value,
        zipVal = inputZip.value,
        emptyInputs = Array.from(inputFields).filter(input => input.value === '')

    inputFields.forEach(input => {
        if (input.value === '') {
            input.classList.add('error')
        } else {
            input.classList.remove('error')
        }
    })

    if (emptyInputs.length !== 0) {
        console.log('inputs note filled');
        return false
    }

    if (!validateEmail(emailVal)) {
        inputEmail.classList.add('error')
        console.log('Email not valid');
        return false
    } else {
        inputEmail.classList.remove('error')
    }

    if (!inputCheckbox.checked) {
        console.log('Checkbox not checked');
        inputCheckbox.classList.add('error')
        return false
    } else {
        inputCheckbox.classList.remove('error')
    }

})
