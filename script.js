
let displayValue = 0;

function updateDisplay() {
    document.getElementById("display").textContent = displayValue;
}

function removenum() {
    numvalue = document.getElementById("display").textContent;
    numvalue = parseInt(numvalue / 10);
    displayValue = numvalue;
    updateDisplay();
}
function appendToDisplay(value) {
    if (displayValue === 0) {
        displayValue = "";
    }
    if (value === '=' && displayValue !== "") {
        try {
            displayValue = eval(displayValue).toString();
        } catch (error) {
            displayValue = "Error";
        }
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function calculateResult() {
    appendToDisplay('=');
}

// Initial display setup
updateDisplay();

function changemode() {
    const element = document.getElementById("calc");
    const label = document.querySelector('.mode .form-switch .form-check-input');


    if (element.classList.contains("light-calculator")) {
        element.classList.remove("light-calculator");
        element.classList.add("dark-calculator");

        document.getElementById("mode_name").textContent = "Dark Mode";
        label.style.backgroundColor = "black";
    }

    else {
        element.classList.remove("dark-calculator");
        element.classList.add("light-calculator");
        document.getElementById("mode_name").textContent = "Light Mode";
        label.style.backgroundColor = "white";

    }
}
