let operator = '';
let previousValue = '';
let currentValue = '';

// STEP 1 Assign HTML elements to variables
document.addEventListener("DOMContentLoaded", function(){

    let clear = document.querySelector("#clear-btn");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e) {
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    })) 

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function(){
        calculate()
        previousScreen.textContent = previousScreen.textContent + " " + currentScreen.textContent;
        currentScreen.textContent = previousValue;
    })

    decimal.addEventListener("click", function() {
        addDecimal()
        currentScreen.textContent = currentValue;
    })
})

function handleNumber(num) {
    if(currentValue.length <= 5) {
        currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
// we have to convert the textContent into numbers to perform the calculation
    if(currentValue != '' && previousValue != '') {
        previousValue = Number(previousValue);
        currentValue = Number(currentValue); 
    
        if(operator === "+") {
            previousValue += currentValue;
        } else if (operator === "-") {
            previousValue -= currentValue;
        } else if(operator === "x") {
            previousValue *= currentValue;
        } else {
            previousValue /= currentValue;
        }

        previousValue = previousValue.toFixed(3);

    }
}

function addDecimal() {
    if(!currentValue.includes(".")) {
        currentValue += '.';
    }
}

