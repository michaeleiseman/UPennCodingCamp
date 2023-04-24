let element = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = 400;
let height = 400;
let brickHeight = 10;
let brickWidth = 30;
let gap = 5;
ctx.fillStyle = "black";
for(let i = 0; i < height / (brickHeight + gap); i++) {
    let y = gap + i * (brickHeight + gap);
    let xOffset = 0;
    if(i % 2 == 1) {
        xOffset = -(brickWidth + gap) / 2;
    }
    for(let x = gap + xOffset; x < width; x = x + brickWidth + gap) {
        ctx.fillRect(x, y, brickWidth, brickHeight);
    }
}