export  function validateLength (event, name, minLength = 2) {
      const error = document.getElementById(`error-${event.target.id}`)

    if (event.target.value === "")
        error.innerText = `Fill in your ${name.toLowerCase()}.`

    else
      if (event.target.value.length < minLength)
        error.innerText = `Your ${name.toLowerCase()} must be more than ${minLength} characters.`;
      else
      error.innerText = " "  

}

export function confirmPassword(password, confirmPassword, event, name) {
  const error = document.getElementById(`error-${event.target.id}`);

  if (password.event.target.value !== confirmPassword.event.target.value)
      error.innerText = `Your ${name} does not match `
}

export function validatepasswordLength(event, name, minpassLength = 6) {
  const error = document.getElementById(`error-${event.target.id}`);

  if (event.target.value === "")
    error.innerText = `Fill in your ${name.toLowerCase()}.`;
  else if (event.target.value.length < minpassLength)
    error.innerText = `Your ${name.toLowerCase()} must be more than ${minpassLength} characters.`;
  else error.innerText = " ";
}