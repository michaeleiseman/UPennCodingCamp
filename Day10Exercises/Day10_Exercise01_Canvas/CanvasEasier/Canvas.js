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
    //We can calculate the y position of all bricks in this row by
    let y = gap + i * (brickHeight + gap);
    //for every row with an ODD index, we want to OFFSET the row horizontally by

    var xOffset = -(brickWidth + gap) / 2;

    //for every row with an EVEN index, we want this xOffset to be zero.

    
    /* Here we need an inner loop moves us ACROSS the wall.
    This loop should control the horizontal position of each brick for each row.
    It should initially set the x position to be at gap + xOffset.  For each
    brick, the horizontal position should increase by gap + brickWidth.
    The x position should be no greater than width. */

        //In this loop you'll need to fill a rectangle into the ctx.  It's upper-left-hand
        //corner should be at (x, y), and it should have a width of brickWidth
        //and a height of brickHeight.
}