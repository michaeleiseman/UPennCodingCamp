//Randomly pick a number between 0 and 99 inclusive for the user to guess
//Note that you can use Math.floor(100 * Math.random()) for this
let target = Math.floor(100 * Math.random());
document.getElementById("guess").addEventListener('click', evaluateGuess, false);
function evaluateGuess() {
    //obtain the user's guess from the current value of the input
    let userGuess = Number(document.getElementById("userGuess").value);
    let text = "exactly right!"
    //if the guess is too high
    if(userGuess > target) {
        //report that the guess was too high.
        text = "too high.";
    }
    //if the guess is too low
    if(userGuess < target) {
        //report that the guess was too low.
        text = "too low."
    }
    //otherwise report that the guess was exactly right
    let report = document.createElement("p");
    report.textContent = userGuess + " is " + text;
    document.body.appendChild(report);

}
