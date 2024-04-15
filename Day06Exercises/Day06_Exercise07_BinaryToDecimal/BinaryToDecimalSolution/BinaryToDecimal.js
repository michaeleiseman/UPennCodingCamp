//create a collection of HTML elements with the class name "bit"
let bits = document.getElementsByClassName("bit");
//loop through each element of this collection
for(let bit of bits) {
    //attach a click event listener that turns on the bit 
    bit.addEventListener('click', turnOnBit, false);
}
//a function that turns on a bit
function turnOnBit() {
    //change the text content of the bit that was clicked on to "1"
    this.textContent = "1";
    //remove the turnOnBit event listener from this bit
    this.removeEventListener('click', turnOnBit, false);
    //attach a click event listener that turns off this bit 
    this.addEventListener('click', turnOffBit, false);
    calculate();
}
function turnOffBit() {
    //change the text content of the bit that was clicked on to "0"
    this.textContent = "0";
    //remove the turnOffBit event listener from this bit
    this.removeEventListener('click', turnOffBit, false);
    //reattach the click event listener that turns on this bit 
    this.addEventListener('click', turnOnBit, false);
    calculate();
}
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