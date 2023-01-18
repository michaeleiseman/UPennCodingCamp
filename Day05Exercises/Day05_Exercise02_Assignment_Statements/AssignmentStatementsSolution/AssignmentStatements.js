//Create a variable named hello and set it equal to the element whose id is "howdy"
let hello = document.getElementById("howdy");
//Change this element to display UPenn instead of Hello World.
hello.textContent = "Penn";
//Give this element a class name of "coolStyle".
hello.className = "coolStyle";
//Turn this element invisible
hello.style.setProperty("visibility", "hidden");
//Make it visible again
hello.style.setProperty("visibility", "visible");