function calculateTotalMortgage(percent, contribution, amount, date) {
   
    if(isNaN(parseInt(percent))){
        return `Параметр "процентная ставка" содержит неправильное значение "${document.getElementById("percent").value}".`;
    }
    if(isNaN(parseInt(contribution))){
        return `Параметр "Начальный взнос" содержит неправильное значение "${document.getElementById("contribution").value}".`;
    }
    if(isNaN(parseInt(amount))){
        return `Параметр "Общая стоимость" содержит неправильное значение "${document.getElementById("amount").value}".`;
    }

    const loanBody = amount - contribution,
    today = new Date(),
    dateInput = new Date(date),    
    monthDiff = Math.abs((today.getFullYear() - dateInput.getFullYear())*12 + today.getMonth() - dateInput.getMonth()),
    monthPayment = loanBody*((percent/12)+(percent/12)/((Math.pow(1+percent/12,monthDiff))-1)),
    totalLoanAmount = monthDiff * monthPayment;
    return totalLoanAmount.toFixed(2);
    
    }

function getGreeting(name) {
    const greeting = `Привет, мир! Меня зовут ${name||"Аноним"}.`;
    return greeting;
}