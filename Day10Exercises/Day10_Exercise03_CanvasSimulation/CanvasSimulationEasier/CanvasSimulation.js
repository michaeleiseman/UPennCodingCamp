let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let velocityInput = document.getElementById("velocity");
velocityInput.addEventListener('change', displayVector, false);
let angleInput = document.getElementById("angle");
angleInput.addEventListener("change", displayVector, false);
document.getElementById("fire").addEventListener('click', fire, false);
let gravityInput = document.getElementById("gravity");
displayVector();
//this displays the arrow showing the initial velocity of the missile
function displayVector() {
    let angle = -Math.PI * angleInput.value / 180;
    let velocity = Number(velocityInput.value) + 30;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.translate(0, canvas.height);
    ctx.rotate(angle);
    ctx.moveTo(0, -15);
    ctx.lineTo(velocity, -15);
    ctx.lineTo(velocity, -30);
    ctx.lineTo(velocity + 40, 0);
    ctx.lineTo(velocity, 30);
    ctx.lineTo(velocity, 15);
    ctx.lineTo(0, 15);
    ctx.rotate(-angle);
    ctx.translate(0, -canvas.height);
    ctx.fill();
}
//we want to make request animation frame a global variable
let raf;
class Ball {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}
let missile = new Ball(0, canvas.height, 0, 0, 20);        
//This function sets the intial position and velocity of the missile and then sets it into motion
function fire() {
    missile.x = 0;
    missile.y = canvas.height;
    //break the velocity into x and y components
    missile.dx = velocityInput.value * Math.cos(Math.PI * angleInput.value / 180) / 10;
    missile.dy = -velocityInput.value * Math.sin(Math.PI * angleInput.value / 180) / 10;
    moveMissile();
}
/*** YOU'LL NEED TO FILL IN THIS FUNCTION THAT CONTROLS THE MOVEMENT OF THE MISSILE ***/
function moveMissile() {
    /* CLEAR THE ENTIRE CANVAS */


    //gravity should increase the vertical component of the velocity of the missile
    //by a constant amount every animation frame
    missile.dy = missile.dy + Number(gravityInput.value) / 1000;
    //for every new animation frame, the vertical coordinate of the missile
    //changes by an amount that is proportional to its current vertical velocity.
    missile.y = missile.y + missile.dy;
    //the horizontal coordinate of the missile changes by a constant amount every animation frame.
    missile.x = missile.x + missile.dx;
    //display the vector (arrow)
    displayVector();
    //draw the missile
    missile.draw();
    //if the missile hits the bottom wall of the canvas ( y > canvas.height) while
    //traveling downward (missle.dy > 0) or the right wall of the canvas (x > canvas.width)
    
        //stop requesting animation frames
        
    //otherwise request a new animation frame   
    
}
   