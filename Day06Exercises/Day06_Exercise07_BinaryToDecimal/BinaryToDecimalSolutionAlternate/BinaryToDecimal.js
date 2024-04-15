//create a collection of HTML elements with the class name "bit"
let bits = document.getElementsByClassName("bit");
//loop through each element of this collection
for(let bit of bits) {
    //attach a click event listener that toggles the bit 
    bit.addEventListener('click', toggleBit, false);
}
//a function that toggles on a bit
function toggleBit() {
    this.textContent = Number(!Number(this.textContent)).toString();
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