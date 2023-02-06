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
//Initialize the currentStreak to 0
let currentStreak = 0;
//Initialize the longestStreak to 0
let longestStreak = 0;
//Go through every flip
for(let flip of flips) {
    //If the flip is heads
    if(flip == "Heads") {
        //increase the value of currentStreak by 1
        currentStreak++;
         //If the current streak is larger than the longest streak so far
        if(currentStreak > longestStreak) {
            //make the longest streak equal to the current streak
            longestStreak = currentStreak;
        }
    //but if the flip is tails
    } else {
        //set the current streak to be 0
        currentStreak = 0;
    }
}

document.getElementById("longestStreak").textContent = "The longest streak of heads is " + longestStreak.toString();
//Report out a complete listing of the flips
for(let flip of flips) {
    let newDiv = document.createElement("div");
    newDiv.textContent = flip;
    document.body.appendChild(newDiv);
}

//Note that the code below is another way to do this assignment
//For this alternative, the flips array is a sequence of Boolean
//values instead of text strings.
/*
flips = [];
let numberOfHeads = 0;
for(let i = 0; i < 100; i++) {
    flips.push(Math.floor(2 * Math.random()) == 1);
    if(flips[i]) {
        numberOfHeads = numberOfHeads + 1;
    }
}

document.getElementById("numHeads").textContent = numberOfHeads + " heads";
document.getElementById("numTails").textContent = 100 - numberOfHeads + " tails";

let currentStreak = 0;
let longestStreak = 0;
for(let flipIsHeads of flips) {
    if(flipIsHeads) {
        currentStreak++;
        if(currentStreak > longestStreak) {   
            longestStreak = currentStreak;
        }
    } else {
        currentStreak = 0;
    }
}
document.getElementById("longestStreak").textContent = "The longest streak of heads is " + longestStreak.toString();
for(let flipIsHeads of flips) {
    let text = "Tails";
    if(flipIsHeads) {
        text = "Heads"
    }
    let newDiv = document.createElement("div");
    newDiv.textContent = text;
    document.body.appendChild(newDiv);
}*/