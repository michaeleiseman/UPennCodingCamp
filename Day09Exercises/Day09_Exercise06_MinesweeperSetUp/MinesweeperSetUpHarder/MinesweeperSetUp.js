class GameBoard {
    constructor(width, height, htmlGrid) {
        this.width = width;
        this.height = height;
        this.htmlGrid = htmlGrid;
        //this sets the width of the css grid 
        htmlGrid.style.setProperty("grid-template-columns", "repeat(" + width + ", 30px)");
        this.cells = this.constructCells(htmlGrid);
    }
    //construct the cell objects and put them in a 2-dimensional array
    //that corresponds to their position on the grid
    //[
    //  [cells[0][0], cells[0][1], cells[0][2] ... cells[0][width - 2], cells[0][width - 1]],
    //  [cells[1][0], cells[1][1], cells[1][2] ... cells[1][width - 2], cells[1][width - 1]],
    //  [cells[2][0], cells[2][1], cells[2][2] ... cells[2][width - 2], cells[2][width - 1]],
    //                                  :
    //                                  :
    //  [cells[height - 2][0], cells[height - 2][1], cells[height - 2][2] ... cells[height - 2][width - 2], cells[height - 2][width - 1]], 
    //  [cells[height - 1][0], cells[height - 1][1], cells[height - 1][2] ... cells[height - 1][width - 2], cells[height - 1][width - 1]]
    //]  
    constructCells(htmlGrid) {
        let cells = []
        for(let rowIndex = 0; rowIndex < this.height; rowIndex++) {
            let row = [];
            for(let colIndex = 0; colIndex < this.width; colIndex++) {
                row.push(new Cell(rowIndex, colIndex, htmlGrid));
            }
            cells.push(row);
        }
        return cells;
    }
    /******WRITE A METHOD FOR THE GAMEBOARD HERE THAT CALLS A CELL METHOD THAT
    WILL DETERMINE THE BOMB COUNT FOR EACH CELL IN THE GRID. IF THE BOMB COUNT
    IS GREATER THAN 0, IT SHOULD PUBLISH THE BOMB COUNT IN THAT CELL USING THE
    cell.publishBombCount() method.*******/
    

    //this function returns the cell specified by the indicies row, col
    //if either row or col are out of range for the board, it will return false
    getCell(row, col) {
        if(row < 0 || row >= this.height || col < 0 || col >= this.width) {
            return false;
        }
        return this.cells[row][col];
    }
}
class Cell {
    constructor(rowIndex, colIndex, htmlGrid) {
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
        this.htmlGrid = htmlGrid;
        this.element = this.publishCell();
        this.hasBomb = Math.random() < 0.1;
        if(this.hasBomb) {this.placeBomb();}
        this.bombCount = 0;
    }
    //This method places the html element representing a bomb into this cell
    placeBomb() {
        let bomb = document.createElement("p");
        bomb.className = "bomb";
        bomb.textContent = "•";
        this.element.appendChild(bomb);
    }
    //This method places the html element for this cell into the grid
    publishCell() {
        let element = document.createElement("div");
        element.className = "cell";
        this.htmlGrid.appendChild(element);
        element.cell = this;
        return element;
    }
    /***** WRITE YOUR METHOD TO DETERMINE THE BOMB COUNT IN THIS CELL HERE *********/
    /***** NOTE THAT bombCount AND hasBomb ARE PROPERTIES OF THIS CELL AND
    ALL OF ITS NEIGHBORING CELLS*********/
    


        


    publishBombCount() {
        let p = document.createElement("p");
        p.textContent = this.bombCount.toString();
        this.element.appendChild(p);
    }
}
let gameBoard = new GameBoard(20, 20, document.getElementById("grid"));
/****** CALL YOUR GAMEBOARD METHOD HERE THAT WRITES THE BOMB COUNTS FOR ALL CELLS IN THE
GAME BOARD THAT ARE WITHIN 1 CELL OF AT LEAST 1 BOMB *******/
