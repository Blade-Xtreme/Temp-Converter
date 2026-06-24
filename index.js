const textBox = document.getElementById("textBox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toF.checked){
        temp = Number(textBox.value);
        temp = ((9/5) * temp) + 32;
        result.textContent = parseFloat(temp.toFixed(2) + "°F");
    }

    else if(toC.checked){
        temp = Number(textBox.value);
        temp = 5/9 * (temp - 32);
        result.textContent = parseFloat(temp.toFixed(2) + "°C");
    }

    else{
        result.textContent = "Select a unit";
    }
}