const lightEl = document.getElementById("lightmode");

const h1El = document.querySelector("h1");

const buttonEl = document.createElement("button");
buttonEl.textContent = "Enable Dark Mode";
lightEl.appendChild(buttonEl);

let isLightMode = true;
function checkLightMode() {
    if (isLightMode) {
        lightEl.id = "lightmode";
        lightEl.style = "color: #1f1f1f";
        h1El.textContent = "Light Mode";
        lightEl.lastChild.textContent = "Enable Dark Mode";
    } else {
        lightEl.id = "darkmode";
        lightEl.style ="color: #f0f1f5";
        h1El.textContent = "Dark Mode";
        lightEl.lastChild.textContent = "Disable Dark Mode";
    }    
} 

buttonEl.addEventListener("click", () =>{
    isLightMode = !isLightMode;
    checkLightMode();
});