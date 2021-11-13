

document.getElementById("firstName").addEventListener("keyup", (event) => validateLength(event, "First Name"));


document.getElementById("lastName").addEventListener("keyup", (event) => validateLength(event, "Last Name"));


//document.getElementById("email").addEventListener("keyup", function (event)  validateLength(e.target.value));


document.getElementById("password").addEventListener("keyup", (event) => validatepasswordLength(event, "Password"));


document.getElementById("confirmPassword").addEventListener("keyup", (event) => confirmPassword(event.target.value)) "Confirm Password");


document.getElementById("dateOfBirt").addEventListener("keyup", function (e) {
  validateLength(e.target);
});

document.getElementById("address").addEventListener("keyup", function (e) {
  validateLength(e.target);
});


var forms = document.querySelectorAll(".needs-validation");




document.getElementById("ValidationForm").addEventListener("submit", function(e) {
    e.preventDefault()

    for (let element of e.target.value)   
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

import {validateLength,validatepasswordLength,confirmPassword} from "./validate.js";


