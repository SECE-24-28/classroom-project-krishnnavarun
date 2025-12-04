let formEl = document.getElementById("form");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let passwordErrorMsgEl = document.getElementById("passwordErrorMsg");


nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
});

passwordEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
        passwordErrorMsgEl.textContent = "Required*";
    }
    else{
        passwordErrorMsgEl.textContent = "";
    }
});




formEl.addEventListener("submit", function(event) {
    event.preventDefault();
});