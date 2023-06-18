let firstInput = document.getElementById("firstNumber");
let secondInput = document.getElementById("secondNumber");
let checkBox = document.getElementById("checkBox");
document.getElementById("equal").addEventListener('click', combine, false);
checkBox.addEventListener('change', changeSign, false);
/* Normally, the textContent of the operator is " + " , but when the checkbox is checked, 
this changes the textContent of the operator to " \u2013 "*/
function changeSign(){
    //You'll need to put code in here

}
/* Normally, this function adds the two numbers in the input together and displays
the result in the output, but when the checkbox is checked, it subtracts the two
numbers in the checkbox and displays the result.*/
function combine() {
    let firstNumber = Number(firstInput.value);
    let secondNumber = Number(secondInput.value);
    //You'll need to put code in here too.
    //If the checkbox is checked, you should multiply secondNumber by -1 before adding the first number to the second.

}