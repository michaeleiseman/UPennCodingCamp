let colorBox = document.getElementById("colorBox");
let button = document.getElementById("pickAColor");
button.addEventListener("click", generateColor, false);
function generateColor() {
    // Obtain random numbers for red, green, and blue.
    let r = Math.floor(256 * Math.random());
    let g = Math.floor(256 * Math.random());
    let b = Math.floor(256 * Math.random());
    colorBox.style.setProperty("background-color", "rgb(" + r + ", " + g + ", " + b + ")");
    //make a variable named "sum" that is the sum of red, green and blue values.
    let sum = r + g + b;
    //the default will be a shadow color
    let text = "shadow";
    //if sum is greater than 510
    if(sum > 510) {
        //label the color as a highlight color in the output span
        text = "highlight";
    //if sum is greater than 255
    } else if(sum > 255) {
        //label the color as a midtone color in the output span
        text = "midtone";
    }
    document.getElementById("output").textContent = "a " + text + " color.";
}