for(let row = 0; row < 8; row++) {
    for(let col = 0; col < 8; col++) {
        let newSquare = document.createElement("div");
        let color = "black";
        if((row + col) % 2 == 0) {
            color = "red";
        }
        newSquare.className = color + " square";
        document.getElementById("container").appendChild(newSquare);
    }
}