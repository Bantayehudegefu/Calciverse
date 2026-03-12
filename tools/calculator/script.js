const display = document.getElementById("display");

function append(value){

display.value += value;

}

function clearDisplay(){

display.value = "";

}

function deleteLast(){

display.value = display.value.slice(0,-1);

}

function calculate(){

try{

display.value = eval(display.value);

}

catch{

display.value = "Error";

}

}

function sqrt(){

display.value = Math.sqrt(display.value);

}

function power(){

display.value = Math.pow(display.value,2);

}

function sin(){

display.value = Math.sin(display.value);

}

function cos(){

display.value = Math.cos(display.value);

}

function tan(){

display.value = Math.tan(display.value);

}

function log(){

display.value = Math.log10(display.value);

}

function ln(){

display.value = Math.log(display.value);

}

function pi(){

display.value += Math.PI;

}