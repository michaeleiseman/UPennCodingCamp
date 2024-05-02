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
            //CALL A METHOD HERE THAT TURNS OFF myCar's LIGHTS

            return;
        } 
        //CALL A METHOD HERE THAT TURNS ON myCar's LIGHTS

        //set the myCar's lights to toggle every half second
        this.timer = setInterval(function() {myCar.toggleLights()}, 500);
        this.flashersAreOn = true;
    },
    toggleLights: function() {
        if(this.lightsAreOn) {
            //CALL A METHOD HERE THAT TURNS OFF myCar's LIGHTS
           
            return;
        }
        //CALL A METHOD HERE THAT TURNS ON myCar's LIGHTS
        
    },
    //CREATE A METHOD HERE THAT TURNS ON myCar's LIGHTS
    //note that you can access the left light using this.lights[0]
    //and the right light using this.lights[1]
    





    //CREATE A METHOD HERE THAT TURNS OFF myCar's LIGHTS
    





}
document.getElementsByTagName("button")[0].addEventListener('click', function() {myCar.toggleFlashers()}, false);