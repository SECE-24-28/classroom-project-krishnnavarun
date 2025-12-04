let containerEl = document.getElementById("container");
let countEl = document.getElementById("Count");
let incrementBtn = document.getElementById("incrementBtn");
let decrementBtn = document.getElementById("decrementBtn");

let count = 0;

incrementBtn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;
});

decrementBtn.addEventListener("click", () => {
    count--;
    countEl.textContent = count;
});  
