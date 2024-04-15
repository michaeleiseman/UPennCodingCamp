//Flip a coin 100 times and save the results in the flips array
flips = [];
let numberOfHeads = 0;
for(let i = 0; i < 100; i++) {
    //There is a 50% chance of randomNumber being 0
    //and a 50% chance of randomNumber being 1.
    let randomNumber = Math.floor(2 * Math.random());
    if(randomNumber == 1) {
        flips.push("Heads");
        numberOfHeads = numberOfHeads + 1
    } else {
        flips.push("Tails")
    }
}

document.getElementById("numHeads").textContent = numberOfHeads + " heads";

document.getElementById("numTails").textContent = 100 - numberOfHeads + " tails";
//Initialize the currentStreak (of Heads) to 0
let currentStreak = 0;
//Initialize the longestStreak (of Heads) to 0
let longestStreak = 0;
//Go through every flip

    //If the flip is heads
    
        //increase the value of currentStreak by 1
        
         //If the current streak is larger than the longest streak so far
        
            //make the longest streak equal to the current streak
      

    //but if the flip is tails

        //set the current streak to be 0
 
//Report out the magnitude of the longest streak of heads
document.getElementById("longestStreak").textContent = "The longest streak of heads is " + longestStreak.toString();
//Report out a complete listing of the flips
for(let flip of flips) {
    let newDiv = document.createElement("div");
    newDiv.textContent = flip;
    document.body.appendChild(newDiv);
}