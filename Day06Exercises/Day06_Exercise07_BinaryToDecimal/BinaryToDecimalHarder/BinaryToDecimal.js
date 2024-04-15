//create a collection of HTML elements with the class name "bit"
let bits = document.getElementsByClassName("bit");
//When a user clicks on a bit displaying a "0", it should change to a "1"
//and then use the calculate() command to post the decimal result to the page.
//When a user clicks on a bit displaying a "1", it should change to a "0".
//and then use the calculate() command to post the decimal result to the page.


//a function that looks at the current state of the bits,
//calculates the decimal number equivalent while
//creating a text string showing the calculation.
//It then reports this calculation to the user.
function calculate() {
    let sum = 0;
    let text = "";
    for(let bit of bits) {
        sum = sum + Number(bit.textContent) * Number(bit.getAttribute("value"));
        if(bit != bits[0]) {
            text = text + " + "
        }
        text = text + "(" + bit.textContent + "×" + bit.getAttribute("value") + ")";
    }
    text = text + " = " + sum.toString();
    document.getElementById("output").textContent = text;
}