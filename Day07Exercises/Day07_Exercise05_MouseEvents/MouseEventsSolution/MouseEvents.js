let image = document.getElementsByTagName("img")[0];
//attach a click event listener to the image
image.addEventListener('click', identifyObject, false);
//The callback function uses the mouse coordinates
//from the event to determine if the user clicked on any of the rectangles.
//This function reports in the output element if the user clicked
//on the red, green, or blue rectangle or if the user clicked on
//empty space.
function identifyObject(event) {
    let text = "empty space.";
    let x = event.offsetX;
    let y = event.offsetY;
    if(x >= 200 && x <= 250 && y >= 50 && y <= 150) {
        text = "the blue rectangle.";
    }
    if(x >= 300 && x <= 600 && y >= 200 && y <= 275) {
        text = "the red rectangle.";
    }
    if(x >= 100 && x <= 300 && y >= 400 && y <= 550) {
        text = "the green rectangle.";
    }
    document.getElementById("output").textContent = "You clicked on " + text;
}