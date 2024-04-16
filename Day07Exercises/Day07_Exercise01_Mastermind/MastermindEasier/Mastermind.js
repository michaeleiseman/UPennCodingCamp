let reset = document.getElementById("reset");
reset.addEventListener('click', resetGame, false);
let secretCode = null;
let colors = ["red", "blue", "yellow", "green", "orange", "purple"];
/****  WRITE A COMMAND HERE THAT WILL RESET THE GAME USING resetGame() *****/

function resetGame() {
    /****  WRITE A COMMAND HERE THAT WILL PICK A RANDOM CODE THE GAME *****/
    /****  USING THE FUNCTION YOU DEFINE BELOW *****/

}

/*** CREATE A FUNCTION HERE THAT WILL PICK A RANDOM 4-COLOR CODE AND ****/
/***** STORE IT AS AN ARRAY IN THE VARIABLE NAMED secretCode. ******/
//For example, a valid value for secretCode could be ["blue", "red", "green", "blue"]

    //first make sure there is nothing in the secretCode array by making it an empty array
    secretCode = [];
    //push 4 random strings from the colors array into the secretCode array
    for(let i = 0; i < 4; i++) {
        secretCode.push(colors[Math.floor(colors.length * Math.random())]);
    }
    