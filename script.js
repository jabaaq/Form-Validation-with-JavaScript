'use strict';
let form = document.querySelector('.form'),
    inputFields = document.querySelectorAll('.input-field'),
    inputEmail = document.querySelector('#email'),
    inputZip = document.querySelector('#zip'),
    inputCheckbox = document.querySelector('#input-checkbox'),
    country = document.querySelector('#country')

function validateZip() {
    let countryZip = {
        us: ["\\d{5}([ \\-]\\d{4})?", "U.S. ZIP codes should be in the format 12345 or 12345-6789"],
        ua: ["\\d{5}", "Ukraine ZIP codes should consist of 5 digits"],
        ch: ["\\d{4}", "Switzerland ZIP codes should consist of 4 digits"],
        fr: ["\\d{2}[ ]?\\d{3}", "French postal codes should be in the format 12345 or 123 456"],
        de: ["\\d{5}", "German postal codes should be in the format 12345"]
    }
    console.log(country[0].value);

    let checkZip = new RegExp(countryZip[country.value][0], '')

    console.log(checkZip);
    console.log(checkZip.test(inputZip.value));

    if (checkZip.test(inputZip.value)) {
        inputZip.setCustomValidity('')
    } else {
        inputZip.setCustomValidity(countryZip[country.value][1])
    }



    // function validateUSPostalCode(postalCode) {
    //     // Regular expression for US ZIP codes (5 digits)
    //     var usZipCodePattern = /^\d{5}$/;

    //     return usZipCodePattern.test(postalCode);
    // }

    // // Example usage:
    // var postalCode = "90210";
    // if (validateUSPostalCode(postalCode)) {
    //     console.log(postalCode + " is a valid US ZIP code.");
    // } else {
    //     console.log(postalCode + " is not a valid US ZIP code.");
    // }

}

country.addEventListener('change', () => {
    validateZip()
})

inputZip.addEventListener('input', () => {
    validateZip()
})


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
            de: "\d{5}"
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





// window.onload = function () {
//     document.getElementById("country").onchange = validateZip;
//     document.getElementById("zip").oninput = validateZip;
// };