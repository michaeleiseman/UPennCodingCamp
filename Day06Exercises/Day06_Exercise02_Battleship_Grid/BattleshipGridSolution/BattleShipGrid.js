//for each of the 10 rows
for(let row = 0; row < 10; row++){
    //you want to place 10 divs
    //for each div
    for(let col = 0; col < 10; col++) {
        //create the div
        let cell = document.createElement("div");
        //give it a class name of cell
        cell.className = "cell";
        //create another div
        let label = document.createElement("div");
        //give it a class name of "label"
        label.className = "label";
        //The text content for the label should be the row letter + the column number
        label.textContent = String.fromCharCode(row + 65) + (1 + col);
        //append the label into the cell.
        cell.appendChild(label);
        //append the cell into the container.
        document.getElementById("container").appendChild(cell);
    }
}