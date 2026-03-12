// Calculator JS for fully functional scientific calculator

const display = document.getElementById("display");
const angleSelect = document.getElementById("angle");
const themeSelect = document.getElementById("theme");

// Append value to display
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

// Factorial
function factorial() {
    let n = parseFloat(display.value);
    if (n < 0 || !Number.isInteger(n)) {
        display.value = "Error";
        return;
    }
    let res = 1;
    for (let i = 1; i <= n; i++) res *= i;
    display.value = res;
}

// Pi
function pi() {
    display.value += Math.PI.toFixed(8);
}

// Power x²
function power() {
    display.value += "**2";
}

// Square root
function sqrt() {
    display.value += "Math.sqrt(";
}

// Natural exponent e^x
function exp() {
    display.value += "Math.exp(";
}

// Natural log ln
function ln() {
    display.value += "Math.log(";
}

// Common log
function log() {
    display.value += "Math.log10(";
}

// Trig functions
function sin() {
    display.value += "sin(";
}
function cos() {
    display.value += "cos(";
}
function tan() {
    display.value += "tan(";
}

// Inverse trig
function asin() {
    display.value += "asin(";
}
function acos() {
    display.value += "acos(";
}
function atan() {
    display.value += "atan(";
}

// Convert input string to JS-evaluable formula
function preprocess(input) {
    const angle = angleSelect.value; // deg or rad

    // Replace sin, cos, tan, etc.
    input = input.replace(/sin\(/g, `Math.sin(`);
    input = input.replace(/cos\(/g, `Math.cos(`);
    input = input.replace(/tan\(/g, `Math.tan(`);
    input = input.replace(/asin\(/g, `Math.asin(`);
    input = input.replace(/acos\(/g, `Math.acos(`);
    input = input.replace(/atan\(/g, `Math.atan(`);

    // Handle degree conversion
    if (angle === "deg") {
        input = input.replace(/Math\.sin\(/g, "Math.sin(Math.PI/180*");
        input = input.replace(/Math\.cos\(/g, "Math.cos(Math.PI/180*");
        input = input.replace(/Math\.tan\(/g, "Math.tan(Math.PI/180*");
        input = input.replace(/Math\.asin\(/g, "180/Math.PI*Math.asin(");
        input = input.replace(/Math\.acos\(/g, "180/Math.PI*Math.acos(");
        input = input.replace(/Math\.atan\(/g, "180/Math.PI*Math.atan(");
    }

    return input;
}

// Evaluate expression
function calculate() {
    try {
        let expr = preprocess(display.value);
        let result = eval(expr);
        display.value = parseFloat(result.toFixed(8));
    } catch (e) {
        display.value = "Error";
    }
}

// Go back
function goBack() {
    window.history.back();
}

// Change theme
function changeTheme() {
    const theme = themeSelect.value;
    document.body.className = theme;
}