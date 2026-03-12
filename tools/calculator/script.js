// script.js

const display = document.getElementById("display");

// Append number/operator to display
function append(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Go back function for back button
function goBack() {
    window.history.back();
}

// Calculate expression
function calculate() {
    try {
        // Replace ÷ and × symbols for eval
        const expression = display.value.replace(/÷/g, "/").replace(/×/g, "*");
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

// Scientific functions (in degrees)
function sin() {
    if (display.value === "") return;
    display.value = Math.sin((parseFloat(display.value) * Math.PI) / 180).toFixed(6);
}

function cos() {
    if (display.value === "") return;
    display.value = Math.cos((parseFloat(display.value) * Math.PI) / 180).toFixed(6);
}

function tan() {
    if (display.value === "") return;
    display.value = Math.tan((parseFloat(display.value) * Math.PI) / 180).toFixed(6);
}

// Square root
function sqrt() {
    if (display.value === "") return;
    display.value = Math.sqrt(parseFloat(display.value)).toFixed(6);
}

// Square
function power() {
    if (display.value === "") return;
    display.value = Math.pow(parseFloat(display.value), 2).toFixed(6);
}

// Natural log
function ln() {
    if (display.value === "") return;
    display.value = Math.log(parseFloat(display.value)).toFixed(6);
}

// Base-10 log
function log() {
    if (display.value === "") return;
    display.value = Math.log10(parseFloat(display.value)).toFixed(6);
}

// Pi
function pi() {
    display.value += Math.PI.toFixed(6);
}