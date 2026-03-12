const display = document.getElementById("display");
const angleSelect = document.getElementById("angle-select");
const themeSelect = document.getElementById("theme-select");

// Append numbers or operators
function append(value) {
    display.value += value;
}

// Append functions like sin(, cos(, sqrt(, log( etc
function appendFunction(func) {
    if (func.endsWith('(')) {
        display.value += func; // add function and open bracket
    } else {
        display.value += func; // for x², π, eˣ etc.
    }
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Evaluate expression
function calculate() {
    try {
        let expr = display.value;

        // Replace × ÷ symbols with * and /
        expr = expr.replace(/×/g, "*").replace(/÷/g, "/");

        // Replace π with Math.PI
        expr = expr.replace(/π/g, "Math.PI");

        // Handle degree/radian for trig functions
        if (angleSelect.value === "deg") {
            expr = expr.replace(/sin\(/g, "(Math.sin(Math.PI/180*");
            expr = expr.replace(/cos\(/g, "(Math.cos(Math.PI/180*");
            expr = expr.replace(/tan\(/g, "(Math.tan(Math.PI/180*");
            expr = expr.replace(/asin\(/g, "(180/Math.PI*Math.asin(");
            expr = expr.replace(/acos\(/g, "(180/Math.PI*Math.acos(");
            expr = expr.replace(/atan\(/g, "(180/Math.PI*Math.atan(");
        } else {
            // radians mode
            expr = expr.replace(/sin\(/g, "Math.sin(");
            expr = expr.replace(/cos\(/g, "Math.cos(");
            expr = expr.replace(/tan\(/g, "Math.tan(");
            expr = expr.replace(/asin\(/g, "Math.asin(");
            expr = expr.replace(/acos\(/g, "Math.acos(");
            expr = expr.replace(/atan\(/g, "Math.atan(");
        }

        // Replace ln with Math.log
        expr = expr.replace(/ln\(/g, "Math.log(");
        // Replace log with Math.log10
        expr = expr.replace(/log\(/g, "Math.log10(");
        // Replace √ with Math.sqrt
        expr = expr.replace(/sqrt\(/g, "Math.sqrt(");
        // e^x
        expr = expr.replace(/Math\.E\*\*/g, "Math.exp");

        const result = eval(expr);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Back button
function goBack() {
    window.history.back();
}

// Theme change
function changeTheme(theme) {
    if (theme === "light") {
        document.body.style.background = "#f5f5f5";
        document.body.style.color = "#000";
    } else {
        document.body.style.background = "#0f172a";
        document.body.style.color = "#fff";
    }
}