let box = document.getElementById("box");
/* Attach an event listener to the red button that will turn the box red
when the user clicks on the red button. */
document.getElementById("red").addEventListener("click", turnRed, false);
/* Attach an event listener to the blue button that will turn the box blue
when the user clicks on the blue button. */
document.getElementById("blue").addEventListener("click", turnBlue, false);
//create a function that turns the box red
function turnRed() {
    box.className = "red";
}
//create a function that turns the box blue
function turnBlue() {
    box.className = "blue";
}