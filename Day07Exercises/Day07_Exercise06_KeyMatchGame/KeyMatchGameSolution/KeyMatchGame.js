
let playButton = document.getElementsByTagName("button")[0];
playButton.addEventListener('click', play, false);
let letterDisplay = document.getElementById("letter");
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let letter
let score;
let scoreDisplay = document.getElementById("score");
let timeDisplay = document.getElementById("timer");
let timer;
//All of this needs to be done when the player STARTS the game
function play() {
    //set the score to 0
    score = 0;
    scoreDisplay.textContent = "0";
    //If the timer is currently running
    if(playButton.textContent === "Start Over") {
        //stop the timer
        clearInterval(timer);
    }
    //Pick a random letter from the letters array
    postRandomLetter();
    //When a user lifts a key, check to see if they clicked the right letter
    document.addEventListener('keyup', letterCompare, false);
    //Set the timer display to 60
    timeDisplay.textContent = "60";
    //Start the timer
    timer = setInterval(changeTime, 1000);
    //Let users know they can reset the game
    playButton.textContent = "Start Over";
}
//after the timer has started, every second the computer must:
function changeTime() {
    //Make the new time left equal to the current time left from the display minus 1
    let timeLeft = (Number(timeDisplay.textContent) - 1).toString();
    //Post that time to the web page
    timeDisplay.textContent = timeLeft;
    //If time is up
    if(timeLeft === "0") {
        //stop the timer
        clearInterval(timer);
        //Display that time is up
        timeDisplay.textContent = "Time's Up!";
        //Disable the keys
        document.removeEventListener('keyup', letterCompare, false);
        //Notify users that they can play again
        playButton.textContent = "Play";
        //clear the letter display
        letterDisplay.textContent = "";
    }
}
//pick a new random letter and display it on the page
function postRandomLetter() {
    letter = letters[Math.floor(letters.length * Math.random())];
    letterDisplay.textContent = letter.toUpperCase();
}
//when a user presses a key we want to compare the letter that they pressed to the random letter displayed
function letterCompare(event) {
    //if the key that the user pressed matches the random letter posted to the page
    if(event.key === letter) {
        //increase the user's score by 1
        score++;
        //display the new score on the page
        scoreDisplay.textContent = score.toString();
        //choose a new random letter and display it on the page
        postRandomLetter();
    }
}
