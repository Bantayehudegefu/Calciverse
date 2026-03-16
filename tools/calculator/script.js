const display = document.getElementById("display");
const angleSelect = document.getElementById("angle-select");
const themeSelect = document.getElementById("theme-select");

// Append numbers/operators at cursor
function append(value){
    const start = display.selectionStart;
    const end = display.selectionEnd;
    display.value = display.value.slice(0,start) + value + display.value.slice(end);
    display.setSelectionRange(start+value.length,start+value.length);
    display.focus();
}

// Append functions with () and cursor inside
function appendFunction(func) {
    const start = display.selectionStart;
    const end = display.selectionEnd;

    if(func.match(/sin|cos|tan|asin|acos|atan|Math.sqrt|Math.log|Math.log10|Math.exp/)) {
        const full = func + "()";
        display.value = display.value.slice(0, start) + full + display.value.slice(end);
        // Cursor **inside the parentheses**, right after '('
        display.setSelectionRange(start + func.length + 1, start + func.length + 1);
    } else {
        display.value = display.value.slice(0, start) + func + display.value.slice(end);
        display.setSelectionRange(start + func.length, start + func.length);
    }

    display.focus();
}

// Clear
function clearDisplay(){
    display.value = "";
    display.focus();
}

// Delete last char at cursor
function deleteLast(){
    const start = display.selectionStart;
    const end = display.selectionEnd;
    if(start===0) return;
    display.value = display.value.slice(0,start-1) + display.value.slice(end);
    display.setSelectionRange(start-1,start-1);
    display.focus();
}

// Evaluate expression
function calculate(){
    try{
        let expr = display.value;
        expr = expr.replace(/×/g,"*").replace(/÷/g,"/");
        expr = expr.replace(/π/g,"Math.PI");

        // Angle mode handling
        if(angleSelect.value==="deg"){
            expr = expr.replace(/sin\(/g,"Math.sin(Math.PI/180*");
            expr = expr.replace(/cos\(/g,"Math.cos(Math.PI/180*");
            expr = expr.replace(/tan\(/g,"Math.tan(Math.PI/180*");
            expr = expr.replace(/asin\(/g,"180/Math.PI*Math.asin(");
            expr = expr.replace(/acos\(/g,"180/Math.PI*Math.acos(");
            expr = expr.replace(/atan\(/g,"180/Math.PI*Math.atan(");
        }

        const result = eval(expr);
        display.value = result;
        display.focus();
    }catch(e){
        display.value = "Error";
        display.focus();
    }
}

// Back button
function goBack(){
    window.history.back();
}

// Theme change
function changeTheme(theme){
    if(theme==="light"){
        document.body.style.background="#f5f5f5";
        document.body.style.color="#000";
    } else {
        document.body.style.background="#0f172a";
        document.body.style.color="#fff";
    }
}