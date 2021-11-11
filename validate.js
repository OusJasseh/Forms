export function validateLength(element, minLength = 2) {
    if (element.length < minLength)
        document.getElementById(`error-${element.id}`).innerText = "Hej"
    
}

export function comparePassword(Pword, confirmPword) {
  const error = document.getElementById(`error-${confirmPword.target.id}`);

  if (Pword !== confirmPword.target.value)
    error.innerText = `Password is incorrect`;
  else error.innerText = "";
}

export function validateEmail(element) {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regEx.test(element.value)) {
    document.getElementById(
      `error-${element.id}`
    ).innerText = `Your e-mail must be valid.`;
    return false;
  } else {
    document.getElementById(`error-${element.id}`).innerText = ``;
    return true;
  }
}
