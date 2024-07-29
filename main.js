"use strict"
function calculateMortgage(){
    let percent = Number(document.getElementById("percent").value) / 100;
    let contribution =  Number(document.getElementById("contribution").value);
    let amount =  Number(document.getElementById("amount").value);
    let date =  document.getElementById("date").value;
    let resTask1 = calculateTotalMortgage(percent, contribution, amount, date);
    document.getElementById("mortageResult").innerText = resTask1;
}

function sayHello(){
    let name = document.getElementById("personName").value,
    resTask2 = getGreeting(name);
    document.getElementById("helloResult").innerText = resTask2;

}