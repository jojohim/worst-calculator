//SETTING UP
const secondNumber = document.getElementById('secondnumber').value;
const operatorValue = document.getElementById('operator').value;
let result = document.querySelector('#results > li').innerHTML;
const calculateButton = document.getElementById('calculate');


function calculate() {
    //console.log("function is called");
    const firstNumber = document.getElementById('firstnumber').value;
    const secondNumber = document.getElementById('secondnumber').value;
    console.log(firstNumber);
    console.log(secondNumber);
if(operatorValue == 'add') {
    result = firstNumber + secondNumber;
    console.log(result);
}
}

calculateButton.addEventListener("click", calculate);

//console.log(firstNumber);
//console.log(secondNumber);


