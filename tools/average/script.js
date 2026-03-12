function generateInputs() {
const num = parseInt(document.getElementById("numbers").value);
const form = document.getElementById("numbersForm");
form.innerHTML = "";

for(let i=1;i<=num;i++){
    const div = document.createElement("div");
    div.innerHTML = `
    <label>Number ${i}:</label>
    <input type="number" class="value" required>
    <br>`;
    form.appendChild(div);
}

document.getElementById("calcBtn").style.display = "inline-block";
}

function calculateAverage() {
const values = document.querySelectorAll(".value");

let sum = 0;
for(let i=0;i<values.length;i++){
    sum += parseFloat(values[i].value);
}

const average = (sum/values.length).toFixed(2);
document.getElementById("result").innerText = `The Average is: ${average}`;
}
function goBack() {
    window.location.href = "../../index.html";
}