let tempInput = document.getElementById("temp");
let saltInput = document.getElementById("salt");
let advisory = document.getElementById("advisory");
//Notice we are using the input event, so we don't need a "submit" button.
//The input event fires everytime the value of the input changes.
tempInput.addEventListener('input', advise, false);
saltInput.addEventListener('input', advise, false);
/* This analyzes whether or not it is safe to drive after a snowfall.
Only if the temperature is greater than 32F or if the temperature
is greater than 15F and the roads are salted is it safe to drive */
function advise() {
    //Your code goes in here.
    let text = " not";
    let className = "red";
    let roadsAreSalted = saltInput.value == "yes";
    let temperature = Number(tempInput.value);
    //if the temperature is greater than 32 OR (the the temperature is greater
    //than or equal to 15 AND the roads are salted)
    
        //then 
        text = "";
        className = "black"

    advisory.textContent = "It is" + text + " safe to drive.";
    advisory.className = className;
}