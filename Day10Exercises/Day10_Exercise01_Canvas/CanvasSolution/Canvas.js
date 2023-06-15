let element = document.getElementById("canvas");
let width = element.width;
let height = element.height;
let brickHeight = 10;
let brickWidth = 30;
let gap = 5;
let ctx = element.getContext("2d");
ctx.fillStyle = "black";
//This outer loop moves us DOWN the wall
for(let i = 0; i < height / (brickHeight + gap); i++) {
    let y = gap + i * (brickHeight + gap);
    let xOffset = 0;
    //for every row with an ODD index
    if(i % 2 == 1) {
        //we should start the row one half brick width to the left
        xOffset = -(brickWidth + gap) / 2;
    }
    //This inner loop moves us ACROSS the wall
    for(let x = gap + xOffset; x < width; x = x + brickWidth + gap) {
        ctx.fillRect(x, y, brickWidth, brickHeight);
    }
}