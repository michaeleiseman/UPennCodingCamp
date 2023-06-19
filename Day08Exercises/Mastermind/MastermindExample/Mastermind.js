let resetButton = document.getElementById("reset");
resetButton.addEventListener('click', reset, false);
let secretCode = null;
let colors = ["red", "blue", "yellow", "green", "orange", "purple"];
let selects = document.getElementsByTagName("select");
//The background of each select tag should reflect the color option that the user chooses
for(let select of selects) {
    select.addEventListener('change', changeColor, false);
}
//change the background color of the select tag to match its value
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
    //clear any rows from a previous game if they exist
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
    //determine the feedback to give the user based on their guess
    let feedback = determineFeedback(guess);
    //append the row containing the guess indicators and the feedback indicators to the game board 
    document.getElementById("gameBoard").appendChild(createNewRow(guess, feedback));
    //if the feedback array is 4 colors long and there are no "white"s in the array, the user has won, so
    if(feedback.length === 4 && !feedback.some(value => value === "white")) {
        //deactivate the submit button
        submitButton.removeEventListener("click", submit, false);
        //let the user know they have won.
        submitButton.textContent = "You won!";
    }
}
//this function returns an array containing a series of colors - either "black" or "white". Each "black" string represents a color that the user guessed correctly in the right place.  Each "white" string represents a correctly guessed color, but in the wrong place.
function determineFeedback(guess) {
    let numberOfCorrectColorsInTheWrongPlace = 0;
    let numberOfCorrectColorsInTheCorrectPlace = 0;
    let numberOfCorrectColors = 0;
    let feedback = [];
    //step through each POSITION to determine how many colors are in the correct place
    for(let i = 0; i < 4; i++) {
        if(guess[i] === secretCode[i]) {
            numberOfCorrectColorsInTheCorrectPlace++;
            feedback.push("black");
        }
    }
    //step through each COLOR to determine how many of the colors are correct (note that this also counts the colors that are in the CORRECT place)
    for(let color of colors) {
        //the number correct for a given color is the lesser of the number of times that color occurs in the answer and the number of times that color occurs in the guess. 
        numberOfCorrectColors += Math.min(secretCode.filter(c => c === color).length, guess.filter(c => c === color).length);
    }
    //The above method counts colors if they were also in the correct place, so we need to subtract out the number of colors in the correct place from the number of correct colors
    numberOfCorrectColorsInTheWrongPlace = numberOfCorrectColors - numberOfCorrectColorsInTheCorrectPlace;
    //Now place a "white" in the feedback container for each correct color in the wrong place
    for(let i = 0; i < numberOfCorrectColorsInTheWrongPlace; i++) {
        feedback.push("white");
    }
    return feedback;
}
//create the elements indicating the guess and its feedback to add to the game board
function createNewRow(guess, feedback) {
    //create a row with the class name "mmRow"
    let mmRow = document.createElement("div");
    mmRow.className = "mmRow";
    //create a container for the guess indicators
    let guessContainer = document.createElement("div");
    guessContainer.className = "guess";
    //create a container for the feedback indicators
    let feedbackContainer = document.createElement("div");
    feedbackContainer.className = "feedback";
    //put the guess container in the row
    mmRow.appendChild(guessContainer);
    //put the feedback container in the row
    mmRow.appendChild(feedbackContainer);
    //create an indicator for each color in the guess array
    for(let color of guess) {
        let indicator = document.createElement("div");
        indicator.className = color + " indicator";
        //and put it in the guess container
        guessContainer.appendChild(indicator);
    }
    //create an indicator for each color in the feedback array
    for(let color of feedback) {
        let indicator = document.createElement("div");
        indicator.className = color + " indicator";
        //and put it in the feedback container
        feedbackContainer.appendChild(indicator);
    }
    return mmRow;
}