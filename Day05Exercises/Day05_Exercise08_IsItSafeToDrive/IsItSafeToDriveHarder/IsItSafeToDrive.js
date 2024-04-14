//This script should advise the user whether or not it is safe
//to drive whenever they change the value of either input
//on the page
let tempInput = document.getElementById("temp");
let saltInput = document.getElementById("salt");
//Notice we are using the input event, so we don't need a "submit" button.
//The input event fires everytime the value of the input changes.
tempInput.addEventListener('input', advise, false);
saltInput.addEventListener('input', advise, false);
/* This analyzes whether or not it is safe to drive after a snowfall.
Only if the temperature is greater than 32F or if the temperature
is greater than 15F and the roads are salted is it safe to drive */
function advise() {
    //Your code goes in here.
    
    
}