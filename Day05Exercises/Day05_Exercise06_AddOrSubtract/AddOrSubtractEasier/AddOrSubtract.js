let firstInput = document.getElementById("firstNumber");
let secondInput = document.getElementById("secondNumber");
let checkBox = document.getElementById("checkBox");
//This event listener is to tell the browser to combine the inputs
//and display the result when the user clicks on the equal sign
document.getElementById("equal").addEventListener('click', combine, false);
//This event listener tells the browser to change the text
//content of the element with the id of "operator" when the user
//clicks on the checkbox
checkBox.addEventListener('change', changeSign, false);
/* Normally, the textContent of the operator is " + " , but when the checkbox is checked, 
this changes the textContent of the operator to " \u2013 "*/
function changeSign(){
    let operator = " + ";
    //You'll need an if statement here to change the value of operator
    //to " \u2013 " if the checkbox is checked.


    /*Then set the textContent of the element with the id of "operator"
    equal to the value of the operator variable.*/

}
/* Normally, this function adds the two numbers in the input together and displays
the result in the output, but when the checkbox is checked, it subtracts the two
numbers in the checkbox and displays the result.*/
function combine() {
    let firstNumber = Number(firstInput.value);
    let secondNumber = Number(secondInput.value);
    //You'll need to put code in here too.
    /*If the checkbox is checked, you should multiply secondNumber by -1 before
     adding the first number to the second and displaying the result
     in the output.*/

}