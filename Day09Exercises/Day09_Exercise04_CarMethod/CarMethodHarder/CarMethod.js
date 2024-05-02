let myCar = {
    lights: document.getElementsByClassName("light"),
    timer: null,
    //create a toggleFlashers METHOD for myCar here that turns on the flashers if the flashers
    //are off and turns off the flashers if the flashers are on.
    
    //HINT: When turning on the flashers, it will be helpful to make this.timer 
    //equal to a setInterval that changes the color of the lights every 500 miliseconds.
    
    //note that you can access the left light using this.lights[0]
    //and the right light using this.lights[1]



}
document.getElementsByTagName("button")[0].addEventListener('click', function() {myCar.toggleFlashers()}, false);