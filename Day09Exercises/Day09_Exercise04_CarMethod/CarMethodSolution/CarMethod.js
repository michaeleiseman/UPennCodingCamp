let myCar = {
    lights: document.getElementsByClassName("light"),
    flashersAreOn: false,
    lightsAreOn: false,
    timer: null,
    toggleFlashers: function () {
        if(this.flashersAreOn) {
            //stop toggling the car lights
            clearInterval(this.timer);
            this.flashersAreOn = false;
            //turn off myCar's lights here
            this.turnLightsOff();
            return;
        } 
        //turn on myCar's lights here
        this.turnLightsOn();
        //set the myCar's lights to toggle every half second
        this.timer = setInterval(function() {myCar.toggleLights()}, 500);
        this.flashersAreOn = true;
    },
    toggleLights: function() {
        if(this.lightsAreOn) {
            //turn off myCar's lights here
            this.turnLightsOff();
            return;
        }
        //turn on myCar's lights here
        this.turnLightsOn();
    },
    turnLightsOn: function() {
        this.lights[0].style.setProperty("background-color", "red");
        this.lights[1].style.setProperty("background-color", "red");
        this.lightsAreOn = true;
    },
    turnLightsOff: function() {
        this.lights[0].style.setProperty("background-color", "black");
        this.lights[1].style.setProperty("background-color", "black");
        this.lightsAreOn = false;
    },
}
document.getElementsByTagName("button")[0].addEventListener('click', function() {myCar.toggleFlashers()}, false);