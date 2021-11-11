import { validateEmail, validateLength, comparePassword } from "./validate.js";



document.getElementById("firstName").addEventListener("keyup", function (e) {
    validateLength(e.target.value);
});

document.getElementById("lastName").addEventListener("keyup", function (e) {
  validateLength(e.target.value);
});

document.getElementById("email").addEventListener("keyup", function (e) {
  validateLength(e.target.value);
});

document.getElementById("password").addEventListener("keyup", function (e) {
  validateLength(e.target);
});

document.getElementById("confirmPassword").addEventListener("keyup", function (e) {
  validateLength(e.target);
});

document.getElementById("dateOfBirt").addEventListener("keyup", function (e) {
  validateLength(e.target);
});

document.getElementById("address").addEventListener("keyup", function (e) {
  validateLength(e.target);
});


document.getElementById("ValidationForm").addEventListener("submit", function(e) {
    e.preventDefault()

    for (let element of e.target)   
            switch(element.type) {
                case 'text': 
                    validateLength(element)
                    break;
                
                case 'email': 
                    validateEmail(element)
                    break;

                case 'password': 
                    comparePassword(element)
                    break;

            }
            console.log(this.tagName);
        })
 
        



