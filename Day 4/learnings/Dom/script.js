const containerEl = document.getElementId("container");
containerEl.style.backgroundColor = "red";
containerEl.style.color = "blue";

const buttonEl = document.getElementById("button");
buttonEl.style.borderRadius = "20px";
buttonEl.style.color = "white";
buttonEl.style.border = "none";
buttonEl.style.backgroundColor = "blue";
buttonEl.style.padding ="10px";


buttonEl.addEventListener("click", ()=>{
    containerEl.style.backgroundColor = "blue";
    buttonEl.style.backgroundColor = "green";
});