const units = {

length: ["meters","kilometers","miles"],

weight: ["grams","kilograms","pounds"],

temperature: ["celsius","fahrenheit"]

};

function updateUnits(){

const category = document.getElementById("category").value;

const from = document.getElementById("fromUnit");

const to = document.getElementById("toUnit");

from.innerHTML = "";
to.innerHTML = "";

units[category].forEach(unit => {

let option1 = document.createElement("option");
option1.value = unit;
option1.text = unit;

let option2 = document.createElement("option");
option2.value = unit;
option2.text = unit;

from.add(option1);
to.add(option2);

});

}

updateUnits();

function convert(){

const value = parseFloat(document.getElementById("inputValue").value);

const from = document.getElementById("fromUnit").value;

const to = document.getElementById("toUnit").value;

let result;

if(from === to){

result = value;

}

else if(from === "meters" && to === "kilometers") result = value / 1000;
else if(from === "kilometers" && to === "meters") result = value * 1000;
else if(from === "meters" && to === "miles") result = value * 0.000621371;
else if(from === "miles" && to === "meters") result = value / 0.000621371;

else if(from === "grams" && to === "kilograms") result = value / 1000;
else if(from === "kilograms" && to === "grams") result = value * 1000;
else if(from === "kilograms" && to === "pounds") result = value * 2.20462;
else if(from === "pounds" && to === "kilograms") result = value / 2.20462;

else if(from === "celsius" && to === "fahrenheit") result = value * 9/5 + 32;
else if(from === "fahrenheit" && to === "celsius") result = (value - 32) * 5/9;

document.getElementById("result").innerText = result;

}
function goBack() {
    window.location.href = "../../index.html";
}