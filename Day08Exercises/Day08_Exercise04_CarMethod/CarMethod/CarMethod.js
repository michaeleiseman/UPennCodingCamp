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
            //CALL A METHOD HERE THAT TURNS OFF myCar's LIGHTS

            return;
        } 
        //CALL A METHOD HERE THAT TURNS ON myCar's LIGHTS

        //set the myCar's lights to toggle every half second
        myCar.timer = setInterval(myCar.toggleLights, 500);
        myCar.flashersAreOn = true;
    },
    toggleLights: function() {
        if(myCar.lightsAreOn) {
            //CALL A METHOD HERE THAT TURNS OFF myCar's LIGHTS
           
            return;
        }
        //CALL A METHOD HERE THAT TURNS ON myCar's LIGHTS
        myCar.turnLightsOn();
    },
    //CREATE A METHOD HERE THAT TURNS ON myCar's LIGHTS
    //note that you can access the left light using this.lights[0]
    //and the right light using this.lights[1]
    





    //CREATE A METHOD HERE THAT TURNS OF myCar's LIGHTS
    





}
document.getElementsByTagName("button")[0].addEventListener('click', myCar.toggleFlashers, false);