//create a collection of HTML elements with the class name "bit"

//loop through each element of this collection

    //attach a click event listener that turns on the bit 
    

//a function that turns on a bit
function turnOnBit() {
    //change the text content of the bit that was clicked on to "1"
    
    //remove the turnOnBit event listener from this bit
    
    //attach a click event listener that turns off this bit 
    

    calculate();
}
function turnOffBit() {
    //change the text content of the bit that was clicked on to "0"
    
    //remove the turnOffBit event listener from this bit
    
    //reattach the click event listener that turns on this bit 

    
    calculate();
}
//a function that looks at the current state of the bits
//and calculates the decimal number equivalent
function calculate() {
    let sum = 0;
    let text = "";
    for(let bit of bits) {
        sum = sum + Number(bit.textContent) * Number(bit.id);
        if(bit != bits[0]) {
            text = text + " + "
        }
        text = text + "(" +bit.textContent + "×" + bit.id + ")";
    }
    text = text + " = " + sum.toString();
    document.getElementById("output").textContent = text;
}