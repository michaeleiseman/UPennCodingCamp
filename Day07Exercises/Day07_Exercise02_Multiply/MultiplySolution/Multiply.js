let button = document.getElementsByTagName("button")[0]
button.addEventListener('click', report, false);
//The report function should call the multiply function to get
//the product of the two numbers in the inputs and then
//write it to the text content of the output span
function report() {
    document.getElementById("output").textContent = multiply().toString();
}
//the multiply function should
function multiply() {
    //get the value of the number in the first input element,
    let firstNumber = Number(document.getElementsByTagName("input")[0].value);
    //get the value of the number in the second input element,
    let secondNumber = Number(document.getElementsByTagName("input")[1].value);
    //and then RETURN the product of these two numbers back to the report function
    return firstNumber * secondNumber;
}