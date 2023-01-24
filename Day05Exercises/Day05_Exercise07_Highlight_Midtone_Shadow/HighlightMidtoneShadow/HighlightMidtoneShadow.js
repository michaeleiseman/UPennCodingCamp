let colorBox = document.getElementById("colorBox");
let button = document.getElementById("pickAColor");
button.addEventListener("click", generateColor, false);
function generateColor() {
    /* Obtain random numbers for red, green, and blue. Note that
    you can generate a random number between 0 and 255 inclusive
    by using the formula Math.floor(256 * Math.random()) */
    let r = Math.floor(256 * Math.random());
    let g = Math.floor(256 * Math.random());
    let b = Math.floor(256 * Math.random());
    /* Note that you can change the "background-color" property of the colorBox's
    style attribute to "rgb(" + r + ", " + g + ", " + b + ")" where r, g, and b are
    each a variable whose value is a number between 0 and 255 inclusive*/
    colorBox.style.setProperty("background-color", "rgb(" + r + ", " + g + ", " + b + ")");
    let sum = r + g + b;
    let text = "shadow";
    if(sum > 510) {
        text = "highlight";
    } else if(sum > 255) {
        text = "midtone";
    }
    document.getElementById("output").textContent = "a " + text + " color.";
}