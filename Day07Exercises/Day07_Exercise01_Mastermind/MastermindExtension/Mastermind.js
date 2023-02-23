let resetButton = document.getElementById("reset");
resetButton.addEventListener('click', reset, false);
let secretCode = null;
let colors = ["red", "blue", "yellow", "green", "orange", "purple"];
let selects = document.getElementsByTagName("select")
//The background of each select tag should reflect the color option that the user chooses
for(let select of selects) {
    select.addEventListener('change', changeColor, false);
}
function changeColor() {
    let color = this.value;
    this.style.setProperty("background-color", color);
    this.style.setProperty("color", "white");
    if(color === "yellow") {
        this.style.setProperty("color", "black");
    }
}
let submitButton = document.getElementById("submit");
//reset the game
reset();
function reset() {
    //pick a random code when resetting the game
    pickRandomCode();
    //activate the submit button
    submitButton.addEventListener('click', submit, false);
    submitButton.textContent = "Submit Guess";
    for(let i = document.getElementsByClassName("mmRow").length - 1; i > 0; i--) {
        document.getElementById("gameBoard").removeChild(document.getElementsByClassName("mmRow")[i]);
    }
}
//create a function here that will pick a random 4-color code and
//store it as an array in the variable named secretCode.  For example, a valid value
//for secretCode could be ["blue", "red", "green", "blue"]
function pickRandomCode() {
    //first make sure there is nothing in the secretCode array by making it an empty array
    secretCode = [];
    //push 4 random strings from the colors array into the secretCode array
    for(let i = 0; i < 4; i++) {
        secretCode.push(colors[Math.floor(6 * Math.random())]);
    }
}
function submit() {
    //read the color selections into the guess array
    let guess = [];
    for(let select of selects) {
        guess.push(select.value);
    }
    let feedback = determineFeedback(guess);
    document.getElementById("gameBoard").appendChild(createNewRow(guess, feedback));
    if(feedback.length === 4 && !feedback.some(value => value === "white")) {
        submitButton.removeEventListener("click", submit, false);
        submitButton.textContent = "You won!";
    }
}
//this function returns an array containing two numbers.  The first number represents the number of colors in the user's guess that are in the correct place.  The second number represents the number of colors in the user's guess that are in the wrong place
function determineFeedback(guess) {
    let numberOfCorrectColorsInTheWrongPlace = 0;
    let numberOfCorrectColorsInTheCorrectPlace = 0;
    //step through each POSITION to determine how many colors are in the correct place
    for(let i = 0; i < 4; i++) {
        if(guess[i] === secretCode[i]) {
            numberOfCorrectColorsInTheCorrectPlace++;
        }
    }
    //step through each COLOR to determine how many of the colors are correct (note that this also counts the colors that are in the CORRECT place)
    for(let color of colors) {
        //the number correct for a given color is the lesser of the number of times that color occurs in the answer and the number of times that color occurs in the guess. 
        numberOfCorrectColorsInTheWrongPlace += Math.min(secretCode.filter(c => c === color).length, guess.filter(c => c === color).length);
    }
    //The above method counts colors if they were also in the correct place, so we need to subtract out the number of colors in the correct place from the number of correct colors
    numberOfCorrectColorsInTheWrongPlace -= numberOfCorrectColorsInTheCorrectPlace;
    //The feedback will be an array of strings - either "black" or "white". Each "black" value will represent a color that is in the correct place.
    //Each "white" value will represent a color that is in the wrong place.
    feedback = [];
    for(let i = 0; i < numberOfCorrectColorsInTheCorrectPlace; i++) {
        feedback.push("black");
    }
    for(let i = 0; i < numberOfCorrectColorsInTheWrongPlace; i++) {
        feedback.push("white");
    }
    return feedback;
}
function createNewRow(guess, feedback) {
    let mmRow = document.createElement("div");
    mmRow.className = "mmRow";
    let guessContainer = document.createElement("div");
    guessContainer.className = "guess";
    let feedbackContainer = document.createElement("div");
    feedbackContainer.className = "feedback";
    mmRow.appendChild(guessContainer);
    mmRow.appendChild(feedbackContainer);
    for(let color of guess) {
        let indicator = document.createElement("div");
        indicator.className = color + " indicator";
        guessContainer.appendChild(indicator);
    }
    for(let color of feedback) {
        let indicator = document.createElement("div");
        indicator.className = color + " indicator";
        feedbackContainer.appendChild(indicator);
    }
    return mmRow;
}