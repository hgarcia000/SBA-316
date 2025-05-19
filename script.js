const lightEl = document.getElementById("lightmode");

const h1El = document.querySelector("h1");

const buttonEl = document.createElement("button");
buttonEl.textContent = "Enable Dark Mode";
lightEl.prepend(buttonEl);

let isLightMode = true;
function checkLightMode() {
    if (isLightMode) {
        lightEl.id = "lightmode";
        lightEl.style = "color: #1f1f1f";
        h1El.textContent = "Light Mode";
        buttonEl.textContent = "Enable Dark Mode";
    } else {
        lightEl.id = "darkmode";
        lightEl.style ="color: #f0f1f5";
        h1El.textContent = "Dark Mode";
        buttonEl.textContent = "Disable Dark Mode";
    }    
} 

buttonEl.addEventListener("click", () =>{
    isLightMode = !isLightMode;
    checkLightMode();
});

const responseEl = document.createElement("h3");

const formEl = document.querySelector("form");
const ageEl = formEl.elements["age"];


formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const ageInvalid = validateAge(e.target.elements["age"].value);
    if (ageInvalid) {
        alert("Invalid age!");
    } else {
        const confirmation = confirm("Would you like to submit this response?");
        if (confirmation) {
            responseEl.textContent = `Hello, ${e.target.elements["name"].value}! I see you're ${e.target.elements["age"].value} years old!`;
            lightEl.appendChild(responseEl);
        }
        
    }
        
});

function validateAge(e){
    return e < 1;
}