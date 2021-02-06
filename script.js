//SETTING UP
const calculateButton = document.getElementById('calculate');
const clearResultButton = document.getElementById('clear');
let result = document.getElementById('results').lastChild.innerHTML;

function clearResults () {
    result = 0;
    document.getElementById('firstnumber').value = "";
    document.getElementById('secondnumber').value ="";
    document.getElementById('operator').value ="add";
    document.getElementById('final-result').innerHTML= "0";
    document.getElementById('decimals').value ="0";
    document.getElementById('doround').checked = false;


 console.log("result was cleared");
}

function calculate() {

    //SETTING UP VALUES

    const firstNumber = parseInt(document.getElementById('firstnumber').value);
    const secondNumber = parseInt(document.getElementById('secondnumber').value);
    const operatorValue = document.getElementById('operator').value;

    console.log(firstNumber);
    console.log(secondNumber);

    //CALCULATING, OBTAINING RESULT, EXPORTING RESULT TO DIFFERENT FUNCTION

if(operatorValue == 'add') {
    result = firstNumber + secondNumber;
    displayDecimals(result);
}

if(operatorValue == 'sub') {
    result = firstNumber - secondNumber;
    displayDecimals(result);
}

if(operatorValue == 'mul') {
    result = firstNumber * secondNumber;
    displayDecimals (result);
}

if(operatorValue == 'div') {
    result = firstNumber / secondNumber;
    displayDecimals(result);

}
}

//CHECKING THE DECIMALS FIELD

function displayDecimals(result) {
    let decimal = parseInt(document.getElementById('decimals').value);
    const checkBox = document.getElementById('doround');

    //IF CHECKBOX IS TICKED DO THIS
    if (checkBox.checked == true) {
        var finalResult = result.toFixed(decimal);
        displayFinalResult(finalResult);
    }

    //OTHERWISE DO THIS
    else { displayFinalResult(result); }
}

//IMPORT FINAL RESULT AFTER DESIRED DECIMALS ARE ADDED
function displayFinalResult(finalResult) {
    console.log(finalResult);
    document.querySelector('#results > li').innerHTML= finalResult;
}

calculateButton.addEventListener("click", calculate);
clearResultButton.addEventListener("click", clearResults);



