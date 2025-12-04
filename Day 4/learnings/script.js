const buttonEl = document.getElementById("submitBtn");
const nameInputEl = document.getElementById("name");
const errorMsgEl = document.getElementById("errorMsg");
const passwordInputEl = document.getElementById("password");
const passwordErrorMsEl = document.getElementById("PasswordErrorMsg");

let CrctPassword = "password123";

buttonEl.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(nameInputEl.value);

    if(nameInputEl.value.length < 3 && passwordInputEl.value !== CrctPassword){
        errorMsgEl.textContent = "Atleast 3 characters required";
        passwordErrorMsEl.textContent = "Incorrect password";
    }
    else{
        errorMsgEl.textContent = "";
        passwordErrorMsEl.textContent = "";
    }

    if(nameInputEl.value.length < 3){
         errorMsgEl.textContent = "Atleast 3 characters required";
    }

    if(passwordInputEl.value !== CrctPassword){
         passwordErrorMsEl.textContent = "Incorrect password";
    }
});