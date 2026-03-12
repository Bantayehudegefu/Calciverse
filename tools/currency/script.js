async function convert(){

const amount = document.getElementById("amount").value;

const from = document.getElementById("fromCurrency").value;

const to = document.getElementById("toCurrency").value;

if(amount === ""){

alert("Please enter an amount");

return;

}

try{

const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);

const data = await response.json();

const rate = data.rates[to];

const result = amount * rate;

document.getElementById("result").innerText =
`${amount} ${from} = ${result.toFixed(2)} ${to}`;

}

catch{

document.getElementById("result").innerText = "Error fetching exchange rate";

}

}
function goBack() {
    window.location.href = "../../index.html";
}