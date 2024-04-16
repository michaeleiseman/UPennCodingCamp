let reset = document.getElementById("reset");
reset.addEventListener('click', resetGame, false);
let secretCode = null;
let colors = ["red", "blue", "yellow", "green", "orange", "purple"];
//reset the game
resetGame();
function resetGame() {
    //pick a random code when resetting the game
    pickRandomCode();
    //note that as we develop the game, more code will need to be added
    //to this function because there is more that we will need to do when
    //we reset the game
}
//create a function here that will pick a random 4-color code and
//store it as an array in the variable named secretCode.  For example, a valid value
//for secretCode could be ["blue", "red", "green", "blue"]
function pickRandomCode() {
    //first make sure there is nothing in the secretCode array by making it an empty array
    secretCode = [];
    //push 4 random strings from the colors array into the secretCode array
    for(let i = 0; i < 4; i++) {
        secretCode.push(colors[Math.floor(colors.length * Math.random())]);
    }
}