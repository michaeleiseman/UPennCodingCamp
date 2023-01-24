let colorBox = document.getElementById("colorBox");
let button = document.getElementById("pickAColor");
button.addEventListener("click", generateColor, false);
function generateColor() {
    // Obtain random numbers for red, green, and blue.
    let r = Math.floor(256 * Math.random());
    let g = Math.floor(256 * Math.random());
    let b = Math.floor(256 * Math.random());
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