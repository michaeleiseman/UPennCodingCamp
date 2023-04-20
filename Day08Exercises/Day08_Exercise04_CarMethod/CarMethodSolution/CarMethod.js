let myCar = {
    lights: document.getElementsByClassName("light"),
    flashersAreOn: false,
    lightsAreOn: false,
    timer: null,
    toggleFlashers: function () {
        if(myCar.flashersAreOn) {
            //stop toggling the car lights
            clearInterval(myCar.timer);
            myCar.flashersAreOn = false;
            //turn off myCar's lights here
            myCar.turnLightsOff();
            return;
        } 
        //turn on myCar's lights here
        myCar.turnLightsOn();
        //set the myCar's lights to toggle every half second
        myCar.timer = setInterval(myCar.toggleLights, 500);
        myCar.flashersAreOn = true;
    },
    toggleLights: function() {
        if(myCar.lightsAreOn) {
            //turn off myCar's lights here
            myCar.turnLightsOff();
            return;
        }
        //turn on myCar's lights here
        myCar.turnLightsOn();
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
document.getElementsByTagName("button")[0].addEventListener('click', myCar.toggleFlashers, false);